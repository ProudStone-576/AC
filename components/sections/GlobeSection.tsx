"use client"

import * as React from "react"
import * as THREE from "three"
import { FadeIn } from "@/components/ui/FadeIn"

// ── City nodes ────────────────────────────────────────────────────────────────

const NODES = [
  // North America
  { name: "Toronto",     lat:  43.65, lng:  -79.38, region: "NA",   tier: 1 },
  { name: "Montréal",    lat:  45.50, lng:  -73.57, region: "NA",   tier: 2 },
  { name: "New York",    lat:  40.71, lng:  -74.01, region: "NA",   tier: 1 },
  { name: "Chicago",     lat:  41.88, lng:  -87.63, region: "NA",   tier: 2 },
  { name: "Dallas",      lat:  32.78, lng:  -96.80, region: "NA",   tier: 2 },
  { name: "Los Angeles", lat:  34.05, lng: -118.24, region: "NA",   tier: 1 },
  { name: "Seattle",     lat:  47.61, lng: -122.33, region: "NA",   tier: 2 },
  { name: "Miami",       lat:  25.77, lng:  -80.19, region: "NA",   tier: 2 },
  { name: "Denver",      lat:  39.74, lng: -104.98, region: "NA",   tier: 2 },
  // South America
  { name: "São Paulo",   lat: -23.55, lng:  -46.63, region: "SA",   tier: 1 },
  { name: "Bogotá",      lat:   4.71, lng:  -74.07, region: "SA",   tier: 2 },
  // Europe
  { name: "London",      lat:  51.51, lng:   -0.13, region: "EU",   tier: 1 },
  { name: "Amsterdam",   lat:  52.37, lng:    4.90, region: "EU",   tier: 1 },
  { name: "Frankfurt",   lat:  50.11, lng:    8.68, region: "EU",   tier: 1 },
  { name: "Paris",       lat:  48.86, lng:    2.35, region: "EU",   tier: 2 },
  { name: "Stockholm",   lat:  59.33, lng:   18.07, region: "EU",   tier: 2 },
  { name: "Zürich",      lat:  47.38, lng:    8.54, region: "EU",   tier: 2 },
  { name: "Madrid",      lat:  40.42, lng:   -3.70, region: "EU",   tier: 2 },
  // Middle East / Africa
  { name: "Dubai",       lat:  25.20, lng:   55.27, region: "ME",   tier: 2 },
  { name: "Johannesburg",lat: -26.20, lng:   28.04, region: "AF",   tier: 2 },
  // Asia-Pacific
  { name: "Mumbai",      lat:  19.08, lng:   72.88, region: "APAC", tier: 2 },
  { name: "Singapore",   lat:   1.35, lng:  103.82, region: "APAC", tier: 1 },
  { name: "Hong Kong",   lat:  22.32, lng:  114.17, region: "APAC", tier: 1 },
  { name: "Tokyo",       lat:  35.69, lng:  139.69, region: "APAC", tier: 1 },
  { name: "Seoul",       lat:  37.57, lng:  126.98, region: "APAC", tier: 2 },
  { name: "Sydney",      lat: -33.87, lng:  151.21, region: "APAC", tier: 1 },
  { name: "Taipei",      lat:  25.03, lng:  121.56, region: "APAC", tier: 2 },
]

type ArcType = "primary" | "secondary" | "monitor"

const ARCS: { a: number; b: number; type: ArcType }[] = [
  // Toronto hub — primary backbone
  { a:  0, b:  1, type: "primary"   },
  { a:  0, b:  2, type: "primary"   },
  { a:  0, b:  5, type: "primary"   },
  { a:  0, b: 11, type: "primary"   }, // Toronto → London (transatlantic)
  { a:  0, b:  3, type: "secondary" },
  // US domestic
  { a:  2, b:  7, type: "secondary" },
  { a:  2, b:  3, type: "secondary" },
  { a:  3, b:  4, type: "secondary" },
  { a:  4, b:  5, type: "secondary" },
  { a:  5, b:  6, type: "secondary" },
  { a:  6, b:  8, type: "monitor"   },
  { a:  8, b:  4, type: "monitor"   },
  // Americas ↔ South America
  { a:  7, b:  9, type: "secondary" },
  { a:  9, b: 10, type: "monitor"   },
  { a: 10, b:  2, type: "monitor"   },
  // Europe backbone
  { a: 11, b: 12, type: "primary"   },
  { a: 11, b: 13, type: "primary"   },
  { a: 12, b: 14, type: "secondary" },
  { a: 13, b: 16, type: "secondary" },
  { a: 14, b: 17, type: "monitor"   },
  { a: 15, b: 12, type: "monitor"   },
  // Europe → ME / Africa
  { a: 13, b: 18, type: "secondary" },
  { a: 18, b: 19, type: "monitor"   },
  // Europe → Asia-Pacific
  { a: 13, b: 21, type: "primary"   },
  { a: 18, b: 20, type: "secondary" },
  // Asia-Pacific backbone
  { a: 20, b: 21, type: "secondary" },
  { a: 21, b: 22, type: "primary"   },
  { a: 22, b: 23, type: "primary"   },
  { a: 23, b: 24, type: "secondary" },
  { a: 23, b: 26, type: "secondary" },
  { a: 24, b: 22, type: "monitor"   },
  { a: 25, b: 21, type: "secondary" },
  // Trans-Pacific
  { a:  6, b: 21, type: "primary"   },
  { a:  5, b: 23, type: "monitor"   },
]

const ARC_COLORS: Record<ArcType, number> = {
  primary:   0x3b82f6,
  secondary: 0x22d3ee,
  monitor:   0xf59e0b,
}
const ARC_OPACITY: Record<ArcType, number> = {
  primary:   0.65,
  secondary: 0.5,
  monitor:   0.35,
}
const PACKET_COLORS: Record<ArcType, number> = {
  primary:   0x93c5fd,
  secondary: 0x67e8f9,
  monitor:   0xfcd34d,
}

// ── Live events pool ──────────────────────────────────────────────────────────

const EVENT_POOL = [
  { region: "ca-east-1",    msg: "Failover test passed · DR zone active"      },
  { region: "eu-west-2",    msg: "TLS cert rotated · 847 services refreshed"  },
  { region: "ap-south-1",   msg: "Anomaly resolved · auto-remediated (4.2s)"  },
  { region: "us-east-1",    msg: "Capacity scaled · 12 nodes added"           },
  { region: "eu-central-1", msg: "Zero-Trust policy applied · 203 endpoints"  },
  { region: "ap-east-1",    msg: "BGP route optimised · latency −18%"         },
  { region: "ca-west-1",    msg: "Security scan complete · 0 findings"        },
  { region: "us-west-2",    msg: "Snapshot archived · 2.4 TB replicated"      },
  { region: "sa-east-1",    msg: "Network peering established · 99.99%"       },
  { region: "eu-north-1",   msg: "Compliance export ready · SOC 2 evidence"   },
  { region: "me-south-1",   msg: "Latency P99 improved · route rebalanced"    },
  { region: "ap-northeast", msg: "DDoS scrubbed · 3.2 Gbps blocked"           },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function toVec3(lat: number, lng: number, r: number): THREE.Vector3 {
  const phi   = (90 - lat)  * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta),
  )
}

function buildArcPts(a: THREE.Vector3, b: THREE.Vector3, segs = 90): THREE.Vector3[] {
  const mid  = a.clone().add(b).multiplyScalar(0.5)
  const dist = a.distanceTo(b)
  mid.normalize().multiplyScalar(a.length() + dist * 0.4)
  return new THREE.QuadraticBezierCurve3(a, mid, b).getPoints(segs)
}

// ── Three.js classes ──────────────────────────────────────────────────────────

class AnimArc {
  geo:      THREE.BufferGeometry
  line:     THREE.Line
  total:    number
  progress: number
  speed:    number

  constructor(pts: THREE.Vector3[], color: number, opacity: number, speed: number, phase: number) {
    this.total    = pts.length
    this.progress = phase
    this.speed    = speed
    this.geo      = new THREE.BufferGeometry().setFromPoints(pts)
    this.geo.setDrawRange(0, 0)
    this.line = new THREE.Line(
      this.geo,
      new THREE.LineBasicMaterial({ color, transparent: true, opacity }),
    )
  }

  tick() {
    // Draw forward, then hold, then restart
    this.progress = (this.progress + this.speed) % 1.6
    const pct   = Math.min(this.progress / 1.0, 1)
    const count = Math.min(Math.floor(pct * this.total), this.total)
    this.geo.setDrawRange(0, Math.max(2, count))
  }
}

class DataTraveler {
  mesh: THREE.Mesh
  pts:  THREE.Vector3[]
  t:    number
  speed: number

  constructor(pts: THREE.Vector3[], color: number, speed: number, phase = 0) {
    this.pts   = pts
    this.t     = phase
    this.speed = speed
    this.mesh  = new THREE.Mesh(
      new THREE.SphereGeometry(0.014, 6, 6),
      new THREE.MeshBasicMaterial({ color }),
    )
  }

  tick() {
    this.t = (this.t + this.speed) % 1
    const idx = Math.min(Math.floor(this.t * (this.pts.length - 1)), this.pts.length - 1)
    if (this.pts[idx]) this.mesh.position.copy(this.pts[idx])
  }
}

// ── Component ─────────────────────────────────────────────────────────────────

interface LiveEvent {
  id:     number
  region: string
  msg:    string
  ts:     string
}

export function GlobeSection() {
  const mountRef    = React.useRef<HTMLDivElement>(null)
  const drag        = React.useRef({ on: false, lx: 0, ly: 0, vx: 0, vy: 0 })
  const [connections, setConnections] = React.useState(8_341)
  const [packets,     setPackets]     = React.useState(2_047_812)
  const [events,      setEvents]      = React.useState<LiveEvent[]>([])
  const evtId = React.useRef(0)

  // ── Live counters ──────────────────────────────────────────────────────────
  React.useEffect(() => {
    const iv = setInterval(() => {
      setConnections((c) => c + Math.floor(Math.random() * 7) - 2)
      setPackets((p) => p + Math.floor(Math.random() * 4200 + 1800))
    }, 1200)
    return () => clearInterval(iv)
  }, [])

  // ── Live event ticker ──────────────────────────────────────────────────────
  React.useEffect(() => {
    function push() {
      const e = EVENT_POOL[Math.floor(Math.random() * EVENT_POOL.length)]
      const now = new Date()
      const ts  = `${String(now.getUTCHours()).padStart(2,"0")}:${String(now.getUTCMinutes()).padStart(2,"0")}:${String(now.getUTCSeconds()).padStart(2,"0")} UTC`
      setEvents((prev) => [
        { id: evtId.current++, region: e.region, msg: e.msg, ts },
        ...prev.slice(0, 4),
      ])
    }
    push()
    const iv = setInterval(push, 2800)
    return () => clearInterval(iv)
  }, [])

  // ── Three.js scene ─────────────────────────────────────────────────────────
  React.useEffect(() => {
    const el = mountRef.current
    if (!el) return
    const W = el.clientWidth, H = el.clientHeight
    const R = 1

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(W, H)
    renderer.setClearColor(0x000000, 0)
    el.appendChild(renderer.domElement)

    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(36, W / H, 0.1, 300)
    camera.position.z = 3.5

    // ── Globe group ──────────────────────────────────────────────────────────
    const globe = new THREE.Group()
    globe.rotation.y = Math.PI * 0.22
    scene.add(globe)

    // Core sphere
    globe.add(new THREE.Mesh(
      new THREE.SphereGeometry(R, 72, 72),
      new THREE.MeshPhongMaterial({ color: 0x020d1c, emissive: 0x020d1c, specular: 0x0a2850, shininess: 22 }),
    ))
    // Fine lat-lon grid
    globe.add(new THREE.Mesh(
      new THREE.SphereGeometry(R + 0.001, 40, 20),
      new THREE.MeshBasicMaterial({ color: 0x1a3a6b, wireframe: true, transparent: true, opacity: 0.05 }),
    ))
    // Inner atmosphere
    globe.add(new THREE.Mesh(
      new THREE.SphereGeometry(R * 1.06, 64, 64),
      new THREE.MeshBasicMaterial({ color: 0x1d4ed8, transparent: true, opacity: 0.08, side: THREE.BackSide }),
    ))
    // Mid atmosphere
    globe.add(new THREE.Mesh(
      new THREE.SphereGeometry(R * 1.12, 64, 64),
      new THREE.MeshBasicMaterial({ color: 0x1e3a8a, transparent: true, opacity: 0.04, side: THREE.BackSide }),
    ))
    // Outer halo
    globe.add(new THREE.Mesh(
      new THREE.SphereGeometry(R * 1.22, 64, 64),
      new THREE.MeshBasicMaterial({ color: 0x172554, transparent: true, opacity: 0.018, side: THREE.BackSide }),
    ))

    // Equatorial scan ring (rotates with globe, pulses)
    const eqRingMat = new THREE.MeshBasicMaterial({ color: 0x2563eb, transparent: true, opacity: 0.18, side: THREE.DoubleSide })
    const eqRing = new THREE.Mesh(new THREE.RingGeometry(R + 0.01, R + 0.022, 128), eqRingMat)
    globe.add(eqRing) // flat at equatorial plane by default

    // ── Nodes ────────────────────────────────────────────────────────────────
    const pulseObjects: { ring: THREE.Mesh; phase: number; tier: number }[] = []

    NODES.forEach(({ lat, lng, tier }) => {
      const pos = toVec3(lat, lng, R + 0.004)

      // Dot
      const dotSize = tier === 1 ? 0.020 : 0.014
      const dotColor = tier === 1 ? 0x60a5fa : 0x38bdf8
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(dotSize, 8, 8),
        new THREE.MeshBasicMaterial({ color: dotColor }),
      )
      dot.position.copy(pos)
      globe.add(dot)

      // Pulse ring (tier-1 gets a second outer ring)
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(dotSize * 1.4, dotSize * 2.3, 20),
        new THREE.MeshBasicMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.45, side: THREE.DoubleSide }),
      )
      ring.position.copy(pos)
      ring.lookAt(new THREE.Vector3(0, 0, 0))
      globe.add(ring)
      pulseObjects.push({ ring, phase: Math.random() * Math.PI * 2, tier })

      if (tier === 1) {
        const outerRing = new THREE.Mesh(
          new THREE.RingGeometry(dotSize * 3.0, dotSize * 3.5, 24),
          new THREE.MeshBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.2, side: THREE.DoubleSide }),
        )
        outerRing.position.copy(pos)
        outerRing.lookAt(new THREE.Vector3(0, 0, 0))
        globe.add(outerRing)
        pulseObjects.push({ ring: outerRing, phase: Math.random() * Math.PI * 2 + 1, tier: 0 })
      }
    })

    // ── Arcs + data travelers ─────────────────────────────────────────────────
    const animArcs:  AnimArc[]      = []
    const travelers: DataTraveler[] = []

    ARCS.forEach(({ a, b, type }, i) => {
      const va  = toVec3(NODES[a].lat, NODES[a].lng, R + 0.005)
      const vb  = toVec3(NODES[b].lat, NODES[b].lng, R + 0.005)
      const pts = buildArcPts(va, vb)

      const arc = new AnimArc(
        pts,
        ARC_COLORS[type],
        ARC_OPACITY[type],
        0.0025 + Math.random() * 0.002,
        i / ARCS.length,
      )
      globe.add(arc.line)
      animArcs.push(arc)

      // 1–2 travelers per arc
      const nTravelers = type === "primary" ? 2 : 1
      for (let n = 0; n < nTravelers; n++) {
        const t = new DataTraveler(
          pts,
          PACKET_COLORS[type],
          0.006 + Math.random() * 0.004,
          (n + Math.random()) / nTravelers,
        )
        globe.add(t.mesh)
        travelers.push(t)
      }
    })

    // ── Orbit ring + satellite (scene-level, doesn't rotate with globe) ───────
    const orbitGroup = new THREE.Group()
    orbitGroup.rotation.x = Math.PI / 3.2
    orbitGroup.rotation.z = Math.PI / 7
    scene.add(orbitGroup)

    const ORBIT_R = 1.65
    orbitGroup.add(new THREE.Mesh(
      new THREE.TorusGeometry(ORBIT_R, 0.004, 8, 128),
      new THREE.MeshBasicMaterial({ color: 0x1d4ed8, transparent: true, opacity: 0.22 }),
    ))
    // Second orbit (different tilt)
    const orbitGroup2 = new THREE.Group()
    orbitGroup2.rotation.x = -Math.PI / 4
    orbitGroup2.rotation.z =  Math.PI / 3
    scene.add(orbitGroup2)
    orbitGroup2.add(new THREE.Mesh(
      new THREE.TorusGeometry(ORBIT_R * 1.12, 0.002, 8, 128),
      new THREE.MeshBasicMaterial({ color: 0x0ea5e9, transparent: true, opacity: 0.1 }),
    ))

    // Satellites
    const sat1 = new THREE.Mesh(
      new THREE.SphereGeometry(0.022, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0x7dd3fc }),
    )
    scene.add(sat1)

    const sat2 = new THREE.Mesh(
      new THREE.SphereGeometry(0.015, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8 }),
    )
    scene.add(sat2)

    // ── Lights ───────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0x1a2744, 4))
    const sun = new THREE.DirectionalLight(0x4488ff, 2.5)
    sun.position.set(4, 2, 4)
    scene.add(sun)
    // Rim light
    const rim = new THREE.DirectionalLight(0x0ea5e9, 0.6)
    rim.position.set(-3, 0, -3)
    scene.add(rim)

    // ── Stars ────────────────────────────────────────────────────────────────
    const starPos = new Float32Array(3500 * 3)
    for (let i = 0; i < 3500; i++) {
      const r = 80 + Math.random() * 100
      const t = Math.random() * Math.PI * 2
      const p = Math.acos(2 * Math.random() - 1)
      starPos[i*3]   = r * Math.sin(p) * Math.cos(t)
      starPos[i*3+1] = r * Math.sin(p) * Math.sin(t)
      starPos[i*3+2] = r * Math.cos(p)
    }
    const starGeo = new THREE.BufferGeometry()
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3))
    scene.add(new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({ color: 0xffffff, size: 0.10, transparent: true, opacity: 0.38 }),
    ))

    // ── Animate ───────────────────────────────────────────────────────────────
    let raf: number
    let tick = 0

    const animate = () => {
      raf = requestAnimationFrame(animate)
      tick++

      // Globe rotation + inertia
      const d = drag.current
      if (!d.on) {
        globe.rotation.y += d.vx
        globe.rotation.x += d.vy
        d.vx *= 0.93
        d.vy *= 0.93
        if (Math.abs(d.vx) < 0.0003) globe.rotation.y += 0.0009
      }
      globe.rotation.x = Math.max(-0.5, Math.min(0.5, globe.rotation.x))

      // Equatorial scan ring pulse
      eqRingMat.opacity = 0.1 + 0.1 * Math.sin(tick * 0.025)

      // Node pulse rings
      pulseObjects.forEach(({ ring, phase, tier }) => {
        const s = 1 + (tier === 1 ? 0.32 : 0.22) * Math.sin(tick * 0.04 + phase)
        ring.scale.setScalar(s)
        ;(ring.material as THREE.MeshBasicMaterial).opacity =
          (tier === 1 ? 0.28 : 0.15) + 0.22 * Math.sin(tick * 0.04 + phase)
      })

      // Arc draw animation
      animArcs.forEach((a) => a.tick())

      // Data travelers
      travelers.forEach((t) => t.tick())

      // Satellite 1 orbits on ring 1
      const a1 = tick * 0.009
      const s1dir = new THREE.Vector3(ORBIT_R, 0, 0)
      s1dir.applyEuler(orbitGroup.rotation)
      sat1.position.set(
        ORBIT_R * Math.cos(a1) * Math.cos(orbitGroup.rotation.z) - ORBIT_R * Math.sin(a1) * Math.sin(orbitGroup.rotation.z),
        ORBIT_R * Math.sin(a1) * Math.cos(orbitGroup.rotation.x),
        ORBIT_R * Math.sin(a1) * Math.sin(orbitGroup.rotation.x),
      )

      // Satellite 2 orbits on ring 2 (counter-clockwise)
      const a2 = -tick * 0.006
      sat2.position.set(
        ORBIT_R * 1.12 * Math.cos(a2) * Math.cos(orbitGroup2.rotation.z) - ORBIT_R * 1.12 * Math.sin(a2) * Math.sin(orbitGroup2.rotation.z),
        ORBIT_R * 1.12 * Math.sin(a2) * Math.cos(orbitGroup2.rotation.x),
        ORBIT_R * 1.12 * Math.sin(a2) * Math.sin(orbitGroup2.rotation.x),
      )

      renderer.render(scene, camera)
    }
    animate()

    // ── Resize ────────────────────────────────────────────────────────────────
    const onResize = () => {
      const w = el.clientWidth, h = el.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener("resize", onResize)

    // ── Mouse ─────────────────────────────────────────────────────────────────
    const onDown = (e: MouseEvent) => {
      drag.current = { on: true, lx: e.clientX, ly: e.clientY, vx: 0, vy: 0 }
    }
    const onMove = (e: MouseEvent) => {
      if (!drag.current.on) return
      const dx = e.clientX - drag.current.lx
      const dy = e.clientY - drag.current.ly
      globe.rotation.y += dx * 0.005
      globe.rotation.x += dy * 0.003
      drag.current.vx = dx * 0.005
      drag.current.vy = dy * 0.003
      drag.current.lx = e.clientX
      drag.current.ly = e.clientY
    }
    const onUp = () => { drag.current.on = false }
    el.addEventListener("mousedown", onDown)
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)

    // Touch
    const onTD = (e: TouchEvent) => {
      drag.current = { on: true, lx: e.touches[0].clientX, ly: e.touches[0].clientY, vx: 0, vy: 0 }
    }
    const onTM = (e: TouchEvent) => {
      if (!drag.current.on) return
      const dx = e.touches[0].clientX - drag.current.lx
      const dy = e.touches[0].clientY - drag.current.ly
      globe.rotation.y += dx * 0.005
      globe.rotation.x += dy * 0.003
      drag.current.vx = dx * 0.005
      drag.current.vy = dy * 0.003
      drag.current.lx = e.touches[0].clientX
      drag.current.ly = e.touches[0].clientY
    }
    const onTU = () => { drag.current.on = false }
    el.addEventListener("touchstart", onTD, { passive: true })
    el.addEventListener("touchmove",  onTM, { passive: true })
    el.addEventListener("touchend",   onTU)

    return () => {
      cancelAnimationFrame(raf)
      renderer.dispose()
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)
    }
  }, [])

  // ── Render ─────────────────────────────────────────────────────────────────

  const glassPanel = {
    background:   "rgba(3, 8, 20, 0.72)",
    backdropFilter: "blur(10px)",
    border:       "1px solid rgba(255,255,255,0.07)",
  } as React.CSSProperties

  return (
    <section className="relative overflow-hidden bg-canvas py-24 lg:py-32">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-canvas to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-canvas to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />

      {/* ── Header ────────────────────────────────────────────────────────── */}
      <div className="container-enterprise relative z-20">
        <FadeIn className="mb-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-lg">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">
              Global Infrastructure
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              47 regions. One control plane.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-canvas-muted">
              Coverage across North America, Europe, and Asia-Pacific — managed with unified governance, visibility, and contractual accountability.
            </p>
          </div>

          {/* Live badge */}
          <div
            className="flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
            style={{ background: "rgba(34,197,94,0.12)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.2)" }}
          >
            <span className="h-2 w-2 rounded-full bg-[#22c55e] animate-pulse" />
            Network operational · All regions nominal
          </div>
        </FadeIn>
      </div>

      {/* ── Globe + floating overlays ──────────────────────────────────────── */}
      <div className="relative z-0 mx-auto max-w-6xl">
        {/* Canvas */}
        <div
          ref={mountRef}
          className="h-[540px] w-full cursor-grab active:cursor-grabbing lg:h-[660px]"
        />

        {/* Top-left: active sessions */}
        <div
          className="pointer-events-none absolute left-4 top-6 hidden rounded-xl p-4 lg:block"
          style={{ ...glassPanel, minWidth: 210 }}
        >
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#4a5568" }}>
            Active sessions
          </p>
          <p className="font-mono text-3xl font-bold tabular-nums" style={{ color: "#60a5fa" }}>
            {connections.toLocaleString()}
          </p>
          <div className="mt-2 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-[10px]" style={{ color: "#2a4a2a" }}>Live across all regions</span>
          </div>
        </div>

        {/* Top-right: packets processed */}
        <div
          className="pointer-events-none absolute right-4 top-6 hidden rounded-xl p-4 lg:block"
          style={{ ...glassPanel, minWidth: 200 }}
        >
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#4a5568" }}>
            Events processed
          </p>
          <p className="font-mono text-2xl font-bold tabular-nums" style={{ color: "#22d3ee" }}>
            {packets.toLocaleString()}
          </p>
          <p className="mt-1 text-[10px]" style={{ color: "#2a4a4a" }}>Since session start</p>

          {/* Arc type legend */}
          <div className="mt-3 flex flex-col gap-1.5" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 10 }}>
            {[
              { color: "#3b82f6", label: "Primary backbone" },
              { color: "#22d3ee", label: "Secondary routes" },
              { color: "#f59e0b", label: "Monitoring paths" },
            ].map(({ color, label }) => (
              <div key={label} className="flex items-center gap-2">
                <div className="h-0.5 w-5 rounded" style={{ background: color }} />
                <span className="text-[10px]" style={{ color: "#3a3a3a" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom-left: live events feed */}
        <div
          className="pointer-events-none absolute bottom-10 left-4 hidden rounded-xl lg:block"
          style={{ ...glassPanel, width: 280 }}
        >
          <div
            className="flex items-center justify-between px-4 py-2.5"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold" style={{ color: "#e5e5e5" }}>Live Feed</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            </div>
            <span className="text-[9px]" style={{ color: "#333" }}>
              {events.length} recent
            </span>
          </div>
          <div className="flex flex-col">
            {events.slice(0, 5).map((evt) => (
              <div
                key={evt.id}
                className="px-4 py-2.5 transition-all"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="rounded px-1.5 py-0.5 text-[8px] font-mono font-semibold"
                    style={{ background: "rgba(59,130,246,0.12)", color: "#60a5fa" }}
                  >
                    {evt.region}
                  </span>
                  <span className="text-[8px]" style={{ color: "#2a2a2a" }}>{evt.ts}</span>
                </div>
                <p className="mt-1 text-[10px] leading-snug" style={{ color: "#555" }}>
                  {evt.msg}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom-right: data packet stats */}
        <div
          className="pointer-events-none absolute bottom-10 right-4 hidden rounded-xl p-4 lg:block"
          style={{ ...glassPanel, minWidth: 190 }}
        >
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#4a5568" }}>
            Network telemetry
          </p>
          {[
            { label: "Avg RTT",      val: "< 10ms",  color: "#4ade80" },
            { label: "Packet loss",  val: "0.001%",  color: "#22d3ee" },
            { label: "Throughput",   val: "2.0M/s",  color: "#60a5fa" },
            { label: "Uptime SLA",   val: "99.99%",  color: "#4ade80" },
          ].map(({ label, val, color }) => (
            <div key={label} className="mb-2 flex items-center justify-between">
              <span className="text-[10px]" style={{ color: "#3a3a3a" }}>{label}</span>
              <span className="font-mono text-[11px] font-semibold" style={{ color }}>{val}</span>
            </div>
          ))}
        </div>

        {/* Drag hint */}
        <p className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 text-[10px]" style={{ color: "rgba(255,255,255,0.15)" }}>
          drag to rotate
        </p>
      </div>

      {/* ── Region cards ──────────────────────────────────────────────────── */}
      <div className="container-enterprise relative z-20 mt-4">
        <FadeIn delay={200}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                region: "North America",
                code:    "NA",
                nodes:   9,
                uptime:  "99.99%",
                latency: "4ms",
                color:   "#60a5fa",
                cities:  "Toronto · NY · LA · Chicago",
              },
              {
                region: "Europe",
                code:    "EU",
                nodes:   7,
                uptime:  "99.99%",
                latency: "6ms",
                color:   "#22d3ee",
                cities:  "London · Amsterdam · Frankfurt",
              },
              {
                region: "Asia-Pacific",
                code:    "APAC",
                nodes:   7,
                uptime:  "99.98%",
                latency: "8ms",
                color:   "#a78bfa",
                cities:  "Singapore · Tokyo · Sydney",
              },
              {
                region: "Middle East & Africa",
                code:    "ME/AF",
                nodes:   4,
                uptime:  "99.95%",
                latency: "12ms",
                color:   "#f59e0b",
                cities:  "Dubai · Johannesburg",
              },
            ].map(({ region, code, nodes, uptime, latency, color, cities }) => (
              <div
                key={code}
                className="rounded-xl p-5"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className="rounded px-2 py-0.5 text-[10px] font-mono font-bold"
                    style={{ background: `${color}18`, color }}
                  >
                    {code}
                  </span>
                  <span className="flex items-center gap-1 text-[9px]" style={{ color: "#22c55e" }}>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                    Operational
                  </span>
                </div>
                <p className="text-sm font-semibold text-white">{region}</p>
                <p className="mt-0.5 text-[10px] text-canvas-muted">{cities}</p>
                <div className="mt-3 grid grid-cols-3 gap-2 border-t pt-3" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                  <div>
                    <p className="text-[9px] text-canvas-muted">Nodes</p>
                    <p className="font-mono text-sm font-semibold" style={{ color }}>{nodes}</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-canvas-muted">Uptime</p>
                    <p className="font-mono text-sm font-semibold" style={{ color }}>{uptime}</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-canvas-muted">Latency</p>
                    <p className="font-mono text-sm font-semibold" style={{ color }}>{latency}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── Bottom metrics strip ────────────────────────────────────────── */}
        <FadeIn delay={300}>
          <div
            className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl sm:grid-cols-4"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            {[
              { label: "Total regions",          val: "47",        sub: "across 6 continents"        },
              { label: "Points of presence",     val: "14",        sub: "carrier-grade facilities"   },
              { label: "Network uptime SLA",     val: "99.99%",    sub: "contractual, with remedies" },
              { label: "P99 inter-region RTT",   val: "< 10ms",    sub: "on all primary routes"      },
            ].map(({ label, val, sub }) => (
              <div key={label} className="px-6 py-5" style={{ background: "rgba(3,8,20,0.6)" }}>
                <p className="text-[10px] uppercase tracking-widest text-canvas-muted">{label}</p>
                <p className="mt-1 font-mono text-2xl font-bold text-white">{val}</p>
                <p className="mt-0.5 text-[10px] text-canvas-muted">{sub}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
