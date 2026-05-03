import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { FadeIn } from "@/components/ui/FadeIn"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the founding team and leadership of Aethon Core Inc. — operators and technologists building a managed IT platform for businesses that cannot afford to have their technology fail.",
}

const executives = [
  {
    name: "Taran Matharu",
    initials: "TM",
    role: "Chief Executive Officer",
    tenure: "Founder",
    bio: "Taran founded Aethon Core after watching businesses repeatedly fail at the same IT problems — too many vendors, no real accountability, and technology that was supposed to work but didn't. He built Aethon Core to be the company he wished existed: one team, one contract, one outcome. He leads company strategy, client relationships, and the overall direction of the business.",
    focus: ["Company strategy", "Enterprise relationships", "Product direction"],
  },
  {
    name: null,
    initials: "AC",
    role: "Chief Technology Officer",
    tenure: "Co-founder",
    bio: "Our CTO is the principal architect of the Aethon Core platform. He approaches every technical decision from an operational standpoint — how it performs in production, not just in a demo. He leads platform architecture, the engineering team, and all core infrastructure decisions.",
    focus: ["Platform architecture", "Engineering leadership", "R&D"],
  },
  {
    name: null,
    initials: "AC",
    role: "Chief Revenue Officer",
    tenure: "Founding team",
    bio: "Our CRO is responsible for how Aethon Core goes to market. The approach is straightforward: honest qualification, real discovery conversations, and telling clients directly if we're not the right fit. No pressure, no inflated promises.",
    focus: ["Enterprise sales", "Revenue strategy", "Customer success"],
  },
  {
    name: null,
    initials: "AC",
    role: "Chief Operating Officer",
    tenure: "Founding team",
    bio: "Our COO runs the internal operations — professional services delivery, finance, and the day-to-day infrastructure that makes client work happen on time and on scope. He keeps the business functioning as we scale.",
    focus: ["Operations", "Professional services", "Finance"],
  },
  {
    name: null,
    initials: "AC",
    role: "Chief Information Security Officer",
    tenure: "Founding team",
    bio: "Our CISO leads the security practice and compliance programs across the company. She oversees our SOC 2 Type II certification, ISO 27001 audit, and the security architecture embedded in every client engagement.",
    focus: ["Security architecture", "Compliance", "Threat intelligence"],
  },
  {
    name: null,
    initials: "AC",
    role: "VP, Engineering",
    tenure: "Founding team",
    bio: "Our VP of Engineering leads the core platform team and owns the reliability, performance, and developer experience of the Aethon Core API and tooling layer. His focus is building infrastructure that holds up under real production conditions.",
    focus: ["Platform engineering", "API design", "Reliability"],
  },
]

const advisors = [
  {
    role: "Independent Board Advisor",
    background: "Former federal infrastructure CIO with 30 years in critical systems and public sector technology programs.",
  },
  {
    role: "Venture Advisor",
    background: "Early-stage infrastructure investor. Has led investments across enterprise compute, security, and managed services.",
  },
  {
    role: "Technical Advisor",
    background: "Academic researcher in distributed systems and fault-tolerant computing. Advises on platform architecture and resilience.",
  },
  {
    role: "Go-to-Market Advisor",
    background: "Former CRO with deep enterprise infrastructure go-to-market experience across multiple successful company exits.",
  },
]

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Leadership" }]}
        eyebrow="Leadership"
        title="The team behind Aethon Core"
        subtitle="Founded by people who saw the same IT problems repeat themselves across organizations — and decided to build the solution rather than wait for someone else to."
        variant="tinted"
        backgroundImageSrc="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=3840&q=100"
      />

      {/* Executive team */}
      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <FadeIn>
            <div className="mb-14">
              <SectionHeader
                eyebrow="Executive team"
                title="People who run the business"
                subtitle="A focused team with direct accountability for every part of what we deliver — from the platform to the client relationship."
              />
            </div>
          </FadeIn>

          <div className="space-y-12">
            {executives.map((person, i) => (
              <FadeIn key={person.role} variant="fade-up" delay={i * 60}>
                <div className="grid grid-cols-1 gap-8 rounded-xl border border-border bg-surface p-8 dark:bg-card lg:grid-cols-4 lg:gap-12">
                  {/* Avatar + identity */}
                  <div className="flex flex-row items-start gap-5 lg:flex-col lg:gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-canvas text-lg font-semibold text-white">
                      {person.initials}
                    </div>
                    <div>
                      {person.name && (
                        <p className="text-sm font-semibold text-foreground">{person.name}</p>
                      )}
                      <p className="mt-0.5 text-sm text-blue">{person.role}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{person.tenure}</p>
                    </div>
                  </div>

                  {/* Bio + focus */}
                  <div className="lg:col-span-3">
                    <p className="text-sm leading-relaxed text-muted-foreground">{person.bio}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {person.focus.map((area) => (
                        <span
                          key={area}
                          className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-foreground dark:bg-background"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="hidden bg-surface py-20 dark:bg-card md:block lg:py-24">
        <div className="container-enterprise">
          <FadeIn>
            <div className="mb-12">
              <SectionHeader
                eyebrow="Board & advisors"
                title="Strategic counsel from domain experts"
                subtitle="Independent voices with deep experience in infrastructure, capital markets, and enterprise go-to-market."
              />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advisors.map((advisor, i) => (
              <FadeIn key={advisor.role} variant="scale-up" delay={i * 70}>
                <div className="flex flex-col gap-4 rounded-xl border border-border bg-white p-6 dark:bg-background">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface text-sm font-semibold text-muted-foreground dark:bg-card">
                    AC
                  </div>
                  <div>
                    <p className="text-xs text-blue">{advisor.role}</p>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">{advisor.background}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Join the team */}
      <section className="bg-white py-16 dark:bg-background lg:py-20">
        <div className="container-enterprise">
          <FadeIn>
            <div className="flex flex-col items-start justify-between gap-8 rounded-xl border border-border bg-surface p-8 dark:bg-card sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue">Careers</p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">We're building the team now</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We hire operators and engineers who want to work on genuinely hard infrastructure problems. If that's you, we want to hear from you.
                </p>
              </div>
              <Link
                href="/careers"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-hover"
              >
                View open roles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Want to speak with someone on our team?"
        subtitle="Our enterprise specialists are available for direct conversations — no sales process required."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Learn about Aethon Core"
        secondaryHref="/about"
      />
    </>
  )
}
