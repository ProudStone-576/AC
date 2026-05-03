"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const CHAPTER_PHOTOS = [
  { id: "ch-hero",         src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1280&q=55" },
  { id: "ch-problem",      src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1280&q=55" },
  { id: "ch-terminal",     src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1280&q=55" },
  { id: "ch-metrics",      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1280&q=55" },
  { id: "ch-services",     src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1280&q=55" },
  { id: "ch-solutions",    src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1280&q=55" },
  { id: "ch-automation",   src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1280&q=55" },
  { id: "ch-video",        src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1280&q=55" },
  { id: "ch-case-studies", src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1280&q=55" },
  { id: "ch-industries",   src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1280&q=55" },
  { id: "ch-globe",        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1280&q=55" },
  { id: "ch-insights",     src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1280&q=55" },
  { id: "ch-cta",          src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1280&q=55" },
] as const

export function HomepageBackdrop() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener("change", handler)

    const observer = new IntersectionObserver(
      (entries) => {
        let best: { idx: number; ratio: number } = { idx: -1, ratio: 0 }
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > best.ratio) {
            const idx = CHAPTER_PHOTOS.findIndex((p) => p.id === e.target.id)
            if (idx !== -1) best = { idx, ratio: e.intersectionRatio }
          }
        })
        if (best.idx !== -1) setActiveIdx(best.idx)
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 1.0],
      },
    )

    CHAPTER_PHOTOS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      observer.disconnect()
      mq.removeEventListener("change", handler)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, zIndex: -1, overflow: "hidden" }}
    >
      {CHAPTER_PHOTOS.map(({ id, src }, i) => (
        <div
          key={id}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === activeIdx ? 1 : 0,
            transition: reducedMotion ? "none" : "opacity 1.8s ease-in-out",
          }}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="100vw"
            priority={i === 0}
            className="object-cover object-center"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(6,11,20,0.82)" }} />
        </div>
      ))}
    </div>
  )
}
