import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Globe, Shield, Zap, Layers } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { FadeIn } from "@/components/ui/FadeIn"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Technology, channel, and integration partners that extend the Aethon Core Platform — and how to become one.",
}


const programBenefits = [
  {
    icon: Layers,
    title: "Technical enablement",
    description:
      "Full access to the Aethon Core Partner Portal, API documentation, sandbox environments, and certified training curriculum.",
  },
  {
    icon: Shield,
    title: "Co-selling support",
    description:
      "Joint pipeline development, deal registration, and dedicated partner success managers for qualified opportunities.",
  },
  {
    icon: Globe,
    title: "Market development",
    description:
      "Co-marketing programs, case study development, and joint event participation to build your pipeline.",
  },
  {
    icon: Zap,
    title: "Integration toolkit",
    description:
      "Pre-built connectors, webhook infrastructure, and a dedicated integration API for building certified Aethon Core integrations.",
  },
]

const tierColors: Record<string, string> = {
  Strategic: "bg-blue text-white",
  Elite: "bg-canvas text-white",
  Technology: "bg-blue-light text-blue-light-foreground",
  Premier: "bg-surface text-foreground dark:bg-card border border-border",
}

export default function PartnersPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Partners" }]}
        eyebrow="Partners"
        title="Built with the ecosystem enterprises run on"
        subtitle="The Aethon Core Platform integrates with the technology your organization already uses — and with the partners who help you operate it."
        variant="tinted"
        backgroundImageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=3840&q=100"
      />

      {/* Technology partners */}
      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <FadeIn>
            <div className="mb-12">
              <SectionHeader
                eyebrow="Technology partners"
                title="Certified integrations"
                subtitle="Every integration is certified and maintained jointly — not a one-time connector that breaks on the next update."
              />
            </div>
          </FadeIn>

          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface py-20 text-center dark:bg-card">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-light">
              <Layers className="h-6 w-6 text-blue" />
            </div>
            <h3 className="mb-2 text-base font-semibold text-foreground">Technology partner integrations — in development</h3>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              We're building certified integrations with the platforms enterprise organizations already run. If you represent a technology vendor and want to build a joint integration, we want to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-hover"
            >
              Discuss a partnership
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Channel partners */}
      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <FadeIn>
            <div className="mb-12">
              <SectionHeader
                eyebrow="Channel partners"
                title="Regional delivery partners"
                subtitle="Certified systems integrators and consultancies that deploy and manage the Aethon Core Platform for enterprise clients."
              />
            </div>
          </FadeIn>

          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-white py-16 text-center dark:bg-background">
            <p className="text-sm font-medium text-foreground">Certified channel partners will be listed here.</p>
            <p className="mt-2 text-xs text-muted-foreground">
              We're actively evaluating systems integrators for our partner program.{" "}
              <Link href="/contact" className="text-blue hover:underline">Apply to partner</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Partner program */}
      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <FadeIn>
            <div className="mb-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <SectionHeader
                eyebrow="Partner program"
                title="Become an Aethon Core partner"
                subtitle="We work with a selective group of technology vendors and systems integrators. If you serve enterprise infrastructure buyers and want to build a joint practice, we'd like to speak with you."
                subtitleWidth="full"
              />
              <div className="space-y-4">
                {[
                  "Certified technology integration with joint support",
                  "Co-selling and deal registration framework",
                  "Market development funds for qualified partners",
                  "Dedicated partner success manager",
                  "Access to beta features and roadmap previews",
                  "Joint customer case studies and PR opportunities",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programBenefits.map((benefit, i) => (
              <FadeIn key={benefit.title} variant="scale-up" delay={i * 65}>
                <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 dark:bg-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                    <benefit.icon className="h-5 w-5 text-blue" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Partner tiers */}
          <FadeIn>
            <div className="mt-14 rounded-xl border border-border bg-surface p-8 dark:bg-card">
              <h3 className="mb-6 text-base font-semibold text-foreground">Partner tiers</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  {
                    tier: "Technology",
                    description: "Certified integration partners. API-level integration, shared documentation, and co-marketing eligibility.",
                    requirements: ["Certified integration", "Joint support SLA", "Mutual NDA"],
                  },
                  {
                    tier: "Premier",
                    description: "Active delivery partners with proven implementations. Eligible for deal registration and MDF.",
                    requirements: ["2+ certified deployments", "Dedicated practice lead", "Annual revenue commitment"],
                  },
                  {
                    tier: "Elite",
                    description: "Strategic partners with deep joint investment. Executive alignment, roadmap input, and first-look access.",
                    requirements: ["10+ enterprise deployments", "Joint GTM plan", "Executive sponsorship"],
                  },
                ].map((tier) => (
                  <div key={tier.tier} className="flex flex-col gap-3 rounded-lg border border-border bg-white p-5 dark:bg-background">
                    <span className={`self-start rounded-full px-2.5 py-0.5 text-xs font-medium ${tierColors[tier.tier]}`}>
                      {tier.tier}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">{tier.description}</p>
                    <div className="space-y-1.5">
                      {tier.requirements.map((req) => (
                        <div key={req} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="h-1 w-1 rounded-full bg-blue" />
                          {req}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Interested in partnering with Aethon Core?"
        subtitle="We evaluate partnership applications on a rolling basis. Tell us about your organization and what you're looking to build together."
        primaryLabel="Apply to partner"
        primaryHref="/contact"
        secondaryLabel="View the platform"
        secondaryHref="/products/platform"
      />
    </>
  )
}
