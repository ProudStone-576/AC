/**
 * Simple in-memory sliding-window rate limiter.
 * Uses a global Map so state persists across requests in the same process.
 * For multi-instance deployments, swap this out for a Redis-backed solution.
 */

type Entry = { count: number; resetAt: number }

const store = new Map<string, Entry>()

// Prune expired entries every 5 minutes to prevent memory leaks
const cleanupInterval = setInterval(
  () => {
    const now = Date.now()
    for (const [key, entry] of store) {
      if (now > entry.resetAt) store.delete(key)
    }
  },
  5 * 60 * 1000,
)
cleanupInterval.unref?.()

export interface RateLimitResult {
  success: boolean
  remaining: number
  resetIn: number // ms until window resets
}

/**
 * @param key       Unique identifier (e.g. "login:192.168.1.1")
 * @param max       Maximum requests allowed per window
 * @param windowMs  Window duration in milliseconds
 */
export function rateLimit(key: string, max: number, windowMs: number): RateLimitResult {
  const now = Date.now()
  const entry = store.get(key)

  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs })
    return { success: true, remaining: max - 1, resetIn: windowMs }
  }

  if (entry.count >= max) {
    return { success: false, remaining: 0, resetIn: entry.resetAt - now }
  }

  entry.count++
  return { success: true, remaining: max - entry.count, resetIn: entry.resetAt - now }
}

/**
 * Returns standard rate-limit response headers.
 * Always attach these on 429 responses so clients can back off correctly.
 */
export function rateLimitHeaders(result: RateLimitResult, max: number): Record<string, string> {
  const resetAtSec = Math.ceil((Date.now() + result.resetIn) / 1000)
  const headers: Record<string, string> = {
    "X-RateLimit-Limit": String(max),
    "X-RateLimit-Remaining": String(result.remaining),
    "X-RateLimit-Reset": String(resetAtSec),
  }
  if (!result.success) {
    headers["Retry-After"] = String(Math.ceil(result.resetIn / 1000))
  }
  return headers
}

/**
 * Returns the client IP from a Next.js request.
 *
 * Priority:
 *   1. CF-Connecting-IP  — set by Cloudflare; cannot be spoofed by clients
 *   2. x-vercel-forwarded-for — set by Vercel's edge infrastructure
 *   3. Leftmost x-forwarded-for — the original client IP as seen by the first
 *      trusted proxy. Works correctly when behind exactly one proxy layer.
 *   4. x-real-ip — often set by nginx
 *   5. "unknown" fallback
 *
 * NOTE: x-forwarded-for can be spoofed if the app is exposed directly to the
 * internet without a reverse proxy. Deploy behind Cloudflare or Vercel to get
 * a reliable IP from headers 1 or 2 above.
 */
export function getIP(request: Request): string {
  const h = request.headers

  const cf = h.get("cf-connecting-ip")
  if (cf) return cf.trim()

  const vercel = h.get("x-vercel-forwarded-for")
  if (vercel) return vercel.split(",")[0].trim()

  const xff = h.get("x-forwarded-for")
  if (xff) {
    const first = xff.split(",")[0].trim()
    if (first) return first
  }

  return h.get("x-real-ip")?.trim() ?? "unknown"
}
