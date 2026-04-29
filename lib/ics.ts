// Generates a minimal RFC 5545 (.ics) calendar file string.
export function generateICS(opts: {
  uid: string
  summary: string
  description?: string
  location?: string
  dtstart: string // "YYYYMMDDTHHMMSSZ" or date string parsed below
  dtend?: string
  organizer?: string
}): string {
  const now = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"

  function toICSDate(s: string) {
    // Accept ISO or already-formatted
    const d = new Date(s)
    if (isNaN(d.getTime())) return now
    return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
  }

  const start = toICSDate(opts.dtstart)
  // Default duration 1 hour
  const end = opts.dtend
    ? toICSDate(opts.dtend)
    : (() => {
        const d = new Date(opts.dtstart)
        d.setHours(d.getHours() + 1)
        return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
      })()

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Aethon Core//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:${opts.uid}@aethoncore.com`,
    `DTSTAMP:${now}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${opts.summary}`,
    opts.description ? `DESCRIPTION:${opts.description.replace(/\n/g, "\\n")}` : "",
    opts.location ? `LOCATION:${opts.location}` : "",
    opts.organizer ? `ORGANIZER;CN=Aethon Core:mailto:${opts.organizer}` : "",
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ]

  return lines.filter(Boolean).join("\r\n")
}
