import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/ui/PageHero"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Aethon Core Inc. Terms of Service — the legal agreement governing use of our platform and services.",
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Legal", href: "/legal" }, { label: "Terms of Service" }]}
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Last updated: March 1, 2026"
        variant="tinted"
      />

      <section className="py-16 bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="mx-auto max-w-3xl prose prose-sm dark:prose-invert max-w-none">
            <p className="text-muted-foreground text-sm leading-relaxed">
              These Terms of Service ("Terms") govern your access to and use of the services provided by Aethon Core Inc.
              ("Aethon Core," "we," "us," or "our"), including our platform, software, and professional services
              (collectively, the "Services"). By accessing or using the Services, you agree to be bound by these Terms.
              If you are entering into these Terms on behalf of a company or other legal entity, you represent that you
              have the authority to bind that entity to these Terms.
            </p>

            <h2 className="text-foreground font-semibold mt-10 mb-4">1. Services</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Aethon Core provides enterprise infrastructure management, security, analytics, and automation services.
              The specific Services available to you are governed by your executed Order Form and the applicable
              Service Level Agreement ("SLA"). In the event of conflict between these Terms and your Order Form,
              the Order Form controls.
            </p>

            <h2 className="text-foreground font-semibold mt-8 mb-4">2. Account and access</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              You are responsible for maintaining the confidentiality of your account credentials and for all activity
              that occurs under your account. You agree to notify Aethon Core immediately at security@aethoncore.com
              if you suspect unauthorized access to your account. Aethon Core is not liable for losses resulting from
              unauthorized use of your credentials.
            </p>

            <h2 className="text-foreground font-semibold mt-8 mb-4">3. Acceptable use</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">You agree not to:</p>
            <ul className="text-muted-foreground text-sm space-y-1 mt-3">
              <li>Use the Services to violate any applicable law or regulation</li>
              <li>Transmit malicious code, viruses, or disruptive data through the Services</li>
              <li>Attempt to gain unauthorized access to any Aethon Core system or another customer's environment</li>
              <li>Reverse engineer, decompile, or disassemble any component of the Services</li>
              <li>Resell or sublicense the Services without Aethon Core's written consent</li>
              <li>Use the Services to store or transmit data in violation of applicable export control laws</li>
            </ul>

            <h2 className="text-foreground font-semibold mt-8 mb-4">4. Data ownership and privacy</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              You retain all ownership rights to the data you submit to the Services ("Customer Data"). Aethon Core
              processes Customer Data only as instructed by you and as described in our{" "}
              <Link href="/legal/privacy" className="text-blue hover:underline">Privacy Policy</Link> and{" "}
              <Link href="/legal/dpa" className="text-blue hover:underline">Data Processing Addendum</Link>. Aethon Core will not access, use, or disclose Customer Data except to provide the Services
              or as required by law.
            </p>

            <h2 className="text-foreground font-semibold mt-8 mb-4">5. Intellectual property</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Aethon Core retains all intellectual property rights in the Services, including the platform software,
              documentation, and related materials. Nothing in these Terms transfers ownership of any Aethon Core
              intellectual property to you. You are granted a limited, non-exclusive, non-transferable license to use
              the Services solely as described in your Order Form during the subscription term.
            </p>

            <h2 className="text-foreground font-semibold mt-8 mb-4">6. Service levels and uptime</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Aethon Core commits to the uptime levels specified in your Order Form and the applicable SLA. Standard
              enterprise deployments carry a 99.99% uptime SLA. Service credits for SLA failures are your sole remedy
              for service availability issues, unless otherwise specified in your Order Form. Standard SLA terms are published in our{" "}
              <Link href="/legal/sla" className="text-blue hover:underline">Service Level Agreement</Link>.
            </p>

            <h2 className="text-foreground font-semibold mt-8 mb-4">7. Fees and payment</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Fees are set forth in your Order Form. Invoices are due within 30 days of the invoice date unless your
              Order Form specifies different payment terms. Late payments accrue interest at 1.5% per month or the
              maximum rate permitted by law, whichever is lower. Aethon Core may suspend Services for accounts that
              are more than 60 days past due after providing 10 days written notice.
            </p>

            <h2 className="text-foreground font-semibold mt-8 mb-4">8. Confidentiality</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Each party agrees to protect the other party's Confidential Information using at least the same degree
              of care it uses to protect its own confidential information, but no less than reasonable care.
              Confidential Information does not include information that (a) is or becomes publicly available through
              no fault of the receiving party, (b) was already known to the receiving party, or (c) is independently
              developed without use of the disclosing party's confidential information.
            </p>

            <h2 className="text-foreground font-semibold mt-8 mb-4">9. Limitation of liability</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEITHER PARTY WILL BE LIABLE FOR INDIRECT,
              INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES, INCLUDING LOSS OF PROFITS OR DATA, ARISING
              FROM THESE TERMS OR THE SERVICES. AETHON CORE'S TOTAL AGGREGATE LIABILITY ARISING FROM THESE TERMS
              WILL NOT EXCEED THE AMOUNTS PAID BY YOU IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>

            <h2 className="text-foreground font-semibold mt-8 mb-4">10. Term and termination</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              These Terms are effective from the date you first access the Services and continue until terminated.
              Either party may terminate for material breach if the breach is not cured within 30 days of written
              notice. Upon termination, your access to the Services will cease. Aethon Core will retain Customer Data
              for 30 days following termination to allow you to export it, after which it will be deleted in
              accordance with our data retention policy.
            </p>

            <h2 className="text-foreground font-semibold mt-8 mb-4">11. Governing law</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable
              therein, without regard to conflict of law provisions. Any dispute arising under these Terms will be
              resolved through binding arbitration under the rules of the ADR Institute of Canada, with proceedings
              conducted in Canada, unless your Order Form specifies a different jurisdiction.
            </p>

            <h2 className="text-foreground font-semibold mt-8 mb-4">12. Changes to these Terms</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Aethon Core may update these Terms from time to time. We will provide at least 30 days' notice before
              changes take effect for existing customers. Your continued use of the Services after the effective date
              constitutes acceptance of the updated Terms.
            </p>

            <h2 className="text-foreground font-semibold mt-8 mb-4">Contact</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Questions about these Terms? Contact our legal team at legal@aethoncore.com or write to us at:<br />
              Aethon Core Inc., Canada.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
