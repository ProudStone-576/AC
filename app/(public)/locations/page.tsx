import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { JsonLd } from "@/components/ui/JsonLd"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { FadeIn } from "@/components/ui/FadeIn"

export const metadata: Metadata = {
  title: "Managed IT Services Locations Across Canada | Aethon Core",
  description: "Aethon Core provides managed IT services to businesses across Canada — Toronto, Vancouver, Calgary, Ottawa, Edmonton, Montreal, and more. Remote-first with on-site capability.",
  keywords: [
    "managed IT services Canada",
    "IT services across Canada",
    "managed service provider Canada",
    "IT support Canadian cities",
    "IT services Toronto Vancouver Calgary Ottawa",
  ],
  alternates: { canonical: "https://aethoncore.com/locations" },
  openGraph: {
    type: "website", locale: "en_CA", url: "https://aethoncore.com/locations",
    siteName: "Aethon Core",
    title: "Managed IT Services Locations Across Canada | Aethon Core",
    description: "Managed IT services to businesses across Canada — Toronto, Vancouver, Calgary, Ottawa, Edmonton, Montreal, and more.",
  },
}

const cities = [
  { slug: "toronto",           name: "Toronto",            province: "ON", desc: "Financial hub, largest city in Canada" },
  { slug: "vancouver",         name: "Vancouver",           province: "BC", desc: "Pacific gateway and tech corridor" },
  { slug: "calgary",           name: "Calgary",             province: "AB", desc: "Energy and business capital of Alberta" },
  { slug: "edmonton",          name: "Edmonton",            province: "AB", desc: "Provincial capital and industrial centre" },
  { slug: "ottawa",            name: "Ottawa",              province: "ON", desc: "Federal government and technology hub" },
  { slug: "montreal",          name: "Montreal",            province: "QC", desc: "Quebec's largest city and economic centre" },
  { slug: "winnipeg",          name: "Winnipeg",            province: "MB", desc: "Manitoba's capital and transport hub" },
  { slug: "hamilton",          name: "Hamilton",            province: "ON", desc: "Manufacturing and growing tech scene" },
  { slug: "kitchener-waterloo", name: "Kitchener-Waterloo", province: "ON", desc: "Canada's technology triangle" },
  { slug: "mississauga",       name: "Mississauga",         province: "ON", desc: "Ontario's second-largest city" },
]

export default function LocationsPage() {
  return (
    <>
      <JsonLd schema={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aethoncore.com" },
          { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://aethoncore.com/locations" },
        ],
      }} />

      <PageHero
        breadcrumbs={[{ label: "Locations" }]}
        eyebrow="Locations"
        title="Managed IT services for businesses across Canada"
        subtitle="Remote-first delivery means lower costs and faster response. We serve businesses in every major Canadian city — with on-site visits available when needed."
        variant="tinted"
        backgroundImageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=3840&q=100"
      />

      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Cities we serve</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Find managed IT services in your city
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                We work with businesses across Canada. Select your city to see local service details, industry coverage, and pricing.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city, i) => (
              <FadeIn key={city.slug} variant="scale-up" delay={i * 50}>
                <Link
                  href={`/locations/${city.slug}`}
                  className="group flex items-start justify-between rounded-xl border border-border bg-white p-6 transition-all hover:border-blue/30 hover:shadow-md dark:bg-card"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-semibold text-foreground group-hover:text-blue">{city.name}</h3>
                      <span className="rounded bg-blue-light px-1.5 py-0.5 text-[10px] font-semibold text-blue">{city.province}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{city.desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/40 mt-1 transition-transform group-hover:translate-x-0.5 group-hover:text-blue" />
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn variant="fade-up">
            <div className="mt-12 rounded-xl border border-border bg-surface p-8 dark:bg-card">
              <h3 className="mb-2 text-lg font-semibold text-foreground">Don't see your city?</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                We serve businesses across all of Canada. If your city is not listed, we can still help — our remote delivery model works anywhere with an internet connection.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue hover:text-blue-hover"
              >
                Get in touch <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Serving businesses across Canada since 2024"
        subtitle="Whether you are in a major city or a smaller market, we provide the same level of service — written SLAs, real engineers, and pricing that makes sense for a growing business."
        primaryLabel="Get a free quote"
        primaryHref="/contact"
        secondaryLabel="See pricing"
        secondaryHref="/pricing"
      />
    </>
  )
}
