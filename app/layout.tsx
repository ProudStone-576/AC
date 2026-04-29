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
    "enterprise infrastructure Canada",
    "managed infrastructure services Canada",
    "cloud infrastructure company Canada",
    "managed IT services Canada",
    "enterprise managed services",
    "Canadian infrastructure company",
    "cloud security Canada",
    "data infrastructure Canada",
    "enterprise network Canada",
    "managed cloud services",
    "Aethon Core",
    "infrastructure managed services Ontario",
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
                "@type": "Organization",
                "name": "Aethon Core Inc.",
                "alternateName": "Aethon Core",
                "url": "https://aethoncore.com",
                "logo": "https://aethoncore.com/logo.png",
                "description": "Canadian enterprise infrastructure company providing managed cloud, network, security, and data services.",
                "foundingDate": "2024",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "100 King Street West",
                  "addressLocality": "Toronto",
                  "addressRegion": "Ontario",
                  "postalCode": "M5X 1A9",
                  "addressCountry": "CA"
                },
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+1-800-238-4667",
                    "contactType": "customer service",
                    "areaServed": "CA",
                    "availableLanguage": "English"
                  },
                  {
                    "@type": "ContactPoint",
                    "telephone": "+1-800-238-4667",
                    "contactType": "sales",
                    "areaServed": ["CA", "US", "GB"],
                    "availableLanguage": "English"
                  }
                ],
                "sameAs": [
                  "https://linkedin.com/company/aethoncore",
                  "https://twitter.com/aethoncore"
                ],
                "areaServed": {
                  "@type": "Country",
                  "name": "Canada"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Aethon Core",
                "url": "https://aethoncore.com",
                "description": "Enterprise infrastructure managed services — cloud, security, network, and data.",
                "publisher": {
                  "@type": "Organization",
                  "name": "Aethon Core Inc."
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
