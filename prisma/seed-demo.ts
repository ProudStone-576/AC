/**
 * prisma/seed-demo.ts — Sales demo data seeder
 *
 * Populates a demo client account with realistic infrastructure data
 * so you can show prospects a fully-loaded portal in real time.
 *
 * Usage:
 *   npx tsx prisma/seed-demo.ts
 *
 * Optional env vars:
 *   DEMO_EMAIL     (default: demo@acme-corp.com)
 *   DEMO_PASSWORD  (default: DemoClient2026!)
 *   DEMO_COMPANY   (default: Acme Corporation)
 *   DEMO_FIRST     (default: Sarah)
 *   DEMO_LAST      (default: Mitchell)
 *
 * Safe to re-run: clears previous demo data for the same email before seeding.
 */

import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const db = new PrismaClient()

const now = new Date()
const daysAgo  = (d: number) => new Date(now.getTime() - d * 86_400_000)
const hoursAgo = (h: number) => new Date(now.getTime() - h * 3_600_000)

function rnd(min: number, max: number, decimals = 1) {
  const v = Math.random() * (max - min) + min
  return Math.round(v * 10 ** decimals) / 10 ** decimals
}

async function main() {
  const email    = process.env.DEMO_EMAIL    ?? "demo@acme-corp.com"
  const password = process.env.DEMO_PASSWORD ?? "DemoClient2026!"
  const company  = process.env.DEMO_COMPANY  ?? "Acme Corporation"
  const firstName = process.env.DEMO_FIRST   ?? "Sarah"
  const lastName  = process.env.DEMO_LAST    ?? "Mitchell"

  console.log(`\n🌱  Seeding demo client: ${email}\n`)

  // ── Upsert user ──────────────────────────────────────────────────────────────
  const passwordHash = await bcrypt.hash(password, 12)
  const existing = await db.user.findUnique({ where: { email } })

  let userId: string

  if (existing) {
    console.log("  ↩  User exists — clearing old demo data…")
    // Clean up old data for this user
    await Promise.all([
      db.systemHealth.deleteMany({ where: { userId: existing.id } }),
      db.infrastructureAsset.deleteMany({ where: { userId: existing.id } }),
      db.incident.deleteMany({ where: { userId: existing.id } }),
      db.deployment.deleteMany({ where: { userId: existing.id } }),
      db.securityEvent.deleteMany({ where: { userId: existing.id } }),
      db.billingRecord.deleteMany({ where: { userId: existing.id } }),
      db.backup.deleteMany({ where: { userId: existing.id } }),
      db.performanceReport.deleteMany({ where: { userId: existing.id } }),
      db.clientEngagement.deleteMany({ where: { userId: existing.id } }),
      db.meetingRequest.deleteMany({ where: { userId: existing.id } }),
      db.serviceRequest.deleteMany({ where: { userId: existing.id } }),
      db.notification.deleteMany({ where: { userId: existing.id } }),
      db.clientTeamMember.deleteMany({ where: { userId: existing.id } }),
      db.environmentProfile.deleteMany({ where: { userId: existing.id } }),
    ])
    userId = existing.id
    await db.user.update({
      where: { id: userId },
      data: { firstName, lastName, company, emailVerified: true, jobTitle: "VP of Technology", timezone: "America/Toronto", industry: "Financial Services", companySize: "201-500", website: "https://acme-corp.com" },
    })
  } else {
    const user = await db.user.create({
      data: {
        email,
        passwordHash,
        firstName,
        lastName,
        company,
        jobTitle: "VP of Technology",
        timezone: "America/Toronto",
        industry: "Financial Services",
        companySize: "201-500",
        website: "https://acme-corp.com",
        phone: "+1 (416) 555-0190",
        role: "user",
        emailVerified: true,
      },
    })
    userId = user.id
    console.log(`  ✅  Created user: ${email} / ${password}`)
  }

  // ── Environment Profile ───────────────────────────────────────────────────────
  await db.environmentProfile.create({
    data: {
      userId,
      cloudProviders: JSON.stringify(["aws", "azure"]),
      complianceReqs: JSON.stringify(["SOC 2 Type II", "PCI DSS", "PIPEDA"]),
      currentChallenges: JSON.stringify(["Visibility across hybrid cloud", "Alert fatigue", "Compliance reporting"]),
      keyObjectives: JSON.stringify(["Reduce MTTR", "Automate compliance reports", "Unified monitoring"]),
      existingTools: "Datadog (partial), Jira, Confluence, Azure DevOps",
      teamSize: "12",
      timeline: "3-6 months",
      annualItBudget: "$2M–$5M",
      dataResidency: "Canada (all data must remain in Canada)",
    },
  })
  console.log("  ✅  Environment profile")

  // ── Team Members ─────────────────────────────────────────────────────────────
  const teamMembers = [
    { name: "James Okonkwo",    email: "j.okonkwo@acme-corp.com",    role: "Infrastructure Lead",   phone: "+1 (416) 555-0142" },
    { name: "Priya Sharma",     email: "p.sharma@acme-corp.com",     role: "Security Engineer",     phone: "+1 (416) 555-0178" },
    { name: "Derek Lauzon",     email: "d.lauzon@acme-corp.com",     role: "DevOps Engineer",       phone: "+1 (416) 555-0155" },
    { name: "Amanda Chen",      email: "a.chen@acme-corp.com",       role: "CTO",                   phone: "+1 (416) 555-0101" },
  ]
  await db.clientTeamMember.createMany({
    data: teamMembers.map((m) => ({ ...m, userId })),
  })
  console.log(`  ✅  ${teamMembers.length} team members`)

  // ── Infrastructure Assets ─────────────────────────────────────────────────────
  const assetDefs = [
    { name: "prod-web-01",    type: "server",        provider: "aws",    region: "ca-central-1", status: "healthy",  ipAddress: "10.0.1.10", hostname: "prod-web-01.internal", specs: { cpu: "8 vCPU", ram: "32 GB", storage: "500 GB SSD", os: "Ubuntu 22.04 LTS" } },
    { name: "prod-web-02",    type: "server",        provider: "aws",    region: "ca-central-1", status: "healthy",  ipAddress: "10.0.1.11", hostname: "prod-web-02.internal", specs: { cpu: "8 vCPU", ram: "32 GB", storage: "500 GB SSD", os: "Ubuntu 22.04 LTS" } },
    { name: "prod-db-primary",type: "database",      provider: "aws",    region: "ca-central-1", status: "healthy",  ipAddress: "10.0.2.10", hostname: "db-primary.internal",  specs: { cpu: "16 vCPU", ram: "128 GB", storage: "4 TB NVMe", os: "Amazon Linux 2" } },
    { name: "prod-db-replica",type: "database",      provider: "aws",    region: "us-east-1",    status: "healthy",  ipAddress: "10.0.2.11", hostname: "db-replica.internal",  specs: { cpu: "16 vCPU", ram: "128 GB", storage: "4 TB NVMe", os: "Amazon Linux 2" } },
    { name: "api-gateway",    type: "api",           provider: "aws",    region: "ca-central-1", status: "healthy",  ipAddress: "10.0.3.10", hostname: "api-gw.internal",      specs: { cpu: "4 vCPU", ram: "16 GB", storage: "100 GB SSD", os: "Amazon Linux 2" } },
    { name: "core-lb",        type: "load_balancer", provider: "aws",    region: "ca-central-1", status: "healthy",  ipAddress: "10.0.4.1",  hostname: "lb.internal",          specs: { cpu: "2 vCPU", ram: "8 GB",  storage: "50 GB SSD",  os: "AWS Managed" } },
    { name: "edge-firewall",  type: "firewall",      provider: "on_prem",region: "Toronto DC",   status: "healthy",  ipAddress: "172.16.0.1", hostname: "fw-edge.internal",    specs: { cpu: "8 vCPU", ram: "16 GB", storage: "200 GB SSD", os: "Fortinet FortiOS" } },
    { name: "backup-store",   type: "storage",       provider: "azure",  region: "canadaeast",   status: "healthy",  ipAddress: null,         hostname: null,                   specs: { cpu: "N/A", ram: "N/A", storage: "50 TB", os: "Azure Blob Storage" } },
    { name: "analytics-vm",   type: "server",        provider: "azure",  region: "canadaeast",   status: "warning",  ipAddress: "10.1.0.20",  hostname: "analytics.internal",   specs: { cpu: "16 vCPU", ram: "64 GB", storage: "1 TB SSD",   os: "Ubuntu 22.04 LTS" } },
    { name: "vpn-gateway",    type: "vpc",           provider: "aws",    region: "ca-central-1", status: "healthy",  ipAddress: "10.0.5.1",   hostname: "vpn-gw.internal",      specs: { cpu: "2 vCPU", ram: "4 GB",  storage: "50 GB SSD",  os: "AWS Managed" } },
  ]

  const assets = await Promise.all(
    assetDefs.map((a) =>
      db.infrastructureAsset.create({
        data: {
          userId,
          name: a.name,
          type: a.type,
          provider: a.provider,
          region: a.region,
          status: a.status,
          ipAddress: a.ipAddress ?? null,
          hostname: a.hostname ?? null,
          specs: JSON.stringify(a.specs),
          tags: JSON.stringify(["production", a.provider]),
        },
      })
    )
  )
  console.log(`  ✅  ${assets.length} infrastructure assets`)

  // ── Asset Metrics (24h history, every 30 min) ────────────────────────────────
  const metricProfiles: Record<string, { cpu: [number,number]; ram: [number,number]; disk: [number,number]; bw: [number,number]; uptime: number }> = {
    "prod-web-01":    { cpu: [28, 68], ram: [55, 75], disk: [42, 45], bw: [120, 380], uptime: 99.98 },
    "prod-web-02":    { cpu: [25, 65], ram: [52, 72], disk: [43, 46], bw: [110, 350], uptime: 99.98 },
    "prod-db-primary":{ cpu: [15, 45], ram: [72, 88], disk: [61, 63], bw: [200, 600], uptime: 99.99 },
    "prod-db-replica":{ cpu: [12, 35], ram: [68, 82], disk: [60, 62], bw: [150, 400], uptime: 99.97 },
    "api-gateway":    { cpu: [10, 55], ram: [35, 60], disk: [28, 30], bw: [80, 250],  uptime: 100 },
    "core-lb":        { cpu: [5,  20], ram: [25, 40], disk: [15, 18], bw: [300, 900], uptime: 100 },
    "edge-firewall":  { cpu: [8,  25], ram: [40, 55], disk: [20, 22], bw: [400, 1200],uptime: 100 },
    "backup-store":   { cpu: [2,  10], ram: [10, 20], disk: [55, 58], bw: [50, 200],  uptime: 100 },
    "analytics-vm":   { cpu: [55, 85], ram: [80, 92], disk: [70, 73], bw: [60, 180],  uptime: 99.5 },
    "vpn-gateway":    { cpu: [5,  18], ram: [20, 35], disk: [12, 14], bw: [100, 300], uptime: 100 },
  }

  const INTERVALS = 48 // 24h at 30-min resolution
  let metricCount = 0

  for (const asset of assets) {
    const profile = metricProfiles[asset.name] ?? { cpu: [20,60], ram: [40,70], disk: [30,50], bw: [50,200], uptime: 99.9 }
    const metricsData = Array.from({ length: INTERVALS }, (_, i) => ({
      assetId:       asset.id,
      userId,
      cpuPercent:    rnd(profile.cpu[0],  profile.cpu[1]),
      ramPercent:    rnd(profile.ram[0],  profile.ram[1]),
      diskPercent:   rnd(profile.disk[0], profile.disk[1]),
      bandwidthMbps: rnd(profile.bw[0],   profile.bw[1]),
      uptimePercent: profile.uptime,
      recordedAt:    new Date(now.getTime() - (INTERVALS - i) * 30 * 60_000),
    }))
    await db.assetMetric.createMany({ data: metricsData })
    metricCount += metricsData.length
  }
  console.log(`  ✅  ${metricCount} asset metric records`)

  // ── System Health ─────────────────────────────────────────────────────────────
  await db.systemHealth.create({
    data: {
      userId,
      status: "warning",
      uptimePercent: 99.97,
      slaPercent: 99.99,
      activeIncidents: 1,
      costThisCycle: 18_420,
      costLastCycle: 17_890,
      currency: "CAD",
      cpuPercent: 32.4,
      ramPercent: 64.1,
      diskPercent: 43.8,
      bandwidthMbps: 412,
    },
  })
  console.log("  ✅  System health")

  // ── Incidents ─────────────────────────────────────────────────────────────────
  const incidents = [
    {
      title: "Elevated CPU on analytics-vm causing slow dashboard queries",
      description: "The analytics VM is running sustained CPU above 80% for the past 2 hours. Dashboard query times have increased from 1.2s to 4.8s average. Root cause under investigation — likely related to end-of-month report batch job scheduled at 02:00.",
      severity: "medium",
      status: "monitoring",
      detectedAt: hoursAgo(2.5),
      resolvedAt: null,
      affectedAssets: JSON.stringify(["analytics-vm"]),
      updates: [
        { body: "Incident detected by automated CPU threshold alert (>80% for 15 min). Assigned to James Okonkwo.", status: "investigating", at: hoursAgo(2.5) },
        { body: "Identified large batch report job consuming all available CPU. Job is expected to run until ~06:00. Monitoring to ensure it completes normally.", status: "monitoring", at: hoursAgo(1.8) },
      ],
    },
    {
      title: "Intermittent connection timeouts to prod-db-replica in us-east-1",
      description: "Between 14:20 and 14:55 UTC, approximately 0.3% of read queries routed to the replica returned connection timeout errors. The primary database was unaffected. AWS reported a brief networking degradation in us-east-1 during this window.",
      severity: "low",
      status: "resolved",
      detectedAt: daysAgo(3),
      resolvedAt: new Date(daysAgo(3).getTime() + 55 * 60_000),
      rca: "AWS networking event in us-east-1 caused brief packet loss. No action required on our end. Monitoring will auto-alert if pattern recurs.",
      affectedAssets: JSON.stringify(["prod-db-replica"]),
      updates: [
        { body: "Automated alerts triggered for elevated timeout rates on the replica. Primary unaffected.", status: "investigating", at: daysAgo(3) },
        { body: "AWS status page confirmed networking degradation in us-east-1. All connections restored. Closing incident.", status: "resolved", at: new Date(daysAgo(3).getTime() + 55 * 60_000) },
      ],
    },
    {
      title: "Edge firewall firmware update caused 4-minute maintenance window",
      description: "Planned firmware update to edge-firewall from FortiOS 7.2.3 to 7.2.8 executed successfully during the approved maintenance window (Saturday 01:00–03:00). Traffic was routed through the secondary path. Total actual downtime: 4 minutes.",
      severity: "low",
      status: "resolved",
      detectedAt: daysAgo(9),
      resolvedAt: new Date(daysAgo(9).getTime() + 4 * 60_000),
      rca: "Planned maintenance. Firmware applied successfully. No further action required.",
      affectedAssets: JSON.stringify(["edge-firewall"]),
      updates: [
        { body: "Maintenance window opened. Traffic rerouted. Firmware update started.", status: "monitoring", at: daysAgo(9) },
        { body: "Firmware update complete. Firewall online. Traffic restored. All checks passing.", status: "resolved", at: new Date(daysAgo(9).getTime() + 4 * 60_000) },
      ],
    },
  ]

  for (const inc of incidents) {
    const { updates, ...incData } = inc
    const created = await db.incident.create({
      data: { userId, ...incData },
    })
    for (const u of updates) {
      const { at, ...rest } = u
      await db.incidentUpdate.create({
        data: { incidentId: created.id, ...rest, createdAt: at },
      })
    }
  }
  console.log(`  ✅  ${incidents.length} incidents`)

  // ── Deployments ───────────────────────────────────────────────────────────────
  const deployments = [
    { title: "API Gateway — auth service v2.4.1", service: "auth-service", version: "2.4.1", environment: "production", status: "success",     initiatedBy: "Derek Lauzon",   notes: "Security patch: updated JWT validation logic. Zero downtime rolling deploy.",      deployedAt: hoursAgo(6) },
    { title: "Web Frontend — dashboard v1.18.0",  service: "frontend",     version: "1.18.0", environment: "production", status: "success",     initiatedBy: "Derek Lauzon",   notes: "New reports page, performance improvements. CDN cache invalidated post-deploy.", deployedAt: daysAgo(2) },
    { title: "Analytics Worker — v3.1.2",         service: "analytics",    version: "3.1.2",  environment: "production", status: "success",     initiatedBy: "James Okonkwo",  notes: "Optimized query planner. Report generation 40% faster.",                         deployedAt: daysAgo(5) },
    { title: "DB Schema Migration 0041",          service: "prod-db",      version: "0041",   environment: "production", status: "success",     initiatedBy: "James Okonkwo",  notes: "Added composite indexes on audit_log (userId, createdAt). Zero-downtime.",      deployedAt: daysAgo(8) },
    { title: "API Gateway — rate limiter v2.3.9", service: "auth-service", version: "2.3.9",  environment: "staging",    status: "success",     initiatedBy: "Derek Lauzon",   notes: "Testing new per-client rate limit config before promoting to prod.",             deployedAt: daysAgo(1) },
    { title: "Analytics Worker — v3.2.0-beta",    service: "analytics",    version: "3.2.0-beta",environment: "staging", status: "failed",      initiatedBy: "James Okonkwo",  notes: "Deployment failed at health check stage. Memory leak in new aggregation fn. Rolled back automatically.", deployedAt: hoursAgo(18) },
  ]

  await db.deployment.createMany({
    data: deployments.map((d) => ({ userId, ...d })),
  })
  console.log(`  ✅  ${deployments.length} deployments`)

  // ── Security Events ───────────────────────────────────────────────────────────
  const securityEvents = [
    { type: "login",            severity: "info",    description: "Admin login from known IP: 142.250.80.14 (Toronto, CA). Device: Chrome/macOS.",                         ipAddress: "142.250.80.14",  actor: "sarah.mitchell@acme-corp.com", resolved: true,  createdAt: hoursAgo(1) },
    { type: "failed_login",     severity: "warning", description: "3 consecutive failed login attempts for j.okonkwo@acme-corp.com from IP 185.220.101.45 (TOR exit node).",ipAddress: "185.220.101.45", actor: "unknown",                     resolved: true,  createdAt: hoursAgo(4) },
    { type: "suspicious",       severity: "warning", description: "Unusual API access pattern: 847 requests in 60s from service account 'analytics-batch'. Exceeds baseline by 3x. Verified as legitimate batch job.", ipAddress: "10.1.0.20", actor: "analytics-batch", resolved: true, createdAt: daysAgo(1) },
    { type: "firewall_block",   severity: "info",    description: "Edge firewall blocked 1,247 port-scan packets from 192.168.100.0/24. Geo: RU. Blocked by default deny rule.",ipAddress: "192.168.100.12", actor: null, resolved: true, createdAt: daysAgo(1) },
    { type: "api_key",          severity: "info",    description: "New API key generated for service 'analytics-vm monitoring agent' by admin.",                            ipAddress: null,             actor: "admin@aethoncore.com",        resolved: true,  createdAt: daysAgo(3) },
    { type: "permission_change",severity: "info",    description: "Role updated for Derek Lauzon: DevOps Read → DevOps Read+Write. Approved by Amanda Chen.",              ipAddress: null,             actor: "amanda.chen@acme-corp.com",   resolved: true,  createdAt: daysAgo(4) },
    { type: "policy_violation", severity: "warning", description: "SSH access attempt to prod-db-primary from outside VPN subnet (IP: 203.0.113.42). Connection refused by firewall. No breach.", ipAddress: "203.0.113.42", actor: "unknown", resolved: true, createdAt: daysAgo(7) },
    { type: "login",            severity: "info",    description: "Successful MFA login from new device: Windows 11 / Firefox. Location: Toronto, ON.",                    ipAddress: "142.250.80.20",  actor: "j.okonkwo@acme-corp.com",     resolved: true,  createdAt: daysAgo(2) },
  ]

  await db.securityEvent.createMany({
    data: securityEvents.map((e) => ({ userId, ...e })),
  })
  console.log(`  ✅  ${securityEvents.length} security events`)

  // ── Backups ───────────────────────────────────────────────────────────────────
  const dbPrimary = assets.find((a) => a.name === "prod-db-primary")
  const dbReplica = assets.find((a) => a.name === "prod-db-replica")
  const backupStore = assets.find((a) => a.name === "backup-store")

  const backups = [
    { assetId: dbPrimary?.id, assetName: "prod-db-primary", status: "success", type: "automated", sizeGb: 84.2, retentionDays: 30, backedUpAt: hoursAgo(6),   nextBackupAt: hoursAgo(-18),  notes: "Daily full backup. Verified." },
    { assetId: dbPrimary?.id, assetName: "prod-db-primary", status: "success", type: "automated", sizeGb: 83.7, retentionDays: 30, backedUpAt: hoursAgo(30),  nextBackupAt: null,           notes: "Daily full backup. Verified." },
    { assetId: dbPrimary?.id, assetName: "prod-db-primary", status: "success", type: "automated", sizeGb: 82.9, retentionDays: 30, backedUpAt: daysAgo(2),    nextBackupAt: null,           notes: "Daily full backup. Verified." },
    { assetId: dbReplica?.id, assetName: "prod-db-replica", status: "success", type: "automated", sizeGb: 84.1, retentionDays: 14, backedUpAt: hoursAgo(6),   nextBackupAt: hoursAgo(-18),  notes: "Daily replica backup." },
    { assetId: backupStore?.id, assetName: "backup-store",  status: "success", type: "automated", sizeGb: 1240, retentionDays: 90, backedUpAt: daysAgo(1),    nextBackupAt: new Date(now.getTime() + 23*3600000), notes: "Weekly full archive." },
    { assetId: dbPrimary?.id, assetName: "prod-db-primary", status: "success", type: "manual",   sizeGb: 82.4, retentionDays: 90, backedUpAt: daysAgo(9),    nextBackupAt: null,           notes: "Pre-maintenance backup before firewall firmware update." },
    { assetId: null,          assetName: "analytics-vm",    status: "success", type: "automated", sizeGb: 48.6, retentionDays: 30, backedUpAt: daysAgo(1),    nextBackupAt: new Date(now.getTime() + 23*3600000), notes: "Daily VM snapshot." },
    { assetId: null,          assetName: "prod-web-01",     status: "success", type: "automated", sizeGb: 12.3, retentionDays: 14, backedUpAt: daysAgo(1),    nextBackupAt: new Date(now.getTime() + 23*3600000), notes: "Daily web server snapshot." },
    { assetId: null,          assetName: "prod-web-02",     status: "success", type: "automated", sizeGb: 12.1, retentionDays: 14, backedUpAt: daysAgo(1),    nextBackupAt: new Date(now.getTime() + 23*3600000), notes: "Daily web server snapshot." },
    { assetId: null,          assetName: "prod-db-primary", status: "failed",  type: "automated", sizeGb: null, retentionDays: 30, backedUpAt: daysAgo(12),   nextBackupAt: null,           notes: "Failed: storage quota exceeded. Resolved by adding 2 TB." },
  ]

  await db.backup.createMany({
    data: backups.map((b) => ({ userId, ...b })),
  })
  console.log(`  ✅  ${backups.length} backup records`)

  // ── Billing ───────────────────────────────────────────────────────────────────
  const billingPeriods = [
    { periodLabel: "March 2026",    periodStart: new Date("2026-03-01"), periodEnd: new Date("2026-03-31"), totalAmount: 18_420, status: "paid",    invoiceNumber: "INV-2026-0003" },
    { periodLabel: "February 2026", periodStart: new Date("2026-02-01"), periodEnd: new Date("2026-02-28"), totalAmount: 17_890, status: "paid",    invoiceNumber: "INV-2026-0002" },
    { periodLabel: "January 2026",  periodStart: new Date("2026-01-01"), periodEnd: new Date("2026-01-31"), totalAmount: 17_650, status: "paid",    invoiceNumber: "INV-2026-0001" },
    { periodLabel: "April 2026",    periodStart: new Date("2026-04-01"), periodEnd: new Date("2026-04-30"), totalAmount: 18_750, status: "pending", invoiceNumber: "INV-2026-0004" },
  ]

  const lineItemSets = [
    // March
    [
      { description: "Managed Infrastructure — 10 assets",    category: "compute",   quantity: 1, unitPrice: 9_200, totalPrice: 9_200 },
      { description: "Security Operations Centre (SOC)",       category: "support",   quantity: 1, unitPrice: 3_800, totalPrice: 3_800 },
      { description: "Backup & Disaster Recovery (10 TB)",     category: "storage",   quantity: 10, unitPrice: 120,  totalPrice: 1_200 },
      { description: "Managed Network Monitoring",             category: "network",   quantity: 1, unitPrice: 2_400, totalPrice: 2_400 },
      { description: "Performance & Reporting Suite",          category: "other",     quantity: 1, unitPrice: 1_200, totalPrice: 1_200 },
      { description: "HST (13%) on subtotal",                   category: "other",     quantity: 1, unitPrice: 2_392, totalPrice: 2_392 },
    ],
  ]

  for (let i = 0; i < billingPeriods.length; i++) {
    const period = billingPeriods[i]
    const record = await db.billingRecord.create({
      data: { userId, currency: "CAD", ...period },
    })
    const items = lineItemSets[0] // reuse same line items for all periods for brevity
    if (items) {
      await db.billingLineItem.createMany({
        data: items.map((item) => ({ billingRecordId: record.id, ...item })),
      })
    }
  }
  console.log(`  ✅  ${billingPeriods.length} billing records`)

  // ── Performance Reports ───────────────────────────────────────────────────────
  const reports = [
    {
      title: "Q1 2026 Infrastructure Performance Summary",
      period: "Q1 2026",
      periodStart: new Date("2026-01-01"),
      periodEnd: new Date("2026-03-31"),
      uptimePercent: 99.97,
      incidentCount: 4,
      deploymentsCount: 18,
      avgResponseMs: 142,
      summary: "Q1 2026 was a strong quarter for Acme Corporation's infrastructure. We achieved 99.97% uptime across all managed assets, exceeding the 99.9% SLA target. Four incidents were detected and resolved — three were low-severity maintenance events and one was a medium-severity performance issue on the analytics tier. All 18 planned deployments succeeded with zero customer-facing downtime.",
      highlights: JSON.stringify([
        "99.97% uptime — 0.03% above SLA commitment",
        "Zero high or critical incidents",
        "18 deployments with 0 customer-facing downtime",
        "Avg API response time improved from 165ms to 142ms after auth-service v2.4.0",
        "SOC detected and blocked 3 suspicious access attempts proactively",
      ]),
      publishedAt: daysAgo(15),
    },
    {
      title: "March 2026 Monthly Operations Report",
      period: "March 2026",
      periodStart: new Date("2026-03-01"),
      periodEnd: new Date("2026-03-31"),
      uptimePercent: 99.98,
      incidentCount: 1,
      deploymentsCount: 6,
      avgResponseMs: 139,
      summary: "March 2026 saw continued strong performance across all managed assets. One low-severity incident occurred related to a planned firewall maintenance window. All 6 deployments were completed successfully with zero rollbacks.",
      highlights: JSON.stringify([
        "99.98% uptime in March",
        "1 incident (planned maintenance, 4 min downtime)",
        "6 successful deployments",
        "Firewall firmware updated to 7.2.8 — closes 2 CVEs",
        "Database index optimization reduced avg query time by 22%",
      ]),
      publishedAt: daysAgo(3),
    },
  ]

  await db.performanceReport.createMany({
    data: reports.map((r) => ({ userId, ...r })),
  })
  console.log(`  ✅  ${reports.length} performance reports`)

  // ── Client Engagements ────────────────────────────────────────────────────────
  const engagements = [
    { title: "Zero Trust Network Redesign", description: "Full redesign of the internal network architecture to implement zero-trust principles. Includes micro-segmentation, identity-aware proxy, and device trust enforcement.", status: "active", phase: "Phase 2 of 3 — Implementation", startDate: daysAgo(45), targetDate: new Date("2026-06-30"), tags: JSON.stringify(["security", "network", "zero-trust"]) },
    { title: "Hybrid Cloud Observability Platform", description: "Deploy a unified observability stack across AWS, Azure, and on-premises environments. Real-time dashboards, unified alerting, and automated runbooks.", status: "active", phase: "Phase 1 of 2 — Planning & Tooling Selection", startDate: daysAgo(14), targetDate: new Date("2026-08-15"), tags: JSON.stringify(["monitoring", "cloud", "aws", "azure"]) },
    { title: "PIPEDA Compliance Audit & Remediation", description: "Full PIPEDA compliance review of data flows, consent mechanisms, and data residency controls. Deliverable: compliance report + remediation roadmap.", status: "planning", phase: "Kickoff — scheduled Apr 22", startDate: new Date("2026-04-22"), targetDate: new Date("2026-07-01"), tags: JSON.stringify(["compliance", "privacy", "pipeda"]) },
    { title: "Legacy Core Billing System Migration", description: "Phased migration of the 2009 billing system to a modern microservices architecture. Running parallel systems during transition to ensure zero data loss.", status: "completed", phase: "Completed", startDate: daysAgo(180), targetDate: daysAgo(30), tags: JSON.stringify(["migration", "database", "billing"]) },
  ]

  await db.clientEngagement.createMany({
    data: engagements.map((e) => ({ userId, ...e })),
  })
  console.log(`  ✅  ${engagements.length} engagements`)

  // ── Meeting Requests ──────────────────────────────────────────────────────────
  const meetings = [
    { subject: "Monthly Operations Review — April 2026", meetingType: "Monthly Review", preferredDate1: "2026-04-22T14:00", duration: "60", status: "confirmed", confirmedDate: "2026-04-22T14:00", meetingLink: "https://meet.google.com/abc-defg-hij", notes: "Agenda: Q1 report review, Zero Trust project update, upcoming PIPEDA engagement kickoff." },
    { subject: "Zero Trust Phase 2 Technical Deep-Dive",  meetingType: "Technical Review",  preferredDate1: "2026-04-25T10:00", preferredDate2: "2026-04-28T14:00", duration: "90", status: "requested", notes: "James Okonkwo + Derek Lauzon to attend. Review micro-segmentation implementation plan for prod network." },
  ]

  await db.meetingRequest.createMany({
    data: meetings.map((m) => ({ userId, ...m })),
  })
  console.log(`  ✅  ${meetings.length} meeting requests`)

  // ── Service Requests ──────────────────────────────────────────────────────────
  const requests = [
    { subject: "Increase prod-db-primary disk allocation from 4 TB to 6 TB", category: "infrastructure", priority: "normal", description: "Current disk utilization is at 61% and trending upward. With the analytics migration, we expect to hit 80% within 90 days. Please arrange expansion to 6 TB.", status: "in_progress" },
    { subject: "Set up monitoring alerts for analytics-vm CPU threshold", category: "monitoring", priority: "high",   description: "Following last night's CPU incident, please configure an alert at 75% CPU (warning) and 90% (critical) for analytics-vm. Alert should page the on-call channel.", status: "open" },
    { subject: "SSL certificate renewal for api.acme-corp.com",             category: "security",     priority: "normal", description: "Current cert expires May 15, 2026. Please arrange renewal.", status: "resolved", resolvedAt: daysAgo(5) },
  ]

  for (const req of requests) {
    await db.serviceRequest.create({
      data: { userId, ...req },
    })
  }
  console.log(`  ✅  ${requests.length} service requests`)

  // ── Notifications ─────────────────────────────────────────────────────────────
  const notifications = [
    { title: "Incident detected: analytics-vm CPU spike",          body: "CPU on analytics-vm has exceeded 80% for 15 minutes. Incident #INC-2026-003 opened. Our team is investigating.", type: "incident",    read: false, href: "/portal/incidents",  createdAt: hoursAgo(2.5) },
    { title: "Deployment complete: auth-service v2.4.1",           body: "Production deployment of auth-service v2.4.1 completed successfully. No downtime. Rollback window: 24h.",         type: "deployment",  read: false, href: "/portal/deployments", createdAt: hoursAgo(6) },
    { title: "March 2026 Operations Report published",             body: "Your March 2026 monthly performance report is ready. Uptime: 99.98%. Review the full report.",                    type: "report",      read: false, href: "/portal/reports",    createdAt: daysAgo(3) },
    { title: "Invoice ready: April 2026 — $18,750 CAD",            body: "Your April 2026 invoice has been generated. Amount: $18,750.00 CAD. Due: May 1, 2026.",                          type: "billing",     read: false, href: "/portal/billing",    createdAt: daysAgo(1) },
    { title: "Meeting confirmed: Monthly Ops Review Apr 22",       body: "Your Monthly Operations Review meeting on April 22 at 2:00 PM has been confirmed. Google Meet link included.",   type: "meeting",     read: true,  href: "/portal/meetings",   createdAt: daysAgo(2) },
    { title: "Security: suspicious login attempt blocked",         body: "3 failed login attempts from a TOR exit node were blocked. Account not compromised. No action required.",         type: "security",    read: true,  href: "/portal/security",   createdAt: hoursAgo(4) },
    { title: "Backup completed: prod-db-primary",                  body: "Daily backup of prod-db-primary completed successfully. Size: 84.2 GB. Retention: 30 days.",                     type: "backup",      read: true,  href: "/portal/backups",    createdAt: hoursAgo(6) },
    { title: "Zero Trust Phase 2 update",                          body: "Your Zero Trust engagement has entered Phase 2. The implementation plan document has been shared with your team.", type: "engagement",  read: true,  href: "/portal/engagements",createdAt: daysAgo(5) },
  ]

  await db.notification.createMany({
    data: notifications.map((n) => ({ userId, ...n })),
  })
  console.log(`  ✅  ${notifications.length} notifications (${notifications.filter((n) => !n.read).length} unread)`)

  // ── Summary ───────────────────────────────────────────────────────────────────
  console.log(`
✅  Demo client seeded successfully!

  Email:    ${email}
  Password: ${password}
  Company:  ${company}

  Portal:   http://localhost:3000/login
            (then navigate to /portal after logging in)

  What's populated:
    • ${assets.length} infrastructure assets with 48h metric history
    • ${incidents.length} incidents (1 active, 2 resolved)
    • ${deployments.length} deployments (5 success, 1 failed)
    • ${securityEvents.length} security events
    • ${backups.length} backup records
    • ${billingPeriods.length} billing periods
    • ${reports.length} performance reports
    • ${engagements.length} client engagements
    • ${meetings.length} meeting requests
    • ${requests.length} service requests
    • ${notifications.filter((n) => !n.read).length} unread notifications
`)
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => db.$disconnect())
