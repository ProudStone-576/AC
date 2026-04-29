import { JsonLd } from "@/components/ui/JsonLd"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, Lock, FileText, Landmark, Clock, AlertTriangle
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Financial Services IT Infrastructure Canada | SOX, PCI DSS, OSFI | Aethon Core",
  description: "Managed IT services for Canadian banks, insurers, and capital markets firms. SOX, PCI DSS, OSFI, and DORA compliance built into every layer. 24/7 operations, Zero Trust security, and contractual SLAs.",
  keywords: [
    "financial services IT Canada",
    "banking IT services Canada",
    "financial services cybersecurity Canada",
    "SOX compliance Canada",
    "PCI DSS Canada",
    "OSFI compliance Canada",
    "fintech infrastructure Canada",
    "capital markets IT Canada",
    "financial services managed services Canada",
    "bank IT services Toronto",
  ],
  alternates: { canonical: "https://aethoncore.com/industries/financial-services" },
  openGraph: {
    type: "website", locale: "en_CA", url: "https://aethoncore.com/industries/financial-services",
    siteName: "Aethon Core",
    title: "Financial Services IT Infrastructure Canada | SOX, PCI DSS, OSFI | Aethon Core",
    description: "Managed IT services for Canadian banks, insurers, and capital markets firms. SOX, PCI DSS, OSFI, and DORA compliance built into every layer. 24/7 operations, Zero Trust security, and contractual SLAs.",
  },
}

const challenges = [
  {
    icon: FileText,
    title: "Multi-jurisdiction compliance",
    description:
      "Operating across regulatory borders — SOX in the US, DORA in Europe, MAS in Singapore — typically pushes organizations toward building separate stacks per jurisdiction. That model creates exponential operational debt.",
  },
  {
    icon: Clock,
    title: "Sub-millisecond latency requirements",
    description:
      "Trading, payments, and real-time risk engines require infrastructure that responds in microseconds. Most enterprise platforms weren't designed to deliver that with compliance controls active simultaneously.",
  },
  {
    icon: AlertTriangle,
    title: "Legacy core system risk",
    description:
      "Decades-old core banking infrastructure is a structural liability. Modernization is unavoidable — but a failed migration or unplanned outage in a financial system has consequences that no SLA can cover.",
  },
  {
    icon: Lock,
    title: "Third-party risk surface",
    description:
      "Financial institutions are increasingly targeted through their vendor and partner ecosystem. DORA now requires demonstrated third-party resilience, not just contractual guarantees.",
  },
]

const capabilities = [
  {
    title: "Compliance that adapts by policy, not by rebuild",
    description:
      "Rules for each country or regulation are enforced at the policy layer — not hard-wired into separate systems. Adding a new market means updating a policy, not building a new environment.",
    stat: "SOX · PCI-DSS · DORA · GDPR · MAS · FSRA",
  },
  {
    title: "Low-latency trading infrastructure",
    description:
      "On-site servers, high-speed networking, and optimized execution paths designed for microsecond-level performance. Compliance controls run separately so they never slow down the transaction path.",
    stat: "Under 1ms response time for co-located workloads",
  },
  {
    title: "Zero Trust security across all systems",
    description:
      "No system automatically trusts another, regardless of where it sits on the network. Every connection is authenticated, encrypted, and logged. A breach in one system can't spread to others.",
    stat: "NIST SP 800-207 aligned",
  },
  {
    title: "Audit-ready evidence, automatically",
    description:
      "A tamper-proof 7-year activity log with automatically compiled evidence packages for SOX, PCI DSS, and DORA reporting. Auditors get what they need without requiring engineer time.",
    stat: "7-year retention · auto-packaged audit reports",
  },
  {
    title: "Core system modernization",
    description:
      "We run legacy and modern systems in parallel with traffic gradually shifted. Zero hard cutovers. The migration is fully complete before the legacy system is decommissioned.",
    stat: "Zero-downtime migration methodology",
  },
  {
    title: "Third-party risk monitoring",
    description:
      "Continuous monitoring of vendor and partner connections. Automated alerting on anomalous access patterns. DORA-aligned ICT third-party risk reports generated on demand.",
    stat: "DORA Article 28 compliant",
  },
]

const complianceFrameworks = [
  { name: "SOX (Sarbanes-Oxley)", scope: "US public companies and subsidiaries" },
  { name: "PCI DSS v4.0", scope: "Cardholder data environments" },
  { name: "DORA", scope: "EU financial entities and ICT providers" },
  { name: "GDPR", scope: "EU personal data processing" },
  { name: "MAS TRM", scope: "Singapore financial institutions" },
  { name: "FSRA / CBUAE", scope: "UAE financial institutions" },
  { name: "GLBA", scope: "US financial data protection" },
  { name: "NY DFS 500", scope: "NY-licensed financial entities" },
]

const stats = [
  { value: "99.999%", label: "Uptime SLA for financial workloads" },
  { value: "< 1ms", label: "P99 latency, co-located trading" },
  { value: "8", label: "Compliance frameworks, out of the box" },
  { value: "7yr", label: "Immutable audit retention" },
]

export default function FinancialServicesPage() {
  return (
    <>
      <JsonLd schema={[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://aethoncore.com"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://aethoncore.com/industries"},{"@type":"ListItem","position":3,"name":"Financial Services","item":"https://aethoncore.com/industries/financial-services"}]}]} />
      <PageHero
        breadcrumbs={[{ label: "Industries", href: "/industries" }, { label: "Financial Services" }]}
        eyebrow="Financial Services"
        title="Technology that keeps regulators happy and trading fast — at the same time"
        subtitle="We build systems for banks, insurers, and capital markets firms that meet strict regulations (SOX, PCI-DSS, DORA, GDPR) while staying fast enough for modern financial operations."
        variant="dark"
        backgroundImageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=3840&q=100"
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
              Financial infrastructure engineering is uniquely constrained
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Performance and compliance requirements don't negotiate with each other. The architecture has to satisfy both — by design, not by exception.
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

      {/* How we help */}
      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Our approach</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Built for the most demanding financial environments
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Every capability was built in response to a real problem a financial institution couldn't solve with off-the-shelf tooling.
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
              Frameworks we design to from day one
            </h2>
            <p className="mt-4 text-base text-canvas-muted">
              Compliance isn't layered on after the architecture is designed. We design the architecture to the compliance requirements — then verify.
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
                Scaling across regulatory borders without multiplying infrastructure complexity
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                A bank expanding into new countries faces a common trap: each country has different regulations, and the instinct is to build a separate technology stack for each one. That approach creates more complexity and cost than the business can sustain.
              </p>
              <Link
                href="/case-studies/financial-multi-jurisdiction"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors hover:text-blue-hover"
              >
                Read our approach
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col justify-center rounded-xl bg-brand p-6 text-white lg:col-span-2">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">Our approach</p>
              <p className="text-sm leading-relaxed text-white/90">
                We built one unified system where the rules change by policy — not by rebuilding the architecture. Adding a new market means updating a policy, not deploying new infrastructure.
              </p>
              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-white/50">
                <Landmark className="h-3.5 w-3.5" />
                Financial Services · Multi-Jurisdiction
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Serving a financial institution with complex compliance requirements?"
        subtitle="Our financial services team understands what regulators and boards actually need — not just what the audit checklist requires."
        primaryLabel="Talk to a financial services specialist"
        primaryHref="/contact"
        secondaryLabel="See all use cases"
        secondaryHref="/case-studies"
      />
    </>
  )
}
