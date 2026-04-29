import type { Metadata } from "next"
import { PageHero } from "@/components/ui/PageHero"
import { company } from "@/lib/constants/company"

export const metadata: Metadata = {
  title: "Data Processing Addendum",
  description: "Aethon Core standard Data Processing Addendum for customer personal data handled in connection with our services.",
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 text-base font-semibold text-foreground">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  )
}

export default function DpaPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Legal", href: "/legal" }, { label: "Data Processing Addendum" }]}
        eyebrow="Legal"
        title="Data Processing Addendum"
        subtitle="Last updated April 25, 2026"
        variant="tinted"
      />

      <section className="bg-white py-16 dark:bg-background">
        <div className="container-enterprise">
          <div className="mx-auto max-w-3xl space-y-10">
            <LegalSection title="1. Scope">
              <p>
                This Data Processing Addendum ("DPA") forms part of the agreement between the customer and {company.fullName} ("Aethon Core") where Aethon Core processes personal data on behalf of the customer in connection with the services.
              </p>
              <p>
                If there is a conflict between this DPA and the main services agreement, this DPA controls for matters related to personal data processing.
              </p>
            </LegalSection>

            <LegalSection title="2. Roles of the parties">
              <p>
                The customer is the controller or business, and Aethon Core is the processor or service provider, for personal data processed by Aethon Core on the customer&apos;s behalf, unless the parties expressly agree otherwise in writing.
              </p>
            </LegalSection>

            <LegalSection title="3. Processing details">
              <p>Aethon Core may process personal data for the following purposes:</p>
              <ul className="list-inside list-disc space-y-1 pl-2">
                <li>Providing hosted products, managed services, and support</li>
                <li>Monitoring, securing, maintaining, and improving the services</li>
                <li>Responding to customer instructions and support requests</li>
                <li>Complying with legal obligations related to the services</li>
              </ul>
              <p>
                Categories of data may include account information, contact details, system logs, usage records, and any other personal data that the customer chooses to submit to the services.
              </p>
            </LegalSection>

            <LegalSection title="4. Customer instructions">
              <p>
                Aethon Core will process personal data only on documented instructions from the customer, unless required to do otherwise by applicable law. The agreement, this DPA, customer configuration choices, and support requests together form the customer&apos;s documented instructions.
              </p>
            </LegalSection>

            <LegalSection title="5. Confidentiality and security">
              <p>
                Aethon Core will ensure that personnel authorized to process personal data are bound by confidentiality obligations.
              </p>
              <p>
                We implement appropriate technical and organizational measures designed to protect personal data against unauthorized or unlawful processing and against accidental loss, destruction, damage, alteration, or disclosure.
              </p>
            </LegalSection>

            <LegalSection title="6. Subprocessors">
              <p>
                The customer authorizes Aethon Core to use subprocessors that are reasonably necessary to provide the services. Aethon Core remains responsible for the performance of its subprocessors to the extent required by applicable law.
              </p>
              <p>
                Aethon Core will maintain a list of material subprocessors upon reasonable request and will impose data protection obligations on subprocessors that are no less protective than those in this DPA.
              </p>
            </LegalSection>

            <LegalSection title="7. International transfers">
              <p>
                Where personal data is transferred across borders, Aethon Core will use appropriate safeguards required by applicable law, which may include standard contractual clauses or other approved transfer mechanisms.
              </p>
            </LegalSection>

            <LegalSection title="8. Assistance to the customer">
              <p>
                Taking into account the nature of the processing and the information available to us, Aethon Core will provide reasonable assistance to the customer with:
              </p>
              <ul className="list-inside list-disc space-y-1 pl-2">
                <li>Responding to data subject requests</li>
                <li>Security incident response and notification support</li>
                <li>Data protection impact assessments where relevant</li>
                <li>Reasonable compliance inquiries related to the services</li>
              </ul>
            </LegalSection>

            <LegalSection title="9. Security incidents">
              <p>
                If Aethon Core becomes aware of a confirmed security incident affecting personal data processed under this DPA, we will notify the customer without undue delay and provide reasonably available information needed for the customer to meet its own notification obligations.
              </p>
            </LegalSection>

            <LegalSection title="10. Deletion and return of data">
              <p>
                At the end of the services, and subject to any lawful retention requirements, Aethon Core will delete or return personal data in accordance with the agreement and our retention practices.
              </p>
            </LegalSection>

            <LegalSection title="11. Audit information">
              <p>
                Aethon Core will make available information reasonably necessary to demonstrate compliance with this DPA. Where additional audit rights are required by law or contract, the parties will work together in good faith to define a reasonable and secure process.
              </p>
            </LegalSection>

            <LegalSection title="12. Contact">
              <p>
                Questions about this DPA may be sent to{" "}
                <a href="mailto:privacy@aethoncore.com" className="text-blue hover:underline">
                  privacy@aethoncore.com
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
