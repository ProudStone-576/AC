import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/ui/PageHero"
import { company } from "@/lib/constants/company"

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "Rules for lawful, safe, and responsible use of Aethon Core websites, products, platforms, and managed services.",
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 text-base font-semibold text-foreground">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  )
}

export default function AcceptableUsePage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Legal", href: "/legal" }, { label: "Acceptable Use Policy" }]}
        eyebrow="Legal"
        title="Acceptable Use Policy"
        subtitle="Last updated April 25, 2026"
        variant="tinted"
      />

      <section className="bg-white py-16 dark:bg-background">
        <div className="container-enterprise">
          <div className="mx-auto max-w-3xl space-y-10">
            <LegalSection title="1. Purpose">
              <p>
                This Acceptable Use Policy ("AUP") explains the rules for using the websites, products, systems, and services provided by {company.fullName} ("Aethon Core"). It is designed to protect customers, users, infrastructure, and the public.
              </p>
            </LegalSection>

            <LegalSection title="2. You may not use the services to">
              <ul className="list-inside list-disc space-y-1 pl-2">
                <li>Break any applicable law, regulation, or court order</li>
                <li>Access, probe, or interfere with systems, accounts, or data without authorization</li>
                <li>Distribute malware, ransomware, spyware, botnets, or other malicious code</li>
                <li>Run phishing, fraud, impersonation, or deceptive social engineering campaigns</li>
                <li>Send unlawful spam or operate misleading bulk messaging activity</li>
                <li>Violate intellectual property, privacy, or confidentiality rights</li>
                <li>Use the services in a way that threatens the security, stability, or performance of the platform or other customers</li>
              </ul>
            </LegalSection>

            <LegalSection title="3. Security and testing restrictions">
              <p>
                Customers may not conduct penetration testing, vulnerability scanning, or other intrusive security testing against Aethon Core systems unless Aethon Core has given prior written approval for that activity.
              </p>
              <p>
                If you want to report a security issue, please use our responsible disclosure channel through{" "}
                <a href="mailto:security@aethoncore.com" className="text-blue hover:underline">
                  security@aethoncore.com
                </a>
                .
              </p>
            </LegalSection>

            <LegalSection title="4. Customer responsibility">
              <p>
                Customers are responsible for activity that occurs under their accounts, credentials, integrations, and managed environments, including activity by employees, contractors, and third parties acting on their behalf.
              </p>
            </LegalSection>

            <LegalSection title="5. Enforcement">
              <p>
                Aethon Core may investigate suspected violations of this policy. Where reasonably necessary, we may suspend or limit access to the services, remove harmful content, block traffic, or take other steps needed to protect the platform, customers, or third parties.
              </p>
              <p>
                We will aim to provide notice when practical, but we may act immediately where delay would increase security or legal risk.
              </p>
            </LegalSection>

            <LegalSection title="6. Relationship to other agreements">
              <p>
                This policy forms part of the <Link href="/legal/terms" className="text-blue hover:underline">Terms of Service</Link> and may also be incorporated into customer contracts, statements of work, and managed services agreements.
              </p>
            </LegalSection>

            <LegalSection title="7. Updates">
              <p>
                We may update this policy from time to time to reflect changes in our services, law, or security practices. Material changes will be posted on this page.
              </p>
            </LegalSection>

            <LegalSection title="8. Contact">
              <p>
                Questions about this policy may be sent to{" "}
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
