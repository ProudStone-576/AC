// ─────────────────────────────────────────────────────────────────────────────
// Shared type definitions
// ─────────────────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
  description?: string
  icon?: string
  badge?: string
}

export interface NavGroup {
  label: string
  items: NavItem[]
}

export interface NavSection {
  label: string
  href: string
  mega?: boolean
  groups?: NavGroup[]
  items?: NavItem[]
}

export interface MetricItem {
  value: string
  label: string
  suffix?: string
}

export interface ServiceItem {
  title: string
  description: string
  href: string
  icon: string
}

export interface SolutionItem {
  eyebrow: string
  title: string
  description: string
  features: string[]
  href: string
  image?: string
}

export interface IndustryItem {
  title: string
  description: string
  href: string
  icon: string
}

export interface TestimonialItem {
  quote: string
  author: string
  role: string
  company: string
  logo?: string
}

export interface InsightItem {
  category: string
  title: string
  excerpt: string
  date: string
  readTime: string
  href: string
  author: string
}

export interface CaseStudyItem {
  client: string
  industry: string
  title: string
  summary: string
  result: string
  href: string
}
