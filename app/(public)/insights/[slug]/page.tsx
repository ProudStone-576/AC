import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { notFound } from "next/navigation"
import { db } from "@/lib/db"

// ─── Hardcoded articles ───────────────────────────────────────────────────────
// Full articles for routes that don't yet have a DB record.
// DB records (published via admin dashboard) take precedence.
const hardcodedArticles: Record<
  string,
  {
    title: string
    category: string
    excerpt: string
    readTime: string
    date: string
    author: string
    body: { heading?: string; text: string }[]
  }
> = {
  "multi-cloud-resilience": {
    title: "Using multiple cloud providers doesn't automatically make your systems more reliable",
    category: "Infrastructure",
    excerpt:
      "Many businesses assume that running on multiple cloud providers protects them from outages. In practice, it usually doesn't — unless the systems were specifically designed to handle it. Here's what real reliability across cloud providers actually requires.",
    readTime: "8 min read",
    date: "March 2026",
    author: "Aethon Core",
    body: [
      {
        heading: "The resilience assumption that doesn't hold",
        text: "The most common rationale for multi-cloud adoption is resilience. The logic is intuitive: if you run workloads on AWS and Azure, an outage at either provider won't take your business offline. The problem is that this reasoning describes a theoretical architecture — not the architecture most enterprises actually build when they adopt multiple cloud providers. In practice, multi-cloud deployments are almost always multi-cloud by accident. One cloud provider gets adopted for initial infrastructure, a second gets adopted when a business unit prefers a different provider, a third appears when an acquired company brings its existing environment. The result is a portfolio of workloads across multiple clouds, but with no shared resilience architecture connecting them.",
      },
      {
        heading: "What resilience actually requires",
        text: "Genuine resilience across cloud providers requires four things that most enterprises don't have: workloads designed to run on more than one cloud without configuration changes; automated failover that can redirect traffic between providers in under 60 seconds; data replication that keeps state consistent across environments; and runbooks that have been tested — not just written. Of these, the hardest is the first. Most applications in enterprise environments use cloud-provider-specific services for storage, queuing, secrets management, and monitoring. Migrating a workload from AWS to Azure means replacing S3 with Blob Storage, SQS with Service Bus, Secrets Manager with Key Vault — and then retesting every integration. That is not a failover procedure; that is a migration project.",
      },
      {
        heading: "The architectural decisions that actually create resilience",
        text: "Building real resilience across cloud providers starts with three architectural decisions made before anything is deployed. First: application state must live in infrastructure that is genuinely multi-cloud — not in a managed database that only runs in one provider's region. This typically means a distributed database with nodes in each provider's environment, or a data layer with synchronous or near-synchronous replication across providers. Second: the network fabric must span providers transparently. Applications should not need to know which cloud they're running on. This requires a service mesh or overlay network that abstracts provider-specific networking. Third: the deployment pipeline must be able to target either provider without changes. If your CI/CD pipeline has hard dependencies on a single provider's APIs, your failover procedure is a pipeline rewrite under pressure.",
      },
      {
        heading: "The sequencing mistake most enterprises make",
        text: "Most enterprises attempt to build multi-cloud resilience by starting with the compute layer — running identical container clusters in two providers — and then discovering that all the dependencies below the compute layer are single-cloud. The correct sequence is inverted: start with the data layer, then the network layer, then compute. Data is the hardest to replicate reliably and has the longest recovery time objective if not addressed first. Compute is relatively easy to run in two environments once the underlying dependencies are provider-agnostic.",
      },
      {
        heading: "Testing is the only proof",
        text: "The only way to know whether a resilience architecture works is to test it under conditions that resemble an actual failure. This means deliberately removing one cloud provider from the architecture and measuring the outcome: how long did failover take, what traffic was lost, what state was inconsistent, what manual interventions were required. Most enterprises have never done this test. The ones that have done it have consistently discovered that their resilience architecture works for stateless compute and fails for stateful workloads — because the data layer assumptions were never verified. Build the test, run it in a non-production environment, and fix what breaks before you need to rely on the architecture under real pressure.",
      },
    ],
  },
  "zero-trust-implementation": {
    title: "What it actually takes to build a Zero Trust security setup",
    category: "Security",
    excerpt:
      "A lot of organizations say they have Zero Trust security but haven't actually changed how their systems work. Real Zero Trust changes your actual vulnerabilities — not just your audit report. Here's what a genuine implementation requires.",
    readTime: "11 min read",
    date: "February 2026",
    author: "Aethon Core",
    body: [
      {
        heading: "The gap between the framework and the outcome",
        text: "Zero Trust has become the default answer to enterprise security program questions. Board presentations reference it. RFPs require it. Vendor marketing promises it. The problem is that most enterprise Zero Trust programs produce Zero Trust documentation — not a genuine Zero Trust security setup. The distinction matters because documentation doesn't close real vulnerabilities. Only implemented controls do, and the controls required for genuine Zero Trust security are operationally difficult in ways that vendor marketing doesn't acknowledge.",
      },
      {
        heading: "What Zero Trust actually means architecturally",
        text: "NIST SP 800-207 defines Zero Trust as a security model where no user, device, workload, or network location is implicitly trusted. Every access request is evaluated at the time of the request using all available context: the identity of the requestor, the state of the device, the sensitivity of the resource, and the behaviour pattern of the principal making the request. This is architecturally meaningful: it implies that access decisions cannot be made at the network perimeter, because the network perimeter has no context about the requestor's identity or the device state. Access decisions must be made by a policy engine that has access to identity data, device posture data, and resource sensitivity classifications — and that decision must be made per-request, not per-session.",
      },
      {
        heading: "The three controls that are almost always missing",
        text: "In our assessment work across enterprise environments, the controls that distinguish genuine Zero Trust from Zero Trust theater are consistently the same three. First: checking device security at the time of the access request — not just at the time of enrollment. Most enterprises enroll devices and treat enrollment as permanent proof of safety. A device that was compliant at enrollment and has since been compromised or fallen out of date is still treated as trusted. Second: verifying communication between internal systems, not just users. Most enterprise security programs focus on user-to-application access and leave system-to-system communication — which is the path attackers use to spread through a network after breaching one system — checked only by network location. Third: continuous validation, not one-time verification. A session that was valid 4 hours ago should be re-evaluated when context changes — when a user's location changes, when a device goes out of compliance, when unusual behaviour is detected.",
      },
      {
        heading: "The operational constraint that determines feasibility",
        text: "The reason these controls are missing from most Zero Trust implementations is not ignorance — it's operational feasibility. A device posture check that happens per-request adds latency to every access decision. Per-request policy evaluation at enterprise scale requires infrastructure that can process hundreds of thousands of policy decisions per second with sub-millisecond response times. Service mesh deployments required for service-to-service mTLS break applications that weren't designed to handle certificate rotation. These are real engineering constraints, not excuses — and they're why Zero Trust implementation is a multi-year program, not a configuration change.",
      },
      {
        heading: "The implementation sequence that produces real outcomes",
        text: "The correct sequence for Zero Trust implementation starts with visibility, not enforcement. You cannot enforce policies on workloads you cannot see. The first phase should deploy comprehensive network flow monitoring, identity telemetry, and workload behaviour baselining — without changing any access policies. This phase typically takes 60–90 days and produces two valuable outputs: a complete picture of what your current access patterns actually are (which is almost always surprising), and a baseline against which anomalies can be detected. Only after this baseline is established should policy enforcement begin, starting with the highest-risk access patterns and working toward least-privilege over a phased 12–24 month program.",
      },
    ],
  },
  "enterprise-ai-data-layer": {
    title: "Most AI projects fail because of bad data pipelines, not bad AI models",
    category: "AI & Data",
    excerpt:
      "When AI projects fail in large organizations, it's almost never because the AI itself doesn't work. The problem is the data infrastructure feeding it — which was never built to support AI. Here's what you need to fix first.",
    readTime: "9 min read",
    date: "February 2026",
    author: "Aethon Core",
    body: [
      {
        heading: "The failure mode that the AI vendor ecosystem doesn't talk about",
        text: "Enterprise AI has a problem that the model vendors, the cloud providers, and the consulting firms who run AI transformation programs have a collective incentive not to discuss: the majority of enterprise AI projects fail before a model is ever trained in a production environment. The failure is not at the model layer. It's at the data layer — the infrastructure that should produce training data, serve features to inference pipelines, and maintain the lineage records required for governance. That infrastructure doesn't exist in most enterprise environments, and building it takes longer than anyone's AI roadmap anticipates.",
      },
      {
        heading: "The four data requirements that determine AI production readiness",
        text: "Requirement 1: Training data must be accessible, documented, and reproducible. This seems obvious, but most enterprise data estates have data that is accessible (you can query it) but not documented (no one knows what it means or whether it's been transformed) and not reproducible (the pipeline that produced it ran once, 18 months ago, on a server that no longer exists). Requirement 2: Feature values must be consistent between training and serving. The same feature computed by the training pipeline and the inference pipeline must produce the same result. When they don't — and they frequently don't, because the pipelines were built by different teams at different times — the model you trained and the model you deployed are not the same model from the data perspective. Requirement 3: Data lineage must be traceable at the column level. Not because it's good practice, but because it's increasingly a regulatory requirement. The EU AI Act, NIST AI RMF, and most financial services AI governance frameworks require that you can trace every feature back to its source. Requirement 4: Access controls on training data must be compatible with the access model of the ML training pipeline. Training pipelines often need to read across datasets that are normally siloed for compliance reasons. Resolving this without violating the compliance controls is an architectural problem, not a permissions problem.",
      },
      {
        heading: "Why the timeline estimate is almost always wrong",
        text: "The most common failure in enterprise AI program planning is underestimating the data infrastructure work by a factor of 3–5x. A typical estimate allocates 2–3 months for data preparation and 6–9 months for model development and deployment. In practice, the data infrastructure work takes 12–18 months in environments where it wasn't designed for AI workloads — which describes most enterprise environments. The model development phase is genuinely fast with modern tooling. The data infrastructure phase is slow because it requires changes to operational systems that weren't designed to be changed, documentation of data that was never documented, and resolution of access control conflicts that were never anticipated.",
      },
      {
        heading: "What the right starting point looks like",
        text: "The right starting point for an enterprise AI program is a data infrastructure audit, not a model selection process. The audit should answer: what data do we have that's relevant to the AI use case; what is the quality of that data and how is it measured; what is the latency from event occurrence to data availability; what access controls apply to the data and how will the ML pipeline satisfy them; and what lineage documentation exists. The answers to these questions determine whether the AI program can proceed on the proposed timeline or whether data infrastructure remediation is required first. Starting with model selection before answering these questions produces projects that stall 6 months in when the data infrastructure gaps become blocking issues.",
      },
    ],
  },
  "cloud-cost-attribution": {
    title: "Why most companies don't know what they're actually spending on cloud",
    category: "Cloud",
    excerpt:
      "Most large organizations underestimate their cloud bill by 30–60%. Not because of obvious waste, but because figuring out which teams and systems are spending what is genuinely difficult. Here's a straightforward way to get full visibility.",
    readTime: "7 min read",
    date: "January 2026",
    author: "Aethon Core",
    body: [
      {
        heading: "The 30–60% gap",
        text: "Most enterprises that have done rigorous cloud cost attribution work discover that their actual cloud spend is 30–60% higher than what their finance and operations teams believe it to be. This is not primarily a waste problem — though waste exists in every cloud environment. The primary driver is attribution: cloud costs that are real, that serve genuine business functions, but that are not attributed to the team or workload responsible for generating them. Untagged resources, shared infrastructure with no cost allocation model, and data transfer costs that are categorized as 'miscellaneous' all contribute to a picture of cloud spend that looks lower than it is.",
      },
      {
        heading: "The three categories of invisible spend",
        text: "Category 1: Data transfer costs. Cloud providers charge for data moving between availability zones, between regions, and between their network and the public internet. These costs are real, they grow with data volume, and they are almost never attributed to the workloads that generate them. A large-scale analytics workload that processes data across regions can generate data transfer costs equal to 20–40% of its compute costs — and those transfer costs typically land in a shared account with no attribution. Category 2: Shared infrastructure costs. Load balancers, NAT gateways, VPN connections, and shared Kubernetes clusters are used by multiple workloads but billed to a single account. Without a cost allocation model for these shared resources, the teams using them appear to cost less than they do. Category 3: Untagged resources. Most cloud cost management systems attribute costs using resource tags. Resources that were created without tags — which is the majority of resources in environments that didn't enforce tagging from the beginning — generate costs that are visible in aggregate but not attributable to specific teams or workloads.",
      },
      {
        heading: "A practical framework for full-cost attribution",
        text: "The framework for full-cost attribution starts with tagging enforcement — every resource created after a certain date must have a defined set of tags or the creation is rejected. This is straightforward to implement with cloud provider policy engines. For existing untagged resources, discovery tooling can identify ownership by correlating resource creation timestamps with deployment pipeline logs. Shared infrastructure costs are allocated using a resource consumption model: a workload's share of a shared Kubernetes cluster is proportional to its CPU and memory consumption, not a flat split. Data transfer costs are attributed using VPC flow logs correlated with workload identifiers. The result is a cost attribution model where every dollar of cloud spend is traceable to a team, product, or workload.",
      },
      {
        heading: "What to do with the picture once you have it",
        text: "Full cost attribution typically produces a handful of high-value findings: one or two workloads that cost dramatically more than anyone believed; shared infrastructure that is significantly over-provisioned for its actual utilization; and data transfer patterns that reveal unnecessary cross-region data movement. The value of the attribution exercise is not that it reveals waste to be eliminated — though it often does — but that it makes cost a first-class input to engineering decisions. Teams that can see the cost implications of their architectural choices make different decisions than teams that can't. That behavioural change, sustained over years, produces more cost efficiency than any one-time optimization effort.",
      },
    ],
  },
  "transformation-vs-technology": {
    title: "Most digital transformation projects are really just technology projects in disguise",
    category: "Digital Transformation",
    excerpt:
      "The majority of transformation projects fail — not because the technology didn't work, but because they were never really about changing how the organization operates. Here's why that distinction matters and what to do about it.",
    readTime: "11 min read",
    date: "December 2025",
    author: "Aethon Core",
    body: [
      {
        heading: "The naming problem",
        text: "Digital transformation is an organizational change program that uses technology as its primary mechanism. It is not a technology program that happens to affect the organization. This distinction sounds semantic, but it has large practical implications for how transformation programs are funded, governed, staffed, and measured. Technology programs are led by technology leaders, funded from technology budgets, measured by technology outcomes, and declared complete when the technology is deployed. Organizational change programs are led by business leaders, funded from business unit budgets, measured by business outcomes, and declared complete when behaviour has changed at scale. Most enterprise transformation programs are funded and governed as technology programs and then evaluated on why they failed to produce organizational outcomes.",
      },
      {
        heading: "The three failure modes that follow from this",
        text: "Failure mode 1: Technology deployment is treated as the end state. A new ERP system, a new data platform, a new cloud infrastructure — these are technology deployments. Transformation requires that people change how they work as a result of these deployments. If the deployment program doesn't include investment in change management, training, and process redesign proportional to the technology investment, the technology will be deployed and used in ways that replicate the previous process rather than transforming it. Failure mode 2: Success is measured by technology metrics. Projects are declared successful when systems are live, when migration is complete, when adoption rates hit 80%. These metrics are necessary but not sufficient. The right metrics for a transformation program are business outcomes: time to insight, decision latency, error rates in processes that the technology was supposed to improve. Failure mode 3: Resistance is treated as a communication problem. Organizational resistance to transformation is almost always rational. People resist changes that make their work harder before it gets easier, that threaten their expertise, or that eliminate roles. Treating this resistance as a communication problem — one that can be solved with better town halls and clearer messaging — consistently fails. Treating it as a design problem — one that requires the transformation to be designed with the people affected by it, not just communicated to them — consistently works better.",
      },
      {
        heading: "The characteristics of transformation programs that work",
        text: "The transformation programs that produce genuine organizational change share a set of characteristics that are not primarily technical. They are sponsored by a business leader who has operational accountability for the outcome — not an IT leader who has accountability for the technology. They define the behavioural change they're trying to produce before they define the technology that will support it. They invest in change capability — the coaches, trainers, and process designers — at a level proportional to their investment in technology capability. They measure intermediate outcomes on a cadence that allows course correction: not quarterly milestones on a Gantt chart, but weekly evidence that behaviour is changing in the direction the program intended. And they treat the first 18 months as a learning phase, not a delivery phase — because the most important input to a transformation program is the feedback from the people whose work it's changing.",
      },
    ],
  },
  "cio-stability-transformation": {
    title: "How technology leaders keep things running while also trying to modernize them",
    category: "Leadership",
    excerpt:
      "Technology leaders are expected to keep systems stable and drive major changes at the same time. These are genuinely conflicting goals. This piece looks at how the best ones manage both without consistently sacrificing one for the other.",
    readTime: "9 min read",
    date: "November 2025",
    author: "Aethon Core",
    body: [
      {
        heading: "Two mandates in genuine tension",
        text: "The modern CIO has two mandates that are in genuine tension with each other. The first mandate is operational: keep the lights on, protect the enterprise from security threats, maintain system availability, and manage technology costs. This mandate is measured by incidents avoided, uptime maintained, and budgets not exceeded. The second mandate is strategic: modernize the technology estate, enable new business capabilities, and position the enterprise to compete in an increasingly digital market. This mandate is measured by new capabilities delivered, transformation programs advanced, and business outcomes enabled. These mandates are in tension because the resources, risk appetite, and organizational focus required for transformation are exactly the resources that operational stability requires you to conserve.",
      },
      {
        heading: "How the tension typically resolves — and why it shouldn't",
        text: "In most enterprises, the tension resolves in favour of operational stability — because the consequences of operational failure are immediate, visible, and attributable. An outage produces a war room, board attention, and a review process. A transformation program that delivers six months late produces a revised timeline. The asymmetry in consequences means that CIOs who face resource constraints will consistently deprioritize transformation in favour of operations — which is often the individually rational decision and the collectively wrong one. The enterprises that fall furthest behind in technology capability are usually not the ones where CIOs made bad decisions. They're the ones where rational CIOs made consistent operational decisions in an environment where transformation was always the thing that could wait.",
      },
      {
        heading: "The organizational design that reduces the tension",
        text: "The most effective approach we've observed is organizational separation between the 'run' function and the 'change' function — not as a permanent structure, but as a resourcing and governance model. The run function has explicit ownership of operational metrics and operational budgets. The change function has explicit ownership of transformation programs and transformation budgets. The CIO governs both, but the two functions don't compete for the same resources or the same leadership attention in the same forums. This separation doesn't eliminate the tension — they will always compete for the same engineering talent — but it makes the competition visible and manageable rather than implicit and unresolvable.",
      },
      {
        heading: "The technology choices that reduce the underlying tension",
        text: "The technology choices that reduce the tension between stability and transformation are the ones that make the run function less resource-intensive. Managed services, automated operations, and platform infrastructure that requires less human intervention to maintain free up engineering capacity for transformation work. The CIOs who navigate the stability-transformation tension most effectively are the ones who invest in reducing the operational burden of the existing estate — not to cut headcount, but to redirect engineering capacity toward the transformation program. This is a multi-year investment with a non-linear return: the first year produces marginal capacity gains, the second and third years produce enough freed capacity to meaningfully accelerate transformation.",
      },
    ],
  },
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  try {
    const dbPost = await db.blogPost.findUnique({
      where: { slug, status: "published" },
      select: { title: true, excerpt: true },
    })
    if (dbPost) return { title: dbPost.title, description: dbPost.excerpt ?? undefined }
  } catch {
    // DB unavailable — use hardcoded metadata
  }

  const article = hardcodedArticles[slug]
  if (!article) return { title: "Not Found" }
  return { title: article.title, description: article.excerpt }
}

// Pre-render known slugs at build time; DB slugs are rendered on demand
export function generateStaticParams() {
  return Object.keys(hardcodedArticles).map((slug) => ({ slug }))
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params

  // ── 1. Try the database (published posts only) ─────────────────────────────
  let dbPost: Awaited<ReturnType<typeof db.blogPost.findUnique>> = null
  try {
    dbPost = await db.blogPost.findUnique({
      where: { slug, status: "published" },
    })
  } catch {
    // DB unavailable — fall through to hardcoded articles
  }

  if (dbPost) {
    const tags = JSON.parse(dbPost.tags || "[]") as string[]
    const category = tags[0] ?? "Insight"
    const publishedDate = dbPost.publishedAt
      ? new Date(dbPost.publishedAt).toLocaleDateString("en-CA", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : null

    return (
      <>
        <PageHero
          breadcrumbs={[{ label: "Insights", href: "/insights" }, { label: category }]}
          eyebrow={category}
          title={dbPost.title}
          variant="tinted"
        />

        <section className="bg-white py-16 dark:bg-background">
          <div className="container-enterprise">
            <div className="mx-auto max-w-2xl">
              <div className="mb-8 flex items-center gap-4 text-sm text-muted-foreground">
                {publishedDate && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {publishedDate}
                  </span>
                )}
              </div>

              {dbPost.excerpt && (
                <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                  {dbPost.excerpt}
                </p>
              )}

              <div className="prose-sm text-sm leading-relaxed text-foreground [&>p]:mb-4 whitespace-pre-wrap">
                {dbPost.content}
              </div>

              <div className="mt-10 border-t border-border pt-6">
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Insights
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Want early access to our thinking?"
          subtitle="Subscribe to receive new Aethon Core articles as they publish — practical guidance on technology, written by people who build it."
          primaryLabel="Get in touch"
          primaryHref="/contact"
          secondaryLabel="All insights"
          secondaryHref="/insights"
        />
      </>
    )
  }

  // ── 2. Fall back to hardcoded article ──────────────────────────────────────
  const article = hardcodedArticles[slug]
  if (!article) notFound()

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Insights", href: "/insights" }, { label: article.category }]}
        eyebrow={article.category}
        title={article.title}
        variant="tinted"
      />

      <section className="bg-white py-16 dark:bg-background">
        <div className="container-enterprise">
          <div className="mx-auto max-w-2xl">
            {/* Meta */}
            <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {article.date}
              </span>
              <span className="text-muted-foreground">by {article.author}</span>
            </div>

            {/* Excerpt / lede */}
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              {article.excerpt}
            </p>

            {/* Body */}
            <div className="space-y-8 border-t border-border pt-8">
              {article.body.map((block, i) => (
                <div key={i}>
                  {block.heading && (
                    <h2 className="mb-3 text-lg font-semibold text-foreground">
                      {block.heading}
                    </h2>
                  )}
                  <p className="text-sm leading-relaxed text-muted-foreground">{block.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 border-t border-border pt-6">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Insights
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want early access to our thinking?"
        subtitle="Subscribe to receive Aethon Core insights as they publish — practical, plain-language content on enterprise technology from people who build it."
        primaryLabel="Get in touch"
        primaryHref="/contact"
        secondaryLabel="All insights"
        secondaryHref="/insights"
      />
    </>
  )
}
