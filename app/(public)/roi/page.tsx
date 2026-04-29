import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { FadeIn } from "@/components/ui/FadeIn"
import { CTASection } from "@/components/sections/CTASection"
import { RoiCalculator } from "./_components/RoiCalculator"

export const metadata: Metadata = {
  title: "ROI Estimator — Aethon Core",
  description:
    "Estimate the business case for consolidating your infrastructure tooling and optimizing cloud spend with Aethon Core. Adjust inputs to match your environment — then request a formal assessment for real numbers.",
  alternates: { canonical: "https://aethoncore.com/roi" },
}

const assessmentIncludes = [
  {
    title: "Actual tool inventory",
    body: "We map every infrastructure tool your team manages, including ones running without formal procurement approval.",
  },
  {
    title: "Contract and spend review",
    body: "We review your vendor contracts for renewal dates, auto-escalation clauses, and scope overlap — before you renew anything.",
  },
  {
    title: "Read-only cloud audit",
    body: "We run a non-invasive audit of your cloud accounts and identify idle resources, over-provisioning, and savings opportunities.",
  },
  {
    title: "Prioritized action plan",
    body: "Written report with findings ranked by business impact and a recommended sequence — not a list of every possible improvement.",
  },
]

export default function RoiPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "ROI Estimator" }]}
        eyebrow="Business Case"
        title="Estimate the numbers before you talk to us"
        subtitle="Adjust the inputs to match your environment. The output is an order-of-magnitude estimate — useful for an internal conversation, not a signed contract. For real numbers, request a formal assessment."
        variant="tinted"
        backgroundImageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?w=3840&q=100"
      />

      {/* Calculator */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Estimator</p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Platform cost vs. current tool spend
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Two drivers: replacing multiple infrastructure tools with one platform, and cloud cost
                optimization through active FinOps management. The estimator shows both separately so
                you can ignore the one that doesn&apos;t apply.
              </p>
            </div>
          </FadeIn>
          <FadeIn variant="fade-in">
            <RoiCalculator />
          </FadeIn>
        </div>
      </section>

      {/* What an assessment adds */}
      <section className="bg-surface py-16 dark:bg-card lg:py-20">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">
                Infrastructure Assessment
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                What a real assessment gives you that this doesn&apos;t
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                The estimator above uses industry averages. An Infrastructure Assessment uses your actual
                contracts, cloud accounts, and architecture — and takes 5 business days.
              </p>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {assessmentIncludes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-white p-6 dark:bg-background"
                >
                  <h3 className="mb-2 text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn variant="fade-in">
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/services/assessment"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue hover:text-blue-hover transition-colors"
              >
                Infrastructure Assessment details
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing#professional-services"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Assessment pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Ready to move from estimate to real numbers?"
        subtitle="Our Infrastructure Health Check is fixed-scope — 5 business days, done remotely, with a written report of findings and a prioritized action plan. See pricing page for the exact number."
        primaryLabel="Request an assessment"
        primaryHref="/contact?inquiry=assessment"
        secondaryLabel="View all pricing"
        secondaryHref="/pricing#professional-services"
      />
    </>
  )
}
