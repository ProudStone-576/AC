import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  /**
   * Controls max-width of the subtitle for readability.
   * Defaults to "md" (max-w-2xl).
   */
  subtitleWidth?: "sm" | "md" | "lg" | "full"
}

const subtitleWidths = {
  sm: "max-w-xl",
  md: "max-w-2xl",
  lg: "max-w-3xl",
  full: "",
}

/**
 * SectionHeader — the standard section title block used across all pages.
 *
 * Usage:
 *   <SectionHeader
 *     eyebrow="Services"
 *     title="Everything your enterprise needs"
 *     subtitle="From infrastructure to AI, we handle the complexity."
 *     align="center"
 *   />
 */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
  subtitleClassName,
  subtitleWidth = "md",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-blue">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base leading-relaxed text-muted-foreground sm:text-lg",
            subtitleWidths[subtitleWidth],
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
