# Production Readiness Checklist

Use this before launch so the app is technically ready without inventing real business facts.

## Service Configuration

- Replace development SQLite with PostgreSQL and run `npm run db:migrate`.
- Set a production `JWT_SECRET` generated from at least 48 random bytes.
- Configure SMTP and verify signup, email verification, password reset, contact, and notification emails.
- Configure Stripe live keys, webhook secret, and the deployed webhook URL.
- Configure Google, Microsoft, and Apple OAuth callback URLs for the final domain.
- Set `ANTHROPIC_API_KEY` for the portal assistant or hide the assistant entry point until it is available.
- Set `PLAUSIBLE_DOMAIN` and `GOOGLE_SITE_VERIFICATION` after the final domain is connected.
- Set `ERROR_WEBHOOK_URL` for production exception forwarding.

## Content Validation

- Replace placeholder leadership bios with approved names, titles, credentials, and headshots.
- Confirm client logos, testimonials, case studies, and quantified claims are approved for publication.
- Validate pricing, SLA, uptime, SOC 2, ISO 27001, FedRAMP, PCI DSS, HIPAA, NERC CIP, and other compliance claims.
- Confirm contact details, social links, legal pages, privacy/cookie language, and company address.
- Decide whether the status page is connected to live telemetry or clearly presented as a platform status display.
- Review docs, white papers, resources, and industry pages for final brand voice and legal accuracy.

## Verification

- Run `npm run typecheck`, `npm run lint`, `npm run test`, and `npm run build`.
- Smoke test public pages, auth flows, portal access, admin access, and protected-route redirects on the deployed domain.
- Test mobile and desktop layouts for the public site, portal, and admin dashboard.
