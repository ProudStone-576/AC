import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/ui/PageHero"
import { company } from "@/lib/constants/company"

export const metadata: Metadata = {
  title: "Service Level Agreement",
  description: "Aethon Core standard service levels, support hours, response targets, maintenance windows, and service credits.",
}

const priorityRows = [
  { priority: "P1 - Critical", example: "Full outage, security incident, or major business disruption", response: "15 minutes", updates: "Every 30 minutes" },
  { priority: "P2 - High", example: "Major feature impaired with serious operational impact", response: "1 hour", updates: "Every 2 hours" },
  { priority: "P3 - Medium", example: "Important issue with workaround available", response: "4 business hours", updates: "Daily" },
  { priority: "P4 - Low", example: "General request, minor issue, or planned change", response: "1 business day", updates: "As agreed" },
]

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 text-base font-semibold text-foreground">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  )
}

export default function SlaPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Legal", href: "/legal" }, { label: "Service Level Agreement" }]}
        eyebrow="Legal"
        title="Service Level Agreement"
        subtitle="Last updated April 25, 2026"
        variant="tinted"
      />

      <section className="bg-white py-16 dark:bg-background">
        <div className="container-enterprise">
          <div className="mx-auto max-w-3xl space-y-10">
            <LegalSection title="1. Overview">
              <p>
                This Service Level Agreement ("SLA") describes the standard support and service commitments offered by {company.fullName} ("Aethon Core") for covered products and managed services.
              </p>
              <p>
                This SLA applies only where an executed order form, statement of work, or managed services agreement says that the service is covered by this SLA. If a signed agreement includes different service levels, the signed agreement controls.
              </p>
            </LegalSection>

            <LegalSection title="2. Support coverage">
              <p>
                Standard support is provided Monday through Friday during normal business hours in the customer&apos;s primary supported region, excluding local holidays, unless a higher support tier is stated in the applicable order form.
              </p>
              <p>
                Managed services, monitoring, and incident response may include 24/7/365 coverage where that coverage is specifically included in the purchased service tier.
              </p>
            </LegalSection>

            <LegalSection title="3. Incident priority and response targets">
              <div className="overflow-hidden rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface dark:bg-muted">
                      <th className="px-4 py-3 text-left font-semibold text-foreground/70">Priority</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground/70">Typical example</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground/70">Initial response</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground/70">Status updates</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {priorityRows.map((row) => (
                      <tr key={row.priority} className="bg-white dark:bg-card">
                        <td className="px-4 py-3 font-semibold text-foreground">{row.priority}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.example}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.response}</td>
                        <td className="px-4 py-3 text-muted-foreground">{row.updates}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Response time means the time until Aethon Core acknowledges the issue and begins work. It does not mean full resolution within that period.
              </p>
            </LegalSection>

            <LegalSection title="4. Availability commitment">
              <p>
                Unless a different figure is stated in a signed agreement, covered production platform services have a target monthly uptime of 99.9%. Some enterprise plans may include a 99.99% commitment where stated in the applicable order form.
              </p>
              <p>
                Availability is measured monthly and excludes scheduled maintenance, emergency maintenance needed to protect the service, internet outages outside our control, customer-caused issues, force majeure events, and third-party failures outside Aethon Core&apos;s reasonable control.
              </p>
            </LegalSection>

            <LegalSection title="5. Scheduled maintenance">
              <p>
                We aim to provide at least 72 hours&apos; notice for scheduled maintenance that is likely to affect production service. Emergency maintenance may be performed with shorter notice when needed to protect security, stability, or service integrity.
              </p>
            </LegalSection>

            <LegalSection title="6. Customer responsibilities">
              <p>To receive SLA support, the customer must:</p>
              <ul className="list-inside list-disc space-y-1 pl-2">
                <li>Maintain current contact and escalation information</li>
                <li>Provide reasonable cooperation and timely access when support is required</li>
                <li>Use the services in line with the agreement and the <Link href="/legal/acceptable-use" className="text-blue hover:underline">Acceptable Use Policy</Link></li>
                <li>Promptly install customer-side fixes, patches, or configuration changes that are required for security or stability</li>
              </ul>
            </LegalSection>

            <LegalSection title="7. Service credits">
              <p>
                If a covered availability commitment is missed, the customer&apos;s sole remedy is a service credit unless a signed agreement says otherwise.
              </p>
              <p>Standard credits are:</p>
              <ul className="list-inside list-disc space-y-1 pl-2">
                <li>99.0% to below 99.9% uptime: 5% credit of the affected monthly recurring fee</li>
                <li>95.0% to below 99.0% uptime: 10% credit of the affected monthly recurring fee</li>
                <li>Below 95.0% uptime: 15% credit of the affected monthly recurring fee</li>
              </ul>
              <p>
                Credit requests must be submitted in writing within 30 days after the end of the affected month.
              </p>
            </LegalSection>

            <LegalSection title="8. Changes to this SLA">
              <p>
                We may update this SLA from time to time. Material changes will be posted on this page and, where required by contract, communicated to affected customers in advance.
              </p>
            </LegalSection>

            <LegalSection title="9. Contact">
              <p>
                Questions about this SLA can be sent to{" "}
                <a href={`mailto:${company.email}`} className="text-blue hover:underline">
                  {company.email}
                </a>
                .
              </p>
            </LegalSection>
          </div>
        </div>
      </section>
    </>
  )
}
