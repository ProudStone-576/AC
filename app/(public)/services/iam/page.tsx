import { JsonLd } from "@/components/ui/JsonLd"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, CheckCircle2,
  Key, Lock, Shield, Users, Eye, Fingerprint,
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { IamHeroVisual } from "@/components/ui/ServiceHeroVisuals"
import { CTASection } from "@/components/sections/CTASection"
import { FadeIn } from "@/components/ui/FadeIn"
import { FaqAccordion } from "@/components/ui/FaqAccordion"

const rightFor = [
  "Your people use separate passwords for every system — and no one can enforce MFA consistently",
  "Offboarding an employee takes more than 24 hours and involves manual tickets",
  "Admin accounts have permanent privileges rather than just-in-time access",
  "You need SSO or MFA for a compliance deadline — SOC 2, ISO 27001, HIPAA, or similar",
  "You've had a breach or near-miss caused by a stolen or reused password",
]

const notRightFor = [
  "You need a one-time password reset for a single system — that's not a program",
  "You have fewer than 50 users and a single application environment",
]

const faqs: { q: string; a: string }[] = [
  {
    q: "What is IAM in plain terms?",
    a: "Identity and Access Management is the set of systems and processes that control who can log in to what, what they can do once they're in, and what happens to their access when they leave. Done well, it means the right people can access what they need and nothing they don't — and that access gets cleaned up automatically when someone moves or leaves.",
  },
  {
    q: "What is SSO and why does it matter?",
    a: "Single sign-on means your people log in once — to one identity provider — and that login covers every application they're authorized for. It removes password sprawl, allows you to enforce MFA in one place rather than per application, and means deprovisioning someone takes minutes rather than hunting through every system they ever accessed.",
  },
  {
    q: "How long does an IAM implementation take?",
    a: "Assessment and design typically take two to four weeks. Deploying the core program — SSO, PAM, MFA — runs four to fourteen weeks depending on how many applications need to be federated and the complexity of your directory. A full governance program with access reviews takes sixteen weeks or longer.",
  },
  {
    q: "We already have Active Directory or Azure AD — what would you change?",
    a: "Usually quite a lot. Having AD or Entra ID is a starting point, not a finished IAM program. We commonly find AD environments with orphaned accounts, service accounts with stale credentials, no JIT access for admin roles, and limited MFA coverage. We work within what you have — we don't require you to replace it.",
  },
  {
    q: "What happens when someone leaves the organization?",
    a: "With a properly implemented IAM program, deprovisioning is automatic. We integrate with your HR system so that when an employment record is terminated, access is revoked on the same day — not when someone files a helpdesk ticket. This is one of the most common IAM gaps we find.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on your starting point, the number of applications to federate, and the compliance frameworks in scope. We scope engagements after an identity assessment — we can tell you far more accurately after we see what you have.",
  },
]

export const metadata: Metadata = {
  title: "Identity & Access Management Canada | Zero Trust IAM | Aethon Core",
  description: "Enterprise IAM services in Canada. SSO, MFA, PAM, Zero Trust identity architecture, and directory services for organizations where access control is mission-critical. British Columbia & national.",
  keywords: [
    "identity access management Canada",
    "IAM services Canada",
    "Zero Trust IAM Canada",
    "PAM Canada",
    "privileged access management Canada",
    "SSO implementation Canada",
    "MFA deployment Canada",
    "identity security Canada",
    "enterprise IAM British Columbia",
  ],
  alternates: { canonical: "https://aethoncore.com/services/iam" },
  openGraph: {
    type: "website", locale: "en_CA", url: "https://aethoncore.com/services/iam",
    siteName: "Aethon Core",
    title: "Identity & Access Management Canada | Zero Trust IAM | Aethon Core",
    description: "Enterprise IAM services in Canada. SSO, MFA, PAM, Zero Trust identity architecture, and directory services for organizations where access control is mission-critical. British Columbia & national.",
  },
}

const capabilities = [
  {
    icon: Key,
    title: "Single sign-on (SSO) and federation",
    description:
      "SAML 2.0 and OIDC federation across your application landscape. A single identity provider that your workforce uses for every application — cloud SaaS, on-premise applications, and your own products. SSO adoption removes password sprawl, enables centralized MFA enforcement, and gives you a single place to deprovision access when an employee leaves.",
    note: "Protocols: SAML 2.0, OIDC, OAuth 2.0 · Providers: Okta, Entra ID, Ping, custom IdP",
  },
  {
    icon: Users,
    title: "Directory services and lifecycle management",
    description:
      "Active Directory and Azure AD design, deployment, and management. Identity lifecycle workflows — joiner, mover, leaver — that deprovision access reliably and on schedule. HR system integration so identity changes happen when employment changes happen, not when someone notices.",
    note: "AD · Azure AD / Entra ID · LDAP · HR system SCIM integration",
  },
  {
    icon: Lock,
    title: "Privileged access management (PAM)",
    description:
      "No permanent privileged access. Access granted only when needed, with approval workflows, session recording, and a full audit trail. Service accounts are catalogued, rotated, and managed. Stolen privileged credentials are one of the most common ways attackers breach organizations — we eliminate that risk.",
    note: "JIT access · Session recording · Credential vaulting · Automated rotation",
  },
  {
    icon: Fingerprint,
    title: "Multi-factor authentication (MFA) programs",
    description:
      "MFA deployment and enforcement across your application landscape. Phishing-resistant MFA (FIDO2 / WebAuthn) for privileged and high-risk access scenarios. Risk-based adaptive MFA that requires step-up authentication when context suggests elevated risk — without adding friction to every login.",
    note: "FIDO2 · WebAuthn · Push MFA · Risk-based adaptive authentication",
  },
  {
    icon: Shield,
    title: "Zero Trust identity model",
    description:
      "Every access request is evaluated based on who you are, what device you're using, and the context at the time of the request — not where you're logging in from. We implement continuous verification, per-request policy checks, and encrypted service-to-service communication.",
    note: "Per-request verification · Device security checks · Service-to-service mTLS",
  },
  {
    icon: Eye,
    title: "Identity governance and access reviews",
    description:
      "Access review programs that tell you who has access to what — and whether they should. Automated access certifications sent to data owners on a defined schedule. Unused access detected and removed. Segregation-of-duties violations identified and remediated. Identity governance is required for SOX, SOC 2, ISO 27001, and most financial services frameworks.",
    note: "Access certifications · SoD enforcement · Orphaned account detection",
  },
]

const complianceMapping = [
  { framework: "SOC 2", controls: "CC6.1, CC6.2, CC6.3", requirement: "Logical and physical access controls, user registration and de-provisioning, access review" },
  { framework: "ISO 27001", controls: "A.9 — Access control", requirement: "Access control policy, user access management, privileged access management, review of access rights" },
  { framework: "PCI DSS", controls: "Req. 7, 8", requirement: "Restrict access to cardholder data, identify and authenticate access, prohibit group/shared credentials" },
  { framework: "HIPAA", controls: "§164.312(a)", requirement: "Access control — unique user identification, emergency access, automatic logoff, encryption" },
  { framework: "FedRAMP", controls: "AC-2, AC-3, AC-6, AC-17", requirement: "Account management, access enforcement, least privilege, remote access" },
  { framework: "DORA", controls: "ICT risk management", requirement: "IAM controls as part of ICT risk management framework — privileged access and access reviews" },
]

const phases = [
  {
    phase: "Assess",
    duration: "Week 1–2",
    description:
      "We document your current identity landscape — IdPs, directories, application SSO adoption, MFA coverage, privileged account inventory, and access review processes. Current-state gaps are mapped to your compliance requirements. The privileged account inventory almost always surfaces accounts that the organization didn't know about.",
    deliverable: "Identity landscape assessment + privileged account inventory + gap analysis",
  },
  {
    phase: "Design",
    duration: "Week 2–4",
    description:
      "Target IAM architecture is designed: IdP selection or consolidation, SSO federation scope, PAM program design, lifecycle management workflows, and MFA rollout plan. The design is reviewed against your compliance requirements and your operational constraints.",
    deliverable: "IAM target architecture + compliance control mapping",
  },
  {
    phase: "Deploy",
    duration: "Week 4–14",
    description:
      "IdP deployment or configuration, SSO integration for priority applications, PAM tooling deployment, MFA rollout, and lifecycle automation. Applications are migrated to SSO in priority order — starting with the highest-risk applications and working toward full coverage.",
    deliverable: "Deployed IAM platform + SSO-integrated applications + PAM program",
  },
  {
    phase: "Govern",
    duration: "Week 12–16",
    description:
      "Access review processes are established. Access certification campaigns are configured and first run. SoD policies are defined and enforced. Orphaned account detection is automated. The governance program produces the compliance evidence required by your frameworks.",
    deliverable: "Access governance program + first certification campaign results",
  },
  {
    phase: "Operate",
    duration: "Ongoing",
    description:
      "Quarterly access reviews, annual PAM program assessments, MFA adoption monitoring, and identity lifecycle audit reporting. IAM changes to applications are reviewed through a defined process. Compliance evidence packages are generated on demand.",
    deliverable: "Ongoing governance cadence + compliance evidence on demand",
  },
]

const useCases = [
  {
    industry: "Financial Services",
    title: "Privileged access management for a SOX-regulated environment",
    challenge:
      "A financial institution has 340 privileged accounts identified in their last internal audit — 180 of them are service accounts with passwords that haven't rotated in over a year, and 60 are ex-employee accounts that were never deprovisioned. The external auditors have issued findings on privileged access management for two consecutive years.",
    approach:
      "We deploy a PAM platform with credential vaulting and automated rotation for all service accounts. Ex-employee accounts are deprovisioned immediately. Just-in-time access workflows replace standing privileged access for administrator accounts. The next external audit receives a comprehensive PAM evidence package instead of a finding.",
  },
  {
    industry: "Healthcare",
    title: "SSO and HIPAA access control for a multi-application clinical environment",
    challenge:
      "A health system has 47 clinical applications with independent login credentials. Clinical staff maintain 12+ passwords on average. MFA is enforced on some applications and not others. When a clinician leaves, their accounts are deprovisioned manually — a process that takes an average of 11 days and is frequently incomplete.",
    approach:
      "We federate 41 of the 47 applications to a central IdP using SAML 2.0. Phishing-resistant MFA is enforced at the IdP level — one MFA authentication covers all federated applications. Lifecycle automation integrates with the HR system so deprovisioning happens on the last day of employment, not 11 days later. HIPAA access control requirements are satisfied as a byproduct.",
  },
]

export default function IAMPage() {
  return (
    <>
      <JsonLd schema={[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://aethoncore.com"},{"@type":"ListItem","position":2,"name":"Services","item":"https://aethoncore.com/services"},{"@type":"ListItem","position":3,"name":"Identity & Access Management","item":"https://aethoncore.com/services/iam"}]},{"@context":"https://schema.org","@type":"Service","name":"Identity & Access Management","url":"https://aethoncore.com/services/iam","provider":{"@type":"Organization","name":"Aethon Core Inc.","url":"https://aethoncore.com"},"areaServed":[{"@type":"Country","name":"Canada"},{"@type":"Country","name":"United States"}],"serviceType":"Identity & Access Management"}]} />
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Identity & Access Management" }]}
        eyebrow="Specialized"
        title="Identity programs that close the vulnerabilities your old security setup left open"
        subtitle="SSO, PAM, MFA, and Zero Trust identity architecture — designed for enterprises where access control is a compliance requirement and a security imperative simultaneously."
        variant="tinted"
        visual={<IamHeroVisual />}
      />

      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-in">
            <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
              {[
                { value: "Zero", label: "Standing privileged access — PAM target" },
                { value: "JIT", label: "Just-in-time access for privileged sessions" },
                { value: "Day 0", label: "Deprovisioning with HR system integration" },
                { value: "6+", label: "Compliance frameworks addressed" },
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

      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">IAM capabilities</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Identity as a security program, not an IT administration task
              </h2>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((cap) => (
                <div key={cap.title} className="group rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue/20 dark:bg-card">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                    <cap.icon className="h-5 w-5 text-blue" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">{cap.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
                  <p className="font-mono text-xs font-semibold text-blue/80">{cap.note}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-24 dark:bg-card">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Compliance mapping</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                IAM controls mapped to your regulatory requirements
              </h2>
            </div>
          </FadeIn>
          <FadeIn variant="fade-in">
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-surface dark:bg-muted">
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">Framework</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground hidden sm:table-cell">Controls</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">IAM requirement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {complianceMapping.map((row, i) => (
                    <tr key={row.framework} className={i % 2 === 0 ? "bg-white dark:bg-card" : "bg-surface dark:bg-background"}>
                      <td className="px-6 py-3.5">
                        <span className="inline-flex rounded-full bg-blue-light px-2.5 py-0.5 text-xs font-semibold text-blue">{row.framework}</span>
                      </td>
                      <td className="px-6 py-3.5 font-mono text-xs text-muted-foreground hidden sm:table-cell">{row.controls}</td>
                      <td className="px-6 py-3.5 text-sm text-foreground/80">{row.requirement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">How we work</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                From identity sprawl to a governed access program
              </h2>
            </div>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden sm:block" aria-hidden="true" />
            <div className="space-y-6">
              {phases.map((step, i) => (
                <FadeIn key={step.phase} variant="fade-up" delay={i * 60}>
                  <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-[180px_1fr] sm:gap-8 sm:pl-20">
                    <div className="hidden sm:flex sm:absolute sm:left-0 sm:top-0 sm:h-16 sm:w-16 sm:items-center sm:justify-center sm:rounded-full sm:border sm:border-border sm:bg-white sm:shadow-sm dark:sm:bg-card">
                      <span className="font-mono text-xs font-bold text-blue">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue">{step.phase}</p>
                      <p className="font-mono text-xs text-muted-foreground">{step.duration}</p>
                    </div>
                    <div className="rounded-xl border border-border bg-white p-5 dark:bg-card">
                      <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-blue" />
                        <p className="text-xs font-semibold text-foreground/70">{step.deliverable}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas py-20 lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="blur-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Use Cases</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                IAM programs that address real risk
              </h2>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {useCases.map((uc) => (
                <div key={uc.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-8">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue">{uc.industry}</p>
                  <h3 className="mb-4 text-lg font-semibold text-white">{uc.title}</h3>
                  <div className="mb-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-canvas-muted mb-1">The Situation</p>
                    <p className="text-sm text-canvas-muted leading-relaxed">{uc.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-canvas-muted mb-1">Our Approach</p>
                    <p className="text-sm text-white/80 leading-relaxed">{uc.approach}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <div className="mt-8 text-center">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-medium text-blue hover:text-blue-hover transition-colors">
              See all use cases <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Is this right for you */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="rounded-2xl border border-border bg-surface p-8 dark:bg-card lg:p-12">
              <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-blue">Is this right for you?</p>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <p className="mb-4 text-sm font-semibold text-foreground">This is a good fit if you…</p>
                  <ul className="space-y-3">
                    {rightFor.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-foreground/75">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-4 text-sm font-semibold text-foreground">You might want to start elsewhere if…</p>
                  <ul className="space-y-3">
                    {notRightFor.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-blue hover:text-blue-hover transition-colors">
                      Not sure which service fits? Talk to us first — it&apos;s free.
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Common questions */}
      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Common questions</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Questions people ask before getting started
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Plain answers. No jargon. If something isn&apos;t covered here, just ask us directly.
              </p>
            </div>
          </FadeIn>
          <FadeIn variant="fade-in">
            <FaqAccordion faqs={faqs} />
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Know how many privileged accounts you actually have?"
        subtitle="Most organizations don't. A one-day identity assessment will tell you — and show you which ones represent the highest risk."
        primaryLabel="Book an identity assessment"
        primaryHref="/contact?inquiry=iam"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  )
}
