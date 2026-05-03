import type { MetricItem, ServiceItem, SolutionItem, IndustryItem, TestimonialItem, InsightItem } from "@/types"

export const company = {
  name: "Aethon Core",
  fullName: "Aethon Core Inc.",
  tagline: "We manage your technology end-to-end — so your team can focus on your business.",
  description:
    "Aethon Core manages IT for businesses across Canada and North America. We run your cloud, protect your security, and keep everything working — with real engineers, written guarantees, and 24/7 coverage.",
  founded: "2024",
  email: "contact@aethoncore.ca",
  social: {
    linkedin: "https://linkedin.com/company/aethoncore",
    twitter: "https://twitter.com/aethoncore",
    youtube: "https://youtube.com/@aethoncore",
  },
}

export const metrics: MetricItem[] = [
  { value: "99.99", suffix: "%", label: "Uptime guarantee" },
  { value: "< 10ms", label: "System response speed" },
  { value: "Zero Trust", label: "Security built in from day one" },
  { value: "24/7", label: "Monitoring and security" },
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
      "The Aethon Core Platform gives you one place to see, manage, and act on everything in your IT — whether it's in the cloud, in your office, or somewhere remote. Every change is recorded. Every problem is caught. Nothing gets missed.",
    features: [
      "Every system and setting visible in one place",
      "Security rules applied automatically, with a full record of every change",
      "Automated fixes tied to the guarantees written in your contract",
      "Connects to ServiceNow, Splunk, Microsoft 365, Amazon AWS, and Azure",
      "Dashboards for IT teams, finance, and leadership",
    ],
    href: "/products/platform",
  },
  {
    eyebrow: "Core Intelligence Suite",
    title: "See problems coming before they affect your business",
    description:
      "Core Intelligence watches your systems, apps, and business tools around the clock. It spots unusual activity before it becomes an outage, and shows you the right information before you even have to ask.",
    features: [
      "We watch 200+ sources of data and flag anything unusual",
      "We predict 90 days ahead when you'll need more storage or computing power",
      "When something breaks, we automatically find out exactly why",
      "Cloud spending broken down by team, project, and service",
      "Plain-English reports with the numbers that actually matter",
    ],
    href: "/products/analytics",
  },
]

export const industries: IndustryItem[] = [
  {
    title: "Financial Services",
    description:
      "Secure IT for banks, insurers, and investment firms. We already know the rules you're held to — SOX (US public company law), PCI-DSS (credit card security), OSFI (Canadian banking regulator), and DORA (EU financial regulation) — and they're built into how we work.",
    href: "/industries/financial-services",
    icon: "landmark",
  },
  {
    title: "Healthcare",
    description:
      "IT for hospitals and health companies that must protect patient data. We meet HIPAA (US health data law), PIPEDA, and PHIPA (Canadian privacy laws) and handle both clinical and admin systems securely.",
    href: "/industries/healthcare",
    icon: "activity",
  },
  {
    title: "Manufacturing",
    description:
      "We connect factory systems to your business software — without stopping production. You get real-time visibility into your operations, early warnings before equipment fails, and supply chain tracking, all managed by us.",
    href: "/industries/manufacturing",
    icon: "settings",
  },
  {
    title: "Retail & Commerce",
    description:
      "Technology that stays on during your busiest days — Black Friday, product launches, international expansion. We keep your stores running, your customer data safe, and your systems compliant.",
    href: "/industries/retail",
    icon: "shopping-bag",
  },
  {
    title: "Government & Public Sector",
    description:
      "Managed IT for federal, provincial, and municipal organizations. We meet the security clearance levels your work requires — FedRAMP, PBMM, and Protected B (Canadian and US government security standards).",
    href: "/industries/government",
    icon: "building",
  },
  {
    title: "Energy & Utilities",
    description:
      "We protect and modernize the IT systems that power grids and utilities run on. We meet NERC CIP (the security standard for power infrastructure) and do all the work without disrupting your operations.",
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
  { label: "Systems we can watch in one installation", value: "100,000+" },
  { label: "How fast the dashboard loads", value: "< 8ms" },
  { label: "Automated tasks running at the same time", value: "10,000+" },
  { label: "Alerts we can process per second", value: "2M" },
]
