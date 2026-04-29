import type { Metadata } from "next"

const BASE = "https://aethoncore.com"
const ORG  = "Aethon Core Inc."

// ── Metadata helpers ──────────────────────────────────────────────────────────

export function serviceMetadata(opts: {
  title:       string
  description: string
  slug:        string
  keywords:    string[]
}): Metadata {
  const url = `${BASE}/services/${opts.slug}`
  return {
    title:       opts.title,
    description: opts.description,
    keywords:    opts.keywords,
    alternates:  { canonical: url },
    openGraph: {
      type:        "website",
      locale:      "en_CA",
      url,
      siteName:    "Aethon Core",
      title:       opts.title,
      description: opts.description,
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description },
  }
}

export function industryMetadata(opts: {
  title:       string
  description: string
  slug:        string
  keywords:    string[]
}): Metadata {
  const url = `${BASE}/industries/${opts.slug}`
  return {
    title:       opts.title,
    description: opts.description,
    keywords:    opts.keywords,
    alternates:  { canonical: url },
    openGraph: {
      type:        "website",
      locale:      "en_CA",
      url,
      siteName:    "Aethon Core",
      title:       opts.title,
      description: opts.description,
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description },
  }
}

export function pageMetadata(opts: {
  title:       string
  description: string
  path:        string
  keywords?:   string[]
}): Metadata {
  const url = `${BASE}${opts.path}`
  return {
    title:       opts.title,
    description: opts.description,
    keywords:    opts.keywords,
    alternates:  { canonical: url },
    openGraph: {
      type:        "website",
      locale:      "en_CA",
      url,
      siteName:    "Aethon Core",
      title:       opts.title,
      description: opts.description,
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description },
  }
}

// ── JSON-LD schema builders ───────────────────────────────────────────────────

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type":    "ListItem",
      position:   i + 1,
      name:       item.name,
      item:       item.url,
    })),
  }
}

export function serviceSchema(opts: {
  name:        string
  description: string
  url:         string
  keywords?:   string[]
}) {
  return {
    "@context":        "https://schema.org",
    "@type":           "Service",
    "name":            opts.name,
    "description":     opts.description,
    "url":             opts.url,
    "provider": {
      "@type":  "Organization",
      "name":   ORG,
      "url":    BASE,
      "logo":   `${BASE}/logo.png`,
    },
    "areaServed": [
      { "@type": "Country",  "name": "Canada"        },
      { "@type": "Country",  "name": "United States" },
    ],
    "serviceType":     opts.name,
    ...(opts.keywords?.length ? { "keywords": opts.keywords.join(", ") } : {}),
  }
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type":    "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type":          "Question",
      "name":           item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  }
}

export function articleSchema(opts: {
  title:       string
  description: string
  url:         string
  datePublished: string
  dateModified?: string
}) {
  return {
    "@context":       "https://schema.org",
    "@type":          "Article",
    "headline":       opts.title,
    "description":    opts.description,
    "url":            opts.url,
    "datePublished":  opts.datePublished,
    "dateModified":   opts.dateModified ?? opts.datePublished,
    "publisher": {
      "@type":  "Organization",
      "name":   ORG,
      "url":    BASE,
      "logo": { "@type": "ImageObject", "url": `${BASE}/logo.png` },
    },
    "author": { "@type": "Organization", "name": ORG },
  }
}
