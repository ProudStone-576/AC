import { JsonLd } from "@/components/ui/JsonLd"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, CheckCircle2, FileText, Shield, Server,
  BarChart2, Clock, AlertTriangle, Layers,
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { AssessmentHeroVisual } from "@/components/ui/ServiceHeroVisuals"
import { CTASection } from "@/components/sections/CTASection"
import { FadeIn } from "@/components/ui/FadeIn"
import { FaqAccordion } from "@/components/ui/FaqAccordion"

const rightFor = [
  "You want to understand exactly where your technology stands before making major decisions or investments",
  "Something has broken or degraded and you're not sure why — or what else might be at risk",
  "You're evaluating whether to modernize, migrate, or invest further in current infrastructure",
  "A regulator or board is asking you to demonstrate technology health and you need an independent view",
  "You're about to sign a long-term infrastructure contract and want to understand your current obligations",
]

const notRightFor = [
  "You already know what needs fixing and just need someone to do the work — start with Implementation",
  "You need a security-specific review focused on vulnerabilities and penetration testing",
]

const faqs: { q: string; a: string }[] = [
  {
    q: "What does an assessment actually cover?",
    a: "Depending on the format you choose, an assessment covers some or all of: infrastructure architecture, current security gaps, resilience and availability, performance and capacity, compliance gaps, and operational maturity. The comprehensive format covers all six. The targeted formats go deeper in fewer areas.",
  },
  {
    q: "What do you need from us?",
    a: "Primarily: access to documentation, a list of systems in scope, and availability for structured interviews with your technical team. We don't need administrator access to everything on day one — we'll work through access requirements with you during scoping.",
  },
  {
    q: "How long does it take?",
    a: "The Infrastructure Health Check takes five business days. The Security Posture Assessment takes five to ten days. The Comprehensive Infrastructure Assessment takes fifteen business days. These are working engagement days, not calendar weeks — we schedule around your team's availability.",
  },
  {
    q: "What do we get at the end?",
    a: "Every assessment produces an executive summary for leadership, a technical findings report for your engineering team, and a prioritized remediation roadmap with effort and cost estimates. You'll know what's at risk, what to fix first, and roughly what it will cost to fix it.",
  },
  {
    q: "What if the findings are bad?",
    a: "We tell you. Our job is to give you an accurate picture of where you stand — not a reassuring one. Most organizations find meaningful gaps. Finding them through an assessment is better than discovering them through an incident or a regulatory examination. The remediation roadmap gives you a path forward.",
  },
  {
    q: "How much does it cost?",
    a: "Assessment pricing is fixed per format. The Infrastructure Health Check and Security Posture Assessment are priced for the five-to-ten day engagement duration. The Comprehensive Assessment is priced for the full fifteen-day scope. Contact us for current pricing — we don't charge more for difficult findings.",
  },
]

export const metadata: Metadata = {
  title: "Infrastructure Assessment — Services",
  description:
    "A fixed-scope, time-boxed assessment of your infrastructure — what's working, what's at risk, and what to address first. Honest findings with a prioritized remediation roadmap.",
}

const assessmentAreas = [
  {
    icon: Server,
    title: "Infrastructure architecture",
    description:
      "Review of your compute, storage, and network architecture against current best practices and your business requirements. Single points of failure, over-provisioned capacity, technical debt, and modernization opportunities are documented with their business impact and remediation priority.",
    note: "Compute · Storage · Network · Data centre · Cloud architecture",
  },
  {
    icon: Shield,
    title: "Current security gaps",
    description:
      "Review of your identity setup, network segmentation, endpoint coverage, patch status, and security tooling. We assess against the frameworks relevant to your industry and give you an honest picture of your actual security — not the one described in your policy documents.",
    note: "Identity · Network · Endpoints · Patch status · Security tooling coverage",
  },
  {
    icon: AlertTriangle,
    title: "Resilience and availability",
    description:
      "Assessment of redundancy, failover capability, backup program effectiveness, and actual vs. documented RTO/RPO. We test backup restore procedures where practical. Recovery gaps are quantified in business terms — not just technical terms.",
    note: "Redundancy gaps · Backup integrity · RTO/RPO gap analysis",
  },
  {
    icon: BarChart2,
    title: "Performance and capacity",
    description:
      "Analysis of utilization trends, performance bottlenecks, and capacity constraints. We identify workloads that are constrained today and those that will become constrained in the next 12 months at current growth rates. Capacity planning recommendations are workload-specific.",
    note: "Utilization analysis · Bottleneck identification · 12-month capacity forecast",
  },
  {
    icon: FileText,
    title: "Compliance and governance gaps",
    description:
      "Review of your current compliance coverage against the frameworks relevant to your industry. We identify gaps that represent audit findings or regulatory risk — not a full compliance program, but a clear picture of where the exposure is.",
    note: "Compliance gap summary against your applicable frameworks",
  },
  {
    icon: Layers,
    title: "Operational maturity",
    description:
      "Assessment of your operational processes — monitoring coverage, incident management, change management, patch management, and capacity planning. Operational gaps are as consequential as architectural gaps; this assessment surfaces both.",
    note: "Monitoring · Incident management · Change management · Patch management",
  },
]

const deliverables = [
  {
    title: "Executive summary",
    description: "A 2–3 page briefing for leadership — what we found, what the most significant risks are, and the recommended priorities. Written for people who make decisions, not for the people who implement them.",
  },
  {
    title: "Technical findings report",
    description: "Full documentation of every finding — what was assessed, what was found, the risk rating, and the recommended remediation approach. Written for the engineers who will act on it.",
  },
  {
    title: "Prioritized remediation roadmap",
    description: "Findings organized by risk priority and remediation effort — a risk-adjusted view that helps you address the highest-impact items first, not the easiest ones.",
  },
  {
    title: "Effort and cost estimates",
    description: "High-level effort and cost estimates for each remediation item — enough to inform budget planning and prioritization decisions, not a detailed project plan.",
  },
]

const assessmentTypes = [
  {
    name: "Infrastructure Health Check",
    duration: "5 business days",
    scope: "Architecture, availability, and operational maturity",
    format: "Remote assessment with key stakeholder interviews",
    output: "Executive summary + technical findings + remediation roadmap",
    best: "Organizations that want a current-state view before planning a modernization program",
  },
  {
    name: "Security Posture Assessment",
    duration: "5–10 business days",
    scope: "Security architecture, identity, network, endpoints, compliance gaps",
    format: "Remote assessment + tooling review + stakeholder interviews",
    output: "Security gap analysis + risk register + prioritized remediation plan",
    best: "Organizations facing a compliance deadline or recent security incident",
  },
  {
    name: "Comprehensive Infrastructure Assessment",
    duration: "15 business days",
    scope: "All assessment areas — architecture, security, resilience, performance, compliance, operations",
    format: "On-site and remote sessions + deep technical review",
    output: "Full findings report + executive summary + remediation roadmap + cost estimates",
    best: "Organizations undergoing a significant transition — M&A, re-platforming, or regulatory change",
  },
]

const useCases = [
  {
    industry: "Manufacturing",
    title: "Pre-acquisition infrastructure assessment",
    challenge:
      "A manufacturing group is acquiring a company with an enterprise IT and OT infrastructure that the acquirer's team has never reviewed. The deal timeline is 6 weeks. They need an independent assessment of what they're acquiring — not a report from the target's internal team.",
    approach:
      "We complete a 10-day comprehensive assessment of the target's infrastructure — architecture, security status, operational maturity, and compliance gaps. Significant findings are communicated directly to the acquiring team before close. The assessment informs deal terms and the integration program that begins on day one of ownership.",
  },
  {
    industry: "Financial Services",
    title: "Regulatory readiness review before an examination",
    challenge:
      "A financial institution has a regulatory examination scheduled in 8 weeks. The last examination produced findings on IT controls, security, and operational resilience. They want an independent view of where they stand before the examiners arrive — not an internal self-assessment.",
    approach:
      "We conduct a targeted assessment focused on the examination areas that produced prior findings — access controls, change management, incident management, and resilience. Gaps are identified and, where the timeline permits, remediated before the examination. The assessment also prepares the team for the questions the examiners are likely to ask.",
  },
]

export default function AssessmentPage() {
  return (
    <>
      <JsonLd schema={[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://aethoncore.com"},{"@type":"ListItem","position":2,"name":"Services","item":"https://aethoncore.com/services"},{"@type":"ListItem","position":3,"name":"IT Assessment","item":"https://aethoncore.com/services/assessment"}]},{"@context":"https://schema.org","@type":"Service","name":"IT Assessment","url":"https://aethoncore.com/services/assessment","provider":{"@type":"Organization","name":"Aethon Core Inc.","url":"https://aethoncore.com"},"areaServed":[{"@type":"Country","name":"Canada"},{"@type":"Country","name":"United States"}],"serviceType":"IT Assessment"}]} />
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Infrastructure Assessment" }]}
        eyebrow="Advisory"
        title="An honest assessment of your infrastructure before you plan what comes next"
        subtitle="Fixed-scope, time-boxed assessments that tell you what's actually at risk — with a prioritized remediation roadmap, not just a list of findings."
        variant="tinted"
        visual={<AssessmentHeroVisual />}
      />

      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-in">
            <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
              {[
                { value: "5 days", label: "Minimum assessment duration" },
                { value: "6", label: "Assessment areas covered" },
                { value: "Prioritized", label: "Remediation roadmap format" },
                { value: "Honest", label: "Finding format — not reassuring" },
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
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">What we assess</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Six assessment areas that cover what actually fails
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Infrastructure failures are almost never caused by a single problem. Architecture gaps create availability risk; operational gaps turn availability risk into actual outages. We assess both.
              </p>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {assessmentAreas.map((area) => (
                <div key={area.title} className="group rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue/20 dark:bg-card">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                    <area.icon className="h-5 w-5 text-blue" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">{area.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
                  <p className="font-mono text-xs font-semibold text-blue/80">{area.note}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-24 dark:bg-card">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Assessment types</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Three assessment formats for different situations
              </h2>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {assessmentTypes.map((type, i) => (
                <div key={type.name} className={`flex flex-col rounded-xl border p-6 ${i === 2 ? "border-blue/20 bg-blue-light dark:bg-blue/10" : "border-border bg-white dark:bg-background"}`}>
                  <div className="mb-4 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue" />
                    <span className="font-mono text-xs font-semibold text-blue">{type.duration}</span>
                  </div>
                  <h3 className="mb-3 text-base font-semibold text-foreground">{type.name}</h3>
                  <div className="flex-1 space-y-3 text-sm">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Scope</p>
                      <p className="mt-0.5 text-foreground/80">{type.scope}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Format</p>
                      <p className="mt-0.5 text-foreground/80">{type.format}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Output</p>
                      <p className="mt-0.5 text-foreground/80">{type.output}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Best for</p>
                      <p className="mt-0.5 text-foreground/80">{type.best}</p>
                    </div>
                  </div>
                  <Link
                    href="/contact?inquiry=assessment"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:underline"
                  >
                    Book this assessment <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Deliverables</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                What you get at the end of every assessment
              </h2>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {deliverables.map((d) => (
                <div key={d.title} className="flex items-start gap-4 rounded-xl border border-border bg-white p-6 dark:bg-card">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                  <div>
                    <h3 className="mb-1.5 text-sm font-semibold text-foreground">{d.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{d.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-canvas py-20 lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="blur-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Use Cases</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Assessments built for real decisions
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
        title="Not sure where to start? Start with an assessment."
        subtitle="A 5-day health check will tell you exactly where your infrastructure stands — and give you a prioritized list of what to address first."
        primaryLabel="Book an infrastructure assessment"
        primaryHref="/contact?inquiry=assessment"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  )
}
