"use client"

import * as React from "react"
import { useIntersection } from "@/hooks/use-intersection"
import { cn } from "@/lib/utils"

type AnimVariant = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up" | "blur-up"

const variantClass: Record<AnimVariant, string> = {
  "fade-up":    "animate-fade-up",
  "fade-in":    "animate-fade-in",
  "slide-left": "animate-slide-left",
  "slide-right":"animate-slide-right",
  "scale-up":   "animate-scale-up",
  "blur-up":    "animate-blur-up",
}

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number   // ms
  /** true = fade + rise. false = fade only. Ignored when `variant` is set. */
  rise?: boolean
  /** Stagger children with sequential delays */
  stagger?: boolean
  /** Override animation variant */
  variant?: AnimVariant
}

export function FadeIn({ children, className, delay = 0, rise = true, stagger = false, variant }: FadeInProps) {
  const { ref, isVisible } = useIntersection<HTMLDivElement>({ threshold: 0.1 })

  const animClass = variant
    ? variantClass[variant]
    : rise ? "animate-fade-up" : "animate-fade-in"

  return (
    <div
      ref={ref}
      className={cn(animClass, isVisible && "is-visible", stagger && "stagger", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
