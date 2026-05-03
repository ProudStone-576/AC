"use client"

import Image from "next/image"
import { useIntersection } from "@/hooks/use-intersection"
import { cn } from "@/lib/utils"

interface BentoCell {
  photo: string
  alt: string
  metric: string
  label: string
  accent?: string
  colSpan?: string
  rowSpan?: string
}

const CELLS: BentoCell[] = [
  {
    photo: "photo-1451187580459-43490279c0fa",
    alt: "Earth at night from space showing global connectivity",
    metric: "99.99%",
    label: "Uptime guarantee, written in your contract",
    accent: "from-blue/60 to-blue/5",
    colSpan: "col-span-2",
  },
  {
    photo: "photo-1573164713988-8665fc963095",
    alt: "Technology operations center with multiple screens",
    metric: "24 / 7",
    label: "NOC & SOC coverage",
    accent: "from-emerald-500/40 to-emerald-500/5",
    rowSpan: "row-span-2",
  },
  {
    photo: "photo-1526374965328-7f61d4dc18c5",
    alt: "Digital data streams and code",
    metric: "2 M",
    label: "Events processed per second",
    accent: "from-blue/50 to-blue/5",
  },
  {
    photo: "photo-1550751827-4bd374c3f58b",
    alt: "Cybersecurity binary data streams",
    metric: "68%",
    label: "Incidents auto-remediated",
    accent: "from-violet-500/40 to-violet-500/5",
  },
]

function BentoPhoto({
  cell,
  index,
  isVisible,
}: {
  cell: BentoCell
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02]",
        "transition-all duration-700 ease-out",
        cell.colSpan,
        cell.rowSpan,
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8",
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Photo */}
      <Image
        src={`https://images.unsplash.com/${cell.photo}?w=3840&q=100`}
        alt={cell.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      {/* Accent color tint */}
      {cell.accent && (
        <div className={`absolute inset-0 bg-gradient-to-br ${cell.accent} mix-blend-multiply`} />
      )}

      {/* Metric badge */}
      <div className="absolute bottom-0 left-0 p-5">
        <div
          className="font-mono text-3xl font-semibold text-white tabular-nums leading-none"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}
        >
          {cell.metric}
        </div>
        <div className="mt-1.5 text-xs font-medium text-white/60 tracking-wide">
          {cell.label}
        </div>
      </div>

      {/* Hover: reveal scan line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  )
}

export function CinemaSection() {
  const { ref, isVisible } = useIntersection<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="bg-canvas py-20 lg:py-28">
      <div className="container-enterprise">
        {/* Header */}
        <div
          className={cn(
            "mb-12 max-w-xl transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          )}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">
            At Enterprise Scale
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Built for organizations that cannot afford failure
          </h2>
          <p className="mt-4 text-base leading-relaxed text-canvas-muted">
            Every metric is contractual — written into the agreement with defined remedies if we miss it.
          </p>
        </div>

        {/* Bento grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 grid-rows-[280px_280px] gap-3 sm:grid-cols-3"
        >
          {CELLS.map((cell, i) => (
            <BentoPhoto key={i} cell={cell} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
