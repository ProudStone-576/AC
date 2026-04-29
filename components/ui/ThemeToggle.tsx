"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
  /** "icon" = bare icon button · "pill" = labeled pill with icon */
  variant?: "icon" | "pill"
}

export function ThemeToggle({ className, variant = "icon" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  // Avoid hydration mismatch — render a stable placeholder until mounted
  if (!mounted) {
    return (
      <div
        className={cn(
          variant === "pill"
            ? "flex h-9 w-[88px] rounded-full border border-border bg-muted"
            : "h-9 w-9 rounded-md border border-border bg-muted",
          className,
        )}
        aria-hidden="true"
      />
    )
  }

  const isDark = resolvedTheme === "dark"

  function toggle() {
    setTheme(isDark ? "light" : "dark")
  }

  if (variant === "pill") {
    return (
      <button
        type="button"
        onClick={toggle}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className={cn(
          "relative flex h-9 w-[88px] items-center rounded-full border p-1 transition-colors duration-300",
          isDark
            ? "border-white/15 bg-white/[0.06] hover:bg-white/[0.10]"
            : "border-border bg-muted hover:bg-muted/80",
          className,
        )}
      >
        {/* Track */}
        <span
          className={cn(
            "absolute h-7 w-7 rounded-full transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            isDark
              ? "left-[calc(100%-32px)] bg-blue"
              : "left-1 bg-blue",
          )}
        />
        {/* Icons */}
        <Sun
          className={cn(
            "relative z-10 ml-1.5 h-3.5 w-3.5 transition-all duration-300",
            isDark ? "text-white/30" : "text-blue-foreground",
          )}
        />
        <Moon
          className={cn(
            "relative z-10 ml-auto mr-1.5 h-3.5 w-3.5 transition-all duration-300",
            isDark ? "text-blue-foreground" : "text-muted-foreground/50",
          )}
        />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-md border transition-colors",
        isDark
          ? "border-white/15 bg-white/[0.06] text-white/70 hover:bg-white/[0.12] hover:text-white"
          : "border-border bg-transparent text-foreground/65 hover:bg-muted hover:text-foreground",
        className,
      )}
    >
      {isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  )
}
