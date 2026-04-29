import type { Metadata } from "next"
import { PageHero } from "@/components/ui/PageHero"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Aethon Core's privacy policy — how we collect, use, and protect your information.",
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Legal", href: "/legal" }, { label: "Privacy Policy" }]}
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated March 1, 2026"
        variant="tinted"
      />

      <section className="bg-white py-16 dark:bg-background">
        <div className="container-enterprise">
          <div className="mx-auto max-w-3xl">
            <ProseContent />
          </div>
        </div>
      </section>
    </>
  )
}

function ProseContent() {
  return (
    <div className="space-y-10 text-sm leading-relaxed text-foreground/80">
      <LegalSection title="1. Introduction">
        <p>
          Aethon Core Inc. (&ldquo;Aethon Core,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal data.
          This privacy policy explains how we collect, use, disclose, and safeguard information when you visit our website, use our platforms, or engage with our services.
        </p>
        <p className="mt-3">
          Please read this policy carefully. If you disagree with its terms, please discontinue use of our site and services.
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <p className="font-medium text-foreground">Information you provide directly:</p>
        <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
          <li>Contact information (name, email, phone number, job title)</li>
          <li>Company information provided via forms or sales interactions</li>
          <li>Account credentials for Aethon Core platform products</li>
          <li>Support tickets and communications</li>
        </ul>
        <p className="mt-4 font-medium text-foreground">Information collected automatically:</p>
        <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
          <li>Log data (IP address, browser type, pages visited, time stamps)</li>
          <li>Device information (operating system, unique device identifiers)</li>
          <li>Usage data from our web properties and platform products</li>
          <li>Cookie data (see our Cookie Policy for details)</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. How We Use Your Information">
        <p>We use information collected about you to:</p>
        <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
          <li>Provide, maintain, and improve our products and services</li>
          <li>Process transactions and send related communications</li>
          <li>Respond to inquiries and provide customer support</li>
          <li>Send marketing communications you have opted into</li>
          <li>Detect and prevent fraud or other harmful activities</li>
          <li>Comply with legal obligations</li>
          <li>Analyze usage to improve our website and products</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Information Sharing">
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share information with:
        </p>
        <ul className="mt-3 list-inside list-disc space-y-1 pl-2">
          <li><strong>Service providers</strong> who assist in operating our website and delivering our products under confidentiality agreements</li>
          <li><strong>Business partners</strong> only with your explicit consent</li>
          <li><strong>Legal authorities</strong> when required by applicable law or to protect the rights, property, or safety of Aethon Core, our clients, or the public</li>
          <li><strong>Acquirers</strong> in the event of a merger, acquisition, or sale of all or a portion of our assets</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Data Retention">
        <p>
          We retain personal data only as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law. Account data is typically retained for the duration of the customer relationship plus 7 years for financial and legal compliance purposes.
        </p>
      </LegalSection>

      <LegalSection title="6. Your Rights">
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
          <li>Access the personal data we hold about you</li>
          <li>Correct inaccurate or incomplete data</li>
          <li>Request deletion of your personal data</li>
          <li>Object to processing of your personal data</li>
          <li>Request restriction of processing</li>
          <li>Data portability</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, contact our Privacy Team at{" "}
          <a href="mailto:privacy@aethoncore.com" className="text-blue hover:underline">
            privacy@aethoncore.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="7. Security">
        <p>
          We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include encryption in transit and at rest, access controls, and regular security assessments. However, no method of transmission over the internet is 100% secure.
        </p>
      </LegalSection>

      <LegalSection title="8. International Transfers">
        <p>
          Aethon Core operates globally. Your data may be transferred to and processed in countries other than your country of residence. Where such transfers occur, we ensure adequate protections are in place through standard contractual clauses or other approved transfer mechanisms.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to This Policy">
        <p>
          We may update this privacy policy from time to time. We will notify you of material changes by posting the new policy on this page with an updated effective date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact Us">
        <p>
          For privacy-related inquiries, contact our Data Protection Officer:
        </p>
        <div className="mt-3 space-y-1 text-muted-foreground">
          <p>Aethon Core Inc.</p>
          <p>Attn: Data Protection Officer</p>
          <p>Aethon Core Inc., Canada</p>
          <p>
            <a href="mailto:privacy@aethoncore.com" className="text-blue hover:underline">
              privacy@aethoncore.com
            </a>
          </p>
        </div>
      </LegalSection>
    </div>
  )
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 text-base font-semibold text-foreground">{title}</h2>
      <div className="text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  )
}
