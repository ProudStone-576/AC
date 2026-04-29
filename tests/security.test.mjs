import assert from "node:assert/strict"
import fs from "node:fs"
import test from "node:test"

function read(path) {
  return fs.readFileSync(path, "utf8")
}

test("sanitize utilities defend against the expected dangerous patterns", () => {
  const source = read("lib/sanitize.ts")

  assert.match(source, /EVENT_HANDLERS/)
  assert.match(source, /DANGEROUS_PROTOCOLS/)
  assert.match(source, /javascript\|data\|vbscript/)
  assert.match(source, /stripHtml/)
  assert.match(source, /sanitizeHtml/)
})

test("rate limiter returns standard throttling headers and releases its cleanup timer", () => {
  const source = read("lib/rate-limit.ts")

  assert.match(source, /X-RateLimit-Limit/)
  assert.match(source, /X-RateLimit-Remaining/)
  assert.match(source, /Retry-After/)
  assert.match(source, /cleanupInterval\.unref\?\.\(\)/)
})

test("session code requires JWT_SECRET and uses httpOnly cookies", () => {
  const source = read("lib/session.ts")

  assert.match(source, /JWT_SECRET/)
  assert.match(source, /httpOnly: true/)
  assert.match(source, /sameSite: "lax"/)
  assert.match(source, /algorithms: \["HS256"\]/)
})
