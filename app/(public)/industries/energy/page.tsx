import { JsonLd } from "@/components/ui/JsonLd"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, Zap, Network,
  AlertTriangle, Lock, Eye
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Energy & Utilities IT Services Canada | NERC CIP, OT Security | Aethon Core",
  description: "Managed IT and OT services for Canadian energy and utilities organizations. NERC CIP-compliant operations, critical infrastructure security, and OT environment modernization without disrupting operations.",
  keywords: [
    "energy IT services Canada",
    "utilities IT Canada",
    "NERC CIP compliance Canada",
    "critical infrastructure security Canada",
    "OT security energy Canada",
    "power grid cybersecurity Canada",
    "energy managed services Canada",
    "utilities cybersecurity Canada",
    "ICS security energy Canada",
  ],
  alternates: { canonical: "https://aethoncore.com/industries/energy" },
  openGraph: {
    type: "website", locale: "en_CA", url: "https://aethoncore.com/industries/energy",
    siteName: "Aethon Core",
    title: "Energy & Utilities IT Services Canada | NERC CIP, OT Security | Aethon Core",
    description: "Managed IT and OT services for Canadian energy and utilities organizations. NERC CIP-compliant operations, critical infrastructure security, and OT environment modernization without disrupting operations.",
  },
}

const challenges = [
  {
    icon: AlertTriangle,
    title: "Industrial control systems are high-value attack targets",
    description:
      "Energy infrastructure is among the most targeted sectors for cyberattacks by criminal groups and nation-states. A successful attack on grid control systems isn't a data breach — it's a national security event. The security standard has to match the consequence.",
  },
  {
    icon: Lock,
    title: "Older industrial systems weren't built with security in mind",
    description:
      "Much of the specialized computer equipment controlling power generation, transmission, and distribution was installed before cybersecurity was a design consideration. These systems can't be patched or replaced quickly — they have to be secured without being replaced.",
  },
  {
    icon: Network,
    title: "Too many new connections, not enough security",
    description:
      "Smart grid upgrades, smart meters, and remote monitoring are connecting industrial equipment to standard internet-connected networks. Each new connection is a potential way in for attackers. The number of entry points is growing faster than most utility security teams can handle.",
  },
  {
    icon: Eye,
    title: "Meeting mandatory power grid security rules is demanding",
    description:
      "NERC CIP (the mandatory cybersecurity rules for power grid operators) requires extensive documentation, evidence collection, and ongoing monitoring across all critical grid equipment. The compliance program is operationally demanding and the penalties for falling short are severe.",
  },
]

const capabilities = [
  {
    title: "Mandatory power grid security rules (NERC CIP)",
    description:
      "We implement the full set of required NERC CIP controls — physical security, network access boundaries, system management, incident reporting, and supply chain risk management — as real operational security, not just a documentation program.",
    stat: "NERC CIP-002 through CIP-014",
  },
  {
    title: "International industrial security standard (IEC 62443)",
    description:
      "The international standard for securing industrial control systems shapes how we design every project. Systems are separated into distinct zones with clearly monitored connections between them — so a problem in one area can't spread to others.",
    stat: "IEC 62443-2-1 · IEC 62443-3-3",
  },
  {
    title: "Physically separated and connected grid environments",
    description:
      "Where rules or safety requirements demand complete physical separation, we design and operate fully isolated environments. Where some connectivity is needed, we design it with the smallest possible exposure and maximum monitoring.",
    stat: "Physically isolated · one-way data transfer · network separation",
  },
  {
    title: "Monitoring industrial systems without disrupting operations",
    description:
      "We monitor industrial networks using tools built specifically for industrial communication protocols. Alert thresholds are set based on how your equipment actually behaves — not generic patterns from office networks. Zero disruption to running equipment.",
    stat: "Purpose-built industrial monitoring tools",
  },
  {
    title: "Emergency response for industrial system attacks",
    description:
      "Responding to attacks on industrial control systems requires different steps than responding to office network attacks. Our specialists know how to contain threats without shutting down generation or distribution equipment unnecessarily.",
    stat: "Industrial-specific playbooks · 24/7 response",
  },
  {
    title: "Keeping new grid technology secure",
    description:
      "Smart grid upgrades, smart meters, and remote energy management systems introduce new ways attackers can get in. We build security into these programs from the design phase — not added on afterward.",
    stat: "Smart meters · remote energy management · connected grid security",
  },
]

const complianceFrameworks = [
  { name: "NERC CIP", scope: "Mandatory cybersecurity rules for power grid operators" },
  { name: "IEC 62443", scope: "International standard for securing industrial systems" },
  { name: "NIST SP 800-82", scope: "US government guidance for securing industrial control systems" },
  { name: "ISO 27001", scope: "International standard for managing information security" },
  { name: "C2M2", scope: "Framework for measuring and improving cybersecurity programs" },
  { name: "AWIA 2018", scope: "US law requiring security assessments for water systems" },
  { name: "TSA Pipeline Security", scope: "US government-mandated security rules for pipeline operators" },
  { name: "DOE CESER", scope: "US Department of Energy cybersecurity program for energy companies" },
]

const stats = [
  { value: "NERC CIP", label: "Mandatory power grid security rules met" },
  { value: "IEC 62443", label: "International industrial security standard" },
  { value: "24/7", label: "Industrial system monitoring" },
  { value: "0", label: "Operational disruptions during deployment" },
]

export default function EnergyPage() {
  return (
    <>
      <JsonLd schema={[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://aethoncore.com"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://aethoncore.com/industries"},{"@type":"ListItem","position":3,"name":"Energy & Utilities","item":"https://aethoncore.com/industries/energy"}]}]} />
      <PageHero
        breadcrumbs={[{ label: "Industries", href: "/industries" }, { label: "Energy & Utilities" }]}
        eyebrow="Energy & Utilities"
        title="Security for the systems that actually control the power — not just the office network"
        subtitle="Security for power generation and distribution control systems, built to meet the mandatory rules for grid operators. A successful attack on these systems isn't a data breach — it's a national security event."
        variant="dark"
        backgroundImageSrc="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=3840&q=100"
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
              Energy infrastructure needs security that matches the seriousness of what's at stake
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Energy infrastructure is one of the most targeted sectors for cyberattacks. We approach industrial security with that seriousness — which means protecting the systems that actually run generation and distribution, not just the office network.
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
              Industrial security built by people who understand how power systems work
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Treating industrial security the same as office IT security creates a false sense of safety. We treat industrial system security as a distinct and specialized discipline.
            </p>
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
              Energy sector standards we implement and maintain
            </h2>
            <p className="mt-4 text-base text-canvas-muted">
              Regulatory compliance in the energy sector spans NERC, FERC, TSA, and DOE requirements. We design to all of them — not just the ones that are easiest to implement.
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
                Securing operational technology during a live grid modernization
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                A regional utility upgrading to a smart grid needed to add security controls to their industrial control systems while keeping generation and distribution equipment running. Taking the systems offline to add security wasn't an option.
              </p>
              <Link
                href="/case-studies/energy-grid-security"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors hover:text-blue-hover"
              >
                Read our approach
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col justify-center rounded-xl bg-brand p-6 text-white lg:col-span-2">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">Our approach</p>
              <p className="text-sm leading-relaxed text-white/90">
                We add the required power grid security controls without stopping operations. Security is implemented in stages, with each phase verified before the next begins.
              </p>
              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-white/50">
                <Zap className="h-3.5 w-3.5" />
                Energy & Utilities · Industrial Security
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Operating grid infrastructure or critical energy assets?"
        subtitle="Our industrial security team has hands-on experience with mandatory power grid security rules, protecting live industrial systems, and securing grid modernization programs while they're running."
        primaryLabel="Talk to an OT security specialist"
        primaryHref="/contact"
        secondaryLabel="See all use cases"
        secondaryHref="/case-studies"
      />
    </>
  )
}
