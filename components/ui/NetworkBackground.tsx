"use client"

/**
 * NetworkBackground — Aethon Core ambient Three.js animation.
 *
 * Renders a slowly-rotating galactic spiral:
 *   • 5 logarithmic spiral arms, particles streaming outward
 *   • Dense luminous core cluster
 *   • Per-particle flow: each particle advances along its arm each frame
 *   • Mouse parallax tilts the galaxy plane
 *   • Additive blending → natural glow stacking
 *   • mix-blend-mode: screen → vivid on dark sections, invisible on white
 *   • prefers-reduced-motion support
 *   • Full cleanup on unmount
 */

import { useEffect, useRef } from "react"
import * as THREE from "three"

// ── Tuning ────────────────────────────────────────────────────────────────────
const ARMS           = 5
const ARM_TURNS      = 2.2          // spiral rotations per arm
const ARM_P_DESK     = 300          // particles per arm (desktop)
const ARM_P_MOB      = 110          // particles per arm (mobile)
const CORE_P_DESK    = 160
const CORE_P_MOB     = 55
const RADIUS_MIN     = 38
const RADIUS_MAX     = 450
const FLOW_SPEED     = 0.028        // how fast particles advance outward (t01/frame)
const SPIN_SPEED     = 0.00032      // galaxy rotation speed (rad/frame)
const SCATTER_BASE   = 72           // max positional scatter

// Bug 5: guard the 2D context — returns null when canvas 2D is unavailable
function buildGlowTexture(): THREE.CanvasTexture | null {
  const size = 64
  const c    = document.createElement("canvas")
  c.width = c.height = size
  const ctx  = c.getContext("2d")
  if (!ctx) return null                        // canvas 2D blocked (rare but real)
  const mid  = size / 2
  const g    = ctx.createRadialGradient(mid, mid, 0, mid, mid, mid)
  g.addColorStop(0.00, "rgba(255,255,255,1.0)")
  g.addColorStop(0.20, "rgba(185,215,255,0.80)")
  g.addColorStop(0.55, "rgba(80,145,255,0.22)")
  g.addColorStop(1.00, "rgba(0,0,0,0.00)")
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  return new THREE.CanvasTexture(c)
}

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || typeof window === "undefined") return

    // ── Bug 1 + 2: Check WebGL availability before touching Three.js ─────────
    // getShaderPrecisionFormat() returns null in Firefox privacy mode, VMs,
    // and browsers with WebGL blocked. Three.js crashes instead of handling it.
    function isWebGLAvailable(): boolean {
      try {
        const testCanvas = document.createElement("canvas")
        const gl =
          (testCanvas.getContext("webgl2") as WebGL2RenderingContext | null) ??
          (testCanvas.getContext("webgl")  as WebGLRenderingContext  | null) ??
          (testCanvas.getContext("experimental-webgl") as WebGLRenderingContext | null)
        if (!gl) return false
        // The exact call Three.js crashes on — test it ourselves first
        const fmt = gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT)
        return fmt !== null
      } catch {
        return false
      }
    }

    if (!isWebGLAvailable()) return  // silently skip — no animation is fine

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const mobile  = window.innerWidth < 768
    const ARM_P   = mobile ? ARM_P_MOB  : ARM_P_DESK
    const CORE_P  = mobile ? CORE_P_MOB : CORE_P_DESK
    const TOTAL   = ARMS * ARM_P + CORE_P

    // ── Renderer — wrapped in try/catch (Bug 2) ───────────────────────────────
    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha:           true,
        antialias:       false,
        powerPreference: "high-performance",
      })
    } catch {
      // WebGL init failed despite passing the check (driver crash, etc.)
      return
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)

    // ── Scene & camera ────────────────────────────────────────────────────────
    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      52, window.innerWidth / window.innerHeight, 1, 3500,
    )
    camera.position.set(0, 530, 140)
    camera.lookAt(0, 0, 0)

    // ── Per-particle data ─────────────────────────────────────────────────────
    // Arm particles: store arm-relative info for per-frame streaming
    const posArr  = new Float32Array(TOTAL * 3)
    const colArr  = new Float32Array(TOTAL * 3)

    // Streaming state
    const flowT     = new Float32Array(TOTAL)   // current t01 (0–1) along arm
    const scatterR  = new Float32Array(TOTAL)   // fixed radial scatter
    const scatterA  = new Float32Array(TOTAL)   // fixed angular scatter
    const scatterY  = new Float32Array(TOTAL)   // fixed vertical scatter
    const armOf     = new Int8Array(TOTAL)       // arm index; -1 = core

    // Seed arm particles
    for (let arm = 0; arm < ARMS; arm++) {
      const base = arm * ARM_P
      for (let j = 0; j < ARM_P; j++) {
        const i       = base + j
        flowT[i]      = j / ARM_P                               // staggered start
        scatterR[i]   = (Math.random() - 0.5) * SCATTER_BASE
        scatterA[i]   = (Math.random() - 0.5) * 0.38
        scatterY[i]   = (Math.random() - 0.5) * SCATTER_BASE * 0.14
        armOf[i]      = arm
      }
    }

    // Seed core particles (static, no arm streaming)
    for (let j = 0; j < CORE_P; j++) {
      const i    = ARMS * ARM_P + j
      armOf[i]   = -1
      const angle = Math.random() * Math.PI * 2
      const r     = Math.pow(Math.random(), 0.42) * 52
      posArr[i * 3]     = r * Math.cos(angle)
      posArr[i * 3 + 1] = (Math.random() - 0.5) * 16
      posArr[i * 3 + 2] = r * Math.sin(angle)
      colArr[i * 3]     = 0.70
      colArr[i * 3 + 1] = 0.82
      colArr[i * 3 + 2] = 1.00
    }

    // ── Geometry ──────────────────────────────────────────────────────────────
    const geo     = new THREE.BufferGeometry()
    const posAttr = new THREE.BufferAttribute(posArr, 3)
    const colAttr = new THREE.BufferAttribute(colArr, 3)
    posAttr.usage = THREE.DynamicDrawUsage
    colAttr.usage = THREE.DynamicDrawUsage
    geo.setAttribute("position", posAttr)
    geo.setAttribute("color",    colAttr)

    const tex = buildGlowTexture()   // null if canvas 2D unavailable (Bug 5)
    const mat = new THREE.PointsMaterial({
      vertexColors:    true,
      map:             tex ?? undefined,
      size:            6,
      sizeAttenuation: true,
      transparent:     true,
      opacity:         0.88,
      blending:        THREE.AdditiveBlending,
      depthWrite:      false,
    })

    const points = new THREE.Points(geo, mat)
    scene.add(points)
    scene.rotation.x = 0.26   // initial tilt so galaxy reads as a plane

    // ── Mouse parallax ────────────────────────────────────────────────────────
    let targetTX = 0.26  // matches initial tilt
    let targetCX = 0     // camera X shift

    const onMouse = (e: MouseEvent) => {
      targetTX = 0.26 + ((e.clientY / window.innerHeight) - 0.5) * 0.32
      targetCX = ((e.clientX / window.innerWidth) - 0.5) * 90
    }
    const onTouch = (e: TouchEvent) => {
      if (!e.touches[0]) return
      targetTX = 0.26 + ((e.touches[0].clientY / window.innerHeight) - 0.5) * 0.18
      targetCX = ((e.touches[0].clientX / window.innerWidth) - 0.5) * 45
    }
    window.addEventListener("mousemove", onMouse, { passive: true })
    window.addEventListener("touchmove", onTouch, { passive: true })

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", onResize)

    // ── Bug 3: Handle WebGL context loss ─────────────────────────────────────
    // When the GPU resets (tab backgrounded, driver crash, too many contexts),
    // Three.js will try to render on a lost context and throw. Stop the loop.
    let contextLost = false
    const onContextLost = (e: Event) => {
      e.preventDefault()
      contextLost = true
      cancelAnimationFrame(animId)
    }
    const onContextRestored = () => {
      contextLost = false
      tick()
    }
    canvas.addEventListener("webglcontextlost",     onContextLost,     false)
    canvas.addEventListener("webglcontextrestored", onContextRestored, false)

    // ── Animation loop ────────────────────────────────────────────────────────
    let animId: number
    let t = 0
    const EASE = 0.032

    const tick = () => {
      if (contextLost) return          // Bug 3: don't render on a lost context
      animId = requestAnimationFrame(tick)
      t += 0.012

      if (!reduced) {
        // — Stream arm particles outward —
        for (let arm = 0; arm < ARMS; arm++) {
          const armOffset = (arm / ARMS) * Math.PI * 2
          const base      = arm * ARM_P

          for (let j = 0; j < ARM_P; j++) {
            const i = base + j

            // Advance t01 and wrap
            flowT[i] = (flowT[i] + FLOW_SPEED * 0.012) % 1.0
            const t01    = flowT[i]
            const theta  = t01 * ARM_TURNS * Math.PI * 2
            const r      = RADIUS_MIN + t01 * RADIUS_MAX + scatterR[i] * (1 - t01 * 0.5)
            const angle  = armOffset + theta + scatterA[i]

            posArr[i * 3]     = r * Math.cos(angle)
            posArr[i * 3 + 1] = scatterY[i]
            posArr[i * 3 + 2] = r * Math.sin(angle)

            // Brightness fades with radius (inner = bright, outer = dim)
            const bright = 0.22 + (1 - t01) * 0.78
            colArr[i * 3]     = (0.18 + 0.35 * (1 - t01)) * bright
            colArr[i * 3 + 1] = 0.52 * bright
            colArr[i * 3 + 2] = 1.00 * bright
          }
        }

        posAttr.needsUpdate = true
        colAttr.needsUpdate = true

        // — Galaxy spin —
        scene.rotation.y += SPIN_SPEED

        // — Mouse tilt on X —
        scene.rotation.x += (targetTX - scene.rotation.x) * EASE

        // — Camera parallax on X —
        camera.position.x += (targetCX - camera.position.x) * EASE
        camera.lookAt(0, 0, 0)

        // — Subtle opacity pulse —
        mat.opacity = 0.80 + 0.10 * Math.sin(t * 0.55)
      }

      renderer.render(scene, camera)
    }

    tick()

    // ── Cleanup (Bug 4: safe teardown even if renderer init failed) ──────────
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("mousemove", onMouse)
      window.removeEventListener("touchmove", onTouch)
      window.removeEventListener("resize",    onResize)
      canvas.removeEventListener("webglcontextlost",     onContextLost)
      canvas.removeEventListener("webglcontextrestored", onContextRestored)
      // Guard: only call GL methods if context is still valid
      if (!contextLost) {
        try { renderer.forceContextLoss() } catch { /* already lost */ }
      }
      try { renderer.dispose() } catch { /* ignore */ }
      geo.dispose()
      mat.dispose()
      tex?.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 2, mixBlendMode: "screen" }}
      aria-hidden="true"
    />
  )
}
