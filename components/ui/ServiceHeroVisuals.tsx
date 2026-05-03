"use client"

import React, { useEffect, useState } from "react"

/* ─── Keyframe injection ──────────────────────────────────────────────────── */
const KF = `
@keyframes sv-pulse{0%,100%{opacity:.45;transform:scale(1)}50%{opacity:1;transform:scale(1.18)}}
@keyframes sv-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes sv-blink{0%,100%{opacity:1}50%{opacity:0}}
@keyframes sv-float{0%,100%{transform:translateY(0px)}50%{transform:translateY(-5px)}}
@keyframes sv-appear{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
@keyframes sv-sweep{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes sv-rise{from{transform:scaleY(0);opacity:0}to{transform:scaleY(1);opacity:1}}
@keyframes sv-fill{from{width:0}to{width:var(--w)}}
@keyframes sv-draw{from{stroke-dashoffset:1000}to{stroke-dashoffset:0}}
@keyframes sv-orbit{from{transform:rotate(0deg) translateX(var(--r)) rotate(0deg)}to{transform:rotate(360deg) translateX(var(--r)) rotate(-360deg)}}
@keyframes sv-orbit2{from{transform:rotate(0deg) translateX(var(--r)) rotate(0deg)}to{transform:rotate(-360deg) translateX(var(--r)) rotate(360deg)}}
`
let _kfDone = false
function InjectKF() {
  useEffect(() => {
    if (_kfDone || document.getElementById("sv-kf")) return
    const s = Object.assign(document.createElement("style"), { id: "sv-kf", textContent: KF })
    document.head.appendChild(s)
    _kfDone = true
  }, [])
  return null
}

/* ─── Tokens ──────────────────────────────────────────────────────────────── */
const BG   = "radial-gradient(ellipse at 30% 18%,#0c1628 0%,#060a14 70%)"
const MONO = "ui-monospace,'SF Mono',Consolas,monospace"
const SANS = "Inter,system-ui,sans-serif"
const C = {
  blue:"#3b82f6",sky:"#38bdf8",indigo:"#6366f1",purple:"#a78bfa",
  green:"#22c55e",amber:"#f59e0b",red:"#ef4444",cyan:"#06b6d4",
  teal:"#14b8a6",rose:"#f43f5e",orange:"#f97316",lime:"#84cc16",
  hi:"rgba(255,255,255,.88)",mid:"rgba(255,255,255,.5)",lo:"rgba(255,255,255,.26)",
  dim:"rgba(255,255,255,.09)",bd:"rgba(59,130,246,.14)",
} as const

/* ─── Shared shell ────────────────────────────────────────────────────────── */
function V({ children, h = 300 }: { children: React.ReactNode; h?: number }) {
  return (
    <div style={{
      background: BG, borderRadius: 14, overflow: "hidden", height: h,
      border: `1px solid ${C.bd}`, position: "relative", fontFamily: SANS,
      boxShadow: "0 24px 64px rgba(0,0,0,.72),inset 0 1px 0 rgba(255,255,255,.04)",
    }}>
      <InjectKF />
      {children}
    </div>
  )
}

function StatusBar({ label, color = C.green }: { label: string; color?: string }) {
  return (
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      padding: "7px 14px", background: "rgba(4,7,14,.88)",
      borderTop: `1px solid ${C.dim}`, display: "flex", alignItems: "center", gap: 7,
    }}>
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: color,
        boxShadow: `0 0 6px ${color}`, display: "inline-block", flexShrink: 0,
        animation: "sv-pulse 2s ease-in-out infinite" }} />
      <span style={{ fontSize: 9, color: C.lo, fontFamily: MONO, letterSpacing: ".07em" }}>{label}</span>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* 1. CLOUD — Global Network Topology                                         */
/* ═══════════════════════════════════════════════════════════════════════════ */
export function CloudHeroVisual() {
  const nodes = [
    { id:"nyc", x:76,  y:108, label:"NYC" },
    { id:"lon", x:172, y:76,  label:"LON" },
    { id:"fra", x:190, y:83,  label:"FRA" },
    { id:"sin", x:290, y:150, label:"SIN" },
    { id:"syd", x:318, y:198, label:"SYD" },
    { id:"tok", x:322, y:102, label:"TOK" },
    { id:"gru", x:104, y:182, label:"GRU" },
  ]
  type NodeId = "nyc"|"lon"|"fra"|"sin"|"syd"|"tok"|"gru"
  const routes: { a:NodeId; b:NodeId; cx:number; cy:number; color:string; dur:string; delay:string }[] = [
    { a:"nyc", b:"lon", cx:124, cy:40,  color:C.blue,   dur:"4s",   delay:"0s"   },
    { a:"lon", b:"fra", cx:181, cy:66,  color:C.sky,    dur:"2.5s", delay:".4s"  },
    { a:"nyc", b:"gru", cx:56,  cy:158, color:C.cyan,   dur:"5s",   delay:".9s"  },
    { a:"lon", b:"sin", cx:234, cy:46,  color:C.indigo, dur:"6s",   delay:"1.6s" },
    { a:"fra", b:"tok", cx:260, cy:44,  color:C.purple, dur:"5.5s", delay:"2.2s" },
    { a:"sin", b:"syd", cx:312, cy:176, color:C.green,  dur:"3.5s", delay:"3s"   },
  ]
  const g = (id: NodeId) => nodes.find(n => n.id === id)!

  return (
    <V>
      <svg viewBox="0 0 380 262" width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <defs>
          <filter id="cf-glow">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <pattern id="cf-dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r=".6" fill="rgba(255,255,255,.07)"/>
          </pattern>
        </defs>

        <rect width="380" height="262" fill="url(#cf-dots)" />

        {/* Rough continent silhouettes */}
        <path d="M35,78 Q70,58 92,68 L102,108 Q96,138 86,178 L108,200 Q118,208 104,182 L78,158 Q52,138 46,108 Z"
          fill="rgba(255,255,255,.025)" stroke="rgba(255,255,255,.055)" strokeWidth=".6"/>
        <path d="M154,63 Q188,55 202,68 L196,94 Q184,100 168,90 L156,78 Z"
          fill="rgba(255,255,255,.025)" stroke="rgba(255,255,255,.055)" strokeWidth=".6"/>
        <path d="M196,63 Q262,48 342,78 L346,128 Q322,148 287,153 L276,133 Q252,118 222,108 L198,88 Z"
          fill="rgba(255,255,255,.025)" stroke="rgba(255,255,255,.055)" strokeWidth=".6"/>
        <path d="M92,174 Q114,166 126,178 L118,222 Q103,228 92,212 Z"
          fill="rgba(255,255,255,.025)" stroke="rgba(255,255,255,.055)" strokeWidth=".6"/>
        <path d="M296,184 Q332,176 350,194 L342,218 Q316,226 296,210 Z"
          fill="rgba(255,255,255,.025)" stroke="rgba(255,255,255,.055)" strokeWidth=".6"/>

        {/* Routes */}
        {routes.map((r) => {
          const a = g(r.a), b = g(r.b)
          const d = `M${a.x},${a.y} Q${r.cx},${r.cy} ${b.x},${b.y}`
          return (
            <g key={r.a+r.b}>
              <path d={d} fill="none" stroke={r.color} strokeWidth=".6" opacity=".2"/>
              <circle r="3" fill={r.color} filter="url(#cf-glow)">
                <animateMotion dur={r.dur} begin={r.delay} repeatCount="indefinite" path={d}/>
              </circle>
              <circle r="1.5" fill={r.color}>
                <animateMotion dur={r.dur} begin={`calc(${r.delay} + .3s)`} repeatCount="indefinite" path={d}/>
              </circle>
            </g>
          )
        })}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={n.id} filter="url(#cf-glow)">
            <circle cx={n.x} cy={n.y} r="11" fill={`${C.blue}0b`} stroke={`${C.blue}22`} strokeWidth="1"/>
            <circle cx={n.x} cy={n.y} r="4" fill={C.blue}
              style={{ animation:`sv-pulse 2.4s ${(i*.35).toFixed(1)}s ease-in-out infinite` }}/>
            <text x={n.x} y={n.y+18} textAnchor="middle" fill={C.lo} fontSize="7.5" fontFamily={MONO}>
              {n.label}
            </text>
          </g>
        ))}
      </svg>
      <StatusBar label="7 NODES · 4 CLOUD PROVIDERS · 6 ACTIVE ROUTES" color={C.green}/>
    </V>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* 2. SECURITY — Radar sweep with threat events                               */
/* ═══════════════════════════════════════════════════════════════════════════ */
export function SecurityHeroVisual() {
  const [threats, setThreats] = useState<{x:number;y:number;sev:string;color:string}[]>([
    { x: 168, y: 82,  sev: "HIGH", color: C.amber },
    { x: 212, y: 142, sev: "LOW",  color: C.sky   },
    { x: 148, y: 148, sev: "MED",  color: C.sky   },
  ])
  const [count, setCount] = useState(14)

  useEffect(() => {
    const t = setInterval(() => {
      setCount(v => v + 1)
      setThreats(prev => {
        const angle = Math.random() * Math.PI * 2
        const r = 40 + Math.random() * 75
        const newT = {
          x: 190 + Math.cos(angle) * r,
          y: 128 + Math.sin(angle) * r,
          sev: ["HIGH","MED","LOW"][Math.floor(Math.random()*3)],
          color: [C.amber, C.sky, C.mid][Math.floor(Math.random()*3)],
        }
        return [...prev.slice(-4), newT]
      })
    }, 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <V>
      <svg viewBox="0 0 380 268" width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <defs>
          <filter id="sf-glow">
            <feGaussianBlur stdDeviation="4" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <radialGradient id="sf-sweep" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={C.green} stopOpacity=".25"/>
            <stop offset="100%" stopColor={C.green} stopOpacity="0"/>
          </radialGradient>
          <clipPath id="sf-clip"><circle cx="190" cy="128" r="110"/></clipPath>
        </defs>

        {/* Grid */}
        <pattern id="sf-g" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20,0 L0,0 0,20" fill="none" stroke="rgba(255,255,255,.035)" strokeWidth=".5"/>
        </pattern>
        <rect width="380" height="268" fill="url(#sf-g)"/>

        {/* Radar rings */}
        {[35, 65, 95, 118].map((r,i) => (
          <circle key={r} cx="190" cy="128" r={r}
            fill="none" stroke={C.green} strokeWidth=".6"
            opacity={.06 + i*.04}/>
        ))}

        {/* Cross hairs */}
        <line x1="190" y1="18" x2="190" y2="238" stroke={C.green} strokeWidth=".4" opacity=".1"/>
        <line x1="72"  y1="128" x2="308" y2="128" stroke={C.green} strokeWidth=".4" opacity=".1"/>

        {/* Sweep wedge — pure CSS rotation via transform-origin */}
        <g style={{ transformOrigin:"190px 128px", animation:"sv-sweep 3s linear infinite" }}>
          <path d="M190,128 L190,18 A110,110 0 0,1 250,38 Z"
            fill={`${C.green}18`}/>
          <line x1="190" y1="128" x2="190" y2="18"
            stroke={C.green} strokeWidth="1.2" opacity=".7" filter="url(#sf-glow)"/>
        </g>

        {/* Threat dots */}
        {threats.map((t,i) => (
          <g key={i} style={{ animation:`sv-appear .4s ease-out` }}>
            <circle cx={t.x} cy={t.y} r="10" fill={`${t.color}10`}/>
            <circle cx={t.x} cy={t.y} r="4" fill={t.color} filter="url(#sf-glow)"
              style={{ animation:"sv-pulse 1.8s ease-in-out infinite" }}/>
            <text x={t.x+7} y={t.y+4} fill={t.color} fontSize="7" fontFamily={MONO}>{t.sev}</text>
          </g>
        ))}

        {/* Center shield hex */}
        <g filter="url(#sf-glow)">
          <polygon points="190,104 207,113 207,131 190,140 173,131 173,113"
            fill={`${C.green}12`} stroke={C.green} strokeWidth="1"/>
          <text x="190" y="128" textAnchor="middle" dominantBaseline="middle"
            fill={C.green} fontSize="9" fontFamily={MONO} fontWeight="700">LIVE</text>
        </g>

        {/* Event count */}
        <text x="336" y="28" textAnchor="end" fill={C.amber} fontSize="22" fontFamily={MONO} fontWeight="700">
          {count}
        </text>
        <text x="336" y="38" textAnchor="end" fill={C.lo} fontSize="7.5" fontFamily={MONO}>
          events/hr
        </text>
      </svg>
      <StatusBar label="CONTINUOUS MONITORING · 0 CRITICALS UNACKNOWLEDGED" color={C.green}/>
    </V>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* 3. NETWORK — Live oscilloscope waveforms                                   */
/* ═══════════════════════════════════════════════════════════════════════════ */
export function NetworkHeroVisual() {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 80)
    return () => clearInterval(id)
  }, [])

  const W = 340, H = 240
  const waves = [
    { cy:65,  amp:28, freq:.045, phase:0,    color:C.green,  label:"NYC→LON", lat:"87ms"  },
    { cy:128, amp:22, freq:.035, phase:1.2,  color:C.sky,    label:"NYC→SIN", lat:"156ms" },
    { cy:191, amp:30, freq:.028, phase:2.4,  color:C.amber,  label:"FRA→TOK", lat:"189ms" },
  ]

  const makePath = (cy:number, amp:number, freq:number, phase:number) => {
    const pts = []
    for (let x = 0; x <= W; x += 3) {
      const y = cy + Math.sin((x * freq) + phase + tick * .12) * amp
      pts.push(`${x},${y}`)
    }
    return `M ${pts.join(" L ")}`
  }

  return (
    <V>
      {/* Screen scanlines overlay */}
      <div style={{ position:"absolute", inset:0, backgroundImage:
        "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,.08) 3px,rgba(0,0,0,.08) 4px)",
        pointerEvents:"none", zIndex:2 }}/>

      <svg viewBox={`0 0 ${W+40} ${H}`} width="100%" height="88%"
        style={{ position:"absolute", top:0, left:0 }}>
        <defs>
          <filter id="nf-glow">
            <feGaussianBlur stdDeviation="2.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Horizontal grid lines */}
        {[40, 80, 120, 160, 200].map(y => (
          <line key={y} x1="0" y1={y} x2={W+40} y2={y}
            stroke="rgba(255,255,255,.04)" strokeWidth="1"/>
        ))}

        {/* Vertical tick marks */}
        {Array.from({length:12}).map((_,i) => (
          <line key={i} x1={i*30} y1="0" x2={i*30} y2={H}
            stroke="rgba(255,255,255,.03)" strokeWidth="1"/>
        ))}

        {waves.map((w) => (
          <g key={w.label}>
            {/* Glow copy */}
            <path d={makePath(w.cy, w.amp, w.freq, w.phase)} fill="none"
              stroke={w.color} strokeWidth="3" opacity=".18" filter="url(#nf-glow)"/>
            {/* Sharp wave */}
            <path d={makePath(w.cy, w.amp, w.freq, w.phase)} fill="none"
              stroke={w.color} strokeWidth="1.2"/>
            {/* Label */}
            <text x={W+4} y={w.cy} dominantBaseline="middle" fill={w.color}
              fontSize="7.5" fontFamily={MONO}>{w.lat}</text>
            <text x="4" y={w.cy-w.amp-5} fill={w.color} fontSize="7" fontFamily={MONO} opacity=".6">
              {w.label}
            </text>
          </g>
        ))}
      </svg>

      <StatusBar label="3 ROUTES · REAL-TIME LATENCY · BGP FULL MESH" color={C.green}/>
    </V>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* 4. MANAGED — EKG heartbeat monitor                                         */
/* ═══════════════════════════════════════════════════════════════════════════ */
export function ManagedHeroVisual() {
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setSeconds(v => v + 1), 1000)
    return () => clearInterval(t)
  }, [])

  const d = Math.floor(seconds / 86400)
  const h = Math.floor((seconds % 86400) / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60

  // EKG path segment (one QRS complex + baseline)
  const beat = "M0,50 L18,50 L22,38 L26,62 L30,50 L40,50 L43,44 L46,50 L60,50"
  // Full repeated path across width

  const services = ["Compute","Storage","Network","Backup","Monitoring","Certs"]

  return (
    <V>
      <svg viewBox="0 0 380 270" width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <defs>
          <filter id="mf-glow">
            <feGaussianBlur stdDeviation="2.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <linearGradient id="mf-fade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={C.green} stopOpacity="0"/>
            <stop offset="20%" stopColor={C.green} stopOpacity="1"/>
            <stop offset="100%" stopColor={C.green} stopOpacity="1"/>
          </linearGradient>
        </defs>

        {/* Uptime counter */}
        <text x="24" y="44" fill={C.green} fontSize="36" fontFamily={MONO} fontWeight="700"
          style={{ animation:"sv-float 4s ease-in-out infinite" }}>
          99.998%
        </text>
        <text x="24" y="58" fill={C.lo} fontSize="8.5" fontFamily={MONO}>
          {d > 0 ? `${d}d ` : ""}{String(h).padStart(2,"0")}h {String(m).padStart(2,"0")}m {String(s).padStart(2,"0")}s continuous uptime
        </text>

        {/* EKG line */}
        <g transform="translate(20, 110)">
          {/* Background glow */}
          <path d={`M0,50 ${Array.from({length:6}).map(()=>beat.split(" ").slice(1).join(" ")).join(" ").replace(/L/g,"L")}`}
            fill="none" stroke={C.green} strokeWidth="5" opacity=".12" filter="url(#mf-glow)"/>
          {/* Main EKG */}
          <path
            d="M0,50 L18,50 L22,30 L26,72 L30,50 L40,50 L43,40 L46,50 L66,50 L84,50 L88,30 L92,72 L96,50 L106,50 L109,40 L112,50 L132,50 L150,50 L154,30 L158,72 L162,50 L172,50 L175,40 L178,50 L198,50 L216,50 L220,30 L224,72 L228,50 L238,50 L241,40 L244,50 L264,50 L282,50 L286,30 L290,72 L294,50 L304,50 L307,40 L310,50 L330,50"
            fill="none" stroke="url(#mf-fade)" strokeWidth="1.8"/>
          {/* Live cursor dot */}
          <circle cx="330" cy="50" r="3.5" fill={C.green} filter="url(#mf-glow)"
            style={{ animation:"sv-pulse 1s ease-in-out infinite" }}/>
        </g>

        {/* Service status dots */}
        <g transform="translate(20, 200)">
          {services.map((svc, i) => (
            <g key={svc} transform={`translate(${i*55},0)`}>
              <circle cx="6" cy="6" r="4" fill={C.green}
                style={{ animation:`sv-pulse 2.5s ${(i*.4).toFixed(1)}s ease-in-out infinite` }}/>
              <text x="14" y="10" fill={C.lo} fontSize="7.5" fontFamily={MONO}>{svc}</text>
            </g>
          ))}
        </g>
      </svg>
      <StatusBar label="6/6 SERVICES OPERATIONAL · 24×7 MONITORING · 99.95% UPTIME" color={C.green}/>
    </V>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* 5. AI — Neural network with signal propagation                             */
/* ═══════════════════════════════════════════════════════════════════════════ */
export function AiHeroVisual() {
  const [active, setActive] = useState<number[]>([])

  useEffect(() => {
    let step = 0
    const t = setInterval(() => {
      setActive(Array.from({length: 3 + step % 3}).map(() => Math.floor(Math.random() * 12)))
      step++
    }, 600)
    return () => clearInterval(t)
  }, [])

  // Layer node positions
  const layers = [
    { x:60,  nodes:[80,128,176] },
    { x:140, nodes:[60,100,140,180,218] },
    { x:220, nodes:[80,128,176] },
    { x:300, nodes:[100,158] },
  ]

  type LayerColors = [string,string,string,string]
  const lc: LayerColors = [C.blue, C.indigo, C.purple, C.cyan]
  let nodeIdx = 0
  const nodeMap: {x:number,y:number,idx:number,color:string}[] = []
  layers.forEach((l, li) => {
    l.nodes.forEach((y) => {
      nodeMap.push({ x:l.x, y, idx:nodeIdx, color:lc[li] })
      nodeIdx++
    })
  })

  // Edges: connect every node in layer i to every node in layer i+1
  const edges: {x1:number,y1:number,x2:number,y2:number}[] = []
  for (let li = 0; li < layers.length - 1; li++) {
    const A = layers[li], B = layers[li+1]
    A.nodes.forEach(ay => B.nodes.forEach(by => edges.push({x1:A.x,y1:ay,x2:B.x,y2:by})))
  }

  return (
    <V>
      <svg viewBox="0 0 380 278" width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <defs>
          <filter id="af-glow">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="af-soft">
            <feGaussianBlur stdDeviation="1.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Edges */}
        {edges.map((e,i) => (
          <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
            stroke="rgba(99,102,241,.14)" strokeWidth=".8"/>
        ))}

        {/* Animated packets on random edges */}
        {edges.filter((_,i) => i % 3 === 0).map((e,i) => (
          <circle key={`p${i}`} r="2" fill={C.indigo} filter="url(#af-soft)">
            <animateMotion dur={`${1.5+i*.3}s`} begin={`${i*.25}s`} repeatCount="indefinite"
              path={`M${e.x1},${e.y1} L${e.x2},${e.y2}`}/>
          </circle>
        ))}

        {/* Nodes */}
        {nodeMap.map((n) => (
          <g key={n.idx} filter="url(#af-glow)">
            <circle cx={n.x} cy={n.y} r="11" fill={`${n.color}0d`} stroke={`${n.color}20`} strokeWidth="1"/>
            <circle cx={n.x} cy={n.y} r={active.includes(n.idx) ? 5 : 4} fill={n.color}
              style={{ transition:"r .3s", animation:`sv-pulse ${1.8+n.idx*.1}s ease-in-out infinite` }}/>
          </g>
        ))}

        {/* Layer labels */}
        {[{x:60,l:"INPUT"},{x:140,l:"HIDDEN"},{x:220,l:"HIDDEN"},{x:300,l:"OUTPUT"}].map((l,i) => (
          <text key={l.l+i} x={l.x} y="248" textAnchor="middle" fill={C.lo}
            fontSize="7.5" fontFamily={MONO}>{l.l}</text>
        ))}

        {/* Confidence output */}
        <text x="344" y="94" textAnchor="end" fill={C.cyan} fontSize="22" fontFamily={MONO} fontWeight="700">
          97.4%
        </text>
        <text x="344" y="106" textAnchor="end" fill={C.lo} fontSize="7.5" fontFamily={MONO}>
          confidence
        </text>
        <text x="344" y="124" textAnchor="end" fill={C.lo} fontSize="7" fontFamily={MONO}>
          134ms latency
        </text>
      </svg>
      <StatusBar label="15 LAYERS · 97.4% CONFIDENCE · 134ms p50 LATENCY" color={C.cyan}/>
    </V>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* 6. ANALYTICS — Streaming data flow + sparklines                            */
/* ═══════════════════════════════════════════════════════════════════════════ */
export function AnalyticsHeroVisual() {
  const [events, setEvents] = useState(14832)
  const [history, setHistory] = useState<number[]>(() => Array.from<number>({length:24}).fill(0.5))

  useEffect(() => {
    setHistory(Array.from({length:24}).map(()=>Math.random()*.6+.3))
    const t = setInterval(() => {
      setEvents(v => v + Math.floor(Math.random() * 300 + 50))
      setHistory(prev => [...prev.slice(1), Math.random()*.6+.3])
    }, 900)
    return () => clearInterval(t)
  }, [])

  const W = 340, CH = 60
  const sparkPath = (data: number[], h: number, offset: number) => {
    const pts = data.map((v, i) => `${(i/(data.length-1))*W},${h - v*h + offset}`)
    return `M ${pts.join(" L ")}`
  }

  const streams = [
    { color:C.blue,  label:"Ingest",    pct:1.00 },
    { color:C.sky,   label:"Transform", pct:0.97 },
    { color:C.cyan,  label:"Enrich",    pct:0.94 },
    { color:C.green, label:"Load",      pct:0.91 },
  ]

  return (
    <V>
      <svg viewBox="0 0 380 270" width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <defs>
          <filter id="anf-glow">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          {streams.map((s,i) => (
            <linearGradient key={i} id={`anf-grad${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={s.color} stopOpacity=".22"/>
              <stop offset="100%" stopColor={s.color} stopOpacity="0"/>
            </linearGradient>
          ))}
        </defs>

        {/* Big live counter */}
        <text x="24" y="52" fill={C.blue} fontSize="38" fontFamily={MONO} fontWeight="700">
          {events.toLocaleString()}
        </text>
        <text x="24" y="66" fill={C.lo} fontSize="8.5" fontFamily={MONO}>events / sec · live pipeline</text>

        {/* Sparkline area chart */}
        <g transform="translate(20, 80)">
          <path d={`${sparkPath(history, CH, 0)} L${W},${CH} L0,${CH} Z`}
            fill={`url(#anf-grad0)`}/>
          <path d={sparkPath(history, CH, 0)} fill="none" stroke={C.blue} strokeWidth="1.5"
            filter="url(#anf-glow)"/>
          {/* Live dot */}
          <circle cx={W} cy={CH - history[history.length-1]*CH} r="3.5" fill={C.blue}
            filter="url(#anf-glow)" style={{ animation:"sv-pulse 1s ease-in-out infinite" }}/>
        </g>

        {/* Stage health bars */}
        <g transform="translate(20, 174)">
          {streams.map((s,i) => (
            <g key={s.label} transform={`translate(0,${i*18})`}>
              <text x="0" y="11" fill={C.lo} fontSize="8" fontFamily={MONO} style={{width:70}}>{s.label}</text>
              <rect x="72" y="4" width="220" height="5" rx="2.5" fill={C.dim}/>
              <rect x="72" y="4" width={220*s.pct} height="5" rx="2.5" fill={s.color}/>
              <text x="302" y="11" fill={s.color} fontSize="8" fontFamily={MONO}>
                {(s.pct*100).toFixed(0)}%
              </text>
            </g>
          ))}
        </g>
      </svg>
      <StatusBar label="4 PIPELINE STAGES · 48 GB/HR THROUGHPUT · 0.012% ERROR RATE" color={C.blue}/>
    </V>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* 7. APPS — Git commit graph                                                 */
/* ═══════════════════════════════════════════════════════════════════════════ */
export function AppsHeroVisual() {
  const commits = [
    { x:40,  y:130, branch:"main",    sha:"a3f9c", msg:"feat: auth v2",       ci:"pass", color:C.green  },
    { x:100, y:130, branch:"main",    sha:"b7e2d", msg:"fix: token refresh",  ci:"pass", color:C.green  },
    { x:160, y:90,  branch:"feature", sha:"c1a4f", msg:"add: rate limiting",  ci:"run",  color:C.amber  },
    { x:220, y:90,  branch:"feature", sha:"d8b3e", msg:"chore: deps",         ci:"pass", color:C.green  },
    { x:280, y:130, branch:"main",    sha:"e5c6a", msg:"merge: feature→main", ci:"pass", color:C.green  },
    { x:340, y:130, branch:"main",    sha:"f2d9b", msg:"deploy: prod",        ci:"run",  color:C.blue   },
  ]

  return (
    <V>
      <svg viewBox="0 0 380 270" width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <defs>
          <filter id="gitf-glow">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Branch labels */}
        <text x="20" y="94" fill={C.lo} fontSize="8" fontFamily={MONO}>feature/auth-v2</text>
        <text x="20" y="134" fill={C.lo} fontSize="8" fontFamily={MONO}>main</text>

        {/* Branch lines */}
        {/* main */}
        <line x1="40" y1="130" x2="340" y2="130" stroke={C.green} strokeWidth="1.5" opacity=".35"/>
        {/* feature branch out */}
        <path d="M100,130 Q130,130 160,90" fill="none" stroke={C.indigo} strokeWidth="1.5" opacity=".35"/>
        {/* feature line */}
        <line x1="160" y1="90" x2="220" y2="90" stroke={C.indigo} strokeWidth="1.5" opacity=".35"/>
        {/* feature merge */}
        <path d="M220,90 Q250,90 280,130" fill="none" stroke={C.indigo} strokeWidth="1.5" opacity=".35"/>

        {/* Commits */}
        {commits.map((c) => (
          <g key={c.sha} filter="url(#gitf-glow)">
            <circle cx={c.x} cy={c.y} r="14" fill={`${c.color}0d`} stroke={`${c.color}22`} strokeWidth="1"/>
            <circle cx={c.x} cy={c.y} r="5.5" fill={c.color}
              style={{ animation:`sv-pulse 2.5s ${parseInt(c.sha,16)%10/10}s ease-in-out infinite` }}/>
            {/* CI indicator */}
            <circle cx={c.x+9} cy={c.y-9} r="4" fill="rgba(6,10,20,.9)" stroke={c.color} strokeWidth=".8"/>
            <text x={c.x+9} y={c.y-6} textAnchor="middle" fill={c.color} fontSize="5.5" fontFamily={MONO}>
              {c.ci==="run"?"⟳":"✓"}
            </text>
            {/* Commit label */}
            <text x={c.x} y={c.y+24} textAnchor="middle" fill={C.lo} fontSize="6.5" fontFamily={MONO}>
              {c.sha}
            </text>
          </g>
        ))}

        {/* PR card */}
        <rect x="68" y="162" width="244" height="56" rx="8"
          fill={`${C.indigo}0d`} stroke={`${C.indigo}22`} strokeWidth="1"/>
        <text x="82" y="180" fill={C.indigo} fontSize="8.5" fontFamily={MONO} fontWeight="600">
          PR #52 — feature/auth-v2 → main
        </text>
        <text x="82" y="192" fill={C.lo} fontSize="7.5" fontFamily={MONO}>
          3 approvals · 2 checks passing · auto-merge
        </text>
        <rect x="82" y="200" width="120" height="4" rx="2" fill={C.dim}/>
        <rect x="82" y="200" width="80"  height="4" rx="2" fill={C.green}/>
        <text x="210" y="204" fill={C.lo} fontSize="7" fontFamily={MONO}>67%</text>
      </svg>
      <StatusBar label="5 COMMITS · CI/CD PIPELINE ACTIVE · AUTO-DEPLOY ON GREEN" color={C.amber}/>
    </V>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* 8. WEB — Browser frame with Lighthouse score rings                         */
/* ═══════════════════════════════════════════════════════════════════════════ */
export function WebHeroVisual() {
  const scores = [
    { label:"Performance",   val:100, color:C.green  },
    { label:"Accessibility", val:98,  color:C.green  },
    { label:"Best Practices",val:100, color:C.green  },
    { label:"SEO",           val:100, color:C.green  },
  ]
  const R = 32, CIRC = 2*Math.PI*R

  return (
    <V>
      <svg viewBox="0 0 380 270" width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <defs>
          <filter id="wf-glow">
            <feGaussianBlur stdDeviation="2" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Browser chrome */}
        <rect x="20" y="20" width="340" height="220" rx="10"
          fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
        {/* Title bar */}
        <rect x="20" y="20" width="340" height="32" rx="10"
          fill="rgba(255,255,255,.05)"/>
        <rect x="20" y="40" width="340" height="12" fill="rgba(255,255,255,.05)"/>
        {/* Traffic lights */}
        {[38, 54, 70].map((cx,i) => (
          <circle key={i} cx={cx} cy="36" r="5"
            fill={[C.red,C.amber,C.green][i]} opacity=".7"/>
        ))}
        {/* Address bar */}
        <rect x="88" y="28" width="224" height="16" rx="8"
          fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.06)" strokeWidth="1"/>
        <text x="200" y="39" textAnchor="middle" fill={C.lo} fontSize="8" fontFamily={MONO}>
          aethoncore.com
        </text>

        {/* Score rings 2×2 */}
        {scores.map((sc, i) => {
          const col = i % 2, row = Math.floor(i / 2)
          const cx = 90 + col * 160, cy = 112 + row * 90
          const dash = CIRC * (sc.val / 100)
          return (
            <g key={sc.label} filter="url(#wf-glow)">
              {/* Track */}
              <circle cx={cx} cy={cy} r={R} fill="none"
                stroke="rgba(255,255,255,.07)" strokeWidth="5"/>
              {/* Progress */}
              <circle cx={cx} cy={cy} r={R} fill="none"
                stroke={sc.color} strokeWidth="5"
                strokeDasharray={`${CIRC}`}
                strokeDashoffset={CIRC - dash}
                strokeLinecap="round"
                style={{ transformOrigin:`${cx}px ${cy}px`, transform:"rotate(-90deg)" }}>
                <animate attributeName="stroke-dashoffset"
                  from={`${CIRC}`} to={`${CIRC-dash}`}
                  dur="1.4s" fill="freeze"/>
              </circle>
              <text x={cx} y={cy+2} textAnchor="middle" dominantBaseline="middle"
                fill={sc.color} fontSize="14" fontFamily={MONO} fontWeight="700">{sc.val}</text>
              <text x={cx} y={cy+18} textAnchor="middle" fill={C.lo} fontSize="6.5" fontFamily={MONO}>
                {sc.label}
              </text>
            </g>
          )
        })}
      </svg>
      <StatusBar label="LIGHTHOUSE 100 · LCP 0.8s · CLS 0.004 · INP 42ms" color={C.green}/>
    </V>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* 9. REPUTATION — Orbital platform orrery                                    */
/* ═══════════════════════════════════════════════════════════════════════════ */
export function ReputationHeroVisual() {
  const platforms = [
    { name:"Google",     rating:"4.9", r:68,  dur:"12s",  offset:0,   color:C.blue,   size:14 },
    { name:"Yelp",       rating:"4.7", r:100, dur:"18s",  offset:120, color:C.amber,  size:11 },
    { name:"Trustpilot", rating:"4.8", r:128, dur:"26s",  offset:240, color:C.green,  size:12 },
    { name:"G2",         rating:"4.9", r:90,  dur:"20s",  offset:60,  color:C.purple, size:10 },
  ]

  return (
    <V>
      <svg viewBox="0 0 380 270" width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <defs>
          <filter id="rf-glow">
            <feGaussianBlur stdDeviation="4" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="rf-soft">
            <feGaussianBlur stdDeviation="2" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Orbital rings */}
        {platforms.map((p) => (
          <circle key={p.name} cx="190" cy="130" r={p.r}
            fill="none" stroke={p.color} strokeWidth=".5" opacity=".12"
            strokeDasharray="4 8"/>
        ))}

        {/* Central brand star */}
        <g filter="url(#rf-glow)">
          <circle cx="190" cy="130" r="22" fill={`${C.amber}15`} stroke={`${C.amber}30`} strokeWidth="1.5"/>
          <text x="190" y="126" textAnchor="middle" fill={C.amber} fontSize="9" fontFamily={MONO} fontWeight="700">
            BRAND
          </text>
          <text x="190" y="138" textAnchor="middle" fill={C.amber} fontSize="18" fontFamily={MONO}>
            ★
          </text>
        </g>

        {/* Orbiting platforms */}
        {platforms.map((p) => (
          <g key={p.name}
            style={{
              transformOrigin:"190px 130px",
              animation:`sv-sweep ${p.dur} linear infinite`,
            }}>
            <g transform={`rotate(${p.offset})`}>
              <g transform={`translate(190,${130-p.r})`}
                style={{ animation:`sv-sweep ${p.dur} linear infinite reverse`, transformOrigin:"0px 0px" }}>
                <circle r={p.size} fill={`${p.color}18`} stroke={p.color} strokeWidth="1" filter="url(#rf-soft)"/>
                <text y="3" textAnchor="middle" fill={p.color} fontSize="7" fontFamily={MONO} fontWeight="600">
                  ★{p.rating}
                </text>
                <text y="12" textAnchor="middle" fill={C.lo} fontSize="5.5" fontFamily={MONO}>
                  {p.name}
                </text>
              </g>
            </g>
          </g>
        ))}

        {/* Score summary */}
        <text x="358" y="40" textAnchor="end" fill={C.amber} fontSize="28" fontFamily={MONO} fontWeight="700">
          4.8
        </text>
        <text x="358" y="52" textAnchor="end" fill={C.lo} fontSize="7.5" fontFamily={MONO}>
          avg rating
        </text>
        <text x="358" y="64" textAnchor="end" fill={C.lo} fontSize="7.5" fontFamily={MONO}>
          600+ reviews
        </text>
      </svg>
      <StatusBar label="4 PLATFORMS · 4.8 AVG RATING · 600+ REVIEWS MONITORED" color={C.amber}/>
    </V>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* 10. CONSULTING — Arc milestone timeline                                    */
/* ═══════════════════════════════════════════════════════════════════════════ */
export function ConsultingHeroVisual() {
  const phases = [
    { label:"Discovery",  wk:"Wk 1–2",  done:true,  active:false },
    { label:"Assessment", wk:"Wk 3–4",  done:true,  active:false },
    { label:"Strategy",   wk:"Wk 5–8",  done:false, active:true  },
    { label:"Roadmap",    wk:"Wk 9–12", done:false, active:false },
    { label:"Brief",      wk:"Wk 13",   done:false, active:false },
  ]

  // Arc path — a smooth curve through 5 points
  const arcD = "M40,200 C80,200 100,80 160,80 S240,80 280,80 C320,80 340,200 360,200"

  const pts = [
    {x:40,  y:200},
    {x:120, y:88 },
    {x:200, y:80 },
    {x:280, y:80 },
    {x:360, y:200},
  ]

  return (
    <V>
      <svg viewBox="0 0 400 268" width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <defs>
          <filter id="cof-glow">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <linearGradient id="cof-arc" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={C.green} stopOpacity=".8"/>
            <stop offset="40%" stopColor={C.blue} stopOpacity=".8"/>
            <stop offset="100%" stopColor={C.indigo} stopOpacity=".3"/>
          </linearGradient>
        </defs>

        {/* Arc background */}
        <path d={arcD} fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="2.5"/>
        {/* Arc progress (2/5 done) */}
        <path d="M40,200 C80,200 100,80 160,80 S200,80 200,80"
          fill="none" stroke="url(#cof-arc)" strokeWidth="2.5"/>

        {/* Phase nodes */}
        {phases.map((p, i) => {
          const pt = pts[i]
          const color = p.active ? C.blue : p.done ? C.green : C.dim
          return (
            <g key={p.label}>
              {/* Node */}
              <circle cx={pt.x} cy={pt.y} r="18" fill={`${color}12`} stroke={`${color}25`} strokeWidth="1"/>
              <circle cx={pt.x} cy={pt.y} r="7" fill={color}
                style={{ animation: p.active ? "sv-pulse 2s ease-in-out infinite" : undefined }}
                filter={p.active ? "url(#cof-glow)" : undefined}/>
              {p.done && (
                <text x={pt.x} y={pt.y+4} textAnchor="middle" dominantBaseline="middle"
                  fill="rgba(255,255,255,.9)" fontSize="7" fontFamily={MONO}>✓</text>
              )}
              {/* Label */}
              <text x={pt.x} y={pt.y + (i === 2 ? -26 : 28)} textAnchor="middle"
                fill={p.active ? C.blue : p.done ? C.green : C.lo}
                fontSize="8.5" fontFamily={MONO} fontWeight={p.active ? "700" : "400"}>
                {p.label}
              </text>
              <text x={pt.x} y={pt.y + (i === 2 ? -16 : 40)} textAnchor="middle"
                fill={C.lo} fontSize="7" fontFamily={MONO}>{p.wk}</text>
            </g>
          )
        })}

        {/* Active phase callout */}
        <rect x="148" y="16" width="104" height="40" rx="8"
          fill={`${C.blue}14`} stroke={`${C.blue}2e`} strokeWidth="1"/>
        <text x="200" y="30" textAnchor="middle" fill={C.blue} fontSize="7.5" fontFamily={MONO} fontWeight="700">
          → WK 6 / 13
        </text>
        <text x="200" y="42" textAnchor="middle" fill={C.lo} fontSize="7" fontFamily={MONO}>
          2 workshops left
        </text>
      </svg>
      <StatusBar label="5-PHASE ENGAGEMENT · WEEK 6 ACTIVE · ON SCHEDULE" color={C.blue}/>
    </V>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* 11. ARCHITECTURE — Blueprint with scanning reveal                          */
/* ═══════════════════════════════════════════════════════════════════════════ */
export function ArchitectureHeroVisual() {
  const [scanY, setScanY] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setScanY(v => v >= 220 ? 0 : v + 2), 40)
    return () => clearInterval(t)
  }, [])

  const components = [
    { x:30,  y:40,  w:80, h:36, label:"CDN / WAF",        color:C.blue,   sev:null   },
    { x:150, y:40,  w:80, h:36, label:"API Gateway",       color:C.sky,    sev:"HIGH" },
    { x:270, y:40,  w:80, h:36, label:"Auth Service",      color:C.green,  sev:null   },
    { x:30,  y:120, w:80, h:36, label:"App Cluster",       color:C.indigo, sev:"MED"  },
    { x:150, y:120, w:80, h:36, label:"Cache Layer",       color:C.cyan,   sev:null   },
    { x:270, y:120, w:80, h:36, label:"Database",          color:C.purple, sev:"HIGH" },
    { x:90,  y:198, w:80, h:36, label:"Observability",     color:C.teal,   sev:null   },
    { x:210, y:198, w:80, h:36, label:"Secrets Manager",   color:C.amber,  sev:"MED"  },
  ]

  const edges = [
    {x1:70,y1:76,x2:150,y2:58},{x1:230,y1:58,x2:270,y2:58},
    {x1:70,y1:76,x2:30,y2:120},{x1:190,y1:76,x2:190,y2:120},
    {x1:110,y1:138,x2:150,y2:138},{x1:230,y1:138,x2:270,y2:138},
    {x1:130,y1:156,x2:130,y2:198},{x1:250,y1:156,x2:250,y2:198},
  ]

  const sevColor = (s: string|null) => s === "HIGH" ? C.red : s === "MED" ? C.amber : null

  return (
    <V>
      <svg viewBox="0 0 380 268" width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <defs>
          <filter id="arch-glow">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <clipPath id="arch-clip">
            <rect x="0" y="0" width="380" height="238"/>
          </clipPath>
        </defs>

        {/* Connection edges */}
        {edges.map((e,i) => (
          <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
            stroke="rgba(255,255,255,.1)" strokeWidth=".8" strokeDasharray="4 4"/>
        ))}

        {/* Components */}
        {components.map((c) => {
          const revealed = c.y + c.h < scanY
          const sc = sevColor(c.sev)
          const borderCol = sc ?? c.color
          return (
            <g key={c.label} opacity={revealed ? 1 : 0.25}
              style={{ transition:"opacity .3s" }}>
              <rect x={c.x} y={c.y} width={c.w} height={c.h} rx="6"
                fill={`${c.color}0d`}
                stroke={revealed && sc ? sc : `${borderCol}30`}
                strokeWidth={revealed && sc ? "1.5" : "1"}/>
              <text x={c.x+c.w/2} y={c.y+c.h/2+4} textAnchor="middle"
                fill={revealed ? (sc ?? C.hi) : C.lo}
                fontSize="8" fontFamily={MONO}>{c.label}</text>
              {revealed && sc && (
                <g filter="url(#arch-glow)">
                  <circle cx={c.x+c.w-8} cy={c.y+8} r="5" fill={sc} opacity=".9"/>
                  <text x={c.x+c.w-8} y={c.y+11} textAnchor="middle"
                    fill="white" fontSize="5.5" fontFamily={MONO}>!</text>
                </g>
              )}
            </g>
          )
        })}

        {/* Scan line */}
        <g clipPath="url(#arch-clip)">
          <line x1="0" y1={scanY} x2="380" y2={scanY}
            stroke={C.sky} strokeWidth="1" opacity=".6" filter="url(#arch-glow)"/>
          <rect x="0" y={scanY-6} width="380" height="6"
            fill={`${C.sky}08`}/>
        </g>

        {/* Finding counter */}
        <text x="358" y="30" textAnchor="end" fill={C.amber} fontSize="26" fontFamily={MONO} fontWeight="700">
          46
        </text>
        <text x="358" y="42" textAnchor="end" fill={C.lo} fontSize="7.5" fontFamily={MONO}>findings</text>
        <text x="358" y="54" textAnchor="end" fill={C.red} fontSize="7" fontFamily={MONO}>3 HIGH</text>
      </svg>
      <StatusBar label="LIVE SCAN · 46 FINDINGS · 3 HIGH PRIORITY · 0 CRITICAL" color={C.amber}/>
    </V>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* 12. IMPLEMENTATION — Rising layer stack                                    */
/* ═══════════════════════════════════════════════════════════════════════════ */
export function ImplementationHeroVisual() {
  const layers = [
    { label:"Database & Storage",   color:C.purple, delay:"0s"   },
    { label:"Cache & Message Queue",color:C.indigo, delay:".15s" },
    { label:"API Gateway",          color:C.blue,   delay:".3s"  },
    { label:"Application Services", color:C.sky,    delay:".45s" },
    { label:"CDN & Edge",           color:C.cyan,   delay:".6s"  },
    { label:"Observability",        color:C.teal,   delay:".75s" },
  ]
  const LH = 28, GAP = 4, W = 280, X = 50

  return (
    <V>
      <svg viewBox="0 0 380 268" width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <defs>
          <filter id="if-glow">
            <feGaussianBlur stdDeviation="2.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Layers from bottom */}
        {layers.map((l, i) => {
          const ri = layers.length - 1 - i
          const y = 232 - ri * (LH + GAP)
          const w = W - i * 12
          const x = X + i * 6
          return (
            <g key={l.label}
              style={{ animation:`sv-appear .5s ${l.delay} both ease-out` }}>
              {/* Layer body */}
              <rect x={x} y={y} width={w} height={LH} rx="6"
                fill={`${l.color}14`} stroke={`${l.color}30`} strokeWidth="1"/>
              {/* Top edge highlight */}
              <rect x={x+1} y={y+1} width={w-2} height="1.5" rx=".75"
                fill={l.color} opacity=".3"/>
              <text x={x+w/2} y={y+LH/2+4} textAnchor="middle"
                fill={l.color} fontSize="8.5" fontFamily={MONO}>{l.label}</text>
              {/* Left status dot */}
              <circle cx={x+14} cy={y+LH/2} r="3.5" fill={l.color}
                style={{ animation:`sv-pulse 2.5s ${l.delay} ease-in-out infinite` }}
                filter="url(#if-glow)"/>
            </g>
          )
        })}

        {/* Progress strip */}
        <rect x="50" y="244" width="280" height="5" rx="2.5" fill={C.dim}/>
        <rect x="50" y="244" width="186" height="5" rx="2.5" fill={C.green}/>
        <text x="50" y="258" fill={C.lo} fontSize="7.5" fontFamily={MONO}>Sprint progress</text>
        <text x="330" y="258" textAnchor="end" fill={C.green} fontSize="7.5" fontFamily={MONO}>67%</text>
      </svg>
      <StatusBar label="6 LAYERS DEPLOYED · SPRINT 4 · GO-LIVE IN 12 DAYS" color={C.green}/>
    </V>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* 13. IAM — Access decision flowgraph                                        */
/* ═══════════════════════════════════════════════════════════════════════════ */
export function IamHeroVisual() {
  const identities = [
    { y:60,  label:"alice@corp",    color:C.blue   },
    { y:108, label:"ci-runner",     color:C.sky    },
    { y:156, label:"svc-account",   color:C.indigo },
    { y:204, label:"dan@corp",      color:C.purple },
  ]
  const resources = [
    { y:80,  label:"prod-db-01", color:C.green  },
    { y:128, label:"ecr.aws/app",color:C.cyan   },
    { y:176, label:"k8s-cluster", color:C.teal  },
  ]
  const decisions = [
    { from:0, to:0, result:"ALLOW" },
    { from:1, to:1, result:"ALLOW" },
    { from:0, to:2, result:"DENY"  },
    { from:3, to:2, result:"DENY"  },
    { from:2, to:2, result:"DENY"  },
  ]

  const IX = 50, RX = 290
  const resC = (r: string) => r === "ALLOW" ? C.green : C.red

  return (
    <V>
      <svg viewBox="0 0 380 268" width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <defs>
          <filter id="iam-glow">
            <feGaussianBlur stdDeviation="2.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <marker id="arr-allow" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={C.green}/>
          </marker>
          <marker id="arr-deny" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={C.red}/>
          </marker>
        </defs>

        {/* Policy engine box center */}
        <rect x="148" y="100" width="84" height="68" rx="8"
          fill={`${C.indigo}12`} stroke={`${C.indigo}30`} strokeWidth="1"/>
        <text x="190" y="122" textAnchor="middle" fill={C.indigo} fontSize="7.5" fontFamily={MONO} fontWeight="700">
          ZERO TRUST
        </text>
        <text x="190" y="134" textAnchor="middle" fill={C.indigo} fontSize="7.5" fontFamily={MONO}>
          POLICY ENGINE
        </text>
        <text x="190" y="158" textAnchor="middle" fill={C.lo} fontSize="7" fontFamily={MONO}>
          847 evals/day
        </text>

        {/* Identity nodes */}
        {identities.map((id, i) => (
          <g key={id.label}>
            <rect x={IX-8} y={id.y-14} width={82} height={28} rx="6"
              fill={`${id.color}0d`} stroke={`${id.color}25`} strokeWidth="1"/>
            <circle cx={IX+4} cy={id.y} r="4" fill={id.color}
              style={{ animation:`sv-pulse 2.5s ${i*.3}s ease-in-out infinite` }}
              filter="url(#iam-glow)"/>
            <text x={IX+14} y={id.y+4} fill={id.color} fontSize="7.5" fontFamily={MONO}>
              {id.label}
            </text>
            {/* Line to engine */}
            <line x1={IX+74} y1={id.y} x2="148" y2="134"
              stroke={`${id.color}20`} strokeWidth=".8"/>
          </g>
        ))}

        {/* Resource nodes */}
        {resources.map((r) => (
          <g key={r.label}>
            <rect x={RX-10} y={r.y-14} width={82} height={28} rx="6"
              fill={`${r.color}0d`} stroke={`${r.color}25`} strokeWidth="1"/>
            <circle cx={RX+60} cy={r.y} r="4" fill={r.color}
              style={{ animation:`sv-pulse 2.5s ease-in-out infinite` }}
              filter="url(#iam-glow)"/>
            <text x={RX} y={r.y+4} fill={r.color} fontSize="7.5" fontFamily={MONO}>
              {r.label}
            </text>
            {/* Line from engine */}
            <line x1="232" y1="134" x2={RX-10} y2={r.y}
              stroke={`${r.color}20`} strokeWidth=".8"/>
          </g>
        ))}

        {/* Decision packets */}
        {decisions.map((d, i) => {
          const id = identities[d.from], res = resources[d.to]
          const col = resC(d.result)
          const pathD = `M${IX+74},${id.y} Q190,134 ${RX-10},${res.y}`
          return (
            <g key={i}>
              <circle r="3" fill={col} filter="url(#iam-glow)">
                <animateMotion dur={`${1.8+i*.4}s`} begin={`${i*.3}s`} repeatCount="indefinite" path={pathD}/>
              </circle>
            </g>
          )
        })}

        {/* Stats */}
        <text x="358" y="30" textAnchor="end" fill={C.green} fontSize="22" fontFamily={MONO} fontWeight="700">
          779
        </text>
        <text x="358" y="42" textAnchor="end" fill={C.lo} fontSize="7.5" fontFamily={MONO}>allowed</text>
        <text x="358" y="58" textAnchor="end" fill={C.red} fontSize="16" fontFamily={MONO} fontWeight="700">
          68
        </text>
        <text x="358" y="70" textAnchor="end" fill={C.lo} fontSize="7.5" fontFamily={MONO}>denied</text>
      </svg>
      <StatusBar label="ZERO TRUST · 847 EVALS TODAY · 68 DENIED · SIEM LOGGED" color={C.indigo}/>
    </V>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* 14. COMPLIANCE — Concentric framework rings                                */
/* ═══════════════════════════════════════════════════════════════════════════ */
export function ComplianceHeroVisual() {
  const frameworks = [
    { name:"HIPAA",      pct:100, r:42,  color:C.green,  controls:"61/61"    },
    { name:"SOC 2",      pct:94,  r:66,  color:C.blue,   controls:"84/89"    },
    { name:"ISO 27001",  pct:87,  r:90,  color:C.sky,    controls:"99/114"   },
    { name:"PCI DSS v4", pct:78,  r:114, color:C.amber,  controls:"196/251"  },
  ]

  return (
    <V>
      <svg viewBox="0 0 380 268" width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <defs>
          <filter id="comp-glow">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Framework rings */}
        {frameworks.map((f) => {
          const circ = 2*Math.PI*f.r
          const dash = circ * (f.pct/100)
          return (
            <g key={f.name}>
              {/* Track */}
              <circle cx="190" cy="134" r={f.r} fill="none"
                stroke="rgba(255,255,255,.06)" strokeWidth="7"/>
              {/* Progress arc */}
              <circle cx="190" cy="134" r={f.r} fill="none"
                stroke={f.color} strokeWidth="7"
                strokeDasharray={circ}
                strokeDashoffset={circ - dash}
                strokeLinecap="round"
                style={{ transformOrigin:"190px 134px", transform:"rotate(-90deg)" }}
                filter="url(#comp-glow)">
                <animate attributeName="stroke-dashoffset"
                  from={`${circ}`} to={`${circ-dash}`} dur="1.6s" fill="freeze"/>
              </circle>
              {/* Label at 0° (right side) */}
              <text
                x={190 + f.r + 12}
                y={134 + 4}
                fill={f.color} fontSize="8" fontFamily={MONO}>
                {f.name} {f.pct}%
              </text>
            </g>
          )
        })}

        {/* Center: overall score */}
        <text x="190" y="128" textAnchor="middle" fill={C.hi} fontSize="24" fontFamily={MONO} fontWeight="700">
          90%
        </text>
        <text x="190" y="142" textAnchor="middle" fill={C.lo} fontSize="8" fontFamily={MONO}>
          overall
        </text>

        {/* Controls summary on left */}
        <text x="22" y="108" fill={C.lo} fontSize="7.5" fontFamily={MONO}>Controls</text>
        {frameworks.map((f, i) => (
          <g key={f.name+i} transform={`translate(22,${116+i*14})`}>
            <circle cx="4" cy="4" r="3.5" fill={f.color} opacity=".8"/>
            <text x="12" y="8" fill={C.lo} fontSize="7.5" fontFamily={MONO}>
              {f.name}: {f.controls}
            </text>
          </g>
        ))}
      </svg>
      <StatusBar label="4 FRAMEWORKS · CONTINUOUS MONITORING · LAST AUDIT 14 DAYS AGO" color={C.green}/>
    </V>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* 15. DISASTER RECOVERY — Dual-site replication bridge                       */
/* ═══════════════════════════════════════════════════════════════════════════ */
export function DisasterRecoveryHeroVisual() {
  const [lag, setLag] = useState(1.4)
  useEffect(() => {
    const t = setInterval(() => setLag(parseFloat((1.1 + Math.random()*.7).toFixed(1))), 2000)
    return () => clearInterval(t)
  }, [])

  // Replication path
  const replPath = "M132,128 C180,80 200,80 248,128"
  const replPath2 = "M132,128 C180,176 200,176 248,128"

  return (
    <V>
      <svg viewBox="0 0 380 268" width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <defs>
          <filter id="dr-glow">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Primary site */}
        <rect x="20" y="72" width="112" height="112" rx="10"
          fill={`${C.green}0d`} stroke={`${C.green}28`} strokeWidth="1.5"/>
        <text x="76" y="95" textAnchor="middle" fill={C.green} fontSize="8" fontFamily={MONO} fontWeight="700">
          PRIMARY
        </text>
        <text x="76" y="107" textAnchor="middle" fill={C.lo} fontSize="7" fontFamily={MONO}>US-East</text>
        {/* EKG inside primary */}
        <path d="M30,138 L46,138 L50,120 L54,156 L58,138 L70,138 L73,130 L76,138 L92,138 L96,120 L100,156 L104,138 L120,138"
          fill="none" stroke={C.green} strokeWidth="1.2" filter="url(#dr-glow)"/>
        <text x="76" y="172" textAnchor="middle" fill={C.green} fontSize="9" fontFamily={MONO} fontWeight="700">
          ACTIVE
        </text>

        {/* DR site */}
        <rect x="248" y="72" width="112" height="112" rx="10"
          fill={`${C.sky}0a`} stroke={`${C.sky}22`} strokeWidth="1.5"/>
        <text x="304" y="95" textAnchor="middle" fill={C.sky} fontSize="8" fontFamily={MONO} fontWeight="700">
          DR SITE
        </text>
        <text x="304" y="107" textAnchor="middle" fill={C.lo} fontSize="7" fontFamily={MONO}>US-West</text>
        {/* Flatter EKG inside DR */}
        <path d="M258,138 L274,138 L276,128 L278,148 L280,138 L296,138 L298,134 L300,138 L316,138 L318,128 L320,148 L322,138 L348,138"
          fill="none" stroke={C.sky} strokeWidth="1" opacity=".6"/>
        <text x="304" y="172" textAnchor="middle" fill={C.sky} fontSize="9" fontFamily={MONO} fontWeight="700">
          STANDBY
        </text>

        {/* Replication streams */}
        <path d={replPath} fill="none" stroke={C.blue} strokeWidth="1" opacity=".2"/>
        <path d={replPath2} fill="none" stroke={C.blue} strokeWidth="1" opacity=".2"/>
        {/* Packets flowing primary→DR */}
        {[0,1,2].map(i => (
          <circle key={i} r="3" fill={C.blue} filter="url(#dr-glow)">
            <animateMotion dur="2.5s" begin={`${i*.8}s`} repeatCount="indefinite" path={replPath}/>
          </circle>
        ))}
        {/* Packets returning (heartbeat check) */}
        <circle r="2" fill={C.sky} opacity=".6">
          <animateMotion dur="3s" begin=".4s" repeatCount="indefinite" path={replPath2}/>
        </circle>

        {/* RPO/RTO metrics */}
        <g transform="translate(40,208)">
          <text fill={C.lo} fontSize="7.5" fontFamily={MONO}>RPO Target: 1hr → now: 8 min</text>
        </g>
        <g transform="translate(40,222)">
          <text fill={C.lo} fontSize="7.5" fontFamily={MONO}>RTO Target: 4hr → now: 47 min</text>
        </g>
        <g transform="translate(40,236)">
          <text fill={C.lo} fontSize="7.5" fontFamily={MONO}>Repl. lag: {lag}s (target &lt;5s)</text>
        </g>

        {/* Lag indicator */}
        <text x="358" y="35" textAnchor="end" fill={C.green} fontSize="22" fontFamily={MONO} fontWeight="700">
          {lag}s
        </text>
        <text x="358" y="47" textAnchor="end" fill={C.lo} fontSize="7.5" fontFamily={MONO}>repl. lag</text>
      </svg>
      <StatusBar label="RPO 8 MIN · RTO 47 MIN · MONTHLY FAILOVER TESTS · HEALTHY" color={C.green}/>
    </V>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* 16. TRAINING — Learning path with milestone nodes                          */
/* ═══════════════════════════════════════════════════════════════════════════ */
export function TrainingHeroVisual() {
  const milestones = [
    { x:40,  y:200, label:"Foundations",      cert:true,  done:true  },
    { x:110, y:140, label:"Cloud Arch",        cert:true,  done:true  },
    { x:190, y:100, label:"Security Eng",      cert:false, done:true  },
    { x:270, y:128, label:"DevOps & SRE",      cert:false, done:false },
    { x:340, y:184, label:"IaC Mastery",       cert:true,  done:false },
  ]

  // Curved path through milestones
  const pathD = "M40,200 C70,200 80,140 110,140 S160,100 190,100 S250,128 270,128 S320,184 340,184"

  return (
    <V>
      <svg viewBox="0 0 380 268" width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <defs>
          <filter id="tr-glow">
            <feGaussianBlur stdDeviation="2.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <linearGradient id="tr-path" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={C.green} stopOpacity=".9"/>
            <stop offset="60%" stopColor={C.blue} stopOpacity=".8"/>
            <stop offset="100%" stopColor={C.indigo} stopOpacity=".3"/>
          </linearGradient>
        </defs>

        {/* Dotted future path */}
        <path d={pathD} fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="2.5" strokeDasharray="5 8"/>
        {/* Completed path */}
        <path d="M40,200 C70,200 80,140 110,140 S160,100 190,100 S220,108 230,118"
          fill="none" stroke="url(#tr-path)" strokeWidth="2.5" filter="url(#tr-glow)"/>

        {/* Milestone nodes */}
        {milestones.map((m, i) => (
          <g key={m.label}>
            {/* Outer ring */}
            <circle cx={m.x} cy={m.y} r="20"
              fill={m.done ? `${C.green}0d` : `${C.indigo}08`}
              stroke={m.done ? `${C.green}28` : `${C.indigo}18`}
              strokeWidth="1"/>
            {/* Inner node */}
            <circle cx={m.x} cy={m.y} r="8"
              fill={m.done ? C.green : (i === 3 ? C.blue : C.dim)}
              filter={m.done || i===3 ? "url(#tr-glow)" : undefined}
              style={i===3 ? { animation:"sv-pulse 2s ease-in-out infinite" } : undefined}/>
            {/* Checkmark for done */}
            {m.done && (
              <text x={m.x} y={m.y+4} textAnchor="middle" dominantBaseline="middle"
                fill="white" fontSize="7.5" fontFamily={MONO}>✓</text>
            )}
            {/* Certificate badge */}
            {m.cert && m.done && (
              <g transform={`translate(${m.x+12},${m.y-16})`}>
                <circle r="6" fill={`${C.amber}20`} stroke={C.amber} strokeWidth="1"/>
                <text y="3" textAnchor="middle" fill={C.amber} fontSize="6">★</text>
              </g>
            )}
            {/* Label */}
            <text x={m.x} y={m.y + (i % 2 === 0 ? 32 : -26)} textAnchor="middle"
              fill={m.done ? C.hi : C.lo} fontSize="8" fontFamily={MONO}>{m.label}</text>
          </g>
        ))}

        {/* Team progress */}
        <text x="24" y="34" fill={C.lo} fontSize="8" fontFamily={MONO}>Team completion</text>
        <rect x="24" y="42" width="200" height="5" rx="2.5" fill={C.dim}/>
        <rect x="24" y="42" width="130" height="5" rx="2.5" fill={C.green}/>
        <text x="234" y="47" fill={C.green} fontSize="8" fontFamily={MONO}>65%</text>

        {/* Cert count */}
        <text x="358" y="40" textAnchor="end" fill={C.amber} fontSize="26" fontFamily={MONO} fontWeight="700">
          12
        </text>
        <text x="358" y="52" textAnchor="end" fill={C.lo} fontSize="7.5" fontFamily={MONO}>
          certs earned
        </text>
      </svg>
      <StatusBar label="5 LEARNING TRACKS · 12 CERTS EARNED · 65% TEAM COMPLETE" color={C.green}/>
    </V>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* 17. ASSESSMENT — Animated spider / radar chart                             */
/* ═══════════════════════════════════════════════════════════════════════════ */
export function AssessmentHeroVisual() {
  const dims = [
    { label:"Security",       val:.72, bench:.85 },
    { label:"Reliability",    val:.81, bench:.90 },
    { label:"Cost Efficiency",val:.60, bench:.78 },
    { label:"Scalability",    val:.88, bench:.82 },
    { label:"Compliance",     val:.65, bench:.88 },
    { label:"Observability",  val:.54, bench:.80 },
  ]

  const N = dims.length, R = 90, CX = 190, CY = 130

  const polar = (i: number, val: number) => {
    const angle = (i / N) * Math.PI * 2 - Math.PI / 2
    return { x: CX + Math.cos(angle) * R * val, y: CY + Math.sin(angle) * R * val }
  }

  const makePolygon = (vals: number[]) =>
    vals.map((v, i) => polar(i, v)).map(p => `${p.x},${p.y}`).join(" ")

  const clientPoly  = makePolygon(dims.map(d => d.val))
  const benchPoly   = makePolygon(dims.map(d => d.bench))

  return (
    <V>
      <svg viewBox="0 0 380 268" width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <defs>
          <filter id="ass-glow">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Grid rings */}
        {[.25,.5,.75,1].map(scale => (
          <polygon key={scale}
            points={makePolygon(Array.from({length:N}).map(()=>scale))}
            fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="1"/>
        ))}

        {/* Axes */}
        {dims.map((_,i) => {
          const end = polar(i, 1)
          return (
            <line key={i} x1={CX} y1={CY} x2={end.x} y2={end.y}
              stroke="rgba(255,255,255,.07)" strokeWidth="1"/>
          )
        })}

        {/* Benchmark polygon */}
        <polygon points={benchPoly}
          fill={`${C.indigo}12`} stroke={C.indigo} strokeWidth="1" strokeDasharray="4 4"/>

        {/* Client polygon */}
        <polygon points={clientPoly}
          fill={`${C.blue}18`} stroke={C.blue} strokeWidth="1.8" filter="url(#ass-glow)">
          <animate attributeName="points"
            from={makePolygon(Array.from({length:N}).map(()=>0))}
            to={clientPoly}
            dur="1.4s" fill="freeze" calcMode="spline"
            keySplines="0.4 0 0.2 1"/>
        </polygon>

        {/* Axis labels + score dots */}
        {dims.map((d, i) => {
          const label = polar(i, 1.2)
          const dot   = polar(i, d.val)
          return (
            <g key={d.label}>
              <circle cx={dot.x} cy={dot.y} r="4" fill={C.blue} filter="url(#ass-glow)"/>
              <text x={label.x} y={label.y+4} textAnchor="middle"
                fill={C.lo} fontSize="8" fontFamily={MONO}>{d.label}</text>
              <text x={label.x} y={label.y+14} textAnchor="middle"
                fill={C.blue} fontSize="8" fontFamily={MONO}>{Math.round(d.val*100)}%</text>
            </g>
          )
        })}

        {/* Center dot */}
        <circle cx={CX} cy={CY} r="4" fill={C.blue} filter="url(#ass-glow)"
          style={{ animation:"sv-pulse 2s ease-in-out infinite" }}/>

        {/* Legend */}
        <g transform="translate(20,232)">
          <line x1="0" y1="5" x2="14" y2="5" stroke={C.blue} strokeWidth="2"/>
          <text x="18" y="9" fill={C.lo} fontSize="7.5" fontFamily={MONO}>Current state</text>
          <line x1="100" y1="5" x2="114" y2="5" stroke={C.indigo} strokeWidth="1.5" strokeDasharray="3 3"/>
          <text x="118" y="9" fill={C.lo} fontSize="7.5" fontFamily={MONO}>Industry benchmark</text>
        </g>
      </svg>
      <StatusBar label="6 DIMENSIONS ASSESSED · BENCHMARKED AGAINST INDUSTRY" color={C.blue}/>
    </V>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* 18. DEVOPS — Infinity pipeline loop                                        */
/* ═══════════════════════════════════════════════════════════════════════════ */
export function DevOpsHeroVisual() {
  // Lemniscate of Bernoulli parametric: a=120
  const A = 120, steps = 120
  const CX = 190, CY = 128

  const lemniscate = (t: number) => {
    const cos2t = Math.cos(2*t)
    if (1 - cos2t < 0) return { x:CX, y:CY } // safety
    const r = A * Math.sqrt(Math.abs(2*cos2t)) / Math.sqrt(1+Math.sin(t)*Math.sin(t))
    return { x: CX + r*Math.cos(t), y: CY + r*Math.sin(t)*Math.cos(t) }
  }

  const pathPts = Array.from({length:steps+1}).map((_,i) => {
    const t = (i/steps)*Math.PI*2
    const p = lemniscate(t)
    return `${i===0?"M":"L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`
  })
  const infinityPath = pathPts.join(" ") + " Z"

  const stages = [
    { t:0,     label:"Code",    color:C.blue   },
    { t:.52,   label:"Build",   color:C.sky    },
    { t:1.05,  label:"Test",    color:C.cyan   },
    { t:1.57,  label:"Deploy",  color:C.green  },
    { t:2.09,  label:"Monitor", color:C.amber  },
    { t:2.62,  label:"Ops",     color:C.indigo },
  ]

  return (
    <V>
      <svg viewBox="0 0 380 268" width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <defs>
          <filter id="dv-glow">
            <feGaussianBlur stdDeviation="3.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="dv-soft">
            <feGaussianBlur stdDeviation="1.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Infinity path (glow) */}
        <path d={infinityPath} fill="none" stroke={C.blue} strokeWidth="4" opacity=".12"
          filter="url(#dv-glow)"/>
        {/* Infinity path (crisp) */}
        <path d={infinityPath} fill="none" stroke={C.blue} strokeWidth="1.5" opacity=".5"/>

        {/* Animated packets */}
        {[0,.33,.66].map((offset, i) => (
          <circle key={i} r="4" fill={[C.blue,C.green,C.cyan][i]} filter="url(#dv-soft)">
            <animateMotion dur="6s" begin={`${offset*6}s`} repeatCount="indefinite" path={infinityPath}
              rotate="auto"/>
          </circle>
        ))}

        {/* Stage nodes */}
        {stages.map((st) => {
          const p = lemniscate(st.t)
          return (
            <g key={st.label}>
              <circle cx={p.x} cy={p.y} r="16" fill={`${st.color}12`} stroke={`${st.color}28`} strokeWidth="1"/>
              <circle cx={p.x} cy={p.y} r="5.5" fill={st.color} filter="url(#dv-soft)"
                style={{ animation:`sv-pulse 2.5s ease-in-out infinite` }}/>
              <text x={p.x} y={p.y + (p.y < CY ? -20 : 26)} textAnchor="middle"
                fill={st.color} fontSize="8.5" fontFamily={MONO}>{st.label}</text>
            </g>
          )
        })}

        {/* Center label */}
        <text x={CX} y={CY+4} textAnchor="middle" dominantBaseline="middle"
          fill={C.lo} fontSize="9" fontFamily={MONO} letterSpacing=".1em">CONTINUOUS</text>

        {/* Deploy stats */}
        <text x="358" y="34" textAnchor="end" fill={C.green} fontSize="22" fontFamily={MONO} fontWeight="700">
          12×
        </text>
        <text x="358" y="46" textAnchor="end" fill={C.lo} fontSize="7.5" fontFamily={MONO}>
          deploys/day
        </text>
        <text x="358" y="62" textAnchor="end" fill={C.lo} fontSize="7.5" fontFamily={MONO}>
          MTTR: 4 min
        </text>
      </svg>
      <StatusBar label="12 DEPLOYS/DAY · 4 MIN MTTR · ZERO DOWNTIME RELEASES" color={C.green}/>
    </V>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* 19. FINOPS — Cost savings waterfall                                        */
/* ═══════════════════════════════════════════════════════════════════════════ */
export function FinOpsHeroVisual() {
  const categories = [
    { label:"Rightsizing",        savings:28, color:C.green  },
    { label:"Reserved Instances", savings:22, color:C.blue   },
    { label:"Idle Resources",     savings:18, color:C.sky    },
    { label:"Data Transfer",      savings:12, color:C.cyan   },
    { label:"Licensing",          savings:8,  color:C.teal   },
  ]
  const total = categories.reduce((a,c) => a + c.savings, 0)
  const [animated, setAnimated] = useState(false)
  useEffect(() => { const t = setTimeout(() => setAnimated(true), 100); return () => clearTimeout(t) }, [])

  const BH = 150, BWIDTH = 44, GAP = 12, startX = 40

  return (
    <V>
      <svg viewBox="0 0 380 268" width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <defs>
          <filter id="fin-glow">
            <feGaussianBlur stdDeviation="2.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Title */}
        <text x="24" y="36" fill={C.hi} fontSize="11" fontFamily={MONO} fontWeight="700">
          Cloud Cost Reduction
        </text>

        {/* Before bar */}
        <rect x={startX} y={60} width={BWIDTH} height={BH} rx="4"
          fill={`${C.red}14`} stroke={`${C.red}28`} strokeWidth="1"/>
        <text x={startX + BWIDTH/2} y={54} textAnchor="middle" fill={C.red} fontSize="8" fontFamily={MONO}>
          Before
        </text>
        <text x={startX + BWIDTH/2} y={220} textAnchor="middle" fill={C.red} fontSize="9" fontFamily={MONO}>
          $100k
        </text>

        {/* Reduction bars */}
        {categories.map((cat, i) => {
          const x = startX + BWIDTH + GAP + i * (BWIDTH + GAP)
          const h = BH * (cat.savings / 100)
          const y = 60 + BH - h
          return (
            <g key={cat.label}>
              <rect x={x} y={animated ? y : 60+BH} width={BWIDTH} height={animated ? h : 0} rx="4"
                fill={`${cat.color}20`} stroke={`${cat.color}38`} strokeWidth="1"
                style={{ transition:`height .8s ${i*.12}s ease-out, y .8s ${i*.12}s ease-out` }}
                filter="url(#fin-glow)"/>
              <text x={x+BWIDTH/2} y={animated ? y-8 : 70} textAnchor="middle"
                fill={cat.color} fontSize="8.5" fontFamily={MONO} fontWeight="700"
                style={{ transition:`y .8s ${i*.12}s ease-out` }}>
                -{cat.savings}%
              </text>
              <text x={x+BWIDTH/2} y={220} textAnchor="middle"
                fill={C.lo} fontSize="6.5" fontFamily={MONO}>{cat.label}</text>
            </g>
          )
        })}

        {/* After bar */}
        <rect x={startX + BWIDTH + GAP + categories.length*(BWIDTH+GAP)}
          y={60 + BH*(total/100)} width={BWIDTH} height={BH*(1-total/100)} rx="4"
          fill={`${C.green}18`} stroke={`${C.green}30`} strokeWidth="1.5"/>
        <text x={startX + BWIDTH + GAP + categories.length*(BWIDTH+GAP) + BWIDTH/2}
          y={54} textAnchor="middle" fill={C.green} fontSize="8" fontFamily={MONO}>After</text>
        <text x={startX + BWIDTH + GAP + categories.length*(BWIDTH+GAP) + BWIDTH/2}
          y={220} textAnchor="middle" fill={C.green} fontSize="9" fontFamily={MONO}>
          ${(100-total)}k
        </text>

        {/* Total savings */}
        <text x="358" y="60" textAnchor="end" fill={C.green} fontSize="28" fontFamily={MONO} fontWeight="700">
          {total}%
        </text>
        <text x="358" y="74" textAnchor="end" fill={C.lo} fontSize="7.5" fontFamily={MONO}>saved</text>
        <text x="358" y="90" textAnchor="end" fill={C.green} fontSize="14" fontFamily={MONO} fontWeight="700">
          ${total}k/mo
        </text>
      </svg>
      <StatusBar label={`${total}% COST REDUCTION FOUND · 5 CATEGORIES · ROI POSITIVE DAY 1`} color={C.green}/>
    </V>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* 20. DATA GOVERNANCE — Data lineage flow                                    */
/* ═══════════════════════════════════════════════════════════════════════════ */
export function DataGovernanceHeroVisual() {
  const sources = [
    { y:68,  label:"CRM",        color:C.blue,   class:"PII"       },
    { y:118, label:"ERP",        color:C.sky,    class:"SENSITIVE" },
    { y:168, label:"Telemetry",  color:C.cyan,   class:"PUBLIC"    },
    { y:218, label:"Payments",   color:C.purple, class:"PCI"       },
  ]
  const transforms = [
    { y:93,  label:"Cleanse",    color:C.indigo  },
    { y:143, label:"Classify",   color:C.teal    },
    { y:193, label:"Enrich",     color:C.green   },
  ]
  const consumers = [
    { y:80,  label:"Analytics",  color:C.green   },
    { y:140, label:"ML Platform",color:C.amber   },
    { y:200, label:"Reporting",  color:C.blue    },
  ]

  const SX = 50, TX = 178, CX = 300

  return (
    <V>
      <svg viewBox="0 0 380 268" width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <defs>
          <filter id="dg-glow">
            <feGaussianBlur stdDeviation="2" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Column headers */}
        {[{x:SX+30,l:"Sources"},{x:TX+22,l:"Transform"},{x:CX+30,l:"Consumers"}].map(h => (
          <text key={h.l} x={h.x} y="28" textAnchor="middle" fill={C.lo}
            fontSize="7.5" fontFamily={MONO} letterSpacing=".08em">{h.l.toUpperCase()}</text>
        ))}

        {/* Source nodes */}
        {sources.map((s) => (
          <g key={s.label}>
            <rect x={SX} y={s.y-13} width="64" height="26" rx="6"
              fill={`${s.color}0d`} stroke={`${s.color}25`} strokeWidth="1"/>
            <text x={SX+8} y={s.y+4} fill={s.color} fontSize="8.5" fontFamily={MONO}>{s.label}</text>
            <text x={SX+64} y={s.y+4} textAnchor="end" fill={s.color} fontSize="6" fontFamily={MONO} opacity=".7">
              {s.class}
            </text>
          </g>
        ))}

        {/* Transform nodes */}
        {transforms.map((t) => (
          <g key={t.label}>
            <rect x={TX} y={t.y-13} width="48" height="26" rx="6"
              fill={`${t.color}0d`} stroke={`${t.color}25`} strokeWidth="1"/>
            <text x={TX+24} y={t.y+4} textAnchor="middle" fill={t.color} fontSize="8" fontFamily={MONO}>
              {t.label}
            </text>
          </g>
        ))}

        {/* Consumer nodes */}
        {consumers.map((c) => (
          <g key={c.label}>
            <rect x={CX} y={c.y-13} width="68" height="26" rx="6"
              fill={`${c.color}0d`} stroke={`${c.color}25`} strokeWidth="1"/>
            <text x={CX+34} y={c.y+4} textAnchor="middle" fill={c.color} fontSize="8" fontFamily={MONO}>
              {c.label}
            </text>
          </g>
        ))}

        {/* Flow edges + animated packets */}
        {sources.map((s, si) => {
          const t = transforms[Math.min(si, transforms.length-1)]
          const pathD = `M${SX+64},${s.y} Q${TX-10},${s.y} ${TX},${t.y}`
          return (
            <g key={s.label+"edge"}>
              <path d={pathD} fill="none" stroke={`${s.color}15`} strokeWidth="1"/>
              <circle r="2.5" fill={s.color} filter="url(#dg-glow)">
                <animateMotion dur={`${2+si*.4}s`} begin={`${si*.25}s`} repeatCount="indefinite" path={pathD}/>
              </circle>
            </g>
          )
        })}
        {transforms.map((t, ti) => {
          const c = consumers[Math.min(ti, consumers.length-1)]
          const pathD = `M${TX+48},${t.y} Q${CX-10},${t.y} ${CX},${c.y}`
          return (
            <g key={t.label+"edge"}>
              <path d={pathD} fill="none" stroke={`${t.color}15`} strokeWidth="1"/>
              <circle r="2.5" fill={t.color} filter="url(#dg-glow)">
                <animateMotion dur={`${2.5+ti*.5}s`} begin={`${.5+ti*.3}s`} repeatCount="indefinite" path={pathD}/>
              </circle>
            </g>
          )
        })}
      </svg>
      <StatusBar label="4 DATA SOURCES · 3 TRANSFORMS · LINEAGE TRACKED END-TO-END" color={C.teal}/>
    </V>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/* 21. TRANSFORMATION — Before/after architecture morph                       */
/* ═══════════════════════════════════════════════════════════════════════════ */
export function TransformationHeroVisual() {
  const [phase, setPhase] = useState(0)  // 0=before, 1=transforming, 2=after
  useEffect(() => {
    const t = setInterval(() => setPhase(p => (p + 1) % 3), 2400)
    return () => clearInterval(t)
  }, [])

  const beforeComponents = [
    { x:30,  y:60,  w:80, h:28, label:"Monolith",    color:C.red    },
    { x:30,  y:110, w:80, h:28, label:"FTP Backup",  color:C.amber  },
    { x:30,  y:160, w:80, h:28, label:"Manual CI",   color:C.amber  },
    { x:30,  y:210, w:80, h:28, label:"On-prem DB",  color:C.red    },
  ]
  const afterComponents = [
    { x:270, y:60,  w:80, h:28, label:"Microservices", color:C.green  },
    { x:270, y:110, w:80, h:28, label:"Cloud Storage", color:C.green  },
    { x:270, y:160, w:80, h:28, label:"CI/CD Pipeline",color:C.cyan   },
    { x:270, y:210, w:80, h:28, label:"Managed DB",    color:C.blue   },
  ]

  const beforeOpacity = phase === 2 ? 0.3 : 1
  const afterOpacity  = phase === 0 ? 0.3 : 1

  return (
    <V>
      <svg viewBox="0 0 380 268" width="100%" height="100%" style={{ position:"absolute", inset:0 }}>
        <defs>
          <filter id="tf-glow">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Column headers */}
        <text x="70" y="38" textAnchor="middle" fill={C.red} fontSize="8" fontFamily={MONO} letterSpacing=".08em">
          BEFORE
        </text>
        <text x="310" y="38" textAnchor="middle" fill={C.green} fontSize="8" fontFamily={MONO} letterSpacing=".08em">
          AFTER
        </text>

        {/* Before components */}
        {beforeComponents.map((c) => (
          <g key={c.label} style={{ opacity:beforeOpacity, transition:"opacity .6s" }}>
            <rect x={c.x} y={c.y} width={c.w} height={c.h} rx="5"
              fill={`${c.color}0d`} stroke={`${c.color}28`} strokeWidth="1"/>
            <text x={c.x+c.w/2} y={c.y+c.h/2+4} textAnchor="middle"
              fill={c.color} fontSize="8" fontFamily={MONO}>{c.label}</text>
          </g>
        ))}

        {/* Transformation beam (center column) */}
        <g>
          {/* Vertical separator lines */}
          <line x1="145" y1="48" x2="145" y2="248" stroke="rgba(255,255,255,.06)" strokeWidth="1"/>
          <line x1="235" y1="48" x2="235" y2="248" stroke="rgba(255,255,255,.06)" strokeWidth="1"/>

          {/* Transformation arrows */}
          {[74,124,174,224].map((y, i) => (
            <g key={y}>
              <path d={`M145,${y} C175,${y} 205,${y} 235,${y}`}
                fill="none"
                stroke={phase === 1 ? C.blue : `${C.blue}30`}
                strokeWidth="1.5"
                style={{ transition:"stroke .4s" }}
                filter={phase===1 ? "url(#tf-glow)" : undefined}/>
              {phase === 1 && (
                <circle r="3" fill={C.blue} filter="url(#tf-glow)">
                  <animateMotion dur="1.2s" begin={`${i*.2}s`} repeatCount="indefinite"
                    path={`M145,${y} C175,${y} 205,${y} 235,${y}`}/>
                </circle>
              )}
            </g>
          ))}

          {/* Center badge */}
          <rect x="158" y="116" width="64" height="36" rx="8"
            fill={`${C.blue}14`} stroke={`${C.blue}28`} strokeWidth="1"/>
          <text x="190" y="131" textAnchor="middle" fill={C.blue} fontSize="7.5" fontFamily={MONO} fontWeight="700">
            TRANSFORM
          </text>
          <text x="190" y="143" textAnchor="middle" fill={C.lo} fontSize="6.5" fontFamily={MONO}>
            {phase===0?"ready":phase===1?"migrating":"complete"}
          </text>
        </g>

        {/* After components */}
        {afterComponents.map((c) => (
          <g key={c.label} style={{ opacity:afterOpacity, transition:"opacity .6s" }}>
            <rect x={c.x} y={c.y} width={c.w} height={c.h} rx="5"
              fill={`${c.color}0d`} stroke={`${c.color}28`} strokeWidth="1"/>
            <text x={c.x+c.w/2} y={c.y+c.h/2+4} textAnchor="middle"
              fill={c.color} fontSize="8" fontFamily={MONO}>{c.label}</text>
          </g>
        ))}
      </svg>
      <StatusBar label="4-COMPONENT MIGRATION · ZERO DOWNTIME · FULLY AUTOMATED" color={C.blue}/>
    </V>
  )
}
