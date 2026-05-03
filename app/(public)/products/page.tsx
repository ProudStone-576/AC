import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight, BarChart2, Layers, Shield, Workflow,
  CheckCircle2, Zap, Globe, Lock,
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Products",
  description:
    "Four products that work together as one system — manage your infrastructure, analyze your data, automate operations, and secure everything from one place.",
}

const products = [
  {
    icon: Layers,
    eyebrow: "Core Platform",
    title: "One place to manage all your technology",
    description:
      "Manage your servers, storage, network, and user access from a single dashboard — whether you run on the cloud, in your own data center, or both. Same rules everywhere, one monthly bill.",
    stats: [
      { value: "99.99%", label: "Uptime guarantee" },
      { value: "< 8ms", label: "Response time" },
      { value: "11×", label: "Tools replaced per customer" },
    ],
    highlights: [
      "One dashboard for all your environments",
      "Clear rules and a full history of every change",
      "Works across cloud, on-site, and remote locations",
      "Connects with the tools you already use",
    ],
    href: "/products/platform",
    featured: true,
  },
  {
    icon: BarChart2,
    eyebrow: "Core Analytics",
    title: "Get answers from your data in seconds, not days",
    description:
      "Search through huge amounts of data almost instantly — without managing the infrastructure behind it. Pre-built dashboards for 200+ common platforms included.",
    stats: [
      { value: "2M", label: "Events processed per second" },
      { value: "< 100ms", label: "Search response time" },
      { value: "2.4 PB", label: "Active data storage" },
    ],
    highlights: [
      "Real-time data processing at massive scale",
      "Full data lineage tracking for compliance requirements",
      "No-code dashboard builder for non-technical teams",
      "Access controls enforced at the data level",
    ],
    href: "/products/analytics",
    featured: false,
  },
  {
    icon: Workflow,
    eyebrow: "Automation Engine",
    title: "Let your systems handle routine problems automatically",
    description:
      "Turn manual response steps into automated workflows. 68% of incidents are resolved without anyone having to step in. Every action is logged.",
    stats: [
      { value: "68%", label: "Incidents resolved automatically" },
      { value: "400+", label: "Connectors" },
      { value: "< 90s", label: "Average resolution time" },
    ],
    highlights: [
      "Visual workflow builder — no coding required",
      "Every automation rule is tracked and versioned",
      "Automated actions only run within approved boundaries",
      "Triggered by events across all your monitored systems",
    ],
    href: "/products/automation",
    featured: false,
  },
  {
    icon: Shield,
    eyebrow: "Core Security",
    title: "Security built into your infrastructure, not bolted on",
    description:
      "Security that's part of how your systems work — not an add-on layer. Continuous threat detection, automatic response, and compliance reporting across your whole environment.",
    stats: [
      { value: "< 4 min", label: "Average threat detection time" },
      { value: "99.97%", label: "Threat detection rate" },
      { value: "100%", label: "Environments under continuous monitoring" },
    ],
    highlights: [
      "Zero Trust security — verify everyone, trust nothing by default",
      "Ongoing compliance checks — HIPAA (health data), PCI DSS (credit card payments), FedRAMP (US government), NERC CIP (energy)",
      "24/7 threat detection with automatic response",
      "Tamper-evident audit trail for legal and regulatory requirements",
    ],
    href: "/products/security",
    featured: false,
  },
]

const platformBenefits = [
  {
    icon: Zap,
    title: "All products built to work together",
    description:
      "Every product shares the same login system and rule engine. They're designed to work together out of the box — no custom integration work needed.",
  },
  {
    icon: Globe,
    title: "One contract, one bill",
    description:
      "One agreement, one uptime guarantee, one support team. No juggling multiple vendors, renewal dates, or support contacts.",
  },
  {
    icon: Lock,
    title: "Security included by default",
    description:
      "Every product meets the same security standard. Access controls, activity logs, and encryption are built in — not optional add-ons.",
  },
]

export default function ProductsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Products" }]}
        eyebrow="Products"
        title="Four products. One system. Everything your business runs on."
        subtitle="Built to work together from day one. Your team manages everything from a single place — not four separate tools with separate logins and separate support teams."
        backgroundImageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?w=3840&q=100"
        variant="tinted"
      />

      {/* Product listing */}
      <section className="bg-white py-16 dark:bg-background lg:py-24">
        <div className="container-enterprise space-y-16">
          {products.map((product, index) => (
            <div
              key={product.href}
              className={`grid grid-cols-1 gap-10 rounded-2xl border border-border p-8 lg:grid-cols-2 lg:gap-16 lg:p-12 ${
                product.featured ? "bg-surface dark:bg-card" : "bg-white dark:bg-background"
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                    <product.icon className="h-5 w-5 text-blue" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue">
                    {product.eyebrow}
                  </span>
                </div>
                <h2 className="mb-4 text-2xl font-semibold leading-snug text-foreground lg:text-3xl">
                  {product.title}
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <ul className="mb-8 space-y-2.5">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href={product.href}
                  className="inline-flex items-center gap-2 rounded-md bg-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-hover"
                >
                  Explore {product.eyebrow}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Stats */}
              <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  By the numbers
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {product.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-border bg-white p-4 text-center dark:bg-card"
                    >
                      <p className="text-xl font-semibold text-foreground lg:text-2xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[11px] leading-tight text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact?inquiry=demo"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Request a live demo
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-width photo break */}
      <div className="relative h-72 overflow-hidden lg:h-96">
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=3840&q=100"
          alt="Enterprise technology platform infrastructure"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-canvas/65" />
        <div className="container-enterprise relative flex h-full flex-col items-start justify-end pb-10">
          <p className="max-w-xl text-sm leading-relaxed text-white/80">
            Four products sharing one foundation means one login, one support team, and one contract. Everything works together on day one — no integration project required.
          </p>
        </div>
      </div>

      {/* Why one platform */}
      <section className="bg-surface py-16 dark:bg-card lg:py-20">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">
              Why one platform
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Products that work better together
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Every product shares the same foundation. Adding a second product takes no integration work — it&apos;s already connected.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {platformBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-border bg-white p-6 dark:bg-background"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-light">
                  <benefit.icon className="h-[18px] w-[18px] text-blue" />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison strip */}
      <section className="bg-canvas py-16 lg:py-20">
        <div className="container-enterprise">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">
              Platform vs. point tools
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Most enterprises run 11+ tools to do what we do in one
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white/40">Capability</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white/40">Typical enterprise stack</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-blue">Aethon Core</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  ["Infrastructure control", "4–6 separate orchestration tools", "One management system"],
                  ["Observability", "Separate logging, metrics, and tracing stacks", "Unified query layer across all signals"],
                  ["Automation", "Per-tool response scripts, no cross-system triggers", "Event-driven workflows across all systems"],
                  ["Security coverage", "Point scanner per environment", "Continuous assessment — every layer, always on"],
                  ["Compliance reporting", "Manual evidence gathering", "Automated, audit-ready reports on demand"],
                  ["Billing", "Separate invoices per vendor", "One invoice, one SLA"],
                ].map(([capability, before, after]) => (
                  <tr key={capability} className="bg-white/[0.03]">
                    <td className="px-6 py-3.5 text-sm font-medium text-white/70">{capability}</td>
                    <td className="px-6 py-3.5 text-sm text-white/40">{before}</td>
                    <td className="px-6 py-3.5 text-sm font-medium text-blue">{after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection
        variant="surface"
        title="See every product in a single demo"
        subtitle="Our engineers walk you through the full platform in 45 minutes — live, on your actual use case."
        primaryLabel="Book a platform demo"
        primaryHref="/contact?inquiry=demo"
        secondaryLabel="View pricing"
        secondaryHref="/pricing"
      />
    </>
  )
}
