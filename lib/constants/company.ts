import type { MetricItem, ServiceItem, SolutionItem, IndustryItem, TestimonialItem, InsightItem } from "@/types"

export const company = {
  name: "Aethon Core",
  fullName: "Aethon Core Inc.",
  tagline: "Technology managed end-to-end — so your organization can focus on what matters.",
  description:
    "Aethon Core delivers end-to-end managed IT services, digital transformation, and consulting to enterprises across Canada and North America. We operate, secure, and modernize your technology stack with contractual accountability and 24/7 engineering coverage.",
  founded: "2024",
  email: "hello@aethoncore.com",
  address: {
    street: "100 King Street West",
    city: "Toronto",
    state: "Ontario",
    zip: "M5X 1A9",
    country: "Canada",
    countryCode: "CA",
  },
  social: {
    linkedin: "https://linkedin.com/company/aethoncore",
    twitter: "https://twitter.com/aethoncore",
    youtube: "https://youtube.com/@aethoncore",
  },
}

export const metrics: MetricItem[] = [
  { value: "99.99", suffix: "%", label: "Uptime SLA" },
  { value: "< 10ms", label: "P99 API latency" },
  { value: "Zero Trust", label: "Security architecture" },
  { value: "24/7", label: "NOC & SOC coverage" },
]

export const services: ServiceItem[] = [
  {
    title: "Managed IT Services",
    description:
      "Full lifecycle management of your IT environment — monitoring, patching, incident response, and a dedicated service desk — under a single contractual SLA. We own the outcome, not just the ticket.",
    href: "/services/managed",
    icon: "headphones",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Design, migration, and ongoing operations of multi-cloud and hybrid environments. AWS, Azure, and Google Cloud managed as a single coherent platform with unified governance and cost controls.",
    href: "/services/cloud",
    icon: "server",
  },
  {
    title: "Cybersecurity & MDR",
    description:
      "24/7 Security Operations Centre with managed detection and response, Zero Trust architecture implementation, threat intelligence, and compliance-grade audit trails for regulated industries.",
    href: "/services/security",
    icon: "shield",
  },
  {
    title: "Network & Connectivity",
    description:
      "Enterprise WAN, SD-WAN, SASE, and private connectivity designed for high availability. We engineer, deploy, and operate the fabric that connects your offices, data centres, and remote workforce.",
    href: "/services/network",
    icon: "network",
  },
  {
    title: "Data & Intelligent Automation",
    description:
      "End-to-end data platforms, real-time analytics, and AI-powered automation. From ingestion pipelines to executive dashboards — built to operate in production, not just in demos.",
    href: "/services/analytics",
    icon: "database",
  },
  {
    title: "Digital Transformation",
    description:
      "Strategy to execution. We help enterprises define technology roadmaps, modernize legacy systems, and embed new operating models — with dedicated transformation managers and measurable milestones.",
    href: "/services/transformation",
    icon: "zap",
  },
  {
    title: "Application Services",
    description:
      "Custom application development, legacy modernization, and API integration. We design, build, and maintain enterprise applications that connect your core systems and enable your teams.",
    href: "/services/apps",
    icon: "code-2",
  },
  {
    title: "Consulting & Advisory",
    description:
      "Technology strategy, architecture review, vendor selection, and IT financial management. Independent advisory delivered by senior practitioners — not junior consultants with a slide template.",
    href: "/services/consulting",
    icon: "compass",
  },
]

export const solutions: SolutionItem[] = [
  {
    eyebrow: "Aethon Core Platform",
    title: "A single control plane across your entire IT estate",
    description:
      "The Aethon Core Platform unifies visibility, automation, and governance across cloud, on-premises, and edge environments. Every asset, every change, every incident — tracked, audited, and acted upon from one place. Purpose-built for enterprises that cannot afford blind spots.",
    features: [
      "Unified asset and configuration management across all environments",
      "Policy-as-code governance with full change audit history",
      "Automated remediation tied to contractual SLA thresholds",
      "Native integrations with ServiceNow, Splunk, Microsoft 365, AWS, and Azure",
      "Role-based dashboards for operations, finance, and executive leadership",
    ],
    href: "/products/platform",
  },
  {
    eyebrow: "Core Intelligence Suite",
    title: "Operational intelligence and AI-powered decision support",
    description:
      "Core Intelligence combines observability, AIOps, and business analytics into a single platform layer. It continuously correlates signals from infrastructure, applications, and business systems — surfacing anomalies before they become incidents and recommendations before they become decisions.",
    features: [
      "AIOps-powered anomaly detection across 200+ integrated data sources",
      "Predictive capacity planning with 90-day infrastructure forecasting",
      "Automated root-cause analysis for P1 and P2 incidents",
      "FinOps dashboards with cloud cost attribution by team, project, and service",
      "Executive reporting suite with configurable KPI scorecards",
    ],
    href: "/products/analytics",
  },
]

export const industries: IndustryItem[] = [
  {
    title: "Financial Services",
    description:
      "Regulatory-grade infrastructure and operations for banks, insurers, and capital markets firms. SOX, PCI-DSS, OSFI, and DORA compliance built into every layer — not bolted on after the fact.",
    href: "/industries/financial-services",
    icon: "landmark",
  },
  {
    title: "Healthcare",
    description:
      "HIPAA, PIPEDA, and PHIPA-compliant environments for hospitals, health systems, and digital health companies. We manage clinical and administrative workloads with the security controls that regulators require.",
    href: "/industries/healthcare",
    icon: "activity",
  },
  {
    title: "Manufacturing",
    description:
      "OT/IT convergence, predictive maintenance, and supply chain visibility for complex manufacturing environments. We connect the factory floor to the boardroom without compromising operational resilience.",
    href: "/industries/manufacturing",
    icon: "settings",
  },
  {
    title: "Retail & Commerce",
    description:
      "High-availability commerce infrastructure engineered for peak load — Black Friday, product launches, and global expansion. PCI-DSS compliance and omnichannel platform operations included.",
    href: "/industries/retail",
    icon: "shopping-bag",
  },
  {
    title: "Government & Public Sector",
    description:
      "FedRAMP, StateRAMP, PBMM, and Protected B-grade managed services for federal, provincial, and municipal organizations. We hold the clearances and operate the controls your mandates require.",
    href: "/industries/government",
    icon: "building",
  },
  {
    title: "Energy & Utilities",
    description:
      "NERC CIP-compliant operations for electricity generation, transmission, and distribution organizations. We secure critical infrastructure and modernize OT environments without disrupting operations.",
    href: "/industries/energy",
    icon: "zap",
  },
]

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Enterprises don't fail because they lack technology — they fail because the technology they have isn't operated with enough discipline. We provide the discipline.",
    author: "Aethon Core",
    role: "Founding principle",
    company: "",
  },
  {
    quote:
      "A managed service that doesn't include contractual accountability for outcomes is just a help desk with a fancier name. Every engagement we run is backed by written SLAs with real remedies.",
    author: "Aethon Core",
    role: "On service accountability",
    company: "",
  },
  {
    quote:
      "The organizations that outperform their peers in the next decade will be the ones that treat technology operations as a strategic function — not a cost centre. We build for those organizations.",
    author: "Aethon Core",
    role: "On strategic IT",
    company: "",
  },
]

export const insights: InsightItem[] = [
  {
    category: "Managed Services",
    title: "Why most managed service agreements fail to deliver — and how to structure one that does",
    excerpt:
      "The gap between what organizations expect from managed services and what they actually receive is one of the most persistent problems in enterprise IT. The root cause is almost always in how the contract is written — not how the service is delivered.",
    date: "April 2026",
    readTime: "10 min read",
    href: "/insights/managed-service-contracts",
    author: "Aethon Core",
  },
  {
    category: "Security",
    title: "Zero Trust is not a product — it is an operating model. Here is what implementation actually looks like.",
    excerpt:
      "Most organizations that claim Zero Trust maturity have deployed an identity solution and called it done. Real Zero Trust requires re-engineering network access, application permissions, device trust, and data classification simultaneously. This is what that looks like in practice.",
    date: "March 2026",
    readTime: "13 min read",
    href: "/insights/zero-trust-implementation",
    author: "Aethon Core",
  },
  {
    category: "AI & Automation",
    title: "The enterprise AI adoption gap: why most AI investments fail to reach production",
    excerpt:
      "Analysts report that over 85% of enterprise AI projects never make it to production. The failure point is almost never the model. It is the data pipeline, the integration layer, and the absence of an operational team equipped to run AI in a production environment.",
    date: "March 2026",
    readTime: "11 min read",
    href: "/insights/enterprise-ai-production",
    author: "Aethon Core",
  },
]

export const clientLogos = [
  "Financial Services",
  "Healthcare Systems",
  "Manufacturing",
  "Energy & Utilities",
  "Government & Defense",
  "Retail & Commerce",
  "Life Sciences",
  "Capital Markets",
  "Supply Chain",
  "Higher Education",
]

export const platformSpecs = [
  { label: "Monitored assets per deployment", value: "100,000+" },
  { label: "P99 query latency", value: "< 8ms" },
  { label: "Concurrent automated workflows", value: "10,000+" },
  { label: "Event ingestion throughput", value: "2M events/sec" },
]
