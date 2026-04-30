"use client"

import * as React from "react"
import { useIntersection } from "@/hooks/use-intersection"
import { FadeIn } from "@/components/ui/FadeIn"
import { cn } from "@/lib/utils"

function useCountUp(target: number, active: boolean, duration = 1300) {
  const [value, setValue] = React.useState(0)
  const started = React.useRef(false)
  React.useEffect(() => {
    if (!active || started.current) return
    started.current = true
    const start = performance.now()
    function tick(now: number) {
      const p = Math.min((now - start) / duration, 1)
      setValue(Math.round((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target, duration])
  return value
}

const problems = [
  {
    number: "01",
    title: "Your IT provider closes the ticket. Your problem stays open.",
    body: "Most IT contracts promise a fast reply — not a fix. When something breaks at 2am, you get an email saying they saw it. We send an engineer who knows your system and stays until it is fixed.",
  },
  {
    number: "02",
    title: "Passing a security audit doesn't mean you're safe.",
    body: "Many companies pass security certifications and still get hacked. A certificate shows what your security is supposed to do — not whether it actually works. We make sure it works, and we put that in your contract.",
  },
  {
    number: "03",
    title: "Your IT has gotten too complex for anyone to see all of it.",
    body: "Multiple cloud services, old systems, tools from different vendors — they all add up to blind spots. Without one team watching everything, things break in ways nobody expects.",
  },
]

const cardVariants = ["slide-left", "fade-up", "slide-right"] as const

export function ProblemSection() {
  const { ref: headerRef, isVisible: headerVisible } = useIntersection<HTMLDivElement>({ threshold: 0.2 })
  const stat = useCountUp(67, headerVisible)

  return (
    <section className="relative bg-white py-20 dark:bg-gray-950 lg:py-28">
      {/* ── Structural lines ── */}
      {/* Top full-bleed horizontal */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gray-200 dark:bg-gray-800" />
      {/* Bottom full-bleed horizontal */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gray-200 dark:bg-gray-800" />
      {/* Left vertical */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-gray-100 dark:bg-gray-800/60 lg:block" />
      {/* Right vertical */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-gray-100 dark:bg-gray-800/60 lg:block" />
      {/* Top-left corner mark */}
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 hidden lg:block">
        <div className="absolute top-6 left-0 h-px w-6 bg-gray-400/30 dark:bg-white/12" />
        <div className="absolute top-0 left-6 h-6 w-px bg-gray-400/30 dark:bg-white/12" />
      </div>
      {/* Top-right corner mark */}
      <div aria-hidden="true" className="pointer-events-none absolute top-0 right-0 hidden lg:block">
        <div className="absolute top-6 right-0 h-px w-6 bg-gray-400/30 dark:bg-white/12" />
        <div className="absolute top-0 right-6 h-6 w-px bg-gray-400/30 dark:bg-white/12" />
      </div>
      {/* Bottom-left corner mark */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 hidden lg:block">
        <div className="absolute bottom-6 left-0 h-px w-6 bg-gray-400/30 dark:bg-white/12" />
        <div className="absolute bottom-0 left-6 h-6 w-px bg-gray-400/30 dark:bg-white/12" />
      </div>
      {/* Bottom-right corner mark */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 hidden lg:block">
        <div className="absolute bottom-6 right-0 h-px w-6 bg-gray-400/30 dark:bg-white/12" />
        <div className="absolute bottom-0 right-6 h-6 w-px bg-gray-400/30 dark:bg-white/12" />
      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Stat + statement row */}
        <div
          ref={headerRef}
          className="mb-16 grid grid-cols-1 gap-8 pb-16 lg:grid-cols-[280px_1fr] lg:gap-16"
        >
          {/* Large stat — fades up */}
          <div className={cn("flex flex-col animate-fade-up", headerVisible && "is-visible")}>
            <p className="font-mono text-[4.5rem] font-bold leading-none tracking-tight lg:text-[5.5rem]">
              <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {stat}
              </span>
              <span className="text-blue-500">%</span>
            </p>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              of IT problems happen because of poor management — not bad technology. The tools work fine. Nobody was watching.
            </p>

            <p className="mt-2 text-[11px] text-gray-400">
              Based on research from Gartner, IDC, and Forrester, 2022–2025.
            </p>
          </div>

          {/* Statement — slides from right */}
          <div
            className={cn("flex flex-col justify-center animate-slide-right", headerVisible && "is-visible")}
            style={{ transitionDelay: "150ms" }}
          >
            <p className="text-2xl font-semibold leading-snug tracking-tight text-gray-900 dark:text-white lg:text-3xl">
              Most businesses expect their IT provider to solve problems. Most providers just log the ticket.
            </p>

            <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
              Aethon Core is built differently. You get real engineers, a written guarantee with actual consequences, and a team that treats your technology as something that must work — not something to cut costs on.
            </p>
          </div>
        </div>

        {/* Divider — grows left to right */}
        <div
          className={cn("mb-16 h-px bg-gray-200 dark:bg-gray-800 animate-reveal-x", headerVisible && "is-visible")}
          style={{ transitionDelay: "100ms" }}
        />

        {/* Problem cards — fan: left / up / right */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {problems.map((p, i) => (
            <FadeIn key={p.number} delay={i * 120} variant={cardVariants[i]}>
              <div className="group flex flex-col gap-4">

                <span className="font-mono text-[11px] font-semibold tracking-widest text-gray-400">
                  {p.number}
                </span>

                <div className="h-px bg-gray-200 transition-colors group-hover:bg-blue-500/40 dark:bg-gray-800" />

                <h3 className="text-base font-semibold leading-snug text-gray-900 dark:text-white">
                  {p.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {p.body}
                </p>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
