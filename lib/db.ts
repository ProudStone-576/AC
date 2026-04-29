import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Always cache on globalThis so the same client is reused across:
//   - Next.js hot-module reloads in development
//   - Warm invocations in serverless environments (Vercel, Lambda)
// A single PrismaClient manages its own connection pool internally.
// For high-traffic deployments behind PostgreSQL, set DATABASE_URL to a
// pgBouncer/Prisma Accelerate proxy URL and append ?connection_limit=N
// to control the pool size.
export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  })

globalForPrisma.prisma = db
