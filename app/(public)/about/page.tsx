import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, Users, Award, Building2 } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { FadeIn } from "@/components/ui/FadeIn"
import { CTASection } from "@/components/sections/CTASection"
import { MetricsSection } from "@/components/sections/MetricsSection"

export const metadata: Metadata = {
  title: "About Aethon Core | Canadian Enterprise IT Company | British Columbia",
  description: "Aethon Core is a British Columbia-based enterprise IT company delivering managed infrastructure, cloud, security, and network services across Canada. Founded in 2024 on the principle that technology operations must be contractually accountable.",
  keywords: [
    "Aethon Core about",
    "Canadian IT company",
    "enterprise IT company British Columbia",
    "managed services company Canada",
    "IT company British Columbia",
    "infrastructure company Canada",
  ],
  alternates: { canonical: "https://aethoncore.com/about" },
  openGraph: {
    type: "website", locale: "en_CA", url: "https://aethoncore.com/about",
    siteName: "Aethon Core",
    title: "About Aethon Core | Canadian Enterprise IT Company | British Columbia",
    description: "Aethon Core is a British Columbia-based enterprise IT company delivering managed infrastructure, cloud, security, and network services across Canada. Founded in 2024 on the principle that technology operations must be contractually accountable.",
  },
}

const values = [
  {
    icon: Globe,
    title: "One team watching everything — cloud, office, and remote",
    description:
      "Everything you have, managed together. No separate vendors pointing fingers at each other. No blind spots. One team, one contract, full responsibility.",
  },
  {
    icon: Award,
    title: "We put every promise in writing — with money back if we miss",
    description:
      "Every guarantee we make is written into your contract with specific consequences if we don't deliver. Not a goal. Not a target. A written commitment with real remedies.",
  },
  {
    icon: Users,
    title: "Real engineers who know your business, not a call centre",
    description:
      "When something goes wrong at 2am, you're talking to the person who knows your systems — not someone reading from a script. The same engineers are assigned to your account.",
  },
  {
    icon: Building2,
    title: "We already know the rules your industry has to follow",
    description:
      "We work with banks, hospitals, government, and energy companies. All the security and privacy rules they're required to meet are already built into how we work — not added at the end.",
  },
]

const timeline = [
  { year: "2022", event: "Problem identified. Our founding team spent 15+ years in enterprise infrastructure watching the same failures repeat across industries." },
  { year: "2023", event: "Design phase. We spent 18 months designing the platform before writing a single line of production code." },
  { year: "Q1 2024", event: "Aethon Core Inc. incorporated. Core platform engineering begins." },
  { year: "Q3 2024", event: "Platform alpha. Internal testing across compute, security, network, and data layers." },
  { year: "Q1 2025", event: "Platform beta. Early partners begin testing in financial services and healthcare environments." },
  { year: "Q4 2025", event: "SOC 2 Type II audit completed. ISO 27001 certification underway." },
  { year: "2026", event: "Platform v1.0 launches. Early access opens to qualifying enterprise organizations." },
]


export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "About" }]}
        eyebrow="Company"
        title="Your technology, fully managed — with everything written in your contract"
        subtitle="We started Aethon Core because too many businesses were paying for IT support that didn't actually fix things. We do IT differently — real engineers who know your systems, and a written contract that holds us accountable for every outcome."
        backgroundImageSrc="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=3840&q=100"
        variant="tinted"
      />

      {/* Mission section */}
      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <FadeIn variant="slide-left">
              <SectionHeader
                eyebrow="Our mission"
                title="Your technology, taken care of — so your team can focus on your business"
                subtitle="Most businesses don't fail because they have bad technology. They fail because nobody is properly running what they already have. We run it right — and we put that in writing."
                subtitleWidth="full"
              />
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors hover:text-blue-hover"
              >
                Speak with our team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {values.map((value, i) => (
                <FadeIn key={value.title} variant="scale-up" delay={i * 80}>
                  <div className="flex flex-col gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                      <value.icon className="h-5 w-5 text-blue" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width photo break */}
      <div className="relative h-72 overflow-hidden lg:h-96">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=3840&q=100"
          alt="Modern enterprise technology operations center"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-canvas/60" />
        <div className="container-enterprise relative flex h-full flex-col items-start justify-end pb-10">
          <p className="max-w-xl text-sm leading-relaxed text-white/80">
            Built by engineers who have personally managed large, complex IT environments. Every decision we make comes from real experience — not theory.
          </p>
        </div>
      </div>

      {/* Metrics */}
      <MetricsSection />

      {/* Timeline */}
      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <FadeIn>
            <div className="mb-12">
              <SectionHeader
                eyebrow="Our Story"
                title="How we got here"
                subtitle="From identifying the problem to building the platform — the story of Aethon Core."
              />
            </div>
          </FadeIn>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-border lg:left-1/2" aria-hidden="true" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex gap-6 lg:gap-0 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="relative z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-blue bg-white dark:bg-background lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue" />
                  </div>

                  {/* Content — alternates slide direction */}
                  <FadeIn
                    variant={index % 2 === 0 ? "slide-left" : "slide-right"}
                    delay={index * 60}
                    className={`flex-1 lg:max-w-[calc(50%-32px)] ${index % 2 === 0 ? "lg:pr-8 lg:text-right" : "lg:pl-8 lg:ml-auto"}`}
                  >
                    <p className="text-sm font-semibold text-blue">{item.year}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.event}</p>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <FadeIn>
            <div className="mb-12">
              <SectionHeader
                eyebrow="Leadership"
                title="Built by people who have actually done this work"
                subtitle="Our founding team spent years running technology for large companies before starting Aethon Core. We build solutions to problems we have personally dealt with — not problems we read about."
              />
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { role: "Chief Executive Officer", background: "20+ years in enterprise infrastructure. Former SVP of Infrastructure at a major financial institution." },
              { role: "Chief Technology Officer", background: "15+ years building large-scale production infrastructure. Background in distributed systems and platform architecture." },
              { role: "Chief Revenue Officer", background: "Led enterprise infrastructure sales through two company exits. Specializes in complex technical solutions for large organizations." },
              { role: "Chief Operating Officer", background: "Operations and professional services leadership. Scaled a managed services business from founding through growth stage." },
              { role: "Chief Information Security Officer", background: "CISSP, CISM, CRISC certified. Former security advisory practice lead. Leads our SOC 2 and ISO 27001 programs." },
              { role: "VP, Engineering", background: "Former principal engineer at a hyperscale cloud provider. Leads core platform reliability and API development." },
            ].map((person, i) => (
              <FadeIn key={person.role} variant="scale-up" delay={i * 70}>
                <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-5 dark:bg-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-canvas text-sm font-semibold text-white">
                    AC
                  </div>
                  <p className="text-sm font-semibold text-foreground">{person.role}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">{person.background}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/about/leadership"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors hover:text-blue-hover"
            >
              Meet the leadership team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to see if we're the right fit for your business?"
        subtitle="Book a call with our team. No sales pitch — just an honest conversation about your situation, what you need, and whether we can help."
        primaryLabel="Book a conversation"
        primaryHref="/contact"
        secondaryLabel="View open roles"
        secondaryHref="/careers"
      />
    </>
  )
}
