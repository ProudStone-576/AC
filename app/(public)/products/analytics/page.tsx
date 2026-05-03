import type { Metadata } from "next"
import {
  CheckCircle2, Database, Filter,
  GitBranch, Globe, Lock, RefreshCw, Search, Server, Zap
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Analytics Suite",
  description:
    "Real-time data intelligence at enterprise scale. Ingest, transform, and query billions of events without managing infrastructure.",
}

const capabilities = [
  {
    icon: Zap,
    title: "Real-time streaming ingestion",
    description:
      "Process up to 2 million events per second per tenant with sub-100ms end-to-end latency from source to query. No batching, no backpressure, no silent data loss. Every event is acknowledged before we confirm receipt.",
    metric: "2M events/sec · < 100ms E2E latency",
  },
  {
    icon: Database,
    title: "Tiered storage — 2.4 PB active",
    description:
      "Hot, warm, and cold tiers managed automatically based on access frequency and your cost targets. Query data that's 3 years old as fast as data from yesterday. Transparent compression — 8:1 average ratio.",
    metric: "< 200ms query speed on year-old data",
  },
  {
    icon: Filter,
    title: "No-code pipeline builder",
    description:
      "Business analysts build transformation pipelines without writing SQL or Python. Engineers keep full access to the underlying execution engine. Both audiences work from the same data without separate tooling.",
    metric: "60% reduction in data request backlog",
  },
  {
    icon: Search,
    title: "Unified query layer",
    description:
      "One query interface across logs, metrics, traces, events, and relational data. Correlate infrastructure performance with business outcomes in a single query. No join complexity — the query planner handles it.",
    metric: "Unified query across 40+ data source types",
  },
  {
    icon: GitBranch,
    title: "Full data trail and history",
    description:
      "Every metric knows exactly where it came from, what changes it passed through, who approved those changes, and when. Required for financial, healthcare, and regulatory audit programs.",
    metric: "Full data lineage · complete audit trail",
  },
  {
    icon: Lock,
    title: "Row-level and column-level security",
    description:
      "Data access policies are enforced at the query engine layer — not in the application. Users see exactly the data they're authorized for, regardless of which tool they're using to query it.",
    metric: "Role-based access control · policy enforcement",
  },
  {
    icon: RefreshCw,
    title: "80+ native connectors",
    description:
      "Certified connectors for cloud data warehouses, operational databases, SaaS platforms, IoT streams, and BI tools. Maintained by our engineering team — not community-contributed and left to rot.",
    metric: "80+ connectors · All production-tested",
  },
  {
    icon: Globe,
    title: "Data across multiple regions",
    description:
      "Data shared across regions with consistent access rules and full tracking. Each team owns their data. Central standards are enforced automatically without creating a bottleneck.",
    metric: "Distributed data architecture with central governance",
  },
  {
    icon: Server,
    title: "Push data back into your business tools",
    description:
      "Send analysis results back into your CRM, ERP, or marketing platforms on any schedule. Connect insights to action without building custom pipelines from scratch.",
    metric: "Push to 40+ business system destinations",
  },
]

const architectureLayers = [
  {
    layer: "Consumption",
    items: ["BI tools (Tableau, Power BI, Looker, Metabase)", "SQL clients + Jupyter", "REST & GraphQL APIs", "Embedded analytics SDK", "Alerting & anomaly detection"],
    note: "Every consumption method hits the same query engine with the same access controls.",
  },
  {
    layer: "Semantic layer",
    items: ["Metric definitions", "Business logic", "Access policies", "Caching + materialization", "Column-level lineage graph"],
    note: "The single source of truth for what metrics mean — enforced everywhere.",
  },
  {
    layer: "Processing",
    items: ["Stream processing (Apache Flink-based)", "Batch transforms", "dbt-compatible transformations", "ML feature store", "Reverse ETL engine"],
    note: "Real-time and batch in one engine. No pipeline proliferation.",
  },
  {
    layer: "Storage",
    items: ["Hot tier: columnar SSD (< 200ms P99)", "Warm tier: compressed columnar (< 2s P99)", "Cold tier: object storage (< 30s P99)", "2.4 PB total managed", "8:1 avg compression ratio"],
    note: "Tier selection is automatic. You query, we optimize.",
  },
  {
    layer: "Ingestion",
    items: ["Kafka-compatible streaming", "Change data capture (CDC)", "API-based push + pull", "File upload (Parquet, CSV, JSON, Avro)", "80+ source connectors"],
    note: "Ingest from any source. Every event acknowledged on receipt.",
  },
]

const roleUseCases = [
  {
    role: "Data Engineers",
    color: "border-blue/20 bg-blue/[0.04]",
    badge: "text-blue",
    capabilities: [
      "Full SQL + Python access to the execution engine",
      "dbt-compatible transformation layer",
      "Git-based pipeline versioning",
      "Automated data quality tests with alerting",
      "Performance profiling and cost attribution",
      "Custom connector SDK for proprietary sources",
    ],
  },
  {
    role: "Business Analysts",
    color: "border-emerald-500/20 bg-emerald-500/[0.04]",
    badge: "text-emerald-600 dark:text-emerald-400",
    capabilities: [
      "No-code pipeline builder with visual lineage",
      "Self-service metric definition with governance guardrails",
      "Drag-and-drop dashboard builder",
      "Natural language query (NLQ) for ad hoc exploration",
      "Scheduled reports with automated distribution",
      "Alerting on metric thresholds — no engineering required",
    ],
  },
  {
    role: "Executives & Finance",
    color: "border-amber-500/20 bg-amber-500/[0.04]",
    badge: "text-amber-600 dark:text-amber-500",
    capabilities: [
      "Pre-built executive dashboards refreshed every 8 seconds",
      "Mobile app for iOS and Android",
      "AI-generated natural language summaries of changes",
      "Anomaly highlighting with context, not just alerts",
      "Cross-functional scorecards with drill-down",
      "Board-ready export in one click",
    ],
  },
]

const techSpecs = [
  { spec: "Ingestion throughput", value: "2M events/sec per tenant (burst: 4M/sec)" },
  { spec: "Streaming latency", value: "< 100ms source to queryable (P99)" },
  { spec: "Hot query latency", value: "< 200ms P99 for last 12 months" },
  { spec: "Storage capacity", value: "2.4 PB total, auto-tiered" },
  { spec: "Compression ratio", value: "8:1 average (Zstandard)" },
  { spec: "Data retention", value: "Configurable — 90 days to indefinite" },
  { spec: "Query API", value: "REST, GraphQL, JDBC/ODBC, Postgres wire protocol" },
  { spec: "Auth & access control", value: "RBAC + ABAC, row-level + column-level security" },
  { spec: "Compliance certifications", value: "SOC 2 Type II, HIPAA (health data), GDPR (EU privacy), FINRA (financial), BCBS 239 (banking)" },
  { spec: "Uptime guarantee", value: "99.99% for the query system, 99.95% for live data feeds" },
  { spec: "Source connectors", value: "80+ production-certified, custom SDK available" },
  { spec: "Destination connectors", value: "40+ reverse ETL destinations" },
]

const industryUseCases = [
  {
    industry: "Financial Services",
    title: "Real-time fraud detection at 400,000 transactions/sec",
    description:
      "A Tier-1 bank replaced 14 separate monitoring tools with the Analytics Suite. Fraud detection latency dropped from 340ms to 12ms. Annual fraud losses fell 31% in the first year. The risk team now queries events from any of the last 7 years in under 200ms.",
    stat: "31% reduction in annual fraud losses",
    metrics: ["340ms → 12ms detection latency", "14 tools → 1 platform", "7-year history queryable in < 200ms"],
  },
  {
    industry: "Healthcare",
    title: "Clinical operations dashboard across 240 hospital sites",
    description:
      "A national health system replaced a reporting workflow that required a 48-hour data delay with real-time dashboards refreshed every 8 seconds. Administrators act on current capacity data instead of yesterday's. Staffing decisions are made with actual demand data.",
    stat: "48-hour data lag → 8-second freshness",
    metrics: ["240 sites, single dashboard", "8-second data freshness", "30% improvement in staffing utilization"],
  },
  {
    industry: "Manufacturing",
    title: "Predictive maintenance across 12,000 IoT sensors",
    description:
      "An automotive manufacturer routes sensor telemetry from 12,000 production floor sensors through the Analytics Suite. Anomaly detection models run on the stream in real time. Unplanned downtime fell 43% in the first year.",
    stat: "43% reduction in unplanned downtime",
    metrics: ["12,000 IoT sensors ingested", "Real-time anomaly detection on stream", "$4.2M annual savings (first year)"],
  },
]

export default function AnalyticsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: "Analytics Suite" }]}
        eyebrow="Product"
        title="Data infrastructure that serves your business, not just your data team"
        subtitle="If the CEO needs an analyst to get a number, your data infrastructure has failed. We fix that."
        backgroundImageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=3840&q=100"
        variant="dark"
      />

      {/* Stats bar */}
      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
            {[
              { value: "2.4 PB", label: "Active data under management" },
              { value: "< 200ms", label: "Search speed on year-old data" },
              { value: "2M/sec", label: "Peak event ingestion" },
              { value: "80+", label: "Production-certified connectors" },
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
              A data stack that every team can actually use
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Engineers get a full-featured query engine. Analysts get a no-code builder. Executives get dashboards that are never stale. Built on the same substrate — no duplication, no divergence.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div key={cap.title} className="rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue/20 dark:bg-card">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                  <cap.icon className="h-5 w-5 text-blue" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">{cap.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
                <p className="font-mono text-xs font-semibold text-blue/80">{cap.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="bg-canvas py-20 lg:py-24">
        <div className="container-enterprise">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Architecture</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Five layers. One stack. No vendor proliferation.
            </h2>
            <p className="mt-4 text-base text-canvas-muted">
              Most enterprise data stacks are assembled from 10–15 separate tools. Every boundary between tools is a place where data can be lost, delayed, or corrupted. We eliminate those boundaries.
            </p>
          </div>
          <div className="mx-auto max-w-4xl space-y-2">
            {architectureLayers.map((layer, i) => (
              <div
                key={layer.layer}
                className="rounded-xl border px-6 py-5"
                style={{
                  borderColor: `rgba(8,145,178,${0.30 - i * 0.04})`,
                  background: `rgba(8,145,178,${0.07 - i * 0.01})`,
                }}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue/80">{layer.layer}</p>
                    <div className="flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <span key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-[11px] text-white/30 sm:max-w-[180px] sm:text-right">{layer.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By role */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">By role</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Every team gets what they actually need
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {roleUseCases.map((role) => (
              <div key={role.role} className={`rounded-xl border p-6 ${role.color}`}>
                <p className={`mb-4 text-xs font-semibold uppercase tracking-widest ${role.badge}`}>{role.role}</p>
                <ul className="space-y-2.5">
                  {role.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 flex-shrink-0 ${role.badge}`} />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry use cases */}
      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Industry use cases</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              What enterprises actually use it for
            </h2>
          </div>
          <div className="space-y-6">
            {industryUseCases.map((uc) => (
              <div key={uc.industry} className="grid grid-cols-1 gap-0 rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-1 gap-6 bg-white p-8 dark:bg-card lg:grid-cols-3">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue">{uc.industry}</p>
                    <h3 className="text-base font-semibold text-foreground">{uc.title}</h3>
                    <p className="mt-3 font-mono text-xl font-bold text-foreground">{uc.stat}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{uc.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {uc.metrics.map((m) => (
                        <span key={m} className="rounded-md bg-blue-light px-2.5 py-1 font-mono text-[11px] font-semibold text-blue-light-foreground">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech specs */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Technical specifications</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              The numbers your data engineers will ask for
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
      <section className="bg-surface py-16 dark:bg-card">
        <div className="container-enterprise">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Connects to everything already in your stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              "Snowflake", "Databricks", "BigQuery", "Redshift", "Azure Synapse",
              "dbt", "Apache Kafka", "Confluent", "AWS Kinesis", "Fivetran",
              "Airbyte", "Tableau", "Power BI", "Looker", "Grafana",
              "Postgres", "MySQL", "MongoDB", "Salesforce", "Workday",
            ].map((tool) => (
              <span key={tool} className="rounded-md border border-border bg-white px-3 py-1.5 text-xs font-medium text-muted-foreground dark:bg-card">
                {tool}
              </span>
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
              What data teams ask before they sign
            </h2>
          </div>
          <div className="mx-auto max-w-3xl divide-y divide-border">
            {[
              {
                q: "Can we migrate from our existing Snowflake/Databricks setup?",
                a: "Yes. We provide a migration tool that handles schema migration, historical data transfer, and query translation. Most migrations run in parallel — your existing stack stays live until you're satisfied the new environment is producing identical results.",
              },
              {
                q: "How does row-level security work across different consumption tools?",
                a: "Access policies are defined once in the semantic layer and enforced at the query execution layer — before results are returned. Regardless of whether a user queries via SQL client, BI tool, API, or the embedded SDK, the same policy applies. There's no per-tool configuration.",
              },
              {
                q: "Is it compatible with our existing dbt models?",
                a: "Yes. The transformation layer is dbt-compatible — you can run your existing dbt project unchanged. We also provide an enhanced execution environment that adds features like automated quality tests, cost attribution per model, and column-level lineage.",
              },
              {
                q: "How do you handle personally identifiable information (PII)?",
                a: "PII discovery runs automatically on ingestion and tags fields with a sensitivity classification. Column-level security policies can mask, tokenize, or restrict PII at the query layer. Your GDPR and CCPA right-to-erasure workflows are supported natively.",
              },
              {
                q: "What's the proof of concept process?",
                a: "We stand up a dedicated proof-of-concept environment with your actual data (a representative sample you provide) within 48 hours of a signed PoC agreement. The PoC runs for 30 days with full support. You keep the migration and setup work regardless of whether you proceed.",
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
        title="See how fast your team can go from raw data to decisions"
        subtitle="We'll run a live proof of concept on your own data. Typical setup: 48 hours. Typical timeline to first insight: day 3."
        primaryLabel="Request a proof of concept"
        primaryHref="/contact"
        secondaryLabel="View documentation"
        secondaryHref="/docs"
      />
    </>
  )
}
