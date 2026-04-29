"use client"

import * as React from "react"
import Link from "next/link"
import { Loader2, CheckCircle2 } from "lucide-react"

const inquiryTypes = [
  { value: "sales", label: "Sales & pricing" },
  { value: "demo", label: "Request a demonstration" },
  { value: "support", label: "Technical support" },
  { value: "partnerships", label: "Partnerships" },
  { value: "media", label: "Media & analyst relations" },
  { value: "other", label: "Other" },
]

const inputClass =
  "h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30 disabled:opacity-50"

export function ContactForm() {
  const [fields, setFields] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    company: "",
    job_title: "",
    inquiry_type: "",
    message: "",
  })
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  function setField(name: keyof typeof fields, value: string) {
    setFields((f) => ({ ...f, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.")
        return
      }

      setSubmitted(true)
    } catch {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-xl border border-border bg-surface p-8 dark:bg-card">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
          <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Message received</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Thank you, {fields.first_name}. We'll get back to you within 1 business day.
          </p>
        </div>
        <button
          onClick={() => {
            setSubmitted(false)
            setFields({ first_name: "", last_name: "", email: "", company: "", job_title: "", inquiry_type: "", message: "" })
          }}
          className="text-sm font-medium text-blue hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {error && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      )}

      {/* Name row */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="first-name" className="text-sm font-medium text-foreground">
            First name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="first-name"
            name="first_name"
            autoComplete="given-name"
            required
            placeholder="Margaret"
            value={fields.first_name}
            onChange={(e) => setField("first_name", e.target.value)}
            disabled={loading}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="last-name" className="text-sm font-medium text-foreground">
            Last name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="last-name"
            name="last_name"
            autoComplete="family-name"
            required
            placeholder="Chen"
            value={fields.last_name}
            onChange={(e) => setField("last_name", e.target.value)}
            disabled={loading}
            className={inputClass}
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Work email <span className="text-destructive">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
          placeholder="margaret@meridianfinancial.com"
          value={fields.email}
          onChange={(e) => setField("email", e.target.value)}
          disabled={loading}
          className={inputClass}
        />
      </div>

      {/* Company + Title row */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Acme Corp"
            value={fields.company}
            onChange={(e) => setField("company", e.target.value)}
            disabled={loading}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="title" className="text-sm font-medium text-foreground">
            Job title
          </label>
          <input
            type="text"
            id="title"
            name="job_title"
            autoComplete="organization-title"
            placeholder="Chief Technology Officer"
            value={fields.job_title}
            onChange={(e) => setField("job_title", e.target.value)}
            disabled={loading}
            className={inputClass}
          />
        </div>
      </div>

      {/* Inquiry type */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="inquiry" className="text-sm font-medium text-foreground">
          How can we help?
        </label>
        <select
          id="inquiry"
          name="inquiry_type"
          value={fields.inquiry_type}
          onChange={(e) => setField("inquiry_type", e.target.value)}
          disabled={loading}
          className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30 disabled:opacity-50"
        >
          <option value="">Select an option</option>
          {inquiryTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your organization and what you're trying to accomplish..."
          value={fields.message}
          onChange={(e) => setField("message", e.target.value)}
          disabled={loading}
          className="w-full resize-none rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30 disabled:opacity-50"
        />
      </div>

      {/* Privacy note */}
      <p className="text-xs text-muted-foreground">
        By submitting this form, you agree to our{" "}
        <Link href="/legal/privacy" className="text-blue hover:underline">
          Privacy Policy
        </Link>
        . We will never sell your data or send unsolicited communications.
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-brand px-6 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </button>
    </form>
  )
}
