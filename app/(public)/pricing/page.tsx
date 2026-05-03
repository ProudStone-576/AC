import React from "react"
import { JsonLd } from "@/components/ui/JsonLd"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Minus } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { FadeIn } from "@/components/ui/FadeIn"
import { FaqAccordion } from "./_components/FaqAccordion"

export const metadata: Metadata = {
  title: "IT Services Pricing Canada | Managed IT, Cloud & Security Plans | Aethon Core",
  description: "Transparent pricing for managed IT services. Monthly plans from $799/mo, one-time projects from $1,500, ongoing management from $449/mo. No hidden fees. British Columbia & national.",
  keywords: [
    "IT services pricing Canada",
    "managed IT services cost Canada",
    "managed service provider pricing Canada",
    "cloud services pricing Canada",
    "IT outsourcing cost Canada",
    "enterprise IT pricing",
    "managed security pricing Canada",
  ],
  alternates: { canonical: "https://aethoncore.com/pricing" },
  openGraph: {
    type: "website", locale: "en_CA", url: "https://aethoncore.com/pricing",
    siteName: "Aethon Core",
    title: "IT Services Pricing Canada | Managed IT, Cloud & Security Plans | Aethon Core",
    description: "Transparent pricing for managed IT services. Monthly plans from $799/mo, one-time projects from $1,500, ongoing management from $449/mo. No hidden fees. British Columbia & national.",
  },
}

/* ─── Monthly subscription plans ─────────────────────────────────────────── */
const plans = [
  {
    name: "Starter",
    who: "For very small businesses with just a handful of computers to manage",
    price: "$299",
    period: "/ month",
    billing: "billed annually ($3,588/yr)",
    highlight: false,
    cta: "Get started",
    href: "/contact?plan=starter",
    features: [
      { label: "Computers and servers we watch", value: "Up to 25" },
      { label: "Locations (office, cloud, or data centre)", value: "1" },
      { label: "Software included", value: "Core Platform" },
      { label: "Uptime guarantee — miss it, you get money back", value: "99.5%" },
      { label: "When support is available", value: "Email only (Mon–Fri)" },
      { label: "How fast we respond to emergencies", value: "Next business day" },
      { label: "Ready-made connections to popular tools", value: "25+" },
      { label: "Your own account manager", value: false },
      { label: "Engineer who knows your systems personally", value: false },
      { label: "Custom reports for your auditors", value: false },
    ],
  },
  {
    name: "Foundation",
    who: "Good for small businesses managing one location",
    price: "$799",
    period: "/ month",
    billing: "billed annually ($9,600/yr)",
    highlight: false,
    cta: "Get started",
    href: "/contact?plan=foundation",
    features: [
      { label: "Computers and servers we watch", value: "Up to 100" },
      { label: "Locations (office, cloud, or data centre)", value: "1" },
      { label: "Software included", value: "Core Platform" },
      { label: "Uptime guarantee — miss it, you get money back", value: "99.9%" },
      { label: "When support is available", value: "Business hours (Mon–Fri)" },
      { label: "How fast we respond to emergencies", value: "8 hours" },
      { label: "Ready-made connections to popular tools", value: "50+" },
      { label: "Your own account manager", value: false },
      { label: "Engineer who knows your systems personally", value: false },
      { label: "Custom reports for your auditors", value: false },
    ],
  },
  {
    name: "Business",
    who: "For growing companies with a few locations and more systems to manage",
    price: "$1,299",
    period: "/ month",
    billing: "billed annually ($15,588/yr)",
    highlight: false,
    cta: "Get started",
    href: "/contact?plan=business",
    features: [
      { label: "Computers and servers we watch", value: "Up to 250" },
      { label: "Locations (office, cloud, or data centre)", value: "Up to 3" },
      { label: "Software included", value: "Core Platform + 1 add-on" },
      { label: "Uptime guarantee — miss it, you get money back", value: "99.9%" },
      { label: "When support is available", value: "Business hours + weekend emergencies" },
      { label: "How fast we respond to emergencies", value: "4 hours" },
      { label: "Ready-made connections to popular tools", value: "50+" },
      { label: "Your own account manager", value: true },
      { label: "Engineer who knows your systems personally", value: false },
      { label: "Custom reports for your auditors", value: false },
    ],
  },
  {
    name: "Professional",
    who: "For companies running across multiple offices or cloud regions",
    price: "$2,199",
    period: "/ month",
    billing: "billed annually ($26,388/yr)",
    highlight: false,
    cta: "Get started",
    href: "/contact?plan=professional",
    features: [
      { label: "Computers and servers we watch", value: "Up to 500" },
      { label: "Locations (office, cloud, or data centre)", value: "Up to 5" },
      { label: "Software included", value: "Core Platform + 1 add-on" },
      { label: "Uptime guarantee — miss it, you get money back", value: "99.95%" },
      { label: "When support is available", value: "24/5 (Mon–Fri, around the clock)" },
      { label: "How fast we respond to emergencies", value: "4 hours" },
      { label: "Ready-made connections to popular tools", value: "50+" },
      { label: "Your own account manager", value: true },
      { label: "Engineer who knows your systems personally", value: false },
      { label: "Custom reports for your auditors", value: false },
    ],
  },
  {
    name: "Enterprise",
    who: "For large companies that cannot afford any downtime",
    price: "$5,499",
    period: "/ month",
    billing: "billed annually ($65,988/yr)",
    highlight: true,
    cta: "Talk to our team",
    href: "/contact?plan=enterprise",
    features: [
      { label: "Computers and servers we watch", value: "Up to 2,500" },
      { label: "Locations (office, cloud, or data centre)", value: "Unlimited" },
      { label: "Software included", value: "Everything — full suite, no extras to buy" },
      { label: "Uptime guarantee — miss it, you get money back", value: "99.99%" },
      { label: "When support is available", value: "24/7 — around the clock, every day" },
      { label: "How fast we respond to emergencies", value: "1 hour" },
      { label: "Ready-made connections to popular tools", value: "50+" },
      { label: "Your own account manager", value: true },
      { label: "Engineer who knows your systems personally", value: false },
      { label: "Custom reports for your auditors", value: true },
    ],
  },
  {
    name: "Enterprise Plus",
    who: "For large global companies where every minute of downtime costs real money",
    price: "Custom",
    period: "",
    billing: "quoted to fit your exact environment — no surprises",
    highlight: false,
    cta: "Contact our team",
    href: "/contact?plan=enterprise-plus",
    features: [
      { label: "Computers and servers we watch", value: "Unlimited" },
      { label: "Locations (office, cloud, or data centre)", value: "All 47 regions" },
      { label: "Software included", value: "Everything — full suite, no extras to buy" },
      { label: "Uptime guarantee — miss it, you get money back", value: "99.995%" },
      { label: "When support is available", value: "24/7 + engineers who know your name" },
      { label: "How fast we respond to emergencies", value: "15 minutes" },
      { label: "Ready-made connections to popular tools", value: "50+ and custom-built" },
      { label: "Your own account manager", value: true },
      { label: "Engineer who knows your systems personally", value: true },
      { label: "Custom reports for your auditors", value: true },
    ],
  },
]

/* ─── Individual help ────────────────────────────────────────────────────── */
const individualOptions = [
  {
    name: "Hourly Help",
    who: "One-off help — something is broken, you need a second opinion, or you want someone to set something up",
    price: "$75",
    period: "/ hour",
    billing: "2-hour minimum · billed after the session",
    what: [
      "Remote troubleshooting and fixes",
      "Device setup and configuration",
      "Home or small office network setup",
      "Software installation and advice",
      "Security checkup for your devices",
    ],
    cta: "Book a session",
    href: "/contact?plan=individual-hourly",
  },
  {
    name: "Monthly Support",
    who: "Ongoing help — someone to call when things go wrong, at a flat monthly rate",
    price: "$149",
    period: "/ month",
    billing: "includes 5 hrs of remote support · extra hours at $65/hr",
    what: [
      "5 hours of remote support per month",
      "Email and chat, response within a few hours",
      "Priority booking over one-off clients",
      "Monthly security check of your devices",
      "Carry forward unused hours (up to 2hrs)",
    ],
    cta: "Get started",
    href: "/contact?plan=individual-monthly",
  },
  {
    name: "Custom Project",
    who: "You have something specific in mind — tell us what it is and we'll quote it",
    price: "Custom",
    period: "",
    billing: "quoted before we start — no surprises",
    what: [
      "Home network design and installation",
      "Personal website or portfolio build",
      "Small business tech setup",
      "Data migration and backup setup",
      "Anything else — just ask",
    ],
    cta: "Tell us what you need",
    href: "/contact?plan=individual-custom",
  },
]

/* ─── Add-on software ─────────────────────────────────────────────────────── */
const addOns = [
  {
    name: "Analytics Suite",
    href: "/products/analytics",
    what: "See all your data in real time. Dashboards, reports, and alerts — for every team from engineers to executives.",
    tiers: [
      { label: "Essentials", spec: "Up to 200 GB of data per day", price: "+$299/mo" },
      { label: "Advanced", spec: "Up to 1 TB of data per day", price: "+$599/mo" },
      { label: "Unlimited", spec: "No data limits", price: "Custom" },
    ],
    freeOn: "Enterprise and Enterprise Plus",
  },
  {
    name: "Security Center",
    href: "/products/security",
    what: "We watch your systems 24/7 for threats, automatically block attacks, and make sure you stay compliant.",
    tiers: [
      { label: "Essentials", spec: "Up to 500 devices", price: "+$249/mo" },
      { label: "Advanced", spec: "Up to 2,000 devices", price: "+$499/mo" },
      { label: "Enterprise", spec: "Unlimited devices", price: "Custom" },
    ],
    freeOn: "Enterprise and Enterprise Plus",
  },
  {
    name: "Automation Engine",
    href: "/products/automation",
    what: "Stop doing repetitive work manually. Set up automated workflows — no coding required — using 200+ pre-built integrations.",
    tiers: [
      { label: "Starter", spec: "50,000 automated tasks per month", price: "+$149/mo" },
      { label: "Growth", spec: "250,000 automated tasks per month", price: "+$349/mo" },
      { label: "Unlimited", spec: "No task limits", price: "+$549/mo" },
    ],
    freeOn: "Enterprise and Enterprise Plus",
  },
]

/* ─── One-time projects ───────────────────────────────────────────────────── */
const oneTimeProjects = [
  {
    category: "Health Checks & Audits",
    description: "We review your current setup and tell you exactly what's working, what's at risk, and what to fix first. Fixed price, delivered in writing.",
    rows: [
      { name: "Infrastructure Health Check", detail: "5 days · done remotely", price: "$1,900" },
      { name: "Security Audit", detail: "5–10 days · done remotely", price: "$2,900 – $4,200" },
      { name: "Full Infrastructure Assessment", detail: "15 days · we come on-site", price: "$6,900" },
      { name: "Architecture Review", detail: "3–5 days", price: "$2,400" },
    ],
  },
  {
    category: "Compliance Certification Prep",
    description: "We get your company ready to pass security and privacy certifications. We handle the documentation, evidence collection, and gap fixes.",
    rows: [
      { name: "SOC 2 Type II (security audit standard for SaaS companies)", detail: "12–16 weeks", price: "$5,900" },
      { name: "ISO 27001 (international security management standard)", detail: "12–14 weeks", price: "$4,800" },
      { name: "PCI DSS (required if you process credit cards)", detail: "10–14 weeks", price: "$4,200" },
      { name: "HIPAA (required if you handle health data in the US)", detail: "8–12 weeks", price: "$3,900" },
      { name: "FedRAMP High (required to sell to US federal government)", detail: "6–12 months", price: "from $12,900" },
      { name: "Strategy Consulting (custom compliance roadmap)", detail: "8–12 week engagement", price: "from $3,500" },
    ],
  },
  {
    category: "Build Projects",
    description: "We build something specific for you — a new system, a security setup, or an automation platform. Scoped and quoted before we start.",
    rows: [
      { name: "Cloud Migration (moving your apps and data to the cloud — fully managed)", detail: "8–16 weeks", price: "from $9,900" },
      { name: "Identity & Access Management (who can log into what, and how)", detail: "6–10 weeks", price: "from $3,400" },
      { name: "DevOps Platform (automated software delivery pipeline)", detail: "8–14 weeks", price: "from $4,400" },
      { name: "Data Governance Program (rules for how your data is used and stored)", detail: "12–16 weeks", price: "from $5,900" },
      { name: "Network Redesign (private networks + zero-trust security model)", detail: "8–12 weeks", price: "from $3,900" },
      { name: "Disaster Recovery Plan + First Test (backup and restore procedures)", detail: "6–8 weeks", price: "from $2,900" },
      { name: "Staff Training Program (custom curriculum for your team)", detail: "Custom", price: "from $1,500" },
    ],
  },
]

/* ─── Monthly management services ────────────────────────────────────────── */
const managedServices = [
  {
    name: "Managed Infrastructure",
    what: "We monitor your servers around the clock, fix issues before they become problems, apply updates, and plan for growth. Think of us as your infrastructure team.",
    price: "from $549/mo",
    covers: "Up to 50 servers — grows with you",
  },
  {
    name: "Managed Network",
    what: "We keep your private networks and internet connections healthy — watching performance, making changes, and fixing problems.",
    price: "from $499/mo",
    covers: "Up to 10 office or data centre locations",
  },
  {
    name: "Cloud Cost Management",
    what: "We find where you're wasting money in the cloud, negotiate better rates, and send you a clear monthly report.",
    price: "from $449/mo",
    covers: "Or 15% of the money we save you — whichever is more",
  },
  {
    name: "Login & Access Control",
    what: "We manage who has access to what — setting up new staff, removing access when people leave, running regular checks, and keeping admin accounts locked down tight.",
    price: "from $649/mo",
    covers: "Up to 500 user accounts",
  },
  {
    name: "Data Organisation & Compliance",
    what: "We keep your data records up to date, make sure data is deleted when it should be, generate evidence when you're audited, and support your compliance reviews.",
    price: "from $749/mo",
    covers: "Up to 20 data sources",
  },
  {
    name: "Backup & Disaster Recovery",
    what: "We test your backups to make sure they actually work, run annual recovery tests, update your recovery plans, and do quarterly readiness checks.",
    price: "from $449/mo",
    covers: "Your most important systems and data",
  },
  {
    name: "Software Delivery Management",
    what: "A dedicated engineer manages the pipeline that tests and delivers your software updates automatically — including on-call coverage if something breaks.",
    price: "from $1,149/mo",
    covers: "1 dedicated engineer + all tooling",
  },
  {
    name: "Ongoing Compliance Monitoring",
    what: "We check every month that your security controls are working, collect the evidence auditors need, review your suppliers, and help you renew your certification each year.",
    price: "from $599/mo",
    covers: "One compliance standard · multi-standard packages available",
  },
]

/* ─── Plan comparison ─────────────────────────────────────────────────────── */
const comparisonSections = [
  {
    section: "How big your business can be",
    rows: [
      { feature: "Computers and servers we watch", starter: "Up to 25", foundation: "Up to 100", business: "Up to 250", professional: "Up to 500", enterprise: "Up to 2,500", plus: "Unlimited" },
      { feature: "Number of locations", starter: "1", foundation: "1", business: "Up to 3", professional: "Up to 5", enterprise: "Unlimited", plus: "All 47 regions" },
      { feature: "Cloud services (Amazon, Microsoft, Google)", starter: true, foundation: true, business: true, professional: true, enterprise: true, plus: true },
      { feature: "Servers in your office or data centre", starter: false, foundation: false, business: true, professional: true, enterprise: true, plus: true },
      { feature: "Remote and branch sites", starter: false, foundation: false, business: false, professional: false, enterprise: true, plus: true },
    ],
  },
  {
    section: "What software is included",
    rows: [
      { feature: "Core Platform (main management dashboard)", starter: true, foundation: true, business: true, professional: true, enterprise: true, plus: true },
      { feature: "Analytics Suite (see all your data in one place)", starter: "add-on from +$299/mo", foundation: "add-on from +$299/mo", business: "add-on from +$299/mo", professional: "add-on from +$299/mo", enterprise: "Free — included", plus: "Free — included" },
      { feature: "Security Center (we watch for threats 24/7)", starter: "add-on from +$249/mo", foundation: "add-on from +$249/mo", business: "add-on from +$249/mo", professional: "add-on from +$249/mo", enterprise: "Free — included", plus: "Free — included" },
      { feature: "Automation Engine (automated tasks, no coding needed)", starter: "add-on from +$149/mo", foundation: "add-on from +$149/mo", business: "add-on from +$149/mo", professional: "add-on from +$149/mo", enterprise: "Free — included", plus: "Free — included" },
    ],
  },
  {
    section: "How we help and what we guarantee",
    rows: [
      { feature: "Uptime guarantee (miss it → you get money back)", starter: "99.5%", foundation: "99.9%", business: "99.9%", professional: "99.95%", enterprise: "99.99%", plus: "99.995%" },
      { feature: "When support is available", starter: "Email (Mon–Fri)", foundation: "Business hours", business: "Business hours + weekends for emergencies", professional: "24/5 (Mon–Fri)", enterprise: "24/7", plus: "24/7 + engineers know you" },
      { feature: "How fast we respond to emergencies", starter: "Next business day", foundation: "8 hours", business: "4 hours", professional: "4 hours", enterprise: "1 hour", plus: "15 minutes" },
      { feature: "Your own account manager", starter: false, foundation: false, business: true, professional: true, enterprise: true, plus: true },
      { feature: "Engineer assigned to your account personally", starter: false, foundation: false, business: false, professional: false, enterprise: false, plus: true },
      { feature: "Quarterly review call", starter: false, foundation: false, business: false, professional: true, enterprise: true, plus: true },
    ],
  },
  {
    section: "Security and audit features",
    rows: [
      { feature: "How long we keep your security logs", starter: "30 days", foundation: "90 days", business: "6 months", professional: "1 year", enterprise: "3 years", plus: "Unlimited" },
      { feature: "Custom reports for your auditors", starter: false, foundation: false, business: false, professional: false, enterprise: true, plus: true },
      { feature: "SOC 2 Type II certified (our systems are independently audited)", starter: true, foundation: true, business: true, professional: true, enterprise: true, plus: true },
    ],
  },
]

const faqs = [
  {
    q: "Are prices in US dollars or Canadian?",
    a: "All prices listed are in USD. If you are a Canadian client and prefer a quote in CAD, just ask — we can do that.",
  },
  {
    q: "What exactly is a 'managed server'?",
    a: "Any computer we actively monitor and manage — whether it is a virtual machine, a physical server, a container host, or a network device. Backup standby machines count at half. Kubernetes clusters are counted by the host machines, not the number of pods running on them.",
  },
  {
    q: "Can we start on a smaller plan and move up later?",
    a: "Yes — and it is seamless. No migration, no new setup. Most clients on Professional move up to Enterprise within 18 months as they grow. We will let you know before you hit your limit.",
  },
  {
    q: "What is included in the 50+ pre-built connections?",
    a: "Connections to major cloud providers (AWS, Azure, GCP), monitoring tools (Datadog, Grafana), ticketing systems (Jira, ServiceNow), login providers (Okta, Azure AD), and communication tools (Slack, Teams, PagerDuty). Custom connections are available on Enterprise Plus or as a separate project.",
  },
  {
    q: "Do one-time projects include any travel costs?",
    a: "Remote projects are fully covered in the price. If we come on-site (like the Full Infrastructure Assessment), we pass travel and accommodation costs through at cost — no markup. We will estimate this upfront so there are no surprises.",
  },
  {
    q: "How does cloud cost management pricing work?",
    a: "We charge either a flat $449/mo or 15% of the money we save you in the first year — whichever is more. After year one, it switches to the flat monthly rate. This way our incentives are aligned with yours.",
  },
  {
    q: "Are there any setup fees?",
    a: "Enterprise and Enterprise Plus plans include full onboarding at no extra charge. Foundation and Professional plans have a one-time $499 onboarding fee — this covers setup, connecting your tools, and a handover session with your team. Managed services include onboarding free.",
  },
  {
    q: "How long is the contract?",
    a: "Software plans are annual. Sign a 2-year deal and get 8% off. Sign a 3-year deal and get 14% off. If you need monthly billing (for a pilot or transition), we can do that at a 15% premium. Management services are month-to-month after an initial 3-month term.",
  },
  {
    q: "Do you have discounts for non-profits or government?",
    a: "Yes. Registered non-profits and Canadian public sector organisations get 20% off software plans. Government clients with specific requirements (like FedRAMP or Protected B) are quoted separately.",
  },
  {
    q: "What does 'uptime guarantee' actually mean?",
    a: "It means if we fail to meet that percentage, you get money back. It is written into your contract with defined remedies — not just a marketing promise. Our contractual remedies are spelled out before you sign.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Annual plans require 60 days written notice. We do not refund prepaid months, but we will not charge you for the remaining time on your contract. Month-to-month plans (available at a 15% premium) require just 30 days notice. 2-year and 3-year plans have an early exit fee of 3 months of your plan price. Management services are month-to-month after the first 3 months, with 30 days notice to cancel.",
  },
  {
    q: "What exactly happens if you miss my uptime guarantee?",
    a: "If we fall below your plan's uptime in any calendar month, you receive a credit: 10% of that month's fee if uptime drops below your guarantee but stays above 99.5%; 25% if it drops below 99.5%; 50% if it drops below 99.0%. If we miss in three or more months in a rolling 12-month period, you can exit your contract penalty-free. All of this is written in your contract before you sign.",
  },
  {
    q: "What is NOT covered by my plan?",
    a: "Hardware (computers, servers, cables, switches) — we help you buy it, but it is your purchase. Internet service costs (your ISP bill). Software licenses (Microsoft 365, Google Workspace, Salesforce, and other third-party apps). Data storage beyond your plan's included limit. Emergency dispatch for physical on-site visits — these are quoted separately and billed at cost with no markup. We will always tell you clearly when something is outside your plan.",
  },
  {
    q: "Are there setup fees?",
    a: "Yes — and we tell you upfront. Starter: $199 one-time. Foundation and Business: $499 one-time. Professional: $499 one-time. Enterprise and Enterprise Plus: no setup fee — onboarding is fully included. The setup fee covers connecting your systems, configuring the platform, and a handover session with your team. Management services include onboarding at no extra charge.",
  },
]

/* ─── Helpers ─────────────────────────────────────────────────────────────── */
function Cell({ value }: { value: string | boolean | undefined }) {
  if (value === true) return <CheckCircle2 className="h-4 w-4 text-blue mx-auto" aria-label="Included" />
  if (value === false) return <Minus className="h-4 w-4 text-muted-foreground/40 mx-auto" aria-label="Not included" />
  return <span className="text-sm text-foreground/80">{value}</span>
}

export default function PricingPage() {
  return (
    <>
      <JsonLd schema={[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://aethoncore.com"},{"@type":"ListItem","position":2,"name":"Pricing","item":"https://aethoncore.com/pricing"}]},{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Are prices in US dollars or Canadian?","acceptedAnswer":{"@type":"Answer","text":"All prices listed are in USD. If you are a Canadian client and prefer a quote in CAD, just ask — we can do that."}},{"@type":"Question","name":"Can we start on a smaller plan and move up later?","acceptedAnswer":{"@type":"Answer","text":"Yes — and it is seamless. No migration, no new setup. Most clients on Professional move up to Enterprise within 18 months as they grow."}},{"@type":"Question","name":"Are there any setup fees?","acceptedAnswer":{"@type":"Answer","text":"Enterprise and Enterprise Plus plans include full onboarding at no extra charge. Foundation and Professional plans have a one-time $499 onboarding fee covering setup, connecting your tools, and a handover session."}},{"@type":"Question","name":"How long is the contract?","acceptedAnswer":{"@type":"Answer","text":"Software plans are annual. Sign a 2-year deal and get 8% off. Sign a 3-year deal and get 14% off. Management services are month-to-month after an initial 3-month term."}},{"@type":"Question","name":"Do you have discounts for non-profits or government?","acceptedAnswer":{"@type":"Answer","text":"Yes. Registered non-profits and Canadian public sector organisations get 20% off software plans."}},{"@type":"Question","name":"What does uptime guarantee actually mean?","acceptedAnswer":{"@type":"Answer","text":"If we fail to meet the uptime percentage, you get money back. It is written into your contract with defined remedies — not just a marketing promise."}}]}]} />
      <PageHero
        breadcrumbs={[{ label: "Pricing" }]}
        eyebrow="Pricing"
        title="Everything we offer. Every price listed."
        subtitle="No 'contact us for pricing.' No hidden fees. No surprise charges. Plans start at $299/month. One-time projects from $1,500. Ongoing management from $449/month."
        variant="tinted"
        backgroundImageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=3840&q=100"
      />

      {/* Quick numbers */}
      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-in">
            <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
              {[
                { value: "$299/mo", label: "Starter plan — our most affordable option (annual billing)" },
                { value: "No per-user fees", label: "We charge by systems managed, not by how many staff you have" },
                { value: "6 plan tiers", label: "From small business to large enterprise — pick what fits" },
                { value: "Annual contract", label: "Standard term — 2-year and 3-year discounts available" },
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

      {/* Jump links */}
      <div className="border-b border-border bg-surface dark:bg-card">
        <div className="container-enterprise">
          <div className="flex flex-wrap gap-x-6 gap-y-2 py-4">
            {[
              { label: "Monthly plans", href: "#plans" },
              { label: "Individual help", href: "#individuals" },
              { label: "Add-on software", href: "#add-ons" },
              { label: "One-time projects", href: "#projects" },
              { label: "Monthly management", href: "#management" },
              { label: "Compare plans", href: "#compare" },
              { label: "What's included / not", href: "#transparency" },
              { label: "FAQ", href: "#faq" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-blue hover:underline">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Monthly plans ──────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background" id="plans">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Monthly software plans</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Six plans — from small business to large enterprise
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Every plan includes the core platform and a written uptime guarantee. The differences are how many systems we manage, how many locations you have, and how fast we respond when something goes wrong.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <FadeIn key={plan.name} variant="scale-up" delay={i * 60}>
                <div className={`flex flex-col rounded-xl border p-7 h-full ${
                  plan.highlight
                    ? "border-blue/30 bg-brand shadow-xl shadow-blue/10"
                    : "border-border bg-white dark:bg-card"
                }`}>
                  {plan.highlight && (
                    <span className="mb-4 inline-flex w-fit rounded-full bg-blue px-2.5 py-0.5 text-xs font-semibold text-blue-foreground">
                      Most popular
                    </span>
                  )}
                  <h3 className={`text-base font-semibold ${plan.highlight ? "text-white" : "text-foreground"}`}>
                    {plan.name}
                  </h3>
                  <p className={`mt-1 mb-5 text-xs leading-relaxed ${plan.highlight ? "text-white/60" : "text-muted-foreground"}`}>
                    {plan.who}
                  </p>
                  <div className="mb-5">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl font-bold tabular-nums ${plan.highlight ? "text-white" : "text-foreground"}`}>
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className={`text-sm ${plan.highlight ? "text-white/50" : "text-muted-foreground"}`}>
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <p className={`mt-1 text-xs ${plan.highlight ? "text-white/40" : "text-muted-foreground"}`}>
                      {plan.billing}
                    </p>
                  </div>
                  <ul className="mb-7 flex-1 space-y-2">
                    {plan.features.map((f) => (
                      <li key={f.label} className="flex items-start gap-2 text-xs">
                        {f.value === true ? (
                          <CheckCircle2 className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${plan.highlight ? "text-blue/80" : "text-blue"}`} />
                        ) : f.value === false ? (
                          <Minus className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${plan.highlight ? "text-white/20" : "text-muted-foreground/30"}`} />
                        ) : (
                          <CheckCircle2 className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${plan.highlight ? "text-blue/80" : "text-blue"}`} />
                        )}
                        <span className={plan.highlight ? "text-white/75" : "text-foreground/75"}>
                          <span className={`font-medium ${plan.highlight ? "text-white/50" : "text-muted-foreground"}`}>{f.label}:</span>{" "}
                          {f.value === true ? "Yes" : f.value === false ? "Not included" : f.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.href}
                    className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${
                      plan.highlight
                        ? "bg-blue text-blue-foreground hover:bg-blue-hover"
                        : "border border-border text-foreground hover:bg-muted dark:hover:bg-muted"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Discounts: 8% off for 2-year agreements · 14% off for 3-year agreements · 20% off for registered non-profits and Canadian public sector organizations
          </p>
        </div>
      </section>

      {/* ── Individual help ────────────────────────────────────────────────── */}
      <section className="bg-surface py-20 lg:py-24 dark:bg-card" id="individuals">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Individual help</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Not a business? We help individuals too.
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Whether you need a one-time fix, ongoing support, or help with a specific project — we keep it simple and affordable. Tell us what you need and we will work with you on the price.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {individualOptions.map((opt, i) => (
              <FadeIn key={opt.name} variant="scale-up" delay={i * 80}>
                <div className="flex flex-col rounded-xl border border-border bg-white p-7 dark:bg-background h-full">
                  <h3 className="mb-1 text-base font-semibold text-foreground">{opt.name}</h3>
                  <p className="mb-5 text-xs leading-relaxed text-muted-foreground">{opt.who}</p>
                  <div className="mb-5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold tabular-nums text-foreground">{opt.price}</span>
                      {opt.period && <span className="text-sm text-muted-foreground">{opt.period}</span>}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{opt.billing}</p>
                  </div>
                  <ul className="mb-7 flex-1 space-y-2">
                    {opt.what.map((w) => (
                      <li key={w} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue" />
                        <span className="text-foreground/75">{w}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={opt.href}
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted dark:hover:bg-muted"
                  >
                    {opt.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Not sure which option fits? Just reach out and describe what you need — we will suggest the right approach and give you a fair price.
          </p>
        </div>
      </section>

      {/* ── Add-on software ─────────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-24 dark:bg-background" id="add-ons">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Add-on software</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Extra software you can add to any plan
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                These are optional extras on Foundation and Professional plans. On Enterprise and Enterprise Plus, they are all included for free.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {addOns.map((addon, i) => (
              <FadeIn key={addon.name} variant="scale-up" delay={i * 80}>
                <div className="flex flex-col rounded-xl border border-border bg-white p-7 dark:bg-background h-full">
                  <h3 className="mb-2 text-base font-semibold text-foreground">{addon.name}</h3>
                  <p className="mb-5 flex-1 text-sm text-muted-foreground leading-relaxed">{addon.what}</p>
                  <div className="space-y-2.5 mb-4">
                    {addon.tiers.map((t) => (
                      <div key={t.label} className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3 dark:bg-card">
                        <div>
                          <p className="text-xs font-semibold text-foreground">{t.label}</p>
                          <p className="text-xs text-muted-foreground">{t.spec}</p>
                        </div>
                        <p className="font-mono text-sm font-semibold text-blue">{t.price}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Free on {addon.freeOn}.
                  </p>
                  <Link href={addon.href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue hover:underline">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── One-time projects ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background" id="projects">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">One-time projects</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Pay once. Get a specific thing done.
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                These are fixed-price projects with a defined scope. You know exactly what you are paying for before we start. We put it all in writing.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-10">
            {oneTimeProjects.map((group, gi) => (
              <FadeIn key={group.category} variant="fade-up" delay={gi * 60}>
                <div>
                  <div className="mb-4">
                    <h3 className="text-base font-semibold text-foreground">{group.category}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{group.description}</p>
                  </div>
                  <div className="overflow-hidden rounded-xl border border-border">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-surface dark:bg-muted">
                          <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">What we do</th>
                          <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground hidden sm:table-cell">How long</th>
                          <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-widest text-muted-foreground">Price (USD)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {group.rows.map((row, i) => (
                          <tr key={row.name} className={i % 2 === 0 ? "bg-white dark:bg-card" : "bg-surface dark:bg-background"}>
                            <td className="px-6 py-3.5 text-sm font-medium text-foreground">{row.name}</td>
                            <td className="px-6 py-3.5 text-sm text-muted-foreground hidden sm:table-cell">{row.detail}</td>
                            <td className="px-6 py-3.5 text-right font-mono text-sm font-semibold text-blue">{row.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Every project starts with a written scope of work — deliverables, timeline, and acceptance criteria — before we charge anything. Travel for on-site work is billed at cost.
          </p>
        </div>
      </section>

      {/* ── Monthly management services ──────────────────────────────────────── */}
      <section className="bg-canvas py-20 lg:py-24" id="management">
        <div className="container-enterprise">
          <FadeIn variant="blur-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Monthly management services</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                We run it for you every month — starting at $449/mo
              </h2>
              <p className="mt-4 text-base text-white/60">
                These are separate from your software plan. You can add any to an existing plan, or use them on their own. Month-to-month after an initial 3-month commitment. Bundle any of these with a software plan and get 12% off.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {managedServices.map((svc, i) => (
              <FadeIn key={svc.name} variant="scale-up" delay={i * 50}>
                <div className="flex flex-col rounded-xl border border-white/10 bg-white/[0.04] p-6 h-full">
                  <h3 className="mb-2 text-sm font-semibold text-white">{svc.name}</h3>
                  <p className="mb-4 flex-1 text-xs leading-relaxed text-white/60">{svc.what}</p>
                  <div className="mt-auto">
                    <p className="font-mono text-lg font-bold text-blue">{svc.price}</p>
                    <p className="mt-0.5 text-xs text-white/40">{svc.covers}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-white/40">
            All management services are month-to-month after the first 3 months. 30 days notice to cancel.
          </p>
        </div>
      </section>

      {/* ── Plan comparison ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background" id="compare">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Plan comparison</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Side-by-side: what you get on each plan
              </h2>
            </div>
          </FadeIn>

          <FadeIn variant="fade-in">
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr className="border-b border-border bg-surface dark:bg-muted">
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground w-[24%]">What you get</th>
                    {["Starter", "Foundation", "Business", "Professional", "Enterprise", "Enterprise Plus"].map((t) => (
                      <th key={t} className="px-3 py-4 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {t === "Enterprise" ? <span className="text-blue">{t}</span> : t}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonSections.map((section) => (
                    <React.Fragment key={section.section}>
                      <tr className="bg-blue-light dark:bg-blue/10">
                        <td colSpan={7} className="px-6 py-2 text-xs font-semibold uppercase tracking-widest text-blue">
                          {section.section}
                        </td>
                      </tr>
                      {section.rows.map((row, i) => (
                        <tr
                          key={row.feature}
                          className={`divide-x divide-border/40 ${i % 2 === 0 ? "bg-white dark:bg-card" : "bg-surface/50 dark:bg-background"}`}
                        >
                          <td className="px-6 py-3 text-sm text-foreground/80">{row.feature}</td>
                          <td className="px-3 py-3 text-center"><Cell value={(row as Record<string, string | boolean | undefined>).starter} /></td>
                          <td className="px-3 py-3 text-center"><Cell value={(row as Record<string, string | boolean | undefined>).foundation} /></td>
                          <td className="px-3 py-3 text-center"><Cell value={(row as Record<string, string | boolean | undefined>).business} /></td>
                          <td className="px-3 py-3 text-center"><Cell value={(row as Record<string, string | boolean | undefined>).professional} /></td>
                          <td className="px-3 py-3 text-center bg-blue/[0.03]"><Cell value={(row as Record<string, string | boolean | undefined>).enterprise} /></td>
                          <td className="px-3 py-3 text-center"><Cell value={(row as Record<string, string | boolean | undefined>).plus} /></td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-border bg-surface dark:bg-muted">
                    <td className="px-6 py-4 text-xs text-muted-foreground">All prices USD · annual billing</td>
                    {[
                      { price: "$299/mo", href: "/contact?plan=starter" },
                      { price: "$799/mo", href: "/contact?plan=foundation" },
                      { price: "$1,299/mo", href: "/contact?plan=business" },
                      { price: "$2,199/mo", href: "/contact?plan=professional" },
                      { price: "$5,499/mo", href: "/contact?plan=enterprise" },
                      { price: "Custom", href: "/contact?plan=enterprise-plus" },
                    ].map((t) => (
                      <td key={t.price} className="px-3 py-4 text-center">
                        <Link
                          href={t.href}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-blue hover:underline"
                        >
                          {t.price} <ArrowRight className="h-3 w-3" />
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Transparency section ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background" id="transparency">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Full transparency</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Everything you agree to — spelled out clearly
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                No small print. Here is exactly what happens with setup fees, what we guarantee, what happens if we miss it, what is not covered, and how to cancel.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

            {/* Setup fees */}
            <FadeIn variant="slide-left">
              <div className="rounded-xl border border-border bg-surface p-7 dark:bg-card h-full">
                <h3 className="mb-1 text-base font-semibold text-foreground">One-time setup fees</h3>
                <p className="mb-5 text-sm text-muted-foreground">Paid once at the start. Covers connecting your systems, configuring the platform, and a handover session with your team.</p>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-border">
                    {[
                      { plan: "Starter", fee: "$199" },
                      { plan: "Foundation", fee: "$499" },
                      { plan: "Business", fee: "$499" },
                      { plan: "Professional", fee: "$499" },
                      { plan: "Enterprise", fee: "No setup fee" },
                      { plan: "Enterprise Plus", fee: "No setup fee" },
                    ].map((r) => (
                      <tr key={r.plan} className="flex items-center justify-between py-2">
                        <td className="text-foreground/80">{r.plan}</td>
                        <td className="font-mono font-semibold text-foreground">{r.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* SLA credits */}
            <FadeIn variant="slide-right">
              <div className="rounded-xl border border-border bg-surface p-7 dark:bg-card h-full">
                <h3 className="mb-1 text-base font-semibold text-foreground">What happens if we miss our uptime guarantee</h3>
                <p className="mb-5 text-sm text-muted-foreground">This is written in your contract. If we fall short, you get a credit on your next bill — automatically, without having to ask.</p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      <th className="pb-2">If uptime drops to...</th>
                      <th className="pb-2 text-right">Credit you receive</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { condition: "Below guarantee, but above 99.5%", credit: "10% of that month" },
                      { condition: "Below 99.5%", credit: "25% of that month" },
                      { condition: "Below 99.0%", credit: "50% of that month" },
                      { condition: "3 misses in 12 months", credit: "Exit contract, no penalty" },
                    ].map((r) => (
                      <tr key={r.condition}>
                        <td className="py-2 pr-4 text-foreground/80">{r.condition}</td>
                        <td className="py-2 text-right font-semibold text-blue">{r.credit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* What's not included */}
            <FadeIn variant="slide-left">
              <div className="rounded-xl border border-border bg-surface p-7 dark:bg-card h-full">
                <h3 className="mb-1 text-base font-semibold text-foreground">What is NOT included in your plan</h3>
                <p className="mb-5 text-sm text-muted-foreground">We will always tell you before doing anything that falls outside your plan. No surprise invoices.</p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {[
                    "Hardware — computers, servers, cables, switches (we help you buy them, but they're your purchase)",
                    "Internet service costs — your ISP bill",
                    "Third-party software licenses — Microsoft 365, Google Workspace, Salesforce, etc.",
                    "Data storage beyond your plan's included limit",
                    "On-site visits — quoted separately, travel billed at cost with no markup",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Minus className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Cancellation */}
            <FadeIn variant="slide-right">
              <div className="rounded-xl border border-border bg-surface p-7 dark:bg-card h-full">
                <h3 className="mb-1 text-base font-semibold text-foreground">How to cancel</h3>
                <p className="mb-5 text-sm text-muted-foreground">No traps. Here are the exact terms for every plan type.</p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  {[
                    { label: "Annual plan", detail: "60 days written notice. No refund on prepaid months, but we won't charge you for the remaining contract period." },
                    { label: "Month-to-month (15% premium)", detail: "30 days written notice. Cancel any time." },
                    { label: "2-year or 3-year plan", detail: "Early exit costs 3 months of your plan price. We will quote this before you sign." },
                    { label: "Management services", detail: "Month-to-month after first 3 months. 30 days notice to cancel." },
                  ].map((item) => (
                    <li key={item.label}>
                      <p className="font-semibold text-foreground">{item.label}</p>
                      <p className="mt-0.5 text-muted-foreground">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="bg-surface py-20 lg:py-24 dark:bg-card" id="faq">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Common questions</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Things people usually ask before signing up
              </h2>
            </div>
          </FadeIn>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection
        title="Not sure which option fits your situation?"
        subtitle="Tell us how many systems you have, what locations you run, and what's keeping you up at night. We'll come back with an honest recommendation and a real number."
        primaryLabel="Get a custom quote"
        primaryHref="/contact?inquiry=pricing"
        secondaryLabel="See all products"
        secondaryHref="/products"
      />
    </>
  )
}
