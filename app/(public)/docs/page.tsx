import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, Code2, Terminal,
  Shield, GitBranch, Mail
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { DocsSearch } from "./_components/DocsSearch"

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Technical documentation, API reference, SDK guides, and integration tutorials for the Aethon Core Platform.",
}

const quickLinks = [
  {
    icon: Terminal,
    title: "Quickstart",
    description: "Connect your first environment to the Aethon Core Platform in under 30 minutes.",
    tag: "Start here",
  },
  {
    icon: Code2,
    title: "API Reference",
    description: "Complete REST and gRPC API documentation with request/response schemas and example calls.",
    tag: "Reference",
  },
  {
    icon: GitBranch,
    title: "Terraform Provider",
    description: "Full resource reference for the Aethon Core Terraform provider with worked examples.",
    tag: "IaC",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "How the platform implements HIPAA, PCI DSS, FedRAMP, and NERC CIP controls by design.",
    tag: "Compliance",
  },
]

const docSections: {
  icon: "code" | "globe" | "layers" | "shield" | "terminal" | "zap"
  title: string
  description: string
  articles: string[]
}[] = [
  {
    icon: "layers",
    title: "Platform Concepts",
    description: "Architecture overview, core abstractions, and how the Aethon Core Platform models your infrastructure.",
    articles: [
      "Platform architecture overview",
      "Control plane and execution layer",
      "Policy engine and OPA integration",
      "Identity and access model",
      "Audit trail and immutable logging",
    ],
  },
  {
    icon: "terminal",
    title: "Getting Started",
    description: "Step-by-step guides for onboarding your first environment and understanding core workflows.",
    articles: [
      "30-minute quickstart",
      "Connecting your first cloud account",
      "Importing existing infrastructure",
      "Setting up your first policy",
      "Inviting your team",
    ],
  },
  {
    icon: "code",
    title: "API & SDKs",
    description: "Full API reference documentation and SDKs for integrating the platform into your workflows.",
    articles: [
      "REST API reference",
      "gRPC API reference",
      "GraphQL API reference",
      "Python SDK",
      "Go SDK",
    ],
  },
  {
    icon: "globe",
    title: "Infrastructure as Code",
    description: "GitOps-native workflows using Terraform, Pulumi, Crossplane, and the Aethon Core CLI.",
    articles: [
      "Terraform provider reference",
      "Pulumi provider",
      "Crossplane provider",
      "CLI reference",
      "GitOps workflow guide",
    ],
  },
  {
    icon: "shield",
    title: "Security & Compliance",
    description: "Compliance control mappings, security architecture guides, and audit report generation.",
    articles: [
      "Zero Trust network architecture",
      "FedRAMP control mapping",
      "HIPAA implementation guide",
      "PCI DSS configuration guide",
      "Generating audit evidence packages",
    ],
  },
  {
    icon: "zap",
    title: "Integrations",
    description: "Connection guides for the 400+ platforms and tools the Aethon Core Platform integrates with.",
    articles: [
      "AWS integration",
      "Azure integration",
      "Google Cloud integration",
      "Datadog integration",
      "All integrations",
    ],
  },
]

const platformSpecs = [
  { spec: "API protocols", value: "REST, gRPC, GraphQL, WebSocket" },
  { spec: "Auth methods", value: "SAML 2.0, OIDC, mTLS, API keys, LDAP/AD" },
  { spec: "Rate limits", value: "2M API calls/minute (Enterprise Plus)" },
  { spec: "SDK languages", value: "Python, Go, TypeScript, Java, Ruby" },
  { spec: "Webhook events", value: "140+ event types across all resource types" },
  { spec: "API versioning", value: "Stable v2 · preview endpoints clearly marked" },
]

export default function DocsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Documentation" }]}
        eyebrow="Documentation"
        title="Everything your engineers need to build and run on Aethon Core"
        subtitle="API reference, IaC provider docs, architecture guides, and compliance implementation references — written by the engineers who built the platform."
        variant="tinted"
        backgroundImageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=3840&q=100"
      />

      {/* Quick links */}
      <section className="bg-white py-16 dark:bg-background lg:py-20">
        <div className="container-enterprise">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-blue">Start here</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href="/contact?inquiry=docs"
                className="group flex flex-col rounded-xl border border-border bg-white p-6 transition-all hover:border-blue/30 hover:shadow-sm dark:bg-card"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                    <link.icon className="h-5 w-5 text-blue" />
                  </div>
                  <span className="rounded-full bg-surface px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground dark:bg-muted">
                    {link.tag}
                  </span>
                </div>
                <h3 className="mb-2 text-sm font-semibold text-foreground group-hover:text-blue transition-colors">
                  {link.title}
                </h3>
                <p className="flex-1 text-xs leading-relaxed text-muted-foreground">{link.description}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-blue">
                  Request access
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Doc sections — searchable index */}
      <DocsSearch sections={docSections} />

      {/* API specs table */}
      <section className="bg-canvas py-16 lg:py-20">
        <div className="container-enterprise">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">API specifications</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              The technical details your integration team needs
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10">
            <table className="w-full">
              <tbody className="divide-y divide-white/10">
                {platformSpecs.map((row, i) => (
                  <tr key={row.spec} className={i % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"}>
                    <td className="px-6 py-3.5 text-sm font-semibold text-white/60 w-1/3">{row.spec}</td>
                    <td className="px-6 py-3.5 font-mono text-sm text-white/90">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact for docs access */}
      <section className="bg-white py-16 dark:bg-background lg:py-20">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 gap-6 rounded-2xl border border-border bg-surface p-8 dark:bg-card sm:grid-cols-2 lg:p-10">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                <Mail className="h-5 w-5 text-blue" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Request documentation access</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Full documentation is being prepared for early access clients. Contact us to request access for your team and we'll set you up directly.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 sm:items-end">
              <Link
                href="/contact?inquiry=docs"
                className="inline-flex items-center gap-2 rounded-md bg-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-hover"
              >
                Request access
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-xs text-muted-foreground">Typically responded to within 1 business day</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variant="surface"
        title="Have a specific technical question?"
        subtitle="Our engineering team answers technical questions directly. No support ticket queues for enterprise clients."
        primaryLabel="Contact engineering support"
        primaryHref="/contact"
        secondaryLabel="Browse insights"
        secondaryHref="/insights"
      />
    </>
  )
}
