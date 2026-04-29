import { JsonLd } from "@/components/ui/JsonLd"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, CheckCircle2, FileText,
  GitBranch, Globe, Layers, Search, Users
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { ConsultingHeroVisual } from "@/components/ui/ServiceHeroVisuals"
import { CTASection } from "@/components/sections/CTASection"
import { FadeIn } from "@/components/ui/FadeIn"
import { FaqAccordion } from "@/components/ui/FaqAccordion"

const rightFor = [
  "You're a CIO, CTO, or CEO who needs to make a major technology decision and don't have a fully trusted internal team to advise you",
  "You're evaluating a significant technology investment and need an independent view before committing",
  "You're preparing for a merger, acquisition, or board presentation that involves technology",
  "Previous technology initiatives have run over budget or failed to deliver — you want a realistic plan before starting the next one",
]

const notRightFor = [
  "You need someone to implement something, not advise on it — that's one of our delivery services",
  "You're looking for generic best-practice frameworks or industry reports — we give specific recommendations for your specific situation",
]

const faqs = [
  {
    q: "What exactly do I get from an 8 to 12 week consulting engagement?",
    a: "A board-ready strategy document and roadmap. Not a PowerPoint with generic advice. It covers where you are now, what options exist for getting where you want to go, which option we recommend and why, a sequenced action plan with milestones, and the resource and budget estimates to execute it.",
  },
  {
    q: "How is this different from hiring a management consultant?",
    a: "We're engineers who understand business — not business consultants who dabble in technology. Our recommendations come from people who've built and managed the infrastructure they're advising on. We'll tell you when the fashionable answer is wrong for your specific constraints.",
  },
  {
    q: "How involved does our leadership team need to be?",
    a: "More than you might expect. The first week is almost entirely leadership workshops — we need to understand your actual business objectives, not just the technology problem. After that, our team works mostly independently, with check-ins at each deliverable stage. We don't disappear for six weeks and then hand you a document.",
  },
  {
    q: "What do you need from us to get started?",
    a: "Access to your existing technology documentation — architecture diagrams, vendor contracts, recent audit reports. Time with your key stakeholders. And a clear brief on what decision this engagement needs to inform. We don't need everything to be organized — part of our job is making sense of what exists.",
  },
  {
    q: "What if our situation changes partway through the engagement?",
    a: "It happens. We handle scope changes through a formal change request — you see what's being added, what the impact on timeline and cost is, and you approve it before we proceed. No undocumented changes and no surprise invoices.",
  },
  {
    q: "How much does a consulting engagement cost?",
    a: "All consulting pricing is on our pricing page. M&A technical due diligence is scoped separately based on the target's complexity. Every engagement is fixed-price with a defined statement of work — you know exactly what you are paying for before we start.",
  },
]

export const metadata: Metadata = {
  title: "IT Consulting Services Canada | Technology Strategy & Advisory | Aethon Core",
  description: "Enterprise IT consulting and technology advisory for Canadian organizations. CIO advisory, vendor selection, IT roadmap, architecture review, and IT financial management. Toronto & national.",
  keywords: [
    "IT consulting Canada",
    "IT consulting Toronto",
    "technology consulting Canada",
    "CIO advisory Canada",
    "IT strategy Canada",
    "enterprise IT advisory Canada",
    "technology advisory Canada",
    "IT roadmap Canada",
    "vendor selection Canada",
  ],
  alternates: { canonical: "https://aethoncore.com/services/consulting" },
  openGraph: {
    type: "website", locale: "en_CA", url: "https://aethoncore.com/services/consulting",
    siteName: "Aethon Core",
    title: "IT Consulting Services Canada | Technology Strategy & Advisory | Aethon Core",
    description: "Enterprise IT consulting and technology advisory for Canadian organizations. CIO advisory, vendor selection, IT roadmap, architecture review, and IT financial management. Toronto & national.",
  },
}

const capabilities = [
  {
    icon: Layers,
    title: "Technology roadmap development",
    description:
      "A 3–5 year technology roadmap aligned to your business strategy. We start by understanding what your organization is trying to accomplish, then work backwards to the architecture and capabilities that support it. Not the other way around.",
    note: "Deliverable: Board-ready strategy document with sequenced milestones",
  },
  {
    icon: GitBranch,
    title: "M&A technology due diligence",
    description:
      "Pre-close assessment of an acquisition target's infrastructure, technical debt, integration complexity, and hidden risk. We give you the engineering view before the lawyers sign anything — including the costs they didn't put in the deck.",
    note: "Deliverable: Technical risk register + integration cost model",
  },
  {
    icon: Globe,
    title: "Vendor selection and evaluation",
    description:
      "Independent evaluation of technology vendors against your actual requirements — not analyst quadrant positioning. We build the scoring model, run the RFP process, and give you a recommendation with an auditable rationale.",
    note: "Deliverable: Weighted evaluation matrix + recommendation report",
  },
  {
    icon: Users,
    title: "Board-level technology advisory",
    description:
      "Ongoing technical counsel for boards and executive committees that need to make technology-related decisions without a deep technology background. We translate infrastructure complexity into business risk and capital allocation decisions.",
    note: "Format: Quarterly briefings, on-call advisory, written materials",
  },
  {
    icon: Search,
    title: "Operating model assessment",
    description:
      "An honest look at how your technology organization is structured — team design, vendor relationships, governance processes, and how decisions get made. We identify where the design is creating friction and where it isn't.",
    note: "Deliverable: Operating model assessment + redesign recommendations",
  },
  {
    icon: FileText,
    title: "Regulatory and compliance strategy",
    description:
      "Technology strategy shaped by regulatory constraints — not retrofitted to them. We've built for SOX, PCI-DSS, HIPAA, DORA, GDPR, FedRAMP, and NERC CIP. We know where regulations impose real constraints versus where they're interpreted too conservatively.",
    note: "Deliverable: Compliance gap analysis + remediation roadmap",
  },
]

const phases = [
  {
    phase: "Alignment",
    duration: "Week 1",
    description:
      "We begin by understanding your business objectives, constraints, and the decisions you need this engagement to inform. Workshops with leadership, technical teams, and key stakeholders. No assumptions, no templates.",
    deliverable: "Engagement scope document + stakeholder map",
  },
  {
    phase: "Discovery",
    duration: "Week 2–4",
    description:
      "A structured assessment of your current technology estate — architecture, vendor landscape, technical debt, capabilities, and organizational model. We read every document, interview every relevant stakeholder, and form our own view.",
    deliverable: "Current-state technology assessment",
  },
  {
    phase: "Analysis",
    duration: "Week 4–7",
    description:
      "We synthesize the discovery findings into a clear picture of where you are, where the risk sits, and what options exist for moving forward. Options are evaluated on business impact, technical risk, cost, and time.",
    deliverable: "Options analysis with trade-off assessment",
  },
  {
    phase: "Roadmap",
    duration: "Week 8–12",
    description:
      "The final strategy document: a sequenced roadmap with defined milestones, resource requirements, success criteria, and a prioritized list of decisions that need to be made. Built to be presented to a board, not just to a CIO.",
    deliverable: "Technology roadmap + board presentation materials",
  },
]

const useCases = [
  {
    industry: "Financial Services",
    title: "Pre-acquisition technology diligence",
    challenge:
      "A financial services firm is evaluating a mid-market acquisition target with a technology stack that appears modern on the surface. The sellers' management deck shows cloud-native infrastructure and a recent security audit. The board wants an independent view before the deal closes.",
    approach:
      "We spend two weeks with the target's engineering team — reviewing architecture diagrams, interviewing the ops team, and reading through the actual audit findings rather than the executive summary. We surface the technical debt and integration complexity that the deck didn't address and model the real post-acquisition infrastructure cost.",
  },
  {
    industry: "Healthcare",
    title: "Multi-year technology roadmap for a health system",
    challenge:
      "A regional health system is facing simultaneous pressure from regulators, a pending EHR migration, and a board that wants a clearer technology investment story. The CIO has four separate vendor proposals on the table and no framework for evaluating them against each other.",
    approach:
      "We build a business-objectives-first framework for the roadmap — starting from patient care, clinical efficiency, and regulatory compliance requirements before touching technology options. The vendor proposals get evaluated against that framework, not against each other.",
  },
]

export default function ConsultingPage() {
  return (
    <>
      <JsonLd schema={[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://aethoncore.com"},{"@type":"ListItem","position":2,"name":"Services","item":"https://aethoncore.com/services"},{"@type":"ListItem","position":3,"name":"IT Consulting & Advisory","item":"https://aethoncore.com/services/consulting"}]},{"@context":"https://schema.org","@type":"Service","name":"IT Consulting & Advisory","url":"https://aethoncore.com/services/consulting","provider":{"@type":"Organization","name":"Aethon Core Inc.","url":"https://aethoncore.com"},"areaServed":[{"@type":"Country","name":"Canada"},{"@type":"Country","name":"United States"}],"serviceType":"IT Consulting & Advisory"}]} />
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Strategy Consulting" }]}
        eyebrow="Advisory"
        title="Technology strategy that reflects your business — not someone else's"
        subtitle="We work alongside your leadership team to build a technology roadmap grounded in your actual objectives, constraints, and risk tolerance."
        variant="tinted"
        visual={<ConsultingHeroVisual />}
      />

      {/* Stats strip */}
      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-in">
          <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
            {[
              { value: "8–12 wks", label: "Typical engagement length" },
              { value: "Senior only", label: "No junior analysts on delivery" },
              { value: "Board-ready", label: "All deliverables at exec level" },
              { value: "Independent", label: "No vendor relationships to protect" },
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">What we cover</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Strategy work that produces decisions, not just documents
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Every engagement is scoped around a specific question your leadership team needs answered.
              We don't deliver frameworks. We deliver recommendations you can act on.
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

      {/* How we work */}
      <section className="bg-surface py-20 lg:py-24 dark:bg-card">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">How we work</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A structured process with defined outputs at every stage
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Engagements are scoped at the start and don't drift. You know what you're getting and when.
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
              The kinds of questions we're engaged to answer
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
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Want exact numbers?{" "}
              <Link href="/pricing#projects" className="font-medium text-blue hover:underline">
                See all pricing in one place →
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Ready to start the conversation?"
        subtitle="Describe the decision you need to make or the problem you need to solve. We'll tell you honestly whether a consulting engagement is the right starting point."
        primaryLabel="Talk to our advisory team"
        primaryHref="/contact"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  )
}
