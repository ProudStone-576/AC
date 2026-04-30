import Image from "next/image"
import Link from "next/link"
import { Activity, ArrowRight, Building, Landmark, Settings, ShoppingBag, Zap } from "lucide-react"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { FadeIn } from "@/components/ui/FadeIn"
import { industries } from "@/lib/constants/company"

const INDUSTRY_PHOTOS: Record<string, string> = {
  landmark: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=3840&q=100",
  activity: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=3840&q=100",
  settings: "https://images.unsplash.com/photo-1565043666905-07ea197ae3da?w=3840&q=100",
  "shopping-bag": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=3840&q=100",
  building: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=3840&q=100",
  zap: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=3840&q=100",
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  landmark: Landmark,
  activity: Activity,
  settings: Settings,
  "shopping-bag": ShoppingBag,
  building: Building,
  zap: Zap,
}

function IndustryIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon className={className} />
}

export function IndustriesSection() {
  return (
    <section className="relative bg-surface py-28 dark:bg-card lg:py-36">
      {/* Structural lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-border" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-border/50 lg:block" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-border/50 lg:block" />
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 hidden lg:block">
        <div className="absolute top-5 left-0 h-px w-5 bg-border" />
        <div className="absolute top-0 left-5 h-5 w-px bg-border" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute top-0 right-0 hidden lg:block">
        <div className="absolute top-5 right-0 h-px w-5 bg-border" />
        <div className="absolute top-0 right-5 h-5 w-px bg-border" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 hidden lg:block">
        <div className="absolute bottom-5 left-0 h-px w-5 bg-border/60" />
        <div className="absolute bottom-0 left-5 h-5 w-px bg-border/60" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 hidden lg:block">
        <div className="absolute bottom-5 right-0 h-px w-5 bg-border/60" />
        <div className="absolute bottom-0 right-5 h-5 w-px bg-border/60" />
      </div>

      <div className="container-enterprise">
        <FadeIn>
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Industries"
              title="Built for the businesses that can't afford downtime"
              subtitle="We work in industries where technology problems have real consequences. We know the rules, the risks, and what's at stake."
            />
            <Link
              href="/industries"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-blue transition-colors hover:text-blue-hover"
            >
              All industries
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <FadeIn key={industry.href} delay={i * 80} variant="scale-up">
              <Link
                href={industry.href}
                className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-2xl lg:h-96"
              >
                {/* Background photo — always visible */}
                {INDUSTRY_PHOTOS[industry.icon] && (
                  <Image
                    src={INDUSTRY_PHOTOS[industry.icon]}
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}

                {/* Base gradient — always on */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 transition-opacity duration-300 group-hover:opacity-90"
                />

                {/* Blue wash on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "linear-gradient(135deg, oklch(0.38 0.250 250 / 0.45) 0%, transparent 65%)" }}
                />

                {/* Top-left accent corner */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-0 h-14 w-14 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle at top left, oklch(0.60 0.250 250 / 0.35) 0%, transparent 70%)" }}
                />

                {/* Content */}
                <div className="relative flex flex-col gap-3 p-7 lg:p-8">
                  {/* Icon pill */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md transition-colors duration-300 group-hover:border-blue/50 group-hover:bg-blue/25">
                    <IndustryIcon name={industry.icon} className="h-6 w-6 text-white" />
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">
                      {industry.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70 line-clamp-3">
                      {industry.description}
                    </p>
                  </div>

                  {/* CTA row — slides up on hover */}
                  <div className="flex items-center gap-1.5 translate-y-2 text-sm font-medium text-sky-300 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Explore industry
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom border accent */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-gradient-to-r from-blue/0 via-blue to-blue/0 transition-transform duration-300 group-hover:scale-x-100"
                />
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
