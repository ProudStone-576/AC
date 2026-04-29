import type { Metadata } from "next"
import Link from "next/link"
import {
  AlertCircle,
  ArrowRight,
  BarChart2,
  CheckCircle2,
  Eye,
  MessageSquare,
  Shield,
  Star,
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { ReputationHeroVisual } from "@/components/ui/ServiceHeroVisuals"
import { CTASection } from "@/components/sections/CTASection"
import { FadeIn } from "@/components/ui/FadeIn"
import { FaqAccordion } from "@/components/ui/FaqAccordion"

const rightFor = [
  "Negative online reviews are materially hurting your ability to attract customers or close deals",
  "You believe you have fake or malicious reviews that violate the platform's published policies",
  "A recent public incident has affected your brand in search results and you need a systematic response",
  "You want a proper monitoring program so new reputation issues are caught early",
]

const notRightFor = [
  "You want to fabricate or incentivize positive reviews — we don't do that and it violates platform terms",
  "You've received negative reviews that are factually accurate — those cannot be removed and shouldn't be",
]

const faqs: { q: string; a: string }[] = [
  {
    q: "What can actually be removed from review platforms?",
    a: "Reviews that violate the platform's own published content policies. That includes fake reviews from non-customers, spam accounts, reviews containing false factual claims about the business, reviews that reference services the business doesn't offer, and in some cases reviews from competitors. Negative reviews from real customers about real experiences generally cannot be removed.",
  },
  {
    q: "How do you know if a review violates policy?",
    a: "We review each flagged submission against the specific platform's published content policies — Google, Yelp, Trustpilot, G2 each have different rules. We document which policy clause is violated and build an evidence package. We only escalate what the platform's own policies support. If a review doesn't clearly violate policy, we tell you that rather than filing a removal that won't succeed.",
  },
  {
    q: "What's your removal success rate?",
    a: "We don't publish a removal rate because it varies by platform, violation type, and evidence quality. What we can tell you is that we only escalate reviews where we've identified a specific, documented policy violation — which means our submissions are grounded rather than speculative. We track every submission to resolution and report outcomes in your monthly report.",
  },
  {
    q: "What does reputation monitoring include?",
    a: "Continuous monitoring across your monitored platforms with alerts within 15 minutes of a new review. New reviews are assessed for policy compliance. Monthly report covering review volume, average rating trends, and removal escalation outcomes. Ongoing response drafting for reviews that need engagement.",
  },
  {
    q: "Can you help us get more positive reviews?",
    a: "Yes — through legitimate means. We coach your team on practices that naturally generate reviews from satisfied customers without incentivizing them, which would violate platform terms. The goal is a review profile that accurately reflects your real operation — not an artificially inflated rating.",
  },
  {
    q: "How much does this cost?",
    a: "The initial audit and removal escalation phase is a fixed-scope engagement. Ongoing monitoring and management is a monthly retainer. Pricing depends on the number of platforms monitored and the volume of review activity. Contact us for current rates.",
  },
]

export const metadata: Metadata = {
  title: "Reputation Management — Services",
  description:
    "Review monitoring, policy-violating review identification and escalation, and online reputation management for businesses that care about their digital presence.",
}

const capabilities = [
  {
    icon: Eye,
    title: "Review monitoring",
    description:
      "Continuous monitoring across Google Business, Yelp, Trustpilot, G2, Clutch, and industry-specific platforms. You're alerted within 15 minutes of a new review — positive or negative.",
    note: "Covers: Google Business, Yelp, Trustpilot, G2, Clutch, and custom platform requests",
  },
  {
    icon: AlertCircle,
    title: "Policy violation identification",
    description:
      "Trained review of flagged content against each platform's published content policies. We identify spam, fake accounts, irrelevant content, defamatory claims, and conflicts of interest — and document the specific policy clause violated.",
    note: "We only escalate what the platform's own published policy supports",
  },
  {
    icon: CheckCircle2,
    title: "Removal escalation",
    description:
      "Structured escalation through platform-specific removal channels with documented evidence packages. We track each submission through to resolution and follow up when platforms don't respond within their stated timelines.",
    note: "Includes: evidence collection, submission, follow-up tracking, outcome documentation",
  },
  {
    icon: MessageSquare,
    title: "Response management",
    description:
      "Professional response drafting for negative reviews that don't qualify for removal. Responses are tone-matched to your brand, reviewed by you before publishing, and written to serve both the reviewer and future readers.",
    note: "All responses reviewed and approved by you before publishing",
  },
  {
    icon: BarChart2,
    title: "Reputation reporting",
    description:
      "Monthly report covering review volume, average rating trend, removal escalation outcomes, and platform-by-platform breakdown. Exportable for board-level or investor reporting.",
    note: "Delivered monthly — includes platform breakdown, trend analysis, removal outcomes",
  },
  {
    icon: Shield,
    title: "Proactive reputation strategy",
    description:
      "We identify patterns in your review profile that create vulnerability and coach your team on practices that generate legitimate positive reviews — without incentivized review schemes that violate platform terms.",
    note: "No incentivized review programs — platform-compliant practices only",
  },
]

const phases = [
  {
    phase: "Audit",
    duration: "Week 1",
    description:
      "Full review audit across every monitored platform. Every existing review is categorized: compliant, borderline, or policy-violating. Removal candidates are prioritized by platform and violation type.",
    deliverable: "Review audit report with prioritized removal candidates",
  },
  {
    phase: "Escalation",
    duration: "Week 1–4",
    description:
      "Policy-violating reviews are submitted through the correct platform removal channels with structured evidence packages. Each submission is tracked and followed up until a resolution is reached.",
    deliverable: "Submission confirmation and tracking reference for each escalation",
  },
  {
    phase: "Monitoring setup",
    duration: "Week 2",
    description:
      "Real-time monitoring alerts configured across all platforms. New reviews are flagged within 15 minutes. You receive alerts, and our team reviews each new review for policy compliance.",
    deliverable: "Monitoring dashboard access + alert configuration",
  },
  {
    phase: "Ongoing management",
    duration: "Monthly",
    description:
      "New reviews monitored continuously, new violations escalated as they appear, responses drafted for reviews requiring engagement, and a monthly report delivered covering all activity and outcomes.",
    deliverable: "Monthly reputation report + escalation activity summary",
  },
]

const useCases = [
  {
    industry: "Professional Services",
    title: "Coordinated fake review campaign targeting a consulting firm",
    challenge:
      "A consulting firm received 17 new 1-star reviews over a two-week period. The reviews had no engagement history, were posted from new accounts, and referenced services the firm doesn't offer. The firm's average rating dropped from 4.8 to 3.9, directly impacting inbound lead volume.",
    approach:
      "We documented the account creation patterns, cross-referenced the review timing with competitor activity, and built evidence packages for each review citing Google's fake engagement policy. 14 of 17 reviews were removed within 30 days. The firm's rating recovered to 4.7.",
  },
  {
    industry: "Retail",
    title: "Legacy negative reviews tied to a resolved supplier issue",
    challenge:
      "A retailer had a cluster of 23 negative reviews from a two-month period two years prior, all referencing a specific shipping delay caused by a supplier failure that had since been resolved. The reviews were accurate at the time but no longer reflected the current operation.",
    approach:
      "We audited the review cluster and identified 8 reviews that contained factual inaccuracies about the company (wrong resolution claims, incorrect product descriptions) that qualified for removal under misinformation policies. The remaining 15 were addressed with factual, professional responses acknowledging the past issue and documenting the resolution.",
  },
]

export default function ReputationPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Reputation Management" }]}
        eyebrow="Build & Digital"
        title="Review monitoring and removal escalation — done properly"
        subtitle="We identify reviews that violate platform policies and escalate them through the correct removal channels with documented evidence. We don't fabricate, manipulate, or use incentivized review schemes."
        variant="tinted"
        visual={<ReputationHeroVisual />}
      />

      {/* Stats strip */}
      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-in">
            <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
              {[
                { value: "72 hrs", label: "Avg time to escalate a flagged review" },
                { value: "4 platforms", label: "Google, Yelp, Trustpilot, G2 — and more" },
                { value: "Policy-based", label: "Only reviews that violate platform rules" },
                { value: "Documented", label: "Full paper trail for every escalation" },
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
      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">What we do</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Monitor, identify, escalate, respond
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Reputation management isn&apos;t about gaming platforms — it&apos;s about making sure the reviews
                that exist actually reflect your real operation.
              </p>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="group rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:border-blue/20 hover:shadow-md dark:bg-card"
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
      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">
                How a reputation engagement runs
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                From audit to active management
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                We start with a full picture of where you stand, then work systematically through removals
                and set up monitoring so nothing slips through going forward.
              </p>
            </div>
          </FadeIn>
          <div className="relative">
            <div className="absolute bottom-0 left-8 top-0 hidden w-px bg-border sm:block" aria-hidden="true" />
            <div className="space-y-6">
              {phases.map((step, i) => (
                <FadeIn key={step.phase} variant="fade-up" delay={i * 60}>
                  <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-[180px_1fr] sm:gap-8 sm:pl-20">
                    <div className="hidden sm:absolute sm:left-0 sm:top-0 sm:flex sm:h-16 sm:w-16 sm:items-center sm:justify-center sm:rounded-full sm:border sm:border-border sm:bg-white sm:shadow-sm dark:sm:bg-card">
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
                Reputation problems we&apos;re designed to solve
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
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-canvas-muted">
                      The Situation
                    </p>
                    <p className="text-sm leading-relaxed text-canvas-muted">{uc.challenge}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-canvas-muted">
                      Our Approach
                    </p>
                    <p className="text-sm leading-relaxed text-white/80">{uc.approach}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <div className="mt-8 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors hover:text-blue-hover"
            >
              See all case studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What we don't do — transparency note */}
      <section className="bg-surface py-12 dark:bg-card">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="rounded-xl border border-border bg-white p-8 dark:bg-background">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-light">
                  <Star className="h-5 w-5 text-blue" />
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">What we don&apos;t do</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    We don&apos;t generate fake reviews, operate incentivized review programs, use review gating,
                    or take any action that violates platform terms of service. Every escalation we file is grounded
                    in the platform&apos;s own published content policy. We provide full documentation of every action
                    taken — including submissions, platform responses, and outcomes — so you have a complete record.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
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
        title="Ready to clean up your review profile?"
        subtitle="We'll audit your reviews across platforms and tell you exactly what's removable under policy — and what isn't. No promises we can't keep."
        primaryLabel="Get a review audit"
        primaryHref="/contact"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  )
}
