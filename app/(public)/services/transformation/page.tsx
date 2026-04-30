import { JsonLd } from "@/components/ui/JsonLd"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, CheckCircle2, Compass,
  GitBranch, Layers, RefreshCw, Settings, Target
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { TransformationHeroVisual } from "@/components/ui/ServiceHeroVisuals"
import { CTASection } from "@/components/sections/CTASection"
import { FadeIn } from "@/components/ui/FadeIn"
import { FaqAccordion } from "@/components/ui/FaqAccordion"

const rightFor = [
  "Your organization runs on manual processes and spreadsheets when it should be running on proper systems",
  "Technology projects keep failing to deliver — they stall, overrun, or produce results no one uses",
  "You want to fundamentally change how your organization uses technology, not just upgrade a tool",
  "Leadership has a transformation vision but no credible roadmap for how to get there",
]

const notRightFor = [
  "You need a specific tool implemented — that's an implementation engagement",
  "You're looking for generic change management consulting without a delivery component",
]

const faqs: { q: string; a: string }[] = [
  {
    q: "What is digital transformation actually?",
    a: "It's changing how your organization operates by changing the technology that underlies it — not just upgrading individual tools. Real transformation changes workflows, operating models, and team structures, not just the software stack. If the process changes but the people and structures don't, it usually reverts.",
  },
  {
    q: "Why do most transformation programs fail?",
    a: "The most common reasons: the program is scoped around technology rather than business outcomes; the pace of change exceeds the organization's capacity to absorb it; the operating model doesn't change with the technology; and problems are identified too late to course-correct. We design against all four.",
  },
  {
    q: "How do you define 'done' for a transformation?",
    a: "We define outcome metrics at the start — deployment frequency, decision speed, cost per transaction, operational efficiency — and the transformation is done when those metrics are demonstrably improved and stable. Not when the implementation is finished, but when the organization is operating differently as a result.",
  },
  {
    q: "How do we deal with employee resistance to change?",
    a: "By involving people early, communicating honestly, and not asking people to change more than the organization can absorb at once. We design change sequencing around organizational capacity — not around what's technically optimal. Early wins that make work easier build the confidence that makes larger changes possible.",
  },
  {
    q: "How long does a transformation program take?",
    a: "The current state assessment and roadmap development take six to eight weeks. Quick wins and foundation work take another two to four months. The core transformation runs twelve to eighteen months for most organizations. We don't compress timelines to make the proposal look attractive — we give you the timeline the program actually requires.",
  },
  {
    q: "How much does it cost?",
    a: "Transformation programs are multi-year investments, and the cost reflects that. We provide an investment model as part of the roadmap — so you can see the expected cost at each phase before committing to the full program. We scope the current state assessment and roadmap development first, as a fixed engagement.",
  },
]

export const metadata: Metadata = {
  title: "Digital Transformation Services Canada | IT Modernization | Aethon Core",
  description: "Digital transformation and IT modernization for Canadian enterprises. Legacy system modernization, cloud adoption, operating model redesign, and technology roadmaps with measurable milestones.",
  keywords: [
    "digital transformation Canada",
    "IT modernization Canada",
    "digital transformation British Columbia",
    "legacy system modernization Canada",
    "cloud adoption Canada",
    "enterprise transformation Canada",
    "IT transformation services Canada",
  ],
  alternates: { canonical: "https://aethoncore.com/services/transformation" },
  openGraph: {
    type: "website", locale: "en_CA", url: "https://aethoncore.com/services/transformation",
    siteName: "Aethon Core",
    title: "Digital Transformation Services Canada | IT Modernization | Aethon Core",
    description: "Digital transformation and IT modernization for Canadian enterprises. Legacy system modernization, cloud adoption, operating model redesign, and technology roadmaps with measurable milestones.",
  },
}

const capabilities = [
  {
    icon: Compass,
    title: "Transformation strategy and roadmap",
    description:
      "A structured transformation roadmap with sequenced initiatives, dependencies mapped, and investment decisions justified against business outcomes. We don't produce slide decks — we produce plans that operations and finance can hold us accountable to.",
    note: "Deliverable: 18–36 month roadmap + investment model + success metrics",
  },
  {
    icon: Layers,
    title: "Operating model design",
    description:
      "Technology transformation fails when the operating model doesn't change with it. We redesign the organizational model — team structures, ownership boundaries, decision rights, and the governance processes that keep a modernized environment running after implementation.",
    note: "Includes: Team design, RACI model, governance framework, change management plan",
  },
  {
    icon: RefreshCw,
    title: "Legacy modernization",
    description:
      "Structured decomposition of legacy monoliths and aging infrastructure — sequenced to keep production running throughout. We assess what to modernize, what to replace, and what to decommission. Not everything needs to be rebuilt; the analysis determines what does.",
    note: "Approach: Strangler fig, event sourcing, domain decomposition — based on your system",
  },
  {
    icon: GitBranch,
    title: "Platform engineering and developer experience",
    description:
      "Internal developer platforms that let product teams move faster without requiring platform expertise. We design and build the golden paths — the CI/CD pipelines, environment provisioning, observability tooling, and guardrails — that standardize how software is built and deployed.",
    note: "Includes: IDP design, CI/CD platform, environment automation, developer portal",
  },
  {
    icon: Settings,
    title: "Process automation and integration",
    description:
      "Automation of the manual processes and point-to-point integrations that slow organizations down. We identify high-value automation targets, design the architecture, and implement integrations that can be maintained without specialist support.",
    note: "Tools: event-driven integration, workflow automation, API layer design",
  },
  {
    icon: Target,
    title: "Program governance and delivery",
    description:
      "Complex transformation programs require governance structures that keep multiple workstreams aligned without creating bureaucracy. We establish the delivery model, review cadences, risk escalation paths, and the metrics that tell you whether the program is on track.",
    note: "Includes: Delivery governance, risk register, executive reporting cadence",
  },
]

const principles = [
  {
    title: "Keep production running",
    description: "Every transformation sequence is designed around the constraint that production must remain operational throughout. There are no big-bang cutovers. Changes are phased, validated, and reversible.",
  },
  {
    title: "Sequence by risk, not by logic",
    description: "The technically logical order of changes is often not the safest order. We sequence by risk reduction per implementation step — highest-risk dependencies are resolved early, when there's still time to adjust.",
  },
  {
    title: "The operating model changes too",
    description: "Technology alone doesn't transform an organization. We design the team structures, ownership models, and governance processes that the new technology requires. A modernized platform with the old operating model reverts.",
  },
  {
    title: "Build for your team to own",
    description: "Everything we build is documented, tested, and designed to be maintained by your engineers. We don't architect systems that require us to be on retainer. The engagement ends when your team is capable, not when the implementation is finished.",
  },
  {
    title: "Measure what actually matters",
    description: "Transformation programs accumulate vanity metrics — tickets closed, services migrated, sprints completed. We establish outcome metrics from the start: how often you deploy, how long changes take, how fast you recover from problems, cost per transaction. These are what the business cares about.",
  },
  {
    title: "Direct over diplomatic",
    description: "If the transformation program is off track, we say so. If the proposed approach won't work for your organization, we say that too. We'd rather have a hard conversation in week three than a failed program in month twelve.",
  },
]

const phases = [
  {
    phase: "Current state",
    duration: "Week 1–3",
    description:
      "We document the current state of your technology estate, operating model, and delivery capability. We interview engineering leaders, product managers, and operations staff separately — and compare the views. The gap between what leadership believes is happening and what the teams executing it experience is always informative.",
    deliverable: "Current state assessment + stakeholder view analysis + identified constraints",
  },
  {
    phase: "Target state design",
    duration: "Week 3–6",
    description:
      "We define the target state: the technology architecture, operating model, team structures, and delivery capability you're trying to reach. The target is designed to be achievable — constrained by your budget, your organizational change capacity, and a realistic assessment of your timeline.",
    deliverable: "Target state architecture + operating model design + success metrics",
  },
  {
    phase: "Roadmap development",
    duration: "Week 5–8",
    description:
      "We produce the transformation roadmap — sequenced initiatives from current to target state, with dependencies mapped, investment estimates, and risk register. Every initiative includes the acceptance criteria that will determine when it's complete.",
    deliverable: "Transformation roadmap + investment model + risk register",
  },
  {
    phase: "Foundation and quick wins",
    duration: "Week 8–16",
    description:
      "The first initiatives address the highest-priority dependencies and deliver visible progress. We design every early initiative to produce a working outcome — not just infrastructure for later phases. Early wins build organizational confidence; we design for them deliberately.",
    deliverable: "Foundation components + first initiative completions + updated roadmap",
  },
  {
    phase: "Core transformation",
    duration: "Month 4–18",
    description:
      "The core transformation workstreams run in parallel under the governance model we established. We provide program governance support, architecture oversight, and risk escalation management throughout. Progress is reported against the outcome metrics, not just activity.",
    deliverable: "Ongoing delivery governance + monthly outcome reporting + risk management",
  },
]

const useCases = [
  {
    industry: "Manufacturing",
    title: "Operational technology and IT convergence at enterprise scale",
    challenge:
      "A global manufacturer needs to connect its operational technology systems to cloud analytics infrastructure across 40+ facilities. The OT environment runs production systems that cannot be disrupted. The IT organization and the OT engineering teams have separate toolchains, different risk tolerances, and no shared governance model.",
    approach:
      "We begin with an operating model design that establishes joint governance between IT and OT. A read-only telemetry integration is rolled out facility by facility, with full stabilization at each site before the next begins. The integration architecture is designed for unidirectional data flow that satisfies the OT security requirement. The transformation spans two years; the governance model we establish runs it.",
  },
  {
    industry: "Financial Services",
    title: "Core banking modernization with zero disruption to transaction processing",
    challenge:
      "A financial institution is running core banking infrastructure that was designed in the 1990s. The system processes millions of transactions daily. The board has approved a modernization program, but the engineering team is skeptical — every previous attempt stalled because the risk of disrupting live transaction processing was unacceptable.",
    approach:
      "We design the modernization sequence using a strangler fig approach: new capability is built on a parallel platform and traffic is gradually migrated by transaction type, starting with the lowest-risk. The legacy system handles fallback for every transaction type until the new platform has proven stability. No transaction processing is at risk at any point during the transition.",
  },
]

export default function TransformationPage() {
  return (
    <>
      <JsonLd schema={[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://aethoncore.com"},{"@type":"ListItem","position":2,"name":"Services","item":"https://aethoncore.com/services"},{"@type":"ListItem","position":3,"name":"Digital Transformation","item":"https://aethoncore.com/services/transformation"}]},{"@context":"https://schema.org","@type":"Service","name":"Digital Transformation","url":"https://aethoncore.com/services/transformation","provider":{"@type":"Organization","name":"Aethon Core Inc.","url":"https://aethoncore.com"},"areaServed":[{"@type":"Country","name":"Canada"},{"@type":"Country","name":"United States"}],"serviceType":"Digital Transformation"}]} />
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Digital Transformation" }]}
        eyebrow="Advisory"
        title="Transformation programs your organization can actually absorb"
        subtitle="We design and execute technology change at the pace your business can handle — keeping production operational, building your team's capability, and delivering outcomes against a roadmap that holds."
        variant="tinted"
        visual={<TransformationHeroVisual />}
      />

      {/* Stats strip */}
      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
            {[
              { value: "No big-bang", label: "cutovers — ever" },
              { value: "Phased", label: "sequenced by risk, not by logic" },
              { value: "Operating", label: "model changes with the technology" },
              { value: "Outcome", label: "metrics from day one" },
            ].map((s) => (
              <div key={s.label} className="px-6 py-5">
                <p className="font-mono text-xl font-semibold text-foreground tabular-nums">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">What we deliver</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Transformation across technology and operating model
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Technology transformation that doesn't change how the organization operates rarely sticks.
              We address both — and design the governance model that keeps them aligned.
            </p>
          </div>
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
        </div>
      </section>

      {/* Principles */}
      <section className="bg-surface py-20 lg:py-24 dark:bg-card">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">How we work</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Six principles we don't compromise on
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Transformation programs fail for predictable reasons. These principles exist because we've
              seen each failure mode — and because compromising on them is how programs go wrong.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <div key={p.title} className="rounded-xl border border-border bg-white p-6 dark:bg-card">
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm font-semibold text-foreground">{p.title}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Program phases</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              From current state to production transformation
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Every transformation engagement starts with an honest assessment of where you are.
              The roadmap follows from the analysis — not from a standard playbook.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden sm:block" aria-hidden="true" />
            <div className="space-y-6">
              {phases.map((step, i) => (
                <div key={step.phase} className="relative grid grid-cols-1 gap-4 sm:grid-cols-[180px_1fr] sm:gap-8 sm:pl-20">
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-canvas py-20 lg:py-24">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Use Cases</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Transformation programs we're designed to run
            </h2>
          </div>
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
        title="Ready to talk transformation?"
        subtitle="Tell us where you're trying to get to and what's stopped previous attempts from succeeding. We'll be direct about what a realistic program looks like."
        primaryLabel="Talk to our transformation team"
        primaryHref="/contact"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  )
}
