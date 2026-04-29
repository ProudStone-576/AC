import type { Metadata } from "next"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { insights } from "@/lib/constants/company"
import { db } from "@/lib/db"
import { InsightList } from "./_components/InsightList"

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical guidance and clear thinking on technology — written by the people who build and run it.",
}

const hardcodedInsights = [
  ...insights,
  {
    category: "Cloud",
    title: "Why most companies don't know what they're actually spending on cloud",
    excerpt:
      "Most large organizations underestimate their cloud bill by 30–60%. Not because of obvious waste, but because it's genuinely difficult to track which teams and systems are spending what. Here's a simple way to start making that visible.",
    date: "January 2026",
    readTime: "7 min read",
    href: "/insights/cloud-cost-attribution",
    author: "Aethon Core",
  },
  {
    category: "Digital Transformation",
    title: "Most digital transformation projects are really just technology projects in disguise",
    excerpt:
      "The majority of transformation initiatives fail — not because the technology didn't work, but because they were never really about changing how the organization operates. Here's why that distinction matters.",
    date: "December 2025",
    readTime: "11 min read",
    href: "/insights/transformation-vs-technology",
    author: "Aethon Core",
  },
  {
    category: "Leadership",
    title: "How technology leaders keep things running while also trying to modernize them",
    excerpt:
      "Technology leaders are expected to keep systems stable and drive major changes at the same time. These are genuinely conflicting goals. This piece looks at how the best ones manage both.",
    date: "November 2025",
    readTime: "9 min read",
    href: "/insights/cio-stability-transformation",
    author: "Aethon Core",
  },
]

export const dynamic = "force-dynamic"

export default async function InsightsPage() {
  let dbPosts: Awaited<ReturnType<typeof db.blogPost.findMany>> = []
  try {
    dbPosts = await db.blogPost.findMany({
      where: { status: "published" },
      orderBy: { publishedAt: "desc" },
      take: 20,
    })
  } catch {
    // DB unavailable — show hardcoded content only
  }

  const dbInsights = dbPosts.map((post) => {
    const tags: string[] = (() => { try { return JSON.parse(post.tags || "[]") } catch { return [] } })()
    return {
      category: tags[0] ?? "Insight",
      title: post.title,
      excerpt: post.excerpt ?? "",
      date: post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })
        : "",
      readTime: "",
      href: `/insights/${post.slug}`,
      author: "Aethon Core",
    }
  })

  const allInsights = [...dbInsights, ...hardcodedInsights]

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Insights" }]}
        eyebrow="Insights"
        title="Clear thinking on technology that actually matters"
        subtitle="Practical guidance and honest perspective — written by the people who build and run technology for large organizations every day."
        variant="tinted"
        backgroundImageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=3840&q=100"
      />

      <section className="bg-white py-16 dark:bg-background lg:py-20">
        <div className="container-enterprise">
          <InsightList insights={allInsights} />
        </div>
      </section>

      <CTASection
        variant="navy"
        title="Get Aethon Core insights delivered monthly"
        subtitle="Curated analysis for enterprise technology leaders. No spam. Unsubscribe anytime."
        primaryLabel="Subscribe to the briefing"
        primaryHref="/contact?inquiry=newsletter"
        secondaryLabel="Browse use cases"
        secondaryHref="/case-studies"
      />
    </>
  )
}
