"use client"

/**
 * PageTransition — "System Slate"
 *
 * Two brand-navy panels slide in from the top and bottom, meeting at
 * the viewport center. At the seam: a bright blue arc glow — the Aethon
 * Core electric signal. Navigation fires while the screen is covered.
 * Panels sweep back out, revealing the new page already painted underneath.
 *
 * HOW IT WORKS
 * ─────────────
 * A capture-phase click listener on `document` intercepts every internal
 * `<a href>` click before React (or next/link) sees it. We call
 * e.preventDefault(), start the cover animation, push the route after
 * COVER_MS, then reveal. Because it runs in the capture phase (not bubble),
 * it fires first — no flash, no double navigation.
 *
 * PHASE MACHINE
 * ──────────────
 *   idle       → no panels rendered
 *   covering   → panels animate in from top/bottom
 *   covered    → panels fully closed, glow seam visible, route pushed
 *   revealing  → panels animate out to top/bottom
 *   idle       → panels unmounted, transition complete
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
import { useRouter } from "next/navigation"

// ─────────────────────────────────────────────────────────────────────────────
// Timing
// ─────────────────────────────────────────────────────────────────────────────

/** ms for panels to close (slide in to center) */
const COVER_MS = 300
/** ms to hold with glow visible before revealing */
const HOLD_MS  = 55
/** ms for panels to open (slide out from center) */
const REVEAL_MS = 280

// ─────────────────────────────────────────────────────────────────────────────
// Context  (exported so other components can trigger transitions programmatically)
// ─────────────────────────────────────────────────────────────────────────────

interface TransitionCtx {
  navigate: (href: string) => void
}

const TransitionCtx = createContext<TransitionCtx>({ navigate: () => {} })
export const usePageTransition = () => useContext(TransitionCtx)

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

type Phase = "idle" | "covering" | "covered" | "revealing"

export function PageTransition({ children }: { children: ReactNode }) {
  const router = useRouter()
  const busy   = useRef(false)
  const [phase, setPhase] = useState<Phase>("idle")

  // ── Navigate with transition ──────────────────────────────────────────────
  const navigate = useCallback(
    (href: string) => {
      if (busy.current) return
      busy.current = true

      // 1. Panels close
      setPhase("covering")

      setTimeout(() => {
        // 2. Route push — new page paints under the closed panels
        router.push(href)
        setPhase("covered")

        setTimeout(() => {
          // 3. Panels open
          setPhase("revealing")

          setTimeout(() => {
            // 4. Done
            setPhase("idle")
            busy.current = false
          }, REVEAL_MS + 80)
        }, HOLD_MS)
      }, COVER_MS)
    },
    [router],
  )

  // ── Capture-phase click interceptor ───────────────────────────────────────
  // Runs BEFORE React's synthetic onClick and BEFORE next/link's router.push,
  // so we can preventDefault and own the navigation ourselves.
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (busy.current) return

      const a = (e.target as Element).closest<HTMLAnchorElement>("a[href]")
      if (!a) return

      const href = a.getAttribute("href") ?? ""

      // Skip: external links, hash jumps, protocols, modifier keys, new tabs
      if (
        e.metaKey ||
        e.ctrlKey  ||
        e.shiftKey ||
        e.altKey   ||
        a.target === "_blank"          ||
        a.hasAttribute("download")     ||
        href.startsWith("#")           ||
        href.startsWith("mailto:")     ||
        href.startsWith("tel:")        ||
        (href.startsWith("http") && !href.startsWith(window.location.origin))
      ) return

      // Normalise to an absolute pathname (strip the origin if present)
      const path = href.startsWith(window.location.origin)
        ? href.slice(window.location.origin.length) || "/"
        : href

      // Skip if already on this page
      if (path === window.location.pathname + (window.location.search || "")) return

      e.preventDefault()
      navigate(path)
    }

    document.addEventListener("click", handler, true) // ← capture phase
    return () => document.removeEventListener("click", handler, true)
  }, [navigate])

  // ── Derived render values ─────────────────────────────────────────────────
  const show = phase !== "idle"

  // During "covering" and "covered" the panels use the *-in animation (closing).
  // During "revealing" they switch to the *-out animation (opening).
  const topClass = phase === "revealing" ? "tp-out" : "tp-in"
  const botClass = phase === "revealing" ? "bp-out" : "bp-in"

  // Glow seam is only visible during the "covered" moment
  const glowVisible = phase === "covered"

  return (
    <TransitionCtx.Provider value={{ navigate }}>
      {children}

      {/* ── Overlay panels ───────────────────────────────────────────────── */}
      {show && (
        <>
          {/* Top panel — slides down from above */}
          <div
            aria-hidden="true"
            className={topClass}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              /* 51% so the two panels have a 2% overlap at center,
                 preventing a gap pixel from showing through */
              height: "51%",
              zIndex: 9998,
              background: "oklch(0.090 0.018 252)",
              willChange: "transform",
              overflow: "hidden",
            }}
          >
            {/* Subtle brand grid texture so the panel feels like a data-center wall */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-grid-dark"
              style={{ opacity: 0.22 }}
            />
            {/* Depth gradient — blue tint bleeds toward the seam */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "35%",
                background:
                  "linear-gradient(to bottom, transparent, oklch(0.50 0.250 250 / 0.07))",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Bottom panel — slides up from below */}
          <div
            aria-hidden="true"
            className={botClass}
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              height: "51%",
              zIndex: 9998,
              background: "oklch(0.090 0.018 252)",
              willChange: "transform",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-grid-dark"
              style={{ opacity: 0.22 }}
            />
            {/* Depth gradient — tint bleeds toward the seam from below */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "35%",
                background:
                  "linear-gradient(to top, transparent, oklch(0.50 0.250 250 / 0.07))",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* ── Glow seam — the electric arc between the two panels ── */}
          <div
            aria-hidden="true"
            style={{
              position: "fixed",
              left: 0,
              right: 0,
              top: "50%",
              height: "1px",
              marginTop: "-0.5px",
              zIndex: 9999,
              background: "oklch(0.88 0.155 238)",
              boxShadow: [
                "0 0 4px  1px  oklch(0.88 0.155 238 / 0.95)",
                "0 0 14px 4px  oklch(0.72 0.200 246 / 0.85)",
                "0 0 40px 12px oklch(0.66 0.220 248 / 0.55)",
                "0 0 90px 28px oklch(0.50 0.250 250 / 0.28)",
              ].join(", "),
              opacity: glowVisible ? 1 : 0,
              transition: `opacity ${glowVisible ? 50 : 240}ms ease`,
              pointerEvents: "none",
            }}
          />
        </>
      )}
    </TransitionCtx.Provider>
  )
}
