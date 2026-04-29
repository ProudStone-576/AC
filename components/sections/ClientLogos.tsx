import {
  Activity,
  BarChart2,
  BookOpen,
  Building,
  Landmark,
  Package,
  Settings,
  ShoppingBag,
  Zap,
  FlaskConical,
} from "lucide-react"
import { clientLogos } from "@/lib/constants/company"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Financial Services": Landmark,
  "Healthcare Systems": Activity,
  "Manufacturing":      Settings,
  "Energy & Utilities": Zap,
  "Government & Defense": Building,
  "Retail & Commerce":  ShoppingBag,
  "Life Sciences":      FlaskConical,
  "Capital Markets":    BarChart2,
  "Supply Chain":       Package,
  "Higher Education":   BookOpen,
}

/**
 * ClientLogos — "Trusted by" sector bar.
 * Renders each sector with its matching icon for a polished look.
 */
export function ClientLogos() {
  return (
    <section className="border-b border-border bg-surface py-10 dark:bg-card">
      <div className="container-enterprise">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Built for organizations across these industries
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
          {clientLogos.map((name) => {
            const Icon = iconMap[name]
            return (
              <div
                key={name}
                className="flex items-center gap-2 opacity-50 transition-opacity duration-200 hover:opacity-80"
                aria-label={name}
              >
                {Icon && <Icon className="h-3.5 w-3.5 shrink-0 text-foreground" />}
                <span className="text-[13px] font-semibold tracking-tight text-foreground">
                  {name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
