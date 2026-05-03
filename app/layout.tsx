import type { Metadata } from "next"
import Script from "next/script"

import "./globals.css"
import { cn } from "@/lib/utils"

const PLAUSIBLE_DOMAIN = process.env.PLAUSIBLE_DOMAIN

export const metadata: Metadata = {
  title: {
    default: "Aethon Core Inc. — Enterprise Infrastructure & Managed Services | Canada",
    template: "%s | Aethon Core",
  },
  description:
    "Aethon Core Inc. is a Canadian enterprise infrastructure company providing managed cloud, network, security, and data services to organizations that cannot afford downtime, breaches, or vendor lock-in.",
  keywords: [
    "managed IT services Canada",
    "managed IT services British Columbia",
    "enterprise infrastructure Canada",
    "managed infrastructure services Canada",
    "cloud infrastructure company Canada",
    "enterprise managed services",
    "managed service provider Canada",
    "IT outsourcing Canada",
    "Canadian infrastructure company",
    "cloud security Canada",
    "cybersecurity company Canada",
    "data infrastructure Canada",
    "enterprise network Canada",
    "managed cloud services",
    "Aethon Core",
    "infrastructure managed services Ontario",
    "enterprise IT services British Columbia",
    "managed services provider British Columbia",
    "cloud managed services Canada",
    "IT company British Columbia",
  ],
  authors: [{ name: "Aethon Core Inc." }],
  creator: "Aethon Core Inc.",
  publisher: "Aethon Core Inc.",
  metadataBase: new URL("https://aethoncore.com"),
  alternates: {
    canonical: "https://aethoncore.com",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://aethoncore.com",
    siteName: "Aethon Core",
    title: "Aethon Core Inc. — Enterprise Infrastructure & Managed Services | Canada",
    description:
      "Canadian enterprise infrastructure company. Cloud, network, security, and data — fully managed, contractually accountable.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@aethoncore",
    creator: "@aethoncore",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Set GOOGLE_SITE_VERIFICATION in your environment to activate
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased")}
    >
      <body className="flex min-h-screen flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": ["Organization", "ProfessionalService"],
                "name": "Aethon Core Inc.",
                "alternateName": ["Aethon Core", "AethonCore"],
                "url": "https://aethoncore.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://aethoncore.com/logo.png",
                  "width": 512,
                  "height": 512
                },
                "image": "https://aethoncore.com/opengraph-image",
                "description": "Canadian enterprise infrastructure company. Managed IT services, cloud infrastructure, cybersecurity, and network operations for organizations across Canada and North America. 24/7 NOC/SOC, contractual SLAs, zero vendor lock-in.",
                "foundingDate": "2024",
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "email": "contact@aethoncore.ca",
                    "contactType": "customer service",
                    "areaServed": ["CA", "US"],
                    "availableLanguage": "English"
                  },
                  {
                    "@type": "ContactPoint",
                    "email": "contact@aethoncore.ca",
                    "contactType": "sales",
                    "areaServed": ["CA", "US"],
                    "availableLanguage": "English"
                  }
                ],
                "sameAs": [
                  "https://linkedin.com/company/aethoncore",
                  "https://twitter.com/aethoncore"
                ],
                "areaServed": [
                  { "@type": "Country", "name": "Canada"        },
                  { "@type": "Country", "name": "United States" }
                ],
                "knowsAbout": [
                  "Managed IT Services",
                  "Cloud Infrastructure",
                  "Cybersecurity",
                  "Network Operations",
                  "Data Infrastructure",
                  "Zero Trust Security",
                  "Disaster Recovery",
                  "Compliance Management",
                  "DevOps",
                  "AI Infrastructure"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Enterprise IT Services",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Managed IT Services" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Infrastructure" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cybersecurity & MDR" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Network & Connectivity" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data & AI Infrastructure" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Disaster Recovery" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Compliance Management" } }
                  ]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Aethon Core",
                "url": "https://aethoncore.com",
                "description": "Enterprise managed IT services — cloud, security, network, and data. Serving Canada and North America.",
                "publisher": { "@type": "Organization", "name": "Aethon Core Inc." },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": { "@type": "EntryPoint", "urlTemplate": "https://aethoncore.com/search?q={search_term_string}" },
                  "query-input": "required name=search_term_string"
                }
              }
            ])
          }}
        />
        {children}

        {/* Plausible analytics — privacy-first, no cookie banner required.
            Set PLAUSIBLE_DOMAIN in env to activate (e.g. "aethoncore.com").
            Swap src for your self-hosted instance URL if preferred. */}
        {PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}
