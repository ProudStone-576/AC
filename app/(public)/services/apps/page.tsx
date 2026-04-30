import { JsonLd } from "@/components/ui/JsonLd"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, CheckCircle2, Database,
  GitMerge, Layers, Shield, Smartphone, Zap
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { AppsHeroVisual } from "@/components/ui/ServiceHeroVisuals"
import { CTASection } from "@/components/sections/CTASection"
import { FadeIn } from "@/components/ui/FadeIn"
import { FaqAccordion } from "@/components/ui/FaqAccordion"

const rightFor = [
  "You need software that off-the-shelf tools simply cannot do",
  "You've outgrown a basic website and need a real product behind it",
  "Your existing app is slow, breaking, or has become a liability",
  "You need a digital product built properly the first time — not adapted from a template",
]

const notRightFor = [
  "You need a simple marketing website — that's the Web service",
  "You want to test an idea with a throwaway prototype or experiment",
]

const faqs: { q: string; a: string }[] = [
  {
    q: "What kind of apps do you build?",
    a: "Web applications, mobile apps (iOS and Android via React Native), and backend APIs. If you have a specific workflow, internal tool, or customer-facing product that standard SaaS can't support, that's what we build.",
  },
  {
    q: "What technology stack do you use?",
    a: "Our default is TypeScript, Next.js on the frontend, and Node or Go on the backend — deployed on the same managed infrastructure we operate. We'll use a different stack if your requirements justify it, but we'll explain why.",
  },
  {
    q: "Who owns the code after the project ends?",
    a: "You do. Full source code, all repositories, all credentials. We don't retain any licensing rights. What we build is yours from the first commit.",
  },
  {
    q: "How long does a typical project take?",
    a: "Discovery and architecture take two to three weeks. A typical first-version build runs eight to sixteen weeks depending on scope. We'll give you a realistic timeline in the scoping conversation — not one designed to win the project.",
  },
  {
    q: "What happens after launch?",
    a: "We offer ongoing support on a retainer or time-and-materials basis — bug fixes, security patches, dependency updates, and feature iterations. The application runs on our managed infrastructure, so we're already operating the environment it runs in.",
  },
  {
    q: "How is this different from hiring a freelancer?",
    a: "A freelancer hands you a build and moves on. We own the outcome — requirements are documented, tests are a build requirement, the CI/CD pipeline is set up, and we're present at launch and the weeks after. You also get a consistent team, not someone whose availability changes mid-project.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on scope. Small internal tools can be built in a few weeks. Large customer-facing products take months. We scope engagements after a discovery conversation — we won't quote before we understand what you need.",
  },
]

export const metadata: Metadata = {
  title: "Enterprise Application Services Canada | Custom Software & APIs | Aethon Core",
  description: "Custom enterprise application development, API integration, and legacy modernization for Canadian organizations. Full-stack development, microservices, and enterprise integrations. British Columbia & national.",
  keywords: [
    "enterprise application development Canada",
    "custom software development Canada",
    "API integration Canada",
    "application modernization Canada",
    "enterprise software British Columbia",
    "legacy modernization Canada",
    "microservices Canada",
    "full stack development Canada",
  ],
  alternates: { canonical: "https://aethoncore.com/services/apps" },
  openGraph: {
    type: "website", locale: "en_CA", url: "https://aethoncore.com/services/apps",
    siteName: "Aethon Core",
    title: "Enterprise Application Services Canada | Custom Software & APIs | Aethon Core",
    description: "Custom enterprise application development, API integration, and legacy modernization for Canadian organizations. Full-stack development, microservices, and enterprise integrations. British Columbia & national.",
  },
}

const capabilities = [
  {
    icon: Layers,
    title: "Custom web applications",
    description:
      "Bespoke web applications engineered to your requirements. React/Next.js frontend, Node, Python, or Go backends. Deployed on the same managed infrastructure we operate — not handed off to a third-party host after delivery.",
    note: "Stack chosen based on requirements, not habit",
  },
  {
    icon: Smartphone,
    title: "Mobile applications",
    description:
      "iOS and Android applications built with React Native. Shared codebase, native-level performance. We handle the App Store and Play Store submission process and maintain the application post-launch.",
    note: "Published to App Store and Play Store, maintained ongoing",
  },
  {
    icon: Database,
    title: "API design and integration",
    description:
      "RESTful and GraphQL APIs that connect your systems. Designed for longevity — versioned, documented, and tested from the first release. We integrate with third-party systems and replace undocumented internal APIs that have become a liability.",
    note: "Includes: Auth, rate limiting, versioning, documentation",
  },
  {
    icon: Shield,
    title: "Security-first development",
    description:
      "Security built in from the start — not bolted on after the first audit finding. Authentication, input validation, dependency scanning, and SAST in CI are baseline requirements on every engagement, not optional add-ons.",
    note: "OWASP Top 10 addressed by default",
  },
  {
    icon: Zap,
    title: "Performance engineering",
    description:
      "Applications built to handle real load. We profile, benchmark, and optimize before release — not after a performance incident in production. Caching, query optimization, and horizontal scaling are designed in, not retrofitted.",
    note: "Targets: sub-200ms server response, Lighthouse 90+",
  },
  {
    icon: GitMerge,
    title: "DevOps and CI/CD",
    description:
      "Full CI/CD pipeline configuration, staging environments, automated testing, and deployment automation. Your team ships to production with confidence rather than coordinating manual deploys over a shared Slack thread.",
    note: "Includes: pipeline setup, environment management, deployment automation",
  },
]

const phases = [
  {
    phase: "Discovery",
    duration: "Week 1",
    description:
      "We document requirements, constraints, and integration points with existing systems. Non-functional requirements — performance targets, compliance obligations, scale expectations — are captured and agreed before any design work begins.",
    deliverable: "Requirements doc + technical spec",
  },
  {
    phase: "Architecture",
    duration: "Week 2–3",
    description:
      "Technology stack selection, system design, data model, security model, and API contracts. Architectural decisions are documented with rationale. The design is reviewed and signed off by your team before development begins.",
    deliverable: "Architecture design + API spec",
  },
  {
    phase: "Build",
    duration: "Week 3–12+",
    description:
      "Sprint-based delivery with weekly demos against the agreed spec. Test coverage is a build requirement, not a post-launch task. Scope changes are costed and agreed before they enter the backlog.",
    deliverable: "Working software with test coverage",
  },
  {
    phase: "Launch",
    duration: "Final 2 weeks",
    description:
      "Staging environment validation, load testing against defined performance targets, and production deployment. We don't hand you a build and walk away — we're present for go-live and the period immediately after.",
    deliverable: "Production application + runbook",
  },
  {
    phase: "Support",
    duration: "Ongoing",
    description:
      "Bug fixes, dependency updates, security patches, and feature iterations on a retainer or time-and-materials basis. You own the code. We're available to keep it running and evolving.",
    deliverable: "Monthly update reports",
  },
]

const useCases = [
  {
    industry: "Financial Services",
    title: "Client portal replacement for a wealth management firm",
    challenge:
      "A wealth management firm was producing client reports manually in Excel and distributing them by email. The process was slow, error-prone, and difficult to audit. Compliance requirements demanded a full audit trail for every data access and communication. Any replacement system needed to integrate with existing custodian data feeds and satisfy their compliance team's review.",
    approach:
      "We built a real-time web portal on the client's existing managed infrastructure, replacing the manual reporting workflow entirely. SSO integration with their identity provider gave the compliance team access controls they could audit. Every data access event is logged. The application was reviewed by their compliance team before launch.",
  },
  {
    industry: "Healthcare",
    title: "Patient intake and scheduling application",
    challenge:
      "A multi-site healthcare provider was running patient intake on paper forms and managing appointment scheduling through a combination of phone and a legacy system that had not been maintained in years. The process created delays, transcription errors, and a poor patient experience. Any replacement had to be HIPAA-compliant and integrate with their existing EHR.",
    approach:
      "We built a mobile-first React Native application for patient intake and scheduling, backed by an API layer that integrates with their EHR. Data is encrypted at rest and in transit. Access controls are role-based. The application was validated against HIPAA technical safeguards before deployment.",
  },
]

export default function AppsPage() {
  return (
    <>
      <JsonLd schema={[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://aethoncore.com"},{"@type":"ListItem","position":2,"name":"Services","item":"https://aethoncore.com/services"},{"@type":"ListItem","position":3,"name":"Enterprise Application Services","item":"https://aethoncore.com/services/apps"}]},{"@context":"https://schema.org","@type":"Service","name":"Enterprise Application Services","url":"https://aethoncore.com/services/apps","provider":{"@type":"Organization","name":"Aethon Core Inc.","url":"https://aethoncore.com"},"areaServed":[{"@type":"Country","name":"Canada"},{"@type":"Country","name":"United States"}],"serviceType":"Enterprise Application Services"}]} />
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Application Development" }]}
        eyebrow="Specialized"
        title="Custom applications built to your requirements"
        subtitle="Full-stack web, mobile, and API development for organizations that need software engineered to exact specifications — not adapted from a template. Deployed on the same infrastructure we operate."
        variant="tinted"
        visual={<AppsHeroVisual />}
      />

      {/* Stats strip */}
      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-in">
          <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
            {[
              { value: "Full-stack", label: "Web, mobile, and API" },
              { value: "TypeScript-first", label: "Our default stack" },
              { value: "Owned by us", label: "Until you're satisfied, then yours" },
              { value: "Integrated", label: "Runs on the same infra we manage" },
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">What we build</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Application development across the full stack
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Every engagement starts with a clear spec. We build to it — and we don't consider the
              work done until the application is running in production and performing as agreed.
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
      <section className="py-20 lg:py-24 bg-surface dark:bg-card">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">How an engagement runs</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              From discovery to production
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Software projects fail when requirements are ambiguous and scope is undefined. We front-load
              the work that prevents those failures.
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
              Application problems we're built to solve
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
        title="Ready to scope your application?"
        subtitle="Tell us what you need to build. We'll tell you what's realistic."
        primaryLabel="Talk to our development team"
        primaryHref="/contact"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  )
}
