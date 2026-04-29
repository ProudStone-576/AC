import type { Metadata } from "next"
import Link from "next/link"
import {
  AlertTriangle, ArrowRight, CheckCircle2, Code2,
  Eye, GitBranch, Lock, Server, Zap
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { ArchitectureHeroVisual } from "@/components/ui/ServiceHeroVisuals"
import { CTASection } from "@/components/sections/CTASection"
import { FadeIn } from "@/components/ui/FadeIn"
import { FaqAccordion } from "@/components/ui/FaqAccordion"

const rightFor = [
  "You're about to make a significant technology investment and want an independent view before committing",
  "Your infrastructure has grown organically for years and you're not sure what the real risks are",
  "You've had reliability or performance issues and your internal team can't identify the root cause",
  "Your team is proposing a major architectural change and you want a sanity check from someone outside",
  "You need an external, written opinion for a board decision, investor review, or regulatory audit",
]

const notRightFor = [
  "You need someone to build or implement something — that's a delivery engagement",
  "You need a full technology strategy document — that's a consulting engagement",
]

const faqs: { q: string; a: string }[] = [
  {
    q: "What is an architecture review?",
    a: "An architecture review is a structured, independent assessment of your technology infrastructure — what you have, how it's connected, where the risks are, and what to fix. It produces written findings with supporting evidence, organized by severity, with specific recommendations. It's not a conversation or a workshop; it's a rigorous examination with a written output.",
  },
  {
    q: "What do you actually look at?",
    a: "We assess across six domains: compute and hosting, network design, storage and data, identity and access, observability, and resilience. The review is scoped to your specific situation — we may go deeper in some areas and lighter in others depending on what you're trying to understand.",
  },
  {
    q: "How long does a review take?",
    a: "Scoping and information gathering take one to two weeks. Analysis and report writing take a further two to three weeks. Most engagements complete within four to six weeks from kickoff. If your situation requires a faster turnaround, we can scope a more focused review.",
  },
  {
    q: "Do you share our architecture information with anyone?",
    a: "No. Everything you share with us is treated as confidential. We don't share technical findings, architecture diagrams, or client information with any third party. We'll sign an NDA before any technical information is shared if that's your preference.",
  },
  {
    q: "Do we need to have documentation ready before you start?",
    a: "It helps, but it's not required. If your documentation is incomplete or out of date, we note that as a finding in itself. We work from whatever exists and supplement with interviews and direct examination of live environments where access is granted.",
  },
  {
    q: "How much does it cost?",
    a: "Architecture reviews are scoped and priced per engagement. The scope — which layers, which systems, how many stakeholder interviews — determines the effort. We'll give you a fixed-price engagement after an initial scoping conversation.",
  },
]

export const metadata: Metadata = {
  title: "Architecture Review — Services",
  description:
    "An independent infrastructure assessment by senior architects with deep enterprise experience. We find what your internal teams are too close to see.",
}

const capabilities = [
  {
    icon: Eye,
    title: "Infrastructure risk assessment",
    description:
      "A structured review of your current infrastructure for single points of failure, undocumented dependencies, over-provisioned blast radius, and architectural debt that creates hidden operational cost. We produce a prioritized risk register, not a general observation list.",
    note: "Deliverable: Prioritized risk register with remediation cost estimates",
  },
  {
    icon: Server,
    title: "Cloud readiness analysis",
    description:
      "Before you migrate anything, understand what should move, what should stay, and what should be retired. We assess workload characteristics, data gravity, compliance constraints, and total cost of ownership across deployment models.",
    note: "Deliverable: Workload classification matrix + migration candidacy report",
  },
  {
    icon: Lock,
    title: "Security review",
    description:
      "An architectural security assessment — not a penetration test. We examine your management layer design, identity model, network segmentation, data flows, and the gap between your documented security setup and how your systems actually behave.",
    note: "Deliverable: Security architecture gap analysis",
  },
  {
    icon: Zap,
    title: "Performance and scalability audit",
    description:
      "Where is your architecture constrained? Which components will break first under load? Where does latency accumulate? We instrument your stack, model your traffic patterns, and produce a clear picture of your capacity ceiling and where it sits.",
    note: "Deliverable: Capacity model + performance bottleneck report",
  },
  {
    icon: GitBranch,
    title: "Data architecture review",
    description:
      "How data moves through your organization — ingestion, storage, transformation, access — reviewed against your current and future analytical needs. We identify pipeline fragility, data quality debt, and the gaps between what your data team can produce and what the business can consume.",
    note: "Deliverable: Data estate assessment + modernization recommendations",
  },
  {
    icon: Code2,
    title: "IaC and DevOps maturity review",
    description:
      "An assessment of your infrastructure automation, CI/CD pipelines, configuration management, and GitOps practices. We evaluate consistency, drift risk, change velocity, and how much of your infrastructure is reproducible from code versus held together by institutional knowledge.",
    note: "Deliverable: IaC maturity scorecard + automation gap analysis",
  },
]

const phases = [
  {
    phase: "Scoping",
    duration: "Day 1–3",
    description:
      "We agree on the scope of the review — which systems, which layers, which risk categories. We request documentation, access requirements, and a list of stakeholders to interview. Engagements don't start until the scope is signed off.",
    deliverable: "Signed scope document + information request list",
  },
  {
    phase: "Discovery",
    duration: "Week 1–2",
    description:
      "Our architects review documentation, conduct stakeholder interviews, and — where access is granted — examine live environments directly. We follow a structured interview guide but reserve the right to follow threads that the documentation raises.",
    deliverable: "Discovery notes + preliminary findings log",
  },
  {
    phase: "Analysis",
    duration: "Week 2–3",
    description:
      "We synthesize findings into a coherent architecture picture — mapping dependencies, identifying risk concentrations, and cross-referencing what was documented against what we observed. We challenge our own findings before presenting them.",
    deliverable: "Internal analysis draft + findings validation list",
  },
  {
    phase: "Report",
    duration: "Week 3–4",
    description:
      "A written assessment with findings organized by severity, supporting evidence, and specific remediation recommendations. We present findings in a working session before the final report is issued — not as a surprise.",
    deliverable: "Architecture review report + executive summary",
  },
  {
    phase: "Remediation support",
    duration: "Optional, 4–8 weeks",
    description:
      "For engagements where remediation follows immediately, our architects remain available during the fix phase to validate that changes address the root cause — not just the symptom. Available as a time-and-materials retainer.",
    deliverable: "Remediation validation + updated risk register",
  },
]

const reviewAreas = [
  { area: "Compute", items: ["VM and container density", "Bare metal utilization", "Auto-scaling configuration", "Resource quotas and limits"] },
  { area: "Networking", items: ["Segmentation model", "Ingress/egress design", "Private connectivity", "DNS architecture"] },
  { area: "Storage", items: ["Data residency compliance", "Backup coverage and RPO/RTO", "Encryption at rest", "Tiering policy"] },
  { area: "Identity & Access", items: ["IAM model and least privilege", "Privileged access controls", "Service account hygiene", "Federation and SSO design"] },
  { area: "Observability", items: ["Monitoring coverage gaps", "Alerting quality", "Log retention and retention policy", "Distributed tracing"] },
  { area: "Resilience", items: ["Single points of failure", "DR runbooks and test frequency", "Chaos engineering coverage", "Blast radius modeling"] },
]

const useCases = [
  {
    industry: "Manufacturing",
    title: "Pre-modernization architecture baseline",
    challenge:
      "A manufacturer is about to embark on a cloud migration program. The CIO wants an independent assessment of the current environment before committing to a migration approach — particularly around OT/IT boundary risks and data residency obligations that the internal team hasn't fully mapped.",
    approach:
      "We conduct a 4-week architecture review focused on the OT/IT boundary, production network segmentation, and data flows. The output is a complete dependency map, a prioritized list of migration blockers, and a sequenced recommendation for which workloads should migrate first, last, and not at all.",
  },
  {
    industry: "Financial Services",
    title: "Post-merger infrastructure risk assessment",
    challenge:
      "Two financial institutions have merged. The combined entity is operating two separate infrastructure stacks with unclear interdependencies, duplicate tooling, and an integration plan that was written during due diligence without full technical visibility.",
    approach:
      "We map the combined infrastructure from scratch — independently of both internal IT teams — to build an objective picture of the architecture as it actually exists. Findings are organized into a risk register that the integration program can work from, rather than discovering problems during execution.",
  },
]

export default function ArchitecturePage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Architecture Review" }]}
        eyebrow="Advisory"
        title="An honest independent view of your infrastructure"
        subtitle="Senior architects with deep enterprise experience review what you have, identify what's at risk, and tell you what to fix first — and why."
        variant="tinted"
        visual={<ArchitectureHeroVisual />}
      />

      {/* Stats strip */}
      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-in">
          <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
            {[
              { value: "4–6 wks", label: "Typical review duration" },
              { value: "15+ yrs", label: "Senior architect experience" },
              { value: "6 layers", label: "Architecture areas covered" },
              { value: "Written", label: "All findings with evidence" },
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

      {/* What we cover */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Review scope</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              What we look at — and what we produce
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Each review is scoped to your specific situation. These are the assessment types we conduct,
              either individually or as a combined engagement.
            </p>
          </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="group rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue/20 dark:bg-card"
              >
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

      {/* Architecture areas */}
      <section className="bg-surface py-20 lg:py-24 dark:bg-card">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Coverage areas</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Every layer of the stack, examined systematically
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              We follow a structured review methodology across six architecture domains.
              Every finding is mapped back to a specific area so you know where the risk lives.
            </p>
          </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reviewAreas.map((area) => (
              <div key={area.area} className="rounded-xl border border-border bg-white p-6 dark:bg-card">
                <div className="mb-1 flex items-center gap-2">
                  <AlertTriangle className="h-3.5 w-3.5 text-blue" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue">{area.area}</p>
                </div>
                <ul className="mt-3 space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Process</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              How a review engagement runs
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Structured enough to be consistent. Flexible enough to follow what the evidence surfaces.
            </p>
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

      {/* Use cases */}
      <section className="bg-canvas py-20 lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="blur-up">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Use Cases</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              When organizations commission an architecture review
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
        title="Want an independent view of your infrastructure?"
        subtitle="Tell us what decision you're trying to make or what risk you're trying to understand. We'll scope a review engagement around that."
        primaryLabel="Talk to our architects"
        primaryHref="/contact"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  )
}
