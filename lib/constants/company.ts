import type { MetricItem, ServiceItem, SolutionItem, IndustryItem, TestimonialItem, InsightItem } from "@/types"

export const company = {
  name: "Aethon Core",
  fullName: "Aethon Core Inc.",
  tagline: "We manage your technology end-to-end — so your team can focus on your business.",
  description:
    "Aethon Core manages IT for businesses across Canada and North America. We run your cloud, protect your security, and keep everything working — with real engineers, written guarantees, and 24/7 coverage.",
  founded: "2024",
  email: "contact@aethoncore.com",
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
      "We watch, patch, and manage your entire IT environment. One team, one contract, full responsibility for every outcome — not just logging the ticket.",
    href: "/services/managed",
    icon: "headphones",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "We design, move, and run your cloud environments across AWS, Azure, and Google Cloud. All three managed as one platform, with clear cost controls and accountability.",
    href: "/services/cloud",
    icon: "server",
  },
  {
    title: "Cybersecurity & MDR",
    description:
      "A real team watching your security 24/7 — not automated alerts with no follow-through. We detect threats, respond fast, and keep your environment clean.",
    href: "/services/security",
    icon: "shield",
  },
  {
    title: "Network & Connectivity",
    description:
      "Private, fast, reliable connections between your offices, data centers, and remote teams. We build it, monitor it, and keep it running at all times.",
    href: "/services/network",
    icon: "network",
  },
  {
    title: "Data & Intelligent Automation",
    description:
      "We build data systems that actually get used — real-time dashboards, automated workflows, and AI tools that run in production, not just in a demo.",
    href: "/services/analytics",
    icon: "database",
  },
  {
    title: "Digital Transformation",
    description:
      "We help you update old systems, adopt new ones, and build a technology plan that matches where your business is going — with real milestones, not just a roadmap slide.",
    href: "/services/transformation",
    icon: "zap",
  },
  {
    title: "Application Services",
    description:
      "Custom apps built to your spec, old systems brought up to date, and everything connected so your teams can actually use it.",
    href: "/services/apps",
    icon: "code-2",
  },
  {
    title: "Consulting & Advisory",
    description:
      "Honest, senior advice on technology strategy, vendor selection, and IT spending — from people who have done this, not consultants with a standard slide deck.",
    href: "/services/consulting",
    icon: "compass",
  },
]

export const solutions: SolutionItem[] = [
  {
    eyebrow: "Aethon Core Platform",
    title: "One dashboard for all of your IT",
    description:
      "The Aethon Core Platform gives you a single place to see, manage, and act on everything in your IT environment — cloud, on-premises, and remote systems. Every change is tracked. Every issue is caught. Nothing falls through the gaps.",
    features: [
      "All your systems and settings tracked in one place",
      "Rules and policies enforced automatically, with a full history of changes",
      "Automated fixes tied to the guarantees in your contract",
      "Connects to ServiceNow, Splunk, Microsoft 365, AWS, and Azure",
      "Dashboards built for operations teams, finance, and leadership",
    ],
    href: "/products/platform",
  },
  {
    eyebrow: "Core Intelligence Suite",
    title: "See problems coming before they affect your business",
    description:
      "Core Intelligence watches your infrastructure, applications, and business systems around the clock. It spots unusual patterns before they become outages, and surfaces the right information before you have to ask for it.",
    features: [
      "Anomaly detection across 200+ connected data sources",
      "90-day capacity forecasting to plan ahead, not react",
      "Automatic root-cause analysis for your most critical issues",
      "Cloud cost dashboards broken down by team, project, and service",
      "Executive reports with the numbers that actually matter",
    ],
    href: "/products/analytics",
  },
]

export const industries: IndustryItem[] = [
  {
    title: "Financial Services",
    description:
      "Secure, compliant IT for banks, insurers, and investment firms. We meet the rules you're held to — SOX, PCI-DSS, OSFI, and DORA — built into how we operate, not added at the end.",
    href: "/industries/financial-services",
    icon: "landmark",
  },
  {
    title: "Healthcare",
    description:
      "IT management for hospitals and health companies that must protect patient data. We meet HIPAA, PIPEDA, and PHIPA requirements and handle both clinical and admin systems securely.",
    href: "/industries/healthcare",
    icon: "activity",
  },
  {
    title: "Manufacturing",
    description:
      "We connect factory systems to business systems — without breaking production. Real-time visibility, predictive maintenance, and supply chain tracking, all managed end-to-end.",
    href: "/industries/manufacturing",
    icon: "settings",
  },
  {
    title: "Retail & Commerce",
    description:
      "Infrastructure that stays up during your busiest days — Black Friday, product launches, international expansion. We keep your stores and your data compliant and always available.",
    href: "/industries/retail",
    icon: "shopping-bag",
  },
  {
    title: "Government & Public Sector",
    description:
      "Managed IT for federal, provincial, and municipal organizations. We meet the clearance levels and security requirements your mandate demands — FedRAMP, PBMM, Protected B, and more.",
    href: "/industries/government",
    icon: "building",
  },
  {
    title: "Energy & Utilities",
    description:
      "We protect and modernize the IT systems that power grids and utilities depend on. NERC CIP compliant, with no disruption to operations during the work.",
    href: "/industries/energy",
    icon: "zap",
  },
]

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Companies don't fail because of bad technology — they fail because no one is properly running what they have. We are the team that runs it right.",
    author: "Aethon Core",
    role: "Founding principle",
    company: "",
  },
  {
    quote:
      "A managed IT service that doesn't guarantee outcomes is just a fancy help desk. Every client we work with gets a written contract with real consequences if we fall short.",
    author: "Aethon Core",
    role: "On service accountability",
    company: "",
  },
  {
    quote:
      "The businesses that win in the next decade will be the ones that treat their technology as something that must work — not something to cut costs on. We build for those businesses.",
    author: "Aethon Core",
    role: "On strategic IT",
    company: "",
  },
]

export const insights: InsightItem[] = [
  {
    category: "Managed Services",
    title: "Why most IT service contracts don't deliver — and how to write one that does",
    excerpt:
      "The gap between what businesses expect from managed IT and what they actually receive comes down to one thing: the contract. Most agreements promise a fast response. Almost none guarantee that the problem gets solved. Here is how to tell the difference.",
    date: "April 2026",
    readTime: "10 min read",
    href: "/insights/managed-service-contracts",
    author: "Aethon Core",
  },
  {
    category: "Security",
    title: "Zero Trust is not a product — it is a way of running security. Here is what it actually takes.",
    excerpt:
      "Most companies that say they have Zero Trust have bought a login tool and stopped there. True Zero Trust means rethinking how your network, apps, devices, and data all work together. This is what that actually looks like.",
    date: "March 2026",
    readTime: "13 min read",
    href: "/insights/zero-trust-implementation",
    author: "Aethon Core",
  },
  {
    category: "AI & Automation",
    title: "Why most AI projects never leave the pilot stage — and what the ones that do have in common",
    excerpt:
      "More than 85% of business AI projects never make it into real use. The problem is almost never the AI itself. It is the data, the connections to existing systems, and the absence of a team that knows how to run AI day-to-day.",
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
