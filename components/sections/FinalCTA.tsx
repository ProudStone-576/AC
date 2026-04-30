"use client"

import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { company } from "@/lib/constants/company"
import { LiveDot } from "@/components/ui/LiveDot"
import { useIntersection } from "@/hooks/use-intersection"
import { cn } from "@/lib/utils"

export function FinalCTA() {
  const { ref, isVisible } = useIntersection<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section className="relative overflow-hidden bg-canvas-gradient py-24 lg:py-32">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />

      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, oklch(0.50 0.250 250), transparent 70%)" }}
        aria-hidden="true"
      />

      {/* ── Structural lines ── */}
      {/* Top rule */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.10) 20%, rgba(255,255,255,0.10) 80%, transparent 100%)" }} />
      {/* Bottom rule */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{ background: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.07) 20%, rgba(255,255,255,0.07) 80%, transparent 100%)" }} />
      {/* Left vertical */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-10 hidden w-px lg:block"
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.07) 15%, rgba(255,255,255,0.07) 85%, transparent 100%)" }} />
      {/* Right vertical */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-10 hidden w-px lg:block"
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.07) 15%, rgba(255,255,255,0.07) 85%, transparent 100%)" }} />
      {/* Top-left corner mark */}
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-10 hidden lg:block">
        <div className="absolute top-0 left-0 h-7 w-px bg-white/18" />
        <div className="absolute top-0 left-0 h-px w-7 bg-white/18" />
      </div>
      {/* Top-right corner mark */}
      <div aria-hidden="true" className="pointer-events-none absolute top-0 right-10 hidden lg:block">
        <div className="absolute top-0 right-0 h-7 w-px bg-white/18" />
        <div className="absolute top-0 right-0 h-px w-7 bg-white/18" />
      </div>
      {/* Bottom-left corner mark */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-10 hidden lg:block">
        <div className="absolute bottom-0 left-0 h-7 w-px bg-white/12" />
        <div className="absolute bottom-0 left-0 h-px w-7 bg-white/12" />
      </div>
      {/* Bottom-right corner mark */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-10 hidden lg:block">
        <div className="absolute bottom-0 right-0 h-7 w-px bg-white/12" />
        <div className="absolute bottom-0 right-0 h-px w-7 bg-white/12" />
      </div>
      {/* Vertical mid-section ticks at midpoint height */}
      <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-10 hidden h-px w-5 -translate-y-1/2 bg-white/10 lg:block" />
      <div aria-hidden="true" className="pointer-events-none absolute top-1/2 right-10 hidden h-px w-5 -translate-y-1/2 bg-white/10 lg:block" />

      <div className="container-enterprise relative">
        <div ref={ref} className="mx-auto max-w-3xl text-center">

          {/* Live badge */}
          <div
            className={cn("mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 animate-fade-up", isVisible && "is-visible")}
            style={{ transitionDelay: "0ms" }}
          >
            <LiveDot />
            <span className="text-xs text-canvas-muted">Engineers available now</span>
          </div>

          {/* Headline */}
          <h2
            className={cn("text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl animate-fade-up", isVisible && "is-visible")}
            style={{ transitionDelay: "80ms" }}
          >
            Ready to hand your IT to a team
            that actually owns it?
          </h2>

          <p
            className={cn("mt-6 text-lg text-canvas-muted animate-fade-up", isVisible && "is-visible")}
            style={{ transitionDelay: "180ms" }}
          >
            Speak with one of our engineers. We&apos;ll tell you honestly if we&apos;re a good fit — and what working with us would look like.
          </p>

          {/* CTAs */}
          <div
            className={cn("mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up", isVisible && "is-visible")}
            style={{ transitionDelay: "300ms" }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-blue px-6 py-3.5 text-sm font-semibold text-blue-foreground transition-colors hover:bg-blue-hover glow-blue"
            >
              Schedule a technical call
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 px-6 py-3.5 text-sm font-medium text-white/75 transition-colors hover:border-white/30 hover:text-white"
            >
              Read case studies first
            </Link>
          </div>

          {/* Direct contact */}
          <div
            className={cn("mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/8 pt-8 animate-fade-up", isVisible && "is-visible")}
            style={{ transitionDelay: "420ms" }}
          >
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 text-sm text-canvas-muted transition-colors hover:text-canvas-foreground"
            >
              <Mail className="h-4 w-4" />
              {company.email}
            </a>
          </div>

          {/* Trust line */}
          <p
            className={cn("mt-6 text-xs text-canvas-muted/50 animate-fade-up", isVisible && "is-visible")}
            style={{ transitionDelay: "520ms" }}
          >
            No commitment required. NDA available before the first call.
          </p>
        </div>
      </div>
    </section>
  )
}
