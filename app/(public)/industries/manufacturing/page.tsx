import { JsonLd } from "@/components/ui/JsonLd"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, Settings, Network,
  AlertTriangle, Cpu, Eye
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Manufacturing IT Services Canada | OT/IT Convergence & ICS Security | Aethon Core",
  description: "Managed IT and OT services for Canadian manufacturers. OT/IT convergence, ICS/SCADA security, predictive maintenance infrastructure, and supply chain visibility. Nationwide coverage.",
  keywords: [
    "manufacturing IT services Canada",
    "OT IT convergence Canada",
    "ICS security Canada",
    "SCADA security Canada",
    "industrial cybersecurity Canada",
    "manufacturing managed services Canada",
    "predictive maintenance IT Canada",
    "factory IT Canada",
    "OT security Canada",
    "manufacturing technology Canada",
  ],
  alternates: { canonical: "https://aethoncore.com/industries/manufacturing" },
  openGraph: {
    type: "website", locale: "en_CA", url: "https://aethoncore.com/industries/manufacturing",
    siteName: "Aethon Core",
    title: "Manufacturing IT Services Canada | OT/IT Convergence & ICS Security | Aethon Core",
    description: "Managed IT and OT services for Canadian manufacturers. OT/IT convergence, ICS/SCADA security, predictive maintenance infrastructure, and supply chain visibility. Nationwide coverage.",
  },
}

const challenges = [
  {
    icon: Network,
    title: "Factory floor and office systems don't talk to each other",
    description:
      "Industrial equipment — machines, sensors, control systems — and office IT have historically been completely separate. Connecting them is now necessary for efficiency, but doing it without creating security risks requires careful planning.",
  },
  {
    icon: AlertTriangle,
    title: "Old factory systems were never built with security in mind",
    description:
      "Many industrial systems were designed decades ago with no passwords, no encryption, and no network separation. You can't just connect them to modern networks without adding security controls — but you also can't easily shut them down to retrofit them.",
  },
  {
    icon: Eye,
    title: "No real-time view of what's happening on the production floor",
    description:
      "Most manufacturers find out about problems after they've already caused downtime. The sensor data to predict these problems exists — it's just not being captured or analyzed.",
  },
  {
    icon: Cpu,
    title: "Unplanned downtime is extremely expensive",
    description:
      "A single hour of unplanned production downtime at a mid-size manufacturer costs $50,000–$200,000. Most of it is preventable with the right monitoring in place.",
  },
]

const capabilities = [
  {
    title: "Connecting factory floor and business systems",
    description:
      "We build the secure connection between your industrial equipment and your IT systems — keeping factory floor systems protected while letting data flow where it needs to go for analysis and reporting.",
    stat: "IEC 62443 · Purdue Model · ISA/IEC aligned",
  },
  {
    title: "Industrial network segmentation",
    description:
      "We separate your production network by function — field devices, control systems, monitoring systems, and the business network are all kept in distinct zones with controlled boundaries. If one is compromised, attackers can't reach the others.",
    stat: "Zone-and-conduit security model",
  },
  {
    title: "Live production visibility",
    description:
      "We build the pipeline that takes data from your factory floor sensors and turns it into live dashboards for operations managers and engineers — showing what's happening right now, and flagging anomalies before they become failures.",
    stat: "Under 500ms from sensor to dashboard",
  },
  {
    title: "Predicting equipment failures before they happen",
    description:
      "We feed machine data into models that recognize the early signs of equipment failure. Maintenance gets scheduled based on actual condition — not fixed calendar intervals. Unplanned downtime drops measurably.",
    stat: "Condition-based maintenance · ISO 13374",
  },
  {
    title: "Industrial security aligned with global standards",
    description:
      "We apply formal security management to your factory floor — explicitly including industrial equipment in your security program, not just office IT. Most security providers don't have this expertise.",
    stat: "ISO 27001 · IEC 62443-2-1 aligned",
  },
  {
    title: "Supply chain visibility",
    description:
      "We connect your supplier, logistics, and inventory systems so procurement and operations can see the full picture in one place. Supply chain problems become visible before they stop your production line.",
    stat: "EDI · ERP · WMS integration",
  },
]

const complianceFrameworks = [
  { name: "IEC 62443", scope: "Industrial cybersecurity standard" },
  { name: "ISO 27001", scope: "Information security management" },
  { name: "NIST CSF", scope: "Cybersecurity framework" },
  { name: "ISO 13374", scope: "Condition monitoring and diagnostics" },
  { name: "ISA-95", scope: "Enterprise-control system integration" },
  { name: "SOC 2 Type II", scope: "Cloud service controls" },
  { name: "GDPR / CCPA", scope: "Employee and partner data" },
  { name: "ISO 9001", scope: "Quality management system alignment" },
]

const stats = [
  { value: "< 500ms", label: "Sensor-to-dashboard latency" },
  { value: "99.99%", label: "Uptime guarantee for factory monitoring" },
  { value: "IEC 62443", label: "Industrial control system security standard" },
  { value: "ISO 27001", label: "Information security management — aligned for factories" },
]

export default function ManufacturingPage() {
  return (
    <>
      <JsonLd schema={[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://aethoncore.com"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://aethoncore.com/industries"},{"@type":"ListItem","position":3,"name":"Manufacturing","item":"https://aethoncore.com/industries/manufacturing"}]}]} />
      <PageHero
        breadcrumbs={[{ label: "Industries", href: "/industries" }, { label: "Manufacturing" }]}
        eyebrow="Manufacturing"
        title="Modern factories need uptime, safety, and efficiency all at once"
        subtitle="We connect your factory floor systems to your business systems, predict equipment failures before they happen, and secure industrial networks — without stopping production."
        variant="dark"
        backgroundImageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=3840&q=100"
      />

      {/* Stats bar */}
      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-5">
                <p className="font-mono text-2xl font-semibold text-foreground tabular-nums">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenges */}
      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">The challenge</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Modern manufacturing runs on software — and most of it wasn't designed for today's threat environment
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              The convergence of operational and information technology is creating new value and new risk simultaneously. Managing both requires an architecture that wasn't retrofitted from IT security practices.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {challenges.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-white p-6 dark:bg-card">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                  <item.icon className="h-5 w-5 text-blue" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Our approach</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              From sensor data to operational intelligence, end to end
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div key={cap.title} className="rounded-xl border border-border bg-white p-6 dark:bg-background">
                <h3 className="mb-2 text-base font-semibold text-foreground">{cap.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
                <p className="font-mono text-xs font-semibold text-blue/80">{cap.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance frameworks */}
      <section className="bg-canvas py-20 lg:py-24">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Standards coverage</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Industrial standards we build to
            </h2>
            <p className="mt-4 text-base text-canvas-muted">
              Industrial cybersecurity and quality standards are built into our architecture — not applied after the fact.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {complianceFrameworks.map((fw) => (
              <div key={fw.name} className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <p className="mb-1 text-sm font-semibold text-white">{fw.name}</p>
                <p className="text-xs text-canvas-muted">{fw.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use case callout */}
      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 gap-8 rounded-2xl border border-border bg-surface p-8 dark:bg-card lg:grid-cols-5 lg:gap-12 lg:p-12">
            <div className="lg:col-span-3">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Use case</p>
              <h2 className="mb-4 text-2xl font-semibold leading-snug text-foreground lg:text-3xl">
                Connecting OT and IT systems for production visibility and uptime
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                A large manufacturer with dozens of production lines across multiple facilities had near-zero visibility into real-time production performance. Failures were discovered after they caused downtime — not before. The sensor data existed; the infrastructure to use it didn't.
              </p>
              <Link
                href="/case-studies/manufacturing-predictive-maintenance"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors hover:text-blue-hover"
              >
                Read our approach
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col justify-center rounded-xl bg-brand p-6 text-white lg:col-span-2">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">Our approach</p>
              <p className="text-sm leading-relaxed text-white/90">
                We converge operational technology and IT infrastructure under a unified monitoring layer. Sensor data surfaces anomalies before they become failures — not after.
              </p>
              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-white/50">
                <Settings className="h-3.5 w-3.5" />
                Manufacturing · Predictive Maintenance
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need to connect your factory floor to your business systems securely?"
        subtitle="Our industrial technology team has specific experience integrating factory equipment with modern data and security systems — without disrupting production."
        primaryLabel="Talk to a manufacturing specialist"
        primaryHref="/contact"
        secondaryLabel="See all use cases"
        secondaryHref="/case-studies"
      />
    </>
  )
}
