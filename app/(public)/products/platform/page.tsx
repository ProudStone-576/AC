import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, CheckCircle2, Code2, GitBranch, Globe,
  Layers, Lock, Network, RefreshCw, Terminal, Zap
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Aethon Core Platform",
  description:
    "One platform to manage all your infrastructure — servers, security, network, and data — for businesses that can't afford downtime or surprises.",
}

const capabilities = [
  {
    icon: Layers,
    title: "One place to manage everything",
    description:
      "One interface for your entire infrastructure. Servers, network, storage, and security are all visible and manageable in one place. No more switching between 8 separate tools to get a clear picture.",
    stats: "Replaces avg. 11 separate tools per organization",
  },
  {
    icon: Globe,
    title: "Multi-region orchestration",
    description:
      "Deploy workloads across cloud, on-premise, and edge with policy-driven placement. Latency thresholds, data residency requirements, and cost targets are enforced automatically — not manually configured per deployment.",
    stats: "< 8ms P99 latency, global average",
  },
  {
    icon: RefreshCw,
    title: "Zero-downtime deployments",
    description:
      "Rolling updates with automatic health checks at every stage. Every change is versioned in an immutable log. If something goes wrong, rollback executes in under 60 seconds — not 60 minutes.",
    stats: "99.99% uptime SLA, contractually enforced",
  },
  {
    icon: Lock,
    title: "Automated rules enforcement",
    description:
      "Your security rules, compliance requirements, and operational limits are defined once and enforced automatically. Every action is checked against your rules before it runs — nothing happens outside the boundaries you set.",
    stats: "Policy-as-code · Git-native.",
  },
  {
    icon: Zap,
    title: "Event-driven auto-remediation",
    description:
      "The platform spots problems in real time and fixes common issues automatically — without anyone needing to step in. Capacity scales before users notice extra load. Known failure patterns are handled before they turn into incidents.",
    stats: "Median auto-remediation: 4.2 seconds",
  },
  {
    icon: Terminal,
    title: "Full API surface",
    description:
      "Every action available in the UI is also available via REST and gRPC API. GitOps workflows, Terraform providers, Kubernetes operators, and Pulumi packages are all maintained and production-tested.",
    stats: "400+ API endpoints. 99.95% API uptime SLA.",
  },
  {
    icon: GitBranch,
    title: "Immutable audit trail",
    description:
      "Every change — who made it, when, from which system, with what approval — is logged in a tamper-proof, queryable trail. 7-year retention. Required evidence packages for SOC 2, ISO 27001, FedRAMP, PCI DSS, and HIPAA auto-generated.",
    stats: "7-year immutable retention by default",
  },
  {
    icon: Code2,
    title: "Infrastructure as code",
    description:
      "The platform is GitOps-native. Changes flow through your CI/CD pipeline like application code. Pull request workflows, automated policy checks, staged rollouts, and environment promotion are first-class features.",
    stats: "Terraform, Pulumi, Crossplane, CDK support",
  },
  {
    icon: Network,
    title: "Fabric-aware networking",
    description:
      "Network topology is managed at the platform level, not bolted on. Network isolation, routing, SD-WAN integration, and private connectivity to all major cloud providers are built directly into the platform.",
    stats: "Sub-1ms east-west latency in co-located regions",
  },
]

const platformTiers = [
  {
    name: "Enterprise",
    description: "Multi-region production workloads up to 5,000 managed nodes.",
    features: [
      "Up to 5,000 managed nodes",
      "Core Platform + Security Center",
      "24/7 monitoring coverage",
      "99.99% uptime SLA",
      "50+ standard integrations",
      "Dedicated account manager",
      "Quarterly business reviews",
      "24-hr P1 incident response",
      "SOC 2 Type II report included",
    ],
  },
  {
    name: "Enterprise Plus",
    description: "Global operations where infrastructure is a competitive differentiator.",
    featured: true,
    features: [
      "Unlimited managed nodes",
      "Full platform suite, all products",
      "Dedicated SRE team (named engineers)",
      "99.995% uptime SLA",
      "All 47 active regions",
      "Custom integrations + SDK access",
      "Monthly executive reviews",
      "4-hr P1 incident response",
      "Custom compliance frameworks",
      "Priority roadmap influence",
      "Quarterly security reviews",
    ],
  },
  {
    name: "Government",
    description: "FedRAMP High authorized. Built for public sector requirements.",
    features: [
      "FedRAMP High authorization",
      "Air-gapped deployment option",
      "ITAR and EAR compliance",
      "US-only data residency enforced",
      "Cleared engineering staff",
      "FISMA-ready documentation",
      "Dedicated GovCloud NOC",
      "CMMC Level 3 support",
    ],
  },
]

const integrations = [
  { category: "Cloud Providers", items: ["AWS", "Azure", "Google Cloud", "Oracle Cloud", "IBM Cloud"] },
  { category: "IaC / GitOps", items: ["Terraform", "Pulumi", "Crossplane", "AWS CDK", "Ansible"] },
  { category: "CI/CD", items: ["GitHub Actions", "GitLab CI", "Jenkins", "Buildkite", "CircleCI"] },
  { category: "Observability", items: ["Datadog", "Grafana", "Prometheus", "PagerDuty", "Dynatrace"] },
  { category: "Security", items: ["CrowdStrike", "SentinelOne", "Qualys", "Tenable", "Wiz"] },
  { category: "ITSM", items: ["ServiceNow", "Jira", "Opsgenie", "Freshservice", "Zendesk"] },
]

const techSpecs = [
  { spec: "API protocols", value: "REST, gRPC, GraphQL, WebSocket" },
  { spec: "Auth methods", value: "SAML 2.0, OIDC, mTLS, API keys, LDAP/AD" },
  { spec: "IaC providers", value: "Terraform, Pulumi, Crossplane, CloudFormation" },
  { spec: "Compute types", value: "Bare metal, VM, container, serverless, edge" },
  { spec: "Networking", value: "BGP, OSPF, SD-WAN, VXLAN, MPLS, IPv4/v6" },
  { spec: "Storage classes", value: "Block, object, file, NVMe, tiered cold/hot" },
  { spec: "Encryption", value: "AES-256 at rest, TLS 1.3 in transit, FIPS 140-2" },
  { spec: "Availability zones", value: "Minimum 3 per region, multi-zone active-active" },
  { spec: "Backup & DR", value: "RPO < 15min, RTO < 4hr (configurable per tier)" },
  { spec: "Audit retention", value: "7 years default, configurable up to 25 years" },
  { spec: "Query latency (API)", value: "P99 < 120ms for standard read operations" },
  { spec: "Throughput ceiling", value: "2M API calls/minute per tenant (Enterprise Plus)" },
]

const migrationSteps = [
  {
    phase: "Discovery",
    duration: "Week 1–2",
    description: "Our architects map your current environment — every tool, dependency, connection, and data flow. We identify risk, redundancy, and the optimal migration sequence.",
    deliverable: "Current-state architecture document + risk register",
  },
  {
    phase: "Design",
    duration: "Week 3–4",
    description: "We produce a detailed target architecture, migration runbook, rollback plan, and acceptance criteria. Nothing moves until you've signed off on the plan.",
    deliverable: "Target architecture + phased migration plan",
  },
  {
    phase: "Pilot",
    duration: "Week 5–8",
    description: "A non-production workload migrates first. We validate performance, test runbooks, train your team, and tune the configuration before touching production.",
    deliverable: "Validated runbooks + trained operations team",
  },
  {
    phase: "Migration",
    duration: "Week 9–24",
    description: "Production workloads migrate in sequenced waves with parallel operation periods. Zero hard cutovers — every workload runs on both platforms simultaneously before the old one is decommissioned.",
    deliverable: "Live production on Aethon Core Platform",
  },
  {
    phase: "Steady state",
    duration: "Ongoing",
    description: "Your dedicated SRE team takes over operations. Weekly infrastructure reviews, monthly optimization reports, quarterly strategy sessions. We own the outcome, not just the onboarding.",
    deliverable: "Dedicated SRE + 24/7/365 monitoring coverage",
  },
]

const caseStudies = [
  {
    client: "Financial Services",
    industry: "Multi-Jurisdiction Compliance",
    challenge: "A financial institution expanding across regulatory borders needs compliant infrastructure in each jurisdiction without building separate stacks per market — a model that creates exponential operational debt.",
    outcome: "The Aethon Core Platform applies the right compliance rules per country through a central policy layer. One system; rules adjust per location. Adding a new market means updating a policy, not building a new environment.",
    stat: "Policy-first architecture",
  },
  {
    client: "Enterprise Technology",
    industry: "Tool Consolidation",
    challenge: "A large organization operating 10+ separate infrastructure tools across multiple cloud providers faces fragmented visibility, inconsistent alerting, and a team spending more time context-switching than resolving incidents.",
    outcome: "One system replaces all the separate tools — servers, network, storage, and security visible in one place. Incidents surface faster and resolution is quicker and fully auditable.",
    stat: "One system",
  },
]

export default function PlatformPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: "Aethon Core Platform" }]}
        eyebrow="Product"
        title="The platform serious businesses run their infrastructure on"
        subtitle="One platform. Every part of your infrastructure. Contractual accountability — not just SLA documents."
        backgroundImageSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=3840&q=100"
        variant="dark"
      />

      {/* Top-line stats */}
      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
            {[
              { value: "99.99%", label: "Uptime SLA, enforced" },
              { value: "11", label: "Avg. tools replaced" },
              { value: "4.2s", label: "Median auto-remediation" },
              { value: "47", label: "Countries active" },
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Core capabilities</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Built for teams that cannot afford surprises
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Every feature exists because a client hit a wall with a tool that wasn't designed for their scale.
              We built what they needed.
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
                <p className="font-mono text-xs font-semibold text-blue/80">{cap.stats}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture diagram */}
      <section className="bg-canvas py-20 lg:py-24">
        <div className="container-enterprise">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Architecture</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Three layers. One platform.
            </h2>
            <p className="mt-4 text-base text-canvas-muted">
              Not just a wrapper around cloud providers — a full platform that runs on any environment and connects to any cloud or on-site system through a single connection point.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-3">
            {[
              {
                layer: "Control Plane",
                color: "border-blue/30 bg-blue/[0.07]",
                label: "text-blue/80",
                items: ["Policy engine (OPA + custom DSL)", "Orchestrator", "Immutable audit log", "API gateway (REST/gRPC/GraphQL)", "Identity & access management"],
                note: "Everything that touches your infrastructure passes through this layer. Nothing executes without policy validation.",
              },
              {
                layer: "Execution Layer",
                color: "border-white/12 bg-white/[0.04]",
                label: "text-white/60",
                items: ["Compute (bare metal, VM, container, serverless)", "Network fabric (BGP, OSPF, SD-WAN, VXLAN)", "Storage (block, object, file, NVMe)", "Load balancing + traffic management", "Secrets management"],
                note: "This is what actually runs your workloads. Abstracted uniformly regardless of underlying substrate.",
              },
              {
                layer: "Foundation",
                color: "border-white/8 bg-white/[0.02]",
                label: "text-white/40",
                items: ["Globally distributed infrastructure", "Redundant power (N+1 minimum)", "Precision cooling", "Physical security (SOC 2 certified)", "Dedicated network interconnects"],
                note: "The physical layer we own and operate. Not rented from hyperscalers.",
              },
            ].map((row) => (
              <div key={row.layer} className={`rounded-xl border px-6 py-5 ${row.color}`}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <p className={`mb-3 text-xs font-semibold uppercase tracking-widest ${row.label}`}>
                      {row.layer}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {row.items.map((item) => (
                        <span key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/60">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-[11px] text-white/30 sm:max-w-[200px] sm:text-right">{row.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration process */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Migration</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              How the migration actually works
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              We don't hand you a migration guide and wish you luck. Our engineers own the migration
              from kickoff to steady state. Here's the exact sequence.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden sm:block" aria-hidden="true" />
            <div className="space-y-6">
              {migrationSteps.map((step, i) => (
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

      {/* Technical specifications */}
      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Technical specs</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              The numbers your engineers will ask for
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full">
              <tbody className="divide-y divide-border">
                {techSpecs.map((row, i) => (
                  <tr key={row.spec} className={i % 2 === 0 ? "bg-white dark:bg-card" : "bg-surface dark:bg-background"}>
                    <td className="px-6 py-3.5 text-sm font-semibold text-foreground/70 w-1/3">{row.spec}</td>
                    <td className="px-6 py-3.5 font-mono text-sm text-foreground">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Integrations</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Works with everything already in your stack
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              400+ integrations maintained by our engineering team. If it's in your environment, we've almost certainly built and tested the connector.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((group) => (
              <div key={group.category} className="rounded-xl border border-border bg-white p-6 dark:bg-card">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-blue">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-foreground/80 dark:bg-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don't see your tool?{" "}
            <Link href="/contact" className="text-blue hover:underline">
              Talk to our integration team
            </Link>
            {" "}— we build custom connectors for Enterprise Plus clients.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-canvas py-20 lg:py-24">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Use Cases</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              How the platform handles real enterprise challenges
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {caseStudies.map((cs) => (
              <div key={cs.client} className="rounded-xl border border-white/10 bg-white/[0.04] p-8">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue">{cs.industry}</p>
                <h3 className="mb-4 text-lg font-semibold text-white">{cs.client}</h3>
                <div className="mb-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-canvas-muted mb-1">The Challenge</p>
                  <p className="text-sm text-canvas-muted leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-canvas-muted mb-1">Our Approach</p>
                  <p className="text-sm text-white/80 leading-relaxed">{cs.outcome}</p>
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

      {/* Editions */}
      <section className="py-20 lg:py-24 bg-surface dark:bg-card">
        <div className="container-enterprise">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Editions</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Priced for organizations, not individuals
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              All editions include 24/7 support, a dedicated account team, and contractual SLAs. No per-seat pricing.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {platformTiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col rounded-xl border p-8 ${
                  tier.featured
                    ? "border-blue/30 bg-brand shadow-lg shadow-blue/10"
                    : "border-border bg-white dark:bg-background"
                }`}
              >
                <div className="mb-1 flex items-center justify-between">
                  <h3 className={`text-lg font-semibold ${tier.featured ? "text-white" : "text-foreground"}`}>
                    {tier.name}
                  </h3>
                  {tier.featured && (
                    <span className="rounded-full bg-blue px-2.5 py-0.5 text-xs font-semibold text-blue-foreground">
                      Most common
                    </span>
                  )}
                </div>
                <p className={`mb-6 text-sm ${tier.featured ? "text-white/60" : "text-muted-foreground"}`}>
                  {tier.description}
                </p>
                <ul className="mb-8 flex-1 space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 flex-shrink-0 ${tier.featured ? "text-blue/80" : "text-blue"}`} />
                      <span className={tier.featured ? "text-white/80" : "text-foreground/80"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors ${
                    tier.featured
                      ? "bg-blue text-blue-foreground hover:bg-blue-hover glow-blue"
                      : "border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  Talk to sales <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Common questions</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              What technical teams ask before they sign
            </h2>
          </div>
          <div className="mx-auto max-w-3xl divide-y divide-border">
            {[
              {
                q: "How long does the typical migration take?",
                a: "For a mid-size enterprise (500–2,000 nodes), the full migration takes 16–24 weeks from kickoff. Larger environments or those with complex compliance requirements take 24–36 weeks. We've never missed a committed migration date.",
              },
              {
                q: "What happens to our existing Terraform/Pulumi code?",
                a: "We import your existing IaC state into the Aethon Core Platform without requiring you to rewrite it. Our Terraform provider wraps your existing resources. You can continue using your existing IaC tools and workflows unchanged.",
              },
              {
                q: "Can we keep using our existing cloud providers?",
                a: "Yes. The platform sits above your cloud providers as a management and orchestration layer. You keep your existing AWS, Azure, or GCP accounts and commitments. We add unified visibility, policy enforcement, and operational automation on top.",
              },
              {
                q: "What does the 99.99% SLA actually mean in practice?",
                a: "It means a maximum of 52 minutes of downtime per year for the managed infrastructure layer. It's backed by service credits in your contract — not a marketing claim. Enterprise Plus clients get a 99.995% SLA (26 minutes/year maximum).",
              },
              {
                q: "How is access controlled for the Aethon Core team on our infrastructure?",
                a: "All Aethon Core engineer access to your environment is just-in-time, time-bounded, and logged in the audit trail you own. Our engineers cannot access your environment without an active, approved work order. We produce a full access log monthly.",
              },
              {
                q: "What happens if we want to leave?",
                a: "All your data, configurations, IaC code, and audit logs are yours. We provide a 90-day assisted offboarding process for Enterprise clients. There are no data hostage situations — your infrastructure should be portable, and we make it so.",
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
        title="Ready to see the platform on your actual infrastructure?"
        subtitle="Our engineers will map your current environment and run a live demo on a replica of your stack — before you commit to anything."
        primaryLabel="Schedule a technical demo"
        primaryHref="/contact"
        secondaryLabel="View case studies"
        secondaryHref="/case-studies"
      />
    </>
  )
}
