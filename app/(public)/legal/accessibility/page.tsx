import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Aethon Core's commitment to digital accessibility — our standards, current status, and how to report issues.",
}

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Legal", href: "/legal" }, { label: "Accessibility" }]}
        eyebrow="Legal"
        title="Accessibility Statement"
        subtitle="Last updated April 1, 2026"
        variant="tinted"
      />

      <section className="bg-white py-16 dark:bg-background">
        <div className="container-enterprise">
          <div className="mx-auto max-w-3xl">
            <ProseContent />
          </div>
        </div>
      </section>

      <CTASection
        variant="surface"
        title="Need to report an accessibility barrier?"
        subtitle="Contact our team directly and we will work to resolve the issue or provide the information in an alternative format."
        primaryLabel="Contact us"
        primaryHref="/contact?inquiry=accessibility"
        secondaryLabel="Privacy Policy"
        secondaryHref="/legal/privacy"
      />
    </>
  )
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-base font-semibold text-foreground">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-foreground/80">{children}</div>
    </div>
  )
}

function ProseContent() {
  return (
    <div className="space-y-10 text-sm leading-relaxed text-foreground/80">
      <LegalSection title="1. Our Commitment">
        <p>
          Aethon Core Inc. is committed to ensuring that our website and digital products are accessible to all users, including those with disabilities. We believe that digital accessibility is a right, not a feature — and we are working to meet internationally recognized accessibility standards across all of our digital properties.
        </p>
        <p>
          This statement applies to <strong className="text-foreground">aethoncore.com</strong> and all associated web applications, including the Aethon Core client portal and administrative interfaces.
        </p>
      </LegalSection>

      <LegalSection title="2. Standards We Target">
        <p>
          We aim to conform to the <strong className="text-foreground">Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA</strong>, as published by the World Wide Web Consortium (W3C). These guidelines explain how to make web content more accessible to people with disabilities.
        </p>
        <p>
          Our target standards include:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
          <li>Perceivable — information and UI components must be presentable in ways users can perceive</li>
          <li>Operable — UI components and navigation must be operable without a mouse</li>
          <li>Understandable — information and UI operation must be understandable</li>
          <li>Robust — content must be robust enough to be interpreted by assistive technologies</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Current Conformance Status">
        <p>
          Aethon Core is <strong className="text-foreground">partially conformant</strong> with WCAG 2.1 Level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
        </p>
        <p>
          Areas where we are actively working toward full conformance include:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
          <li>Complex data tables in the administrative dashboard — summary attributes and caption elements are being added</li>
          <li>Custom interactive components (dropdowns, command palette) — keyboard navigation and ARIA labelling is being reviewed and improved</li>
          <li>PDF documents and white papers — accessible alternatives are being prepared</li>
          <li>Charts and data visualizations — text alternatives and ARIA descriptions are being added</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Technical Specifications">
        <p>
          Aethon Core relies on the following technologies for conformance:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
          <li>HTML5</li>
          <li>CSS</li>
          <li>JavaScript (React / Next.js)</li>
          <li>WAI-ARIA 1.2 for interactive components</li>
        </ul>
        <p className="mt-3">
          These technologies are relied upon for conformance. We design primarily for modern browsers (Chrome, Firefox, Safari, Edge) and screen readers including NVDA, JAWS, and VoiceOver. We test on both desktop and mobile environments.
        </p>
      </LegalSection>

      <LegalSection title="5. Known Limitations">
        <p>
          Despite our best efforts to ensure accessibility, there may be some limitations. The following known limitations exist and are being actively addressed:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
          <li>
            <strong className="text-foreground">Animated components:</strong> Some homepage scroll animations may not respect the
            {" "}<code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">prefers-reduced-motion</code>{" "}
            media query in all cases. We are auditing and correcting these.
          </li>
          <li>
            <strong className="text-foreground">Third-party content:</strong> Some embedded third-party content (video embeds, map integrations) may not meet the same accessibility standards as our own content.
          </li>
          <li>
            <strong className="text-foreground">Legacy documentation:</strong> Older PDF documents may not be fully accessible. Contact us to request an accessible version of any specific document.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Feedback and Contact">
        <p>
          We welcome feedback on the accessibility of our digital properties. If you encounter an accessibility barrier, or if you need information in an alternative format, please contact us:
        </p>
        <ul className="mt-3 space-y-2 pl-2">
          <li>
            <span className="font-medium text-foreground">Email: </span>
            <a href="mailto:accessibility@aethoncore.com" className="text-blue underline underline-offset-2 hover:no-underline">
              accessibility@aethoncore.com
            </a>
          </li>
          <li>
            <span className="font-medium text-foreground">Web form: </span>
            <Link href="/contact?inquiry=accessibility" className="text-blue underline underline-offset-2 hover:no-underline">
              aethoncore.com/contact
            </Link>
          </li>
          <li>
            <span className="font-medium text-foreground">Phone: </span>
            <a href="tel:+18002384667" className="text-blue underline underline-offset-2 hover:no-underline">
              +1 (800) 238-4667
            </a>
          </li>
        </ul>
        <p className="mt-4">
          We aim to respond to accessibility feedback within <strong className="text-foreground">2 business days</strong> and to resolve accessibility barriers within a reasonable timeframe based on complexity.
        </p>
      </LegalSection>

      <LegalSection title="7. Formal Complaints">
        <p>
          If you are not satisfied with our response to your accessibility concern, you may contact the relevant national accessibility authority in your jurisdiction. In Canada, you may contact the{" "}
          <strong className="text-foreground">Accessibility Standards Canada</strong> or your provincial human rights commission.
        </p>
      </LegalSection>

      <LegalSection title="8. Assessment and Review">
        <p>
          Aethon Core assesses the accessibility of our digital properties through the following approaches:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 pl-2">
          <li>Self-evaluation using automated tooling (axe-core, Lighthouse) integrated into our CI/CD pipeline</li>
          <li>Manual testing with keyboard navigation and screen readers</li>
          <li>User feedback and reported accessibility barriers</li>
          <li>Periodic review by accessibility specialists</li>
        </ul>
        <p className="mt-3">
          This statement was last reviewed and updated on <strong className="text-foreground">April 1, 2026</strong>. We review and update this statement at least annually and following any significant changes to our digital properties.
        </p>
      </LegalSection>
    </div>
  )
}
