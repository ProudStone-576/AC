import type { Metadata } from "next"

import { JsonLd } from "@/components/ui/JsonLd"
import { HeroSection }           from "@/components/sections/HeroSection"
import { MarqueeStrip }          from "@/components/sections/MarqueeStrip"
import { ProblemSection }        from "@/components/sections/ProblemSection"
import { LiveTerminalSection }   from "@/components/sections/LiveTerminalSection"
import { AnimatedMetrics }       from "@/components/sections/AnimatedMetrics"
import { CinemaSection }         from "@/components/sections/CinemaSection"
import { ServicesTabs }          from "@/components/sections/ServicesTabs"
import { SolutionsSection }      from "@/components/sections/SolutionsSection"
import { SelfDrivingSection }    from "@/components/sections/SelfDrivingSection"
import { VideoShowcase }         from "@/components/sections/VideoShowcase"
import { FeaturedCaseStudies }   from "@/components/sections/FeaturedCaseStudies"
import { IndustriesSection }     from "@/components/sections/IndustriesSection"
import { GlobeSection }          from "@/components/sections/GlobeSection"
import { InsightsPreview }       from "@/components/sections/InsightsPreview"
import { FinalCTA }              from "@/components/sections/FinalCTA"
import {
  SpatialNarrativeEngine,
  SpatialChapter,
  type NarrativeChapter,
} from "@/components/ui/SpatialNarrativeEngine"

export const metadata: Metadata = {
  title: "Managed IT Services Canada | 24/7 NOC, Cloud & Security | Aethon Core",
  description: "Canada's managed IT services provider. Cloud, security, network, and data — fully managed with 24/7 NOC/SOC, written SLAs, and real engineers. British Columbia-based, serving businesses nationwide.",
  keywords: [
    "managed IT services Canada",
    "managed IT services British Columbia",
    "managed service provider Canada",
    "managed service provider British Columbia",
    "IT outsourcing Canada",
    "cloud managed services Canada",
    "cybersecurity company Canada",
    "NOC services Canada",
    "SOC services Canada",
    "24/7 IT support Canada",
    "enterprise IT services Canada",
    "Zero Trust security Canada",
    "IT company British Columbia Canada",
    "managed IT services Ontario",
    "IT support for businesses Canada",
  ],
  alternates: { canonical: "https://aethoncore.com" },
  openGraph: {
    type: "website", locale: "en_CA", url: "https://aethoncore.com",
    siteName: "Aethon Core",
    title: "Managed IT Services Canada | 24/7 NOC, Cloud & Security | Aethon Core",
    description: "Canada's managed IT services provider. Cloud, security, network, and data — fully managed with 24/7 NOC/SOC, written SLAs, and real engineers. British Columbia-based, serving businesses nationwide.",
  },
}

const CHAPTERS: NarrativeChapter[] = [
  { id: "ch-hero",         code: "01",  label: "Signal"      },
  { id: "ch-problem",      code: "02",  label: "Problem"     },
  { id: "ch-terminal",     code: "03",  label: "Resolution"  },
  { id: "ch-metrics",      code: "04",  label: "Scale"       },
  { id: "ch-services",     code: "05",  label: "Capability"  },
  { id: "ch-solutions",    code: "06",  label: "Platform"    },
  { id: "ch-automation",   code: "07",  label: "Automation"  },
  { id: "ch-video",        code: "08",  label: "In Action"   },
  { id: "ch-case-studies", code: "09",  label: "Results"     },
  { id: "ch-industries",   code: "10",  label: "Industry"    },
  { id: "ch-globe",        code: "11",  label: "Coverage"    },
  { id: "ch-insights",     code: "12",  label: "Insight"     },
  { id: "ch-cta",          code: "FIN", label: "Contact"     },
]

const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a managed IT services provider?",
      "acceptedAnswer": { "@type": "Answer", "text": "A managed IT services provider (MSP) monitors, manages, and maintains your technology on your behalf — covering servers, networks, security, cloud, and support. Aethon Core acts as your dedicated IT operations team with written SLAs and 24/7 coverage." }
    },
    {
      "@type": "Question",
      "name": "How much do managed IT services cost in Canada?",
      "acceptedAnswer": { "@type": "Answer", "text": "Aethon Core offers managed IT services starting from $799/month for smaller businesses, with plans scaling based on the number of systems, locations, and level of support required. See our full pricing at aethoncore.com/pricing." }
    },
    {
      "@type": "Question",
      "name": "Does Aethon Core provide IT services across Canada?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Aethon Core is based in British Columbia, Canada and provides managed IT services to businesses across Canada and North America, including cloud, security, network, and data services." }
    },
    {
      "@type": "Question",
      "name": "What industries does Aethon Core serve?",
      "acceptedAnswer": { "@type": "Answer", "text": "Aethon Core serves financial services, healthcare, manufacturing, retail, government, and energy companies across Canada. Each industry has specific compliance and operational requirements that we build into our service delivery." }
    },
    {
      "@type": "Question",
      "name": "What is included in managed IT services?",
      "acceptedAnswer": { "@type": "Answer", "text": "Managed IT services from Aethon Core include 24/7 monitoring and NOC coverage, incident response, patch management, cloud infrastructure management, cybersecurity and SOC services, network operations, help desk support, and monthly reporting — all under a single written contract." }
    },
    {
      "@type": "Question",
      "name": "What is the difference between NOC and SOC?",
      "acceptedAnswer": { "@type": "Answer", "text": "A NOC (Network Operations Centre) monitors infrastructure health and availability — servers, networks, and uptime. A SOC (Security Operations Centre) monitors for cyber threats, attacks, and unauthorized access. Aethon Core operates both 24/7 as part of our managed services." }
    },
  ]
}

export default function HomePage() {
  return (
    <>
    <JsonLd schema={homepageFaqSchema} />
    <SpatialNarrativeEngine chapters={CHAPTERS}>

      {/* 01 — Signal: hero + trust marquee */}
      <SpatialChapter id="ch-hero">
        <HeroSection />
        <div className="hidden sm:block">
          <MarqueeStrip />
        </div>
      </SpatialChapter>

      {/* 02 — Problem: name the real pain */}
      <SpatialChapter id="ch-problem">
        <ProblemSection />
      </SpatialChapter>

      {/* 03 — Resolution: auto-remediation terminal demo */}
      <SpatialChapter id="ch-terminal">
        <LiveTerminalSection />
      </SpatialChapter>

      {/* 04 — Scale: prove scope right after the problem */}
      <SpatialChapter id="ch-metrics">
        <AnimatedMetrics />
        <div className="hidden md:block">
          <CinemaSection />
        </div>
      </SpatialChapter>

      {/* 05 — Capability: show the depth of what we do */}
      <SpatialChapter id="ch-services">
        <ServicesTabs />
      </SpatialChapter>

      {/* 06 — Platform: the unified control plane products */}
      <SpatialChapter id="ch-solutions">
        <SolutionsSection />
      </SpatialChapter>

      {/* 07 — Automation: self-driving operations feature */}
      <SpatialChapter id="ch-automation">
        <SelfDrivingSection />
      </SpatialChapter>

      {/* 08 — In Action: 4-minute platform walkthrough */}
      <SpatialChapter id="ch-video">
        <VideoShowcase
          title="See the Aethon Core platform in action"
          description="A 4-minute walkthrough of the Aethon Core platform — see how one system manages your servers, security, network, and data whether you run in the cloud, on-site, or both."
        />
      </SpatialChapter>

      {/* 09 — Results: client outcomes and case studies */}
      <SpatialChapter id="ch-case-studies">
        <FeaturedCaseStudies />
      </SpatialChapter>

      {/* 10 — Industry: "this was built for organizations like ours" */}
      <SpatialChapter id="ch-industries">
        <IndustriesSection />
      </SpatialChapter>

      {/* 11 — Coverage: interactive globe showing global reach */}
      <SpatialChapter id="ch-globe">
        <div className="hidden md:block">
          <GlobeSection />
        </div>
      </SpatialChapter>

      {/* 12 — Insight: thought leadership */}
      <SpatialChapter id="ch-insights">
        <InsightsPreview />
      </SpatialChapter>

      {/* FIN — Contact: close the loop */}
      <SpatialChapter id="ch-cta">
        <FinalCTA />
      </SpatialChapter>

    </SpatialNarrativeEngine>
    </>
  )
}
