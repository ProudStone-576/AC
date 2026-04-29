import { JsonLd } from "@/components/ui/JsonLd"
import type { Metadata } from "next"
import Link from "next/link"
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Eye,
  LayoutDashboard,
  RefreshCw,
  Server,
  Shield,
  Zap,
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { ManagedHeroVisual } from "@/components/ui/ServiceHeroVisuals"
import { CTASection } from "@/components/sections/CTASection"
import {
  ServiceOutcomeSection,
  ServicePhotoGrid,
  ServiceWalkthroughSection,
} from "@/components/sections/ServicePageAdditions"
import { FadeIn } from "@/components/ui/FadeIn"
import { FaqAccordion } from "@/components/ui/FaqAccordion"

const rightFor = [
  "Your team spends too much time reacting to issues instead of improving systems",
  "You need help outside business hours when something important goes down",
  "Outages are costing time, money, or trust with customers and staff",
  "You are growing faster than your internal IT team can keep up",
  "You want one clear partner who is accountable for day-to-day operations",
]

const notRightFor = [
  "You only need help with one short project like a migration or assessment",
  "You already have a large in-house operations team and only need a very narrow skill gap filled",
]

const faqs = [
  {
    q: "What does managed services mean in simple terms?",
    a: "It means we help keep your technology running every day. We monitor systems, respond to issues, apply updates, and help plan ahead so your team is not always in emergency mode.",
  },
  {
    q: "Who do we talk to when something goes wrong?",
    a: "You talk to real engineers who know your environment. You are not passed around a generic support queue that has to learn your setup from scratch each time.",
  },
  {
    q: "Can this work with our internal IT team?",
    a: "Yes. Many clients already have internal staff. We take the routine monitoring, alerts, and response work off their plate so they can focus on projects and improvements.",
  },
  {
    q: "How quickly can you respond to a serious issue?",
    a: "That depends on the service level you choose, but urgent issues are handled fast and through a clear escalation path. We define the response targets upfront so everyone knows what to expect.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most teams are fully onboarded in about four to six weeks. That includes connecting systems, setting alerts, testing access, and agreeing on who gets notified when something happens.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on the systems you want covered and the level of support you need. We scope it clearly before work starts so there are no surprise invoices.",
  },
]

export const metadata: Metadata = {
  title: "Managed IT Services Canada | 24/7 NOC & Help Desk | Aethon Core",
  description: "Enterprise managed IT services across Canada. 24/7 NOC monitoring, help desk, patch management, and incident response under a single contractual SLA. Toronto, Ontario, and across North America.",
  keywords: [
    "managed IT services Canada",
    "managed IT services Toronto",
    "managed service provider Canada",
    "managed service provider Toronto",
    "outsourced IT Canada",
    "IT outsourcing Toronto",
    "NOC services Canada",
    "24/7 IT support Canada",
    "managed help desk Canada",
    "enterprise IT management Canada",
    "IT managed services Ontario",
    "fully managed IT services",
  ],
  alternates: { canonical: "https://aethoncore.com/services/managed" },
  openGraph: {
    type: "website", locale: "en_CA", url: "https://aethoncore.com/services/managed",
    siteName: "Aethon Core",
    title: "Managed IT Services Canada | 24/7 NOC & Help Desk | Aethon Core",
    description: "Enterprise managed IT services across Canada. 24/7 NOC monitoring, help desk, patch management, and incident response under a single contractual SLA. Toronto, Ontario, and across North America.",
  },
}

const outcomes = [
  {
    title: "Less downtime",
    description:
      "Problems are spotted earlier and handled faster, which means fewer interruptions for your staff and customers.",
  },
  {
    title: "Less pressure on your team",
    description:
      "Your internal team gets time back for planning, improvements, and higher-value work instead of constant firefighting.",
  },
  {
    title: "Clear accountability",
    description:
      "You know who is watching your systems, how issues are escalated, and what service level you are paying for.",
  },
]

const photoCards = [
  {
    title: "Live monitoring that catches issues early",
    description:
      "We keep watch over the systems your business depends on so small warnings can be handled before they become outages.",
    imageSrc:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Operations team reviewing live system dashboards",
  },
  {
    title: "Support that keeps people informed",
    description:
      "Your team gets clear updates, clear ownership, and less chasing for answers when something changes or breaks.",
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Technology team discussing support and service updates",
  },
  {
    title: "Reporting leaders can actually use",
    description:
      "We turn technical activity into simple reporting so decision-makers can see risk, performance, and upcoming needs.",
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Business reporting dashboard with charts and metrics",
  },
]

const capabilities = [
  {
    icon: Eye,
    title: "24/7 monitoring",
    description:
      "We watch your servers, network, storage, and key systems all day and night so problems are caught earlier.",
    note: "Round-the-clock coverage for critical systems",
  },
  {
    icon: AlertTriangle,
    title: "Fast incident response",
    description:
      "When something breaks, we respond, investigate, and work the issue through to resolution instead of handing it off endlessly.",
    note: "Clear escalation and post-incident reviews",
  },
  {
    icon: RefreshCw,
    title: "Updates and patching",
    description:
      "We handle routine updates and urgent security fixes in a planned way so systems stay current without unnecessary disruption.",
    note: "Scheduled maintenance with urgent patch handling",
  },
  {
    icon: Zap,
    title: "Capacity planning",
    description:
      "We track usage trends and help you act before you run out of room, speed, or reliability.",
    note: "Monthly recommendations for growth and stability",
  },
  {
    icon: Shield,
    title: "Security event handling",
    description:
      "Security alerts are reviewed quickly so real threats are handled with the right urgency and false alarms do not waste your day.",
    note: "Alert triage, investigation, and follow-up",
  },
  {
    icon: Server,
    title: "Change management",
    description:
      "Important changes are planned, approved, tracked, and reviewed so you are not left guessing what changed and why.",
    note: "A clear record of every important change",
  },
  {
    icon: LayoutDashboard,
    title: "Client portal and reporting",
    description:
      "You can review tickets, service history, reports, and open issues in one place instead of digging through email chains.",
    note: "One home for visibility and service history",
  },
]

const slaCommitments = [
  { metric: "Critical issue response", value: "Defined upfront", description: "Set by service tier and documented clearly" },
  { metric: "Coverage", value: "24/7/365", description: "For agreed critical systems and alerts" },
  { metric: "Platform uptime target", value: "99.99%", description: "Contracted where applicable" },
  { metric: "Urgent patching", value: "Priority-based", description: "Critical fixes handled on a defined schedule" },
]

const reportingItems = [
  { period: "Weekly", items: ["System health summary", "Open incident log", "Planned maintenance", "Outstanding actions"] },
  { period: "Monthly", items: ["Service performance review", "Capacity trends", "Security event summary", "Recommendations"] },
  { period: "Quarterly", items: ["Leadership review", "Risk and improvement plan", "Architecture and cost review"] },
]

const walkthroughItems = [
  {
    title: "What we would own",
    description: "We show you exactly which systems, alerts, updates, and support tasks we would take over.",
  },
  {
    title: "How support would work",
    description: "You will see the path from first alert to final fix, including who gets called and when.",
  },
  {
    title: "How we start",
    description: "We walk through onboarding, access, reporting, and what the first month would look like.",
  },
]

export default function ManagedServicesPage() {
  return (
    <>
      <JsonLd schema={[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://aethoncore.com"},{"@type":"ListItem","position":2,"name":"Services","item":"https://aethoncore.com/services"},{"@type":"ListItem","position":3,"name":"Managed IT Services","item":"https://aethoncore.com/services/managed"}]},{"@context":"https://schema.org","@type":"Service","name":"Managed IT Services","url":"https://aethoncore.com/services/managed","provider":{"@type":"Organization","name":"Aethon Core Inc.","url":"https://aethoncore.com"},"areaServed":[{"@type":"Country","name":"Canada"},{"@type":"Country","name":"United States"}],"serviceType":"Managed IT Services"}]} />
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Managed Services" }]}
        eyebrow="Delivery"
        title="We keep your systems running so your team can focus on the work that matters"
        subtitle="If your team is stretched thin, tired of after-hours issues, or stuck fixing the same problems again, we provide steady operational support in clear, simple language."
        variant="tinted"
        visual={<ManagedHeroVisual />}
      />

      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-in">
            <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
              {[
                { value: "24/7", label: "Coverage for critical systems" },
                { value: "Faster", label: "Response to urgent issues" },
                { value: "Clear", label: "Ownership and escalation" },
                { value: "Named", label: "People supporting your account" },
              ].map((s) => (
                <div key={s.label} className="px-6 py-5">
                  <p className="font-mono text-xl font-semibold text-foreground tabular-nums">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <ServiceOutcomeSection
        title="Managed services should make work calmer, not more complicated"
        intro="Good support does not just keep technology alive. It gives leaders fewer surprises, gives staff more breathing room, and gives everyone a clearer plan when something goes wrong."
        outcomes={outcomes}
      />

      <ServicePhotoGrid
        title="What strong day-to-day support looks like"
        intro="The best service model is not flashy. It is dependable, visible, and easy to understand when your team needs help."
        photos={photoCards}
      />

      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">What we handle</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Practical support across the systems your business depends on
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                We look after the everyday work that keeps systems healthy, secure, and available.
              </p>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:border-blue/20 hover:shadow-md dark:bg-card"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                    <cap.icon className="h-5 w-5 text-blue" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">{cap.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
                  <p className="text-xs font-semibold text-blue/80">{cap.note}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Service commitments</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Clear expectations instead of vague promises
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                We agree on what is covered, how quickly urgent issues are handled, and how performance is reviewed.
              </p>
            </div>
          </FadeIn>
          <FadeIn variant="fade-in">
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-surface dark:bg-muted">
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">Area</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">Commitment</th>
                    <th className="hidden px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:table-cell">What it means</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {slaCommitments.map((row, index) => (
                    <tr key={row.metric} className={index % 2 === 0 ? "bg-white dark:bg-card" : "bg-surface dark:bg-background"}>
                      <td className="px-6 py-3.5 text-sm font-semibold text-foreground/80">{row.metric}</td>
                      <td className="px-6 py-3.5 text-sm font-semibold text-blue">{row.value}</td>
                      <td className="hidden px-6 py-3.5 text-sm text-muted-foreground sm:table-cell">{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      <ServiceWalkthroughSection
        title="Want to see how support would work in your environment?"
        description="We can walk you through a real support model based on your systems, your team size, and the level of coverage you need."
        items={walkthroughItems}
        primaryHref="/contact?inquiry=managed"
        secondaryHref="/services"
        secondaryLabel="See all services"
      />

      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Reporting</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Updates your team can actually use
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                We report on what happened, what needs attention, and what decisions are coming next.
              </p>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {reportingItems.map((period) => (
                <div key={period.period} className="rounded-xl border border-border bg-white p-6 dark:bg-card">
                  <div className="mb-4 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue" />
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue">{period.period}</p>
                  </div>
                  <ul className="space-y-2">
                    {period.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-canvas py-20 lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="blur-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Is this the right fit?</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Managed services works best when reliability is a real business issue
              </h2>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-8">
                <p className="mb-4 text-sm font-semibold text-white">This is a good fit if:</p>
                <ul className="space-y-3">
                  {rightFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-canvas-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-8">
                <p className="mb-4 text-sm font-semibold text-white">You may want a different starting point if:</p>
                <ul className="space-y-3">
                  {notRightFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-canvas-muted">
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-canvas-muted/50" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors hover:text-blue-hover">
                    Not sure where to start? Talk to us first.
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Common questions</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Questions teams ask before handing over day-to-day support
              </h2>
            </div>
          </FadeIn>
          <FadeIn variant="fade-in">
            <FaqAccordion faqs={faqs} />
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Need help keeping your systems stable?"
        subtitle="Tell us what keeps breaking, what your team is carrying today, and what kind of coverage you need. We will tell you plainly if managed services are the right fit."
        primaryLabel="Request a walkthrough"
        primaryHref="/contact?inquiry=managed"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  )
}
