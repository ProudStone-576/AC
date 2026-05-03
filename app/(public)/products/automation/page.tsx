import type { Metadata } from "next"
import {
   CheckCircle2, Clock, Code2, GitBranch,
  Play, RefreshCw, Shield, Terminal, Workflow, Zap
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Automation Engine",
  description:
    "Enterprise workflow automation that replaces manual runbooks with auditable, policy-compliant workflows. 68% of incidents auto-remediated.",
}

const capabilities = [
  {
    icon: Workflow,
    title: "Visual workflow builder",
    description:
      "Drag-and-drop workflow construction with access to 400+ enterprise connectors. Operations teams build workflows without writing code. Engineers have full access to the execution DSL and can inspect every generated artifact.",
    metric: "400+ enterprise connectors built and maintained",
  },
  {
    icon: Code2,
    title: "Version-controlled infrastructure",
    description:
      "Every workflow is a versioned artifact stored in Git. Deploy via CI/CD. Review workflows in pull requests. Roll back to any previous version in one command. No black-box automation your team can't audit or reproduce.",
    metric: "Git-native · CI/CD compatible · Fully auditable",
  },
  {
    icon: Shield,
    title: "Policy-gated execution",
    description:
      "Workflows cannot run unless they pass your organization's approval policies. Define who can approve what, under which conditions. All approvals are logged, time-stamped, and immutable. Required for SOX (financial controls), ITIL (IT service management), and change management frameworks.",
    metric: "Full approval workflow with immutable audit trail",
  },
  {
    icon: Clock,
    title: "Event-driven and scheduled",
    description:
      "Trigger workflows on a time schedule, on infrastructure events, on anomalies from the Security Center, on webhook calls, or via API. The scheduler handles dependencies, retries, and SLA tracking automatically.",
    metric: "Sub-second event-to-trigger latency",
  },
  {
    icon: GitBranch,
    title: "Branching, conditions, and error handling",
    description:
      "Production automation requires conditional logic, parallel execution, human approval gates, and graceful failure handling. All of these are first-class features — not workarounds bolted on after the fact.",
    metric: "Full branching logic with parallel execution support",
  },
  {
    icon: Terminal,
    title: "Cross-system orchestration",
    description:
      "Coordinate actions across your cloud infrastructure, ITSM, CMDB, ticketing systems, and communication tools in a single workflow. No glue code required — the orchestration layer handles state, sequencing, and failure propagation.",
    metric: "Native integrations for 40+ enterprise systems",
  },
  {
    icon: RefreshCw,
    title: "Automated problem-fixing",
    description:
      "Convert your existing response procedures into automated workflows. The Automation Engine monitors for known failure patterns and fixes them before anyone gets paged. 68% of incidents across our client base are resolved without a human ever seeing them.",
    metric: "68% of incidents auto-fixed · resolution time: 4.2s",
  },
  {
    icon: Zap,
    title: "Automation analytics",
    description:
      "See every workflow execution — duration, cost, success rate, failure mode, and business impact. Identify which automations are saving the most time and where manual fallback is still happening. Data-driven automation roadmapping.",
    metric: "Full execution analytics + ROI reporting",
  },
]

const automationLibrary = [
  {
    category: "Infrastructure lifecycle",
    color: "text-blue",
    workflows: [
      { name: "TLS certificate rotation", trigger: "30 days before expiry", impact: "0 certificate-related outages" },
      { name: "VM right-sizing", trigger: "Weekly CPU/memory analysis", impact: "Avg. 28% compute cost reduction" },
      { name: "Orphaned resource cleanup", trigger: "Daily resource audit", impact: "Avg. $180K/yr per enterprise" },
      { name: "Config drift remediation", trigger: "On detection", impact: "Fix time from 4h to 8 minutes" },
      { name: "Snapshot lifecycle management", trigger: "Policy-based schedule", impact: "Storage cost reduction" },
      { name: "Automated failover testing", trigger: "Monthly chaos schedule", impact: "Verified RTO every 30 days" },
    ],
  },
  {
    category: "Security operations",
    color: "text-blue",
    workflows: [
      { name: "Compromised credential response", trigger: "Threat intelligence alert", impact: "< 90 seconds to rotation" },
      { name: "Anomalous access termination", trigger: "Behavioral anomaly detection", impact: "Immediate session kill" },
      { name: "Vulnerability patch orchestration", trigger: "Critical CVE publication", impact: "< 4hr for critical patches" },
      { name: "Account de-provisioning", trigger: "HR system offboarding event", impact: "Zero stale accounts" },
      { name: "Security group remediation", trigger: "Policy violation detection", impact: "Auto-remediation in < 2min" },
      { name: "SOC escalation routing", trigger: "Incident severity threshold", impact: "Right analyst, every time" },
    ],
  },
  {
    category: "Compliance & governance",
    color: "text-blue",
    workflows: [
      { name: "Access review orchestration", trigger: "Monthly automated kickoff", impact: "Audit prep: 6 weeks → 4 hours" },
      { name: "Change management automation", trigger: "Infrastructure change request", impact: "ITIL-compliant in seconds" },
      { name: "Evidence collection", trigger: "Continuous + on-demand", impact: "Audit package auto-assembled" },
      { name: "Policy violation reporting", trigger: "Real-time on violation", impact: "Compliance status always current" },
      { name: "Data retention enforcement", trigger: "Retention policy schedule", impact: "GDPR/CCPA automated" },
      { name: "Financial controls testing (SOX)", trigger: "Quarterly automated tests", impact: "Full testing evidence generated" },
    ],
  },
]

const roiData = [
  {
    metric: "Average hours saved per engineer per week",
    value: "12.4 hrs",
    note: "Based on client time-tracking data, first 6 months post-deployment",
  },
  {
    metric: "Reduction in time to fix problems",
    value: "92%",
    note: "Across all auto-remediable incident classes",
  },
  {
    metric: "Infrastructure cost reduction (compute + storage)",
    value: "28%",
    note: "From right-sizing, orphan cleanup, and scheduled scaling automation",
  },
  {
    metric: "Reduction in unplanned downtime",
    value: "67%",
    note: "From proactive detection and self-healing workflows",
  },
  {
    metric: "Audit preparation time reduction",
    value: "88%",
    note: "From automated evidence collection and access review workflows",
  },
  {
    metric: "Incidents auto-remediated without human involvement",
    value: "68%",
    note: "Based on trailing 12-month average across Enterprise Plus clients",
  },
]

const gettingStartedSteps = [
  {
    day: "Day 1",
    title: "Kickoff and discovery",
    description: "Our automation engineers run a 2-hour discovery session to identify your team's top 10 most time-consuming repetitive tasks. We prioritize by frequency × time cost × risk of human error.",
  },
  {
    day: "Day 2–3",
    title: "Build top 3 workflows",
    description: "We build your top 3 automation workflows in a staging environment. You review every step, test every path, and verify the edge case handling before anything touches production.",
  },
  {
    day: "Day 4–5",
    title: "Staging validation",
    description: "The workflows run in parallel with your current manual process. We compare outcomes, tune the logic, and confirm the auto-remediation paths work as designed.",
  },
  {
    day: "Day 7",
    title: "Production deployment",
    description: "Workflows deployed to production with monitoring dashboards live. Your team sees exactly what the automation is doing, why, and what it would have escalated to a human.",
  },
  {
    day: "Month 1",
    title: "Expand the library",
    description: "Using week 1 data, we build out your full automation library — typically 15–20 workflows in month 1. Your team adds workflows themselves using the no-code builder.",
  },
]

export default function AutomationPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: "Automation Engine" }]}
        eyebrow="Product"
        title="Stop fixing the same problems manually. Start running infrastructure that fixes itself."
        subtitle="Every hour your engineers spend on repetitive operational tasks is an hour not spent on the work that actually moves your business forward."
        backgroundImageSrc="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=3840&q=100"
        variant="dark"
      />

      {/* Stats */}
      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
            {[
              { value: "68%", label: "Incidents auto-remediated" },
              { value: "4.2s", label: "Median auto-remediation" },
              { value: "92%", label: "Faster time to fix problems" },
              { value: "12.4 hrs", label: "Saved per engineer per week" },
            ].map((s) => (
              <div key={s.label} className="px-6 py-5">
                <p className="font-mono text-2xl font-semibold text-foreground tabular-nums">{s.value}</p>
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Capabilities</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Automation your operations team will actually trust
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Built by people who ran infrastructure for Fortune 100 companies. Every feature was designed around a real failure mode we lived through.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {capabilities.map((cap) => (
              <div key={cap.title} className="rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue/20 dark:bg-card">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-light">
                    <cap.icon className="h-5 w-5 text-blue" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{cap.title}</h3>
                    <p className="mt-1 font-mono text-xs font-semibold text-blue/80">{cap.metric}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation library */}
      <section className="bg-canvas py-20 lg:py-24">
        <div className="container-enterprise">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Automation library</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              200+ production-ready workflows, ready on day one
            </h2>
            <p className="mt-4 text-base text-canvas-muted">
              You don't start from scratch. Our automation library ships with 200+ pre-built, production-tested workflows organized by category. Customize them to your environment or use them as-is.
            </p>
          </div>
          <div className="space-y-8">
            {automationLibrary.map((group) => (
              <div key={group.category}>
                <p className={`mb-4 text-xs font-semibold uppercase tracking-widest ${group.color}`}>{group.category}</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.workflows.map((wf) => (
                    <div key={wf.name} className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                      <div className="mb-3 flex items-center gap-2">
                        <Play className="h-3.5 w-3.5 text-blue/80" />
                        <p className="text-sm font-semibold text-white/90">{wf.name}</p>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-xs text-canvas-muted">
                          <Clock className="h-3 w-3 flex-shrink-0" />
                          {wf.trigger}
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium text-emerald-400/80">
                          <CheckCircle2 className="h-3 w-3 flex-shrink-0" />
                          {wf.impact}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">ROI data</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              What the numbers look like after 12 months
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              These are averages from Enterprise Plus client telemetry. Individual results vary by environment complexity and baseline automation maturity.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {roiData.map((row) => (
              <div key={row.metric} className="rounded-xl border border-border bg-white p-6 dark:bg-card">
                <p className="font-mono text-3xl font-bold text-foreground tabular-nums">{row.value}</p>
                <p className="mt-2 text-sm font-semibold text-foreground/80">{row.metric}</p>
                <p className="mt-2 text-xs text-muted-foreground">{row.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting started */}
      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Getting started</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Your first automation runs within a week
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              We don't give you a platform and a documentation link. Our automation engineers work alongside your team from day one.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-[100px] top-6 bottom-6 w-px bg-border hidden lg:block" aria-hidden="true" />
            <div className="space-y-4">
              {gettingStartedSteps.map((step) => (
                <div key={step.day} className="grid grid-cols-1 gap-4 lg:grid-cols-[180px_1fr] lg:gap-8">
                  <div className="flex items-center gap-4 lg:justify-end lg:pr-8">
                    <div className="hidden lg:flex lg:h-8 lg:w-8 lg:items-center lg:justify-center lg:rounded-full lg:border lg:border-border lg:bg-white lg:shadow-sm dark:lg:bg-card">
                      <div className="h-2 w-2 rounded-full bg-blue" />
                    </div>
                    <span className="font-mono text-sm font-bold text-blue">{step.day}</span>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5 dark:bg-background">
                    <h3 className="mb-2 text-base font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Common questions</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              What operations teams ask before they sign
            </h2>
          </div>
          <div className="mx-auto max-w-3xl divide-y divide-border">
            {[
              {
                q: "What happens when an automation fails?",
                a: "Failed workflow executions trigger an alert to your designated on-call contact. The failed step, error message, and context are captured automatically. If the workflow has a defined fallback path, it executes first. If not, the ticket is created in your ITSM with full execution context attached.",
              },
              {
                q: "How does the approval workflow integrate with our change management process?",
                a: "The Automation Engine has native integrations for ServiceNow, Jira Service Management, and BMC Remedy. Approval gates can require a human sign-off from a named individual, a role, or any member of a group. All approvals are logged in the immutable audit trail.",
              },
              {
                q: "Can we bring our existing Ansible playbooks and scripts?",
                a: "Yes. Existing Ansible playbooks, bash scripts, Python scripts, and PowerShell scripts can be wrapped as workflow steps without modification. This is typically the starting point — we import your existing automation assets and progressively replace the unauditable ones.",
              },
              {
                q: "How do you prevent automation from making a bad situation worse?",
                a: "Every automation has configurable blast radius controls — limits on the number of concurrent actions, mandatory pause points for human review, rollback triggers on failure metrics, and 'maintenance window only' scheduling for high-risk operations. No automation runs without a defined rollback path.",
              },
              {
                q: "Is there a marketplace of community-built workflows?",
                a: "Yes — the Aethon Core Automation Marketplace has 200+ workflows built and maintained by our engineering team, plus a growing library of contributions from our customer community. All marketplace workflows are reviewed and signed before they're available.",
              },
            ].map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="text-base font-semibold text-foreground">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="What's the most expensive manual task your team runs every week?"
        subtitle="That's where we start. Tell us the task and we'll show you the automation in a live demo before you commit to anything."
        primaryLabel="Talk to an engineer"
        primaryHref="/contact"
        secondaryLabel="Browse automation library"
        secondaryHref="/resources/white-papers"
      />
    </>
  )
}
