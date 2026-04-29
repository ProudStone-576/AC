import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, CheckCircle2, FileText, GitBranch, Lock,
  Search, Tag, Users,
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { DataGovernanceHeroVisual } from "@/components/ui/ServiceHeroVisuals"
import { CTASection } from "@/components/sections/CTASection"
import { FadeIn } from "@/components/ui/FadeIn"
import { FaqAccordion } from "@/components/ui/FaqAccordion"

const rightFor = [
  "You have no clear picture of what data you hold, where it lives, or who has access to it",
  "You've had a data breach or a near-miss that revealed you didn't know where sensitive data was stored",
  "You need to demonstrate data governance to meet GDPR, PIPEDA, HIPAA, or similar obligations",
  "A regulator or board is asking about your data governance program and you don't have a credible answer",
  "You're about to merge with or acquire another organization and need to understand their data estate",
]

const notRightFor = [
  "You need a basic privacy policy document — that's a legal task, not a governance program",
  "You need a full data platform built — that's the Data & Analytics service",
]

const faqs: { q: string; a: string }[] = [
  {
    q: "What is data governance in plain terms?",
    a: "Data governance is knowing what data you have, where it lives, who's responsible for it, how long you keep it, and who's allowed to access it — and having that documented, enforced, and auditable. Without it, you can't comply with privacy laws, can't respond properly to a breach, and can't answer basic regulatory questions about your data.",
  },
  {
    q: "What is GDPR — do I need to worry about it if I'm Canadian?",
    a: "GDPR is the European privacy law. If you process personal data belonging to people in the EU — customers, website visitors, employees — GDPR applies to you regardless of where your organization is based. Most Canadian organizations also have PIPEDA obligations under federal law, and some provinces have additional requirements. We help you map which laws apply to you and what they actually require.",
  },
  {
    q: "What does a data discovery actually involve?",
    a: "We deploy automated scanning tools against your databases, data warehouses, SaaS platforms, and file stores to find where data lives. The output is a raw inventory of data assets with schema documentation and sensitivity classification — PII, PHI, financial data. We then enrich that with business context: what the data means, who owns it, and what regulatory obligations apply to it.",
  },
  {
    q: "What's a data retention policy and why does it matter?",
    a: "A retention policy defines how long you keep different types of data before deleting it. It matters because keeping data longer than necessary increases your breach exposure, can violate privacy law deletion requirements, and creates legal liability. A good retention policy satisfies minimum retention requirements (some data must be kept for years) while deleting data you no longer need — automatically, with evidence of deletion for auditors.",
  },
  {
    q: "How much does a data governance program cost?",
    a: "It depends on the size of your data estate, the number of regulatory frameworks in scope, and whether you need the full program — discovery, cataloguing, governance policies, automation — or a targeted engagement. We scope after an initial discovery conversation and a review of your data environment.",
  },
]

export const metadata: Metadata = {
  title: "Data Governance & Privacy — Services",
  description:
    "Data cataloguing, lineage, retention policy, and privacy compliance for enterprises where data quality and regulatory accountability are not optional.",
}

const capabilities = [
  {
    icon: Search,
    title: "Data catalogue and discovery",
    description:
      "A catalogued data estate is the foundation of every downstream governance, privacy, and AI program. We deploy automated discovery tooling that finds data assets across your databases, warehouses, lakes, and SaaS platforms — and builds a searchable catalogue that documents what data exists, what it means, who owns it, and where it goes.",
    note: "Automated discovery · Business glossary · Data ownership assignment",
  },
  {
    icon: GitBranch,
    title: "Data lineage",
    description:
      "Column-level lineage tracing the movement and transformation of data from source system to end consumer. Required for AI governance (EU AI Act, NIST AI RMF), financial reporting (BCBS 239), and most enterprise data quality programs. Lineage is automated — not maintained by hand in a wiki.",
    note: "Column-level lineage · Transformation tracking · Impact analysis",
  },
  {
    icon: Tag,
    title: "Data classification and tagging",
    description:
      "A consistent classification scheme applied to your data estate — PII, PHI, financial data, confidential, public. Classification drives access control policy, retention schedules, and privacy obligations. We build the classification framework and deploy automated tagging tooling so classification stays current.",
    note: "PII/PHI detection · Automated tagging · Classification-driven access policy",
  },
  {
    icon: FileText,
    title: "Retention and deletion programs",
    description:
      "Data retention schedules that satisfy your legal hold requirements, regulatory minimum retention periods, and privacy law deletion obligations — in the same program, not three separate ones. Automated deletion jobs that run on schedule and produce evidence of execution for audit purposes.",
    note: "Legal hold management · Automated deletion · Retention evidence for audits",
  },
  {
    icon: Lock,
    title: "Privacy compliance (GDPR, PIPEDA, CCPA)",
    description:
      "Privacy programs built on top of the data catalogue — not separate from it. Data processing inventories, Data Protection Impact Assessments, consent management review, and breach notification readiness. We build programs that satisfy multiple privacy laws simultaneously where data crosses jurisdictions.",
    note: "GDPR · PIPEDA · CCPA · Privacy-by-design review",
  },
  {
    icon: Users,
    title: "Data ownership and stewardship model",
    description:
      "Data governance without ownership is documentation that no one maintains. We establish a practical ownership model — data owners, data stewards, and a data governance committee — with defined responsibilities and a governance operating rhythm that produces outcomes rather than meetings.",
    note: "Ownership model · Stewardship program · Governance operating cadence",
  },
]

const regulatoryRequirements = [
  { regulation: "GDPR", requirement: "Article 30 Records of Processing", what: "Documented inventory of all data processing activities" },
  { regulation: "GDPR", requirement: "Article 35 DPIA", what: "Impact assessments for high-risk processing activities" },
  { regulation: "PIPEDA", requirement: "Accountability principle", what: "Designated privacy officer and documented policies" },
  { regulation: "CCPA", requirement: "Section 1798.100", what: "Right to know — documented data inventory by category and purpose" },
  { regulation: "BCBS 239", requirement: "Principle 2 — Data architecture", what: "Complete data lineage for risk data used in regulatory reporting" },
  { regulation: "EU AI Act", requirement: "Article 10 — Data governance", what: "Data lineage and quality documentation for AI training data" },
  { regulation: "HIPAA", requirement: "§164.514 — De-identification", what: "Documented methodology for PHI de-identification" },
  { regulation: "SOX ITGC", requirement: "Data integrity controls", what: "Evidence that financial data is complete, accurate, and unaltered" },
]

const phases = [
  {
    phase: "Discover",
    duration: "Week 1–3",
    description:
      "Automated data discovery across your environment. We deploy scanning tooling against your databases, warehouses, data lakes, and major SaaS platforms. The output is a raw data inventory — every data asset found, with schema documentation and an initial sensitivity classification.",
    deliverable: "Raw data inventory + initial sensitivity classification",
  },
  {
    phase: "Catalogue",
    duration: "Week 3–7",
    description:
      "The raw inventory is enriched with business context — what the data means, who owns it, what it's used for, and what regulatory obligations apply to it. A business glossary is built. Data ownership is assigned. The catalogue becomes the authoritative reference for your data estate.",
    deliverable: "Populated data catalogue + business glossary + ownership register",
  },
  {
    phase: "Govern",
    duration: "Week 6–12",
    description:
      "Governance policies are implemented — retention schedules, access control policies derived from classification, and deletion procedures. Data lineage is instrumented for the datasets identified as high-priority. Privacy compliance documentation is produced from the catalogue.",
    deliverable: "Retention schedules + access policies + privacy compliance documentation",
  },
  {
    phase: "Automate",
    duration: "Week 10–16",
    description:
      "Governance processes that run manually become automated. Deletion jobs are scheduled. New data assets trigger classification workflows. Lineage is captured automatically by the data pipeline tooling. The governance program requires human judgment for exceptions — not for routine operations.",
    deliverable: "Automated governance pipelines + exception management process",
  },
  {
    phase: "Operate",
    duration: "Ongoing",
    description:
      "Data governance is not a project — it's a program. We help establish the governance operating cadence: monthly data quality reviews, quarterly catalogue updates, annual retention schedule reviews, and ongoing exception management. Evidence packages for regulatory audits are generated on demand.",
    deliverable: "Governance operating cadence + on-demand audit evidence packages",
  },
]

const useCases = [
  {
    industry: "Financial Services",
    title: "BCBS 239 data lineage for a tier-1 bank",
    challenge:
      "A bank's risk data aggregation program is failing BCBS 239 reviews because it cannot demonstrate complete lineage for the data used in regulatory capital reports. The data passes through 14 transformation steps between source systems and the regulatory report — none of them documented in a way the regulator accepts.",
    approach:
      "We deploy automated lineage capture at the data pipeline level — every transformation is recorded as part of normal pipeline execution, not as a separate documentation exercise. The 14-step transformation chain becomes visible and auditable. The BCBS 239 lineage requirement is satisfied without adding manual documentation overhead to the data engineering team.",
  },
  {
    industry: "Healthcare",
    title: "Cross-jurisdiction privacy compliance for a health data platform",
    challenge:
      "A health data company processes patient data under HIPAA in the US, PIPEDA in Canada, and GDPR in Europe. Three separate compliance programs are maintained by three teams with minimal coordination. When a patient requests deletion under GDPR, no one is certain whether the deletion also satisfies HIPAA and PIPEDA obligations — or conflicts with legal hold requirements.",
    approach:
      "We build a unified data catalogue that spans all three jurisdictions. Every data asset has documented regulatory obligations by jurisdiction, retention requirements, and legal hold status. The deletion request workflow checks all three before executing. Compliance teams in each jurisdiction work from the same authoritative source, with jurisdiction-specific views of the obligations.",
  },
]

export default function DataGovernancePage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Data Governance & Privacy" }]}
        eyebrow="Specialized"
        title="Data governance built on automated discovery, not manual documentation"
        subtitle="Data catalogues, lineage programs, retention policy, and privacy compliance — built on top of each other, not maintained separately."
        variant="tinted"
        visual={<DataGovernanceHeroVisual />}
      />

      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-in">
            <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
              {[
                { value: "Automated", label: "Data discovery across all sources" },
                { value: "Column-level", label: "Lineage granularity" },
                { value: "On demand", label: "Privacy audit evidence generation" },
                { value: "8+", label: "Privacy regulations supported" },
              ].map((s) => (
                <div key={s.label} className="px-6 py-5">
                  <p className="font-mono text-xl font-semibold text-foreground tabular-nums">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Governance capabilities</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                A complete data governance program, not a point solution
              </h2>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((cap) => (
                <div key={cap.title} className="group rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue/20 dark:bg-card">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                    <cap.icon className="h-5 w-5 text-blue" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">{cap.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
                  <p className="font-mono text-xs font-semibold text-blue/80">{cap.note}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-24 dark:bg-card">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Regulatory mapping</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                What the regulations actually require from your data program
              </h2>
            </div>
          </FadeIn>
          <FadeIn variant="fade-in">
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-surface dark:bg-muted">
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">Regulation</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground hidden sm:table-cell">Requirement</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">What it means</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {regulatoryRequirements.map((row, i) => (
                    <tr key={`${row.regulation}-${row.requirement}`} className={i % 2 === 0 ? "bg-white dark:bg-card" : "bg-surface dark:bg-background"}>
                      <td className="px-6 py-3.5">
                        <span className="inline-flex rounded-full bg-blue-light px-2.5 py-0.5 text-xs font-semibold text-blue">{row.regulation}</span>
                      </td>
                      <td className="px-6 py-3.5 text-xs font-mono text-muted-foreground hidden sm:table-cell">{row.requirement}</td>
                      <td className="px-6 py-3.5 text-sm text-foreground/80">{row.what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">How we work</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                From undocumented data estate to governed and auditable
              </h2>
            </div>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden sm:block" aria-hidden="true" />
            <div className="space-y-6">
              {phases.map((step, i) => (
                <FadeIn key={step.phase} variant="fade-up" delay={i * 60}>
                  <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-[180px_1fr] sm:gap-8 sm:pl-20">
                    <div className="hidden sm:flex sm:absolute sm:left-0 sm:top-0 sm:h-16 sm:w-16 sm:items-center sm:justify-center sm:rounded-full sm:border sm:border-border sm:bg-white sm:shadow-sm dark:sm:bg-card">
                      <span className="font-mono text-xs font-bold text-blue">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue">{step.phase}</p>
                      <p className="font-mono text-xs text-muted-foreground">{step.duration}</p>
                    </div>
                    <div className="rounded-xl border border-border bg-white p-5 dark:bg-card">
                      <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-blue" />
                        <p className="text-xs font-semibold text-foreground/70">{step.deliverable}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas py-20 lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="blur-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Use Cases</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Data governance for regulated environments
              </h2>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {useCases.map((uc) => (
                <div key={uc.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-8">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue">{uc.industry}</p>
                  <h3 className="mb-4 text-lg font-semibold text-white">{uc.title}</h3>
                  <div className="mb-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-canvas-muted mb-1">The Situation</p>
                    <p className="text-sm text-canvas-muted leading-relaxed">{uc.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-canvas-muted mb-1">Our Approach</p>
                    <p className="text-sm text-white/80 leading-relaxed">{uc.approach}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <div className="mt-8 text-center">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-medium text-blue hover:text-blue-hover transition-colors">
              See all use cases <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Is this right for you */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="rounded-2xl border border-border bg-surface p-8 dark:bg-card lg:p-12">
              <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-blue">Is this right for you?</p>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <p className="mb-4 text-sm font-semibold text-foreground">This is a good fit if you…</p>
                  <ul className="space-y-3">
                    {rightFor.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-foreground/75">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-4 text-sm font-semibold text-foreground">You might want to start elsewhere if…</p>
                  <ul className="space-y-3">
                    {notRightFor.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-blue hover:text-blue-hover transition-colors">
                      Not sure which service fits? Talk to us first — it&apos;s free.
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Common questions */}
      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Common questions</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Questions people ask before getting started
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Plain answers. No jargon. If something isn&apos;t covered here, just ask us directly.
              </p>
            </div>
          </FadeIn>
          <FadeIn variant="fade-in">
            <FaqAccordion faqs={faqs} />
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Do you know what data you have and where it goes?"
        subtitle="Most enterprises don't. A data discovery assessment will answer that question — and tell you which regulatory obligations you're not currently meeting."
        primaryLabel="Start a data governance conversation"
        primaryHref="/contact?inquiry=data-governance"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  )
}
