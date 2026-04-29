import { NextRequest, NextResponse } from "next/server"
import { createHash } from "crypto"
import { db } from "@/lib/db"
import { rateLimit, rateLimitHeaders } from "@/lib/rate-limit"

/**
 * POST /api/metrics
 *
 * Lightweight ingestion endpoint for server-side monitoring agents.
 * Authenticate with an API key in the Authorization header:
 *   Authorization: Bearer <api-key>
 *
 * Body:
 * {
 *   assetId?:       string   // Prisma InfrastructureAsset id (preferred)
 *   assetName?:     string   // fallback if assetId not provided — upserts by name
 *   cpuPercent?:    number
 *   ramPercent?:    number
 *   diskPercent?:   number
 *   bandwidthMbps?: number
 *   uptimePercent?: number
 *   status?:        "healthy" | "warning" | "critical" | "offline" | "maintenance"
 * }
 *
 * Returns: { ok: true, metricId: string }
 */
export async function POST(request: NextRequest) {
  // ── Auth ────────────────────────────────────────────────────────────────────
  const authHeader = request.headers.get("authorization")
  if (!authHeader?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Missing API key" }, { status: 401 })
  }
  const rawKey = authHeader.slice(7).trim()
  if (!rawKey) {
    return NextResponse.json({ error: "Missing API key" }, { status: 401 })
  }

  const keyHash = createHash("sha256").update(rawKey).digest("hex")
  const apiKey = await db.apiKey.findUnique({
    where: { keyHash },
    include: { user: { select: { id: true } } },
  })

  if (!apiKey) {
    return NextResponse.json({ error: "Invalid API key" }, { status: 401 })
  }

  // Touch lastUsedAt (fire-and-forget; don't await)
  db.apiKey.update({ where: { id: apiKey.id }, data: { lastUsedAt: new Date() } }).catch(() => {})

  // Rate limit per API key: 120 pushes per minute (well above normal cron cadence)
  const rl = rateLimit(`metrics:${apiKey.id}`, 120, 60 * 1000)
  if (!rl.success) {
    return NextResponse.json(
      { error: "Rate limit exceeded for this API key" },
      { status: 429, headers: rateLimitHeaders(rl, 120) },
    )
  }

  const userId = apiKey.user.id

  // ── Body ────────────────────────────────────────────────────────────────────
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const {
    assetId,
    assetName,
    cpuPercent,
    ramPercent,
    diskPercent,
    bandwidthMbps,
    uptimePercent,
    status,
  } = body as {
    assetId?: string
    assetName?: string
    cpuPercent?: number
    ramPercent?: number
    diskPercent?: number
    bandwidthMbps?: number
    uptimePercent?: number
    status?: string
  }

  if (!assetId && !assetName) {
    return NextResponse.json({ error: "assetId or assetName is required" }, { status: 400 })
  }

  // ── Resolve / upsert asset ───────────────────────────────────────────────────
  let asset: { id: string } | null = null

  if (assetId) {
    asset = await db.infrastructureAsset.findFirst({
      where: { id: assetId, userId },
      select: { id: true },
    })
    if (!asset) {
      return NextResponse.json({ error: "Asset not found or does not belong to this key's user" }, { status: 404 })
    }
  } else {
    // Find or create by name — scripts don't need to hard-code IDs
    const existing = await db.infrastructureAsset.findFirst({
      where: { userId, name: assetName! },
      select: { id: true },
    })
    if (existing) {
      asset = existing
    } else {
      asset = await db.infrastructureAsset.create({
        data: {
          userId,
          name: assetName!,
          type: "server",
          status: (status as string) ?? "healthy",
        },
        select: { id: true },
      })
    }
  }

  // Update asset status if supplied
  if (status && asset) {
    await db.infrastructureAsset.update({
      where: { id: asset.id },
      data: { status: status as string },
    })
  }

  // ── Record metric ────────────────────────────────────────────────────────────
  const metric = await db.assetMetric.create({
    data: {
      assetId: asset!.id,
      userId,
      cpuPercent:    typeof cpuPercent    === "number" ? cpuPercent    : null,
      ramPercent:    typeof ramPercent    === "number" ? ramPercent    : null,
      diskPercent:   typeof diskPercent   === "number" ? diskPercent   : null,
      bandwidthMbps: typeof bandwidthMbps === "number" ? bandwidthMbps : null,
      uptimePercent: typeof uptimePercent === "number" ? uptimePercent : null,
    },
  })

  // ── Refresh SystemHealth aggregate ───────────────────────────────────────────
  // Pull the latest metric across all assets for this user to compute averages
  const recentMetrics = await db.assetMetric.findMany({
    where: { userId },
    orderBy: { recordedAt: "desc" },
    take: 100,
    select: { cpuPercent: true, ramPercent: true, diskPercent: true, bandwidthMbps: true },
  })

  const avg = (vals: (number | null)[]) => {
    const nums = vals.filter((v): v is number => v != null)
    return nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : null
  }

  const avgCpu  = avg(recentMetrics.map((m) => m.cpuPercent))
  const avgRam  = avg(recentMetrics.map((m) => m.ramPercent))
  const avgDisk = avg(recentMetrics.map((m) => m.diskPercent))
  const avgBw   = avg(recentMetrics.map((m) => m.bandwidthMbps))

  // Determine overall health from asset statuses
  const allAssets = await db.infrastructureAsset.findMany({
    where: { userId },
    select: { status: true },
  })
  const hasCritical = allAssets.some((a) => a.status === "critical")
  const hasWarning  = allAssets.some((a) => a.status === "warning")
  const healthStatus = hasCritical ? "critical" : hasWarning ? "warning" : "healthy"

  await db.systemHealth.upsert({
    where: { userId },
    create: {
      userId,
      status: healthStatus,
      cpuPercent:    avgCpu,
      ramPercent:    avgRam,
      diskPercent:   avgDisk,
      bandwidthMbps: avgBw,
    },
    update: {
      status: healthStatus,
      ...(avgCpu  != null && { cpuPercent:    avgCpu  }),
      ...(avgRam  != null && { ramPercent:    avgRam  }),
      ...(avgDisk != null && { diskPercent:   avgDisk }),
      ...(avgBw   != null && { bandwidthMbps: avgBw   }),
    },
  })

  return NextResponse.json({ ok: true, metricId: metric.id })
}
