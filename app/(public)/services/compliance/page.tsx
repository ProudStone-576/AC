import { JsonLd } from "@/components/ui/JsonLd"
import type { Metadata } from "next"
import Link from "next/link"
import { AlertTriangle, ArrowRight, BookOpen, CheckCircle2, ClipboardList, FileText, Search, Shield } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { ComplianceHeroVisual } from "@/components/ui/ServiceHeroVisuals"
import { CTASection } from "@/components/sections/CTASection"
import {
  ServiceOutcomeSection,
  ServicePhotoGrid,
  ServiceWalkthroughSection,
} from "@/components/sections/ServicePageAdditions"
import { FadeIn } from "@/components/ui/FadeIn"
import { FaqAccordion } from "@/components/ui/FaqAccordion"

const faqs = [
  {
    q: "What is compliance readiness in simple terms?",
    a: "It means your controls, evidence, and day-to-day practices are organized well enough that when an auditor arrives, you are not scrambling for screenshots and answers.",
  },
  {
    q: "Is this just a paperwork exercise?",
    a: "No. Good compliance work should improve the way your organization actually operates. Policies that nobody reads, controls that nobody follows — those do not protect you and they do not impress auditors.",
  },
  {
    q: "Can you help during the audit itself?",
    a: "Yes. We can help answer technical questions, gather and organize evidence, and make sure the process does not fall apart under pressure.",
  },
  {
    q: "Do we need to do everything at once?",
    a: "Usually no. We prioritize the work that blocks your audit or creates the biggest risk first. The rest gets done in a planned order so teams are not overwhelmed.",
  },
  {
    q: "What frameworks do you support?",
    a: "We work across SOC 2, ISO 27001, NIST, PCI DSS, HIPAA, and others. Most of the core work is similar across frameworks — the specifics differ but the approach is the same.",
  },
  {
    q: "How long does it take to get audit-ready?",
    a: "It depends on your starting point, but most organizations need three to six months for a first audit. If you have done it before, a readiness review and gap closure can go faster.",
  },
]

export const metadata: Metadata = {
  title: "IT Compliance Services Canada | SOC 2, HIPAA, PCI DSS | Aethon Core",
  description: "IT compliance and audit readiness for Canadian enterprises. SOC 2, HIPAA, PCI DSS, PIPEDA, OSFI, and ISO 27001 compliance programs. Evidence collection, control mapping, and audit preparation.",
  keywords: [
    "IT compliance services Canada",
    "SOC 2 compliance Canada",
    "HIPAA compliance Canada",
    "PCI DSS compliance Canada",
    "PIPEDA compliance Canada",
    "ISO 27001 Canada",
    "compliance managed services Canada",
    "audit readiness Canada",
    "OSFI compliance Canada",
    "GRC services Canada",
  ],
  alternates: { canonical: "https://aethoncore.com/services/compliance" },
  openGraph: {
    type: "website", locale: "en_CA", url: "https://aethoncore.com/services/compliance",
    siteName: "Aethon Core",
    title: "IT Compliance Services Canada | SOC 2, HIPAA, PCI DSS | Aethon Core",
    description: "IT compliance and audit readiness for Canadian enterprises. SOC 2, HIPAA, PCI DSS, PIPEDA, OSFI, and ISO 27001 compliance programs. Evidence collection, control mapping, and audit preparation.",
  },
}

const outcomes = [
  {
    title: "Less audit scramble",
    description:
      "Teams spend less time rushing around for screenshots, documents, and answers when evidence is organized in advance. Audits become manageable instead of miserable.",
  },
  {
    title: "More confidence with customers and regulators",
    description:
      "You can explain your controls more clearly because they are tied to real day-to-day practice — not just a document someone wrote once and forgot about.",
  },
  {
    title: "Stronger operations, not just better documents",
    description:
      "The work supports how the company actually runs. Controls that are realistic to follow. Evidence that is easy to produce. Standards that help the team operate better.",
  },
]

const photoCards = [
  {
    title: "Controls your team can actually live with",
    description:
      "We write policies and implement controls that match how your team already works. If people cannot follow them, they will not follow them.",
    imageSrc:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Abstract network visualization representing connected security controls",
  },
  {
    title: "Evidence that is easy to gather and organize",
    description:
      "Scattered screenshots and email chains are replaced with a structured approach that makes audit evidence faster to produce and easier to explain.",
    imageSrc:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Enterprise financial district buildings representing institutional compliance",
  },
  {
    title: "A calmer audit experience",
    description:
      "When the groundwork is done properly, your team can walk into an audit with confidence instead of dread. Auditors notice the difference.",
    imageSrc:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cybersecurity monitoring visualization representing ongoing compliance controls",
  },
]

const capabilities = [
  {
    icon: Search,
    title: "Gap assessment",
    description:
      "We compare your current state to the framework you need and show clearly what is missing, what is weak, and what is already in good shape.",
    note: "A clear list of priorities, not a stack of findings",
  },
  {
    icon: ClipboardList,
    title: "Control implementation",
    description:
      "We help put the needed controls in place in a way your team can keep using after the engagement ends. Not shelfware — real operating practice.",
    note: "Practical controls, designed to last",
  },
  {
    icon: FileText,
    title: "Evidence collection",
    description:
      "We make it easier to gather, organize, and maintain the proof auditors ask for so your team is not hunting for it under pressure.",
    note: "Less manual scramble, more confidence",
  },
  {
    icon: BookOpen,
    title: "Policy and procedure work",
    description:
      "We write and refine documents so they reflect real operations instead of generic templates. Clear language, realistic expectations, and actually used.",
    note: "Policies matched to how you work",
  },
  {
    icon: Shield,
    title: "Vendor and third-party risk",
    description:
      "We help you review the outside vendors and partners your business depends on in a more structured and repeatable way.",
    note: "Better oversight of third parties",
  },
  {
    icon: AlertTriangle,
    title: "Live audit support",
    description:
      "We support your team during the audit process so technical questions and evidence requests are handled quickly without pulling your best people away from their work.",
    note: "Hands-on support when it matters most",
  },
]

const frameworks = [
  {
    name: "SOC 2",
    scope: "Cloud and SaaS companies",
    what: "Security, availability, confidentiality, and privacy",
    typical: "3–6 months for Type I, 6–12 months for Type II",
  },
  {
    name: "ISO 27001",
    scope: "Enterprise and government",
    what: "Information security management system",
    typical: "6–18 months to certification",
  },
  {
    name: "NIST CSF",
    scope: "US critical infrastructure and enterprise",
    what: "Identify, protect, detect, respond, recover",
    typical: "Continuous improvement model",
  },
  {
    name: "PCI DSS",
    scope: "Any company handling payment card data",
    what: "Cardholder data protection and access controls",
    typical: "3–9 months, ongoing annual assessment",
  },
  {
    name: "HIPAA",
    scope: "US healthcare and related businesses",
    what: "Patient data privacy and security",
    typical: "3–6 months with ongoing maintenance",
  },
]

const rightFor = [
  "You are preparing for an audit or certification in the next six to twelve months",
  "Customers or enterprise partners are asking for your SOC 2 or ISO 27001 report",
  "Your controls exist on paper but have not been tested or maintained",
  "You need to pass a security questionnaire and do not have the documentation to support it",
  "A previous audit found findings and you need help closing them properly",
]

const notRightFor = [
  "You need a single-checkbox certification in days with no real controls behind it",
  "You are looking for someone to just write the documents without helping your team understand them",
]

const walkthroughItems = [
  {
    title: "What your chosen framework actually requires",
    description:
      "We separate what is truly required from work that only adds noise so your team focuses on what matters.",
  },
  {
    title: "Where your biggest blockers are today",
    description:
      "You will see which gaps could delay certification or create real friction during the audit — and in what order to tackle them.",
  },
  {
    title: "How to get ready without chaos",
    description:
      "We explain the order of work, who needs to be involved, and what a realistic timeline looks like for your situation.",
  },
]

export default function CompliancePage() {
  return (
    <>
      <JsonLd schema={[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://aethoncore.com"},{"@type":"ListItem","position":2,"name":"Services","item":"https://aethoncore.com/services"},{"@type":"ListItem","position":3,"name":"Compliance & Audit Readiness","item":"https://aethoncore.com/services/compliance"}]},{"@context":"https://schema.org","@type":"Service","name":"Compliance & Audit Readiness","url":"https://aethoncore.com/services/compliance","provider":{"@type":"Organization","name":"Aethon Core Inc.","url":"https://aethoncore.com"},"areaServed":[{"@type":"Country","name":"Canada"},{"@type":"Country","name":"United States"}],"serviceType":"Compliance & Audit Readiness"}]} />
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Compliance & Audit Readiness" }]}
        eyebrow="Specialized"
        title="Compliance work that helps your team operate better, not just pass an audit"
        subtitle="We help you prepare for audits with clearer controls, organized evidence, and a realistic path through the work — so audit day is calm instead of chaotic."
        variant="tinted"
        visual={<ComplianceHeroVisual />}
      />

      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-in">
            <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
              {[
                { value: "5+", label: "Major frameworks supported" },
                { value: "Real", label: "Controls, not just documents" },
                { value: "Clear", label: "Evidence organization and tracking" },
                { value: "Hands-on", label: "Support during the live audit" },
              ].map((s) => (
                <div key={s.label} className="px-6 py-5">
                  <p className="font-mono text-xl font-semibold text-foreground tabular-nums">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <ServiceOutcomeSection
        title="Good compliance work should reduce stress, not add more"
        intro="The goal is not just to look ready on paper. It is to build controls and evidence in a way that your team can actually live with — and that hold up when an auditor digs in."
        outcomes={outcomes}
      />

      <ServicePhotoGrid
        title="What better audit readiness looks like"
        intro="This work is at its best when it is organized, understandable, and built into normal operations — not treated as a separate crisis every time an audit is scheduled."
        photos={photoCards}
      />

      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">What we do</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                The work that gets teams truly audit-ready
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Each of these tasks reduces the distance between where your organization is today and where an auditor expects you to be.
              </p>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:border-blue/20 hover:shadow-md dark:bg-card"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                    <cap.icon className="h-5 w-5 text-blue" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">{cap.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
                  <p className="text-xs font-semibold text-blue/80">{cap.note}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Frameworks</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                The standards we work with most often
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Different frameworks use different language, but the underlying work — strong controls, good evidence, clear policies — is largely the same.
              </p>
            </div>
          </FadeIn>
          <FadeIn variant="fade-in">
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-surface dark:bg-muted">
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">Framework</th>
                    <th className="hidden px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:table-cell">Who it is for</th>
                    <th className="hidden px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground md:table-cell">What it covers</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">Typical timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {frameworks.map((row, index) => (
                    <tr key={row.name} className={index % 2 === 0 ? "bg-white dark:bg-card" : "bg-surface dark:bg-background"}>
                      <td className="px-6 py-3.5 text-sm font-semibold text-blue">{row.name}</td>
                      <td className="hidden px-6 py-3.5 text-sm text-muted-foreground sm:table-cell">{row.scope}</td>
                      <td className="hidden px-6 py-3.5 text-sm text-muted-foreground md:table-cell">{row.what}</td>
                      <td className="px-6 py-3.5 text-sm text-foreground/80">{row.typical}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      <ServiceWalkthroughSection
        title="Want a walkthrough of your audit readiness?"
        description="We can review your current situation, point out the biggest blockers, and show what a realistic path to readiness looks like — for your framework, your team, and your timeline."
        items={walkthroughItems}
        primaryHref="/contact?inquiry=compliance"
        secondaryHref="/services"
        secondaryLabel="See all services"
      />

      <section className="bg-canvas py-20 lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="blur-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Is this the right fit?</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Compliance and audit readiness works best when the deadline is real
              </h2>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-8">
                <p className="mb-4 text-sm font-semibold text-white">This is a good fit if:</p>
                <ul className="space-y-3">
                  {rightFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-canvas-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-8">
                <p className="mb-4 text-sm font-semibold text-white">You may want a different starting point if:</p>
                <ul className="space-y-3">
                  {notRightFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-canvas-muted">
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-canvas-muted/50" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors hover:text-blue-hover">
                    Not sure where to begin? Talk to us first.
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Common questions</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Questions teams ask before compliance work begins
              </h2>
            </div>
          </FadeIn>
          <FadeIn variant="fade-in">
            <FaqAccordion faqs={faqs} />
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Working toward an audit or certification?"
        subtitle="Tell us which framework matters, what deadline you face, and where the process feels stuck. We will help you turn that into a clear, realistic plan — and see it through."
        primaryLabel="Request a walkthrough"
        primaryHref="/contact?inquiry=compliance"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  )
}
