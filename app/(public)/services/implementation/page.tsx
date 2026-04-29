import { JsonLd } from "@/components/ui/JsonLd"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, CheckCircle2, Code2, Database, GitMerge, RefreshCw, Server, Shield
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { ImplementationHeroVisual } from "@/components/ui/ServiceHeroVisuals"
import { CTASection } from "@/components/sections/CTASection"
import { FadeIn } from "@/components/ui/FadeIn"
import { FaqAccordion } from "@/components/ui/FaqAccordion"

const rightFor = [
  "You've decided what to deploy and need a team with real implementation experience to do it right",
  "A previous implementation failed, stalled, or delivered less than was promised",
  "You're deploying the Aethon Core Platform and want the team that built it to implement it",
  "You're migrating from one system to another and need someone to own the migration end to end",
]

const notRightFor = [
  "You haven't decided what to deploy yet — start with a consulting conversation or architecture review",
  "You need custom software built from scratch — that's the Application Development service",
]

const faqs: { q: string; a: string }[] = [
  {
    q: "What's the difference between this and hiring a consultant?",
    a: "A consultant advises. We implement. We own the migration plan, the runbooks, the rollback procedures, and the cutover. When something goes wrong during a migration — and something usually does — we're the ones who fix it, not the ones who document that it happened.",
  },
  {
    q: "What does implementation actually cover?",
    a: "It covers everything from the initial discovery of your current environment through to the handoff of a working, documented, tested system to your operations team. That includes environment design, data migration, integration development, testing, cutover, and structured knowledge transfer. We don't hand you a migration guide and wish you luck.",
  },
  {
    q: "How do you handle knowledge transfer?",
    a: "Knowledge transfer is built into the engagement from the start — not bolted on at the end. We produce runbooks for every operational procedure, conduct live training sessions with your team, and remain available for escalation during a defined warranty period after handoff. The goal is a team that can operate independently.",
  },
  {
    q: "What if scope changes mid-project?",
    a: "Scope changes are costed and agreed before they enter the work queue. We don't absorb undiscussed scope changes, and we don't deliver surprise change requests after the work is done. If something changes, we bring it to you with an impact assessment and you decide how to proceed.",
  },
  {
    q: "What integrations can you handle?",
    a: "ERP, CRM, ITSM, identity providers, data sources, and third-party APIs. We build integrations to API contracts with documentation and test coverage so your team inherits something maintainable — not a fragile script that breaks when the upstream system changes.",
  },
  {
    q: "How much does it cost?",
    a: "Implementation engagements are scoped based on what you're deploying, the complexity of your current environment, and your migration constraints. We produce a fixed-scope engagement after discovery — which takes one to two weeks and tells us enough to quote accurately.",
  },
]

export const metadata: Metadata = {
  title: "Implementation — Services",
  description:
    "Full-cycle deployment of Aethon Core and enterprise platforms. Structured methodology, clear ownership, and a knowledge transfer process that leaves your team in control.",
}

const capabilities = [
  {
    icon: Server,
    title: "Platform deployment",
    description:
      "End-to-end deployment of the Aethon Core Platform — from environment setup and configuration through to production cutover and steady state. We own the migration plan, the runbooks, and the rollback procedures.",
    note: "Includes: Environment design, config as code, cutover planning",
  },
  {
    icon: RefreshCw,
    title: "Legacy system migration",
    description:
      "Structured migration of legacy infrastructure to modern platforms. We run parallel operation periods before decommissioning anything — no hard cutovers that put production at risk. Every workload is validated before the old environment is removed.",
    note: "Includes: Workload migration sequencing, parallel operation, cutover validation",
  },
  {
    icon: Database,
    title: "Data pipeline implementation",
    description:
      "Design and deployment of end-to-end data infrastructure: ingestion connectors, transformation layers, warehousing, and the access controls that govern who sees what. Pipelines are built to be maintained by your team — not by us indefinitely.",
    note: "Includes: ETL/ELT pipelines, warehouse provisioning, lineage tooling",
  },
  {
    icon: Shield,
    title: "Security control deployment",
    description:
      "Implementation of security controls designed during the architecture phase — Zero Trust network segmentation, identity governance, endpoint management, and SIEM/SOAR integration. Controls are deployed in stages with validation gates between each.",
    note: "Includes: Control deployment, integration testing, runbook creation",
  },
  {
    icon: Code2,
    title: "API and integration development",
    description:
      "Custom integrations between the Aethon Core Platform and existing enterprise systems — ERP, CRM, ITSM, identity providers, and third-party data sources. Built to API contracts with documentation and test coverage your team inherits.",
    note: "Includes: API design, integration development, documentation",
  },
  {
    icon: GitMerge,
    title: "IaC and GitOps setup",
    description:
      "Your infrastructure codified, version-controlled, and deployed through a CI/CD pipeline. We establish the Terraform or Pulumi module structure, pipeline configuration, policy checks, and branching model — and train your team to own it from day one.",
    note: "Includes: IaC scaffolding, pipeline configuration, team training",
  },
]

const phases = [
  {
    phase: "Discovery",
    duration: "Week 1–2",
    description:
      "Our engineers map your current environment — every tool, dependency, data flow, and integration point. We produce a complete current-state document and identify every risk and dependency that will affect the migration sequence.",
    deliverable: "Current-state architecture + dependency map + risk register",
  },
  {
    phase: "Design",
    duration: "Week 3–4",
    description:
      "We produce the target architecture, migration runbook, rollback plan, and acceptance criteria. Nothing moves to production until you've reviewed and signed off on the plan. We present the design to your team in a structured walkthrough session.",
    deliverable: "Target architecture + migration runbook + rollback plan",
  },
  {
    phase: "Pilot",
    duration: "Week 5–8",
    description:
      "A non-production workload or a low-risk subset of the environment migrates first. We validate performance against acceptance criteria, test every runbook, train your operations team, and tune the configuration before touching production.",
    deliverable: "Validated runbooks + performance benchmarks + trained team",
  },
  {
    phase: "Migration",
    duration: "Week 9–20",
    description:
      "Production workloads migrate in sequenced waves with defined parallel operation windows. Each wave includes a stabilization period before the next begins. No wave is considered complete until acceptance criteria are met and signed off.",
    deliverable: "Wave completion sign-offs + updated architecture documentation",
  },
  {
    phase: "Handoff",
    duration: "Week 20–24",
    description:
      "Structured knowledge transfer to your operations team or managed services team. We produce runbooks for every operational procedure, conduct live training sessions, and remain available for escalation during a defined warranty period.",
    deliverable: "Complete runbook library + training completion + warranty period start",
  },
]

const useCases = [
  {
    industry: "Energy & Utilities",
    title: "OT/IT platform integration without production disruption",
    challenge:
      "An energy company needs to integrate its operational technology network with the Aethon Core Platform to enable unified monitoring. The OT environment controls physical grid infrastructure — any disruption has consequences that extend well beyond the IT operations team.",
    approach:
      "We run a read-only telemetry integration in the pilot phase before any write-path control is established. OT and IT engineers participate in every stage. The rollout is sequenced by site, with a full stabilization period at each site before proceeding. Production is never at risk.",
  },
  {
    industry: "Financial Services",
    title: "Core platform migration with zero downtime requirement",
    challenge:
      "A financial institution needs to migrate its core infrastructure management platform. The existing platform handles change management for production systems — any migration gap that results in unmanaged changes during a production incident would be unacceptable to regulators and the risk team.",
    approach:
      "We run both platforms in parallel for an extended period, with the new platform in shadow mode first, then in parallel approval mode. No change is made to production without dual approval from both platforms. Only when parallel operation proves stable does the old platform get decommissioned.",
  },
]

export default function ImplementationPage() {
  return (
    <>
      <JsonLd schema={[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://aethoncore.com"},{"@type":"ListItem","position":2,"name":"Services","item":"https://aethoncore.com/services"},{"@type":"ListItem","position":3,"name":"Implementation Services","item":"https://aethoncore.com/services/implementation"}]},{"@context":"https://schema.org","@type":"Service","name":"Implementation Services","url":"https://aethoncore.com/services/implementation","provider":{"@type":"Organization","name":"Aethon Core Inc.","url":"https://aethoncore.com"},"areaServed":[{"@type":"Country","name":"Canada"},{"@type":"Country","name":"United States"}],"serviceType":"Implementation Services"}]} />
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Implementation" }]}
        eyebrow="Delivery"
        title="Deployments that transfer ownership, not create dependency"
        subtitle="We own the migration from kickoff to steady state. Everything we build is documented, tested, and designed to be maintained by your team."
        variant="tinted"
        visual={<ImplementationHeroVisual />}
      />

      {/* Stats strip */}
      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-in">
          <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
            {[
              { value: "No hard", label: "cutovers — ever" },
              { value: "Parallel", label: "operation before decommission" },
              { value: "Written", label: "runbooks for every procedure" },
              { value: "Signed off", label: "acceptance criteria at each phase" },
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

      {/* What we deliver */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">What we deliver</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Full-cycle implementation across every layer
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Each implementation engagement is scoped to your specific environment. These are the delivery
              capabilities we bring to every project.
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

      {/* Process */}
      <section className="bg-surface py-20 lg:py-24 dark:bg-card">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Methodology</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              How every implementation runs
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              We don't hand you a migration guide and wish you luck. Our engineers own every phase.
              Here's the exact sequence.
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
              Implementation scenarios we're built for
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
        title="Ready to start an implementation?"
        subtitle="Tell us what you're deploying and what your constraints are. We'll scope the engagement and walk you through exactly how it runs."
        primaryLabel="Talk to our delivery team"
        primaryHref="/contact"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  )
}
