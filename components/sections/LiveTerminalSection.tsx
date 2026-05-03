"use client"

import * as React from "react"
import { FadeIn } from "@/components/ui/FadeIn"

// ── Sequence ─────────────────────────────────────────────────────────────────

type LineType = "prompt" | "dim" | "info" | "warn" | "action" | "success"

interface TermLine {
  type: LineType
  text: string
  pauseAfter?: number // ms to wait before starting next line
}

const SEQUENCE: TermLine[] = [
  { type: "prompt",  text: "$ aethon watch --env prod-ca-east-1 --realtime",       pauseAfter: 500 },
  { type: "dim",     text: "  Connecting to 1,247 monitored assets…",               pauseAfter: 250 },
  { type: "dim",     text: "  Baseline loaded · Zero-Trust policies active.",        pauseAfter: 800 },
  { type: "dim",     text: "",                                                       pauseAfter: 600 },
  { type: "warn",    text: "⚠  ANOMALY  node=db-primary-02  memory.usage=94.1%  threshold=90%", pauseAfter: 350 },
  { type: "info",    text: "   Runbook match → RUNBOOK-MEM-001",                    pauseAfter: 280 },
  { type: "info",    text: "   Impact: 3 downstream services at risk",               pauseAfter: 350 },
  { type: "action",  text: "→  restart_idle_workers(count=3)",                      pauseAfter: 450 },
  { type: "action",  text: "→  flush_query_cache(region=ca-east-1)",                pauseAfter: 400 },
  { type: "action",  text: "→  scale_memory_headroom(delta=+2GB)",                  pauseAfter: 280 },
  { type: "dim",     text: "   Awaiting metric stabilisation…",                     pauseAfter: 900 },
  { type: "success", text: "✓  RESOLVED  memory.usage: 94.1% → 63.4%  (11.2s)",    pauseAfter: 250 },
  { type: "success", text: "✓  All 3 downstream services nominal",                  pauseAfter: 250 },
  { type: "dim",     text: "   INC-20260428-2207 · No human intervention required.", pauseAfter: 300 },
  { type: "dim",     text: "",                                                       pauseAfter: 400 },
  { type: "prompt",  text: "$ _",                                                   pauseAfter: 4200 },
]

const LINE_COLORS: Record<LineType, string> = {
  prompt:  "#e2e8f0",
  dim:     "#3a3a3a",
  info:    "#93c5fd",
  warn:    "#fbbf24",
  action:  "#a78bfa",
  success: "#4ade80",
}

const CHAR_MS = 16

// ── Component ─────────────────────────────────────────────────────────────────

export function LiveTerminalSection() {
  const [lines, setLines] = React.useState<{ type: LineType; text: string; full: string }[]>([])
  const [phase, setPhase] = React.useState<"monitoring" | "anomaly" | "remediating" | "resolved">("monitoring")
  const scrollRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    let cancelled = false

    async function sleep(ms: number) {
      return new Promise<void>((r) => setTimeout(r, ms))
    }

    async function run() {
      while (!cancelled) {
        setLines([])
        setPhase("monitoring")

        for (let i = 0; i < SEQUENCE.length; i++) {
          if (cancelled) return
          const { type, text, pauseAfter = 200 } = SEQUENCE[i]

          // Update status phase
          if (type === "warn")    setPhase("anomaly")
          if (type === "action")  setPhase("remediating")
          if (type === "success") setPhase("resolved")

          // Add stub row
          setLines((prev) => [...prev, { type, text: "", full: text }])

          // Type out characters (skip for empty lines)
          if (text) {
            for (let c = 1; c <= text.length; c++) {
              if (cancelled) return
              const partial = text.slice(0, c)
              setLines((prev) => {
                const next = [...prev]
                next[i] = { type, text: partial, full: text }
                return next
              })
              await sleep(CHAR_MS)
            }
          }

          await sleep(pauseAfter)
        }

        // Pause at end then restart
        await sleep(3000)
        if (!cancelled) setPhase("monitoring")
      }
    }

    run()
    return () => { cancelled = true }
  }, [])

  // Auto-scroll terminal to bottom
  React.useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [lines])

  const PHASE_STYLES: Record<typeof phase, { label: string; color: string; bg: string }> = {
    monitoring:  { label: "Monitoring",   color: "#22c55e", bg: "rgba(34,197,94,0.12)"  },
    anomaly:     { label: "Anomaly",      color: "#fbbf24", bg: "rgba(251,191,36,0.12)" },
    remediating: { label: "Remediating",  color: "#a78bfa", bg: "rgba(167,139,250,0.12)" },
    resolved:    { label: "Resolved",     color: "#4ade80", bg: "rgba(74,222,128,0.12)" },
  }
  const ps = PHASE_STYLES[phase]

  return (
    <section style={{ backgroundColor: "#07070a" }} className="relative overflow-hidden py-24 lg:py-32">
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top / bottom bleed lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />

      <div className="container-enterprise relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ── Left: copy ──────────────────────────────────────────────── */}
          <FadeIn variant="slide-left">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">
              Auto-Remediation Engine
            </p>
            <h2
              className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
              style={{ color: "#f0f0f0" }}
            >
              Incidents resolved<br />
              <span style={{ color: "#60a5fa" }}>before you get paged.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed" style={{ color: "#666" }}>
              The platform detects problems, looks up the fix, and resolves them in seconds. A human only gets called when the situation is unusual enough to need real judgement.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-col gap-4">
              {[
                { val: "11.2s",  label: "Average auto-remediation time"              },
                { val: "68%",    label: "Incidents resolved without human action"     },
                { val: "200+",   label: "Pre-built response playbooks across all service types" },
              ].map(({ val, label }) => (
                <div key={val} className="flex items-center gap-4">
                  <span
                    className="w-16 shrink-0 font-mono text-xl font-bold tabular-nums"
                    style={{ color: "#60a5fa" }}
                  >
                    {val}
                  </span>
                  <span className="text-sm leading-snug" style={{ color: "#4a4a4a" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* ── Right: terminal window ───────────────────────────────── */}
          <FadeIn variant="slide-right" delay={120}>
            <div
              className="overflow-hidden rounded-xl shadow-2xl"
              style={{ border: "1px solid #1a1a1a", background: "#0d0d0d" }}
            >
              {/* Title bar */}
              <div
                className="flex items-center gap-2.5 px-4 py-3"
                style={{ background: "#0a0a0a", borderBottom: "1px solid #191919" }}
              >
                {/* Traffic lights */}
                <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#febc2e" }} />
                <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#28c840" }} />

                {/* Tab */}
                <div
                  className="ml-2 flex-1 rounded px-2.5 py-0.5 text-[11px]"
                  style={{ background: "#141414", color: "#3a3a3a", maxWidth: 220 }}
                >
                  aethon — ops@prod-ca-east-1
                </div>

                {/* Live badge */}
                <div
                  className="ml-auto flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold transition-all duration-500"
                  style={{ background: ps.bg, color: ps.color }}
                >
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full animate-pulse"
                    style={{ background: ps.color }}
                  />
                  {ps.label}
                </div>
              </div>

              {/* Output */}
              <div
                ref={scrollRef}
                className="overflow-y-auto p-4"
                style={{
                  minHeight: 340,
                  maxHeight: 420,
                  fontFamily: "var(--font-mono, 'SFMono-Regular', Consolas, monospace)",
                  fontSize: 12,
                  lineHeight: "1.7",
                  scrollbarWidth: "none",
                }}
              >
                {lines.map(({ type, text, full }, i) => {
                  const isLast = i === lines.length - 1
                  const isTyping = isLast && text.length < full.length
                  return (
                    <div key={i} style={{ color: LINE_COLORS[type], whiteSpace: "pre" }}>
                      {text || " "}
                      {isTyping && (
                        <span
                          className="animate-pulse"
                          style={{ color: "#60a5fa", display: "inline-block", width: 7 }}
                        >
                          ▋
                        </span>
                      )}
                    </div>
                  )
                })}
                {/* Idle cursor when sequence ends */}
                {lines.length === SEQUENCE.length && lines[lines.length - 1]?.text === "$ _" && (
                  <div style={{ color: "#3a3a3a" }}>
                    <span className="animate-pulse" style={{ color: "#2a4a7f" }}>▋</span>
                  </div>
                )}
              </div>

              {/* Status bar */}
              <div
                className="flex items-center justify-between px-4 py-2"
                style={{ borderTop: "1px solid #141414", background: "#090909" }}
              >
                <div className="flex items-center gap-3">
                  {[
                    { dot: "#22c55e", label: "1,247 assets online" },
                    { dot: "#60a5fa", label: "0 open P1" },
                  ].map(({ dot, label }) => (
                    <span key={label} className="flex items-center gap-1 text-[9px]" style={{ color: "#3a3a3a" }}>
                      <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: dot }} />
                      {label}
                    </span>
                  ))}
                </div>
                <span className="text-[9px]" style={{ color: "#2a2a2a" }}>
                  Aethon Core Platform v1.0
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
