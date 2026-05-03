import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Activity, Building, Landmark, Settings, ShoppingBag, Zap } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { industries } from "@/lib/constants/company"

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Aethon Core serves six industries deeply: financial services, healthcare, manufacturing, retail, government, and energy.",
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  landmark: Landmark,
  activity: Activity,
  settings: Settings,
  "shopping-bag": ShoppingBag,
  building: Building,
  zap: Zap,
}

const industryDetails = [
  {
    ...industries[0],
    stats: ["Meets SOX (financial controls), PCI-DSS (card payments), DORA (EU resilience), and GDPR (EU privacy) requirements", "99.999% uptime design for financial systems", "Fast infrastructure for trading and payment processing"],
    highlight: "In financial services, speed and compliance both matter. We build systems that handle both — without sacrificing one for the other.",
  },
  {
    ...industries[1],
    stats: ["HIPAA-compliant environments", "All data encrypted everywhere, always", "Strict access controls between clinical systems"],
    highlight: "Healthcare technology needs to be both secure and always available. A data breach harms patients. Downtime harms patients. We build to that standard.",
  },
  {
    ...industries[2],
    stats: ["Factory floor systems connected to business systems", "Security for industrial equipment and networks", "Live visibility from sensors to management dashboards"],
    highlight: "Modern factories run on software. We connect your factory floor and office systems so uptime, safety, and efficiency work together — not separately.",
  },
  {
    ...industries[3],
    stats: ["Tested to handle 40x normal traffic loads", "Data connected across all sales channels", "Fast checkout performance even during peak traffic"],
    highlight: "Your systems need to handle your busiest day as smoothly as a quiet one. Our platform scales automatically — no slowdowns, no surprise cost spikes.",
  },
  {
    ...industries[4],
    stats: ["FedRAMP High certified (required to work with US federal agencies)", "StateRAMP compliant (required for US state and local government)", "ITAR and CMMC compliance (US export control and defense contracts)"],
    highlight: "Government systems require stronger security, traceability, and reliability than most commercial platforms. We build to those standards from day one.",
  },
  {
    ...industries[5],
    stats: ["NERC CIP compliant (mandatory security rules for power grid operators)", "IEC 62443 industrial security framework (the standard for factory and energy control systems)", "Air-gapped and hybrid grid deployments"],
    highlight: "Energy infrastructure is a prime target for cyberattacks. We secure both your operational technology and IT systems — not just the outer edge.",
  },
]

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Industries" }]}
        eyebrow="Industries"
        title="Six industries. Real expertise in every one."
        subtitle="We focus on six industries because real expertise takes time to build. We know your regulations, your risks, and how your business actually works — before the first conversation."
        backgroundImageSrc="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=3840&q=100"
        variant="tinted"
      />

      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <div className="space-y-6">
            {industryDetails.map((industry) => {
              const Icon = iconMap[industry.icon]
              return (
                <div
                  key={industry.href}
                  className="grid grid-cols-1 gap-8 rounded-xl border border-border p-8 transition-colors hover:border-blue/20 lg:grid-cols-4"
                >
                  {/* Icon + title */}
                  <div className="flex flex-col gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-light">
                      {Icon && <Icon className="h-6 w-6 text-blue" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{industry.title}</h3>
                      <Link
                        href={industry.href}
                        className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-blue transition-colors hover:text-blue-hover"
                      >
                        Industry page
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Highlight */}
                  <div className="lg:col-span-2">
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {industry.highlight}
                    </p>
                    <p className="text-sm text-muted-foreground/70">{industry.description}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-col gap-3 rounded-lg bg-surface p-4 dark:bg-card">
                    {industry.stats.map((stat) => (
                      <div key={stat} className="flex items-start gap-2 text-sm">
                        <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue" />
                        <span className="text-muted-foreground">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Full-width photo break */}
      <div className="relative h-72 overflow-hidden lg:h-96">
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=3840&q=100"
          alt="Global cities and industries served by Aethon Core"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-canvas/65" />
        <div className="container-enterprise relative flex h-full flex-col items-start justify-end pb-10">
          <p className="max-w-xl text-sm leading-relaxed text-white/80">
            Real expertise takes time to build. We focus on six industries because that depth matters more than breadth — your team gets people who already understand your regulations, risks, and workflows.
          </p>
        </div>
      </div>

      <CTASection
        title="Operating in a regulated industry?"
        subtitle="Our compliance and technical teams understand what your regulators actually need — not just what a checkbox requires."
        primaryLabel="Talk to an industry specialist"
        primaryHref="/contact"
        secondaryLabel="See our use cases"
        secondaryHref="/case-studies"
      />
    </>
  )
}
