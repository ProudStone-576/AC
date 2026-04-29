import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { VideoHeroBackground } from "@/components/ui/VideoHeroBackground"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeroProps {
  breadcrumbs?: BreadcrumbItem[]
  eyebrow?: string
  title: string
  subtitle?: string
  className?: string
  /** Optional visual rendered on the right side of the hero in a two-column layout */
  visual?: ReactNode
  /**
   * "default" — white background with subtle bottom border
   * "tinted"  — surface background
   * "dark"    — canvas (navy) background
   */
  variant?: "default" | "tinted" | "dark"
  /**
   * Path to a looping background video (relative to /public).
   * Example: "/videos/hero-bg.mp4"
   * When provided the hero expands to min-h-[60vh] and displays the video
   * behind a dark gradient overlay. The variant prop is ignored.
   */
  videoSrc?: string
  /**
   * Path to a poster image shown before the video loads and for users who
   * have prefers-reduced-motion enabled. Example: "/videos/hero-bg-poster.jpg"
   */
  videoPoster?: string
  /**
   * Full URL to a background image (e.g. Unsplash). Renders with the same
   * dark overlay treatment as a video hero when no videoSrc is provided.
   */
  backgroundImageSrc?: string
}

/**
 * PageHero — inner page header used on all non-homepage pages.
 * When `visual` is provided the layout becomes a two-column grid:
 * text content on the left, visual panel on the right.
 * When `videoSrc` is provided a full-bleed looping video plays behind the content.
 */
export function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  subtitle,
  className,
  visual,
  variant = "default",
  videoSrc,
  videoPoster,
  backgroundImageSrc,
}: PageHeroProps) {
  const hasVideo = Boolean(videoSrc)
  const hasBackgroundImage = Boolean(backgroundImageSrc) && !hasVideo
  const isDark = hasVideo || hasBackgroundImage || variant === "dark"

  return (
    <section
      className={cn(
        "border-b",
        (hasVideo || hasBackgroundImage)
          ? "relative overflow-hidden min-h-[60vh] flex items-center border-white/10"
          : cn(
              "py-12 lg:py-16 border-border",
              variant === "default" && "bg-white dark:bg-background",
              variant === "tinted" && "bg-surface dark:bg-card",
              variant === "dark" && "bg-canvas border-white/10",
            ),
        className,
      )}
    >
      {/* ── Video background ── */}
      {hasVideo && (
        <>
          <VideoHeroBackground src={videoSrc!} />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/35"
          />
        </>
      )}

      {/* ── Background image ── */}
      {hasBackgroundImage && (
        <>
          <Image
            src={backgroundImageSrc!}
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/35"
          />
        </>
      )}

      <div className={cn("container-enterprise", (hasVideo || hasBackgroundImage) ? "relative z-10 py-20 lg:py-28" : "")}>
        <div className={cn(
          visual ? "grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_400px]" : "",
        )}>
          {/* ── Left: text content ── */}
          <div>
            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
                  <li>
                    <Link
                      href="/"
                      className={cn(
                        "transition-colors hover:text-foreground",
                        isDark && "text-canvas-muted hover:text-canvas-foreground",
                      )}
                    >
                      Home
                    </Link>
                  </li>
                  {breadcrumbs.map((crumb, index) => (
                    <li key={index} className="flex items-center gap-1">
                      <ChevronRight
                        className={cn(
                          "h-3.5 w-3.5",
                          isDark ? "text-canvas-muted/50" : "text-border",
                        )}
                        aria-hidden="true"
                      />
                      {crumb.href && index < breadcrumbs.length - 1 ? (
                        <Link
                          href={crumb.href}
                          className={cn(
                            "transition-colors hover:text-foreground",
                            isDark && "text-canvas-muted hover:text-canvas-foreground",
                          )}
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span
                          aria-current="page"
                          className={cn(
                            "font-medium text-foreground",
                            isDark && "text-canvas-foreground",
                          )}
                        >
                          {crumb.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {/* Title block */}
            <div className={cn(visual ? "" : "max-w-3xl")}>
              {eyebrow && (
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">
                  {eyebrow}
                </p>
              )}
              <h1
                className={cn(
                  "text-4xl font-semibold leading-tight tracking-tight sm:text-5xl",
                  isDark ? "text-canvas-foreground" : "text-foreground",
                )}
              >
                {title}
              </h1>
              {subtitle && (
                <p
                  className={cn(
                    "mt-4 text-lg leading-relaxed",
                    isDark ? "text-canvas-muted" : "text-muted-foreground",
                  )}
                >
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {/* ── Right: visual panel ── */}
          {visual && (
            <div className="hidden lg:block">
              {visual}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
