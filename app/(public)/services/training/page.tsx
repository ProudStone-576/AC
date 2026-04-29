import { JsonLd } from "@/components/ui/JsonLd"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, BookOpen, CheckCircle2, Code2,
  GraduationCap, Layers, Monitor, Users
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { TrainingHeroVisual } from "@/components/ui/ServiceHeroVisuals"
import { CTASection } from "@/components/sections/CTASection"
import { FadeIn } from "@/components/ui/FadeIn"
import { FaqAccordion } from "@/components/ui/FaqAccordion"

const rightFor = [
  "Your team uses a platform or toolset but isn't using it well — the implementation is done but the capability isn't there",
  "You've just completed a technology implementation and need the team to be genuinely self-sufficient",
  "Technical staff turnover means institutional knowledge keeps walking out the door",
  "Leadership makes technology decisions without actually understanding the technology",
]

const notRightFor = [
  "You need a one-off training session with no follow-up or curriculum — that's a workshop, not an enablement program",
  "You have a very small team with a simple, stable toolset where the skills gap is minimal",
]

const faqs: { q: string; a: string }[] = [
  {
    q: "What's the difference between training and enablement?",
    a: "Training is what happens in the room. Enablement is the outcome — a team that can operate independently when the training ends. We design for the outcome, not the session. That means we assess the real gaps first, build curriculum around your specific stack, and measure whether the team can actually do the work after we leave.",
  },
  {
    q: "Can you train non-technical leadership?",
    a: "Yes, and we have a specific format for it. Executive briefings are structured technical briefings for non-engineering leadership — covering security status, cloud strategy, risk landscape. The goal is informed decision-making, not turning executives into engineers. No sales content, no jargon without explanation.",
  },
  {
    q: "Do you train on specific products?",
    a: "Yes. We train on the Aethon Core Platform, Terraform, Kubernetes, cloud provider tooling, security platforms, and more. For platforms we've implemented at your organization, we build lab environments that mirror your actual configuration — so training is on the system your team will actually operate.",
  },
  {
    q: "Can training be delivered remotely?",
    a: "Yes. Workshops, labs, and executive briefings can all be delivered remotely. The embedded enablement format — where an Aethon Core engineer works alongside your team — works best in-person or in a hybrid arrangement, but remote versions are possible depending on the engagement.",
  },
  {
    q: "How long does a program take to build and deliver?",
    a: "A skills assessment and curriculum design takes one to two weeks. Delivery runs two to six weeks depending on the format — workshops are faster; embedded enablement takes longer. The total engagement for a typical team enablement program is four to eight weeks.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on the size of the team, the complexity of the curriculum, and the delivery format. Single-team enablement programs are a defined engagement with a fixed scope. We'll quote after the skills assessment tells us what the real gaps are.",
  },
]

export const metadata: Metadata = {
  title: "Training & Enablement — Services",
  description:
    "Technical training and enablement programs that leave your team genuinely capable — not just certified. We build programs around your stack, your team's current level, and the gaps that matter.",
}

const capabilities = [
  {
    icon: GraduationCap,
    title: "Platform operations training",
    description:
      "Hands-on training for the teams who will operate the Aethon Core Platform day-to-day. Not slide-based walkthroughs — structured lab environments that mirror your production configuration. Engineers leave with the skills to handle real incidents, not just the ones covered in the manual.",
    note: "Format: Instructor-led + lab environments + your production config",
  },
  {
    icon: Code2,
    title: "Infrastructure-as-code enablement",
    description:
      "Terraform and Pulumi training calibrated to your team's current level. We build on the module structure and patterns we established during implementation — so your engineers are learning the codebase they'll actually maintain, not abstract examples.",
    note: "Covers: Terraform, Pulumi, GitOps workflows, policy-as-code",
  },
  {
    icon: Layers,
    title: "Cloud architecture fundamentals",
    description:
      "Structured curriculum for engineering teams transitioning to cloud or expanding across cloud providers. Covers network design, identity models, cost governance, and reliability patterns — in the context of your actual cloud environment, not a generic reference architecture.",
    note: "Levels: Practitioner → Associate → Senior engineer tracks",
  },
  {
    icon: Monitor,
    title: "Observability and incident response",
    description:
      "Training programs for the engineers and operations staff who respond when things go wrong. Covers alert triage, distributed tracing, log analysis, and the structured incident management process. Includes tabletop exercises based on real failure scenarios.",
    note: "Includes: Tabletop exercises + runbook walkthroughs + tool labs",
  },
  {
    icon: Users,
    title: "Security awareness and operations",
    description:
      "Role-specific security training: technical depth for engineers, process training for operations staff, and executive security briefings for leadership. We write the curriculum to your actual threat model — not the generic one that applies to everyone.",
    note: "Tracks: Engineering · Operations · Leadership · End user",
  },
  {
    icon: BookOpen,
    title: "Documentation and knowledge transfer",
    description:
      "A structured knowledge transfer process is built into every engagement. We produce runbooks, architecture decision records, and operational playbooks in formats your team will actually use. We don't hand over documentation and leave — we walk through it live.",
    note: "Deliverables: Runbook library + ADRs + operational playbooks",
  },
]

const formats = [
  {
    format: "Instructor-led workshops",
    duration: "1–3 days",
    description: "Structured classroom-format sessions with live instruction, Q&A, and hands-on exercises. Best for introducing a new platform or technology to a team.",
    maxSize: "Up to 20 participants",
  },
  {
    format: "Lab-based intensives",
    duration: "3–5 days",
    description: "Deep-dive technical training using lab environments that mirror your infrastructure. Engineers work through real scenarios with instructor support throughout.",
    maxSize: "Up to 12 participants",
  },
  {
    format: "Embedded enablement",
    duration: "2–8 weeks",
    description: "An Aethon Core engineer works alongside your team through a live project. Learning happens in context — your team builds skills while delivering real work.",
    maxSize: "2–4 engineers",
  },
  {
    format: "Tabletop exercises",
    duration: "Half-day",
    description: "Facilitated incident scenario exercises for operations and security teams. Designed around your specific stack and the failure modes most relevant to your environment.",
    maxSize: "6–15 participants",
  },
  {
    format: "Executive briefings",
    duration: "2–3 hours",
    description: "Structured technical briefings for non-engineering leadership — security status, cloud strategy, risk landscape. No sales content. Honest assessment of where your program stands.",
    maxSize: "Up to 10 participants",
  },
  {
    format: "Self-paced curriculum",
    duration: "Ongoing",
    description: "Custom learning paths built for your platform configuration, delivered asynchronously. Used for onboarding new team members after the initial engagement completes.",
    maxSize: "Unlimited",
  },
]

const phases = [
  {
    phase: "Skills assessment",
    duration: "Week 1",
    description:
      "We assess your team's current skill level through structured interviews and a practical exercise. We're looking for the real gaps — not the ones people are willing to admit in a survey. The curriculum is built around what we find.",
    deliverable: "Team skills profile + gap analysis + proposed curriculum",
  },
  {
    phase: "Curriculum design",
    duration: "Week 1–2",
    description:
      "We build the training curriculum around your team's gaps, your stack, and your actual operational requirements. Lab environments are configured to mirror your production setup where possible.",
    deliverable: "Training curriculum + lab environment setup + schedule",
  },
  {
    phase: "Delivery",
    duration: "Week 2–6",
    description:
      "Training is delivered in the agreed format — workshops, labs, embedded enablement, or a combination. Sessions are recorded where permitted. Exercises use real scenarios from your environment.",
    deliverable: "Completed training sessions + lab exercise completion records",
  },
  {
    phase: "Knowledge transfer",
    duration: "Final week",
    description:
      "Formal handoff of all training materials, lab configurations, and runbooks. A structured review session covers what was learned, what gaps remain, and the recommended continuing learning path.",
    deliverable: "Training materials library + continuing learning recommendations",
  },
]

const useCases = [
  {
    industry: "Financial Services",
    title: "Enabling an in-house platform team after a managed services transition",
    challenge:
      "A financial institution is transitioning from a fully managed infrastructure model to an internal team that owns day-to-day platform operations. The team has strong software engineering backgrounds but limited infrastructure operations experience. They need to be operational within 90 days — not dependent on the previous provider and not dependent on us.",
    approach:
      "We build a structured 8-week enablement program. The first two weeks use lab environments; weeks three through six use the actual production environment with an Aethon Core engineer present. The final two weeks are fully independent operation with an on-call escalation path. By week eight, the team runs their own incidents.",
  },
  {
    industry: "Healthcare",
    title: "Security operations training for a newly formed internal SOC",
    challenge:
      "A health system is standing up an internal security operations center for the first time. The team is experienced in IT operations but hasn't worked in a formal security operations role. They need structured training on alert triage, incident response procedure, and the tools they'll be running — before the first real incident.",
    approach:
      "We build a six-week security operations curriculum around the specific tooling and threat model of the health system. Weeks one through three cover tooling and process. Weeks four and five are tabletop incident response exercises using realistic healthcare threat scenarios. Week six is a full-day red team exercise where the team responds to live simulated incidents.",
  },
]

export default function TrainingPage() {
  return (
    <>
      <JsonLd schema={[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://aethoncore.com"},{"@type":"ListItem","position":2,"name":"Services","item":"https://aethoncore.com/services"},{"@type":"ListItem","position":3,"name":"Training & Enablement","item":"https://aethoncore.com/services/training"}]},{"@context":"https://schema.org","@type":"Service","name":"Training & Enablement","url":"https://aethoncore.com/services/training","provider":{"@type":"Organization","name":"Aethon Core Inc.","url":"https://aethoncore.com"},"areaServed":[{"@type":"Country","name":"Canada"},{"@type":"Country","name":"United States"}],"serviceType":"Training & Enablement"}]} />
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Training & Enablement" }]}
        eyebrow="Advisory"
        title="Training that leaves your team genuinely capable"
        subtitle="We build programs around your team, your stack, and the gaps that matter. The goal is a team that can operate independently — not one that depends on us indefinitely."
        variant="tinted"
        visual={<TrainingHeroVisual />}
      />

      {/* Stats strip */}
      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-in">
          <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
            {[
              { value: "6 formats", label: "From workshops to embedded enablement" },
              { value: "Role-based", label: "Engineering, operations, and leadership tracks" },
              { value: "Your stack", label: "Lab environments mirror your infrastructure" },
              { value: "Transfer", label: "Materials library included in every engagement" },
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

      {/* Capabilities */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">What we teach</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Technical enablement across your entire infrastructure program
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Every training program is built around a skills gap assessment first. We don't run
              generic curricula — we teach what your team actually needs to learn.
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

      {/* Delivery formats */}
      <section className="bg-surface py-20 lg:py-24 dark:bg-card">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Delivery formats</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Six delivery formats for different learning needs
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              The right format depends on your team's size, schedule, and learning style. Most engagements
              combine formats — we'll recommend the mix based on what your team needs.
            </p>
          </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {formats.map((f) => (
              <div key={f.format} className="rounded-xl border border-border bg-white p-6 dark:bg-card">
                <div className="mb-3">
                  <p className="text-sm font-semibold text-foreground">{f.format}</p>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="font-mono text-xs text-blue">{f.duration}</span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground">{f.maxSize}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">How it works</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Training built around what your team actually needs
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              We start with an honest assessment of where your team is. The curriculum follows from
              the gaps — not the other way around.
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
              Enablement scenarios we're built for
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
        title="Ready to talk about enablement?"
        subtitle="Tell us who needs to be trained, on what, and what independent operation looks like for you. We'll assess the gap and scope a program that gets your team there."
        primaryLabel="Talk to our enablement team"
        primaryHref="/contact"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  )
}
