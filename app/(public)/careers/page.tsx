import type { Metadata } from "next"
import Link from "next/link"
import { TrendingUp, Laptop, Users, Briefcase } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Work on real technology challenges at Aethon Core. Build systems that keep critical businesses running — with a team that takes quality seriously.",
}

const benefits = [
  {
    icon: TrendingUp,
    title: "Structured growth",
    description:
      "We set clear expectations, give honest feedback, and invest in your development. You always know where you stand.",
  },
  {
    icon: Laptop,
    title: "Real engineering problems",
    description:
      "The problems here are genuinely hard. You'll work on infrastructure where failure has real consequences.",
  },
  {
    icon: Users,
    title: "Collaborative teams",
    description:
      "Small teams, clear ownership. You'll see the impact of your work and understand why decisions are made.",
  },
  {
    icon: Briefcase,
    title: "Meaningful equity",
    description:
      "A real stake in what you're helping build. We're here for the long term and want our team to share in that.",
  },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Careers" }]}
        eyebrow="Careers"
        title="Work on infrastructure that matters"
        subtitle="We're building infrastructure software for organizations that can't afford downtime or breaches. If you want to work on hard problems with a focused team — let's talk."
        variant="tinted"
        backgroundImageSrc="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=3840&q=100"
      />

      {/* Culture section */}
      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="Why Aethon Core"
                title="A place for people who take their work seriously"
                subtitle="We have one mission: build the infrastructure platform that enterprises actually need. That takes patience, rigor, and people who care about doing things right."
                subtitleWidth="full"
              />
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {benefits.map((b) => (
                  <div key={b.title} className="flex flex-col gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-light">
                      <b.icon className="h-4 w-4 text-blue" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">{b.title}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Principles panel */}
            <div className="rounded-2xl bg-brand p-10 text-white">
              <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-white/50">
                What to expect
              </p>
              <div className="flex flex-col gap-6">
                {[
                  {
                    value: "Direct access",
                    label: "to leadership. We're small enough that your questions reach the right people.",
                  },
                  {
                    value: "Visible impact",
                    label: "from day one. Your work ships quickly and you see exactly where it lands.",
                  },
                  {
                    value: "Honest feedback",
                    label: "with clear criteria. You always know where you stand and what growth looks like.",
                  },
                  {
                    value: "Real equity",
                    label: "stake in the company. We're building for the long term.",
                  },
                ].map((item) => (
                  <div key={item.value} className="flex flex-col gap-1">
                    <p className="text-base font-semibold">{item.value}</p>
                    <p className="text-sm text-white/60">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-sm text-white/70">
                  We're early stage. That means less process, more ownership, and a direct line between your work and the company's trajectory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available positions */}
      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <div className="mb-10">
            <SectionHeader
              eyebrow="Open roles"
              title="Available positions"
              subtitle="We'll post open roles here as they become available."
            />
          </div>

          {/* Empty state — search/filter UI is omitted when there are no listings */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-white py-20 text-center dark:bg-background">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-light">
              <Briefcase className="h-6 w-6 text-blue" />
            </div>
            <h3 className="mb-2 text-base font-semibold text-foreground">No open positions right now</h3>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We're not actively hiring at the moment, but we're always interested in exceptional people. Send us your details and we'll reach out when the right role opens.
            </p>
            <Link
              href="/contact?inquiry=careers"
              className="inline-flex items-center gap-2 rounded-md bg-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-hover"
            >
              Send us your resume
            </Link>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            We hire on an ongoing basis for senior roles.{" "}
            <Link href="/contact?inquiry=careers" className="text-blue hover:underline">
              Get in touch
            </Link>{" "}
            and tell us what you're looking for.
          </p>
        </div>
      </section>

      <CTASection
        variant="surface"
        title="Questions about working at Aethon Core?"
        subtitle="Our team is happy to answer questions about our culture, the interview process, or what working here looks like — before you apply."
        primaryLabel="Contact our team"
        primaryHref="/contact?inquiry=careers"
        secondaryLabel="Learn about Aethon Core"
        secondaryHref="/about"
      />
    </>
  )
}
