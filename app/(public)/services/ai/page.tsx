import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, BarChart2, Brain, CheckCircle2,
  Database, Lock, Search, Shield, Zap
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { AiHeroVisual } from "@/components/ui/ServiceHeroVisuals"
import { CTASection } from "@/components/sections/CTASection"
import { FadeIn } from "@/components/ui/FadeIn"
import { FaqAccordion } from "@/components/ui/FaqAccordion"

const rightFor = [
  "You want AI working in actual business operations — not a demo or a side project",
  "You have large volumes of internal data that AI could work with, if it were properly organized",
  "You're spending money on AI tools and getting unreliable or inconsistent results",
  "Leadership is being asked about AI strategy and needs a credible, deliverable answer",
  "You're in a regulated industry where AI decisions need to be explainable and auditable",
]

const notRightFor = [
  "You need a consumer chatbot or basic automation — that's a much simpler project",
  "You want to run a quick experiment with no commitment to production — start smaller",
]

const faqs: { q: string; a: string }[] = [
  {
    q: "What is enterprise AI in practice?",
    a: "Enterprise AI means AI systems that are running in production, on real business data, producing outputs that people actually rely on — with monitoring, governance, and a way to fix things when they go wrong. It's the opposite of a demo: it has to work every day, not just when conditions are ideal.",
  },
  {
    q: "Do you build your own AI models?",
    a: "Sometimes. More often we deploy and fine-tune existing models — from providers like OpenAI, Anthropic, or open-source foundations — and build the data infrastructure and operational tooling around them. Whether we build custom models depends on your requirements, your data, and what the available models can already do.",
  },
  {
    q: "What happens to our data when you build AI systems?",
    a: "Your data stays in your infrastructure unless you choose otherwise. We design every system so your data doesn't leave your control — we don't send it to third-party APIs without your explicit direction. For regulated industries, we document the data flows and access controls before anything is built.",
  },
  {
    q: "We're in a regulated industry — can we use AI?",
    a: "Yes, but the governance requirements are real. Regulated industries need audit trails, explanations for decisions, bias monitoring, and documentation that satisfies examiners. We build those controls into the system from the start — which is different from building AI and adding compliance as an afterthought.",
  },
  {
    q: "Where do we start?",
    a: "We start with an AI readiness assessment — looking at your data, your infrastructure, and where the real blockers are. Most programs are blocked on data quality before they get anywhere near the AI itself. The assessment gives you a clear picture of what needs to be fixed first.",
  },
  {
    q: "How much does it cost?",
    a: "It depends heavily on the scope and the state of your data infrastructure. A simple RAG system on top of a clean document store is a different engagement from a production ML pipeline with governance for a regulated use case. The readiness assessment helps us scope accurately.",
  },
]

export const metadata: Metadata = {
  title: "Enterprise AI — Services",
  description:
    "We build AI that actually works in your business — not just demos. Data infrastructure, model deployment, and responsible AI governance for organizations at scale.",
}

const capabilities = [
  {
    icon: Database,
    title: "Data infrastructure for AI",
    description:
      "Most AI projects fail before the AI even runs — because the data feeding it is messy, poorly organized, or untracked. We build the data pipelines and storage your AI needs to work reliably. We fix the data foundation before touching the AI model.",
    note: "Includes: Data pipelines, feature storage, data lineage, quality checks",
  },
  {
    icon: Brain,
    title: "Deploying and running AI models",
    description:
      "We put AI models into production — with version control, the ability to roll back, testing infrastructure, and monitoring that catches when a model starts behaving differently from how it was designed.",
    note: "Works with: Kubernetes, SageMaker, Vertex AI, Azure ML, self-hosted",
  },
  {
    icon: Search,
    title: "AI that searches your internal documents",
    description:
      "We build systems that let your AI search and answer questions from your organization's own documents and data — with the same access controls your team already uses. Not everyone should see every document.",
    note: "Includes: Search infrastructure design, document chunking, access control integration",
  },
  {
    icon: Shield,
    title: "AI oversight and governance",
    description:
      "We set up the oversight frameworks that regulated industries need for AI — audit trails, bias checks, explanations of how decisions were made, and the documentation regulators ask for. Built before launch, not after something goes wrong.",
    note: "Frameworks: EU AI Act, NIST AI RMF, industry-specific requirements",
  },
  {
    icon: Lock,
    title: "AI security",
    description:
      "We secure your AI systems against the specific ways they can be attacked — including manipulating the prompts fed to them, extracting private data through their outputs, and tricking them into doing things they shouldn't. AI has different vulnerabilities than regular software, and we design for them.",
    note: "Controls: Prompt manipulation prevention, output filtering, private data detection",
  },
  {
    icon: Zap,
    title: "AI operations and maintenance",
    description:
      "We build the systems that keep your AI models working correctly over time — automated retraining, validation checks before new models go live, and monitoring that catches when a model's outputs start drifting from what's expected.",
    note: "Includes: Training pipelines, validation checks, drift monitoring, rollback capability",
  },
]

const aiStack = [
  {
    layer: "Data & Features",
    tools: ["Apache Kafka", "dbt", "Feast", "Tecton", "Snowflake", "Databricks", "Apache Spark"],
    note: "The foundation every model depends on",
  },
  {
    layer: "Model Training",
    tools: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "Amazon SageMaker", "Vertex AI"],
    note: "Framework-agnostic; we work with your existing tooling",
  },
  {
    layer: "Model Serving",
    tools: ["Triton Inference Server", "TorchServe", "vLLM", "Ollama", "BentoML", "Ray Serve"],
    note: "Optimized for your latency and cost targets",
  },
  {
    layer: "LLM & RAG",
    tools: ["LangChain", "LlamaIndex", "pgvector", "Pinecone", "Weaviate", "Qdrant", "OpenAI API", "Anthropic API"],
    note: "With access control enforced at the retrieval layer",
  },
  {
    layer: "AI Operations & Pipelines",
    tools: ["MLflow", "Weights & Biases", "Kubeflow", "Airflow", "Prefect", "DVC"],
    note: "Version-controlled, automated, auditable",
  },
  {
    layer: "Monitoring & Governance",
    tools: ["Evidently AI", "Arize AI", "WhyLabs", "Fiddler", "Great Expectations", "custom"],
    note: "Drift detection, bias monitoring, audit trails",
  },
]

const phases = [
  {
    phase: "AI readiness assessment",
    duration: "Week 1–2",
    description:
      "We look at your data, your existing tools, and how your organization works today — and identify the real blockers before any AI work starts. Usually those blockers are data quality problems, missing infrastructure, or governance gaps.",
    deliverable: "AI readiness report + list of blockers + recommended scope",
  },
  {
    phase: "Data and infrastructure foundation",
    duration: "Week 2–8",
    description:
      "We build the data infrastructure your AI needs — pipelines, storage, data lineage tracking, and access controls. We only start working on AI models after we're confident the data feeding them is reliable.",
    deliverable: "Working data foundation + data pipeline + quality checks",
  },
  {
    phase: "Building the first use case",
    duration: "Week 6–14",
    description:
      "We build, test, and deploy the first AI feature to a staging environment. We define how to measure whether it's working correctly and prepare the documentation needed before production launch.",
    deliverable: "Tested AI model + evaluation criteria + governance documentation",
  },
  {
    phase: "Production launch",
    duration: "Week 12–18",
    description:
      "The AI goes live with monitoring, alerts, and a tested rollback procedure. We document every step so your team owns the process — not just us.",
    deliverable: "Live AI model + monitoring dashboard + rollback procedure",
  },
  {
    phase: "Handoff to your team",
    duration: "Week 16–20",
    description:
      "We set up automated retraining, drift monitoring, and the day-to-day operational process your team will run. We train your team on how to maintain it, read the monitoring data, and escalate when something looks wrong.",
    deliverable: "Automated retraining + monitoring guide + team training",
  },
]

const useCases = [
  {
    industry: "Financial Services",
    title: "Deploying AI credit risk models in a regulated environment",
    challenge:
      "A bank wants to use AI to evaluate credit risk. The models work in research settings, but the underlying data is spread across three systems with inconsistent formatting and no tracking of where data came from. The compliance team won't approve anything for production unless every AI decision can be fully explained.",
    approach:
      "We built the data infrastructure first — organizing, connecting, and tracking all the data sources before touching the model. The deployed model includes a layer that generates a clear, structured explanation for every decision it makes. The compliance team received a full documentation package and audit trail before the production approval review.",
  },
  {
    industry: "Healthcare",
    title: "Building an internal AI assistant that respects patient privacy",
    challenge:
      "A hospital wants to give clinical staff an AI assistant that can search internal documents and answer questions. The challenge: a nurse shouldn't be able to access records outside their department, and the system needs to meet HIPAA requirements for privacy and auditability.",
    approach:
      "We built the search system so access controls are enforced before any documents are ever retrieved — the AI never sees records the user isn't authorized to access. Every search and retrieval is logged to an audit trail that satisfies HIPAA requirements for breach investigations.",
  },
]

export default function EnterpriseAIPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Enterprise AI" }]}
        eyebrow="Specialized"
        title="AI that works in your business, not just in a demo"
        subtitle="We build the data systems and infrastructure your AI needs to run reliably at scale. We always fix the data foundation first — because that's where most AI projects fail."
        variant="tinted"
        visual={<AiHeroVisual />}
      />

      {/* Stats strip */}
      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-in">
          <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
            {[
              { value: "Data first", label: "Foundation before model development" },
              { value: "Governed", label: "Audit trails and model cards included" },
              { value: "Access", label: "controlled retrieval in every RAG system" },
              { value: "AI Ops", label: "Retraining and drift monitoring built in" },
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
              End-to-end AI infrastructure for regulated environments
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Enterprise AI deployments fail for predictable reasons: bad data, no governance, and
              missing operational infrastructure. We address all three before the model is deployed.
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
              The full AI stack — from data to production monitoring
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              We work with all major AI and ML platforms. Technology selection follows your performance
              requirements, compliance constraints, and existing infrastructure — not our vendor preferences.
            </p>
          </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiStack.map((layer) => (
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
              From data readiness to production AI
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Most AI programs start with the model and work backwards. We start with the data infrastructure,
              build to production quality, then develop the model on a foundation that can support it.
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
              AI problems we're built to solve
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
        title="Ready to talk enterprise AI?"
        subtitle="Tell us what you're trying to build and where your data estate stands today. We'll assess readiness and scope an engagement that addresses the real blockers."
        primaryLabel="Talk to our AI team"
        primaryHref="/contact"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  )
}
