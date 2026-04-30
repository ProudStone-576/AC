import { JsonLd } from "@/components/ui/JsonLd"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BarChart2, CheckCircle2, Layers, RefreshCw, Tag, Target, TrendingDown } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { FinOpsHeroVisual } from "@/components/ui/ServiceHeroVisuals"
import { CTASection } from "@/components/sections/CTASection"
import {
  ServiceOutcomeSection,
  ServicePhotoGrid,
  ServiceWalkthroughSection,
} from "@/components/sections/ServicePageAdditions"
import { FadeIn } from "@/components/ui/FadeIn"
import { FaqAccordion } from "@/components/ui/FaqAccordion"

const faqs = [
  {
    q: "What is FinOps in simple terms?",
    a: "It is the work of understanding cloud spend clearly, reducing waste, and helping engineering, finance, and operations teams make smarter cost decisions together.",
  },
  {
    q: "How soon can savings show up?",
    a: "Some quick wins — unused resources, obvious overprovisioning — can show up within weeks. Bigger improvements take longer because they need engineering changes or contract negotiations.",
  },
  {
    q: "Do you need access to our production systems?",
    a: "Usually no. We mainly need billing reports, usage data, and resource metadata. We do not need access to your application code or production databases.",
  },
  {
    q: "Is this just a dashboard project?",
    a: "No. Dashboards help people see the problem, but the real value is changing how spend is tracked, owned, and reviewed over time. We build the habits, not just the charts.",
  },
  {
    q: "We already use reserved instances. Can you still help?",
    a: "Yes. Many teams have reservations in place but have not reviewed whether they still match how systems are actually being used. There is often significant savings left to find.",
  },
  {
    q: "What if our cloud spend is spread across multiple providers?",
    a: "We work across AWS, Azure, and Google Cloud. Multi-cloud visibility is often where the biggest blind spots are, and a unified cost view is usually one of the first things we build.",
  },
]

export const metadata: Metadata = {
  title: "FinOps Services Canada | Cloud Cost Optimization | Aethon Core",
  description: "FinOps and cloud cost optimization for Canadian enterprises. Cloud spend visibility, cost allocation, rightsizing, and reserved capacity planning across AWS, Azure, and GCP. British Columbia & national.",
  keywords: [
    "FinOps Canada",
    "cloud cost optimization Canada",
    "cloud cost management Canada",
    "cloud spend Canada",
    "AWS cost optimization Canada",
    "Azure cost optimization Canada",
    "FinOps British Columbia",
    "cloud financial management Canada",
  ],
  alternates: { canonical: "https://aethoncore.com/services/finops" },
  openGraph: {
    type: "website", locale: "en_CA", url: "https://aethoncore.com/services/finops",
    siteName: "Aethon Core",
    title: "FinOps Services Canada | Cloud Cost Optimization | Aethon Core",
    description: "FinOps and cloud cost optimization for Canadian enterprises. Cloud spend visibility, cost allocation, rightsizing, and reserved capacity planning across AWS, Azure, and GCP. British Columbia & national.",
  },
}

const outcomes = [
  {
    title: "Clearer cloud bills",
    description:
      "You can see what teams, products, or systems are driving spend instead of receiving one blurry invoice that nobody owns. Finance and engineering look at the same numbers.",
  },
  {
    title: "Less waste",
    description:
      "Unused resources, oversized systems, and poor purchasing choices become easier to spot and fix. Most organizations find 15–30% in savings within the first few months.",
  },
  {
    title: "Better financial decisions",
    description:
      "Engineering, finance, and operations can make cost decisions together with a shared picture of the facts — not guesswork or finger-pointing.",
  },
]

const photoCards = [
  {
    title: "Cloud cost explained in plain English",
    description:
      "Leaders should not need to decode a 300-line billing report just to understand what changed this month. We make the numbers readable for everyone.",
    imageSrc:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Finance team reviewing charts and billing data on laptop",
  },
  {
    title: "Better cost ownership across every team",
    description:
      "When teams can see the cost impact of their decisions in real time, they make better choices. Shared accountability changes behavior faster than any policy.",
    imageSrc:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Aerial city at night representing scale of enterprise cloud infrastructure",
  },
  {
    title: "Savings that last beyond month one",
    description:
      "A one-time cleanup is not enough. We help teams build the monthly rhythm and governance that keeps cloud cost under control as the business grows.",
    imageSrc:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Dark data center corridor representing infrastructure cost at scale",
  },
]

const capabilities = [
  {
    icon: Tag,
    title: "Tagging and cost attribution",
    description:
      "We make it easy to see which team, product, or environment is responsible for which spend. No more mystery invoices.",
    note: "Better attribution and accountability",
  },
  {
    icon: BarChart2,
    title: "Cost visibility and reporting",
    description:
      "We build a clear picture of where cloud money is going, what has changed, and what is trending in the wrong direction.",
    note: "Readable reports for leaders and engineers alike",
  },
  {
    icon: TrendingDown,
    title: "Optimization and waste reduction",
    description:
      "We find unused resources, oversized systems, and easy savings that do not hurt performance. Then we help fix them in a planned way.",
    note: "Targeted savings, not random cuts",
  },
  {
    icon: Target,
    title: "Commitment and reservation strategy",
    description:
      "We help teams decide when to buy reserved capacity or savings plans — and how to match those commitments to how systems actually run.",
    note: "Better use of discounts and commitments",
  },
  {
    icon: Layers,
    title: "Cross-team operating model",
    description:
      "We help finance, engineering, and operations work from the same cost picture and agree on who owns what. Shared dashboards. Clear escalations.",
    note: "Shared cost ownership that actually sticks",
  },
  {
    icon: RefreshCw,
    title: "Ongoing governance and review",
    description:
      "We set up a regular review process so cloud cost keeps improving over time instead of being fixed once and forgotten.",
    note: "Monthly rhythm for cost improvement",
  },
]

const savingsOpportunities = [
  {
    category: "Quick wins (weeks)",
    examples: "Unused resources, stopped but not deleted volumes, dev environments running on weekends",
    typical: "5–10% of total spend",
  },
  {
    category: "Optimization (1–3 months)",
    examples: "Oversized instances, unattached load balancers, inefficient storage classes",
    typical: "10–20% of total spend",
  },
  {
    category: "Reservations and commitments (1–6 months)",
    examples: "Moving stable workloads to reserved instances or savings plans",
    typical: "Up to 40–60% on eligible compute",
  },
  {
    category: "Architecture changes (3–12 months)",
    examples: "Serverless migration, data tier optimization, cross-region consolidation",
    typical: "20–40% on targeted workloads",
  },
]

const rightFor = [
  "Your cloud bill has grown faster than your team or revenue has",
  "Finance and engineering are not looking at the same cost numbers",
  "You have no clear view of which systems or teams are driving the biggest cost",
  "You have reserved capacity that no longer matches how you actually run systems",
  "Cloud cost is becoming a topic at board or executive level",
]

const notRightFor = [
  "You are very early stage and your cloud spend is under a few thousand dollars a month",
  "You only want a one-time report and are not interested in building ongoing cost practices",
]

const walkthroughItems = [
  {
    title: "Where your money is really going",
    description:
      "We show what is clearly attributed, what is hidden, and where you have the least visibility into cost.",
  },
  {
    title: "What savings are realistic for your environment",
    description:
      "You will see the difference between quick cleanup, deeper optimization, and longer-term architectural changes — and what each is actually worth.",
  },
  {
    title: "How to make savings stick",
    description:
      "We explain the habits, policies, and reporting that help teams avoid sliding backward after the initial work is done.",
  },
]

export default function FinOpsPage() {
  return (
    <>
      <JsonLd schema={[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://aethoncore.com"},{"@type":"ListItem","position":2,"name":"Services","item":"https://aethoncore.com/services"},{"@type":"ListItem","position":3,"name":"FinOps","item":"https://aethoncore.com/services/finops"}]},{"@context":"https://schema.org","@type":"Service","name":"FinOps","url":"https://aethoncore.com/services/finops","provider":{"@type":"Organization","name":"Aethon Core Inc.","url":"https://aethoncore.com"},"areaServed":[{"@type":"Country","name":"Canada"},{"@type":"Country","name":"United States"}],"serviceType":"FinOps"}]} />
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "FinOps & Cloud Cost Management" }]}
        eyebrow="Specialized"
        title="Understand your cloud spend and cut waste without slowing the business down"
        subtitle="We help teams see where cloud money is going, reduce the parts that are wasteful, and build better cost habits over time — so the bill never catches leadership off guard again."
        variant="tinted"
        visual={<FinOpsHeroVisual />}
      />

      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-in">
            <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
              {[
                { value: "15–30%", label: "Typical savings found in first 90 days" },
                { value: "3+", label: "Cloud platforms in one unified view" },
                { value: "Clear", label: "Cost ownership per team and product" },
                { value: "Monthly", label: "Governance rhythm to keep savings" },
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

      <ServiceOutcomeSection
        title="FinOps should make cloud cost easier to explain — and easier to control"
        intro="The goal is not just saving money. It is helping teams understand what they are spending, why they are spending it, and what should change next. Finance stops guessing. Engineering stops being blamed for things they cannot see."
        outcomes={outcomes}
      />

      <ServicePhotoGrid
        title="What better cloud cost management looks like in practice"
        intro="Good FinOps creates clearer ownership, readable reporting, and more confidence in the numbers — for everyone from the CFO to the engineer who just deployed a new service."
        photos={photoCards}
      />

      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">What we do</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                The work behind clearer, more controlled cloud spend
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Each of these capabilities addresses a real gap between what cloud providers charge and what organizations actually understand about their bill.
              </p>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:border-blue/20 hover:shadow-md dark:bg-card"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                    <cap.icon className="h-5 w-5 text-blue" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">{cap.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
                  <p className="text-xs font-semibold text-blue/80">{cap.note}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Where savings come from</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                What to realistically expect at each stage
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Cloud savings are not a one-time event. They come in layers. Here is a realistic picture of what each stage delivers and how long it takes.
              </p>
            </div>
          </FadeIn>
          <FadeIn variant="fade-in">
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-surface dark:bg-muted">
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">Stage</th>
                    <th className="hidden px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:table-cell">Examples of what gets fixed</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">Typical saving</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {savingsOpportunities.map((row, index) => (
                    <tr key={row.category} className={index % 2 === 0 ? "bg-white dark:bg-card" : "bg-surface dark:bg-background"}>
                      <td className="px-6 py-3.5 text-sm font-semibold text-foreground/80">{row.category}</td>
                      <td className="hidden px-6 py-3.5 text-sm text-muted-foreground sm:table-cell">{row.examples}</td>
                      <td className="px-6 py-3.5 text-sm font-semibold text-blue">{row.typical}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      <ServiceWalkthroughSection
        title="Want a walkthrough of your cloud cost picture?"
        description="We can review where your current visibility is weak, where the best savings are likely to come from, and how to build a cost process that works for your organization."
        items={walkthroughItems}
        primaryHref="/contact?inquiry=finops"
        secondaryHref="/services"
        secondaryLabel="See all services"
      />

      <section className="bg-canvas py-20 lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="blur-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Is this the right fit?</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                FinOps works best when cloud spend is already a real concern
              </h2>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-8">
                <p className="mb-4 text-sm font-semibold text-white">This is a good fit if:</p>
                <ul className="space-y-3">
                  {rightFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-canvas-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-8">
                <p className="mb-4 text-sm font-semibold text-white">You may want a different starting point if:</p>
                <ul className="space-y-3">
                  {notRightFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-canvas-muted">
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-canvas-muted/50" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors hover:text-blue-hover">
                    Not sure where to start? Talk to us first.
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Common questions</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Questions teams ask before starting FinOps work
              </h2>
            </div>
          </FadeIn>
          <FadeIn variant="fade-in">
            <FaqAccordion faqs={faqs} />
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Need a clearer view of your cloud costs?"
        subtitle="Tell us what your bills look like today and where you feel uncertain. We will help you understand what is fixable and what is worth tackling first — with real numbers, not guesses."
        primaryLabel="Request a walkthrough"
        primaryHref="/contact?inquiry=finops"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  )
}
