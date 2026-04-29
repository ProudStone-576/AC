import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, User, Tag, ArrowRight } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { notFound } from "next/navigation"

// ─── White paper catalogue ────────────────────────────────────────────────────
const papers: Record<
  string,
  {
    title: string
    category: string
    description: string
    pages: string
    published: string
    authors: string[]
    topics: string[]
    sections: { heading: string; body: string }[]
  }
> = {
  "zero-trust-regulated-industries": {
    title: "Zero Trust security for regulated industries: a practical implementation guide",
    category: "Security & Compliance",
    description:
      "Most Zero Trust programs fail not because of the framework, but because the implementation doesn't account for the operational constraints of regulated environments. This guide documents the architecture patterns, control sequences, and compliance mapping that make Zero Trust work in financial services, healthcare, and government — where the standard guidance is insufficient.",
    pages: "48 pages",
    published: "March 2026",
    authors: ["Amara Osei, Principal Security Architect", "James Whitfield, CTO"],
    topics: ["Zero Trust", "HIPAA", "PCI DSS", "FedRAMP", "NIST SP 800-207"],
    sections: [
      {
        heading: "Why standard Zero Trust guidance fails in regulated environments",
        body: "The NIST SP 800-207 definition of Zero Trust is architecturally sound. The problem is that it assumes a greenfield environment with modern identity infrastructure, consistent network segmentation, and full visibility into workload behaviour. None of these conditions exist in the regulated enterprises we work with. The average financial services firm runs workloads across 3 cloud providers, 2 co-location facilities, and 1 or more legacy data centres with fixed-function appliances that cannot support agent-based monitoring. The path to Zero Trust in these environments requires a sequenced approach that produces measurable security outcomes at each stage — not a multi-year transformation program that delivers nothing until the final phase.",
      },
      {
        heading: "The four-phase implementation model",
        body: "Phase 1 establishes identity as the new perimeter. Every workload, every service, and every human actor gets a verifiable identity — including legacy systems that cannot natively support modern auth. We use service mesh proxies, identity-aware load balancers, and certificate rotation infrastructure to extend identity to systems that predate it. Phase 2 establishes continuous visibility. You cannot enforce Zero Trust policies on workloads you cannot see. This phase deploys network telemetry, workload behavioural baselines, and real-time anomaly detection before any access policies change. Phase 3 enforces least-privilege access at the policy layer. Access policies are moved from the network perimeter to the policy engine — enforced per-request, per-identity, per-context. Phase 4 automates continuous validation, ensuring that every access decision is re-evaluated as context changes: user location, device posture, workload sensitivity, and time of day.",
      },
      {
        heading: "Compliance mapping: HIPAA, PCI DSS, and FedRAMP",
        body: "Zero Trust, when implemented correctly, satisfies a significant portion of the control requirements across all three frameworks simultaneously. HIPAA's technical safeguard requirements for access control (§164.312(a)) and audit controls (§164.312(b)) are directly addressed by the identity and logging infrastructure established in phases 1 and 2. PCI DSS Requirement 7 (restrict access to cardholder data) and Requirement 10 (track and monitor all access) map to the policy enforcement and telemetry layers. FedRAMP High controls AC-2, AC-3, and AC-17 are satisfied by the identity federation, least-privilege enforcement, and remote access controls in the architecture. The appendix of this paper provides a complete control-by-control mapping for each framework.",
      },
      {
        heading: "Common failure modes and how to avoid them",
        body: "The three most common failure modes we observe in Zero Trust programs are: attempting to enforce access policies before establishing complete visibility (which breaks workflows before delivering security benefits); treating network segmentation as the end state rather than a transitional step; and failing to account for system-to-system communication, which is the path attackers use to spread through a network after breaching one system. Each failure mode has a corresponding architectural decision that prevents it — documented in detail in section 4 of this paper.",
      },
    ],
  },
  "cloud-agnostic-architecture": {
    title: "Cloud-agnostic architecture: the technical requirements most enterprises underestimate",
    category: "Cloud Strategy",
    description:
      "Multi-cloud strategies often produce vendor lock-in disguised as optionality. This paper defines what genuine cloud-agnosticism requires architecturally — and what the organizational change program looks like.",
    pages: "32 pages",
    published: "February 2026",
    authors: ["Sarah Chen, Principal Cloud Architect", "David Okonkwo, VP Engineering"],
    topics: ["Multi-cloud", "Cloud Strategy", "Architecture", "Vendor Lock-in", "IaC"],
    sections: [
      {
        heading: "The difference between multi-cloud and cloud-agnostic",
        body: "Most enterprises that describe themselves as multi-cloud are not cloud-agnostic. They run different workloads on different cloud providers, often because of historical acquisitions or team preferences — not because those workloads could be moved between providers without significant rework. True cloud-agnosticism means the decision of where to run a workload can be made — and changed — based on cost, performance, compliance, and resilience requirements, not by the coupling between the application and the cloud provider's proprietary services.",
      },
      {
        heading: "The five sources of cloud lock-in",
        body: "Cloud lock-in operates at five layers: data transfer costs that make moving data between providers economically irrational; proprietary managed services that have no equivalent on other platforms; identity and access models that don't federate across providers; monitoring and observability stacks that only instrument native services; and operational tooling built on provider-specific APIs. A cloud-agnostic architecture must have a defined answer at each layer — not just at the compute and networking layers where most architects focus.",
      },
      {
        heading: "The Aethon Core cloud-agnostic reference architecture",
        body: "The reference architecture uses Kubernetes as the workload runtime with provider-agnostic storage abstractions, a service mesh for identity-aware networking that spans providers, and a unified policy engine that enforces the same governance rules regardless of where workloads execute. IaC is written in Terraform with provider-specific modules abstracted behind environment-agnostic interfaces. Observability uses an OpenTelemetry collector with provider-neutral storage — so your dashboards don't change when your workloads move.",
      },
    ],
  },
  "enterprise-ai-infrastructure": {
    title: "Enterprise AI infrastructure: the data foundation that determines whether your AI program succeeds",
    category: "AI & Data",
    description:
      "The majority of enterprise AI projects fail before a model is trained. The root cause is almost always data infrastructure. This paper defines the data estate requirements for production AI at enterprise scale.",
    pages: "28 pages",
    published: "February 2026",
    authors: ["Priya Nair, Head of Data Engineering", "Marcus Webb, AI Infrastructure Lead"],
    topics: ["Enterprise AI", "AI Operations", "Data Infrastructure", "Feature Store", "Model Deployment"],
    sections: [
      {
        heading: "Why enterprise AI programs stall at the data layer",
        body: "In our experience working with enterprise AI programs across financial services, healthcare, and manufacturing, the bottleneck is almost never the model. The most common failure mode is that the data required to train and serve the model doesn't exist in a form the model can use. It's locked in operational databases not designed for analytical access, it lacks the lineage metadata required for model governance, it's stored in formats that change without notice, or it's subject to access controls that the ML training pipeline can't satisfy. Fixing these problems takes 12–18 months and is often underestimated by orders of magnitude in project planning.",
      },
      {
        heading: "The four data infrastructure requirements for production AI",
        body: "Requirement 1: A feature store that serves consistent feature values between training and inference. Training/serving skew is the single most common cause of model performance degradation in production and is almost entirely an infrastructure problem. Requirement 2: Data lineage at the column level, for every feature, tracing back to the source system. Required for model governance under EU AI Act, NIST AI RMF, and most internal risk frameworks. Requirement 3: A streaming data layer capable of serving features with sub-100ms latency for real-time inference use cases. Requirement 4: Data access controls that satisfy both ML pipeline requirements and enterprise governance policies — these are frequently in conflict, and the conflict must be resolved architecturally before model development begins.",
      },
      {
        heading: "The AI operations platform your AI program actually needs",
        body: "The platforms enterprises typically deploy for MLOps — experiment tracking, model registries, deployment pipelines — address the model development lifecycle but not the data lifecycle that the model depends on. A complete MLOps platform requires: a feature platform (not just a feature store) that handles feature engineering, serving, and monitoring; a data quality monitoring layer that can detect distribution shift before it affects model performance; a model monitoring layer that connects model performance metrics back to the underlying data quality metrics; and a governance layer that can produce audit evidence for every prediction made by every model in production.",
      },
    ],
  },
  "iec-62443-live-environments": {
    title: "IEC 62443 implementation in live operational environments: what the standard doesn't tell you",
    category: "OT Security",
    description:
      "IEC 62443 provides the right framework for industrial cybersecurity. It doesn't tell you how to apply it to a facility that can't pause operations for security upgrades. This paper fills that gap.",
    pages: "36 pages",
    published: "January 2026",
    authors: ["Viktor Sokolov, OT Security Principal", "Hannah Park, ICS/SCADA Architect"],
    topics: ["IEC 62443", "OT Security", "ICS", "SCADA", "Industrial Cybersecurity"],
    sections: [
      {
        heading: "The operational constraint IEC 62443 doesn't address",
        body: "IEC 62443 is the most comprehensive framework for industrial control system security. It defines security levels, security zones, conduits, and a structured risk assessment methodology. What it does not define is how to implement these controls in a facility that operates 24/7 with zero tolerance for unplanned downtime. A chemical plant, power generation facility, or water treatment plant cannot take a maintenance window to retrofit network segmentation. The standard tells you what to achieve; this paper tells you how to achieve it without stopping operations.",
      },
      {
        heading: "The zone and conduit implementation sequence",
        body: "The correct sequence for implementing IEC 62443 zone and conduit architecture in a live environment begins with passive network discovery — deploying span port monitoring to build a complete picture of OT network topology and device communication patterns before any active changes. This phase typically reveals 40–60% more devices and connections than asset inventories document. The second phase implements passive monitoring controls (IDS, NetFlow analysis, protocol-aware DPI) that produce security value without changing network behaviour. Only in the third phase — after 90 days of baseline establishment — are active segmentation controls introduced, beginning with the highest-criticality zone boundaries.",
      },
      {
        heading: "Legacy device integration: PLCs, HMIs, and embedded systems",
        body: "The majority of OT environments contain PLCs and HMIs running firmware from 2005–2015 that cannot support modern authentication, encryption, or endpoint monitoring. IEC 62443 's security level requirements assume that devices can be upgraded. In practice, the upgrade cycle for embedded industrial devices is 10–15 years. The correct approach is compensating controls — network-layer controls that satisfy the security level requirements without requiring changes to the device itself. This paper documents the compensating control architecture for the most common legacy device scenarios.",
      },
    ],
  },
  "fedramp-high-authorization": {
    title: "FedRAMP High authorization: what the process actually involves and how to prepare",
    category: "Government",
    description:
      "FedRAMP High authorization takes 12–24 months and requires a level of documentation most commercial providers have never produced. This paper documents the process, common failure points, and how to sequence preparation.",
    pages: "44 pages",
    published: "January 2026",
    authors: ["Robert Anand, Federal Practice Lead", "Christine Yu, Compliance Engineering"],
    topics: ["FedRAMP", "Government Cloud", "Compliance", "Authorization", "NIST 800-53"],
    sections: [
      {
        heading: "Why FedRAMP High is fundamentally different from FedRAMP Moderate",
        body: "FedRAMP High applies to cloud systems processing information where the loss of confidentiality, integrity, or availability could be expected to have a severe or catastrophic adverse effect. This includes classified-adjacent workloads, law enforcement systems, emergency response, and financial systems. The control baseline increases from 325 controls (Moderate) to 421 controls (High), but the increase in controls understates the increase in implementation complexity. High-impact controls typically require architectural changes, not just documentation — hardware security modules for key management, dedicated compute for sensitive workloads, and network isolation that most cloud architectures don't support by default.",
      },
      {
        heading: "The 12 most common failure points in FedRAMP High authorization",
        body: "In our work with federal and commercial clients pursuing FedRAMP High authorization, the most common failure points are: incomplete system boundary documentation; undocumented data flows to external services; insufficient incident response capability (High requires a 1-hour detection-to-notification window); inadequate personnel security controls; and — most commonly — continuous monitoring processes that satisfy the letter of the requirement but cannot produce the evidence packages that 3PAOs actually review during assessment. This paper documents each failure point and the remediation architecture.",
      },
      {
        heading: "Preparing your System Security Plan",
        body: "The FedRAMP High System Security Plan (SSP) typically runs 300–500 pages and must document every NIST 800-53 Rev 5 High baseline control, along with implementation statements written to the control enhancement level. The most common SSP failure is control inheritance — many providers document inherited controls as if they're implemented controls, which creates finding categories during assessment. The SSP must clearly distinguish between inherited controls (inherited from the underlying IaaS/PaaS), shared controls (partially implemented by the CSP and partially by the agency), and implemented controls (fully implemented by the CSP). This section of the paper includes a control inheritance matrix template.",
      },
    ],
  },
  "infrastructure-consolidation": {
    title: "Infrastructure consolidation: sequencing, risk management, and the migration methodology that works",
    category: "Infrastructure Architecture",
    description:
      "Most infrastructure consolidation programs take twice as long as planned because the sequencing is wrong. This paper documents the dependency mapping approach and phased migration methodology that reduces risk and keeps timelines realistic.",
    pages: "38 pages",
    published: "December 2025",
    authors: ["Thomas Bergmann, Infrastructure Practice Lead", "Amara Osei, Principal Architect"],
    topics: ["Infrastructure", "Migration", "Consolidation", "Risk Management", "Architecture"],
    sections: [
      {
        heading: "Why consolidation timelines consistently double",
        body: "Infrastructure consolidation programs fail to meet timelines for a consistent set of reasons. The most fundamental is that dependency mapping is treated as a pre-migration activity rather than an ongoing discovery process. In practice, the first wave of migrations surfaces dependencies that no asset inventory captured — because those dependencies were built over years by teams that no longer exist, documented nowhere, and discovered only when something breaks. A realistic consolidation program treats dependency discovery as continuous and builds the migration sequence around confirmed dependencies, not assumed ones.",
      },
      {
        heading: "The dependency-first sequencing methodology",
        body: "The correct approach begins with application dependency mapping using a combination of network flow analysis, application performance monitoring instrumentation, and structured interviews with application owners. This typically takes 8–12 weeks for an environment of 500+ workloads and produces a dependency graph that becomes the authoritative input to migration sequencing. Workloads are grouped into migration waves based on their dependency cluster — not their technical similarity, which is the most common sequencing mistake. Each wave is treated as an atomic unit: all workloads in the wave migrate together, reducing the window of cross-environment dependencies.",
      },
      {
        heading: "Risk management and rollback architecture",
        body: "Every migration wave requires a defined rollback procedure that has been tested before the migration window. The rollback procedure must be executable within the migration window — if the rollback takes 4 hours and the migration window is 6 hours, the practical migration window for the actual migration work is 2 hours. This constraint is frequently not modelled in migration planning and produces emergency situations when migrations run long. This paper documents the rollback architecture for the four most common migration scenarios: application tier migration, database migration, storage migration, and network dependency migration.",
      },
    ],
  },
  "mlops-enterprise-scale": {
    title: "Running AI at enterprise scale: the operational infrastructure beyond model training",
    category: "AI & Data",
    description:
      "Enterprise AI programs that reach production consistently solve the same set of operational problems: model versioning, feature store management, inference infrastructure, and drift monitoring. This paper documents the architecture for each.",
    pages: "30 pages",
    published: "November 2025",
    authors: ["Priya Nair, Head of Data Engineering", "Marcus Webb, AI Infrastructure Lead"],
    topics: ["AI Operations", "Feature Store", "Model Serving", "Drift Monitoring", "AI Governance"],
    sections: [
      {
        heading: "The operational problems that determine AI program success",
        body: "Enterprise AI programs that reach production consistently solve the same set of operational problems. The programs that don't reach production consistently fail at the same set of problems. The difference between the two groups is not model quality — it's operational infrastructure. The four problems that determine production readiness are: feature consistency between training and inference; model versioning with reproducible training pipelines; inference infrastructure that meets latency and availability requirements; and drift monitoring that detects degradation before it affects business outcomes.",
      },
      {
        heading: "Feature store architecture for enterprise AI",
        body: "A feature store is the infrastructure that computes, stores, and serves the features that machine learning models are trained on and make predictions with. The critical architectural requirement is that the same feature values used during training are used during inference — training/serving skew is the most common cause of model performance degradation in production. An enterprise feature store requires: an offline store for batch feature computation and training data generation; an online store for low-latency feature serving (typically < 10ms P99); a feature registry that documents feature definitions, lineage, and ownership; and a monitoring layer that detects feature distribution drift and serves as an early warning system for model degradation.",
      },
      {
        heading: "Inference infrastructure: latency, throughput, and cost",
        body: "The inference infrastructure requirements for enterprise AI vary dramatically by use case. Real-time fraud detection requires < 50ms end-to-end latency with 99.99% availability and the ability to handle transaction volume spikes of 10–100x normal traffic. Batch scoring pipelines for risk models require high throughput with cost efficiency as the primary constraint. The architectural decision that determines inference infrastructure cost is the split between CPU inference (cost-efficient, higher latency) and GPU inference (lower latency, 10–30x higher cost). Most enterprise use cases can be served with CPU inference if the model architecture is optimised for inference efficiency — a step that is frequently skipped in enterprise AI programs.",
      },
    ],
  },
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const paper = papers[slug]
  if (!paper) return { title: "Not Found" }
  return { title: paper.title, description: paper.description }
}

export function generateStaticParams() {
  return Object.keys(papers).map((slug) => ({ slug }))
}

export default async function WhitePaperPage({ params }: Props) {
  const { slug } = await params
  const paper = papers[slug]
  if (!paper) notFound()

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "White Papers", href: "/resources/white-papers" },
          { label: paper.category },
        ]}
        eyebrow={paper.category}
        title={paper.title}
        variant="tinted"
      />

      <section className="bg-white py-16 dark:bg-background">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">

            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Meta row */}
              <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {paper.published}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {paper.pages}
                </span>
              </div>

              {/* Abstract */}
              <p className="mb-10 text-base leading-relaxed text-muted-foreground">
                {paper.description}
              </p>

              {/* Topics */}
              <div className="mb-10 flex flex-wrap gap-2">
                {paper.topics.map((topic) => (
                  <span
                    key={topic}
                    className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground/70 dark:bg-card"
                  >
                    <Tag className="h-3 w-3" />
                    {topic}
                  </span>
                ))}
              </div>

              {/* Paper sections */}
              <div className="space-y-10 border-t border-border pt-10">
                {paper.sections.map((section, i) => (
                  <div key={i}>
                    <h2 className="mb-4 text-lg font-semibold text-foreground">
                      {section.heading}
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Download CTA */}
              <div className="mt-12 rounded-xl border border-border bg-surface p-8 dark:bg-card">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue">
                  Get the full paper
                </p>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Download the complete {paper.pages}
                </h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  The full paper includes detailed implementation guidance, architecture diagrams, compliance control mappings, and worked examples not included in this preview.
                </p>
                <Link
                  href="/contact?inquiry=research"
                  className="inline-flex items-center gap-2 rounded-md bg-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-hover"
                >
                  <ArrowRight className="h-4 w-4" />
                  Request the full paper
                </Link>
                <p className="mt-3 text-xs text-muted-foreground">
                  Sent directly to your email — no form spam, no marketing sequence.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="/resources/white-papers"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowLeft className="h-4 w-4" />
                  All white papers
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 lg:col-span-1">
              {/* Paper details */}
              <div className="rounded-xl border border-border bg-brand p-6 text-white">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
                  Paper details
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/50">Category</span>
                    <span className="font-medium text-white">{paper.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Length</span>
                    <span className="font-medium text-white">{paper.pages}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Published</span>
                    <span className="font-medium text-white">{paper.published}</span>
                  </div>
                </div>
                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-white/40">
                    Authors
                  </p>
                  <div className="space-y-2">
                    {paper.authors.map((author) => (
                      <div key={author} className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[9px] font-bold text-white/70">
                          <User className="h-3 w-3" />
                        </div>
                        <p className="text-xs leading-snug text-white/70">{author}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href="/contact?inquiry=research"
                    className="flex w-full items-center justify-center gap-2 rounded-md bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                  >
                    <ArrowRight className="h-4 w-4" />
                    Request the full paper
                  </Link>
                </div>
              </div>

              {/* Related papers */}
              <div className="rounded-xl border border-border bg-surface p-6 dark:bg-card">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  More research
                </p>
                <div className="space-y-4">
                  {Object.entries(papers)
                    .filter(([s]) => s !== slug)
                    .slice(0, 3)
                    .map(([s, p]) => (
                      <Link
                        key={s}
                        href={`/resources/white-papers/${s}`}
                        className="group block"
                      >
                        <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-blue">
                          {p.category}
                        </span>
                        <span className="text-xs font-medium leading-snug text-foreground group-hover:text-blue transition-colors">
                          {p.title}
                        </span>
                      </Link>
                    ))}
                </div>
                <Link
                  href="/resources/white-papers"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-blue hover:underline"
                >
                  All white papers
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variant="surface"
        title="Looking for research on a specific topic?"
        subtitle="Our team produces custom technical briefings for enterprise clients on topics specific to their infrastructure environment and compliance requirements."
        primaryLabel="Request a custom briefing"
        primaryHref="/contact"
        secondaryLabel="Browse all white papers"
        secondaryHref="/resources/white-papers"
      />
    </>
  )
}
