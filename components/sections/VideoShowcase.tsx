"use client"

import * as React from "react"
import { X } from "lucide-react"
import { useIntersection } from "@/hooks/use-intersection"
import { cn } from "@/lib/utils"

interface VideoShowcaseProps {
  youtubeId?: string
  title?: string
  description?: string
}

export function VideoShowcase({
  youtubeId,
  title = "See the platform running in production",
  description = "4 minutes. A walkthrough of how the unified control plane manages compute, security, network, and data from a single interface.",
}: VideoShowcaseProps) {
  const { ref, isVisible } = useIntersection<HTMLDivElement>({ threshold: 0.4 })
  const [expanded, setExpanded] = React.useState(false)

  // Close on Escape
  React.useEffect(() => {
    if (!expanded) return
    const handler = (e: KeyboardEvent) => e.key === "Escape" && setExpanded(false)
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [expanded])

  return (
    <>
      <section id="platform-overview" className="bg-canvas py-20 lg:py-28">
        <div className="container-enterprise">
          {/* Header */}
          <div className="mb-12 flex flex-col items-center text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">
              Platform Overview
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-base text-canvas-muted">{description}</p>
          </div>

          {/* Frame */}
          <div ref={ref} className="relative mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/40">
              {/* Browser chrome */}
              <div className="flex h-9 items-center gap-2 border-b border-white/8 bg-white/[0.04] px-4">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <div className="flex h-5 w-64 items-center justify-center gap-1.5 rounded bg-white/[0.06] px-3 text-[10px] font-mono text-white/30">
                    <span className="text-emerald-500/70 text-[9px]">●</span>
                    console.aethoncore.com / infrastructure
                  </div>
                </div>
              </div>

              {/* Video / dashboard area */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                {youtubeId && isVisible ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                    title="Aethon Core Platform Overview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                ) : (
                  <LiveDashboard isAnimating={isVisible} />
                )}
              </div>
            </div>

            {/* Feature callouts */}
            <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/8 bg-white/8 sm:grid-cols-3">
              {[
                { label: "Full audit trail on every action", sub: "Who changed what, when, why — always queryable" },
                { label: "Rollback in under 60 seconds", sub: "Every change is versioned. One click to revert." },
                { label: "No staging environment required", sub: "Deploy direct from the control plane, safely" },
              ].map((item) => (
                <div key={item.label} className="bg-white/[0.03] px-5 py-4">
                  <p className="text-sm font-semibold text-white/80">{item.label}</p>
                  <p className="mt-1 text-xs text-canvas-muted">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expanded modal (for YouTube full-audio playback) */}
      {expanded && youtubeId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setExpanded(false)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="absolute -top-10 right-0 flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              aria-label="Close video"
            >
              <X className="h-4 w-4" />
              Close
            </button>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black" style={{ aspectRatio: "16/9" }}>
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title="Aethon Core Platform Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// ─── Live Dashboard ────────────────────────────────────────────────────────────

function useCounter(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = React.useState(0)
  const started = React.useRef(false)

  React.useEffect(() => {
    if (!active || started.current) return
    started.current = true
    const start = performance.now()
    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(ease * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target, duration])

  return value
}

const BAR_HEIGHTS = [28, 42, 38, 54, 67, 59, 73, 64, 82, 71, 89, 85]

interface LiveDashboardProps {
  isAnimating: boolean
}

function LiveDashboard({ isAnimating }: LiveDashboardProps) {
  const nodes = useCounter(12847, isAnimating, 1600)
  const rps = useCounter(284332, isAnimating, 1800)

  // Stagger the bar animation
  const [barsActive, setBarsActive] = React.useState(false)
  React.useEffect(() => {
    if (!isAnimating) return
    const t = setTimeout(() => setBarsActive(true), 300)
    return () => clearTimeout(t)
  }, [isAnimating])

  return (
    <div className="h-full w-full bg-brand p-4 sm:p-6 overflow-hidden">
      {/* Top bar */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-white/10">
            <span className="text-[8px] font-bold text-white">AC</span>
          </div>
          <span className="text-xs font-semibold text-white/60">Aethon Core Console</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-semibold text-emerald-400">
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full bg-emerald-400 transition-all duration-500",
                isAnimating && "animate-pulse",
              )}
            />
            All systems operational
          </span>
        </div>
      </div>

      {/* KPI row */}
      <div className="mb-4 grid grid-cols-4 gap-2 sm:gap-3">
        {[
          { label: "Active nodes", value: nodes.toLocaleString("en-US"), delta: "+42 today" },
          { label: "Requests/sec", value: rps.toLocaleString("en-US"), delta: "avg 30d" },
          { label: "Error rate", value: isAnimating ? "0.003%" : "0.000%", delta: "↓ 12% WoW" },
          { label: "Cost / request", value: isAnimating ? "$0.0000084" : "$0.000000", delta: "↓ 8% MoM" },
        ].map((k) => (
          <div key={k.label} className="rounded-lg bg-white/[0.06] p-2.5">
            <p className="text-[9px] text-white/30">{k.label}</p>
            <p className="font-mono text-sm font-semibold text-white tabular-nums sm:text-base">
              {k.value}
            </p>
            <p className="text-[9px] text-emerald-400/70">{k.delta}</p>
          </div>
        ))}
      </div>

      {/* Chart + sidebar */}
      <div className="flex gap-3">
        {/* Main chart */}
        <div className="flex-1 rounded-lg bg-white/[0.04] p-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[10px] font-semibold text-white/40">Request volume — 30 days</p>
            <p className="font-mono text-[10px] text-blue/60">↑ 18.4% MoM</p>
          </div>
          <div className="flex items-end gap-0.5 sm:gap-1" style={{ height: "80px" }}>
            {BAR_HEIGHTS.map((h, i) => (
              <div
                key={i}
                className={cn(
                  "flex-1 rounded-sm",
                  i === BAR_HEIGHTS.length - 1 ? "bg-blue/70" : "bg-blue/25",
                )}
                style={{
                  height: barsActive ? `${h}%` : "2%",
                  transition: `height ${400 + i * 60}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
                  transitionDelay: barsActive ? `${i * 40}ms` : "0ms",
                }}
              />
            ))}
          </div>
        </div>

        {/* Region sidebar */}
        <div className="hidden w-40 flex-col gap-2 sm:flex">
          {[
            { region: "US-East", pct: 38 },
            { region: "EU-West", pct: 27 },
            { region: "APAC", pct: 21 },
            { region: "US-West", pct: 14 },
          ].map((r, i) => (
            <div key={r.region} className="flex items-center gap-2 rounded-lg bg-white/[0.04] px-2.5 py-1.5">
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-colors duration-700",
                  isAnimating ? "bg-emerald-400" : "bg-white/20",
                )}
                style={{ transitionDelay: `${600 + i * 150}ms` }}
              />
              <span className="flex-1 text-[10px] text-white/50">{r.region}</span>
              <span
                className="font-mono text-[10px] font-semibold text-white/70 tabular-nums transition-all duration-700"
                style={{ opacity: isAnimating ? 1 : 0, transitionDelay: `${700 + i * 150}ms` }}
              >
                {r.pct}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scan line animation overlay */}
      {isAnimating && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)",
          }}
          aria-hidden="true"
        />
      )}
    </div>
  )
}
