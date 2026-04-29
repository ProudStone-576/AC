import { db } from "@/lib/db"

// Lightweight health check for load balancers, uptime monitors, and k8s probes.
// Returns 200 when all services are reachable, 503 when degraded.
export async function GET() {
  const start = Date.now()

  let dbStatus: "ok" | "unavailable" = "ok"

  try {
    await db.$queryRaw`SELECT 1`
  } catch {
    dbStatus = "unavailable"
  }

  const healthy = dbStatus === "ok"

  return Response.json(
    {
      status: healthy ? "ok" : "degraded",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      responseMs: Date.now() - start,
      services: {
        database: dbStatus,
      },
    },
    { status: healthy ? 200 : 503 }
  )
}
