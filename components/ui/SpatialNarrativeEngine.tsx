"use client"

/**
 * SpatialNarrativeEngine
 *
 * Makes the homepage feel like traveling through a system.
 *
 * ARCHITECTURE
 * ─────────────
 * Each section lives inside a <SpatialChapter id="ch-*"> wrapper.
 * The engine runs ONE requestAnimationFrame loop per scroll tick.
 * That loop reads each section's live getBoundingClientRect() position
 * and writes CSS transforms directly to the inner wrapper DOM node —
 * no React state batching, no CSS transitions on the core motion.
 *
 * SPATIAL TRANSFORM VOCABULARY
 * ──────────────────────────────
 * The entire sequence is ONE float `prog` (0 → N-1) that never stops moving.
 * Per-chapter, a second float `t` (0 → 1) drives three phases:
 *
 *   ENTER  (sectionTop: 0.78×vh → 0)
 *     scale(0.94→1) translateY(26px→0) opacity(0→1)
 *     transform-origin varies per chapter — each section "zooms from" a
 *     different anchor, so you feel like you're drilling into a different
 *     element of the UI every time rather than the same flat tilt.
 *
 *   DWELL  (section fills viewport)
 *     identity — section reads naturally, zero transform cost.
 *
 *   EXIT   (sectionBottom: 0.28×vh → 0)
 *     scale(1→1.038) translateY(0→-18px) opacity(1→0.62)
 *     Section blooms from the same chapter origin, then fades as it
 *     floats above the camera — the "panel passing overhead" feel.
 *
 * Performance contract
 * ─────────────────────
 * Only `transform` (scale + translateY) and `opacity` are animated —
 * both are GPU-composited properties with zero CSS repaint cost.
 * No filter, no rotateX, no perspective. Sections more than 2×vh away
 * from the viewport are skipped entirely. The navVisible React state
 * only fires when the boolean value actually changes.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface NarrativeChapter {
  id: string
  /** e.g. "01" "02" … "FIN" */
  code: string
  /** Full label shown in the crossfade nav */
  label: string
}

// ─────────────────────────────────────────────────────────────────────────────
// Context — lets SpatialChapter children register their inner DOM node
// ─────────────────────────────────────────────────────────────────────────────

interface SpatialCtx {
  register: (id: string, el: HTMLDivElement) => void
}
const SpatialCtx = createContext<SpatialCtx | null>(null)

// ─────────────────────────────────────────────────────────────────────────────
// Easing
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Exponential ease-out — snaps the section into the viewport very fast,
 * then glides the last few pixels to a clean rest.
 * This gives the "system component locking into place" feel.
 */
function easeOutExpo(t: number): number {
  const c = Math.min(1, Math.max(0, t))
  return c === 1 ? 1 : 1 - Math.pow(2, -10 * c)
}

/**
 * Cubic ease-out for opacity — slightly slower than the position snap
 * so the section feels like it's solidifying after it has already moved.
 */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - Math.min(1, Math.max(0, t)), 3)
}

/** Quadratic ease-in for the exit — section accelerates away from camera. */
function easeIn2(t: number): number {
  const c = Math.min(1, Math.max(0, t))
  return c * c
}

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

/** Pixel gap between nav dots */
const DOT_GAP = 26

/**
 * Entry animation begins when sectionTop is 78% of vh below the viewport top.
 * Tighter band = less total work per frame.
 */
const ENTER_BAND = 0.78

/**
 * Exit animation begins when only 28% of the section's height is still visible.
 * Section blooms and floats away over this distance.
 */
const EXIT_BAND = 0.28

/**
 * Per-chapter transform-origins.
 *
 * Each section zooms from a slightly different anchor point so every
 * transition feels like you're drilling into a different panel of the UI —
 * not the same center-scale repeated eleven times.
 *
 * The pattern: hero/cta anchor above center, data sections anchor right,
 * narrative sections anchor left, the video anchors dead center.
 * Subtle (±12% offset) — enough to feel spatial, not enough to distort content.
 */
const ORIGINS: readonly string[] = [
  "50% 38%",   // 00 · hero         — zoom from headline
  "38% 52%",   // 01 · problem      — left-center
  "62% 48%",   // 02 · metrics      — right-center
  "54% 44%",   // 03 · services     — upper-right of center
  "38% 56%",   // 04 · solutions    — lower-left
  "62% 42%",   // 05 · automation   — upper-right
  "50% 50%",   // 06 · video        — pure center (letterbox feel)
  "44% 54%",   // 07 · case-studies — lower-left
  "56% 46%",   // 08 · industries   — upper-right
  "42% 58%",   // 09 · insights     — lower-left
  "50% 54%",   // 10 · cta          — slightly below center
] as const

// ─────────────────────────────────────────────────────────────────────────────
// SpatialNarrativeEngine
// ─────────────────────────────────────────────────────────────────────────────

export function SpatialNarrativeEngine({
  chapters,
  children,
}: {
  chapters: NarrativeChapter[]
  children: ReactNode
}) {
  const N = chapters.length

  // Map from chapter id → inner div DOM node (populated by SpatialChapter)
  const innerMap = useRef<Map<string, HTMLDivElement>>(new Map())
  const ticking  = useRef(false)
  const rafId    = useRef(0)

  // Nav progress — the only React state updated during scroll
  const progRef        = useRef(0)
  const navVisibleRef  = useRef(false)           // avoids spurious re-renders
  const [prog, setProg]             = useState(0)
  const [navVisible, setNavVisible] = useState(false)

  const register = useCallback((id: string, el: HTMLDivElement) => {
    innerMap.current.set(id, el)
  }, [])

  // ── Core rAF tick ──────────────────────────────────────────────────────────
  const tick = useCallback(() => {
    ticking.current = false
    const vh = window.innerHeight

    // ── 1. Nav progress float (0 … N-1) ─────────────────────────────────────
    const mid = vh * 0.5
    let p = progRef.current
    for (let i = 0; i < N; i++) {
      const el = document.getElementById(chapters[i].id)
      if (!el) continue
      const r = el.getBoundingClientRect()

      if (r.top <= mid && mid < r.bottom) {
        p = i + (mid - r.top) / r.height
        break
      }
      if (i === 0     && mid < r.top    ) { p = 0;     break }
      if (i === N - 1 && mid >= r.bottom) { p = N - 1; break }
    }
    p = Math.max(0, Math.min(N - 1, p))
    if (Math.abs(p - progRef.current) > 0.001) {
      progRef.current = p
      setProg(p)
    }

    // Only fire React re-render when the boolean actually flips
    const nowVisible = window.scrollY > 80
    if (nowVisible !== navVisibleRef.current) {
      navVisibleRef.current = nowVisible
      setNavVisible(nowVisible)
    }

    // ── 2. Spatial transforms — direct DOM writes, zero React overhead ───────
    for (let i = 0; i < N; i++) {
      const ch      = chapters[i]
      const outerEl = document.getElementById(ch.id)
      const innerEl = innerMap.current.get(ch.id)
      if (!outerEl || !innerEl) continue

      const r = outerEl.getBoundingClientRect()

      // Skip sections that are completely off-screen by more than 2×vh.
      // They don't need any transform work until they're approaching.
      if (r.bottom < -vh || r.top > vh * 2) continue

      const origin = ORIGINS[i] ?? "50% 50%"

      // ── DWELL ── section fills the viewport, identity = cheapest possible ──
      if (r.top <= 0 && r.bottom > vh * EXIT_BAND) {
        if (innerEl.dataset.phase !== "dwell") {
          innerEl.style.transform       = ""
          innerEl.style.opacity         = ""
          innerEl.style.transformOrigin = origin
          innerEl.dataset.phase         = "dwell"
        }
        continue
      }

      // ── ENTER ── section is below the fold, zooming toward the camera ───────
      if (r.top > 0) {
        // raw: 0 when sectionTop = ENTER_BAND×vh, 1 when sectionTop = 0
        const raw = 1 - r.top / (vh * ENTER_BAND)

        if (raw <= 0) {
          // Not in enter band yet — hold at rest-state below the fold
          innerEl.style.transform       = `scale(0.94) translateY(26px)`
          innerEl.style.opacity         = "0"
          innerEl.style.transformOrigin = origin
          innerEl.dataset.phase         = "pre"
          continue
        }

        // Position snaps in fast (expo), opacity resolves slightly later (cubic)
        // — so the section physically arrives before it fully materializes.
        const tPos = easeOutExpo(raw)
        const tOp  = easeOutCubic(raw)

        // scale 0.94 → 1.00: section zooms from slightly behind the screen plane
        const scale = 0.94 + 0.06 * tPos
        // translateY 26px → 0: drifts up from just below the focal plane
        const tY    = 26   - 26   * tPos
        // opacity 0 → 1: materializes as it locks into position
        const op    = tOp

        innerEl.style.transform       = `scale(${scale.toFixed(5)}) translateY(${tY.toFixed(3)}px)`
        innerEl.style.opacity         = op.toFixed(5)
        innerEl.style.transformOrigin = origin
        innerEl.dataset.phase         = "enter"
        continue
      }

      // ── EXIT ── section blooms past camera and floats away above ─────────────
      {
        // raw: 0 when r.bottom = EXIT_BAND×vh, 1 when r.bottom = 0
        const raw = 1 - r.bottom / (vh * EXIT_BAND)
        if (raw <= 0) continue

        const t = easeIn2(raw)

        // scale 1.00 → 1.038: section swells as the camera passes through it
        const scale = 1     + 0.038 * t
        // translateY 0 → -18px: floats overhead as the camera moves forward
        const tY    = 0     - 18    * t
        // opacity 1 → 0.62: dims — it's behind us now
        const op    = 1     - 0.38  * t

        innerEl.style.transform       = `scale(${scale.toFixed(5)}) translateY(${tY.toFixed(3)}px)`
        innerEl.style.opacity         = op.toFixed(5)
        innerEl.style.transformOrigin = origin
        innerEl.dataset.phase         = "exit"
      }
    }
  }, [chapters, N])

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true
        rafId.current = requestAnimationFrame(tick)
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    rafId.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      cancelAnimationFrame(rafId.current)
    }
  }, [tick])

  // ── Nav render values ──────────────────────────────────────────────────────
  const floorIdx = Math.floor(prog)
  const ceilIdx  = Math.min(floorIdx + 1, N - 1)
  const fraction = prog - floorIdx
  const needlePx = prog * DOT_GAP
  const spineH   = (N - 1) * DOT_GAP

  return (
    <SpatialCtx.Provider value={{ register }}>
      {children}

      {/* ── Side Chapter Navigator — uses only React state for opacity ── */}
      <nav
        aria-label="Page narrative chapters"
        style={{
          position: "fixed",
          right: "1.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          // Only CSS transition allowed: the fade-in/out of the entire nav
          opacity: navVisible ? 1 : 0,
          pointerEvents: navVisible ? "auto" : "none",
          transition: "opacity 0.8s ease",
        }}
        className="hidden xl:flex"
      >
        {/* ── Crossfade label ── */}
        <div
          style={{
            marginBottom: 14,
            height: 34,
            position: "relative",
            minWidth: 84,
          }}
        >
          {/* Outgoing chapter */}
          <NavLabel
            chapter={chapters[floorIdx]}
            opacity={1 - fraction}
            translateY={fraction * -6}
          />
          {/* Incoming chapter */}
          {floorIdx !== ceilIdx && (
            <NavLabel
              chapter={chapters[ceilIdx]}
              opacity={fraction}
              translateY={(1 - fraction) * 6}
            />
          )}
        </div>

        {/* ── Spine + dots ── */}
        <div style={{ position: "relative", width: 14, height: spineH }}>

          {/* Background trace */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 1,
              transform: "translateX(-50%)",
              background: "rgba(255,255,255,0.07)",
            }}
          />

          {/* Filled trace — height = raw pixel, driven by prog */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              width: 1,
              height: needlePx,
              transform: "translateX(-50%)",
              background:
                "linear-gradient(to bottom, oklch(0.72 0.200 246 / 0.85), oklch(0.50 0.250 250 / 0.40))",
            }}
          />

          {/* Moving needle */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "50%",
              top: needlePx,
              transform: "translate(-50%, -50%)",
              zIndex: 3,
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "oklch(0.84 0.175 238)",
              boxShadow: [
                "0 0 0 2.5px oklch(0.50 0.250 250 / 0.22)",
                "0 0 10px 3px oklch(0.66 0.220 248 / 0.75)",
                "0 0 24px 8px oklch(0.66 0.220 248 / 0.28)",
              ].join(", "),
            }}
          />

          {/* Chapter dots */}
          {chapters.map((ch, i) => {
            const dist  = Math.abs(prog - i)
            const bloom = Math.max(0, 1 - dist / 0.85)
            const r     = 2.5 + bloom * 2              // 2.5 → 4.5 px radius
            const op    = 0.18 + bloom * 0.82          // 0.18 → 1.0 opacity
            const past  = prog > i + 0.05

            return (
              <button
                key={ch.id}
                aria-label={`Jump to ${ch.label}`}
                onClick={() =>
                  document.getElementById(ch.id)?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  position: "absolute",
                  left: "50%",
                  top: i * DOT_GAP,
                  transform: "translate(-50%, -50%)",
                  width: 20,
                  height: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "none",
                  border: "none",
                  padding: 0,
                  zIndex: 2,
                  cursor: "pointer",
                }}
                className="group"
              >
                {/* Dot — size + opacity are driven by prog, no CSS transition */}
                <span
                  aria-hidden="true"
                  style={{
                    display: "block",
                    borderRadius: "50%",
                    width: r * 2,
                    height: r * 2,
                    opacity: op,
                    background: past
                      ? "oklch(0.66 0.220 248)"
                      : "rgba(255,255,255,0.55)",
                    flexShrink: 0,
                  }}
                />

                {/* Hover label — chapter code slides in from the right */}
                <span
                  style={{
                    position: "absolute",
                    right: "calc(100% + 8px)",
                    whiteSpace: "nowrap",
                    fontFamily: "monospace",
                    fontSize: 9,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.40)",
                    pointerEvents: "none",
                  }}
                  className="opacity-0 translate-x-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0"
                >
                  {ch.code}
                </span>
              </button>
            )
          })}
        </div>
      </nav>
    </SpatialCtx.Provider>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SpatialChapter
//
// Wraps one "chapter" (a group of one or more sections).
// Registers its inner div with the engine via context.
// The engine then writes transforms directly to that DOM node.
// ─────────────────────────────────────────────────────────────────────────────

export function SpatialChapter({
  id,
  children,
}: {
  id: string
  children: ReactNode
}) {
  const ctx      = useContext(SpatialCtx)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (innerRef.current) ctx?.register(id, innerRef.current)
  }, [id, ctx])

  return (
    <div id={id}>
      <div
        ref={innerRef}
        style={{
          /**
           * Hoist to GPU compositing layer. With only transform + opacity
           * being animated (no filter), this is as cheap as it gets.
           */
          willChange: "transform, opacity",
          /**
           * transform-origin is overwritten per chapter by the engine tick,
           * but we set a sane default here so the first paint is correct.
           */
          transformOrigin: "50% 50%",
          /**
           * Prevents backface flicker on browsers that use 3D compositing
           * for the will-change layer promotion.
           */
          backfaceVisibility: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// NavLabel sub-component
// ─────────────────────────────────────────────────────────────────────────────

function NavLabel({
  chapter,
  opacity,
  translateY,
}: {
  chapter?: NarrativeChapter
  opacity: number
  translateY: number
}) {
  if (!chapter) return null
  return (
    <div
      style={{
        position: "absolute",
        right: 0,
        top: 0,
        opacity,
        transform: `translateY(${translateY}px)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 2,
        // No CSS transition on opacity/translate — they're driven by prog float
      }}
    >
      <span
        style={{
          fontFamily: "monospace",
          fontSize: 9,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "oklch(0.66 0.220 248 / 0.90)",
        }}
      >
        {chapter.code}
      </span>
      <span
        style={{
          fontFamily: "monospace",
          fontSize: 10,
          letterSpacing: "0.06em",
          color: "oklch(0.945 0.010 250 / 0.52)",
          whiteSpace: "nowrap",
        }}
      >
        {chapter.label}
      </span>
    </div>
  )
}
