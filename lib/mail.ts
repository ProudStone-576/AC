import nodemailer from "nodemailer"

function getTransport() {
  const host = process.env.SMTP_HOST
  const pass = process.env.SMTP_PASS
  if (!host || !pass) return null

  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: Number(process.env.SMTP_PORT ?? 465) !== 587,
    auth: {
      user: process.env.SMTP_USER ?? "resend",
      pass,
    },
  })
}

export async function sendMail({
  to,
  subject,
  text,
  html,
}: {
  to: string
  subject: string
  text: string
  html?: string
}): Promise<void> {
  const transport = getTransport()

  if (!transport) {
    // Dev: no SMTP configured — print to console instead of dropping silently
    if (process.env.NODE_ENV !== "production") {
      console.log("[mail:dev]", { to, subject, text })
    }
    return
  }

  await transport.sendMail({
    from: process.env.EMAIL_FROM ?? "Aethon Core <noreply@aethoncore.com>",
    to,
    subject,
    text,
    html,
  })
}
