"use client"

import * as React from "react"
import { ArrowRight } from "lucide-react"
import { useIntersection } from "@/hooks/use-intersection"
import { cn } from "@/lib/utils"

/* ─────────────────────────────────────────────────────────────────────────────
   3D Wireframe Icons
───────────────────────────────────────────────────────────────────────────── */

function CubeWireframe() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="h-14 w-14" aria-hidden="true">
      {/* Top face */}
      <path d="M32 8 L54 20 L32 32 L10 20 Z"
        stroke="rgba(255,255,255,0.20)" strokeWidth="1"
        fill="rgba(255,255,255,0.025)" />
      {/* Left face */}
      <path d="M10 20 L32 32 L32 56 L10 44 Z"
        stroke="rgba(255,255,255,0.10)" strokeWidth="1"
        fill="rgba(255,255,255,0.012)" />
      {/* Right face */}
      <path d="M54 20 L54 44 L32 56 L32 32 Z"
        stroke="rgba(255,255,255,0.15)" strokeWidth="1"
        fill="rgba(255,255,255,0.018)" />
      {/* Depth lines */}
      <line x1="10" y1="20" x2="10" y2="44" stroke="rgba(255,255,255,0.07)" strokeWidth="0.75" strokeDasharray="3 2" />
      <line x1="54" y1="20" x2="54" y2="44" stroke="rgba(255,255,255,0.07)" strokeWidth="0.75" strokeDasharray="3 2" />
      {/* Corner dots */}
      <circle cx="32" cy="8" r="1.8" fill="rgba(255,255,255,0.40)" />
      <circle cx="54" cy="20" r="1.4" fill="rgba(255,255,255,0.25)" />
      <circle cx="10" cy="20" r="1.4" fill="rgba(255,255,255,0.25)" />
      <circle cx="32" cy="56" r="1.4" fill="rgba(255,255,255,0.18)" />
      <circle cx="32" cy="32" r="1.2" fill="rgba(255,255,255,0.22)" />
    </svg>
  )
}

function HexWireframe() {
  const pts = (cx: number, cy: number, r: number) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 6
      return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`
    }).join(" ")

  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="h-14 w-14" aria-hidden="true">
      {/* Outer ring */}
      <polygon points={pts(32, 32, 27)}
        stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="none" />
      {/* Mid ring */}
      <polygon points={pts(32, 32, 18)}
        stroke="rgba(255,255,255,0.14)" strokeWidth="1"
        fill="rgba(255,255,255,0.018)" />
      {/* Inner ring */}
      <polygon points={pts(32, 32, 9)}
        stroke="rgba(255,255,255,0.24)" strokeWidth="1"
        fill="rgba(255,255,255,0.030)" />
      {/* Spokes from inner to mid */}
      {Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 3) * i - Math.PI / 6
        return (
          <line key={i}
            x1={(32 + 9 * Math.cos(a)).toFixed(1)}
            y1={(32 + 9 * Math.sin(a)).toFixed(1)}
            x2={(32 + 18 * Math.cos(a)).toFixed(1)}
            y2={(32 + 18 * Math.sin(a)).toFixed(1)}
            stroke="rgba(255,255,255,0.07)" strokeWidth="0.75" />
        )
      })}
      {/* Center */}
      <circle cx="32" cy="32" r="2" fill="rgba(255,255,255,0.30)" />
      {/* Outer corner dots */}
      {Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 3) * i - Math.PI / 6
        return <circle key={i}
          cx={(32 + 27 * Math.cos(a)).toFixed(1)}
          cy={(32 + 27 * Math.sin(a)).toFixed(1)}
          r="1.2" fill="rgba(255,255,255,0.14)" />
      })}
    </svg>
  )
}

function DiamondWireframe() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="h-14 w-14" aria-hidden="true">
      {/* Table top (flat face) */}
      <path d="M22 23 L42 23 L47 31 L17 31 Z"
        stroke="rgba(255,255,255,0.16)" strokeWidth="1"
        fill="rgba(255,255,255,0.022)" />
      {/* Crown left */}
      <path d="M32 10 L22 23 L17 31" stroke="rgba(255,255,255,0.20)" strokeWidth="1" fill="none" />
      {/* Crown right */}
      <path d="M32 10 L42 23 L47 31" stroke="rgba(255,255,255,0.20)" strokeWidth="1" fill="none" />
      {/* Crown center ridge */}
      <line x1="32" y1="10" x2="32" y2="23" stroke="rgba(255,255,255,0.10)" strokeWidth="0.75" />
      {/* Pavilion outer */}
      <path d="M17 31 L32 58 L47 31"
        stroke="rgba(255,255,255,0.15)" strokeWidth="1"
        fill="rgba(255,255,255,0.018)" />
      {/* Pavilion inner facets */}
      <line x1="17" y1="31" x2="27" y2="31" stroke="rgba(255,255,255,0.10)" strokeWidth="0.75" />
      <line x1="37" y1="31" x2="47" y2="31" stroke="rgba(255,255,255,0.10)" strokeWidth="0.75" />
      <line x1="27" y1="31" x2="32" y2="58" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
      <line x1="37" y1="31" x2="32" y2="58" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
      <line x1="32" y1="31" x2="32" y2="58" stroke="rgba(255,255,255,0.07)" strokeWidth="0.75" strokeDasharray="2 2" />
      {/* Key dots */}
      <circle cx="32" cy="10" r="2" fill="rgba(255,255,255,0.42)" />
      <circle cx="17" cy="31" r="1.3" fill="rgba(255,255,255,0.20)" />
      <circle cx="47" cy="31" r="1.3" fill="rgba(255,255,255,0.20)" />
      <circle cx="32" cy="58" r="1.5" fill="rgba(255,255,255,0.24)" />
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   Dashboard Mockup
───────────────────────────────────────────────────────────────────────────── */

const signals = [
  {
    color: "#22c55e",
    label: "Resolved",
    title: "Login security keys rotated",
    sub: "12 services updated · 0 failures",
    time: "just now",
    tags: ["#security", "#auto"],
  },
  {
    color: "#a78bfa",
    label: "Running",
    title: "Software dependency check completed",
    sub: "Staging environment · 3 tasks queued",
    time: "4 min ago",
    tags: ["#deploy"],
  },
  {
    color: "#facc15",
    label: "Review",
    title: "Storage usage at 87% of limit",
    sub: "Finance team · Enterprise plan",
    time: "11 min ago",
    tags: ["#billing"],
  },
  {
    color: "#60a5fa",
    label: "Queued",
    title: "Nightly data sync scheduled",
    sub: "All regions · runs at 02:00",
    time: "18 min ago",
    tags: ["#data", "#scheduled"],
  },
]

const columns = [
  {
    title: "Queued",
    count: 3,
    dot: "#6b7280",
    cards: [
      { tag: "Infra", tagColor: "#60a5fa", tagBg: "rgba(96,165,250,0.12)", title: "SSL certificate renewal", assign: ["JK", "TA"] },
      { tag: "Data", tagColor: "#a78bfa", tagBg: "rgba(167,139,250,0.12)", title: "Archive old log files", assign: ["MP"] },
    ],
  },
  {
    title: "Running",
    count: 4,
    dot: "#a78bfa",
    cards: [
      { tag: "Live", tagColor: "#22c55e", tagBg: "rgba(34,197,94,0.12)", title: "Alert summary sent to team", assign: ["TA", "JK"] },
      { tag: "Live", tagColor: "#22c55e", tagBg: "rgba(34,197,94,0.12)", title: "Performance report · last hour", assign: ["SR"] },
    ],
  },
  {
    title: "Done",
    count: 9,
    dot: "#22c55e",
    cards: [
      { tag: "Done", tagColor: "#6b7280", tagBg: "rgba(107,114,128,0.10)", title: "Security audit report exported", assign: ["MP", "TA"] },
      { tag: "Done", tagColor: "#6b7280", tagBg: "rgba(107,114,128,0.10)", title: "Disaster recovery drill completed", assign: ["JK"] },
    ],
  },
]

function DashboardMockup() {
  return (
    <div
      className="w-full overflow-hidden rounded-xl border"
      style={{ background: "#111111", borderColor: "#1e1e1e" }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ borderColor: "#1e1e1e", background: "#0f0f0f" }}
      >
        <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#2a2a2a" }} />
        <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#2a2a2a" }} />
        <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#2a2a2a" }} />
        <div
          className="ml-3 flex items-center gap-1.5 rounded px-2.5 py-0.5 text-[10px]"
          style={{ background: "#1a1a1a", color: "#555" }}
        >
          <span>app.aethoncore.com</span>
          <span style={{ color: "#333" }}>/operations</span>
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-[38%_62%]">

        {/* ── Left: Signal Stream ───────────────────────────── */}
        <div className="flex flex-col" style={{ borderRight: "1px solid #1e1e1e" }}>
          {/* Panel header */}
          <div className="flex items-center justify-between px-4 py-3 border-b"
            style={{ borderColor: "#1e1e1e" }}>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold" style={{ color: "#e5e5e5" }}>Signal Stream</span>
              <span
                className="flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-medium"
                style={{ background: "rgba(34,197,94,0.12)", color: "#22c55e" }}
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                Live
              </span>
            </div>
            <div className="flex items-center gap-1">
              {["All", "Open", "Auto"].map((f) => (
                <button
                  key={f}
                  className="rounded px-2 py-0.5 text-[9px] transition-colors"
                  style={{ color: f === "All" ? "#e5e5e5" : "#555", background: f === "All" ? "#222" : "transparent" }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Signal items */}
          <div className="flex flex-col">
            {signals.map((s) => (
              <div key={s.title} className="px-4 py-3 transition-colors hover:bg-white/[0.02]"
                style={{ borderBottom: "1px solid #1a1a1a" }}>
                <div className="flex items-start gap-2.5">
                  <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    style={{ background: s.color }} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-[11px] font-medium" style={{ color: "#e5e5e5" }}>
                        {s.title}
                      </p>
                      <span className="flex-shrink-0 text-[9px]" style={{ color: "#444" }}>{s.time}</span>
                    </div>
                    <p className="mt-0.5 text-[10px] leading-relaxed" style={{ color: "#666" }}>
                      {s.sub}
                    </p>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span
                        className="rounded px-1.5 py-0.5 text-[9px] font-medium"
                        style={{ background: `${s.color}18`, color: s.color }}
                      >
                        {s.label}
                      </span>
                      {s.tags.map((t) => (
                        <span key={t} className="text-[9px]" style={{ color: "#3a3a3a" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-4 py-2.5 border-t" style={{ borderColor: "#1a1a1a" }}>
            <span className="text-[9px]" style={{ color: "#3a3a3a" }}>
              Showing 4 of 31 active signals · Auto-resolving
            </span>
          </div>
        </div>

        {/* ── Right: Workflow Board ─────────────────────────── */}
        <div className="flex flex-col">
          {/* Panel header */}
          <div className="flex items-center justify-between px-4 py-3 border-b"
            style={{ borderColor: "#1e1e1e" }}>
            <span className="text-[11px] font-semibold" style={{ color: "#e5e5e5" }}>Automation Board</span>
            <div className="flex items-center gap-2">
              <button
                className="rounded border px-2 py-0.5 text-[9px] font-medium"
                style={{ borderColor: "#2a2a2a", color: "#888", background: "#161616" }}
              >
                + New Rule
              </button>
            </div>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-3 p-3 gap-2">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-2 px-2">
                {/* Col header */}
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ background: col.dot }} />
                  <span className="text-[10px] font-semibold uppercase tracking-wide"
                    style={{ color: "#666" }}>
                    {col.title}
                  </span>
                  <span
                    className="rounded px-1 text-[9px]"
                    style={{ background: "#1e1e1e", color: "#555" }}
                  >
                    {col.count}
                  </span>
                </div>

                {/* Cards */}
                {col.cards.map((card) => (
                  <div key={card.title}
                    className="rounded-lg border p-2.5 transition-colors hover:border-[#2a2a2a]"
                    style={{ background: "#161616", borderColor: "#1e1e1e" }}>
                    <span
                      className="mb-1.5 inline-block rounded px-1.5 py-0.5 text-[9px] font-semibold"
                      style={{ background: card.tagBg, color: card.tagColor }}
                    >
                      {card.tag}
                    </span>
                    <p className="text-[10px] font-medium leading-snug" style={{ color: "#d4d4d4" }}>
                      {card.title}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex -space-x-1">
                        {card.assign.map((a) => (
                          <div key={a}
                            className="flex h-4 w-4 items-center justify-center rounded-full border text-[7px] font-bold"
                            style={{ background: "#222", borderColor: "#111", color: "#666" }}>
                            {a[0]}
                          </div>
                        ))}
                      </div>
                      <div className="h-0.5 w-8 rounded-full" style={{ background: "#1e1e1e" }}>
                        <div className="h-full rounded-full"
                          style={{
                            width: col.title === "Done" ? "100%" : col.title === "Running" ? "55%" : "10%",
                            background: col.dot
                          }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom stats bar */}
          <div className="mt-auto flex items-center gap-4 border-t px-4 py-2.5"
            style={{ borderColor: "#1a1a1a" }}>
            {[
              { label: "Avg task time", value: "1.4s" },
              { label: "Success rate", value: "99.7%" },
              { label: "This week", value: "312 tasks" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-1.5">
                <span className="text-[9px]" style={{ color: "#444" }}>{s.label}</span>
                <span className="text-[10px] font-semibold" style={{ color: "#888" }}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   Main Section
───────────────────────────────────────────────────────────────────────────── */

const cards = [
  {
    Icon: CubeWireframe,
    label: "See everything in one place",
    desc: "Every server, device, and system you own — tracked in one dashboard, updated in real time.",
  },
  {
    Icon: HexWireframe,
    label: "Problems caught before they happen",
    desc: "We watch signals from over 200 sources. When something looks wrong, we flag it before it turns into an outage.",
  },
  {
    Icon: DiamondWireframe,
    label: "We fix it, not just flag it",
    desc: "When something goes wrong, the system fixes it automatically. An engineer steps in only if the situation needs a human decision.",
  },
]

export function SelfDrivingSection() {
  const { ref: cardsRef, isVisible: cardsVisible } = useIntersection<HTMLDivElement>({ threshold: 0.15 })
  const { ref: textRef, isVisible: textVisible } = useIntersection<HTMLDivElement>({ threshold: 0.2 })
  const { ref: dashRef, isVisible: dashVisible } = useIntersection<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section style={{ backgroundColor: "#0a0a0a" }} className="relative overflow-hidden py-20 lg:py-28">
      {/* ── Structural lines ── */}
      {/* Top full-bleed */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
      {/* Bottom full-bleed */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
      {/* Left vertical — fades in/out */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-10 hidden w-px lg:block"
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.06) 20%, rgba(255,255,255,0.06) 80%, transparent 100%)" }} />
      {/* Right vertical */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-10 hidden w-px lg:block"
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.06) 20%, rgba(255,255,255,0.06) 80%, transparent 100%)" }} />
      {/* Horizontal rule between the 3-card row and the text+mockup row */}
      <div aria-hidden="true" className="pointer-events-none absolute left-10 right-10"
        style={{ top: "calc(20px + 80px + 320px)", height: "1px", background: "rgba(255,255,255,0.05)" }} />
      {/* Top-left corner mark */}
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-10 hidden lg:block">
        <div className="absolute top-0 left-0 h-5 w-px" style={{ background: "rgba(255,255,255,0.16)" }} />
        <div className="absolute top-0 left-0 h-px w-5" style={{ background: "rgba(255,255,255,0.16)" }} />
      </div>
      {/* Top-right corner mark */}
      <div aria-hidden="true" className="pointer-events-none absolute top-0 right-10 hidden lg:block">
        <div className="absolute top-0 right-0 h-5 w-px" style={{ background: "rgba(255,255,255,0.16)" }} />
        <div className="absolute top-0 right-0 h-px w-5" style={{ background: "rgba(255,255,255,0.16)" }} />
      </div>
      {/* Bottom-left corner mark */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-10 hidden lg:block">
        <div className="absolute bottom-0 left-0 h-5 w-px" style={{ background: "rgba(255,255,255,0.12)" }} />
        <div className="absolute bottom-0 left-0 h-px w-5" style={{ background: "rgba(255,255,255,0.12)" }} />
      </div>
      {/* Bottom-right corner mark */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-10 hidden lg:block">
        <div className="absolute bottom-0 right-0 h-5 w-px" style={{ background: "rgba(255,255,255,0.12)" }} />
        <div className="absolute bottom-0 right-0 h-px w-5" style={{ background: "rgba(255,255,255,0.12)" }} />
      </div>

      <div className="container-enterprise">

        {/* ── Top: Feature cards — scale-up stagger ──────────── */}
        <div ref={cardsRef} className="grid grid-cols-1 gap-3 sm:grid-cols-3 mb-20">
          {cards.map(({ Icon, label, desc }, i) => (
            <div
              key={label}
              className={cn(
                "flex flex-col rounded-xl p-6 transition-colors animate-scale-up",
                cardsVisible && "is-visible",
              )}
              style={{
                background: "#111111",
                border: "1px solid #1a1a1a",
                transitionDelay: cardsVisible ? `${i * 100}ms` : "0ms",
              }}
            >
              <div className="mb-5">
                <Icon />
              </div>
              <p className="mb-1.5 text-sm font-semibold" style={{ color: "#f0f0f0" }}>
                {label}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Bottom: Text + Mockup ──────────────────────────── */}
        <div
          ref={textRef}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 mb-10"
        >
          {/* Left: headline — slides from left */}
          <div className={cn("animate-slide-left", textVisible && "is-visible")}>
            <h2
              className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
              style={{ color: "#f5f5f5" }}
            >
              We fix problems
              <br />
              <span style={{ color: "#f5f5f5" }}>before you notice them.</span>
            </h2>
          </div>

          {/* Right: body + link — slides from right */}
          <div
            className={cn("flex flex-col justify-center animate-slide-right", textVisible && "is-visible")}
            style={{ transitionDelay: "100ms" }}
          >
            <p className="text-base leading-relaxed" style={{ color: "#777" }}>
              Our platform watches your systems around the clock. It filters out noise, handles routine issues automatically, and only calls your team when something truly needs attention.
            </p>
            <a
              href="/products/platform"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: "#aaa" }}
            >
              See how the platform works
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* ── Mockup — scales in as a unit ──────────────────── */}
        <div
          ref={dashRef}
          className={cn("animate-scale-up", dashVisible && "is-visible")}
          style={{ transitionDelay: "50ms" }}
        >
          <DashboardMockup />
        </div>

      </div>
    </section>
  )
}
