import { fileURLToPath } from "url"
import path from "path"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isDev = process.env.NODE_ENV !== "production"

// ─── Content Security Policy ──────────────────────────────────────────────────
// 'unsafe-inline' in script-src is required because Next.js injects inline
// hydration scripts (__NEXT_DATA__, etc.). Replace with a nonce-based CSP
// via middleware when stricter security is required.
const ContentSecurityPolicy = [
  "default-src 'self'",

  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://plausible.io`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob: https:",
  `connect-src 'self'${isDev ? " ws: wss:" : ""} https://plausible.io`,
  "media-src 'self' blob:",
  "object-src 'none'",
  "frame-src https://www.youtube-nocookie.com https://www.youtube.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ")

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control",          value: "on" },
  { key: "X-Content-Type-Options",          value: "nosniff" },
  // DENY aligns with frame-ancestors 'none' in the CSP above
  { key: "X-Frame-Options",                 value: "DENY" },
  { key: "Referrer-Policy",                 value: "strict-origin-when-cross-origin" },
  // Prevent cross-origin window attacks (e.g. reverse tabnapping)
  { key: "Cross-Origin-Opener-Policy",      value: "same-origin" },
  // Prevent other origins from loading this site's resources
  { key: "Cross-Origin-Resource-Policy",    value: "same-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy,
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  async headers() {
    return [
      {
        // Apply security headers to all routes except Next.js internals
        source: "/((?!_next/static|_next/image|favicon.ico).*)",
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
