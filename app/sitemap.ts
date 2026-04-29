import { MetadataRoute } from "next"
import { db } from "@/lib/db"

const BASE_URL = "https://aethoncore.com"

const staticRoutes: {
  url: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
}[] = [
  { url: "/",                               priority: 1.0, changeFrequency: "weekly" },
  { url: "/about",                          priority: 0.9, changeFrequency: "monthly" },
  { url: "/about/leadership",              priority: 0.8, changeFrequency: "monthly" },
  { url: "/services",                       priority: 0.9, changeFrequency: "monthly" },
  { url: "/services/cloud",                priority: 0.8, changeFrequency: "monthly" },
  { url: "/services/security",             priority: 0.8, changeFrequency: "monthly" },
  { url: "/services/analytics",            priority: 0.7, changeFrequency: "monthly" },
  { url: "/services/network",              priority: 0.7, changeFrequency: "monthly" },
  { url: "/services/managed",              priority: 0.8, changeFrequency: "monthly" },
  { url: "/services/ai",                   priority: 0.7, changeFrequency: "monthly" },
  { url: "/services/iam",                  priority: 0.7, changeFrequency: "monthly" },
  { url: "/services/compliance",           priority: 0.7, changeFrequency: "monthly" },
  { url: "/services/disaster-recovery",    priority: 0.7, changeFrequency: "monthly" },
  { url: "/services/apps",                 priority: 0.7, changeFrequency: "monthly" },
  { url: "/services/web",                  priority: 0.7, changeFrequency: "monthly" },
  { url: "/services/reputation",           priority: 0.6, changeFrequency: "monthly" },
  { url: "/services/data-governance",      priority: 0.6, changeFrequency: "monthly" },
  { url: "/services/devops",               priority: 0.6, changeFrequency: "monthly" },
  { url: "/services/finops",               priority: 0.6, changeFrequency: "monthly" },
  { url: "/services/transformation",       priority: 0.6, changeFrequency: "monthly" },
  { url: "/services/assessment",           priority: 0.7, changeFrequency: "monthly" },
  { url: "/services/consulting",           priority: 0.7, changeFrequency: "monthly" },
  { url: "/services/architecture",         priority: 0.7, changeFrequency: "monthly" },
  { url: "/services/implementation",       priority: 0.7, changeFrequency: "monthly" },
  { url: "/services/training",             priority: 0.6, changeFrequency: "monthly" },
  { url: "/products",                      priority: 0.9, changeFrequency: "monthly" },
  { url: "/products/platform",             priority: 0.9, changeFrequency: "monthly" },
  { url: "/products/analytics",            priority: 0.8, changeFrequency: "monthly" },
  { url: "/products/security",             priority: 0.8, changeFrequency: "monthly" },
  { url: "/products/automation",           priority: 0.7, changeFrequency: "monthly" },
  { url: "/industries",                    priority: 0.8, changeFrequency: "monthly" },
  { url: "/industries/financial-services", priority: 0.8, changeFrequency: "monthly" },
  { url: "/industries/healthcare",         priority: 0.8, changeFrequency: "monthly" },
  { url: "/industries/manufacturing",      priority: 0.7, changeFrequency: "monthly" },
  { url: "/industries/retail",             priority: 0.7, changeFrequency: "monthly" },
  { url: "/industries/government",         priority: 0.7, changeFrequency: "monthly" },
  { url: "/industries/energy",             priority: 0.7, changeFrequency: "monthly" },
  { url: "/solutions",                     priority: 0.8, changeFrequency: "monthly" },
  { url: "/pricing",                       priority: 0.9, changeFrequency: "monthly" },
  { url: "/case-studies",                  priority: 0.8, changeFrequency: "weekly" },
  { url: "/insights",                      priority: 0.8, changeFrequency: "weekly" },
  { url: "/careers",                       priority: 0.7, changeFrequency: "weekly" },
  { url: "/contact",                       priority: 0.9, changeFrequency: "monthly" },
  { url: "/newsroom",                      priority: 0.6, changeFrequency: "weekly" },
  { url: "/partners",                      priority: 0.6, changeFrequency: "monthly" },
  { url: "/docs",                          priority: 0.7, changeFrequency: "weekly" },
  { url: "/events",                        priority: 0.7, changeFrequency: "weekly" },
  { url: "/resources",                     priority: 0.7, changeFrequency: "monthly" },
  { url: "/resources/white-papers",        priority: 0.6, changeFrequency: "monthly" },
  { url: "/status",                        priority: 0.5, changeFrequency: "always" },
  { url: "/legal/privacy",                priority: 0.3, changeFrequency: "yearly" },
  { url: "/legal/terms",                  priority: 0.3, changeFrequency: "yearly" },
  { url: "/legal/cookies",                priority: 0.3, changeFrequency: "yearly" },
  { url: "/legal/accessibility",          priority: 0.3, changeFrequency: "yearly" },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  let publishedPosts: { slug: string; publishedAt: Date | null; updatedAt: Date }[] = []
  let publishedProjects: { slug: string; publishedAt: Date | null; updatedAt: Date }[] = []

  try {
    ;[publishedPosts, publishedProjects] = await Promise.all([
      db.blogPost.findMany({
        where: { status: "published" },
        select: { slug: true, publishedAt: true, updatedAt: true },
        orderBy: { publishedAt: "desc" },
      }),
      db.project.findMany({
        where: { status: "published" },
        select: { slug: true, publishedAt: true, updatedAt: true },
        orderBy: { publishedAt: "desc" },
      }),
    ])
  } catch {
    // DB unavailable at build time — static routes still served
  }

  const hardcodedInsightSlugs = [
    "multi-cloud-resilience", "zero-trust-implementation", "enterprise-ai-data-layer",
    "cloud-cost-attribution", "transformation-vs-technology", "cio-stability-transformation",
  ]
  const hardcodedCaseStudySlugs = [
    "financial-multi-jurisdiction", "healthcare-zero-trust", "retail-analytics",
    "manufacturing-ot-security", "manufacturing-predictive-maintenance",
    "energy-grid-security", "financial-core-modernization", "financial-ai-compliance",
  ]
  const hardcodedWhitepaperSlugs = [
    "zero-trust-regulated-industries", "cloud-agnostic-architecture", "enterprise-ai-infrastructure",
    "iec-62443-live-environments", "fedramp-high-authorization",
    "infrastructure-consolidation", "mlops-enterprise-scale",
  ]

  const dbInsightSlugs = new Set(publishedPosts.map((p) => p.slug))
  const dbCaseStudySlugs = new Set(publishedProjects.map((p) => p.slug))

  const insightRoutes: MetadataRoute.Sitemap = [
    ...hardcodedInsightSlugs
      .filter((s) => !dbInsightSlugs.has(s))
      .map((slug) => ({ url: `${BASE_URL}/insights/${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...publishedPosts.map((post) => ({
      url: `${BASE_URL}/insights/${post.slug}`,
      lastModified: post.publishedAt ?? post.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]

  const caseStudyRoutes: MetadataRoute.Sitemap = [
    ...hardcodedCaseStudySlugs
      .filter((s) => !dbCaseStudySlugs.has(s))
      .map((slug) => ({ url: `${BASE_URL}/case-studies/${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.75 })),
    ...publishedProjects.map((project) => ({
      url: `${BASE_URL}/case-studies/${project.slug}`,
      lastModified: project.publishedAt ?? project.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ]

  const whitepaperRoutes: MetadataRoute.Sitemap = hardcodedWhitepaperSlugs.map((slug) => ({
    url: `${BASE_URL}/resources/white-papers/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ url, priority, changeFrequency }) => ({
      url: `${BASE_URL}${url}`,
      lastModified: now,
      changeFrequency,
      priority,
    })
  )

  return [...staticEntries, ...insightRoutes, ...caseStudyRoutes, ...whitepaperRoutes]
}
