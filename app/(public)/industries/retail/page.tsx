import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, ShoppingBag,
  AlertTriangle, Globe, Clock, Database
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Retail & Commerce — Industries",
  description:
    "Infrastructure that handles 40x peak traffic surges, sub-100ms storefront response times, and omnichannel data integration for modern retail.",
}

const challenges = [
  {
    icon: AlertTriangle,
    title: "Peak traffic crushing production",
    description:
      "Black Friday, Cyber Monday, flash sales, and live commerce events generate traffic spikes that are 20–40x normal load. An infrastructure that handles average load is not the same as one that handles peak load. Most retailers find out the difference at the worst possible moment.",
  },
  {
    icon: Database,
    title: "Fragmented omnichannel data",
    description:
      "Customer data sits in separate systems for e-commerce, point-of-sale, loyalty, and fulfilment. Unifying it into a real-time view is the foundation for personalization, inventory optimization, and accurate reporting — and most retailers are years behind.",
  },
  {
    icon: Clock,
    title: "Reporting latency killing decisions",
    description:
      "Weekly or daily reporting cycles mean merchandising and ops decisions are made on data that's already stale. The business intelligence system needs to run on the same clock as the business.",
  },
  {
    icon: Globe,
    title: "Global performance and compliance",
    description:
      "Cross-border e-commerce requires consistent performance in every market — and compliance with data residency and consumer privacy regulations in each. GDPR, CCPA, PIPEDA, and PDPA all have different requirements.",
  },
]

const capabilities = [
  {
    title: "Peak traffic architecture",
    description:
      "We architect for 40x normal load as a baseline. Auto-scaling triggers ahead of forecast events. Load shedding and graceful degradation are designed in — so even under stress, the storefront stays up and checkout works.",
    stat: "Tested to 40x peak traffic loads",
  },
  {
    title: "Sub-100ms storefront response",
    description:
      "Edge caching, globally distributed origin infrastructure, and optimized database query paths deliver sub-100ms response times under peak load. Performance budgets are enforced at the infrastructure layer.",
    stat: "< 100ms P99 storefront response at peak",
  },
  {
    title: "Omnichannel data integration",
    description:
      "We build the data pipeline that unifies POS, e-commerce, loyalty, CRM, and fulfilment into a single operational data store. Every touchpoint is in the same system, updated in real time.",
    stat: "< 5 second cross-channel data latency",
  },
  {
    title: "Real-time analytics and reporting",
    description:
      "From raw transaction data to role-specific dashboards in minutes — not overnight. Inventory levels, conversion rates, and basket size are visible as they happen. Decisions are made on current data.",
    stat: "Sub-minute reporting refresh cycles",
  },
  {
    title: "Payment infrastructure security",
    description:
      "PCI DSS v4.0 compliant cardholder data environments with tokenization, point-to-point encryption, and scope-minimization architecture. Annual QSA assessments supported.",
    stat: "PCI DSS v4.0 · P2PE · tokenization",
  },
  {
    title: "Global data residency compliance",
    description:
      "Data residency policies enforced at the platform layer. Customer data stays where regulations require without fragmenting your operational architecture. GDPR, CCPA, PIPEDA, and PDPA covered.",
    stat: "GDPR · CCPA · PIPEDA · PDPA",
  },
]

const complianceFrameworks = [
  { name: "PCI DSS v4.0", scope: "Cardholder data environments" },
  { name: "GDPR", scope: "EU consumer data processing" },
  { name: "CCPA / CPRA", scope: "California consumer privacy" },
  { name: "PIPEDA", scope: "Canadian privacy law" },
  { name: "PDPA", scope: "Southeast Asia consumer data" },
  { name: "SOC 2 Type II", scope: "Cloud service controls" },
  { name: "ISO 27001", scope: "Information security management" },
  { name: "WCAG 2.2 AA", scope: "Accessibility compliance" },
]

const stats = [
  { value: "40x", label: "Peak traffic headroom, tested" },
  { value: "< 100ms", label: "P99 storefront response at peak" },
  { value: "< 5s", label: "Cross-channel data latency" },
  { value: "PCI DSS", label: "v4.0 compliant environments" },
]

export default function RetailPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Industries", href: "/industries" }, { label: "Retail & Commerce" }]}
        eyebrow="Retail & Commerce"
        title="Infrastructure that handles peak traffic as calmly as a quiet Tuesday"
        subtitle="Architecture tested to 40x peak loads, sub-100ms storefront response times, and real-time omnichannel data for retailers that can't afford Black Friday surprises."
        variant="dark"
        backgroundImageSrc="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=3840&q=100"
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
              Retail infrastructure is tested when it's least convenient to fail
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Peak commerce events are simultaneously the highest-revenue and highest-risk moments for retail infrastructure. The platform has to be built for the worst-case load — not average load.
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
              Built for the demands of modern commerce
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Every capability exists because a retailer hit a wall at a critical moment. We build the architecture that eliminates those moments.
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
              Consumer data and payment compliance, globally
            </h2>
            <p className="mt-4 text-base text-canvas-muted">
              Retail compliance spans payment security and consumer data privacy across multiple jurisdictions. We design to all relevant frameworks from the start.
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
                Moving from weekly reporting cycles to same-day operational intelligence
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                A multi-channel retailer with stores, e-commerce, and wholesale operations ran on overnight batch reporting. Merchandising decisions were made on data that was 24–48 hours old. The CEO couldn't get current inventory numbers without asking an analyst.
              </p>
              <Link
                href="/case-studies/retail-analytics"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors hover:text-blue-hover"
              >
                Read our approach
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col justify-center rounded-xl bg-brand p-6 text-white lg:col-span-2">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">Our approach</p>
              <p className="text-sm leading-relaxed text-white/90">
                We rebuild the data pipeline from ingestion through to role-specific dashboards. When the CEO needs a number, they get it in minutes — not by asking a data analyst.
              </p>
              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-white/50">
                <ShoppingBag className="h-3.5 w-3.5" />
                Retail & Commerce · Real-Time Analytics
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Running a retail or e-commerce business with infrastructure challenges?"
        subtitle="Our retail infrastructure team understands peak load, omnichannel data, and payment compliance — and how to deliver all three simultaneously."
        primaryLabel="Talk to a retail specialist"
        primaryHref="/contact"
        secondaryLabel="See all use cases"
        secondaryHref="/case-studies"
      />
    </>
  )
}
