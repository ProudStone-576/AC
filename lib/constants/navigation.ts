import type { NavSection } from "@/types"

export const navigation: NavSection[] = [
  {
    label: "Products",
    href: "/products",
    mega: true,
    groups: [
      {
        label: "Platform",
        items: [
          {
            label: "Aethon Core Platform",
            href: "/products/platform",
            description: "Core enterprise infrastructure layer",
            icon: "layers",
          },
          {
            label: "Analytics Suite",
            href: "/products/analytics",
            description: "Real-time data intelligence at scale",
            icon: "bar-chart-2",
          },
        ],
      },
      {
        label: "Security & Automation",
        items: [
          {
            label: "Security Center",
            href: "/products/security",
            description: "End-to-end threat detection and response",
            icon: "shield",
          },
          {
            label: "Automation Engine",
            href: "/products/automation",
            description: "Enterprise workflow automation",
            icon: "zap",
          },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    mega: true,
    groups: [
      {
        label: "Infrastructure",
        items: [
          {
            label: "Cloud Infrastructure",
            href: "/services/cloud",
            description: "Multi-cloud and hybrid environments",
            icon: "server",
          },
          {
            label: "Network & Connectivity",
            href: "/services/network",
            description: "Private WAN, SD-WAN, global fabric",
            icon: "network",
          },
          {
            label: "Managed Services",
            href: "/services/managed",
            description: "24/7 operations by engineers who know your stack",
            icon: "headphones",
          },
          {
            label: "Disaster Recovery & BCP",
            href: "/services/disaster-recovery",
            description: "Tested recovery with RTO/RPO guarantees",
            icon: "refresh-cw",
          },
        ],
      },
      {
        label: "Security",
        items: [
          {
            label: "Cybersecurity",
            href: "/services/security",
            description: "Zero Trust, 24/7 SOC, incident response",
            icon: "shield",
          },
          {
            label: "Identity & Access",
            href: "/services/iam",
            description: "SSO, PAM, MFA, Zero Trust identity",
            icon: "key",
          },
          {
            label: "Compliance & Audit",
            href: "/services/compliance",
            description: "SOC 2, HIPAA, FedRAMP, PCI DSS",
            icon: "shield",
          },
          {
            label: "Enterprise AI",
            href: "/services/ai",
            description: "Production AI on your data, in your environment",
            icon: "cpu",
          },
        ],
      },
      {
        label: "Build & Digital",
        items: [
          {
            label: "App Development",
            href: "/services/apps",
            description: "Custom web and mobile applications",
            icon: "code-2",
          },
          {
            label: "Website & SEO",
            href: "/services/web",
            description: "Fast sites that rank and convert",
            icon: "globe",
          },
          {
            label: "Reputation Management",
            href: "/services/reputation",
            description: "Review monitoring and removal escalation",
            icon: "star",
          },
          {
            label: "Data & Analytics",
            href: "/services/analytics",
            description: "End-to-end data infrastructure and dashboards",
            icon: "bar-chart-2",
          },
        ],
      },
      {
        label: "Advisory",
        items: [
          {
            label: "Strategy Consulting",
            href: "/services/consulting",
            description: "Digital transformation roadmaps",
            icon: "compass",
          },
          {
            label: "Architecture Review",
            href: "/services/architecture",
            description: "Infrastructure assessment and design",
            icon: "layout",
          },
          {
            label: "Implementation",
            href: "/services/implementation",
            description: "Full-cycle deployment and integration",
            icon: "git-merge",
          },
          {
            label: "Training & Enablement",
            href: "/services/training",
            description: "Upskill your teams for long-term success",
            icon: "users",
          },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    items: [
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Retail & Commerce", href: "/industries/retail" },
      { label: "Government & Public Sector", href: "/industries/government" },
      { label: "Energy & Utilities", href: "/industries/energy" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    items: [
      { label: "About Aethon Core", href: "/about" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Careers", href: "/careers" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Partners", href: "/partners" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Resources",
    href: "/resources",
    items: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Insights & Blog", href: "/insights" },
      { label: "ROI Estimator", href: "/roi" },
      { label: "Documentation", href: "/docs" },
      { label: "Events & Webinars", href: "/events" },
      { label: "White Papers", href: "/resources/white-papers" },
    ],
  },
]

export const footerNavigation = {
  products: [
    { label: "Aethon Core Platform", href: "/products/platform" },
    { label: "Analytics Suite", href: "/products/analytics" },
    { label: "Security Center", href: "/products/security" },
    { label: "Automation Engine", href: "/products/automation" },
    { label: "Pricing", href: "/pricing" },
  ],
  services: [
    { label: "Cloud Infrastructure", href: "/services/cloud" },
    { label: "Managed Services", href: "/services/managed" },
    { label: "Cybersecurity", href: "/services/security" },
    { label: "App Development", href: "/services/apps" },
    { label: "Website & SEO", href: "/services/web" },
    { label: "Reputation Management", href: "/services/reputation" },
    { label: "Enterprise AI", href: "/services/ai" },
    { label: "Strategy Consulting", href: "/services/consulting" },
    { label: "Implementation", href: "/services/implementation" },
    { label: "Compliance & Audit", href: "/services/compliance" },
  ],
  company: [
    { label: "About Aethon Core", href: "/about" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Careers", href: "/careers" },
    { label: "Newsroom", href: "/newsroom" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights & Blog", href: "/insights" },
    { label: "ROI Estimator", href: "/roi" },
    { label: "Documentation", href: "/docs" },
    { label: "Events", href: "/events" },
    { label: "White Papers", href: "/resources/white-papers" },
    { label: "All Locations", href: "/locations" },
    { label: "Toronto", href: "/locations/toronto" },
    { label: "Vancouver", href: "/locations/vancouver" },
    { label: "Calgary", href: "/locations/calgary" },
    { label: "Ottawa", href: "/locations/ottawa" },
  ],
  legal: [
    { label: "Legal Center", href: "/legal" },
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Service Level Agreement", href: "/legal/sla" },
    { label: "Data Processing Addendum", href: "/legal/dpa" },
    { label: "Acceptable Use Policy", href: "/legal/acceptable-use" },
    { label: "Cookie Policy", href: "/legal/cookies" },
    { label: "Accessibility", href: "/legal/accessibility" },
    { label: "System Status", href: "/status" },
  ],
}
