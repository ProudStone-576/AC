import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, BookOpen,
  Shield, Layers, BarChart2, Cpu, Globe, Building
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "White Papers",
  description:
    "In-depth guides on cloud, security, AI, and compliance — written by the engineers and security experts who actually implement these programs.",
}

const categories = [
  "All topics",
  "Infrastructure Architecture",
  "Security & Compliance",
  "AI & Data",
  "Cloud Strategy",
  "OT Security",
  "Government",
]

const featuredPaper = {
  category: "Security & Compliance",
  title: "How to implement Zero Trust security in regulated industries — a practical guide",
  description:
    "Most Zero Trust security programs fail — not because the approach is wrong, but because the implementation doesn't account for how regulated industries actually operate. This guide covers the design patterns, control sequencing, and compliance mapping that make Zero Trust work in financial services, healthcare, and government, where generic guidance falls short.",
  pages: "48 pages",
  published: "March 2026",
  authors: ["Amara Osei, Principal Security Architect", "James Whitfield, CTO"],
  href: "/resources/white-papers/zero-trust-regulated-industries",
  topics: ["Zero Trust", "HIPAA", "PCI DSS", "FedRAMP", "NIST SP 800-207"],
}

const whitepapers = [
  {
    icon: Globe,
    category: "Cloud Strategy",
    title: "What it really takes to avoid being locked into one cloud provider",
    description:
      "Many multi-cloud strategies end up creating vendor lock-in in a different form. This paper defines what genuinely flexible cloud architecture requires — technically and organizationally.",
    pages: "32 pages",
    published: "February 2026",
    href: "/resources/white-papers/cloud-agnostic-architecture",
  },
  {
    icon: BarChart2,
    category: "AI & Data",
    title: "Why most enterprise AI projects fail before the AI is ever built",
    description:
      "Most AI projects stall before a model is trained. The root cause is almost always the data infrastructure, not the AI itself. This paper defines what your data foundation needs to look like for production AI to work.",
    pages: "28 pages",
    published: "February 2026",
    href: "/resources/white-papers/enterprise-ai-infrastructure",
  },
  {
    icon: Shield,
    category: "OT Security",
    title: "How to meet industrial security standards without halting operations",
    description:
      "The IEC 62443 standard provides the right framework for industrial cybersecurity. What it doesn't tell you is how to apply it to a factory or facility that cannot stop running while you implement it. This paper fills that gap.",
    pages: "36 pages",
    published: "January 2026",
    href: "/resources/white-papers/iec-62443-live-environments",
  },
  {
    icon: Building,
    category: "Government",
    title: "What FedRAMP High authorization actually involves and how to get ready for it",
    description:
      "FedRAMP High authorization takes 12–24 months and requires documentation most commercial providers have never produced. This paper walks through the process, common failure points, and how to start preparing.",
    pages: "44 pages",
    published: "January 2026",
    href: "/resources/white-papers/fedramp-high-authorization",
  },
  {
    icon: Layers,
    category: "Infrastructure Architecture",
    title: "How to consolidate your technology without the project taking twice as long as planned",
    description:
      "Most technology consolidation projects run over time because the sequencing is wrong. This paper covers the dependency-mapping approach and phased migration method that keeps risk manageable and timelines realistic.",
    pages: "38 pages",
    published: "December 2025",
    href: "/resources/white-papers/infrastructure-consolidation",
  },
  {
    icon: Cpu,
    category: "AI & Data",
    title: "How to keep AI models working reliably after they go live",
    description:
      "Getting an AI model to production is only half the challenge. Keeping it working correctly over time requires a specific set of operational systems — model versioning, data storage, deployment infrastructure, and drift detection. This paper covers all of them.",
    pages: "30 pages",
    published: "November 2025",
    href: "/resources/white-papers/mlops-enterprise-scale",
  },
]

export default function WhitePapersPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "White Papers" }]}
        eyebrow="White Papers"
        title="Deep guides written by the people who build this"
        subtitle="Detailed papers on cloud, security, compliance, and AI — written by the engineers and security experts who actually implement these programs."
        variant="tinted"
        backgroundImageSrc="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=3840&q=100"
      />

      {/* Category filter */}
      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise py-5">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className="rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted first:bg-brand first:text-brand-foreground first:border-brand dark:bg-card"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured paper */}
      <section className="bg-white py-16 dark:bg-background lg:py-20">
        <div className="container-enterprise">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-blue">Featured paper</p>
          <div className="grid grid-cols-1 gap-8 rounded-2xl border border-border bg-surface p-8 dark:bg-card lg:grid-cols-5 lg:gap-12 lg:p-12">
            <div className="lg:col-span-3">
              <span className="mb-4 inline-flex rounded-full bg-blue-light px-2.5 py-1 text-[11px] font-semibold text-blue-light-foreground">
                {featuredPaper.category}
              </span>
              <h2 className="mb-4 text-2xl font-semibold leading-snug text-foreground lg:text-3xl">
                {featuredPaper.title}
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {featuredPaper.description}
              </p>
              <div className="mb-6 flex flex-wrap gap-1.5">
                {featuredPaper.topics.map((topic) => (
                  <span key={topic} className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-foreground/70 dark:bg-muted">
                    {topic}
                  </span>
                ))}
              </div>
              <Link
                href={featuredPaper.href}
                className="inline-flex items-center gap-2 rounded-md bg-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-hover"
              >
                <BookOpen className="h-4 w-4" />
                Read paper
              </Link>
            </div>
            <div className="flex flex-col justify-between rounded-xl bg-brand p-6 text-white lg:col-span-2">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">Paper details</p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/50">Length</span>
                    <span className="font-medium text-white">{featuredPaper.pages}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Published</span>
                    <span className="font-medium text-white">{featuredPaper.published}</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-white/40">Authors</p>
                {featuredPaper.authors.map((author) => (
                  <p key={author} className="text-xs text-white/70">{author}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paper grid */}
      <section className="bg-surface py-16 dark:bg-card lg:py-20">
        <div className="container-enterprise">
          <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-blue">All white papers</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whitepapers.map((paper) => (
              <div
                key={paper.href}
                className="group flex flex-col rounded-xl border border-border bg-white p-6 dark:bg-background"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                    <paper.icon className="h-5 w-5 text-blue" />
                  </div>
                  <span className="rounded-full bg-surface px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground dark:bg-muted">
                    {paper.pages}
                  </span>
                </div>
                <span className="mb-2 inline-flex w-fit rounded-full bg-blue-light px-2.5 py-1 text-[11px] font-semibold text-blue-light-foreground">
                  {paper.category}
                </span>
                <h3 className="mb-3 flex-1 text-sm font-semibold leading-snug text-foreground">
                  {paper.title}
                </h3>
                <p className="mb-5 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                  {paper.description}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">{paper.published}</span>
                  <Link
                    href={paper.href}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-blue transition-colors hover:text-blue-hover"
                  >
                    <ArrowRight className="h-3 w-3" />
                    Read
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research briefing CTA */}
      <section className="bg-canvas py-16 lg:py-20">
        <div className="container-enterprise">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Stay current</p>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              New research published monthly
            </h2>
            <p className="mb-8 text-base text-canvas-muted">
              Our engineering and security teams publish new research each month. Subscribe to the technical briefing to receive it directly.
            </p>
            <Link
              href="/contact?inquiry=research"
              className="inline-flex items-center gap-2 rounded-md bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-hover"
            >
              Subscribe to research updates
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        variant="surface"
        title="Looking for research on a specific topic?"
        subtitle="Our team produces custom technical briefings for enterprise clients on topics specific to their infrastructure environment and compliance requirements."
        primaryLabel="Request a custom briefing"
        primaryHref="/contact"
        secondaryLabel="Browse all insights"
        secondaryHref="/insights"
      />
    </>
  )
}
