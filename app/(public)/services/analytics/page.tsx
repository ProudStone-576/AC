import { JsonLd } from "@/components/ui/JsonLd"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, BarChart2, CheckCircle2, Database,
  Filter, GitBranch, Lock, Search, Zap
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { AnalyticsHeroVisual } from "@/components/ui/ServiceHeroVisuals"
import { CTASection } from "@/components/sections/CTASection"
import { FadeIn } from "@/components/ui/FadeIn"
import { FaqAccordion } from "@/components/ui/FaqAccordion"

const rightFor = [
  "Your data is scattered across multiple systems and no one has a clear picture of the business",
  "Reports take days to produce and are already out of date by the time they're shared",
  "Your data engineering team spends more time on manual pipeline maintenance than on new work",
  "Non-technical staff can't answer their own data questions without filing a request",
  "You're making significant decisions on incomplete or inconsistent data",
]

const notRightFor = [
  "You just need a simple reporting tool connected to one database — that's a two-hour setup",
  "You're a very small business with minimal data and a single source of truth that already works",
]

const faqs: { q: string; a: string }[] = [
  {
    q: "What is data infrastructure?",
    a: "Data infrastructure is the set of systems that move your data from where it's generated to where it can be analyzed — ingestion pipelines, a data warehouse, transformation logic, and the access controls that govern who can see what. Without it, every analysis starts with someone manually pulling data from multiple systems.",
  },
  {
    q: "What is a data pipeline?",
    a: "A data pipeline is an automated process that moves data from a source — a database, an application, an API, a stream — to a destination where it can be analyzed. Well-built pipelines are reliable, tested, and version-controlled. They run on a schedule or in real time without manual intervention, and they fail loudly when something goes wrong so the problem can be fixed before anyone downstream notices.",
  },
  {
    q: "What's the difference between a data warehouse and a data lake?",
    a: "A data warehouse stores structured, processed data optimized for querying — it's fast for analytics and easy for business users. A data lake stores raw data in its original form — more flexible but requires more processing before analysis. Most organizations benefit from a warehouse; data lakes are useful when you need to retain raw data for future use cases you haven't defined yet. Many modern platforms like Snowflake or Databricks bridge the gap.",
  },
  {
    q: "Can non-technical people use the analytics tools you set up?",
    a: "That's explicitly what we design for. We build a semantic layer on top of the technical data — pre-defined metrics, business-friendly naming, and access controls — so analysts and executives can query data directly without writing SQL. The goal is that your business teams can answer their own questions without filing tickets to the data team.",
  },
  {
    q: "What tools do you use?",
    a: "We're tool-agnostic and select based on your requirements. Common choices include Snowflake or Databricks for the warehouse, dbt for transformations, Kafka or Fivetran for ingestion, and Tableau, Power BI, or Looker for visualization. We don't have preferred vendor relationships that bias our recommendations.",
  },
  {
    q: "How much does it cost?",
    a: "Data infrastructure projects range from focused pipeline builds for a specific use case to full data estate implementations. Cost depends on the number of data sources, the complexity of transformations, and whether you need self-service analytics built out on top. We scope after a data audit — which takes one to two weeks.",
  },
]

export const metadata: Metadata = {
  title: "Enterprise Data & Analytics Services Canada | Data Platform | Aethon Core",
  description: "Enterprise data platform and analytics services for Canadian organizations. Data lake, warehouse, real-time pipelines, and executive dashboards. AWS, Azure, Snowflake, and Databricks. Toronto & national.",
  keywords: [
    "enterprise data services Canada",
    "data analytics services Canada",
    "data platform Canada",
    "data engineering services Canada",
    "analytics services Toronto",
    "business intelligence Canada",
    "data warehouse services Canada",
    "Snowflake services Canada",
    "data infrastructure Canada",
  ],
  alternates: { canonical: "https://aethoncore.com/services/analytics" },
  openGraph: {
    type: "website", locale: "en_CA", url: "https://aethoncore.com/services/analytics",
    siteName: "Aethon Core",
    title: "Enterprise Data & Analytics Services Canada | Data Platform | Aethon Core",
    description: "Enterprise data platform and analytics services for Canadian organizations. Data lake, warehouse, real-time pipelines, and executive dashboards. AWS, Azure, Snowflake, and Databricks. Toronto & national.",
  },
}

const capabilities = [
  {
    icon: Database,
    title: "Modern data stack implementation",
    description:
      "Design and deployment of a production-grade data stack: ingestion, warehouse, transformation, and visualization layers. We build on proven components — dbt, Snowflake, Databricks, or whichever warehouse is right for your query patterns — and configure them for your actual workload.",
    note: "Includes: Architecture design, stack selection, full implementation",
  },
  {
    icon: Zap,
    title: "Real-time pipeline engineering",
    description:
      "Streaming data pipelines that process events in real time — from IoT sensors, transactional systems, application logs, and third-party APIs. Sub-100ms end-to-end latency from source to queryable. No batching where it isn't needed.",
    note: "Tech: Apache Kafka, Flink, Kinesis, Pub/Sub — based on your stack",
  },
  {
    icon: Filter,
    title: "Self-service analytics enablement",
    description:
      "The most underused investment in most data programs is the semantic layer — the definitions, business logic, and access controls that make analytics accessible to non-engineers. We build it and train your business teams to use it without filing data requests.",
    note: "Tools: dbt metrics, Cube, LookML, or custom semantic layer",
  },
  {
    icon: GitBranch,
    title: "Data governance and cataloging",
    description:
      "A functioning data catalog, ownership model, and quality framework — not a governance document that nobody reads. We stand up the tooling, establish the ownership process, and make sure data producers and consumers have a shared understanding of what the data means.",
    note: "Tools: Atlan, Alation, DataHub, OpenMetadata — based on your scale",
  },
  {
    icon: Lock,
    title: "Data security and access control",
    description:
      "Row-level and column-level security enforced at the query engine layer. PII discovery and classification across your data estate. Access policies that satisfy GDPR, HIPAA, and CCPA requirements — written as code and version-controlled.",
    note: "Frameworks: RBAC + ABAC · Policy-as-code enforcement",
  },
  {
    icon: Search,
    title: "Data quality and observability",
    description:
      "Automated data quality checks, freshness monitoring, and anomaly detection across your pipelines. Data incidents are detected before downstream consumers notice them. Quality scores are visible in your catalog — not hidden in monitoring dashboards only engineers watch.",
    note: "Tools: Great Expectations, dbt tests, Monte Carlo, Soda — integrated into your pipelines",
  },
]

const dataStack = [
  { layer: "Ingestion", tools: ["Apache Kafka", "Fivetran", "Airbyte", "AWS Kinesis", "Google Pub/Sub", "custom connectors"], note: "Everything from databases to IoT streams" },
  { layer: "Storage & Warehouse", tools: ["Snowflake", "Databricks", "BigQuery", "Redshift", "Azure Synapse", "Apache Iceberg"], note: "Recommendation based on query pattern and cost model" },
  { layer: "Transformation", tools: ["dbt", "Apache Spark", "Flink", "Dataform", "Apache Beam"], note: "Version-controlled, tested, documented" },
  { layer: "Semantic Layer", tools: ["dbt Semantic Layer", "Cube", "LookML", "Apache Superset", "custom"], note: "The layer that makes analytics self-service" },
  { layer: "Consumption", tools: ["Tableau", "Power BI", "Looker", "Metabase", "Jupyter", "REST/GraphQL API"], note: "Your analysts use the tools they already know" },
  { layer: "Governance & Catalog", tools: ["Atlan", "DataHub", "Alation", "OpenMetadata", "Collibra"], note: "Ownership, lineage, and quality in one place" },
]

const phases = [
  {
    phase: "Data Audit",
    duration: "Week 1–2",
    description:
      "We inventory your current data assets — where data lives, how it moves, who uses it, and what quality problems exist. We interview data producers and consumers separately and compare what each thinks the data means.",
    deliverable: "Data estate audit + consumer needs assessment",
  },
  {
    phase: "Architecture Design",
    duration: "Week 2–4",
    description:
      "We produce the target data architecture — stack selection, pipeline design, warehouse schema approach, and access model. Cost modeling is included. The architecture is designed to serve your analysts first, not just to look good on a diagram.",
    deliverable: "Data architecture design + technology selection + cost model",
  },
  {
    phase: "Foundation Build",
    duration: "Week 4–8",
    description:
      "Ingestion connectors, warehouse provisioning, base transformation layer, and access controls are built and tested. The first set of production pipelines runs in staging with full monitoring before it touches production data.",
    deliverable: "Production-ready data foundation + first pipeline set",
  },
  {
    phase: "Expansion",
    duration: "Week 8–16",
    description:
      "Additional data sources onboarded in prioritized waves. Semantic layer built out to cover the use cases your business analysts most need. Dashboard templates delivered. Business teams trained to use the self-service layer.",
    deliverable: "Semantic layer + dashboards + trained business users",
  },
  {
    phase: "Governance",
    duration: "Week 12–20",
    description:
      "Data catalog populated with ownership, lineage, and quality metadata. Data quality checks deployed across every pipeline. Governance process established with your data team so the catalog stays current after we leave.",
    deliverable: "Live data catalog + quality framework + governance process documentation",
  },
]

const useCases = [
  {
    industry: "Retail & Commerce",
    title: "Moving from weekly reporting cycles to same-day operational intelligence",
    challenge:
      "A retailer's analytics team produces a weekly business report that takes three days to compile. The CFO frequently makes inventory and markdown decisions based on 10-day-old data. The data team is a bottleneck — analysts across the business file tickets to get numbers the data team extracts manually.",
    approach:
      "We redesign the pipeline from ingestion through to a self-service semantic layer. The transformation logic that currently lives in spreadsheets moves into version-controlled dbt models. Business analysts are trained to query the semantic layer directly. The data team shifts from manual extraction to building new data products.",
  },
  {
    industry: "Financial Services",
    title: "Operationalizing AI on a fragmented data estate",
    challenge:
      "A financial institution wants to deploy ML models for credit risk and fraud detection. The models exist in notebooks. The data estate is fragmented across three separate systems with inconsistent schemas, undocumented transformations, and no lineage tracking. The models can't be deployed because the feature engineering pipeline doesn't exist.",
    approach:
      "We build the data infrastructure the models require before touching the models. A unified feature store is built on top of a consolidated data warehouse. Feature definitions are version-controlled with lineage tracked back to source systems. When the models are deployed, the data feeding them is auditable — which is what the compliance team requires.",
  },
]

export default function AnalyticsPage() {
  return (
    <>
      <JsonLd schema={[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://aethoncore.com"},{"@type":"ListItem","position":2,"name":"Services","item":"https://aethoncore.com/services"},{"@type":"ListItem","position":3,"name":"Data & Analytics","item":"https://aethoncore.com/services/analytics"}]},{"@context":"https://schema.org","@type":"Service","name":"Data & Analytics","url":"https://aethoncore.com/services/analytics","provider":{"@type":"Organization","name":"Aethon Core Inc.","url":"https://aethoncore.com"},"areaServed":[{"@type":"Country","name":"Canada"},{"@type":"Country","name":"United States"}],"serviceType":"Data & Analytics"}]} />
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Data & Analytics" }]}
        eyebrow="Specialized"
        title="Data infrastructure that the people making decisions can actually use"
        subtitle="We build end-to-end data estates — from ingestion through to self-service analytics. When the CEO needs a number, they get it in minutes, not by filing a request."
        variant="tinted"
        visual={<AnalyticsHeroVisual />}
      />

      {/* Stats strip */}
      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-in">
          <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
            {[
              { value: "Full stack", label: "Ingestion to self-service analytics" },
              { value: "< 100ms", label: "Streaming pipeline E2E latency" },
              { value: "Tested", label: "Data quality checks on every pipeline" },
              { value: "Version", label: "controlled transformations in dbt" },
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
              Every layer of the modern data estate
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Data infrastructure is only as good as the decisions it enables. We build for the end user
              — the analyst, the exec, the operations manager — not just the data engineer.
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

      {/* Technology stack */}
      <section className="bg-surface py-20 lg:py-24 dark:bg-card">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Technology</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              We're opinionated about the stack, not about the vendor
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              We work with all major data platforms. Technology selection follows your query patterns, scale requirements, and cost targets — not our partner relationships.
            </p>
          </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dataStack.map((layer) => (
              <div key={layer.layer} className="rounded-xl border border-border bg-white p-6 dark:bg-card">
                <div className="mb-1 flex items-center gap-2">
                  <BarChart2 className="h-3.5 w-3.5 text-blue" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue">{layer.layer}</p>
                </div>
                <p className="mt-1 mb-3 text-[11px] text-muted-foreground">{layer.note}</p>
                <div className="flex flex-wrap gap-1.5">
                  {layer.tools.map((t) => (
                    <span key={t} className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-foreground/80 dark:bg-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">How we work</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              From fragmented data to production analytics platform
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Most data projects fail because they start with technology and work backwards to the problem.
              We start with what your business needs to decide.
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
              Data problems we're built to solve
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
        title="Ready to talk data infrastructure?"
        subtitle="Tell us where your data lives today and what decisions it's failing to support. We'll assess the gap and tell you what a realistic engagement looks like."
        primaryLabel="Talk to our data team"
        primaryHref="/contact"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  )
}
