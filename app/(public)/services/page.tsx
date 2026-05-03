import type { Metadata } from "next"
import { Fragment } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart2, Cloud, Compass, Cpu, Database, GitMerge, Headphones, Key, Layout, Layers, Network, RefreshCw, Search, Shield, Users } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Enterprise IT Services Canada | Cloud, Security, Network & Data | Aethon Core",
  description: "Full spectrum enterprise IT services: managed IT, cloud infrastructure, cybersecurity, network, data, AI, compliance, and digital transformation. Delivered with contractual accountability across Canada.",
  keywords: [
    "enterprise IT services Canada",
    "IT services Canada",
    "managed IT services Canada",
    "cloud services Canada",
    "cybersecurity services Canada",
    "IT services British Columbia",
    "enterprise technology services Canada",
    "IT company Canada",
    "full managed services Canada",
  ],
  alternates: { canonical: "https://aethoncore.com/services" },
  openGraph: {
    type: "website", locale: "en_CA", url: "https://aethoncore.com/services",
    siteName: "Aethon Core",
    title: "Enterprise IT Services Canada | Cloud, Security, Network & Data | Aethon Core",
    description: "Full spectrum enterprise IT services: managed IT, cloud infrastructure, cybersecurity, network, data, AI, compliance, and digital transformation. Delivered with contractual accountability across Canada.",
  },
}

const serviceCategories = [
  {
    category: "Advisory",
    description: "Strategic guidance before you build or buy anything.",
    services: [
      {
        title: "Strategy Consulting",
        description:
          "We work with your leadership team to build a clear technology roadmap. Engagements run 8–12 weeks and deliver a board-ready plan with defined milestones.",
        icon: Compass,
        href: "/services/consulting",
        highlights: ["Digital transformation roadmaps", "M&A technology due diligence", "Board-level technology advisory", "Vendor selection and evaluation"],
      },
      {
        title: "Architecture Review",
        description:
          "We review your current technology setup and tell you what's risky, what's redundant, and what to fix first. Done by senior engineers with deep experience in your industry.",
        icon: Layout,
        href: "/services/architecture",
        highlights: ["Technology risk assessment", "Cloud readiness check", "Security review", "Performance and growth audit"],
      },
      {
        title: "Infrastructure Assessment",
        description:
          "A focused review of how your technology is set up. We tell you what's working, what's at risk, and what to fix — in priority order, with a clear action plan.",
        icon: Search,
        href: "/services/assessment",
        highlights: ["Architecture and reliability review", "Security gaps assessment", "Recovery time gap analysis", "Prioritized action plan"],
      },
      {
        title: "Compliance & Audit Readiness",
        description:
          "We get your company ready to pass security certifications — SOC 2 (the standard for software companies), ISO 27001 (international security standard), FedRAMP (required to sell to US government), HIPAA (health data), PCI DSS (credit cards), and more. Built to pass every year, not just once.",
        icon: Shield,
        href: "/services/compliance",
        highlights: ["SOC 2 Type II readiness", "ISO 27001 certification", "FedRAMP authorization support", "Multiple certifications managed together"],
      },
    ],
  },
  {
    category: "Delivery",
    description: "Execution you can depend on, at any scale.",
    services: [
      {
        title: "Implementation",
        description:
          "We handle full deployment of Aethon Core and other enterprise platforms. We transfer knowledge to your team throughout — so you don't need to rely on us longer than necessary.",
        icon: GitMerge,
        href: "/services/implementation",
        highlights: ["Platform deployment and migration", "ERP and CRM integration", "Data pipeline implementation", "Custom API development"],
      },
      {
        title: "Managed Services",
        description:
          "Our certified engineers manage your infrastructure around the clock. You get a dedicated service manager and clear escalation paths — not a generic support queue.",
        icon: Headphones,
        href: "/services/managed",
        highlights: ["24/7 infrastructure monitoring", "Incident management and response", "Patch management and updates", "Capacity planning and optimization"],
      },
      {
        title: "Training & Enablement",
        description:
          "We train your technical teams, IT managers, and leadership. Available on-site, virtually, or online. Certification tracks available for every Aethon Core product.",
        icon: Users,
        href: "/services/training",
        highlights: ["Technical certification programs", "Executive leadership workshops", "Custom curriculum development", "Ongoing competency assessment"],
      },
      {
        title: "Software Delivery & DevOps",
        description:
          "We set up the systems your developers use to build and release software. The goal: cut the time it takes to ship code from weeks to minutes.",
        icon: Layers,
        href: "/services/devops",
        highlights: ["Automated build and deployment pipelines", "Developer self-service platforms", "Infrastructure automation", "Delivery speed tracking"],
      },
      {
        title: "Network & Connectivity",
        description:
          "We design and manage the networks connecting your offices, data centers, and cloud systems. Fast, reliable, and secure by default.",
        icon: Network,
        href: "/services/network",
        highlights: ["Private WAN and managed network connections", "Secure remote access", "Data center connectivity", "Cloud network connections"],
      },
      {
        title: "Backup & Disaster Recovery",
        description:
          "We build and regularly test your disaster recovery plan. How fast you can recover — and how much data you can afford to lose — is written into your contract.",
        icon: RefreshCw,
        href: "/services/disaster-recovery",
        highlights: ["Recovery in under 15 minutes for critical systems", "Annual disaster recovery tests", "Business continuity documentation", "100% backup verification"],
      },
    ],
  },
  {
    category: "Specialized",
    description: "Deep expertise for your most complex technology challenges.",
    services: [
      {
        title: "Login & Access Control",
        description:
          "We control who has access to what — and make sure it's the right people. Single sign-on, multi-factor authentication, and strict controls on sensitive accounts.",
        icon: Key,
        href: "/services/iam",
        highlights: ["Single sign-on (SSO)", "Admin account security", "Least-privilege access controls", "Regular access reviews"],
      },
      {
        title: "Data Governance & Privacy",
        description:
          "We help you manage your data responsibly — where it lives, who can see it, how long to keep it, and how to stay compliant with privacy laws like GDPR, PIPEDA, and HIPAA.",
        icon: Database,
        href: "/services/data-governance",
        highlights: ["Automated data discovery", "Data flow tracking", "Privacy law compliance", "Data retention and deletion programs"],
      },
      {
        title: "Cloud Cost Management",
        description:
          "We show you exactly where your cloud money is going and what you can cut. Most organizations reduce their cloud bill by 25–40% after working with us.",
        icon: BarChart2,
        href: "/services/finops",
        highlights: ["Cost breakdown by team and project", "Identifying waste and over-provisioned resources", "Reserved capacity planning", "Cloud spending governance"],
      },
      {
        title: "Cloud Infrastructure",
        description:
          "We design and build your cloud setup across AWS, Azure, Google Cloud, or your own servers. We recommend what works best for your needs — not what's most profitable for us.",
        icon: Cloud,
        href: "/services/cloud",
        highlights: ["Multi-cloud design", "Cloud migration", "Cost optimization", "Disaster recovery design"],
      },
      {
        title: "Cybersecurity",
        description:
          "We protect your whole organization — accounts, devices, networks, and cloud systems. From an initial assessment through to 24/7 security monitoring.",
        icon: Shield,
        href: "/services/security",
        highlights: ["Zero Trust model (nothing gets automatic access — every device and person must prove they belong)", "24/7 security monitoring team (SOC)", "Penetration testing", "Compliance readiness"],
      },
      {
        title: "Enterprise AI",
        description:
          "We put AI to work in your actual business processes — not just a demo. We use your existing data and build AI tools your team can understand and trust.",
        icon: Cpu,
        href: "/services/ai",
        highlights: ["AI readiness check", "Model selection and tuning", "AI infrastructure and deployment", "AI oversight and governance"],
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Services" }]}
        eyebrow="Services"
        title="Every technology service your organization needs"
        subtitle="From the first strategy conversation to ongoing operations — everything under one accountable relationship."
        backgroundImageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=3840&q=100"
        variant="tinted"
      />

      {/* Services by category */}
      {serviceCategories.map((category, catIndex) => (
        <Fragment key={category.category}>
          <section
            className={cn(
              "py-20 lg:py-24",
              catIndex % 2 === 0 ? "bg-white dark:bg-background" : "bg-surface dark:bg-card",
            )}
          >
            <div className="container-enterprise">
              {/* Category header */}
              <div className="mb-12 border-b border-border pb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue">
                  {category.category}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
              </div>

              <div className="space-y-10">
                {category.services.map((service) => (
                  <ServiceRow key={service.href} service={service} />
                ))}
              </div>
            </div>
          </section>

          {catIndex === 0 && (
            <div className="relative h-72 overflow-hidden lg:h-96">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=3840&q=100"
                alt="Enterprise data center operations"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-canvas/65" />
              <div className="container-enterprise relative flex h-full flex-col items-start justify-end pb-10">
                <p className="max-w-xl text-sm leading-relaxed text-white/80">
                  Every service is delivered by the same team, under the same contract. No hand-offs between vendors, no gaps in accountability.
                </p>
              </div>
            </div>
          )}

          {catIndex === 1 && (
            <div className="relative h-72 overflow-hidden lg:h-96">
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=3840&q=100"
                alt="Cybersecurity and specialized technology services"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-canvas/65" />
              <div className="container-enterprise relative flex h-full flex-col items-start justify-end pb-10">
                <p className="max-w-xl text-sm leading-relaxed text-white/80">
                  Specialized services go beyond standard IT management. We bring deep expertise to the areas where mistakes are most costly.
                </p>
              </div>
            </div>
          )}
        </Fragment>
      ))}

      <CTASection
        title="Not sure which services you need?"
        subtitle="Our advisors will assess your situation and recommend the right approach — no obligation, no sales pitch."
        primaryLabel="Schedule an assessment"
        primaryHref="/contact"
        secondaryLabel="View use cases"
        secondaryHref="/case-studies"
      />
    </>
  )
}

function ServiceRow({
  service,
}: {
  service: {
    title: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    href: string
    highlights: string[]
  }
}) {
  return (
    <div className="grid grid-cols-1 gap-8 rounded-xl border border-border bg-white p-8 dark:bg-card lg:grid-cols-3">
      {/* Icon + title */}
      <div className="flex flex-col gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-light">
          <service.icon className="h-5 w-5 text-blue" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
          <Link
            href={service.href}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue transition-colors hover:text-blue-hover"
          >
            Service details
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Description */}
      <div className="lg:col-span-2">
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {service.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-foreground/80">
              <div className="h-1 w-1 rounded-full bg-blue" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
