"use client"

import { useEffect, useState } from "react"

const SERVICES = ["Managed IT.", "Cloud.", "Security.", "Network.", "Data.", "Apps.", "All under one agreement."]
const REST =
  "Aethon Core manages all your IT across Canada — real engineers, a written guarantee, and full responsibility for every outcome."

export function HeroSubtitleAnimated() {
  const [visible, setVisible] = useState<boolean[]>(() =>
    new Array(SERVICES.length).fill(false)
  )
  const [showRest, setShowRest] = useState(false)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    SERVICES.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setVisible((prev) => {
            const next = [...prev]
            next[i] = true
            return next
          })
        }, 900 + i * 175)
      )
    })

    timers.push(
      setTimeout(
        () => setShowRest(true),
        900 + SERVICES.length * 175 + 140
      )
    )

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <p className="mt-5 max-w-[460px] text-lg leading-relaxed text-canvas-muted">
      {SERVICES.map((service, i) => (
        <span
          key={service}
          style={{
            display: "inline",
            opacity: visible[i] ? undefined : 0,
            animation: visible[i]
              ? "service-pop 0.6s cubic-bezier(0.16,1,0.3,1) both"
              : "none",
          }}
        >
          {service}{" "}
        </span>
      ))}
      <span
        style={{
          opacity: showRest ? 1 : 0,
          transition: "opacity 0.85s ease",
        }}
      >
        {REST}
      </span>
    </p>
  )
}
