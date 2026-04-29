import assert from "node:assert/strict"
import fs from "node:fs"
import test from "node:test"

function read(path) {
  return fs.readFileSync(path, "utf8")
}

test("proxy protects portal and dashboard routes", () => {
  const source = read("proxy.ts")

  assert.match(source, /export async function proxy/)
  assert.match(source, /"\/dashboard\/:path\*"/)
  assert.match(source, /"\/portal\/:path\*"/)
  assert.match(source, /session\.role !== "admin"/)
})

test("auth provider routes expose configured callback URLs", () => {
  assert.match(read("app/api/auth/google/route.ts"), /\/api\/auth\/google\/callback/)
  assert.match(read("app/api/auth/microsoft/route.ts"), /\/api\/auth\/microsoft\/callback/)
  assert.match(read("app/api/auth/apple/route.ts"), /\/api\/auth\/apple\/callback/)
})

test("contact form posts to the contact API", () => {
  const source = read("components/contact/ContactForm.tsx")

  assert.match(source, /fetch\("\/api\/contact"/)
  assert.match(source, /method: "POST"/)
})

test("portal request and profile forms post to protected portal APIs", () => {
  assert.match(read("app/portal/requests/_components/NewRequestForm.tsx"), /\/api\/portal\/requests/)
  assert.match(read("app/portal/profile/_components/ProfileForm.tsx"), /\/api\/portal\/profile/)
  assert.match(read("app/portal/profile/_components/ChangePasswordForm.tsx"), /\/api\/portal\/change-password/)
  assert.match(read("app/portal/settings/page.tsx"), /\/api\/portal\/mfa\/setup/)
})
