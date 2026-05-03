"use client"

import { useEffect, useState } from "react"

const SERVICES = ["IT support.", "Cloud.", "Security.", "Networking.", "Data.", "Apps.", "Everything under one contract."]
const REST =
  "Aethon Core takes care of all your technology across Canada — real people, everything written in your contract, and one team responsible for it all."

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
