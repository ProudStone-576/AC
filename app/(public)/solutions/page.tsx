import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BarChart2, Building2, Cloud, Globe, Layers, Shield, TrendingDown, Wrench, Server } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Infrastructure, security, data, and managed services for enterprises that cannot afford downtime or vendor lock-in.",
}

const solutions = [
  {
    icon: Layers,
    category: "Platform",
    title: "Unified infrastructure management",
    description:
      "Replace 8–12 separate tools with one system. Every part of your infrastructure — servers, network, storage, security — visible and manageable from one place.",
    outcomes: [
      "75% reduction in infrastructure tool sprawl",
      "< 8ms P99 latency globally",
      "99.99% uptime SLA, contractually enforced",
    ],
    href: "/products/platform",
    cta: "Explore the platform",
  },
  {
    icon: Shield,
    category: "Security",
    title: "End-to-end enterprise security",
    description:
      "Zero Trust security, 24/7 monitoring by dedicated engineers, and automated compliance evidence. Built for organizations that answer to regulators and boards.",
    outcomes: [
      "Zero Trust security, enforced at every layer",
      "Threats detected in 4 min, contained in 18 min",
      "12 compliance frameworks covered",
    ],
    href: "/products/security",
    cta: "Explore Security Center",
  },
  {
    icon: BarChart2,
    category: "Data",
    title: "Real-time data intelligence",
    description:
      "Ingest, transform, and query billions of events. Business analysts get self-service access. Engineers get a full-featured query engine. Executives get dashboards that are never stale.",
    outcomes: [
      "< 200ms P99 query on 12-month history",
      "2M events/sec sustained ingestion",
      "80+ native connectors",
    ],
    href: "/products/analytics",
    cta: "Explore Analytics Suite",
  },
  {
    icon: Cloud,
    category: "Cloud",
    title: "Multi-cloud without the complexity",
    description:
      "Design and run reliable systems across AWS, Azure, Google Cloud, and private environments. Your workloads are automatically placed where they'll be fastest, cheapest, and compliant.",
    outcomes: [
      "Works across cloud and on-site environments",
      "No preferred cloud vendor — we recommend what's right",
      "Cost controls built in",
    ],
    href: "/services/cloud",
    cta: "Explore cloud services",
  },
  {
    icon: Building2,
    category: "Managed Operations",
    title: "Your infrastructure, fully managed",
    description:
      "24/7/365 management by certified Aethon Core engineers. Dedicated service delivery manager. Defined escalation paths. We act as an extension of your team, not a call center.",
    outcomes: [
      "24/7 monitoring with dedicated engineers",
      "Incident response SLA in your contract",
      "Monthly business reviews with your team",
    ],
    href: "/services/managed",
    cta: "Explore managed services",
  },
  {
    icon: Globe,
    category: "Global Architecture",
    title: "Infrastructure designed for distributed operations",
    description:
      "Multi-region architecture with colocation, cloud, and edge support. Data residency requirements, latency thresholds, and regional compliance — all enforced within the platform, not manually managed per deployment.",
    outcomes: [
      "Multi-cloud and on-premise orchestration",
      "< 30ms from any major population center",
      "Regional data residency enforced in policy",
    ],
    href: "/products/platform",
    cta: "View platform capabilities",
  },
]

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Solutions" }]}
        eyebrow="Solutions"
        title="Infrastructure solutions for enterprises that cannot afford to fail"
        subtitle="Every solution is built on the same platform. One contract. One account team. Complete coverage."
        variant="tinted"
        backgroundImageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=3840&q=100"
      />

      {/* Solutions grid */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="space-y-6">
            {solutions.map((solution, i) => (
              <div
                key={solution.title}
                className={`grid grid-cols-1 gap-8 rounded-xl border border-border p-8 lg:grid-cols-3 ${
                  i % 2 === 0 ? "bg-white dark:bg-card" : "bg-surface dark:bg-background"
                }`}
              >
                {/* Label + icon */}
                <div className="flex flex-col gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-light">
                    <solution.icon className="h-5 w-5 text-blue" />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue">
                      {solution.category}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground">{solution.title}</h3>
                  </div>
                  <Link
                    href={solution.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-blue transition-colors hover:text-blue-hover"
                  >
                    {solution.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                {/* Description + outcomes */}
                <div className="lg:col-span-2">
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{solution.description}</p>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {solution.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2 rounded-lg bg-white p-3 text-xs font-medium text-foreground/80 shadow-sm dark:bg-card"
                      >
                        <div className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By role */}
      <section className="bg-surface py-16 dark:bg-card lg:py-20">
        <div className="container-enterprise">
          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">By role</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              The same platform — different reasons to care
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">
              The people who evaluate and approve enterprise infrastructure decisions each care about different problems.
              Here&apos;s where Aethon Core is most relevant to each.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            {/* CTO / VP Engineering */}
            <div className="rounded-xl border border-border bg-white p-6 dark:bg-background">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                <Wrench className="h-5 w-5 text-blue" />
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue">
                CTO / VP Engineering
              </p>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                Too many tools, not enough visibility
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                Most engineering organizations run 8–12 separate infrastructure tools that don&apos;t talk to each
                other. Incidents span multiple systems. Context switches between dashboards cost time. Aethon Core
                consolidates these into one control plane — without replacing the underlying infrastructure.
              </p>
              <ul className="mb-5 space-y-2">
                {[
                  { label: "Platform consolidation", href: "/products/platform" },
                  { label: "DevOps & platform engineering", href: "/services/devops" },
                  { label: "Architecture review", href: "/services/architecture" },
                  { label: "Infrastructure assessment", href: "/services/assessment" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm font-medium text-blue hover:text-blue-hover transition-colors"
                    >
                      <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CISO */}
            <div className="rounded-xl border border-border bg-white p-6 dark:bg-background">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                <Shield className="h-5 w-5 text-blue" />
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue">
                CISO / Head of Security
              </p>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                Coverage gaps and compliance burden
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                Security tools that only cover part of the environment leave gaps. Compliance evidence that gets
                assembled manually before every audit is a risk and a distraction. Aethon Core Security provides
                continuous monitoring across every layer and generates audit-ready evidence automatically.
              </p>
              <ul className="mb-5 space-y-2">
                {[
                  { label: "Cybersecurity service", href: "/services/security" },
                  { label: "Identity & access management", href: "/services/iam" },
                  { label: "Compliance & audit readiness", href: "/services/compliance" },
                  { label: "Core Security product", href: "/products/security" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm font-medium text-blue hover:text-blue-hover transition-colors"
                    >
                      <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CFO */}
            <div className="rounded-xl border border-border bg-white p-6 dark:bg-background">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                <TrendingDown className="h-5 w-5 text-blue" />
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue">
                CFO / Finance Leadership
              </p>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                Unpredictable cloud costs and vendor sprawl
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                Cloud spending that grows faster than the business and infrastructure vendor contracts that renew on
                different cycles are hard to control or justify. Aethon Core replaces multiple vendor relationships
                with one contract and one invoice — and actively manages cloud spend down.
              </p>
              <ul className="mb-5 space-y-2">
                {[
                  { label: "FinOps & cloud cost management", href: "/services/finops" },
                  { label: "Platform pricing", href: "/pricing" },
                  { label: "ROI estimator", href: "/roi" },
                  { label: "Strategy consulting", href: "/services/consulting" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm font-medium text-blue hover:text-blue-hover transition-colors"
                    >
                      <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COO / IT Director */}
            <div className="rounded-xl border border-border bg-white p-6 dark:bg-background">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                <Server className="h-5 w-5 text-blue" />
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue">
                COO / IT Director
              </p>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                Downtime costs and operational risk
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                Unplanned downtime has a direct cost — and so does a support provider who treats your critical
                incidents as tickets in a queue. Aethon Core Managed Services provides 24/7 coverage by named
                engineers, contractual response SLAs, and a dedicated client portal for full visibility into
                what&apos;s happening in your environment at all times.
              </p>
              <ul className="mb-5 space-y-2">
                {[
                  { label: "Managed services", href: "/services/managed" },
                  { label: "Disaster recovery & BCP", href: "/services/disaster-recovery" },
                  { label: "Network & connectivity", href: "/services/network" },
                  { label: "How we work", href: "/how-we-work" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm font-medium text-blue hover:text-blue-hover transition-colors"
                    >
                      <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* By industry callout */}
      <section className="py-12 dark:bg-background">
        <div className="container-enterprise">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Looking for industry-specific solutions?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We have dedicated practice teams for financial services, healthcare, manufacturing, and five other verticals.
              </p>
            </div>
            <Link
              href="/industries"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              View industry solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which solution fits your situation?"
        subtitle="Our enterprise advisors map your current environment and recommend the right starting point. No generic pitch."
        primaryLabel="Talk to an advisor"
        primaryHref="/contact"
        secondaryLabel="View case studies"
        secondaryHref="/case-studies"
      />
    </>
  )
}
