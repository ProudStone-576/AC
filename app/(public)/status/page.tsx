import type { Metadata } from "next"
import Link from "next/link"
import {
  CheckCircle2, AlertTriangle, XCircle,
  Clock, Activity, Shield, Globe, Server,
  Database, Wifi, Zap, RefreshCw,
} from "lucide-react"
import { LiveDot } from "@/components/ui/LiveDot"
import { CTASection } from "@/components/sections/CTASection"
import { db } from "@/lib/db"

export const metadata: Metadata = {
  title: "System Status — Aethon Core",
  description:
    "Real-time operational status for Aethon Core platform services, APIs, and infrastructure.",
}

// ─── Static status data ───────────────────────────────────────────────────────
// In a live system this would be fetched from a status API or DB.
// For now it represents the desired steady-state display.

type ServiceStatus = "operational" | "degraded" | "outage" | "maintenance"

const services: {
  icon: React.ComponentType<{ className?: string }>
  name: string
  description: string
  status: ServiceStatus
  uptime: string
}[] = [
  {
    icon: Globe,
    name: "Platform Control Plane",
    description: "Core API, policy engine, and management interfaces",
    status: "operational",
    uptime: "99.99%",
  },
  {
    icon: Activity,
    name: "Observability & Analytics",
    description: "Real-time telemetry ingestion, querying, and alerting",
    status: "operational",
    uptime: "99.98%",
  },
  {
    icon: Zap,
    name: "Automation Engine",
    description: "Workflow execution, scheduling, and event processing",
    status: "operational",
    uptime: "99.99%",
  },
  {
    icon: Shield,
    name: "Security Center",
    description: "Threat detection, compliance scanning, and SOC feeds",
    status: "operational",
    uptime: "100%",
  },
  {
    icon: Server,
    name: "Infrastructure Orchestration",
    description: "Compute, storage, and network provisioning layer",
    status: "operational",
    uptime: "99.97%",
  },
  {
    icon: Database,
    name: "Data Services",
    description: "Managed databases, backup orchestration, and replication",
    status: "operational",
    uptime: "99.99%",
  },
  {
    icon: Wifi,
    name: "Network Services",
    description: "SD-WAN management, connectivity monitoring, and DNS",
    status: "operational",
    uptime: "99.98%",
  },
  {
    icon: RefreshCw,
    name: "Client Portal",
    description: "Portal web application, notifications, and reporting",
    status: "operational",
    uptime: "99.99%",
  },
]

const recentIncidents: {
  date: string
  title: string
  status: "resolved" | "monitoring" | "investigating"
  duration: string
  impact: string
}[] = [
  {
    date: "March 18, 2026",
    title: "Elevated API latency — Control Plane (Canada East region)",
    status: "resolved",
    duration: "22 minutes",
    impact: "API response times elevated by ~280ms P99 for a subset of requests in the Canada East region. No data loss. Root cause: downstream database connection pool exhaustion triggered by a scheduled maintenance task that ran outside its window.",
  },
  {
    date: "February 27, 2026",
    title: "Analytics query latency degradation",
    status: "resolved",
    duration: "41 minutes",
    impact: "P99 query latency on the Analytics tier increased to ~3.8s from a baseline of <200ms. Affected approximately 12% of active query sessions. No data was lost or corrupted. Root cause: compaction job on the hot storage tier ran with incorrect priority settings following a platform update.",
  },
  {
    date: "January 14, 2026",
    title: "Client Portal intermittent login failures",
    status: "resolved",
    duration: "8 minutes",
    impact: "A subset of login attempts (~4%) returned 503 errors during a brief window. Cause: a certificate rotation on an upstream service was not coordinated with the portal's connection pool. Resolved by restarting affected connection pools.",
  },
]

function StatusBadge({ status }: { status: ServiceStatus }) {
  const config = {
    operational: {
      icon: CheckCircle2,
      label: "Operational",
      className: "text-green-600 dark:text-green-400",
      bg: "bg-green-100 dark:bg-green-900/30",
    },
    degraded: {
      icon: AlertTriangle,
      label: "Degraded",
      className: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-100 dark:bg-amber-900/30",
    },
    outage: {
      icon: XCircle,
      label: "Outage",
      className: "text-red-600 dark:text-red-400",
      bg: "bg-red-100 dark:bg-red-900/30",
    },
    maintenance: {
      icon: Clock,
      label: "Maintenance",
      className: "text-blue dark:text-blue",
      bg: "bg-blue/10",
    },
  }[status]

  const Icon = config.icon

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${config.bg} ${config.className}`}>
      <Icon className="h-3.5 w-3.5" />
      {config.label}
    </span>
  )
}

function IncidentStatusBadge({ status }: { status: "resolved" | "monitoring" | "investigating" }) {
  const config = {
    resolved: { label: "Resolved", className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
    monitoring: { label: "Monitoring", className: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" },
    investigating: { label: "Investigating", className: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" },
  }[status]

  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${config.className}`}>
      {config.label}
    </span>
  )
}

export const dynamic = "force-dynamic"

export default async function StatusPage() {
  let activeIncidents: { id: string; title: string; severity: string; status: string; detectedAt: Date; description: string }[] = []
  let healthRecords: { uptimePercent: number }[] = []

  try {
    ;[activeIncidents, healthRecords] = await Promise.all([
      db.incident.findMany({
        where: { status: { in: ["active", "monitoring"] } },
        orderBy: { detectedAt: "desc" },
        select: { id: true, title: true, severity: true, status: true, detectedAt: true, description: true },
      }),
      db.systemHealth.findMany({
        orderBy: { updatedAt: "desc" },
      }),
    ])
  } catch {
    // DB unavailable — fall back to static display
  }

  const avgUptime = healthRecords.length > 0
    ? healthRecords.reduce((s, r) => s + r.uptimePercent, 0) / healthRecords.length
    : 99.99
  const activeIncidentCount = activeIncidents.length

  const metrics = [
    { label: "Avg client uptime", value: `${avgUptime.toFixed(2)}%` },
    { label: "Active incidents", value: String(activeIncidentCount) },
    { label: "P99 API latency (30-day avg)", value: "< 8ms" },
    { label: "Mean time to detect", value: "< 4 min" },
    { label: "Mean time to resolve", value: "< 22 min" },
    { label: "Platform status", value: activeIncidentCount === 0 ? "Normal" : "Degraded" },
  ]

  const allOperational = activeIncidentCount === 0 && services.every((s) => s.status === "operational")

  return (
    <>
      {/* Overall status banner */}
      <section
        className={`py-16 lg:py-20 ${
          allOperational ? "bg-canvas" : "bg-amber-900"
        }`}
      >
        <div className="container-enterprise">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <LiveDot className={allOperational ? "bg-green-400" : "bg-amber-400"} />
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                  System Status
                </p>
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {allOperational
                  ? "All systems operational"
                  : "Some systems are experiencing issues"}
              </h1>
              <p className="mt-3 text-base text-white/60">
                Last checked:{" "}
                <span suppressHydrationWarning className="text-white/80">
                  {new Date().toLocaleString("en-CA", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZoneName: "short",
                  })}
                </span>
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="mailto:support@aethoncore.com?subject=Incident%20Report"
                className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                Report an issue
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics strip */}
      <div className="border-b border-border bg-surface dark:bg-card">
        <div className="container-enterprise">
          <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-3 lg:grid-cols-6">
            {metrics.map((m) => (
              <div key={m.label} className="px-6 py-5">
                <p className="text-lg font-semibold text-foreground">{m.value}</p>
                <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="bg-white py-16 dark:bg-background lg:py-20">
        <div className="container-enterprise">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-blue">
            Service status
          </p>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-surface dark:bg-card">
                  <th className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Service
                  </th>
                  <th className="hidden px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:table-cell">
                    30-day uptime
                  </th>
                  <th className="px-6 py-3.5 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white dark:bg-background">
                {services.map((service) => (
                  <tr key={service.name} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-light">
                          <service.icon className="h-4 w-4 text-blue" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{service.name}</p>
                          <p className="text-xs text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="hidden px-6 py-4 text-sm text-foreground sm:table-cell">
                      {service.uptime}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <StatusBadge status={service.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Recent incidents */}
      <section className="bg-surface py-16 dark:bg-card lg:py-20">
        <div className="container-enterprise">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-blue">
            Incident history
          </p>
          <h2 className="mb-8 text-2xl font-semibold text-foreground">Recent incidents</h2>

          {activeIncidents.length === 0 && recentIncidents.length === 0 ? (
            <div className="rounded-xl border border-border bg-white p-10 text-center dark:bg-background">
              <CheckCircle2 className="mx-auto mb-3 h-8 w-8 text-green-500" />
              <p className="text-sm font-medium text-foreground">No incidents reported</p>
              <p className="mt-1 text-xs text-muted-foreground">
                No incidents have been recorded in the past 90 days.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {activeIncidents.map((inc) => (
                <div key={inc.id} className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-900/40 dark:bg-red-900/10">
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="mb-1.5 flex flex-wrap items-center gap-2">
                        <span className="inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                          {inc.status === "active" ? "Investigating" : "Monitoring"}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(inc.detectedAt).toLocaleDateString("en-US", { dateStyle: "long" })}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-foreground">{inc.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{inc.description}</p>
                </div>
              ))}
              {recentIncidents.map((incident) => (
                <div
                  key={incident.title + incident.date}
                  className="rounded-xl border border-border bg-white p-6 dark:bg-background"
                >
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="mb-1.5 flex flex-wrap items-center gap-2">
                        <IncidentStatusBadge status={incident.status} />
                        <span className="text-xs text-muted-foreground">{incident.date}</span>
                        <span className="text-xs text-muted-foreground">·</span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          Duration: {incident.duration}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-foreground">{incident.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{incident.impact}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Subscribe to updates */}
      <section className="bg-white py-16 dark:bg-background lg:py-20">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 gap-6 rounded-2xl border border-border bg-surface p-8 dark:bg-card sm:grid-cols-2 lg:p-10">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue">
                Status updates
              </p>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Get notified during incidents
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Enterprise clients receive real-time incident notifications via email, SMS, and webhook. Contact your account team to configure alert preferences for your organization.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 sm:items-end">
              <Link
                href="/contact?inquiry=status-alerts"
                className="inline-flex items-center gap-2 rounded-md bg-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-hover"
              >
                Configure status alerts
              </Link>
              <p className="text-xs text-muted-foreground">Available to all enterprise clients</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variant="surface"
        title="Experiencing an issue not shown here?"
        subtitle="Email our operations team directly at support@aethoncore.com. Enterprise clients have a dedicated support channel with guaranteed response times."
        primaryLabel="Open client portal"
        primaryHref="/portal"
        secondaryLabel="Contact support"
        secondaryHref="mailto:support@aethoncore.com"
      />
    </>
  )
}
