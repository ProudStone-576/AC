import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, Calendar, Clock, Users,
  Video
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Events & Webinars",
  description:
    "Live webinars, technical briefings, and on-demand recordings from the Aethon Core team.",
}

const EVENTS_CONTACT = "/contact?inquiry=events"

const upcomingEvents = [
  {
    type: "Webinar",
    title: "How to implement Zero Trust security in regulated industries — what actually works",
    description:
      "A practical walkthrough of how Zero Trust security gets built in financial services and healthcare, where compliance requirements add real constraints. We cover what generic guidance gets wrong and what works in practice.",
    date: "April 17, 2026",
    time: "11:00 AM ET",
    duration: "60 min",
    speakers: ["Aethon Core Team"],
    format: "online",
  },
  {
    type: "Executive Briefing",
    title: "How technology leaders consolidate fragmented tooling — timelines, risks, and where to start",
    description:
      "A practical conversation for CIOs and CTOs dealing with too many overlapping tools and vendors. We walk through the consolidation process, the most common sequencing mistakes, and what a realistic 12-month plan looks like.",
    date: "April 24, 2026",
    time: "1:00 PM ET",
    duration: "45 min",
    speakers: ["Aethon Core Team"],
    format: "online",
  },
  {
    type: "Webinar",
    title: "Securing factory and energy systems without halting operations",
    description:
      "How industrial organizations apply security standards like IEC 62443 when they can't pause operations to implement changes. We cover passive monitoring, staged rollouts, and managing the boundary between factory systems and office IT.",
    date: "May 8, 2026",
    time: "10:00 AM ET",
    duration: "60 min",
    speakers: ["Aethon Core Team"],
    format: "online",
  },
  {
    type: "Workshop",
    title: "Managing infrastructure with code at scale: rules, drift detection, and automated deployments",
    description:
      "A hands-on technical session on managing hundreds of systems with code — including policy enforcement, detecting configuration drift, and automated deployment workflows.",
    date: "May 15, 2026",
    time: "9:00 AM ET",
    duration: "2 hrs",
    speakers: ["Aethon Core Team"],
    format: "online",
  },
]

const pastRecordings = [
  {
    title: "Why most AI projects fail before the AI is ever built",
    category: "AI & Data",
    duration: "58 min",
    date: "March 6, 2026",
    views: "2.4k",
  },
  {
    title: "What FedRAMP High authorization actually involves",
    category: "Government",
    duration: "52 min",
    date: "February 20, 2026",
    views: "1.8k",
  },
  {
    title: "Why most companies don't know what they're spending on cloud",
    category: "Cloud",
    duration: "47 min",
    date: "February 6, 2026",
    views: "3.1k",
  },
  {
    title: "Meeting DORA requirements for financial institutions — the technical side",
    category: "Financial Services",
    duration: "64 min",
    date: "January 23, 2026",
    views: "2.9k",
  },
  {
    title: "How to replace a core banking system with no customer downtime",
    category: "Financial Services",
    duration: "71 min",
    date: "January 9, 2026",
    views: "2.2k",
  },
  {
    title: "Using multiple cloud providers — what it actually takes to do it well",
    category: "Infrastructure",
    duration: "55 min",
    date: "December 12, 2025",
    views: "4.7k",
  },
]

const typeColors: Record<string, string> = {
  Webinar: "bg-blue-light text-blue-light-foreground",
  "Executive Briefing": "bg-surface text-foreground dark:bg-muted",
  Workshop: "bg-blue-light text-blue-light-foreground",
}

export default function EventsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Events & Webinars" }]}
        eyebrow="Events & Webinars"
        title="Practical sessions from the people who build this technology"
        subtitle="Live webinars, executive briefings, and hands-on workshops — plus on-demand recordings on the technology topics that matter most to business and IT leaders."
        variant="tinted"
        backgroundImageSrc="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=3840&q=100"
      />

      {/* Upcoming events */}
      <section className="bg-white py-16 dark:bg-background lg:py-20">
        <div className="container-enterprise">
          <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-blue">Upcoming events</p>
          <div className="space-y-5">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="grid grid-cols-1 gap-6 rounded-xl border border-border bg-white p-6 transition-colors hover:border-blue/20 dark:bg-card lg:grid-cols-[1fr_280px]"
              >
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${typeColors[event.type] ?? "bg-surface text-foreground"}`}>
                      {event.type}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Video className="h-3 w-3" />
                      {event.format === "online" ? "Online" : "In person"}
                    </span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold leading-snug text-foreground">{event.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{event.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      {event.speakers[0]}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-between rounded-lg bg-surface p-5 dark:bg-background">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 shrink-0 text-blue" />
                      <span className="font-medium text-foreground">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 shrink-0 text-blue" />
                      <span className="text-muted-foreground">{event.time} · {event.duration}</span>
                    </div>
                  </div>
                  <Link
                    href={EVENTS_CONTACT}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-hover"
                  >
                    Reserve a seat
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-demand recordings */}
      <section className="bg-surface py-16 dark:bg-card lg:py-20">
        <div className="container-enterprise">
          <div className="mb-8 flex items-end justify-between">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue">On-demand recordings</p>
            <Link href={EVENTS_CONTACT} className="flex items-center gap-1.5 text-xs font-medium text-blue hover:text-blue-hover transition-colors">
              Request access
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pastRecordings.map((rec) => (
              <div
                key={rec.title}
                className="flex flex-col rounded-xl border border-border bg-white p-6 dark:bg-background"
              >
                <span className="mb-2 inline-flex w-fit rounded-full bg-blue-light px-2.5 py-1 text-[11px] font-semibold text-blue-light-foreground">
                  {rec.category}
                </span>
                <h3 className="mb-3 flex-1 text-sm font-semibold leading-snug text-foreground">
                  {rec.title}
                </h3>
                <div className="flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {rec.duration}
                  </div>
                  <Link
                    href={EVENTS_CONTACT}
                    className="text-xs font-medium text-blue hover:text-blue-hover transition-colors"
                  >
                    Request access
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="bg-canvas py-16 lg:py-20">
        <div className="container-enterprise">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Stay informed</p>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Get notified about upcoming sessions
            </h2>
            <p className="mb-8 text-base text-canvas-muted">
              One email per month covering new webinars, events, and the latest insights from our engineering team. No marketing.
            </p>
            <Link
              href="/contact?inquiry=events"
              className="inline-flex items-center gap-2 rounded-md bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-hover"
            >
              Subscribe to event updates
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        variant="surface"
        title="Want a private briefing for your leadership team?"
        subtitle="We run private technical and executive sessions for enterprise clients and prospects. No sales pitch — just substance."
        primaryLabel="Request a private session"
        primaryHref="/contact"
        secondaryLabel="Browse insights"
        secondaryHref="/insights"
      />
    </>
  )
}
