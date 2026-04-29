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
    "Meet the founding team and executive leadership of Aethon Core Inc. — experienced operators and technologists building the infrastructure platform for enterprises that cannot afford failure.",
}

const executives = [
  {
    role: "Chief Executive Officer",
    tenure: "Co-founder",
    bio: "Our CEO comes from 20+ years of enterprise infrastructure leadership — including running infrastructure programs for large financial institutions. Aethon Core was founded because the problems she kept encountering in the field had no adequate solutions on the market.",
    focus: ["Company strategy", "Enterprise relationships", "Capital allocation"],
  },
  {
    role: "Chief Technology Officer",
    tenure: "Co-founder",
    bio: "Our CTO is the principal architect of the platform. With a background spanning distributed systems research and 15 years building production infrastructure at scale, he approaches every architectural decision from operational first principles — not feature roadmaps.",
    focus: ["Platform architecture", "Engineering leadership", "R&D"],
  },
  {
    role: "Chief Revenue Officer",
    tenure: "Founding team",
    bio: "Our CRO has built enterprise sales motions for infrastructure products through multiple company growth stages. Her philosophy — deep qualification, honest discovery, no pressure — is how Aethon Core goes to market. We tell clients honestly if we're not the right fit.",
    focus: ["Enterprise sales", "Revenue strategy", "Customer success"],
  },
  {
    role: "Chief Operating Officer",
    tenure: "Founding team",
    bio: "Our COO is responsible for the operational backbone of the company — professional services, delivery, finance, and the things that make the company work when no one is watching. He previously scaled a managed services firm from founding through growth stage.",
    focus: ["Operations", "Professional services", "Finance"],
  },
  {
    role: "Chief Information Security Officer",
    tenure: "Founding team",
    bio: "Our CISO holds CISSP, CISM, and CRISC certifications and previously ran the security engineering practice at a major advisory firm. She is overseeing our SOC 2 Type II certification program and the ISO 27001 audit currently underway.",
    focus: ["Security architecture", "Compliance", "Threat intelligence"],
  },
  {
    role: "VP, Engineering",
    tenure: "Founding team",
    bio: "Our VP of Engineering leads the core platform team and is responsible for the reliability, performance, and developer experience of the Aethon Core API surface. His background is building distributed infrastructure at hyperscale — which informs how we think about reliability at the platform level.",
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
        title="The team that runs Aethon Core"
        subtitle="Founders and operators with deep enterprise backgrounds — people who have lived the problem they're solving."
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
                title="Leadership with operational depth"
                subtitle="Every member of our executive team has operated enterprise infrastructure at scale before building it as a product."
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
                      AC
                    </div>
                    <div>
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
      <section className="bg-surface py-20 dark:bg-card lg:py-24">
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
