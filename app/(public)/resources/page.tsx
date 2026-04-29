import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, BookOpen, FileText, Lightbulb,
  Play, Download, Calendar, Users,
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Resources",
  description:
    "White papers, technical insights, case studies, events, and documentation from Aethon Core's engineering and security teams.",
}

const resourceTypes = [
  {
    icon: FileText,
    eyebrow: "White Papers",
    title: "In-depth guides on the hard problems",
    description:
      "Detailed guides on cloud architecture, security frameworks, compliance, and AI — written by the engineers and security experts who actually implement these programs.",
    count: "7 papers",
    cta: "Browse white papers",
    href: "/resources/white-papers",
    tags: ["Infrastructure Architecture", "Security & Compliance", "AI & Data", "Cloud Strategy"],
    featured: true,
  },
  {
    icon: Lightbulb,
    eyebrow: "Insights",
    title: "Clear thinking on technology",
    description:
      "Practical guidance and honest perspective on technology — written by the people building and running it for large organizations every day.",
    count: "6 articles",
    cta: "Read insights",
    href: "/insights",
    tags: ["Infrastructure", "Security", "AI & Data", "Cloud", "Leadership"],
    featured: false,
  },
  {
    icon: BookOpen,
    eyebrow: "Case Studies",
    title: "Real problems, real approaches",
    description:
      "Detailed accounts of how organizations in financial services, healthcare, government, and manufacturing solved their toughest technology challenges with Aethon Core.",
    count: "Client stories",
    cta: "View case studies",
    href: "/case-studies",
    tags: ["Financial Services", "Healthcare", "Government", "Manufacturing"],
    featured: false,
  },
  {
    icon: Download,
    eyebrow: "Documentation",
    title: "Technical reference for builders",
    description:
      "API reference, Terraform provider docs, SDK guides, and compliance implementation references — written by the engineers who built the platform.",
    count: "Early access",
    cta: "Explore docs",
    href: "/docs",
    tags: ["API Reference", "Terraform", "SDKs", "Compliance"],
    featured: false,
  },
  {
    icon: Calendar,
    eyebrow: "Events",
    title: "Live sessions and on-demand recordings",
    description:
      "Technology briefings, webinars, and executive roundtables — live and on-demand.",
    count: "Upcoming & on-demand",
    cta: "View events",
    href: "/events",
    tags: ["Live Events", "Webinars", "Executive Roundtables", "On-demand"],
    featured: false,
  },
  {
    icon: Play,
    eyebrow: "Newsroom",
    title: "Company news and announcements",
    description:
      "Product launches, partnership announcements, leadership commentary, and press coverage from Aethon Core.",
    count: "Latest news",
    cta: "Read newsroom",
    href: "/newsroom",
    tags: ["Press Releases", "Announcements", "Media Coverage"],
    featured: false,
  },
]

const featuredPapers = [
  {
    category: "Security & Compliance",
    title: "How to implement Zero Trust security in regulated industries — a practical guide",
    pages: "48 pages",
    published: "March 2026",
    href: "/resources/white-papers/zero-trust-regulated-industries",
  },
  {
    category: "AI & Data",
    title: "Why most enterprise AI projects fail before the AI is ever built",
    pages: "28 pages",
    published: "February 2026",
    href: "/resources/white-papers/enterprise-ai-infrastructure",
  },
  {
    category: "Cloud Strategy",
    title: "What it really takes to avoid being locked into one cloud provider",
    pages: "32 pages",
    published: "February 2026",
    href: "/resources/white-papers/cloud-agnostic-architecture",
  },
]

const featuredInsights = [
  {
    category: "Infrastructure",
    title: "Using multiple cloud providers doesn't automatically make your systems more reliable",
    readTime: "8 min read",
    href: "/insights/multi-cloud-resilience",
  },
  {
    category: "Security",
    title: "What it actually takes to build a Zero Trust security setup",
    readTime: "11 min read",
    href: "/insights/zero-trust-implementation",
  },
  {
    category: "AI & Data",
    title: "Most AI projects fail because of bad data pipelines, not bad AI models",
    readTime: "9 min read",
    href: "/insights/enterprise-ai-data-layer",
  },
]

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Resources" }]}
        eyebrow="Resources"
        title="Guides, articles, and reference material from people who build this"
        subtitle="White papers, insight articles, use cases, events, and documentation — everything your team needs to make better technology decisions."
        backgroundImageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=3840&q=100"
        variant="tinted"
      />

      {/* Resource type grid */}
      <section className="bg-white py-16 dark:bg-background lg:py-20">
        <div className="container-enterprise">
          <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-blue">All resources</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resourceTypes.map((type) => (
              <Link
                key={type.href}
                href={type.href}
                className={`group flex flex-col rounded-xl border p-6 transition-all hover:border-blue/30 hover:shadow-sm ${
                  type.featured
                    ? "border-blue/20 bg-blue-light dark:bg-card"
                    : "border-border bg-white dark:bg-card"
                }`}
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                    <type.icon className="h-5 w-5 text-blue" />
                  </div>
                  <span className="rounded-full bg-surface px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground dark:bg-muted">
                    {type.count}
                  </span>
                </div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-blue">
                  {type.eyebrow}
                </p>
                <h3 className="mb-3 text-base font-semibold text-foreground group-hover:text-blue transition-colors">
                  {type.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {type.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {type.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-surface px-2 py-0.5 text-[10px] font-medium text-foreground/60 dark:bg-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-blue">
                  {type.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured white papers */}
      <section className="bg-surface py-16 dark:bg-card lg:py-20">
        <div className="container-enterprise">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue">Latest research</p>
              <h2 className="text-2xl font-semibold text-foreground">Recent white papers</h2>
            </div>
            <Link
              href="/resources/white-papers"
              className="hidden items-center gap-1.5 text-sm font-medium text-blue hover:underline sm:inline-flex"
            >
              All white papers
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {featuredPapers.map((paper) => (
              <Link
                key={paper.href}
                href={paper.href}
                className="group flex flex-col rounded-xl border border-border bg-white p-5 transition-all hover:border-blue/30 hover:shadow-sm dark:bg-background"
              >
                <span className="mb-2 inline-flex w-fit rounded-full bg-blue-light px-2.5 py-1 text-[11px] font-semibold text-blue-light-foreground">
                  {paper.category}
                </span>
                <h3 className="mb-4 flex-1 text-sm font-semibold leading-snug text-foreground group-hover:text-blue transition-colors">
                  {paper.title}
                </h3>
                <div className="flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                  <span>{paper.published}</span>
                  <span className="flex items-center gap-1 font-medium text-blue">
                    <Download className="h-3 w-3" />
                    {paper.pages}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-5 sm:hidden">
            <Link
              href="/resources/white-papers"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue hover:underline"
            >
              All white papers
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured insights */}
      <section className="bg-white py-16 dark:bg-background lg:py-20">
        <div className="container-enterprise">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue">Practitioner thinking</p>
              <h2 className="text-2xl font-semibold text-foreground">Recent insights</h2>
            </div>
            <Link
              href="/insights"
              className="hidden items-center gap-1.5 text-sm font-medium text-blue hover:underline sm:inline-flex"
            >
              All insights
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {featuredInsights.map((insight) => (
              <Link
                key={insight.href}
                href={insight.href}
                className="group flex flex-col rounded-xl border border-border bg-white p-5 transition-all hover:border-blue/30 hover:shadow-sm dark:bg-card"
              >
                <span className="mb-2 inline-flex w-fit rounded-full bg-blue-light px-2.5 py-1 text-[11px] font-semibold text-blue-light-foreground">
                  {insight.category}
                </span>
                <h3 className="mb-4 flex-1 text-sm font-semibold leading-snug text-foreground group-hover:text-blue transition-colors">
                  {insight.title}
                </h3>
                <div className="flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    Aethon Core
                  </span>
                  <span>{insight.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-5 sm:hidden">
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue hover:underline"
            >
              All insights
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        variant="navy"
        title="Get our best content delivered monthly"
        subtitle="Practical technology guidance for business and technology leaders. No spam — only content worth reading."
        primaryLabel="Subscribe to the briefing"
        primaryHref="/contact?inquiry=newsletter"
        secondaryLabel="Browse all insights"
        secondaryHref="/insights"
      />
    </>
  )
}
