"use client"

import Link from "next/link"
import { ArrowRight, BarChart2, Cloud, Cpu, Headphones, RefreshCw, Shield } from "lucide-react"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { FadeIn } from "@/components/ui/FadeIn"
import { useIntersection } from "@/hooks/use-intersection"
import { services } from "@/lib/constants/company"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  cloud: Cloud,
  "bar-chart-2": BarChart2,
  shield: Shield,
  "refresh-cw": RefreshCw,
  headphones: Headphones,
  cpu: Cpu,
}

function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon className={className} />
}

export function ServicesOverview() {
  const { ref: gridRef, isVisible: gridVisible } = useIntersection<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="bg-white py-20 dark:bg-background lg:py-24">
      <div className="container-enterprise">
        <div className="mb-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <FadeIn>
            <SectionHeader
              eyebrow="Services"
              title="The full spectrum of enterprise technology"
              subtitle="From strategy to deployment to ongoing operations — every service your organization needs under one roof."
              subtitleWidth="lg"
            />
          </FadeIn>
          <FadeIn delay={100}>
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-blue transition-colors hover:text-blue-hover"
            >
              All services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.href}
              service={service}
              index={index}
              isVisible={gridVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: (typeof services)[0]
  index: number
  isVisible: boolean
}) {
  return (
    <Link
      href={service.href}
      className={cn(
        "group flex flex-col rounded-xl border border-border p-6 card-hover animate-scale-up",
        "bg-white dark:bg-card",
        isVisible && "is-visible",
      )}
      style={{ transitionDelay: isVisible ? `${index * 70}ms` : "0ms" }}
    >
      {/* Icon */}
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
        <ServiceIcon name={service.icon} className="h-5 w-5 text-blue" />
      </div>

      {/* Text */}
      <h3 className="mb-2 text-base font-semibold text-foreground">{service.title}</h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      {/* Link */}
      <div className="flex items-center gap-1.5 text-sm font-medium text-blue">
        Learn more
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
      </div>
    </Link>
  )
}
