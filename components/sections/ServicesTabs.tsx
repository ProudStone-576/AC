"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Cpu, Database, Globe, Headphones, Network, Server, Shield } from "lucide-react"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { cn } from "@/lib/utils"

const tabs = [
  {
    id: "infrastructure",
    label: "Infrastructure",
    icon: Server,
    headline: "Infrastructure that keeps running when it matters most",
    description:
      "We build, deploy, and manage your servers, cloud environments, and data centers. If something fails, there is always a backup. Everything is monitored, documented, and covered by a guarantee written into your contract.",
    capabilities: [
      "Multi-cloud setup (AWS, Azure, GCP, private)",
      "Hybrid and on-premise integration",
      "Disaster recovery with tested recovery under 4 hours",
      "Cost planning and cloud spend optimization",
      "Infrastructure-as-Code with full change history",
    ],
    stat: { value: "99.99%", label: "Uptime guarantee across managed infrastructure" },
    href: "/services/cloud",
    visual: "infra",
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
    headline: "Security that actually protects you",
    description:
      "We protect organizations that are actively targeted — not just ones trying to pass an audit. Real engineers watch your systems 24/7 and respond to threats the moment they appear.",
    capabilities: [
      "Zero Trust security setup (nothing gets automatic access)",
      "24/7 Security Operations Center (SOC)",
      "Penetration testing and attack simulations",
      "Identity and access management",
      "Compliance support: SOC 2, PCI, HIPAA, FedRAMP",
    ],
    stat: { value: "< 4min", label: "Average time to detect a threat" },
    href: "/services/security",
    visual: "security",
  },
  {
    id: "data",
    label: "Data & AI",
    icon: Database,
    headline: "Your data, organized and ready to use",
    description:
      "We build the data systems your business needs to make good decisions — not messy data warehouses nobody uses. From moving your data in, to dashboards your team actually reads, we own the whole thing.",
    capabilities: [
      "Modern data stack setup (dbt, Snowflake, Databricks)",
      "Real-time data pipelines at any scale",
      "AI and machine learning platform setup",
      "Self-service dashboards with built-in controls",
      "Data quality monitoring and tracking",
    ],
    stat: { value: "40min", label: "Typical time from question to answer after setup" },
    href: "/services/analytics",
    visual: "data",
  },
  {
    id: "network",
    label: "Network",
    icon: Network,
    headline: "Fast, private connections between your offices and systems",
    description:
      "We design and run private networks that keep your locations and systems connected — without sending sensitive data over the public internet. Fast, reliable, and secure.",
    capabilities: [
      "Private wide-area network design and setup",
      "SD-WAN design and managed deployment",
      "Traffic routing and optimization",
      "DDoS protection at the network level",
      "Network monitoring and traffic analysis",
    ],
    stat: { value: "< 8ms", label: "Connection speed across our network" },
    href: "/services/network",
    visual: "network",
  },
  {
    id: "managed",
    label: "Managed Ops",
    icon: Headphones,
    headline: "Your IT, watched 24/7 by engineers who know your setup",
    description:
      "Every client gets a dedicated team — engineers who have read your docs, know your systems, and are ready when something goes wrong. No on-call strangers reading a manual at 3am.",
    capabilities: [
      "24/7 monitoring with alerts under 1 minute",
      "Dedicated service delivery manager",
      "Incident response with clear escalation steps",
      "Software patching and change management",
      "Monthly review meetings with clear metrics",
    ],
    stat: { value: "11 yrs", label: "Average time clients stay with us" },
    href: "/services/managed",
    visual: "managed",
  },
  {
    id: "ai",
    label: "Enterprise AI",
    icon: Cpu,
    headline: "AI that runs in your business, not just in demos",
    description:
      "We deploy AI that actually works in production — not proof-of-concept projects that never ship. We pick the right model, train it on your data, connect it to your systems, and keep it running.",
    capabilities: [
      "AI readiness check and data review",
      "AI model setup and fine-tuning for your use case",
      "AI pipeline design and management",
      "AI governance and risk frameworks",
      "Integration with your existing business systems",
    ],
    stat: { value: "84%", label: "Average reduction in false alerts after AI deployment" },
    href: "/services/ai",
    visual: "ai",
  },
  {
    id: "digital",
    label: "Digital & Web",
    icon: Globe,
    headline: "Websites, apps, and your online presence — built and managed for you",
    description:
      "We build what runs on top of the infrastructure we manage. Custom websites and apps built to your needs, optimized so people find you on Google, and review management to protect your reputation online.",
    capabilities: [
      "Custom website and app development",
      "Website design, build, and speed optimization",
      "SEO and Google ranking strategy",
      "Google Business and review platform management",
      "Flagging and removing policy-violating reviews",
    ],
    stat: { value: "3×", label: "Average organic traffic growth in 12 months" },
    href: "/contact",
    visual: "digital",
  },
]

const visualPanels: Record<string, React.ReactNode> = {
  infra: <InfraVisual />,
  security: <SecurityVisual />,
  data: <DataVisual />,
  network: <NetworkVisual />,
  managed: <ManagedVisual />,
  ai: <AiVisual />,
  digital: <DigitalVisual />,
}

export function ServicesTabs() {
  const [active, setActive] = React.useState(tabs[0].id)
  const activeTab = tabs.find((t) => t.id === active)!

  return (
    <section className="bg-surface py-20 dark:bg-card lg:py-24">
      <div className="container-enterprise">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Services"
            title="What we do — and how we do it"
            subtitle="Seven service areas — from infrastructure to apps. We build it, we run it, under one agreement."
          />
        </div>

        {/* Tab bar */}
        <div className="mb-10 flex overflow-x-auto border-b border-border" role="tablist" aria-label="Services">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={active === tab.id}
              aria-controls={`tabpanel-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={cn(
                "flex shrink-0 items-center gap-2 border-b-2 px-4 pb-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                active === tab.id
                  ? "border-blue text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border",
              )}
            >
              <tab.icon className="h-3.5 w-3.5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div
          key={active}
          id={`tabpanel-${active}`}
          role="tabpanel"
          className="grid grid-cols-1 gap-10 animate-tab-enter lg:grid-cols-2 lg:gap-16"
        >
          {/* Left: text content */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-2xl font-semibold leading-snug tracking-tight text-foreground lg:text-3xl">
              {activeTab.headline}
            </h3>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              {activeTab.description}
            </p>

            <ul className="mb-8 space-y-2.5">
              {activeTab.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                  {cap}
                </li>
              ))}
            </ul>

            {/* Stat callout */}
            <div className="mb-8 inline-flex items-center gap-4 rounded-lg border border-border bg-white p-4 dark:bg-background">
              <div>
                <p className="font-mono text-2xl font-semibold text-foreground tabular-num">
                  {activeTab.stat.value}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">{activeTab.stat.label}</p>
              </div>
            </div>

            <Link
              href={activeTab.href}
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-blue transition-colors hover:text-blue-hover"
            >
              Full {activeTab.label} service details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: visual panel */}
          <div className="overflow-hidden rounded-xl border border-border bg-brand">
            {visualPanels[activeTab.visual]}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Visual Panels ────────────────────────────────────────────────────────────

function InfraVisual() {
  const nodes = [
    { id: "AWS us-east-1", status: "healthy", cpu: 34, mem: 61 },
    { id: "Azure West EU", status: "healthy", cpu: 28, mem: 54 },
    { id: "GCP asia-east1", status: "healthy", cpu: 41, mem: 48 },
    { id: "Private DC — SEA", status: "healthy", cpu: 19, mem: 72 },
  ]
  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/40">Infrastructure Status</p>
        <span className="flex items-center gap-1.5 text-xs text-white/40">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live
        </span>
      </div>
      <div className="space-y-3">
        {nodes.map((n) => (
          <div key={n.id} className="rounded-lg bg-white/5 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-medium text-white/70">{n.id}</span>
              <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {n.status}
              </span>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="mb-1 text-[10px] text-white/30">CPU</p>
                <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-blue/60" style={{ width: `${n.cpu}%` }} />
                </div>
                <p className="mt-0.5 text-[10px] font-mono text-white/50">{n.cpu}%</p>
              </div>
              <div className="flex-1">
                <p className="mb-1 text-[10px] text-white/30">Memory</p>
                <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-blue/40" style={{ width: `${n.mem}%` }} />
                </div>
                <p className="mt-0.5 text-[10px] font-mono text-white/50">{n.mem}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SecurityVisual() {
  const events = [
    { time: "03:41:22", type: "BLOCKED", desc: "Brute force — 1,240 attempts/min", severity: "high" },
    { time: "03:40:58", type: "BLOCKED", desc: "SQL injection — /api/query endpoint", severity: "high" },
    { time: "03:39:14", type: "FLAGGED", desc: "Anomalous auth — Moscow, RU", severity: "medium" },
    { time: "03:37:02", type: "BLOCKED", desc: "DDoS — SYN flood 40Gbps", severity: "critical" },
    { time: "03:35:45", type: "INFO", desc: "Cert rotation complete — 14 domains", severity: "info" },
  ]
  const colors: Record<string, string> = {
    critical: "text-red-400 bg-red-400/10",
    high: "text-orange-400 bg-orange-400/10",
    medium: "text-yellow-400 bg-yellow-400/10",
    info: "text-blue/80 bg-blue/10",
  }
  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/40">Security Event Feed</p>
        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
          0 open P1s
        </span>
      </div>
      <div className="space-y-2">
        {events.map((e, i) => (
          <div key={i} className="flex items-start gap-3 rounded-lg bg-white/[0.04] p-2.5">
            <span className={cn("shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold", colors[e.severity])}>
              {e.type}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] text-white/70 truncate">{e.desc}</p>
              <p className="font-mono text-[10px] text-white/30">{e.time} UTC</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function DataVisual() {
  const bars = [22, 41, 58, 37, 73, 52, 88, 64, 76, 91, 68, 84]
  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/40">Data Pipeline Health</p>
        <span className="font-mono text-xs text-white/30">Real-time</span>
      </div>
      <div className="mb-6 grid grid-cols-2 gap-3">
        {[
          { label: "Ingest rate", value: "2.4M/s" },
          { label: "Query P50", value: "38ms" },
          { label: "Active pipelines", value: "847" },
          { label: "Data freshness", value: "< 30s" },
        ].map((k) => (
          <div key={k.label} className="rounded-lg bg-white/[0.05] p-3">
            <p className="text-[10px] text-white/30">{k.label}</p>
            <p className="font-mono text-sm font-semibold text-white">{k.value}</p>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1" style={{ height: "80px" }}>
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-sm bg-blue/30" style={{ height: `${h}%` }} />
        ))}
      </div>
      <p className="mt-2 text-[10px] font-mono text-white/20">Query volume — last 12 hours</p>
    </div>
  )
}

function NetworkVisual() {
  // Real-world coordinates converted to SVG space (viewBox 0 0 320 170)
  // x = (lng + 180) * (320 / 360)
  // y = (90 - lat) * (170 / 180)
  const nodes = [
    { id: "SEA", label: "Seattle",    x: 51,  y: 40  },
    { id: "NYC", label: "New York",   x: 94,  y: 47  },
    { id: "GRU", label: "São Paulo",  x: 118, y: 95  },
    { id: "LHR", label: "London",     x: 160, y: 36  },
    { id: "JNB", label: "Jo'burg",    x: 184, y: 99  },
    { id: "DXB", label: "Dubai",      x: 209, y: 58  },
    { id: "SIN", label: "Singapore",  x: 252, y: 80  },
    { id: "TYO", label: "Tokyo",      x: 284, y: 48  },
    { id: "SYD", label: "Sydney",     x: 294, y: 105 },
  ]

  // Hub-to-hub connections (the backbone)
  const edges = [
    [0, 1], [1, 3], [3, 4], [3, 5], [5, 6], [6, 7], [6, 8],
    [0, 3], [1, 2], [5, 4], [7, 8],
  ]

  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/40">Network Fabric — 47 Countries</p>
        <span className="flex items-center gap-1.5 text-[10px] text-white/30">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          All links nominal
        </span>
      </div>

      {/* Map */}
      <div className="relative mb-3 flex-1 overflow-hidden rounded-lg bg-white/[0.03]">
        <svg
          viewBox="0 0 320 130"
          className="h-full w-full"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Dot-grid background */}
          <defs>
            <pattern id="net-grid" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="0.5" cy="0.5" r="0.5" fill="rgba(255,255,255,0.06)" />
            </pattern>
          </defs>
          <rect width="320" height="130" fill="url(#net-grid)" />

          {/* Connection lines */}
          {edges.map(([a, b], i) => (
            <line
              key={i}
              x1={nodes[a].x} y1={nodes[a].y}
              x2={nodes[b].x} y2={nodes[b].y}
              stroke="rgba(59,130,246,0.22)"
              strokeWidth="0.75"
              strokeDasharray={i % 3 === 0 ? "4 3" : undefined}
            />
          ))}

          {/* Nodes */}
          {nodes.map((n) => (
            <g key={n.id}>
              {/* Outer ring */}
              <circle cx={n.x} cy={n.y} r="7" fill="none" stroke="rgba(59,130,246,0.25)" strokeWidth="0.75" />
              {/* Inner dot */}
              <circle cx={n.x} cy={n.y} r="3.5" fill="rgba(59,130,246,0.85)" />
              {/* IATA label */}
              <text
                x={n.x + 6}
                y={n.y - 5}
                fontSize="6"
                fill="rgba(255,255,255,0.45)"
                fontFamily="monospace"
              >
                {n.id}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 text-center">
        {[
          { label: "Connection speed", value: "< 8ms" },
          { label: "Packet loss", value: "0.001%" },
          { label: "Uptime",      value: "99.999%" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg bg-white/[0.05] p-2">
            <p className="font-mono text-sm font-semibold text-white">{s.value}</p>
            <p className="text-[10px] text-white/30">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ManagedVisual() {
  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/40">Incident Response — Live</p>
        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">All clear</span>
      </div>
      <div className="mb-4 rounded-lg bg-white/5 p-4">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30">Last 30 days</p>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {[
            { label: "P1 incidents", value: "0" },
            { label: "P2 incidents", value: "2" },
            { label: "MTTR (avg)", value: "14min" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-mono text-xl font-semibold text-white">{s.value}</p>
              <p className="text-[10px] text-white/30">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30">On-call engineers — now</p>
        {["Amara O. — Security", "James W. — Infrastructure", "Tanaka H. — Data"].map((name) => (
          <div key={name} className="flex items-center gap-2.5 rounded-lg bg-white/[0.04] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" style={{ animationDuration: "2.5s" }} />
            <span className="text-xs text-white/60">{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function DigitalVisual() {
  const traffic = [18, 24, 21, 29, 35, 31, 42, 48, 44, 58, 63, 71]
  const reviews = [
    { platform: "Google Business", rating: "4.9", count: "142 reviews", flagged: 3, status: "3 escalated for removal" },
    { platform: "Trustpilot",      rating: "4.8", count: "89 reviews",  flagged: 1, status: "1 under review" },
  ]
  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/40">Digital Presence — Overview</p>
        <span className="font-mono text-xs text-blue/70">Live</span>
      </div>

      {/* SEO / Lighthouse metrics */}
      <div className="mb-4 grid grid-cols-4 gap-2">
        {[
          { label: "Performance", value: "98" },
          { label: "SEO",         value: "100" },
          { label: "A11y",        value: "96" },
          { label: "Best Prac.",  value: "100" },
        ].map((k) => (
          <div key={k.label} className="flex flex-col items-center rounded-lg bg-white/[0.05] p-2">
            <p className="font-mono text-sm font-semibold text-emerald-400">{k.value}</p>
            <p className="text-[9px] text-white/30">{k.label}</p>
          </div>
        ))}
      </div>

      {/* Organic traffic sparkline */}
      <p className="mb-1.5 text-[10px] text-white/30">Organic traffic — 12 months</p>
      <div className="mb-4 flex items-end gap-1" style={{ height: "56px" }}>
        {traffic.map((h, i) => (
          <div key={i} className="flex-1 rounded-sm bg-blue/30" style={{ height: `${h / 71 * 100}%` }} />
        ))}
      </div>

      {/* Reputation management */}
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/30">Review management</p>
      <div className="space-y-2">
        {reviews.map((r) => (
          <div key={r.platform} className="rounded-lg bg-white/[0.04] px-3 py-2.5">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-[11px] font-medium text-white/70">{r.platform}</span>
              <span className="font-mono text-[11px] text-white/50">★ {r.rating}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/30">{r.count}</span>
              <span className="rounded bg-orange-500/15 px-1.5 py-0.5 text-[9px] font-semibold text-orange-400">
                {r.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AiVisual() {
  const accuracy = [62, 71, 78, 74, 83, 80, 87, 84, 91, 88, 93, 95]
  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/40">AI Model Performance</p>
        <span className="font-mono text-xs text-blue/70">Production</span>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-3">
        {[
          { label: "Model accuracy", value: "95.4%" },
          { label: "Inference P50", value: "12ms" },
          { label: "Daily predictions", value: "142M" },
          { label: "False positive rate", value: "3.1%" },
        ].map((k) => (
          <div key={k.label} className="rounded-lg bg-white/[0.05] p-3">
            <p className="text-[10px] text-white/30">{k.label}</p>
            <p className="font-mono text-sm font-semibold text-white">{k.value}</p>
          </div>
        ))}
      </div>
      <p className="mb-2 text-[10px] text-white/30">Accuracy trend — 12 months post-deployment</p>
      <div className="flex items-end gap-1 flex-1">
        {accuracy.map((v, i) => (
          <div key={i} className="flex-1 rounded-sm bg-blue/30" style={{ height: `${v}%` }} />
        ))}
      </div>
    </div>
  )
}
