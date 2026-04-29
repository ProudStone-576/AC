import type { Metadata } from "next"
import Link from "next/link"
import {
  AlertTriangle, ArrowRight, CheckCircle2, Eye,
  FileText, Lock, Search, ShieldCheck, Users, Zap
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Security Center",
  description:
    "End-to-end threat detection, identity governance, and compliance automation. Designed for enterprises with zero tolerance for security failures.",
}

const pillars = [
  {
    icon: Eye,
    title: "24/7 Security Operations Center",
    description:
      "A dedicated SOC staffed by certified security engineers who monitor your environment around the clock. Not a shared service — your environment gets a named analyst team with context on your specific risks and architecture.",
    metrics: ["Detected in 4 minutes", "Contained in 18 minutes", "Resolved in < 2 hours (P1)"],
  },
  {
    icon: Lock,
    title: "Zero Trust security model",
    description:
      "Every user, device, and service is verified continuously — nothing is automatically trusted. If one system is compromised, it can't access other parts of your network.",
    metrics: ["Nothing trusted automatically", "Isolated by workload", "Continuous re-verification"],
  },
  {
    icon: AlertTriangle,
    title: "Threat intelligence correlation",
    description:
      "Feeds from 47 threat intelligence sources — commercial, government, and community — updated every 90 seconds and correlated against your environment's actual exposure. Not alerts. Contextualized, actionable intelligence.",
    metrics: ["47 intelligence feeds", "90-second update cycle", "Context-aware correlation"],
  },
  {
    icon: Search,
    title: "Continuous vulnerability management",
    description:
      "Automated scanning across cloud workloads, containers, endpoints, network devices, and code dependencies. Critical findings are prioritized by exploitability in your specific environment — not generic CVSS scores.",
    metrics: ["< 2hr critical finding response", "Context-aware prioritization", "Auto-escalation with remediation steps"],
  },
  {
    icon: Users,
    title: "Identity governance & PAM",
    description:
      "Automated access reviews, just-in-time privilege escalation, standing privilege elimination, and session recording for all privileged operations. Integrates with your existing IdP (Okta, Azure AD, Ping).",
    metrics: ["98% reduction in standing privileges", "All privileged sessions recorded", "Auto-provisioning and de-provisioning"],
  },
  {
    icon: Zap,
    title: "Automated incident response",
    description:
      "68% of security incidents are fixed automatically by our response workflows — no human needed. Analysts focus on new, complex threats rather than repeating the same response steps over and over.",
    metrics: ["68% incidents auto-fixed", "400+ response workflows", "Custom workflow development included"],
  },
  {
    icon: FileText,
    title: "Compliance automation",
    description:
      "Evidence collection, control mapping, and report generation are fully automated across 12 frameworks. Your next audit starts with a complete evidence package already assembled — your team reviews, not creates.",
    metrics: ["12 compliance frameworks", "Automated evidence collection", "Audit-ready reports on demand"],
  },
  {
    icon: ShieldCheck,
    title: "Penetration testing",
    description:
      "Adversarial testing by our red team using the same techniques as nation-state threat actors. Not a script scan. Quarterly external assessments, annual full-scope red team exercises, continuous automated attack simulation.",
    metrics: ["Quarterly external pen test", "Annual red team exercise", "Continuous BAS (breach & attack simulation)"],
  },
]

const certifications = [
  { name: "SOC 2 Type II", description: "Annual audit, report available under NDA" },
  { name: "ISO 27001", description: "Certified since 2008, annual recertification" },
  { name: "ISO 27017", description: "Cloud-specific security controls" },
  { name: "ISO 27018", description: "PII in cloud environments" },
  { name: "FedRAMP High", description: "Authorized for federal workloads" },
  { name: "HIPAA", description: "BAA available, HITRUST certified" },
  { name: "PCI DSS Level 1", description: "Merchant and service provider" },
  { name: "GDPR", description: "DPA available, EU data residency enforced" },
  { name: "CCPA", description: "California privacy compliance" },
  { name: "NIST CSF", description: "Full framework implementation" },
  { name: "CIS Controls v8", description: "All 18 control groups implemented" },
  { name: "CMMC Level 3", description: "Defense contractor compliance" },
]

const incidentPhases = [
  { phase: "Detect", sla: "≤ 4 min", description: "Automated correlation identifies anomaly and creates incident", color: "border-blue/30 bg-blue/[0.05]" },
  { phase: "Triage", sla: "≤ 8 min", description: "Analyst reviews context, confirms severity, assigns response team", color: "border-blue/20 bg-blue/[0.03]" },
  { phase: "Contain", sla: "≤ 18 min", description: "Affected systems isolated, spread to other systems blocked, credentials rotated", color: "border-white/12 bg-white/[0.03]" },
  { phase: "Eradicate", sla: "≤ 2 hr (P1)", description: "Root cause identified, threat actor evicted, entry point closed", color: "border-white/10 bg-white/[0.02]" },
  { phase: "Recover", sla: "≤ 4 hr (P1)", description: "Services restored, integrity verified, monitoring heightened", color: "border-white/8 bg-white/[0.02]" },
  { phase: "Report", sla: "≤ 24 hr", description: "Board-ready incident report with timeline, impact, and lessons learned", color: "border-white/6 bg-transparent" },
]

const threatCoverage = [
  { category: "Perimeter", items: ["DDoS mitigation", "Web application firewall", "DNS filtering", "Email security gateway", "VPN anomaly detection"] },
  { category: "Identity", items: ["Credential stuffing detection", "Brute force protection", "Impossible travel alerts", "MFA bypass detection", "Service account monitoring"] },
  { category: "Endpoint", items: ["EDR/XDR deployment", "Living-off-the-land detection", "Ransomware behavior monitoring", "USB and removable media control", "Application allowlisting"] },
  { category: "Cloud & Workload", items: ["Cloud misconfiguration detection", "Container escape detection", "Serverless function monitoring", "API abuse detection", "Data exfiltration prevention"] },
  { category: "Network", items: ["East-west traffic analysis", "Encrypted traffic inspection", "Protocol anomaly detection", "DNS tunneling detection", "Network behavior analytics"] },
  { category: "Data", items: ["DLP across cloud and on-prem", "Database activity monitoring", "Sensitive data discovery", "Shadow IT detection", "Insider threat analytics"] },
]

const securityCaseStudies = [
  {
    client: "Healthcare",
    industry: "Zero Trust Architecture",
    challenge: "A large health network running on outdated security controls designed a decade ago. Compliance audits pass, but the real vulnerabilities — paths attackers can move through, unencrypted traffic inside the network, accounts with too much access — remain unaddressed.",
    outcome: "We implement Zero Trust security from the ground up: nothing trusted automatically, continuous verification, and encrypted paths throughout. HIPAA compliance becomes part of how the system is built, not just a document to maintain.",
    stat: "No implicit trust",
  },
  {
    client: "Financial Services",
    industry: "Privileged Access Management",
    challenge: "A regulated financial firm with gaps in privileged access management and insufficient logging for regulatory audit requirements. The security team knows the exposure exists but lacks the tooling to close it systematically.",
    outcome: "PAM deployed with all privileged sessions recorded and fully queryable. Audit preparation moves from a manual, multi-week exercise to an automated evidence export. Regulators see a complete, verifiable record.",
    stat: "Full session auditability",
  },
]

export default function SecurityPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: "Security Center" }]}
        eyebrow="Product"
        title="Security that runs as deep as your infrastructure"
        subtitle="Security that is an architectural property — not a product layer bolted on after the fact. Built for enterprises where a breach is not an option."
        backgroundImageSrc="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=3840&q=100"
        variant="dark"
      />

      {/* Stats */}
      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
            {[
              { value: "99.99%", label: "Uptime SLA for managed security environments" },
              { value: "4 min", label: "Average time to detect a threat" },
              { value: "68%", label: "Incidents auto-remediated by SOAR" },
              { value: "12", label: "Compliance frameworks supported" },
            ].map((s) => (
              <div key={s.label} className="px-6 py-5">
                <p className="font-mono text-2xl font-semibold text-foreground tabular-nums">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security pillars */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Capabilities</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Every way an attacker could get in, covered
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Security that's integrated into your infrastructure — not sitting alongside it. Every capability is connected to every other, sharing context and coordinating response.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-white p-6 shadow-sm hover:shadow-md hover:border-blue/20 transition-all dark:bg-card">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-light">
                    <p.icon className="h-5 w-5 text-blue" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.metrics.map((m) => (
                    <span key={m} className="rounded-md bg-blue-light px-2.5 py-1 font-mono text-[11px] font-semibold text-blue-light-foreground">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat coverage */}
      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Threat coverage</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Every vector. Every layer.
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              The Security Center doesn't monitor one layer in isolation. Coverage spans perimeter to data — every attack path, correlated in a unified detection graph.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {threatCoverage.map((group) => (
              <div key={group.category} className="rounded-xl border border-border bg-white p-6 dark:bg-background">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-blue">{group.category}</p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <div className="h-1 w-1 flex-shrink-0 rounded-full bg-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident response */}
      <section className="bg-canvas py-20 lg:py-24">
        <div className="container-enterprise">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Incident response</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              When something happens, we act — not just alert
            </h2>
            <p className="mt-4 text-base text-canvas-muted">
              Most security vendors send you an alert and wait for your team to respond. We own the response. Our SOC has the tools, authority, and pre-approved playbooks to contain and remediate.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-2">
            {incidentPhases.map((step, i) => (
              <div key={step.phase} className={`flex items-center justify-between rounded-xl border px-6 py-4 ${step.color}`}>
                <div className="flex items-center gap-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] font-mono text-[11px] font-bold text-white/50">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white/90">{step.phase}</p>
                    <p className="text-xs text-canvas-muted">{step.description}</p>
                  </div>
                </div>
                <span className="font-mono text-sm font-bold text-blue flex-shrink-0 ml-4">{step.sla}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 mx-auto max-w-3xl grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { label: "Dedicated incident commander", sub: "Assigned immediately on P1 declaration" },
              { label: "Board-ready report in 24 hours", sub: "Timeline, impact, root cause, remediation" },
              { label: "Post-incident review", sub: "30-day follow-up on systemic fixes" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-5 text-center">
                <CheckCircle2 className="h-5 w-5 text-blue mx-auto mb-2" />
                <p className="text-sm font-semibold text-white/80">{item.label}</p>
                <p className="mt-1 text-xs text-canvas-muted">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Compliance</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              12 frameworks. Evidence generated automatically.
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Compliance evidence collection is fully automated. Every control is mapped across every applicable framework. Your audit starts with a complete evidence package — your team reviews and signs off, not assembles from scratch.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex items-start gap-3 rounded-xl border border-border bg-white p-5 dark:bg-card">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-blue mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{cert.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-blue/20 bg-blue-light p-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-center">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Request a compliance readiness report</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We'll map your current infrastructure against your target frameworks and produce a gap analysis with a prioritized remediation roadmap. Most clients receive this within 5 business days.
                </p>
              </div>
              <div className="lg:text-right">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-blue px-5 py-3 text-sm font-semibold text-blue-foreground transition-colors hover:bg-blue-hover glow-blue"
                >
                  Request readiness report
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">In production</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              How we approach high-stakes security challenges
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {securityCaseStudies.map((cs) => (
              <div key={cs.client} className="grid grid-cols-1 gap-0 rounded-xl border border-border overflow-hidden">
                <div className="bg-white p-6 dark:bg-card">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue">{cs.industry}</p>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base font-semibold text-foreground">{cs.client}</h3>
                    <p className="font-mono text-xl font-bold text-foreground flex-shrink-0">{cs.stat}</p>
                  </div>
                </div>
                <div className="border-t border-border bg-surface p-6 dark:bg-background">
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">The Challenge</p>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Our Approach</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{cs.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Common questions</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              What security teams ask before they sign
            </h2>
          </div>
          <div className="mx-auto max-w-3xl divide-y divide-border">
            {[
              {
                q: "How does the Aethon Core SOC access our environment?",
                a: "All SOC analyst access is just-in-time, time-bounded, and recorded. Analysts cannot access your environment without an active, approved incident or change request. Access sessions are fully recorded and stored in the audit trail you own. You receive a monthly access report.",
              },
              {
                q: "What is your process when you discover a critical vulnerability in our environment?",
                a: "Critical findings (CVSS 9.0+, or exploitable in your specific context) are escalated to your designated security contact within 2 hours of discovery — any time of day. We provide a contextualized write-up with exploitability analysis and remediation steps, not just a CVE number.",
              },
              {
                q: "How do you handle security incidents that involve potential Aethon Core infrastructure?",
                a: "We treat incidents involving our own infrastructure with maximum transparency. If an incident could have affected your environment — even if it didn't — you are notified within 4 hours. We have never had an incident that reached a client environment.",
              },
              {
                q: "Can we retain our existing security tools (CrowdStrike, Splunk, etc.)?",
                a: "Yes. The Security Center is designed to operate alongside and integrate with your existing investments. We provide native integrations for CrowdStrike, SentinelOne, Splunk, Microsoft Sentinel, Splunk, QRadar, and 30+ other platforms. We consume their telemetry and feed our findings back.",
              },
              {
                q: "What is your approach to zero-day vulnerabilities?",
                a: "We maintain a dedicated threat research team that monitors zero-day disclosures. For zero-days affecting technology in your environment, our response process starts before public disclosure when we have advance notification — which we receive through our membership in coordinated vulnerability disclosure programs.",
              },
            ].map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="text-base font-semibold text-foreground">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Get a free security review at no cost"
        subtitle="Our team reviews your environment and identifies your top three critical vulnerabilities. No sales pitch. Just the real picture."
        primaryLabel="Request security assessment"
        primaryHref="/contact"
        secondaryLabel="Download security overview"
        secondaryHref="/resources/white-papers"
      />
    </>
  )
}
