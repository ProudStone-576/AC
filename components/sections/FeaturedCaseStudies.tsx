"use client"

import Image from "next/image"
import Link from "next/link"
import * as React from "react"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { FadeIn } from "@/components/ui/FadeIn"

const featured = [
  {
    client: "Financial Services",
    industry: "Multi-Jurisdiction Compliance",
    challenge: "A financial company growing into new countries was building a separate IT system for each one. Every new market added more compliance work, and the engineering team spent most of their time managing environments instead of building the product.",
    outcome: "We built one system that adjusts its rules based on where it is running. Instead of duplicating infrastructure for every country, the same setup adapts by policy. Compliance grows with the business, not against it.",
    href: "/case-studies/financial-multi-jurisdiction",
    accentClass: "from-blue/50 to-blue/15",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=3840&q=100",
    imageAlt: "Financial trading screens and market data",
  },
  {
    client: "Healthcare",
    industry: "Zero Trust Security",
    challenge: "A large hospital network had passed all its security audits, but the real risks — users accessing too much, data sent without encryption, attackers moving freely once inside — were never addressed by the compliance process.",
    outcome: "We rebuilt their security from the ground up. No one gets access they haven't earned. Every connection is verified. All data is encrypted. Security became part of how the system works, not a report on a shelf.",
    href: "/case-studies/healthcare-zero-trust",
    accentClass: "from-emerald-500/50 to-emerald-500/15",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=3840&q=100",
    imageAlt: "Modern healthcare technology environment",
  },
]

export function FeaturedCaseStudies() {
  return (
    <section className="bg-white py-20 dark:bg-background lg:py-24">
      <div className="container-enterprise">
        <FadeIn>
          <div className="mb-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="How We Think"
              title="How we approach real problems"
              subtitle="Real IT challenges follow familiar patterns. Here is how we think through the hard ones."
            />
            <Link
              href="/case-studies"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-blue transition-colors hover:text-blue-hover"
            >
              All case studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featured.map((cs, i) => (
            <FadeIn key={cs.href} delay={i * 100} variant={i === 0 ? "slide-left" : "slide-right"}>
              <Link
                href={cs.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border card-hover h-full"
              >
                {/* Photo header with 3D tilt */}
                <div
                  className="relative h-44 overflow-hidden"
                  style={{ perspective: "600px", transformStyle: "preserve-3d" }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const x = (e.clientX - rect.left) / rect.width - 0.5
                    const y = (e.clientY - rect.top) / rect.height - 0.5
                    e.currentTarget.style.transform = `perspective(600px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) scale(1.02)`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)"
                  }}
                >
                  <Image
                    src={cs.image}
                    alt={cs.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${cs.accentClass} mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <span className="mb-2 inline-block rounded-full border border-white/20 bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                      {cs.industry}
                    </span>
                    <p className="text-sm font-semibold text-white">{cs.client}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col gap-4 bg-white p-6 dark:bg-card">
                  <div>
                    <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      The Challenge
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{cs.challenge}</p>
                  </div>
                  <div>
                    <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Our Approach
                    </p>
                    <p className="text-sm leading-relaxed text-foreground/80">{cs.outcome}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-1.5 pt-2 text-sm font-medium text-blue">
                    Read our approach
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
