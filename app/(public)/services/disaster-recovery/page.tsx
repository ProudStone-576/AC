import { JsonLd } from "@/components/ui/JsonLd"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, CheckCircle2,
  HardDrive, RefreshCw, Server, Shield, Zap, FileText,
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { DisasterRecoveryHeroVisual } from "@/components/ui/ServiceHeroVisuals"
import { CTASection } from "@/components/sections/CTASection"
import { FadeIn } from "@/components/ui/FadeIn"
import { FaqAccordion } from "@/components/ui/FaqAccordion"

const rightFor = [
  "You couldn't say with confidence how long recovery would take if your systems went down today",
  "You've never tested your DR plan by running a full failover drill",
  "Your backup strategy exists on paper but has no defined recovery time objective",
  "A regulator or insurer is asking for documented and tested DR capability",
  "You've had a near-miss — ransomware, hardware failure, or a botched deployment — that revealed gaps",
]

const notRightFor = [
  "You just need somewhere to store backup copies — that's a storage solution, not a DR program",
  "You already have a tested DR plan with documented RTO/RPO and recent drill results",
]

const faqs: { q: string; a: string }[] = [
  {
    q: "What's the difference between backup and disaster recovery?",
    a: "Backup means you have copies of your data. Disaster recovery means you have a tested process for getting your systems back up and running within a defined time, using those copies. You can have great backups and terrible DR — if you've never tested how long it actually takes to restore from them, you don't know your real recovery time.",
  },
  {
    q: "What are RTO and RPO?",
    a: "RTO (Recovery Time Objective) is how long it's acceptable to be down after an incident. RPO (Recovery Point Objective) is how much data loss is acceptable — measured in time. If your RPO is one hour, your backups need to run at least every hour. Both need to be agreed before you design a DR architecture, not after.",
  },
  {
    q: "How do we know the plan will actually work?",
    a: "You don't — until you test it. That's the core problem with most DR programs. We build the plan and then test it: first in a staging environment, then with a full failover test against production systems in a controlled window. We document what the test found and fix whatever didn't work before calling it done.",
  },
  {
    q: "What does a DR test actually involve?",
    a: "We define a specific failure scenario — full site loss, database corruption, ransomware encryption of primary systems — and execute the recovery procedures exactly as they're documented. We time every step, note every problem, and produce a post-test report. If the test reveals that your RTO target isn't achievable, we tell you that and tell you what it would take to meet it.",
  },
  {
    q: "What if we need zero downtime for our most critical systems?",
    a: "Zero downtime requires active-active architecture, where two independent environments handle traffic simultaneously and failover is automatic. It's achievable for most systems but costs more than a warm standby. We'll help you decide what level of recovery is right for each system tier based on the actual business cost of downtime.",
  },
  {
    q: "How much does it cost?",
    a: "DR programs range from a few weeks of assessment and redesign work to multi-month implementation projects for complex environments. Cost depends heavily on your current state and your RTO/RPO targets. A one-day assessment will give us enough to scope an accurate engagement.",
  },
]

export const metadata: Metadata = {
  title: "Disaster Recovery Services Canada | DRaaS & Business Continuity | Aethon Core",
  description: "Disaster recovery and business continuity for Canadian enterprises. DRaaS, tested RTO/RPO commitments, failover infrastructure, and DR runbooks. British Columbia & national coverage.",
  keywords: [
    "disaster recovery services Canada",
    "DRaaS Canada",
    "business continuity planning Canada",
    "disaster recovery British Columbia",
    "IT disaster recovery Canada",
    "RTO RPO Canada",
    "failover services Canada",
    "backup disaster recovery Canada",
    "enterprise DR Canada",
  ],
  alternates: { canonical: "https://aethoncore.com/services/disaster-recovery" },
  openGraph: {
    type: "website", locale: "en_CA", url: "https://aethoncore.com/services/disaster-recovery",
    siteName: "Aethon Core",
    title: "Disaster Recovery Services Canada | DRaaS & Business Continuity | Aethon Core",
    description: "Disaster recovery and business continuity for Canadian enterprises. DRaaS, tested RTO/RPO commitments, failover infrastructure, and DR runbooks. British Columbia & national coverage.",
  },
}

const capabilities = [
  {
    icon: RefreshCw,
    title: "DR architecture design",
    description:
      "Recovery architectures designed around your actual RTO and RPO requirements — not vendor defaults. Warm standby, pilot light, active-active, and multi-region configurations are selected based on your recovery time requirements and what you can afford to lose, not what sounds best in a proposal.",
    note: "Warm standby · Pilot light · Active-active · Multi-region active-passive",
  },
  {
    icon: HardDrive,
    title: "Backup and data protection",
    description:
      "Structured backup programs covering compute, databases, file systems, SaaS data, and configuration state. Backup schedules, retention policies, and encryption are designed to satisfy your regulatory requirements. Backup integrity is verified, not assumed — automated restore tests run on every backup job.",
    note: "Automated restore testing · Immutable backup copies · Air-gapped offsite options",
  },
  {
    icon: Zap,
    title: "RTO/RPO engineering",
    description:
      "Recovery time and recovery point objectives are engineering targets, not aspirational numbers. We instrument your environment to measure actual recovery performance, identify the bottlenecks that prevent meeting your targets, and fix them before a real event requires them to work.",
    note: "RTO measured in test · RPO validated against actual backup intervals",
  },
  {
    icon: Server,
    title: "Failover automation",
    description:
      "Automated failover for the failure scenarios that occur at 3am on a Saturday — when no one wants to execute a manual runbook. DNS failover, load balancer reconfiguration, and database promotion are scripted, tested, and triggered by defined conditions. Manual steps are minimized and documented.",
    note: "Automated DNS failover · Database promotion scripts · Runbook automation",
  },
  {
    icon: Shield,
    title: "BCP program development",
    description:
      "Business continuity plans that address the human and organizational dimensions of recovery — not just the technical ones. Who declares an incident, who communicates to which stakeholders, how decisions get made under pressure. BCP documentation is written for the people who will use it at 2am.",
    note: "Incident declaration procedures · Stakeholder communication templates · Decision trees",
  },
  {
    icon: FileText,
    title: "Tabletop exercises and DR testing",
    description:
      "Structured DR tests that simulate real failure scenarios — not test-environment failovers that prove nothing about production recovery. Annual tabletop exercises for leadership teams. Full failover tests at an agreed cadence, with post-test reports that document what worked and what didn't.",
    note: "Annual tabletop for leadership · Full failover tests · Post-test gap analysis",
  },
]

const rtoRpoTiers = [
  { tier: "Tier 1 — Mission Critical", rto: "< 15 minutes", rpo: "< 1 minute", examples: "Payment processing, clinical systems, real-time trading" },
  { tier: "Tier 2 — Business Critical", rto: "< 4 hours", rpo: "< 1 hour", examples: "Core ERP, CRM, internal communications" },
  { tier: "Tier 3 — Business Important", rto: "< 24 hours", rpo: "< 4 hours", examples: "Reporting systems, internal portals, non-real-time applications" },
  { tier: "Tier 4 — Standard", rto: "< 72 hours", rpo: "< 24 hours", examples: "Development environments, archives, non-critical internal tools" },
]

const phases = [
  {
    phase: "Assess",
    duration: "Week 1–2",
    description:
      "We inventory every system, classify it by criticality, and document the current recovery posture. Existing backup jobs are tested. Current RTO and RPO are measured — not taken from documentation. The gap between stated and actual recovery capability is almost always significant.",
    deliverable: "System criticality register + current-state RTO/RPO measurements",
  },
  {
    phase: "Design",
    duration: "Week 2–4",
    description:
      "Target recovery architecture is designed for each criticality tier. Failover automation is scoped. Backup programs are redesigned where gaps exist. The design is reviewed against your regulatory requirements — most frameworks impose specific RTO/RPO or backup retention requirements.",
    deliverable: "DR architecture design + regulatory compliance mapping",
  },
  {
    phase: "Build",
    duration: "Week 4–12",
    description:
      "Recovery infrastructure is deployed. Backup programs are reconfigured. Failover scripts are written and tested in a staging environment. Runbooks are rewritten to reflect the actual recovery procedure — not the ideal one.",
    deliverable: "DR infrastructure deployment + tested runbooks",
  },
  {
    phase: "Test",
    duration: "Week 10–14",
    description:
      "Full failover test is conducted in a controlled window. Every recovery procedure is executed against a defined test scenario. Test results are documented, failures are analyzed, and gaps are remediated. The test is only complete when we can demonstrate the RTO/RPO targets are met.",
    deliverable: "Full DR test report + gap remediation plan",
  },
  {
    phase: "Operate",
    duration: "Ongoing",
    description:
      "Annual DR tests on a defined schedule. Backup integrity verification on every backup run. RTO/RPO measurements included in monthly managed services reporting. Changes to production that affect recovery capability go through a DR impact review.",
    deliverable: "Annual DR test + monthly backup verification reports",
  },
]

const useCases = [
  {
    industry: "Financial Services",
    title: "Meeting DORA recovery requirements without rebuilding the architecture",
    challenge:
      "A financial institution faces DORA ICT resilience requirements that mandate documented and tested recovery procedures with specific RTO commitments. Their existing DR program consists of backup jobs and a runbook that was last updated in 2021 and has never been tested against production.",
    approach:
      "We start by testing the existing runbook against a simulated failure — which surfaces three blocking issues that would prevent recovery in a real event. We fix the blocking issues, rebuild the DR architecture for tier-1 systems to meet DORA's recovery time objectives, and establish an annual test cycle that produces the evidence package the regulators require.",
  },
  {
    industry: "Healthcare",
    title: "Zero data loss architecture for a clinical record system",
    challenge:
      "A health system's clinical record system has an informal RPO of 'recent' and an RTO of 'as fast as possible.' Neither has been tested. A ransomware incident at a peer organization reveals that 'recent' and 'as fast as possible' are insufficient — especially when the backup copies are also encrypted.",
    approach:
      "We implement immutable, air-gapped backup copies with an automated restore test on every backup cycle. RPO is engineered to 15 minutes through synchronous replication of the most critical tables. RTO is tested quarterly — recovery procedures are validated against a production clone, not a development environment. The health system now has measured, not estimated, recovery capability.",
  },
]

export default function DisasterRecoveryPage() {
  return (
    <>
      <JsonLd schema={[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://aethoncore.com"},{"@type":"ListItem","position":2,"name":"Services","item":"https://aethoncore.com/services"},{"@type":"ListItem","position":3,"name":"Disaster Recovery","item":"https://aethoncore.com/services/disaster-recovery"}]},{"@context":"https://schema.org","@type":"Service","name":"Disaster Recovery","url":"https://aethoncore.com/services/disaster-recovery","provider":{"@type":"Organization","name":"Aethon Core Inc.","url":"https://aethoncore.com"},"areaServed":[{"@type":"Country","name":"Canada"},{"@type":"Country","name":"United States"}],"serviceType":"Disaster Recovery"}]} />
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Disaster Recovery & BCP" }]}
        eyebrow="Delivery"
        title="Recovery programs built to be tested, not just documented"
        subtitle="RTO and RPO commitments are only meaningful if they've been demonstrated under real failure conditions. We build DR programs that work — and prove it."
        variant="tinted"
        visual={<DisasterRecoveryHeroVisual />}
      />

      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-in">
            <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
              {[
                { value: "< 15 min", label: "RTO for tier-1 systems" },
                { value: "< 1 min", label: "RPO with synchronous replication" },
                { value: "Annual", label: "Full failover tests — guaranteed" },
                { value: "100%", label: "Backup integrity verified per run" },
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
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">DR capabilities</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Recovery programs engineered to meet their targets
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Every component of a DR program — backup, replication, failover, runbooks, and testing — must work together. We design and operate the complete program.
              </p>
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
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Recovery tiers</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                RTO and RPO targets by system criticality
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Not every system has the same recovery requirement. We tier your systems by business criticality and engineer the appropriate recovery architecture for each tier.
              </p>
            </div>
          </FadeIn>
          <FadeIn variant="fade-in">
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-surface dark:bg-muted">
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tier</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">RTO Target</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">RPO Target</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground hidden lg:table-cell">Typical examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {rtoRpoTiers.map((row, i) => (
                    <tr key={row.tier} className={i % 2 === 0 ? "bg-white dark:bg-card" : "bg-surface dark:bg-background"}>
                      <td className="px-6 py-3.5 text-sm font-semibold text-foreground/80">{row.tier}</td>
                      <td className="px-6 py-3.5 font-mono text-sm font-semibold text-blue">{row.rto}</td>
                      <td className="px-6 py-3.5 font-mono text-sm font-semibold text-blue">{row.rpo}</td>
                      <td className="px-6 py-3.5 text-sm text-muted-foreground hidden lg:table-cell">{row.examples}</td>
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
                From current-state assessment to tested recovery capability
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
                DR programs built for regulated enterprises
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
        title="When did you last test your DR plan?"
        subtitle="If the answer is 'we haven't' or 'over a year ago', talk to us. A one-day assessment will tell you exactly where your recovery capability stands."
        primaryLabel="Book a DR assessment"
        primaryHref="/contact?inquiry=dr"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  )
}
