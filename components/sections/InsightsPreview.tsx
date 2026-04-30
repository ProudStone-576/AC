import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { FadeIn } from "@/components/ui/FadeIn"
import { insights } from "@/lib/constants/company"

const insightImages: Record<string, { src: string; alt: string }> = {
  "/insights/managed-service-contracts": {
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=3840&q=100",
    alt: "Server room with blue-lit rack hardware",
  },
  "/insights/zero-trust-implementation": {
    src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=3840&q=100",
    alt: "Cybersecurity network abstract visualization",
  },
  "/insights/enterprise-ai-production": {
    src: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=3840&q=100",
    alt: "Dark data center corridor",
  },
}

export function InsightsPreview() {
  const [featured, ...secondary] = insights

  return (
    <section className="relative bg-white py-20 dark:bg-background lg:py-24">
      {/* ── Structural lines ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border/70" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-border/70" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 hidden w-px lg:block"
        style={{ background: "linear-gradient(to bottom, transparent 0%, oklch(0 0 0 / 0.05) 25%, oklch(0 0 0 / 0.05) 75%, transparent 100%)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-px lg:block"
        style={{ background: "linear-gradient(to bottom, transparent 0%, oklch(0 0 0 / 0.05) 25%, oklch(0 0 0 / 0.05) 75%, transparent 100%)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 hidden lg:block">
        <div className="absolute top-6 left-0 h-px w-6 bg-black/[0.07] dark:bg-white/[0.07]" />
        <div className="absolute top-0 left-6 h-6 w-px bg-black/[0.07] dark:bg-white/[0.07]" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute top-0 right-0 hidden lg:block">
        <div className="absolute top-6 right-0 h-px w-6 bg-black/[0.07] dark:bg-white/[0.07]" />
        <div className="absolute top-0 right-6 h-6 w-px bg-black/[0.07] dark:bg-white/[0.07]" />
      </div>

      <div className="container-enterprise">
        <FadeIn>
          <div className="mb-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Insights"
              title="Straight talk on technology from people who run it"
            />
            <Link
              href="/insights"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-blue transition-colors hover:text-blue-hover"
            >
              All articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        {/* ── Asymmetric grid: featured (2 cols) + stack (1 col) ── */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Featured — spans 2 of 3 columns */}
          {featured && (
            <FadeIn delay={0} variant="fade-up" className="lg:col-span-2">
              <FeaturedInsightCard insight={featured} />
            </FadeIn>
          )}

          {/* Secondary pair stacked in the 3rd column */}
          <div className="flex flex-col gap-6">
            {secondary.map((insight, i) => (
              <FadeIn key={insight.href} delay={120 + i * 80} variant="slide-right">
                <SmallInsightCard insight={insight} />
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Featured card — large, 2-col, full excerpt ──────────────────────────────

function FeaturedInsightCard({ insight }: { insight: (typeof insights)[0] }) {
  const img = insightImages[insight.href]
  return (
    <Link
      href={insight.href}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white transition-all duration-200 hover:border-blue/30 hover:shadow-md dark:bg-card"
    >
      {/* Hero image */}
      {img && (
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      )}

      {/* Blue accent bar */}
      {!img && <div className="h-0.5 w-full bg-blue/70" />}

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        {/* Category + "Featured" label */}
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-blue-light px-2.5 py-1 text-[11px] font-semibold text-blue-light-foreground">
            {insight.category}
          </span>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
            Featured
          </span>
        </div>

        {/* Title — significantly larger */}
        <h3 className="mb-4 text-xl font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-blue sm:text-2xl">
          {insight.title}
        </h3>

        {/* Excerpt — full, no clamp */}
        <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {insight.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-[10px] font-semibold text-foreground">
              {insight.author.split(" ").map((n) => n[0]).join("")}
            </div>
            <span>{insight.author}</span>
            <span className="text-border">·</span>
            <span>{insight.date}</span>
            <span className="text-border">·</span>
            <span>{insight.readTime}</span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue opacity-0 transition-opacity group-hover:opacity-100">
            Read article
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}

// ─── Small card — compact, clipped excerpt ────────────────────────────────────

function SmallInsightCard({ insight }: { insight: (typeof insights)[0] }) {
  const img = insightImages[insight.href]
  return (
    <Link
      href={insight.href}
      className="group flex flex-1 overflow-hidden rounded-xl border border-border bg-white transition-all duration-200 hover:border-blue/30 hover:shadow-sm dark:bg-card"
    >
      {/* Thumbnail */}
      {img && (
        <div className="relative w-24 shrink-0 overflow-hidden sm:w-28">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="112px"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-4">
        <span className="mb-2 inline-flex w-fit items-center rounded-full bg-blue-light px-2.5 py-1 text-[11px] font-semibold text-blue-light-foreground">
          {insight.category}
        </span>

        <h3 className="mb-2 text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-blue line-clamp-2">
          {insight.title}
        </h3>

        <div className="mt-auto flex items-center gap-2 pt-2 text-[11px] text-muted-foreground">
          <span>{insight.date}</span>
          <span className="text-border">·</span>
          <span>{insight.readTime}</span>
        </div>
      </div>
    </Link>
  )
}
