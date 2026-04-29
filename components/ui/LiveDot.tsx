import { cn } from "@/lib/utils"

interface LiveDotProps {
  /** "green" for operational, "blue" for active/processing */
  color?: "green" | "blue"
  className?: string
}

/** Pulsing live indicator dot */
export function LiveDot({ color = "green", className }: LiveDotProps) {
  return (
    <span className={cn("relative flex h-2 w-2 shrink-0", className)} aria-hidden="true">
      <span
        className={cn(
          "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
          color === "green" ? "bg-emerald-400" : "bg-blue",
        )}
        style={{ animationDuration: "2.5s" }}
      />
      <span
        className={cn(
          "relative inline-flex h-2 w-2 rounded-full",
          color === "green" ? "bg-emerald-500" : "bg-blue",
        )}
      />
    </span>
  )
}
