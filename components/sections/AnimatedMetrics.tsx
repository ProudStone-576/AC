"use client"

import * as React from "react"
import { useIntersection } from "@/hooks/use-intersection"

function useCounter(target: number, duration = 1800, decimals = 0) {
  const [count, setCount] = React.useState(0)
  const { ref, isVisible } = useIntersection<HTMLDivElement>({ threshold: 0.3, once: true })

  React.useEffect(() => {
    if (!isVisible) return
    const startTime = performance.now()
    function tick(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const value = eased * target
      setCount(decimals > 0 ? parseFloat(value.toFixed(decimals)) : Math.floor(value))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isVisible, target, duration, decimals])

  return { ref, count }
}

const METRICS = [
  {
    seq: "01",
    target: 99.99,
    suffix: "%",
    label: "Uptime guarantee",
    descriptor: "written into your contract, not just a goal",
    decimals: 2,
  },
  {
    seq: "02",
    target: 6,
    suffix: undefined,
    label: "Industries served",
    descriptor: "financial services, healthcare, manufacturing, and more",
    decimals: 0,
  },
  {
    seq: "03",
    target: 10,
    suffix: "ms",
    label: "Response speed",
    descriptor: "across all platform endpoints",
    decimals: 0,
  },
  {
    seq: "04",
    target: 24,
    suffix: "/7",
    label: "Always on",
    descriptor: "monitoring and incident response, every hour of the year",
    decimals: 0,
  },
]

export function AnimatedMetrics() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-16 lg:py-20">
      {/* Top bracket */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/[0.12]" />
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 h-4 w-px bg-white/[0.18]" />
      <div aria-hidden="true" className="pointer-events-none absolute top-0 right-0 h-4 w-px bg-white/[0.18]" />
      {/* Bottom bracket */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/[0.12]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-4 w-px bg-white/[0.18]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 h-4 w-px bg-white/[0.18]" />

      {/* Ambient blue glow — centered */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.50 0.250 250), transparent)" }}
      />

      <div className="container-enterprise">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {METRICS.map((metric, i) => (
            <MetricCard key={metric.seq} metric={metric} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MetricCard({
  metric,
  index,
}: {
  metric: (typeof METRICS)[number]
  index: number
}) {
  const { ref, count } = useCounter(metric.target, 1800, metric.decimals)

  const formatted =
    metric.decimals > 0
      ? count.toFixed(metric.decimals)
      : count.toLocaleString("en-US")

  // Left border on col-2 always; col-3 and col-4 only on sm+
  const borderClass =
    index === 1
      ? "border-l border-white/10"
      : index === 2
        ? "border-t border-white/10 sm:border-t-0 sm:border-l"
        : index === 3
          ? "border-t border-white/10 border-l border-white/10 sm:border-t-0"
          : ""

  return (
    <div ref={ref} className={`group relative px-7 py-10 lg:px-9 ${borderClass}`}>
      {/* Per-card radial glow behind number */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-7 top-10 h-16 w-28 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-25 lg:left-9"
        style={{ background: "oklch(0.50 0.250 250)" }}
      />

      {/* Sequence code */}
      <p className="mb-4 font-mono text-[9px] tracking-[0.25em] text-white/20 uppercase select-none">
        {metric.seq}
      </p>

      {/* Number */}
      <p className="relative font-mono text-[2.75rem] font-black leading-none tracking-tight text-white tabular-nums lg:text-[3.5rem]">
        {formatted}
        {metric.suffix && (
          <span
            className="font-black"
            style={{ color: "oklch(0.66 0.220 248)" }}
          >
            {metric.suffix}
          </span>
        )}
      </p>

      {/* Accent underline */}
      <div
        aria-hidden="true"
        className="mt-4 h-px w-10"
        style={{
          background:
            "linear-gradient(to right, oklch(0.50 0.250 250 / 0.75), transparent)",
        }}
      />

      {/* Label */}
      <p className="mt-4 text-sm font-semibold tracking-tight text-white/70">
        {metric.label}
      </p>

      {/* Descriptor */}
      <p className="mt-1.5 text-xs leading-relaxed text-white/35">
        {metric.descriptor}
      </p>
    </div>
  )
}
