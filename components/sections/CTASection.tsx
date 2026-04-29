import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  /**
   * "navy" — dark brand background (default, strong close to page)
   * "surface" — light tinted background (softer, mid-page)
   */
  variant?: "navy" | "surface"
}

/**
 * CTASection — full-width conversion block.
 *
 * Used at end-of-page and mid-page. The navy variant is the primary
 * conversion moment; the surface variant is a softer mid-page nudge.
 */
export function CTASection({
  title = "Ready to build infrastructure that lasts?",
  subtitle = "Talk to one of our enterprise specialists. We'll help you scope the right solution for your organization.",
  primaryLabel = "Talk to an expert",
  primaryHref = "/contact",
  secondaryLabel = "Explore case studies",
  secondaryHref = "/case-studies",
  variant = "navy",
}: CTASectionProps) {
  const isNavy = variant === "navy"

  return (
    <section className={isNavy ? "bg-brand py-20 dark:bg-canvas lg:py-24" : "bg-surface py-20 dark:bg-card lg:py-24"}>
      <div className="container-enterprise">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className={`text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${
              isNavy ? "text-white" : "text-foreground"
            }`}
          >
            {title}
          </h2>
          <p
            className={`mt-4 text-base leading-relaxed sm:text-lg ${
              isNavy ? "text-white/65" : "text-muted-foreground"
            }`}
          >
            {subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={primaryHref}
              className={`inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors ${
                isNavy
                  ? "bg-white text-brand hover:bg-white/90"
                  : "bg-brand text-brand-foreground hover:bg-brand/90"
              }`}
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={secondaryHref}
              className={`inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors ${
                isNavy
                  ? "border border-white/20 text-white hover:bg-white/10"
                  : "border border-border text-foreground hover:bg-muted"
              }`}
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
