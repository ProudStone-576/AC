import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { sendMail } from "@/lib/mail"
import { rateLimit, rateLimitHeaders, getIP } from "@/lib/rate-limit"

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}

export async function POST(request: NextRequest) {
  // Rate limit: 5 submissions per hour per IP
  const ip = getIP(request)
  const rl = rateLimit(`contact:${ip}`, 5, 60 * 60 * 1000)
  if (!rl.success) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429, headers: rateLimitHeaders(rl, 5) },
    )
  }

  try {
    const body = await request.json()
    const { first_name, last_name, email, company, job_title, inquiry_type, message } = body

    // ── Validation ────────────────────────────────────────────────────────────
    if (!first_name?.trim() || !last_name?.trim()) {
      return NextResponse.json({ error: "First and last name are required" }, { status: 400 })
    }
    if (first_name.length > 100 || last_name.length > 100) {
      return NextResponse.json({ error: "Name is too long" }, { status: 400 })
    }
    if (company && company.length > 200) {
      return NextResponse.json({ error: "Company name is too long" }, { status: 400 })
    }
    if (job_title && job_title.length > 150) {
      return NextResponse.json({ error: "Job title is too long" }, { status: 400 })
    }

    if (!email?.trim()) {
      return NextResponse.json({ error: "Email address is required" }, { status: 400 })
    }
    if (email.length > 254) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 })
    }

    if (!message?.trim()) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 },
      )
    }
    if (message.length > 5000) {
      return NextResponse.json({ error: "Message is too long (max 5000 characters)" }, { status: 400 })
    }

    // ── Persist submission ────────────────────────────────────────────────────
    const submission = await db.contactSubmission.create({
      data: {
        firstName: first_name.trim(),
        lastName: last_name.trim(),
        email: email.trim().toLowerCase(),
        company: company?.trim() || null,
        jobTitle: job_title?.trim() || null,
        inquiryType: inquiry_type || null,
        message: message.trim(),
      },
    })

    // Fire-and-forget — never block the response waiting for email
    const notifyTo = process.env.CONTACT_NOTIFY_EMAIL ?? "contact@aethoncore.com"
    sendMail({
      to: notifyTo,
      subject: `New inquiry: ${inquiry_type || "General"} — ${first_name.trim()} ${last_name.trim()}${company?.trim() ? ` (${company.trim()})` : ""}`,
      text: [
        `Name: ${first_name.trim()} ${last_name.trim()}`,
        `Email: ${email.trim()}`,
        company?.trim() ? `Company: ${company.trim()}` : null,
        job_title?.trim() ? `Title: ${job_title.trim()}` : null,
        inquiry_type ? `Inquiry type: ${inquiry_type}` : null,
        ``,
        `Message:`,
        message.trim(),
        ``,
        `---`,
        `Submitted: ${new Date().toISOString()}`,
        `Submission ID: ${submission.id}`,
      ]
        .filter((l): l is string => l !== null)
        .join("\n"),
      html: `
<p><strong>Name:</strong> ${esc(first_name.trim())} ${esc(last_name.trim())}</p>
<p><strong>Email:</strong> <a href="mailto:${esc(email.trim())}">${esc(email.trim())}</a></p>
${company?.trim() ? `<p><strong>Company:</strong> ${esc(company.trim())}</p>` : ""}
${job_title?.trim() ? `<p><strong>Title:</strong> ${esc(job_title.trim())}</p>` : ""}
${inquiry_type ? `<p><strong>Inquiry type:</strong> ${esc(inquiry_type)}</p>` : ""}
<hr>
<p><strong>Message:</strong></p>
<p style="white-space:pre-wrap;font-family:inherit">${esc(message.trim())}</p>
<hr>
<p style="color:#6b7280;font-size:12px">
  Submitted: ${new Date().toISOString()} &middot; ID: ${submission.id}
</p>`,
    }).catch((err) => console.error("[api/contact] email notification failed:", err))

    return NextResponse.json(
      { success: true, id: submission.id },
      { status: 201 },
    )
  } catch (err) {
    console.error("[api/contact]", err)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    )
  }
}
