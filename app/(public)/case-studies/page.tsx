import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { db } from "@/lib/db"
import { CaseStudyList } from "./_components/CaseStudyList"

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "Real technology challenges follow recognizable patterns. See how Aethon Core approaches the tough problems in financial services, healthcare, manufacturing, and more.",
}

const featuredCaseStudy = {
  client: "Financial Services",
  industry: "Multi-Jurisdiction Compliance",
  title: "Expanding into new markets without building a separate technology stack for each one",
  summary:
    "A financial institution expanding into new countries faces a common trap: each country has different regulations, and the natural response is to build a separate system for each one. That creates more technology to manage, more places for things to go wrong, and costs that grow faster than the business.",
  result: "We built one unified system where the rules change by policy — not by rebuilding the architecture. Adding a new market means updating a policy, not deploying new infrastructure.",
  href: "/case-studies/financial-multi-jurisdiction",
}

const caseStudies = [
  {
    client: "Healthcare",
    industry: "Zero Trust Security",
    title: "Improving hospital security without disrupting doctors and nurses",
    result: "We redesigned the network so nothing is trusted by default — every device and user is verified before getting access. Security became part of how the system works, not a separate checklist.",
    href: "/case-studies/healthcare-zero-trust",
  },
  {
    client: "Retail & Commerce",
    industry: "Real-Time Analytics",
    title: "Getting business answers in minutes instead of waiting for weekly reports",
    result: "We rebuilt the data pipeline from start to finish, all the way to role-specific dashboards. When the CEO needs a number, they get it in minutes — not by waiting for someone to pull a report.",
    href: "/case-studies/retail-analytics",
  },
  {
    client: "Manufacturing",
    industry: "Predictive Maintenance",
    title: "Catching equipment failures before they happen instead of after",
    result: "We connected factory floor sensors to analytics systems so problems show up before they cause failures. Unplanned downtime dropped significantly — without changing how production systems work.",
    href: "/case-studies/manufacturing-predictive-maintenance",
  },
  {
    client: "Energy & Utilities",
    industry: "Grid Security",
    title: "Securing power grid systems during a live modernization project",
    result: "We added security to the grid systems in phases — monitoring first, then controls — so nothing stopped running during the process. Each phase was tested before the next began.",
    href: "/case-studies/energy-grid-security",
  },
  {
    client: "Financial Services",
    industry: "Legacy Modernization",
    title: "Replacing an aging core banking system with no customer-facing downtime",
    result: "We ran the old and new systems side by side, moving traffic to the new one gradually. The old system was decommissioned only after everything was verified — no rushed cutover.",
    href: "/case-studies/financial-core-modernization",
  },
  {
    client: "Financial Services",
    industry: "AI & Compliance",
    title: "Getting AI to work in compliance workflows at scale",
    result: "We built the data infrastructure first — before touching the AI. That's where most AI projects fail. Once the foundation was right, the models worked reliably in production.",
    href: "/case-studies/financial-ai-compliance",
  },
]

const hardcodedCaseStudies = caseStudies

export const dynamic = "force-dynamic"

export default async function CaseStudiesPage() {
  let dbProjects: Awaited<ReturnType<typeof db.project.findMany>> = []
  try {
    dbProjects = await db.project.findMany({
      where: { status: "published" },
      orderBy: { publishedAt: "desc" },
      take: 20,
    })
  } catch {
    // DB unavailable — show hardcoded content only
  }

  const dbCaseStudies = dbProjects.map((p) => ({
    client: p.client ?? "",
    industry: p.industry ?? "Case Study",
    title: p.title,
    result: p.description,
    href: `/case-studies/${p.slug}`,
  }))

  const allCaseStudies = [...dbCaseStudies, ...hardcodedCaseStudies]

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Use Cases" }]}
        eyebrow="Use Cases"
        title="How we solve the hard problems"
        subtitle="Technology challenges in large organizations follow recognizable patterns. These are the ones we see most often — and exactly how we think through each one."
        variant="tinted"
        backgroundImageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=3840&q=100"
      />

      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          {/* Featured case study */}
          <div className="mb-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-blue">Featured</p>
            <div className="grid grid-cols-1 gap-8 rounded-2xl border border-border bg-surface p-8 dark:bg-card lg:grid-cols-5 lg:gap-12 lg:p-12">
              <div className="lg:col-span-3">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-light px-2.5 py-1 text-[11px] font-semibold text-blue-light-foreground">
                    {featuredCaseStudy.industry}
                  </span>
                </div>
                <h2 className="mb-4 text-2xl font-semibold leading-snug text-foreground lg:text-3xl">
                  {featuredCaseStudy.title}
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {featuredCaseStudy.summary}
                </p>
                <Link
                  href={featuredCaseStudy.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors hover:text-blue-hover"
                >
                  Read our approach
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col justify-center rounded-xl bg-brand p-6 text-white lg:col-span-2">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">
                  Our Approach
                </p>
                <p className="text-sm leading-relaxed text-white/90">
                  {featuredCaseStudy.result}
                </p>
                <div className="mt-6 border-t border-white/10 pt-4 text-xs text-white/50">
                  {featuredCaseStudy.client}
                </div>
              </div>
            </div>
          </div>

          <CaseStudyList caseStudies={allCaseStudies} />
        </div>
      </section>

      <CTASection
        variant="surface"
        title="Want to discuss your specific infrastructure challenge?"
        subtitle="Our team can walk through the technical and operational details of how we approach your industry's most common problems."
        primaryLabel="Talk to an engineer"
        primaryHref="/contact"
        secondaryLabel="View all insights"
        secondaryHref="/insights"
      />
    </>
  )
}
