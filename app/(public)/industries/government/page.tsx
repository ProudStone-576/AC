import type { Metadata } from "next"
import {
   Building, ShieldCheck, Lock,
  FileText, Eye
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Government & Public Sector — Industries",
  description:
    "FedRAMP Authorized, StateRAMP compliant, and ITAR-capable infrastructure for federal, state, and local government agencies.",
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
      "Government procurement requires documentation that most commercial vendors don't maintain: System Security Plans, Security Assessment Reports, Authority to Operate packages, POA&M management. The paperwork is as important as the technology.",
  },
  {
    icon: Eye,
    title: "Continuous monitoring requirements",
    description:
      "FedRAMP requires continuous monitoring with monthly reporting to ISSM and AO. Most agencies don't have the internal staffing to run ConMon at scale. It has to be managed by the provider.",
  },
]

const capabilities = [
  {
    title: "FedRAMP High authorized infrastructure",
    description:
      "Our government cloud operates at FedRAMP High authorization level — the highest available for non-classified workloads. FISMA High controls implemented and continuously monitored. ATO packages maintained.",
    stat: "FedRAMP High · FISMA High",
  },
  {
    title: "StateRAMP compliant deployment",
    description:
      "State and local government agencies have the same security requirements as federal — with the added complexity of varying state-specific regulations. We maintain StateRAMP-compliant deployment models across multiple states.",
    stat: "StateRAMP authorized",
  },
  {
    title: "Air-gapped and isolated environments",
    description:
      "For workloads requiring physical separation from commercial cloud infrastructure, we offer fully air-gapped deployment in US government-controlled facilities. Network connectivity is explicit, logged, and controlled.",
    stat: "Air-gapped · physically isolated · US-only staff",
  },
  {
    title: "ITAR and EAR compliance",
    description:
      "Defense contractors and agencies handling controlled unclassified information need ITAR and EAR-compliant infrastructure. We maintain the required personnel controls, access restrictions, and export control documentation.",
    stat: "ITAR · EAR · CUI handling",
  },
  {
    title: "CMMC Level 3 support",
    description:
      "Defense Industrial Base contractors requiring CMMC certification need a cloud infrastructure that satisfies the technical controls. We provide CMMC-aligned environments with assessment support.",
    stat: "CMMC Level 3 · NIST SP 800-171",
  },
  {
    title: "Continuous monitoring as a service",
    description:
      "FedRAMP continuous monitoring requirements — monthly vulnerability scanning, ongoing security event monitoring, and regular reporting to your authorizing official — are all handled by our GovCloud operations team. Agencies get the reports; we run the program.",
    stat: "Continuous monitoring · monthly reporting",
  },
]

const complianceFrameworks = [
  { name: "FedRAMP High", scope: "Federal cloud service authorization" },
  { name: "StateRAMP", scope: "State and local government" },
  { name: "FISMA High", scope: "Federal information security" },
  { name: "ITAR", scope: "International arms regulations" },
  { name: "EAR", scope: "Export administration regulations" },
  { name: "CMMC Level 3", scope: "Defense industrial base" },
  { name: "NIST SP 800-171", scope: "CUI handling requirements" },
  { name: "IL4 / IL5", scope: "DoD impact level data" },
]

const stats = [
  { value: "FedRAMP", label: "High authorized" },
  { value: "ITAR", label: "Capable environments" },
  { value: "CMMC", label: "Level 3 support" },
  { value: "US-only", label: "Data residency, enforced" },
]

export default function GovernmentPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Industries", href: "/industries" }, { label: "Government & Public Sector" }]}
        eyebrow="Government & Public Sector"
        title="Government technology designed to those standards from day one"
        subtitle="FedRAMP Authorized, StateRAMP compliant, and ITAR-capable infrastructure for federal, state, and local agencies where the security and auditability requirements would stress most commercial platforms."
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
        subtitle="Our GovCloud team includes personnel with active clearances and deep experience with FedRAMP, FISMA, and DoD authorization processes."
        primaryLabel="Talk to our government team"
        primaryHref="/contact"
        secondaryLabel="View all use cases"
        secondaryHref="/case-studies"
      />
    </>
  )
}
