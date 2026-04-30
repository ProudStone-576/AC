import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { JsonLd } from "@/components/ui/JsonLd"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { FadeIn } from "@/components/ui/FadeIn"

const cities: Record<string, {
  name: string
  province: string
  provinceAbbr: string
  description: string
  population: string
  industries: string[]
}> = {
  toronto: {
    name: "Toronto",
    province: "Ontario",
    provinceAbbr: "ON",
    description: "Canada's largest city and financial hub",
    population: "2.9M",
    industries: ["Financial Services", "Healthcare", "Technology", "Manufacturing", "Government"],
  },
  vancouver: {
    name: "Vancouver",
    province: "British Columbia",
    provinceAbbr: "BC",
    description: "Canada's Pacific gateway and tech corridor",
    population: "675K",
    industries: ["Technology", "Film & Media", "Retail", "Healthcare", "Real Estate"],
  },
  calgary: {
    name: "Calgary",
    province: "Alberta",
    provinceAbbr: "AB",
    description: "Alberta's energy and business capital",
    population: "1.3M",
    industries: ["Energy & Utilities", "Financial Services", "Agriculture", "Manufacturing", "Government"],
  },
  edmonton: {
    name: "Edmonton",
    province: "Alberta",
    provinceAbbr: "AB",
    description: "Alberta's provincial capital and industrial hub",
    population: "1M",
    industries: ["Energy & Utilities", "Government", "Healthcare", "Manufacturing", "Retail"],
  },
  ottawa: {
    name: "Ottawa",
    province: "Ontario",
    provinceAbbr: "ON",
    description: "Canada's capital and federal government centre",
    population: "1M",
    industries: ["Government & Public Sector", "Technology", "Healthcare", "Education", "Defence"],
  },
  montreal: {
    name: "Montreal",
    province: "Quebec",
    provinceAbbr: "QC",
    description: "Quebec's economic and cultural capital",
    population: "2M",
    industries: ["Technology", "Financial Services", "Healthcare", "Aerospace", "Manufacturing"],
  },
  winnipeg: {
    name: "Winnipeg",
    province: "Manitoba",
    provinceAbbr: "MB",
    description: "Manitoba's capital and transport hub",
    population: "749K",
    industries: ["Manufacturing", "Agriculture", "Government", "Healthcare", "Retail"],
  },
  hamilton: {
    name: "Hamilton",
    province: "Ontario",
    provinceAbbr: "ON",
    description: "Ontario's steel city and growing tech hub",
    population: "580K",
    industries: ["Manufacturing", "Healthcare", "Education", "Technology", "Retail"],
  },
  "kitchener-waterloo": {
    name: "Kitchener-Waterloo",
    province: "Ontario",
    provinceAbbr: "ON",
    description: "Canada's technology triangle",
    population: "570K",
    industries: ["Technology", "Financial Services", "Manufacturing", "Education", "Healthcare"],
  },
  mississauga: {
    name: "Mississauga",
    province: "Ontario",
    provinceAbbr: "ON",
    description: "Ontario's second-largest city and business hub",
    population: "720K",
    industries: ["Financial Services", "Retail", "Manufacturing", "Healthcare", "Technology"],
  },
}

export async function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }))
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params
  const data = cities[city]
  if (!data) return {}

  const title = `Managed IT Services ${data.name} | 24/7 NOC & Cloud Support | Aethon Core`
  const description = `Managed IT services for businesses in ${data.name}, ${data.province}. 24/7 monitoring, cloud infrastructure, cybersecurity, and network support. Local and remote coverage with written SLAs.`

  return {
    title,
    description,
    keywords: [
      `managed IT services ${data.name}`,
      `IT services ${data.name}`,
      `IT support ${data.name}`,
      `managed service provider ${data.name}`,
      `cloud services ${data.name}`,
      `cybersecurity ${data.name}`,
      `IT company ${data.name}`,
      `managed IT services ${data.provinceAbbr}`,
      `IT outsourcing ${data.name}`,
      `24/7 IT support ${data.name}`,
    ],
    alternates: { canonical: `https://aethoncore.com/locations/${city}` },
    openGraph: {
      type: "website",
      locale: "en_CA",
      url: `https://aethoncore.com/locations/${city}`,
      siteName: "Aethon Core",
      title,
      description,
    },
  }
}

const services = [
  { name: "Managed IT Services", href: "/services/managed", desc: "24/7 monitoring, incident response, and day-to-day IT operations." },
  { name: "Cloud Infrastructure", href: "/services/cloud", desc: "AWS, Azure, and Google Cloud — designed, deployed, and managed." },
  { name: "Cybersecurity & MDR", href: "/services/security", desc: "24/7 Security Operations Centre and managed threat detection." },
  { name: "Network & Connectivity", href: "/services/network", desc: "Private networks, SD-WAN, and secure remote access." },
  { name: "Data & AI", href: "/services/analytics", desc: "Data pipelines, dashboards, and AI tools that work in production." },
  { name: "Compliance Support", href: "/services/compliance", desc: "SOC 2, ISO 27001, HIPAA, PCI DSS, and more." },
]

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params
  const data = cities[city]
  if (!data) notFound()

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "name": "Aethon Core Inc.",
    "url": `https://aethoncore.com/locations/${city}`,
    "description": `Managed IT services for businesses in ${data.name}, ${data.province}. Cloud, security, network, and data — fully managed with 24/7 coverage.`,
    "areaServed": [
      { "@type": "City", "name": data.name },
      { "@type": "AdministrativeArea", "name": data.province },
      { "@type": "Country", "name": "Canada" },
    ],
    "serviceType": "Managed IT Services",
    "priceRange": "$$",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@aethoncore.com",
      "contactType": "customer service",
      "areaServed": "CA",
    },
    "sameAs": [
      "https://linkedin.com/company/aethoncore",
      "https://twitter.com/aethoncore",
    ],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aethoncore.com" },
      { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://aethoncore.com/locations" },
      { "@type": "ListItem", "position": 3, "name": `Managed IT Services ${data.name}`, "item": `https://aethoncore.com/locations/${city}` },
    ],
  }

  return (
    <>
      <JsonLd schema={[localBusinessSchema, breadcrumbSchema]} />

      <PageHero
        breadcrumbs={[{ label: "Locations", href: "/locations" }, { label: data.name }]}
        eyebrow={`${data.name}, ${data.provinceAbbr}`}
        title={`Managed IT services for businesses in ${data.name}`}
        subtitle={`We provide cloud infrastructure, cybersecurity, network operations, and 24/7 IT support to businesses across ${data.name} and ${data.province}. Remote-first, with on-site capability when needed.`}
        variant="tinted"
        backgroundImageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=3840&q=100"
      />

      {/* Quick stats */}
      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-in">
            <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
              {[
                { value: "24/7", label: "Monitoring and incident response" },
                { value: "$799/mo", label: "Starting price for managed IT" },
                { value: "Remote", label: "Delivery model — no travel overhead" },
                { value: "Written", label: "SLA with real consequences if we fail" },
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

      {/* Services grid */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">What we do in {data.name}</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                IT services built for {data.name} businesses
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                {data.name} is home to {data.industries.slice(0, 3).join(", ")}, and other industries that depend on technology running without interruption. We manage it for you.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => (
              <FadeIn key={svc.name} variant="scale-up" delay={i * 60}>
                <Link
                  href={svc.href}
                  className="group flex flex-col rounded-xl border border-border bg-white p-6 transition-all hover:border-blue/30 hover:shadow-md dark:bg-card"
                >
                  <h3 className="mb-2 text-base font-semibold text-foreground group-hover:text-blue">{svc.name}</h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{svc.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue">
                    Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Industries in {data.name}</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                We know the sectors that drive {data.name}'s economy
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Different industries have different compliance requirements, risk profiles, and operational needs. We serve them all.
              </p>
            </div>
          </FadeIn>
          <FadeIn variant="fade-in">
            <div className="flex flex-wrap gap-3">
              {data.industries.map((ind) => (
                <span
                  key={ind}
                  className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground/80 dark:bg-card"
                >
                  {ind}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Aethon Core */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Why Aethon Core</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Why {data.name} businesses choose Aethon Core
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Written guarantees", body: "Every engagement includes a written SLA with defined response times and real remedies if we fall short. Not a verbal promise." },
              { title: "Real engineers", body: "You talk to engineers who know your systems — not a tier-1 support queue that has to look up your account." },
              { title: "Remote-first delivery", body: "We manage most environments fully remotely, keeping costs down without compromising on coverage or response time." },
              { title: "No vendor lock-in", body: "We work with the tools you already have and recommend what's genuinely best for your needs, not what earns us the most margin." },
              { title: "Transparent pricing", body: "Prices listed publicly on our website. No 'contact sales for pricing' — you know what you are paying before you sign." },
              { title: "Startup pricing", body: "We are a growing company — which means competitive prices, hungry service, and long-term relationships over short-term profit." },
            ].map((item, i) => (
              <FadeIn key={item.title} variant="scale-up" delay={i * 60}>
                <div className="rounded-xl border border-border bg-white p-6 dark:bg-card">
                  <div className="mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue" />
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to talk about IT support in ${data.name}?`}
        subtitle={`Tell us about your business, how many systems you run, and what keeps breaking. We will give you an honest recommendation and a real price.`}
        primaryLabel="Get a free quote"
        primaryHref={`/contact?location=${city}`}
        secondaryLabel="See our pricing"
        secondaryHref="/pricing"
      />
    </>
  )
}
