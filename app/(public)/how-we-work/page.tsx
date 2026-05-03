import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calendar, CheckCircle2, FileText, Phone, Settings, TrendingUp } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { FadeIn } from "@/components/ui/FadeIn"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "How We Work — Aethon Core",
  description:
    "How an Aethon Core engagement actually works — from discovery call through onboarding to steady-state operations. What we ask from you, what we deliver, and what happens if things go wrong.",
  alternates: { canonical: "https://aethoncore.com/how-we-work" },
}

const stages = [
  {
    step: "01",
    icon: Phone,
    title: "Discovery call",
    duration: "45–60 minutes · no charge",
    description:
      "We talk about your current environment, what's not working, and what you're trying to achieve. We'll tell you honestly at the end of the call whether there's a fit — including if there isn't. We don't pass you to a sales team that pitches regardless of fit.",
    weAsk: [
      "Current environment size and complexity",
      "What's driving the evaluation — a specific incident, a renewal, a compliance deadline?",
      "Who the decision-makers are and what their criteria look like",
    ],
    youGet: [
      "A direct answer on whether our services are a good match",
      "If there's a fit: a recommended starting point (assessment, pilot, or full engagement)",
      "If there isn't: honest advice on what direction might be better",
    ],
    href: "/contact",
    cta: "Book a discovery call",
  },
  {
    step: "02",
    icon: FileText,
    title: "Assessment",
    duration: "5–15 business days · fixed-price",
    description:
      "Before we propose anything, we look at your actual environment. We run an Infrastructure Assessment (or Security Posture Assessment, depending on what's relevant) and give you a written report with findings and a prioritized action plan. This is a paid fixed-scope project — the report is yours regardless of whether you proceed.",
    weAsk: [
      "Read access to architecture diagrams or existing documentation",
      "2–3 hours of your IT team's time across the assessment period",
      "Access credentials for a read-only cloud audit (if applicable)",
    ],
    youGet: [
      "Written findings ranked by risk and business impact",
      "Prioritized action plan with a recommended sequence",
      "Honest assessment of what Aethon Core changes versus what it doesn't",
      "If we find something critical, we'll flag it immediately — not hold it for the report",
    ],
    href: "/services/assessment",
    cta: "Assessment details and pricing",
  },
  {
    step: "03",
    icon: Settings,
    title: "Scoping and Contract",
    duration: "5–7 business days",
    description:
      "Based on the assessment findings, we scope an engagement. You get a Statement of Work (SOW) — a formal document listing exactly what we deliver, the timeline, what success looks like, and the fixed price. We don't start work without a signed SOW. Changes to scope go through a formal change request — no scope creep, no surprise invoices.",
    weAsk: [
      "Review of the draft SOW with your team",
      "Sign-off from the right stakeholders before we proceed",
    ],
    youGet: [
      "Fixed-price or capped T&M engagement — no billing surprises",
      "Named deliverables with acceptance criteria you sign off on",
      "Defined escalation path if the engagement goes off track",
      "Multi-year discount if we're structuring a long-term relationship",
    ],
    href: "/pricing#professional-services",
    cta: "View engagement pricing",
  },
  {
    step: "04",
    icon: Calendar,
    title: "Onboarding",
    duration: "4–8 weeks for most environments",
    description:
      "Platform deployment, integration with your existing tools, and handover to your team. We document everything as we go — not after the fact. Your team should be able to operate the environment independently after onboarding. We track knowledge transfer throughout, not just at the end.",
    weAsk: [
      "A dedicated technical point of contact on your side",
      "Scheduled blocks of your IT team's time for integration work and training",
      "Change management approval for environment changes",
    ],
    youGet: [
      "Platform deployed and integrated in your environment",
      "Your team trained on day-to-day operations and escalation procedures",
      "Step-by-step guides for common operations and incident response",
      "Access to the client portal for request tracking and reporting",
    ],
    href: null,
    cta: null,
  },
  {
    step: "05",
    icon: CheckCircle2,
    title: "Steady-state operations",
    duration: "Ongoing",
    description:
      "For managed services clients: 24/7 monitoring, incident response, and a structured reporting cadence. You get a named service delivery manager, defined SLAs written into the contract, and a monthly business review. We don't disappear between incidents.",
    weAsk: [
      "A 24/7 emergency contact on your side for critical incidents",
      "Attendance at monthly and quarterly business reviews",
      "Advance notice of major planned changes to your environment",
    ],
    youGet: [
      "Weekly infrastructure health summaries",
      "Monthly report showing whether we met our guarantees, plus cost optimization recommendations",
      "Quarterly executive review with roadmap planning",
      "Written post-incident review within 48 hours of any critical or major incident",
    ],
    href: "/services/managed",
    cta: "Managed services details",
  },
  {
    step: "06",
    icon: TrendingUp,
    title: "Growth and expansion",
    duration: "As your environment evolves",
    description:
      "Most clients add products or expand tier coverage over time as their environment grows. We track your node count and flag you in advance before you approach your tier limit — you'll never hit a capacity wall without warning. Adding a product or upgrading a tier is handled without redeployment.",
    weAsk: [
      "Input on your infrastructure roadmap and expected growth",
      "Early notice of major initiatives (M&A, new regions, compliance deadlines)",
    ],
    youGet: [
      "Advance warning before you hit tier or capacity limits",
      "No migration or redeployment when adding products or upgrading",
      "Multi-year pricing locked in at the time of your original agreement",
      "A single account team regardless of how much your engagement expands",
    ],
    href: "/pricing",
    cta: "View tier comparison",
  },
]

const contractFacts = [
  {
    label: "Minimum term",
    value: "Annual for platform; month-to-month after 3-month initial term for managed services",
  },
  {
    label: "Multi-year discounts",
    value: "8% off for 2-year, 14% off for 3-year agreements",
  },
  {
    label: "Scope changes",
    value: "All changes handled via formal change request — no undocumented scope creep",
  },
  {
    label: "SLA remedies",
    value: "If we miss a guarantee, service credits are written into the contract — not goodwill gestures",
  },
  {
    label: "Exit",
    value: "We provide a data export and offboarding handover at end of term — your data is always yours",
  },
  {
    label: "Currency",
    value: "USD by default; CAD available on request for Canadian clients",
  },
]

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Company", href: "/about" }, { label: "How We Work" }]}
        eyebrow="Engagement Model"
        title="How an Aethon Core engagement actually works"
        subtitle="What each stage involves, what we ask from you, what you get, and what happens if things go off track. Enterprise buyers are buying a relationship — this is what ours looks like."
        variant="tinted"
        backgroundImageSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=3840&q=100"
      />

      {/* Stages */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">
                The engagement stages
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Six stages from first call to long-term operations
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Not every client goes through all six — a professional services engagement might stop at
                stage three. The stages are designed to give you a clear exit point at each step.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {stages.map((stage, i) => (
              <FadeIn key={stage.step} variant="fade-up" delay={i * 40}>
                <div className="grid grid-cols-1 gap-8 rounded-xl border border-border bg-white p-8 lg:grid-cols-4 dark:bg-card">

                  {/* Step + title */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-[11px] font-bold tracking-widest text-muted-foreground/50">
                        {stage.step}
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-light">
                        <stage.icon className="h-4 w-4 text-blue" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{stage.title}</h3>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">{stage.duration}</p>
                    {stage.href && stage.cta && (
                      <Link
                        href={stage.href}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue hover:text-blue-hover transition-colors"
                      >
                        {stage.cta}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>

                  {/* Description + we ask / you get */}
                  <div className="lg:col-span-3">
                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                      {stage.description}
                    </p>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                          What we ask from you
                        </p>
                        <ul className="space-y-1.5">
                          {stage.weAsk.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-foreground/75">
                              <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                          What you get
                        </p>
                        <ul className="space-y-1.5">
                          {stage.youGet.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-foreground/75">
                              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue/70" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contract terms */}
      <section className="bg-surface py-16 dark:bg-card lg:py-20">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">
                Contract basics
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                The commercial terms in plain language
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                These are the things enterprise procurement teams usually ask about. If you have questions not covered here, ask during the discovery call.
              </p>
            </div>
          </FadeIn>
          <FadeIn variant="fade-in">
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full">
                <tbody className="divide-y divide-border">
                  {contractFacts.map((fact, i) => (
                    <tr key={fact.label} className={i % 2 === 0 ? "bg-white dark:bg-background" : "bg-surface dark:bg-card"}>
                      <td className="px-6 py-4 text-sm font-semibold text-foreground/80 w-[30%]">
                        {fact.label}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{fact.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
          <FadeIn variant="fade-in">
            <div className="mt-6">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue hover:text-blue-hover transition-colors"
              >
                Full pricing and tier details
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What happens when things go wrong */}
      <section className="py-16 lg:py-20 bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">
                When things go wrong
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                How we handle incidents and missed guarantees
              </h2>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {[
                {
                  title: "Incident response",
                  body: "Critical incidents are responded to within 15 minutes (Enterprise Plus) or 1–8 hours depending on your plan. A named engineer works the problem. You get status updates every 30 minutes until resolved, without having to ask.",
                },
                {
                  title: "Post-incident review",
                  body: "Every critical or major incident results in a written review delivered within 48 hours. It covers what happened, why it happened, what we changed, and what prevents recurrence. This is contractual, not optional.",
                },
                {
                  title: "When we miss a guarantee",
                  body: "Service credits are written into the contract with defined amounts based on severity. They're applied automatically to your next invoice — you don't have to ask. Repeated misses against the same guarantee trigger an escalation review.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-white p-6 dark:bg-card">
                  <h3 className="mb-3 text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn variant="fade-in">
            <div className="mt-6">
              <Link
                href="/services/managed"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue hover:text-blue-hover transition-colors"
              >
                Full SLA commitments for managed services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Ready to start with a discovery call?"
        subtitle="45 minutes. We tell you honestly whether there's a fit. No pitch if there isn't."
        primaryLabel="Book a discovery call"
        primaryHref="/contact"
        secondaryLabel="View pricing"
        secondaryHref="/pricing"
      />
    </>
  )
}
