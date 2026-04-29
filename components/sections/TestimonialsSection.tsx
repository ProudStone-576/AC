"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { FadeIn } from "@/components/ui/FadeIn"
import { useIntersection } from "@/hooks/use-intersection"
import { testimonials } from "@/lib/constants/company"
import { cn } from "@/lib/utils"

export function TestimonialsSection() {
  const [current, setCurrent] = React.useState(0)
  const [direction, setDirection] = React.useState<"forward" | "backward">("forward")
  const [animKey, setAnimKey] = React.useState(0)
  const [paused, setPaused] = React.useState(false)

  const { ref: cardRef, isVisible: cardVisible } = useIntersection<HTMLDivElement>({ threshold: 0.3 })

  React.useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setDirection("forward")
      setAnimKey((k) => k + 1)
      setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))
    }, 5000)
    return () => clearInterval(id)
  }, [paused])

  function prev() {
    setDirection("backward")
    setAnimKey((k) => k + 1)
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  }

  function next() {
    setDirection("forward")
    setAnimKey((k) => k + 1)
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))
  }

  const testimonial = testimonials[current]

  return (
    <section className="bg-white py-20 dark:bg-background lg:py-24">
      <div className="container-enterprise">
        <FadeIn>
          <div className="mb-12">
            <SectionHeader
              eyebrow="Our Principles"
              title="What we believe"
              align="center"
            />
          </div>
        </FadeIn>

        <div
          className="relative mx-auto max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Quote card — scales in on scroll entry */}
          <div
            ref={cardRef}
            className={cn(
              "rounded-2xl border border-border bg-surface p-8 dark:bg-card sm:p-12 animate-scale-up",
              cardVisible && "is-visible",
            )}
          >
            <Quote className="mb-6 h-8 w-8 text-blue/30" aria-hidden="true" />

            {/* Quote content — slides directionally on navigation */}
            <div
              key={animKey}
              className={direction === "forward" ? "animate-quote-in-right" : "animate-quote-in-left"}
            >
              <blockquote>
                <p className="text-xl leading-relaxed text-foreground sm:text-2xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>
              <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue text-sm font-semibold text-blue-foreground">
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-muted-foreground transition-colors hover:bg-muted hover:text-foreground dark:bg-card"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonials">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === current}
                  onClick={() => {
                    setDirection(index > current ? "forward" : "backward")
                    setAnimKey((k) => k + 1)
                    setCurrent(index)
                  }}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-200",
                    index === current
                      ? "w-6 bg-blue"
                      : "w-1.5 bg-border hover:bg-muted-foreground",
                  )}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-muted-foreground transition-colors hover:bg-muted hover:text-foreground dark:bg-card"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
