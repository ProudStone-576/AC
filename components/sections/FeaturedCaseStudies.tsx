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
    challenge: "A financial institution expanding across regulatory borders accumulates a separate infrastructure stack per jurisdiction. Compliance overhead grows with every new market, and the engineering team spends more time managing environments than building products.",
    outcome: "Our policy-first control plane enforces jurisdiction-specific rules at the governance layer — not the architecture layer. One deployment model adapts by policy. Compliance scales without duplicating infrastructure.",
    href: "/case-studies/financial-multi-jurisdiction",
    accentClass: "from-blue/50 to-blue/15",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=3840&q=100",
    imageAlt: "Financial district glass office towers",
  },
  {
    client: "Healthcare",
    industry: "Zero Trust Architecture",
    challenge: "A large health network operates with a security posture built around perimeter defense and audit checkboxes. The actual attack surface — lateral movement, credential exposure, unencrypted data paths — remains unaddressed by compliance exercises.",
    outcome: "We implement Zero Trust from the network layer up: no implicit trust, continuous verification, and encrypted data paths throughout. Security becomes an architectural property, not a policy document.",
    href: "/case-studies/healthcare-zero-trust",
    accentClass: "from-emerald-500/50 to-emerald-500/15",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=3840&q=100",
    imageAlt: "Cybersecurity network operations",
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
              subtitle="Enterprise infrastructure challenges follow recognizable patterns. Here's our honest thinking on the hard ones."
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
