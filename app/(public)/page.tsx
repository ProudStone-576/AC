import type { Metadata } from "next"

import { HeroSection }         from "@/components/sections/HeroSection"
import { MarqueeStrip }        from "@/components/sections/MarqueeStrip"
import { ProblemSection }      from "@/components/sections/ProblemSection"
import { AnimatedMetrics }     from "@/components/sections/AnimatedMetrics"
import { CinemaSection }       from "@/components/sections/CinemaSection"
import { ServicesTabs }        from "@/components/sections/ServicesTabs"
import { SolutionsSection }    from "@/components/sections/SolutionsSection"
import { SelfDrivingSection }  from "@/components/sections/SelfDrivingSection"
import { VideoShowcase }       from "@/components/sections/VideoShowcase"
import { FeaturedCaseStudies } from "@/components/sections/FeaturedCaseStudies"
import { IndustriesSection }   from "@/components/sections/IndustriesSection"
import { InsightsPreview }     from "@/components/sections/InsightsPreview"
import { FinalCTA }            from "@/components/sections/FinalCTA"
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

/**
 * Narrative chapters — the story arc of the homepage.
 * The spatial engine uses these for the side navigator.
 * The order and labels define the narrative read.
 *
 *  01 · Signal     — who Aethon Core is (hero + trust strip)
 *  02 · Problem    — the real pain enterprises face
 *  03 · Scale      — proof of scope and precision
 *  04 · Capability — the depth of what we do
 *  05 · Platform   — the unified control plane
 *  06 · Automation — self-driving operations
 *  07 · In Action  — see the platform live
 *  08 · Results    — client outcomes
 *  09 · Industry   — "this was built for us"
 *  10 · Insight    — thought leadership
 *  FIN · Contact   — close the loop
 */
const CHAPTERS: NarrativeChapter[] = [
  { id: "ch-hero",         code: "01",  label: "Signal"     },
  { id: "ch-problem",      code: "02",  label: "Problem"    },
  { id: "ch-metrics",      code: "03",  label: "Scale"      },
  { id: "ch-services",     code: "04",  label: "Capability" },
  { id: "ch-solutions",    code: "05",  label: "Platform"   },
  { id: "ch-automation",   code: "06",  label: "Automation" },
  { id: "ch-video",        code: "07",  label: "In Action"  },
  { id: "ch-case-studies", code: "08",  label: "Results"    },
  { id: "ch-industries",   code: "09",  label: "Industry"   },
  { id: "ch-insights",     code: "10",  label: "Insight"    },
  { id: "ch-cta",          code: "FIN", label: "Contact"    },
]

export default function HomePage() {
  return (
    <SpatialNarrativeEngine chapters={CHAPTERS}>

      {/* 01 — Signal: hero + trust marquee + photo strip */}
      <SpatialChapter id="ch-hero">
        <HeroSection />
        <MarqueeStrip />
      </SpatialChapter>

      {/* 02 — Problem: name the real pain */}
      <SpatialChapter id="ch-problem">
        <ProblemSection />
      </SpatialChapter>

      {/* 03 — Scale: prove scope right after the problem */}
      <SpatialChapter id="ch-metrics">
        <AnimatedMetrics />
        <CinemaSection />
      </SpatialChapter>

      {/* 04 — Capability: show the depth of what we do */}
      <SpatialChapter id="ch-services">
        <ServicesTabs />
      </SpatialChapter>

      {/* 05 — Platform: the unified control plane products */}
      <SpatialChapter id="ch-solutions">
        <SolutionsSection />
      </SpatialChapter>

      {/* 06 — Automation: self-driving operations feature */}
      <SpatialChapter id="ch-automation">
        <SelfDrivingSection />
      </SpatialChapter>

      {/* 07 — In Action: 4-minute platform walkthrough */}
      <SpatialChapter id="ch-video">
        <VideoShowcase
          title="See the Aethon Core platform in action"
          description="A 4-minute walkthrough of the Aethon Core platform — see how one system manages your servers, security, network, and data whether you run in the cloud, on-site, or both."
        />
      </SpatialChapter>

      {/* 08 — Results: client outcomes and case studies */}
      <SpatialChapter id="ch-case-studies">
        <FeaturedCaseStudies />
      </SpatialChapter>

      {/* 09 — Industry: "this was built for organizations like ours" */}
      <SpatialChapter id="ch-industries">
        <IndustriesSection />
      </SpatialChapter>

      {/* 10 — Insight: thought leadership */}
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
