import { JsonLd } from "@/components/ui/JsonLd"
import type { Metadata } from "next"
import {
   Building, ShieldCheck, Lock,
  FileText, Eye
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Government IT Services Canada | PBMM, Protected B, FedRAMP | Aethon Core",
  description: "Managed IT services for Canadian federal, provincial, and municipal organizations. PBMM, Protected B, and FedRAMP-grade managed services. We hold the clearances and operate the controls your mandates require.",
  keywords: [
    "government IT services Canada",
    "public sector IT Canada",
    "PBMM compliance Canada",
    "Protected B IT Canada",
    "federal IT services Canada",
    "provincial IT services Canada",
    "municipal IT Canada",
    "government cybersecurity Canada",
    "GC Cloud Canada",
    "government managed services Canada",
  ],
  alternates: { canonical: "https://aethoncore.com/industries/government" },
  openGraph: {
    type: "website", locale: "en_CA", url: "https://aethoncore.com/industries/government",
    siteName: "Aethon Core",
    title: "Government IT Services Canada | PBMM, Protected B, FedRAMP | Aethon Core",
    description: "Managed IT services for Canadian federal, provincial, and municipal organizations. PBMM, Protected B, and FedRAMP-grade managed services. We hold the clearances and operate the controls your mandates require.",
  },
}

const challenges = [
  {
    icon: ShieldCheck,
    title: "Authorization requirements",
    description:
      "FedRAMP authorization — and its state-level equivalents — involves months of documentation, testing, and third-party assessment. Most commercial cloud providers offer FedRAMP Moderate. Government agencies often need High. That's a different architecture.",
  },
  {
    icon: Lock,
    title: "Data sovereignty and residency",
    description:
      "Federal data must stay within US borders and, in some cases, within US-government-controlled facilities. State and local data often has similar requirements. Cloud infrastructure that enforces this architecturally — not just contractually — is a different product.",
  },
  {
    icon: FileText,
    title: "Procurement and compliance documentation",
    description:
      "Government procurement requires documentation that most commercial vendors don't maintain: security planning documents, assessment reports, and formal authorization packages. The paperwork is as important as the technology itself.",
  },
  {
    icon: Eye,
    title: "Continuous monitoring requirements",
    description:
      "FedRAMP (the US federal cloud certification) requires ongoing security monitoring with monthly reports to your designated security officials. Most agencies don't have the internal staff to run this program at scale — it has to be managed by the provider.",
  },
]

const capabilities = [
  {
    title: "Top-tier US government cloud certification (FedRAMP High)",
    description:
      "Our government cloud meets the highest security certification level available for non-classified government workloads. All required security controls are active and continuously checked. Authorization documentation is maintained year-round.",
    stat: "FedRAMP High · FISMA High",
  },
  {
    title: "State and local government compliant deployment",
    description:
      "State and local government agencies face the same security requirements as federal agencies — with the added complexity of varying state-specific rules. We maintain compliant deployment models that meet these requirements across multiple states.",
    stat: "StateRAMP authorized",
  },
  {
    title: "Physically separated environments",
    description:
      "For workloads that must be completely separate from commercial cloud infrastructure, we offer fully isolated deployment in US government-controlled facilities. Every network connection is explicit, logged, and controlled.",
    stat: "Physically isolated · US-only staff",
  },
  {
    title: "US export control compliance (ITAR and EAR)",
    description:
      "Defense contractors and agencies handling sensitive information under US export control regulations need compliant infrastructure. We maintain the required personnel controls, access restrictions, and documentation.",
    stat: "ITAR · EAR · restricted data handling",
  },
  {
    title: "Defense contractor certification support (CMMC)",
    description:
      "Defense contractors who need to meet the government's security certification requirements need cloud infrastructure that satisfies the technical controls. We provide compliant environments and support the certification process.",
    stat: "CMMC Level 3 · NIST security controls",
  },
  {
    title: "Continuous monitoring as a service",
    description:
      "The required ongoing security monitoring — monthly vulnerability scanning, continuous security event tracking, and regular reports to your designated security officials — is handled by our government operations team. Your agency gets the reports; we run the program.",
    stat: "Continuous monitoring · monthly reporting",
  },
]

const complianceFrameworks = [
  { name: "FedRAMP High", scope: "Required certification to operate cloud services for US federal agencies" },
  { name: "StateRAMP", scope: "Security certification for state and local government technology providers" },
  { name: "FISMA High", scope: "US federal government information security requirements — highest level" },
  { name: "ITAR", scope: "US rules governing technology that could be used in weapons systems" },
  { name: "EAR", scope: "US rules governing controlled technology exports" },
  { name: "CMMC Level 3", scope: "Security certification required to work on US defense contracts" },
  { name: "NIST SP 800-171", scope: "Standards for handling sensitive government information" },
  { name: "IL4 / IL5", scope: "US Department of Defense data security levels" },
]

const stats = [
  { value: "FedRAMP High", label: "Top US government cloud certification" },
  { value: "Export ctrl", label: "Compliant environments (ITAR)" },
  { value: "Defense", label: "Contractor certification support" },
  { value: "US-only", label: "Data residency, enforced" },
]

export default function GovernmentPage() {
  return (
    <>
      <JsonLd schema={[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://aethoncore.com"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://aethoncore.com/industries"},{"@type":"ListItem","position":3,"name":"Government & Public Sector","item":"https://aethoncore.com/industries/government"}]}]} />
      <PageHero
        breadcrumbs={[{ label: "Industries", href: "/industries" }, { label: "Government & Public Sector" }]}
        eyebrow="Government & Public Sector"
        title="Government technology built to the rules your agency has to follow"
        subtitle="Infrastructure designed for the security, documentation, and reliability standards that government agencies are required to meet — built to those rules from the start, not adapted to them later."
        variant="dark"
        backgroundImageSrc="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=3840&q=100"
      />

      {/* Stats bar */}
      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-5">
                <p className="font-mono text-2xl font-semibold text-foreground tabular-nums">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Challenges */}
      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">The challenge</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Government technology must meet standards that stress most commercial systems
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              In terms of security, audit requirements, and reliability — government agencies operate at a higher standard than most commercial organizations. The infrastructure has to be built to those standards from the start, not adapted later.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {challenges.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-white p-6 dark:bg-card">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                  <item.icon className="h-5 w-5 text-blue" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Our approach</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Purpose-built for public sector requirements
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Government cloud isn't a feature we added. It's a purpose-built environment with dedicated operations, cleared staff, and the required authorizations in place.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div key={cap.title} className="rounded-xl border border-border bg-white p-6 dark:bg-background">
                <h3 className="mb-2 text-base font-semibold text-foreground">{cap.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
                <p className="font-mono text-xs font-semibold text-blue/80">{cap.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance frameworks */}
      <section className="bg-canvas py-20 lg:py-24">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Authorization coverage</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Authorizations and frameworks maintained
            </h2>
            <p className="mt-4 text-base text-canvas-muted">
              We don't apply for these authorizations when a client needs them. They're maintained continuously so agencies can benefit from our compliance coverage from day one.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {complianceFrameworks.map((fw) => (
              <div key={fw.name} className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <p className="mb-1 text-sm font-semibold text-white">{fw.name}</p>
                <p className="text-xs text-canvas-muted">{fw.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key differentiator callout */}
      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <div className="rounded-2xl border border-border bg-surface p-8 dark:bg-card lg:p-12">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Why it matters</p>
              <p className="text-xl font-semibold leading-snug text-foreground lg:text-2xl">
                "Government technology must meet standards that would stress most commercial systems — in terms of security, auditability, and reliability. We design to those standards from day one, not as an afterthought."
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-light">
                  <Building className="h-4 w-4 text-blue" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Aethon Core</p>
                  <p className="text-xs text-muted-foreground">Government & Public Sector Practice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="A federal, state, or local government agency?"
        subtitle="Our government team includes people with active security clearances and direct experience getting government systems certified, authorized, and operational."
        primaryLabel="Talk to our government team"
        primaryHref="/contact"
        secondaryLabel="View all use cases"
        secondaryHref="/case-studies"
      />
    </>
  )
}
