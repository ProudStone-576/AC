import Link from "next/link"
import { ArrowRight, CirclePlay } from "lucide-react"
import { LiveDot } from "@/components/ui/LiveDot"
import { HeroSubtitleAnimated } from "@/components/sections/HeroSubtitleAnimated"
import { NetworkBackground } from "@/components/ui/NetworkBackground"

// ─── Word delays ─────────────────────────────────────────────────────────────
// Line 1: "Managed IT services"        → words 0-2 starting at 60ms
// Line 2: "delivered end-to-end"       → words 3-5 starting at 240ms
// Line 3: whole line, one unit         → starts at 420ms → glitch at 1100ms
const LINE1 = ["Managed", "IT", "services"] as const
const LINE2 = ["delivered", "end-to-end"] as const
const WORD_STEP = 68 // ms between each word

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-canvas-gradient">
      <NetworkBackground />
      <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />

      {/* ── Structural lines ── */}
      {/* Left vertical rule */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-8 hidden w-px lg:block"
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.07) 15%, rgba(255,255,255,0.07) 85%, transparent 100%)" }} />
      {/* Right vertical rule */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-8 hidden w-px lg:block"
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.07) 15%, rgba(255,255,255,0.07) 85%, transparent 100%)" }} />
      {/* Bottom horizontal rule */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.10) 20%, rgba(255,255,255,0.10) 80%, transparent 100%)" }} />
      {/* Top-left corner mark */}
      <div aria-hidden="true" className="pointer-events-none absolute top-8 left-8 hidden lg:block">
        <div className="absolute -top-1 left-0 h-2.5 w-px bg-white/20" />
        <div className="absolute top-0 -left-1 h-px w-2.5 bg-white/20" />
      </div>
      {/* Top-right corner mark */}
      <div aria-hidden="true" className="pointer-events-none absolute top-8 right-8 hidden lg:block">
        <div className="absolute -top-1 right-0 h-2.5 w-px bg-white/20" />
        <div className="absolute top-0 -right-1 h-px w-2.5 bg-white/20" />
      </div>
      {/* Bottom-left corner mark */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-8 hidden lg:block">
        <div className="absolute -bottom-1 left-0 h-2.5 w-px bg-white/14" />
        <div className="absolute bottom-0 -left-1 h-px w-2.5 bg-white/14" />
      </div>
      {/* Bottom-right corner mark */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-8 hidden lg:block">
        <div className="absolute -bottom-1 right-0 h-2.5 w-px bg-white/14" />
        <div className="absolute bottom-0 -right-1 h-px w-2.5 bg-white/14" />
      </div>
      {/* Mid horizontal tick — at the vertical center of the viewport */}
      <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-8 hidden h-px w-4 -translate-y-1/2 bg-white/12 lg:block" />
      <div aria-hidden="true" className="pointer-events-none absolute top-1/2 right-8 hidden h-px w-4 -translate-y-1/2 bg-white/12 lg:block" />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -top-64 left-1/3 h-[600px] w-[600px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, oklch(0.50 0.250 250), transparent 70%)" }}
        aria-hidden="true"
      />

      {/* ── Scan line — sweeps top→bottom once on load ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 z-10"
        style={{
          height: "2px",
          top: 0,
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.66 0.220 248 / 0.35) 8%, oklch(0.66 0.220 248 / 0.85) 38%, oklch(1 0 0) 50%, oklch(0.66 0.220 248 / 0.85) 62%, oklch(0.66 0.220 248 / 0.35) 92%, transparent 100%)",
          boxShadow:
            "0 0 22px 7px oklch(0.66 0.220 248 / 0.55), 0 0 70px 18px oklch(0.66 0.220 248 / 0.22), 0 0 120px 36px oklch(0.66 0.220 248 / 0.08)",
          animation: "hero-scan 1.5s cubic-bezier(0.25, 0.1, 0.25, 1) 0.08s forwards",
        }}
      />

      <div className="container-enterprise relative flex min-h-[92vh] flex-col justify-center py-20 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_480px]">

          {/* ── Content ── */}
          <div className="max-w-[600px]">

            {/* Badge */}
            <div
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5"
              style={{ animation: "word-blur-up 0.55s cubic-bezier(0.16,1,0.3,1) both 0ms" }}
            >
              <LiveDot />
              <span className="font-mono text-xs text-canvas-muted">
                24/7 NOC &amp; SOC — now onboarding enterprise clients
              </span>
            </div>

            {/* ── Hero h1 — word-by-word blur-up with glitch on line 3 ── */}
            <h1 className="text-[clamp(2.5rem,5.2vw,4rem)] font-semibold leading-[1.06] tracking-tight text-white">

              {/* Line 1 */}
              <span className="block">
                {LINE1.map((word, i) => (
                  <span
                    key={word}
                    style={{
                      display: "inline-block",
                      animation: `word-blur-up 0.55s cubic-bezier(0.16,1,0.3,1) both ${60 + i * WORD_STEP}ms`,
                    }}
                  >
                    {word}
                    {i < LINE1.length - 1 && "\u00A0"}
                  </span>
                ))}
              </span>

              {/* Line 2 */}
              <span className="block">
                {LINE2.map((word, i) => (
                  <span
                    key={word}
                    style={{
                      display: "inline-block",
                      animation: `word-blur-up 0.55s cubic-bezier(0.16,1,0.3,1) both ${240 + i * WORD_STEP}ms`,
                    }}
                  >
                    {word}
                    {i < LINE2.length - 1 && "\u00A0"}
                  </span>
                ))}
              </span>

              {/*
                Line 3 — "with contractual accountability."
                Sequence:
                  1. word-blur-up   → fades in from 420ms
                  2. glitch-resolve → chromatic-aberration glitch at 1100ms (after reveal)
                  3. gradient-text-shimmer → infinite shimmer from 1900ms
              */}
              <span
                className="block text-gradient-animated"
                style={{
                  animation: [
                    "word-blur-up 0.68s cubic-bezier(0.16,1,0.3,1) both 420ms",
                    "glitch-resolve 0.58s ease-out 1100ms both",
                    "gradient-text-shimmer 4.5s linear 1900ms infinite",
                  ].join(", "),
                  willChange: "filter, transform",
                }}
              >
                with contractual accountability.
              </span>
            </h1>

            {/* ── Subtitle — service terms flash terminal-green, then rest fades in ── */}
            <HeroSubtitleAnimated />

            {/* ── CTAs ── */}
            <div
              className="mt-8 flex flex-wrap items-center gap-4"
              style={{ animation: "word-blur-up 0.6s cubic-bezier(0.16,1,0.3,1) both 620ms" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-blue px-5 py-3 text-sm font-semibold text-blue-foreground transition-colors hover:bg-blue-hover glow-blue"
              >
                Talk to an engineer
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products/platform"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-white/80 hover:border-white/30 hover:text-white transition-colors"
              >
                See the platform
              </Link>
            </div>

            {/* ── Watch link ── */}
            <a
              href="#platform-overview"
              className="mt-7 inline-flex items-center gap-2.5 text-sm text-canvas-muted hover:text-canvas-foreground transition-colors group"
              style={{ animation: "word-blur-up 0.6s cubic-bezier(0.16,1,0.3,1) both 720ms" }}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 group-hover:border-white/30 group-hover:bg-white/5 transition-all">
                <CirclePlay className="h-4 w-4" />
              </span>
              Watch 4-minute platform overview
            </a>
          </div>

          {/* ── Topology SVG ── */}
          <div
            className="hidden lg:flex lg:items-center lg:justify-end"
            style={{ animation: "word-blur-up 0.9s cubic-bezier(0.16,1,0.3,1) both 280ms" }}
          >
            <InfraTopologySVG />
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/8 bg-white/8 sm:grid-cols-4"
          style={{ animation: "word-blur-up 0.7s cubic-bezier(0.16,1,0.3,1) both 780ms" }}
        >
          {[
            { value: "99.99%", label: "Uptime SLA", note: "contractual — not aspirational" },
            { value: "≤ 15 min", label: "P1 incident response", note: "24/7/365, named engineers" },
            { value: "24/7", label: "NOC & SOC coverage", note: "no on-call gaps, ever" },
            { value: "Zero Trust", label: "Security architecture", note: "built in, not bolted on" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1 bg-white/[0.03] px-5 py-4">
              <span className="font-mono text-xl font-semibold text-white tabular-num">{s.value}</span>
              <span className="text-xs font-medium text-canvas-foreground/70">{s.label}</span>
              <span className="text-[11px] text-canvas-muted/60">{s.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function InfraTopologySVG() {
  return (
    <div className="relative h-[480px] w-[460px]">
      <svg viewBox="0 0 460 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full" aria-hidden="true">
        {Array.from({ length: 6 }, (_, r) =>
          Array.from({ length: 7 }, (_, c) => (
            <circle key={`${r}-${c}`} cx={c * 68 + 14} cy={r * 80 + 14} r="1.5" fill="rgba(255,255,255,0.06)" />
          ))
        )}
        <rect x="0" y="16" width="460" height="80" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <text x="12" y="34" fontSize="9" fill="rgba(255,255,255,0.3)" fontFamily="monospace" fontWeight="600" letterSpacing="2">EDGE LAYER</text>
        {[60, 160, 260, 360].map((x, i) => (
          <g key={x}>
            <rect x={x - 28} y="40" width="56" height="40" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x={x} y="58" fontSize="8" fill="rgba(255,255,255,0.4)" fontFamily="monospace" textAnchor="middle">{["SEA", "NYC", "LHR", "SIN"][i]}</text>
            <circle cx={x + 18} cy="42" r="3" fill="#10b981" opacity="0.8" />
          </g>
        ))}
        {[60, 160, 260, 360].map((x) => (
          <line key={x} x1={x} y1="80" x2={x - 20 + 140} y2="148" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 3" />
        ))}
        <line x1={230} y1="148" x2="230" y2="80" stroke="rgba(29,78,216,0.45)" strokeWidth="1.5" strokeDasharray="4 3" />
        <rect x="60" y="148" width="340" height="160" rx="8" fill="rgba(29,78,216,0.08)" stroke="rgba(59,130,246,0.30)" strokeWidth="1.5" />
        <text x="72" y="168" fontSize="9" fill="rgba(147,197,253,0.80)" fontFamily="monospace" fontWeight="600" letterSpacing="2">CORE PLATFORM</text>
        {[
          { x: 100, label: "Compute", sub: "Compute" },
          { x: 230, label: "Control", sub: "Unified plane" },
          { x: 360, label: "Storage", sub: "Storage" },
        ].map((n) => (
          <g key={n.label}>
            <rect x={n.x - 48} y="180" width="96" height="64" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            <text x={n.x} y="200" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="monospace" textAnchor="middle" fontWeight="600">{n.label}</text>
            <text x={n.x} y="216" fontSize="8" fill="rgba(255,255,255,0.3)" fontFamily="monospace" textAnchor="middle">{n.sub}</text>
            <line x1={n.x - 48} y1="228" x2={n.x + 48} y2="228" stroke="rgba(59,130,246,0.22)" strokeWidth="1" />
            <text x={n.x} y="238" fontSize="7" fill="rgba(16,185,129,0.7)" fontFamily="monospace" textAnchor="middle">● online</text>
          </g>
        ))}
        <line x1="148" y1="212" x2="182" y2="212" stroke="rgba(59,130,246,0.25)" strokeWidth="1" />
        <line x1="278" y1="212" x2="312" y2="212" stroke="rgba(59,130,246,0.25)" strokeWidth="1" />
        {[100, 230, 360].map((x) => (
          <line key={x} x1={x} y1="308" x2={x === 230 ? 230 : x < 230 ? 130 : 330} y2="360" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 3" />
        ))}
        <rect x="0" y="360" width="460" height="100" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <text x="12" y="380" fontSize="9" fill="rgba(255,255,255,0.2)" fontFamily="monospace" fontWeight="600" letterSpacing="2">FOUNDATION</text>
        {[
          { x: 30, w: 100, label: "Infrastructure" },
          { x: 180, w: 100, label: "Redundant Power" },
          { x: 330, w: 100, label: "Cooling & Physical" },
        ].map((b) => (
          <g key={b.label}>
            <rect x={b.x} y="390" width={b.w} height="24" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <text x={b.x + b.w / 2} y="406" fontSize="8" fill="rgba(255,255,255,0.3)" fontFamily="monospace" textAnchor="middle">{b.label}</text>
          </g>
        ))}
        <rect x="320" y="420" width="132" height="32" rx="5" fill="rgba(29,78,216,0.16)" stroke="rgba(59,130,246,0.35)" strokeWidth="1" />
        <circle cx="332" cy="436" r="3" fill="#10b981" opacity="0.9" />
        <text x="340" y="440" fontSize="8" fill="rgba(255,255,255,0.6)" fontFamily="monospace" fontWeight="600">Security: 0 open P1</text>
      </svg>
    </div>
  )
}
