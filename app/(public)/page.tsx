import type { Metadata } from "next"

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
  title: "Aethon Core Inc. — Enterprise Infrastructure & Managed Services | Canada",
  description:
    "Canadian enterprise infrastructure company. We build and manage cloud, network, security, and data infrastructure for organizations that cannot afford downtime, breaches, or vendor lock-in. Serving enterprises across Canada and North America.",
  alternates: { canonical: "https://aethoncore.com" },
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

export default function HomePage() {
  return (
    <SpatialNarrativeEngine chapters={CHAPTERS}>

      {/* 01 — Signal: hero + trust marquee */}
      <SpatialChapter id="ch-hero">
        <HeroSection />
        <MarqueeStrip />
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
        <CinemaSection />
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
        <GlobeSection />
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
  )
}
