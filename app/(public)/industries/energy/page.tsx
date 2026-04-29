import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, Zap, Network,
  AlertTriangle, Lock, Eye
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Energy & Utilities — Industries",
  description:
    "NERC CIP compliant OT security and grid modernization for energy and utility companies operating critical national infrastructure.",
}

const challenges = [
  {
    icon: AlertTriangle,
    title: "OT systems are prime attack targets",
    description:
      "Energy infrastructure is among the most consequential targets for nation-state and criminal cyberattacks. A successful attack on grid control systems isn't a data breach — it's a national security event. The security standard has to match the consequence.",
  },
  {
    icon: Lock,
    title: "Legacy OT with no security model",
    description:
      "Much of the operational technology controlling generation, transmission, and distribution was deployed before cybersecurity was a design consideration. These systems can't be patched or replaced quickly — they have to be protected in place.",
  },
  {
    icon: Network,
    title: "Too many new connections, not enough security",
    description:
      "Grid modernization, smart meters, and remote monitoring are connecting industrial systems to standard IP networks. Each new connection is a potential entry point. The number of ways attackers can get in is growing faster than most utility security teams can handle.",
  },
  {
    icon: Eye,
    title: "NERC CIP compliance complexity",
    description:
      "NERC CIP standards require extensive documentation, evidence collection, and continuous monitoring across bulk electric system assets. The compliance program is operationally demanding and the penalties for non-compliance are severe.",
  },
]

const capabilities = [
  {
    title: "NERC CIP compliant OT security",
    description:
      "We implement the full NERC CIP control set — physical security, electronic security perimeters, system security management, incident reporting, and supply chain risk management — as operational architecture, not a documentation program.",
    stat: "NERC CIP-002 through CIP-014",
  },
  {
    title: "IEC 62443 security framework",
    description:
      "The international standard for industrial control system security shapes how we design every OT implementation. Systems are separated into distinct zones with clearly monitored connections between them — so a problem in one area can't spread to others.",
    stat: "IEC 62443-2-1 · IEC 62443-3-3",
  },
  {
    title: "Air-gapped and hybrid grid deployments",
    description:
      "Where NERC CIP or operational requirements demand physical separation, we design and operate air-gapped environments. Where hybrid connectivity is required, we architect it with the minimum necessary exposure and maximum monitoring.",
    stat: "Air-gapped · unidirectional gateways · DMZ design",
  },
  {
    title: "OT monitoring without operational disruption",
    description:
      "Passive monitoring of OT networks using protocol-aware tools designed for industrial systems. Anomaly detection calibrated to operational baselines — not IT traffic patterns. Zero disruption to operational processes.",
    stat: "Dragos · Claroty · Nozomi integration",
  },
  {
    title: "Incident response for OT environments",
    description:
      "Incident response in OT environments requires different playbooks than IT. Our OT-specialized response team knows how to contain threats without taking generation or distribution assets offline unnecessarily.",
    stat: "OT-specific IR playbooks · 24/7 response",
  },
  {
    title: "Grid modernization security architecture",
    description:
      "Smart grid deployments, smart meters, and distributed energy management systems introduce new ways attackers can get in. We build security into these modernization programs from the design phase — not bolted on afterward.",
    stat: "AMI · DERMS · smart grid security",
  },
]

const complianceFrameworks = [
  { name: "NERC CIP", scope: "Bulk electric system cybersecurity" },
  { name: "IEC 62443", scope: "Industrial control system security" },
  { name: "NIST SP 800-82", scope: "ICS security guide" },
  { name: "ISO 27001", scope: "Information security management" },
  { name: "C2M2", scope: "Cybersecurity capability maturity" },
  { name: "AWIA 2018", scope: "Water and wastewater security" },
  { name: "TSA Pipeline Security", scope: "Pipeline cybersecurity directives" },
  { name: "DOE CESER", scope: "Energy sector cybersecurity" },
]

const stats = [
  { value: "NERC CIP", label: "Compliant OT security" },
  { value: "IEC 62443", label: "Industrial security standard" },
  { value: "24/7", label: "OT threat monitoring" },
  { value: "0", label: "Operational disruptions during deployment" },
]

export default function EnergyPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Industries", href: "/industries" }, { label: "Energy & Utilities" }]}
        eyebrow="Energy & Utilities"
        title="We harden the operational layer, not just the IT perimeter"
        subtitle="NERC CIP compliant OT security and grid modernization for energy and utility companies where a successful cyberattack is a national security event, not just a data breach."
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
              OT security built by people who understand industrial systems
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Applying IT security thinking to OT environments creates false confidence. We approach industrial control system security as a distinct discipline.
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
                A regional utility undergoing a smart grid modernization program needed to add security controls to OT systems while keeping generation and distribution assets live. A standard change-freeze approach wasn't operationally viable.
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
                We apply NERC CIP controls to OT systems without halting operations. Security is implemented in stages, with each phase verified before the next begins.
              </p>
              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-white/50">
                <Zap className="h-3.5 w-3.5" />
                Energy & Utilities · OT Security
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Operating grid infrastructure or critical energy assets?"
        subtitle="Our OT security team has specific experience with NERC CIP, ICS environments, and grid modernization programs that can't pause for security retrofits."
        primaryLabel="Talk to an OT security specialist"
        primaryHref="/contact"
        secondaryLabel="See all use cases"
        secondaryHref="/case-studies"
      />
    </>
  )
}
