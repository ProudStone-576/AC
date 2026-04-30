import { JsonLd } from "@/components/ui/JsonLd"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, Activity, Lock,
  AlertTriangle, Clock, Eye
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Healthcare IT Services Canada | HIPAA, PIPEDA, PHIPA Compliant | Aethon Core",
  description: "Managed IT services for Canadian hospitals, health systems, and digital health companies. HIPAA, PIPEDA, and PHIPA-compliant infrastructure. Clinical and administrative workloads — 24/7 operations.",
  keywords: [
    "healthcare IT services Canada",
    "hospital IT services Canada",
    "HIPAA compliant IT Canada",
    "PIPEDA compliance healthcare Canada",
    "PHIPA compliance Canada",
    "healthcare cybersecurity Canada",
    "digital health infrastructure Canada",
    "healthcare managed services Canada",
    "clinical IT Canada",
    "healthcare IT British Columbia",
  ],
  alternates: { canonical: "https://aethoncore.com/industries/healthcare" },
  openGraph: {
    type: "website", locale: "en_CA", url: "https://aethoncore.com/industries/healthcare",
    siteName: "Aethon Core",
    title: "Healthcare IT Services Canada | HIPAA, PIPEDA, PHIPA Compliant | Aethon Core",
    description: "Managed IT services for Canadian hospitals, health systems, and digital health companies. HIPAA, PIPEDA, and PHIPA-compliant infrastructure. Clinical and administrative workloads — 24/7 operations.",
  },
}

const challenges = [
  {
    icon: Lock,
    title: "Protected health data at scale",
    description:
      "Health systems manage petabytes of PHI across EHRs, imaging systems, lab platforms, and patient portals. A single unencrypted data path or misconfigured access policy is a HIPAA breach — and a patient trust event.",
  },
  {
    icon: Clock,
    title: "Clinical system availability",
    description:
      "EHR downtime during a clinical shift directly impacts patient care. Infrastructure SLAs in healthcare aren't about revenue — they're about outcomes. The reliability standard has to reflect that.",
  },
  {
    icon: AlertTriangle,
    title: "Legacy clinical systems",
    description:
      "Many health systems run critical clinical applications on infrastructure that predates modern security architecture. Modernizing without disrupting clinical operations requires a specific methodology.",
  },
  {
    icon: Eye,
    title: "Ransomware exposure",
    description:
      "Healthcare is the most-targeted sector for ransomware. Most successful attacks spread by moving between connected systems — a problem Zero Trust security solves by ensuring no system automatically trusts another.",
  },
]

const capabilities = [
  {
    title: "HIPAA and HITRUST certified environments",
    description:
      "Every environment we build for healthcare clients is designed to HIPAA Security Rule requirements and validated against the HITRUST CSF. Certification isn't a post-deployment exercise — it's an architectural property.",
    stat: "HIPAA · HITRUST CSF · SOC 2 Type II",
  },
  {
    title: "Zero Trust for clinical networks",
    description:
      "We rebuild your security from the ground up. No system automatically trusts another — not clinical systems, not admin systems, not vendor connections. Every connection is continuously checked and verified.",
    stat: "NIST SP 800-207 · isolated by workload type",
  },
  {
    title: "Zero unencrypted data paths",
    description:
      "PHI is encrypted at rest (AES-256), in transit (TLS 1.3), and at every intermediate stage. We architect to ensure there are no exception paths — not even for legacy integrations.",
    stat: "FIPS 140-2 validated encryption",
  },
  {
    title: "High-availability EHR infrastructure",
    description:
      "Multi-zone active-active architectures for EHR and clinical imaging workloads. Failover occurs automatically without clinical workflow interruption. RPO and RTO are contractually defined.",
    stat: "99.99% uptime SLA · recovery point under 15 min",
  },
  {
    title: "Legacy system modernization",
    description:
      "We run legacy and modern clinical systems in parallel during migration. Traffic shifts gradually. Clinical workflows continue uninterrupted. Nothing is decommissioned before the modern replacement is validated.",
    stat: "Zero-disruption clinical migration methodology",
  },
  {
    title: "Managing third-party vendor access",
    description:
      "Healthcare vendor ecosystems are complex and high-risk. We manage vendor agreements, control what third parties can access, and continuously monitor all outside connections into your clinical environment.",
    stat: "Vendor agreement management · full access audit trail",
  },
]

const complianceFrameworks = [
  { name: "HIPAA Security Rule", scope: "PHI protection requirements" },
  { name: "HITRUST CSF", scope: "Healthcare information trust framework" },
  { name: "SOC 2 Type II", scope: "Controls assurance for cloud workloads" },
  { name: "HITECH Act", scope: "EHR adoption and breach notification" },
  { name: "21 CFR Part 11", scope: "Life sciences electronic records" },
  { name: "ISO 27001", scope: "Information security management" },
  { name: "NIST CSF", scope: "Cybersecurity framework" },
  { name: "FedRAMP Moderate", scope: "Federal health agency workloads" },
]

const stats = [
  { value: "99.99%", label: "Uptime SLA for clinical systems" },
  { value: "0", label: "Unencrypted data paths by architecture" },
  { value: "< 15min", label: "Recovery point objective" },
  { value: "HITRUST", label: "Certified environments" },
]

export default function HealthcarePage() {
  return (
    <>
      <JsonLd schema={[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://aethoncore.com"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://aethoncore.com/industries"},{"@type":"ListItem","position":3,"name":"Healthcare","item":"https://aethoncore.com/industries/healthcare"}]}]} />
      <PageHero
        breadcrumbs={[{ label: "Industries", href: "/industries" }, { label: "Healthcare" }]}
        eyebrow="Healthcare"
        title="Infrastructure where data breaches and downtime both cost patients"
        subtitle="HIPAA and HITRUST certified environments for health systems and life sciences organizations that operate in the most consequential infrastructure environments in the world."
        variant="dark"
        backgroundImageSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=3840&q=100"
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
              Healthcare infrastructure must be simultaneously the most secure and most available
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Data breaches cost patients. Downtime costs patients. The engineering standard has to reflect that — and most enterprise infrastructure platforms weren't built to it.
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
              Designed to the healthcare security standard from day one
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              We don't retrofit compliance onto existing architecture. HIPAA and HITRUST requirements are architectural inputs — designed in before a single resource is provisioned.
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Compliance coverage</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Frameworks we design to, not retrofit to
            </h2>
            <p className="mt-4 text-base text-canvas-muted">
              Compliance in healthcare has real consequences. We treat every framework as an architectural constraint — not a checklist applied after the fact.
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
                Rebuilding security in a health system without disrupting patient care
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                A large health system needed to stop systems from automatically trusting each other — a serious gap exposed by a near-miss ransomware incident. The constraint: clinical workflows couldn't be interrupted. Pausing operations to make changes wasn't an option.
              </p>
              <Link
                href="/case-studies/healthcare-zero-trust"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors hover:text-blue-hover"
              >
                Read our approach
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col justify-center rounded-xl bg-brand p-6 text-white lg:col-span-2">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">Our approach</p>
              <p className="text-sm leading-relaxed text-white/90">
                We rebuild security from the ground up — no system automatically trusts another, every connection is continuously verified, and all patient data is encrypted. Compliance becomes part of how the system is built, not a box ticked afterward.
              </p>
              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-white/50">
                <Activity className="h-3.5 w-3.5" />
                Healthcare · Zero Trust Security
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Operating a health system or life sciences organization?"
        subtitle="Our healthcare infrastructure team understands clinical uptime and PHI protection requirements — and how to satisfy both simultaneously."
        primaryLabel="Talk to a healthcare specialist"
        primaryHref="/contact"
        secondaryLabel="See all use cases"
        secondaryHref="/case-studies"
      />
    </>
  )
}
