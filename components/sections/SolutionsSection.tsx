"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { FadeIn } from "@/components/ui/FadeIn"
import { useIntersection } from "@/hooks/use-intersection"
import { solutions } from "@/lib/constants/company"
import { cn } from "@/lib/utils"

export function SolutionsSection() {
  return (
    <section className="relative bg-white py-20 dark:bg-background lg:py-28">
      {/* ── Structural lines ── */}
      {/* Top rule */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border/60" />
      {/* Bottom rule */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-border/60" />
      {/* Left vertical */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 hidden w-px lg:block"
        style={{ background: "linear-gradient(to bottom, transparent 0%, oklch(0 0 0 / 0.06) 20%, oklch(0 0 0 / 0.06) 80%, transparent 100%)" }} />
      {/* Right vertical */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-px lg:block"
        style={{ background: "linear-gradient(to bottom, transparent 0%, oklch(0 0 0 / 0.06) 20%, oklch(0 0 0 / 0.06) 80%, transparent 100%)" }} />
      {/* Dashed center vertical — visible at lg and up */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 lg:block"
        style={{ background: "repeating-linear-gradient(to bottom, transparent 0px, transparent 8px, oklch(0 0 0 / 0.04) 8px, oklch(0 0 0 / 0.04) 14px)" }} />
      {/* Top-left corner mark */}
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 hidden lg:block">
        <div className="absolute top-8 left-0 h-px w-8 bg-black/[0.08] dark:bg-white/[0.08]" />
        <div className="absolute top-0 left-8 h-8 w-px bg-black/[0.08] dark:bg-white/[0.08]" />
      </div>
      {/* Top-right corner mark */}
      <div aria-hidden="true" className="pointer-events-none absolute top-0 right-0 hidden lg:block">
        <div className="absolute top-8 right-0 h-px w-8 bg-black/[0.08] dark:bg-white/[0.08]" />
        <div className="absolute top-0 right-8 h-8 w-px bg-black/[0.08] dark:bg-white/[0.08]" />
      </div>

      <div className="container-enterprise">
        <FadeIn>
          <div className="mb-16 max-w-2xl">
            <SectionHeader
              eyebrow="Platform"
              title="Two products. One system. Full control."
              subtitle="Our platform and analytics tools are built to work together. Use one or both — everything runs from the same dashboard and you stay in control either way."
            />
          </div>
        </FadeIn>

        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <SolutionRow key={solution.href} solution={solution} reversed={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SolutionRow({
  solution,
  reversed,
}: {
  solution: (typeof solutions)[0]
  reversed: boolean
}) {
  const { ref, isVisible } = useIntersection<HTMLDivElement>({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 items-center gap-12 lg:grid-cols-2",
        reversed && "lg:grid-flow-dense",
      )}
    >
      {/* Content — slides from its side */}
      <div
        className={cn(
          reversed && "lg:col-start-2",
          reversed ? "animate-slide-right" : "animate-slide-left",
          isVisible && "is-visible",
        )}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">
          {solution.eyebrow}
        </p>
        <h3 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-foreground">
          {solution.title}
        </h3>
        <p className="mb-6 text-base leading-relaxed text-muted-foreground">
          {solution.description}
        </p>

        <ul className="mb-8 space-y-3">
          {solution.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
              <span className="text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href={solution.href}
          className="inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors hover:text-blue-hover"
        >
          Explore {solution.eyebrow}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Visual — slides from the opposite side */}
      <div
        className={cn(
          reversed && "lg:col-start-1 lg:row-start-1",
          reversed ? "animate-slide-left" : "animate-slide-right",
          isVisible && "is-visible",
        )}
        style={{ transitionDelay: "80ms" }}
      >
        <SolutionVisual index={reversed ? 1 : 0} title={solution.eyebrow} isVisible={isVisible} />
      </div>
    </div>
  )
}

function SolutionVisual({ index, title, isVisible }: { index: number; title: string; isVisible: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-1 dark:bg-card">
      <div className="flex h-8 items-center gap-1.5 rounded-t-xl bg-white/80 px-4 dark:bg-background/80">
        <div className="h-2.5 w-2.5 rounded-full bg-border" />
        <div className="h-2.5 w-2.5 rounded-full bg-border" />
        <div className="h-2.5 w-2.5 rounded-full bg-border" />
        <div className="mx-auto flex h-5 w-48 items-center justify-center rounded bg-surface text-[10px] text-muted-foreground">
          aethoncore.com / {title.toLowerCase().replace(" ", "-")}
        </div>
      </div>

      <div className={cn(
        "relative flex h-[340px] flex-col overflow-hidden rounded-b-xl p-6",
        index === 0 ? "bg-brand-gradient" : "bg-white dark:bg-card",
      )}>
        {index === 0 ? <PlatformVisual /> : <AnalyticsVisual isVisible={isVisible} />}
      </div>
    </div>
  )
}

function PlatformVisual() {
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-white/50">Aethon Core Platform</p>
          <p className="text-lg font-semibold text-white">Infrastructure Overview</p>
        </div>
        <div className="flex h-7 items-center gap-1.5 rounded-md bg-white/10 px-3 text-xs text-white/70">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          All systems operational
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Compute", count: "48 nodes", status: "healthy" },
          { label: "Storage", count: "2.4 PB", status: "healthy" },
          { label: "Network", count: "12 regions", status: "healthy" },
          { label: "Identity", count: "18k users", status: "healthy" },
          { label: "Security", count: "0 alerts", status: "healthy" },
          { label: "Backups", count: "All current", status: "healthy" },
        ].map((item) => (
          <div key={item.label} className="rounded-lg bg-white/10 p-3">
            <p className="text-[10px] font-medium text-white/50">{item.label}</p>
            <p className="mt-1 text-sm font-semibold text-white">{item.count}</p>
            <div className="mt-2 flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <p className="text-[10px] text-white/40">{item.status}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 text-[11px] text-white/40">
        <span>Last sync 4 seconds ago</span>
        <span>99.99% uptime — 30d</span>
      </div>
    </>
  )
}

function AnalyticsVisual({ isVisible }: { isVisible: boolean }) {
  const bars = [38, 55, 72, 48, 88, 64, 91, 76, 58, 82, 69, 95]
  const [barsActive, setBarsActive] = React.useState(false)

  React.useEffect(() => {
    if (!isVisible) return
    const t = setTimeout(() => setBarsActive(true), 250)
    return () => clearTimeout(t)
  }, [isVisible])

  return (
    <>
      <div className="mb-6">
        <p className="text-xs font-medium text-muted-foreground">Analytics Suite</p>
        <p className="text-lg font-semibold text-foreground">Revenue Intelligence</p>
      </div>

      <div className="mb-6 grid grid-cols-3 gap-3">
        {[
          { label: "Total Revenue", value: "$4.2B", change: "+12.4%" },
          { label: "Active Contracts", value: "2,847", change: "+8.1%" },
          { label: "Avg Deal Size", value: "$1.48M", change: "+3.7%" },
        ].map((kpi) => (
          <div key={kpi.label} className="rounded-lg border border-border bg-surface p-3 dark:bg-background">
            <p className="text-[10px] text-muted-foreground">{kpi.label}</p>
            <p className="mt-0.5 text-sm font-semibold text-foreground">{kpi.value}</p>
            <p className="mt-1 text-[10px] font-medium text-emerald-600">{kpi.change}</p>
          </div>
        ))}
      </div>

      <div className="flex items-end gap-1 px-2" style={{ height: "80px" }}>
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-blue/20"
            style={{
              height: barsActive ? `${h}%` : "2%",
              transition: `height ${350 + i * 50}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
              transitionDelay: barsActive ? `${i * 40}ms` : "0ms",
            }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between px-2 text-[10px] text-muted-foreground">
        <span>Apr</span><span>Jul</span><span>Oct</span><span>Mar</span>
      </div>
    </>
  )
}
