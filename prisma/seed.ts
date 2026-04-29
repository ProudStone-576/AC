/**
 * prisma/seed.ts — first-admin bootstrap
 *
 * Creates an admin user from environment variables.
 * Safe to run multiple times: no-ops if the email already exists.
 *
 * Usage:
 *   npx tsx prisma/seed.ts
 *   # or via package.json script:
 *   npm run db:seed
 *
 * Required env vars (set in .env or your hosting provider):
 *   SEED_ADMIN_EMAIL     e.g. admin@aethoncore.com
 *   SEED_ADMIN_PASSWORD  min 12 chars, will be bcrypt-hashed
 *   SEED_ADMIN_FIRST     first name  (default: "Admin")
 *   SEED_ADMIN_LAST      last name   (default: "User")
 */

import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const db = new PrismaClient()

async function main() {
  const email = process.env.SEED_ADMIN_EMAIL
  const password = process.env.SEED_ADMIN_PASSWORD

  if (!email || !password) {
    console.error(
      "Error: SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD must be set.\n" +
      "Example:\n" +
      "  SEED_ADMIN_EMAIL=admin@aethoncore.com SEED_ADMIN_PASSWORD=yourpassword npm run db:seed"
    )
    process.exit(1)
  }

  if (password.length < 12) {
    console.error("Error: SEED_ADMIN_PASSWORD must be at least 12 characters.")
    process.exit(1)
  }

  const firstName = process.env.SEED_ADMIN_FIRST ?? "Admin"
  const lastName  = process.env.SEED_ADMIN_LAST  ?? "User"

  const existing = await db.user.findUnique({ where: { email } })
  if (existing) {
    if (existing.role === "admin") {
      console.log(`Admin already exists: ${email} — no changes made.`)
    } else {
      await db.user.update({
        where: { email },
        data: { role: "admin" },
      })
      console.log(`Promoted existing user to admin: ${email}`)
    }
    return
  }

  const passwordHash = await bcrypt.hash(password, 12)

  await db.user.create({
    data: {
      email,
      passwordHash,
      firstName,
      lastName,
      role: "admin",
      emailVerified: true,
    },
  })

  console.log(`Admin user created: ${email}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
