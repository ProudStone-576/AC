export type SearchEntry = {
  title: string
  description: string
  href: string
  category: string
  keywords?: string[]
}

export const searchIndex: SearchEntry[] = [
  // Core pages
  { title: "Home", description: "Managed IT, cloud, security, and network services for businesses across Canada", href: "/", category: "Pages" },
  { title: "Pricing", description: "Monthly plans from $799/mo, one-time projects, and individual help", href: "/pricing", category: "Pages" },
  { title: "Contact", description: "Talk to our team — we respond within one business day", href: "/contact", category: "Pages" },
  { title: "About Aethon Core", description: "Who we are, how we work, and why we started", href: "/about", category: "Pages" },
  { title: "Leadership", description: "Meet the team behind Aethon Core", href: "/about/leadership", category: "Pages" },
  { title: "How We Work", description: "Our process — how we onboard, manage, and support clients", href: "/how-we-work", category: "Pages" },
  { title: "Careers", description: "Open roles at Aethon Core", href: "/careers", category: "Pages" },
  { title: "Newsroom", description: "News and announcements from Aethon Core", href: "/newsroom", category: "Pages" },
  { title: "Partners", description: "Technology and channel partners", href: "/partners", category: "Pages" },
  { title: "ROI Estimator", description: "See what managed IT could save your business", href: "/roi", category: "Pages" },
  { title: "Locations", description: "Cities we serve across Canada", href: "/locations", category: "Pages" },

  // Services
  { title: "Managed IT Services", description: "24/7 monitoring, help desk, patch management, and incident response", href: "/services/managed", category: "Services", keywords: ["msp", "help desk", "support", "monitoring"] },
  { title: "Cloud Infrastructure", description: "AWS, Azure, and Google Cloud — designed, deployed, and managed", href: "/services/cloud", category: "Services", keywords: ["aws", "azure", "gcp", "cloud", "migration"] },
  { title: "Cybersecurity", description: "Zero Trust, 24/7 SOC, threat detection and incident response", href: "/services/security", category: "Services", keywords: ["soc", "mdr", "zero trust", "threat", "hack", "breach"] },
  { title: "Network & Connectivity", description: "Private WAN, SD-WAN, and secure remote access", href: "/services/network", category: "Services", keywords: ["wan", "sdwan", "vpn", "network"] },
  { title: "Identity & Access (IAM)", description: "SSO, PAM, MFA, and Zero Trust identity", href: "/services/iam", category: "Services", keywords: ["sso", "mfa", "pam", "identity", "access control"] },
  { title: "Compliance & Audit", description: "SOC 2, HIPAA, FedRAMP, PCI DSS, ISO 27001", href: "/services/compliance", category: "Services", keywords: ["soc2", "hipaa", "pci", "iso", "audit", "gdpr"] },
  { title: "Disaster Recovery & BCP", description: "Tested recovery with RTO/RPO guarantees", href: "/services/disaster-recovery", category: "Services", keywords: ["dr", "backup", "rto", "rpo", "business continuity"] },
  { title: "Enterprise AI", description: "Production AI on your data, in your environment", href: "/services/ai", category: "Services", keywords: ["machine learning", "llm", "openai", "ai infrastructure"] },
  { title: "Data & Analytics", description: "Data pipelines, warehouses, dashboards, and BI", href: "/services/analytics", category: "Services", keywords: ["data warehouse", "bi", "tableau", "snowflake", "databricks"] },
  { title: "App Development", description: "Custom web and mobile applications", href: "/services/apps", category: "Services", keywords: ["web app", "mobile app", "software development"] },
  { title: "Website & SEO", description: "Fast sites that rank and convert", href: "/services/web", category: "Services", keywords: ["website", "seo", "landing page"] },
  { title: "Reputation Management", description: "Review monitoring and removal escalation", href: "/services/reputation", category: "Services", keywords: ["reviews", "google reviews", "reputation"] },
  { title: "Strategy Consulting", description: "Digital transformation and technology roadmaps", href: "/services/consulting", category: "Services", keywords: ["cto", "cio", "advisory", "roadmap"] },
  { title: "Architecture Review", description: "Infrastructure assessment and design", href: "/services/architecture", category: "Services", keywords: ["assessment", "design", "review"] },
  { title: "Implementation", description: "Full-cycle deployment and integration", href: "/services/implementation", category: "Services", keywords: ["deploy", "integration", "rollout"] },
  { title: "Training & Enablement", description: "Upskill your teams for long-term success", href: "/services/training", category: "Services", keywords: ["training", "workshop", "certification"] },
  { title: "DevOps", description: "CI/CD pipelines, infrastructure as code, and platform engineering", href: "/services/devops", category: "Services", keywords: ["cicd", "terraform", "kubernetes", "docker"] },
  { title: "Data Governance", description: "Data catalog, lineage, quality, and compliance-grade controls", href: "/services/data-governance", category: "Services", keywords: ["data catalog", "lineage", "stewardship"] },
  { title: "FinOps", description: "Cloud cost optimization across AWS, Azure, and GCP", href: "/services/finops", category: "Services", keywords: ["cloud cost", "cost optimization", "billing"] },
  { title: "Digital Transformation", description: "End-to-end transformation programs", href: "/services/transformation", category: "Services", keywords: ["transformation", "modernization"] },

  // Products
  { title: "Aethon Core Platform", description: "Core enterprise infrastructure layer", href: "/products/platform", category: "Products" },
  { title: "Analytics Suite", description: "Real-time data intelligence at scale", href: "/products/analytics", category: "Products" },
  { title: "Security Center", description: "End-to-end threat detection and response", href: "/products/security", category: "Products" },
  { title: "Automation Engine", description: "Enterprise workflow automation", href: "/products/automation", category: "Products" },

  // Industries
  { title: "Financial Services", description: "IT services for banks, credit unions, and financial firms", href: "/industries/financial-services", category: "Industries", keywords: ["bank", "fintech", "insurance", "finance"] },
  { title: "Healthcare", description: "Compliant IT services for healthcare providers", href: "/industries/healthcare", category: "Industries", keywords: ["hospital", "clinic", "emr", "hipaa", "health"] },
  { title: "Manufacturing", description: "IT and OT security for manufacturing operations", href: "/industries/manufacturing", category: "Industries", keywords: ["ot", "scada", "factory", "production"] },
  { title: "Retail & Commerce", description: "Managed IT for retail and e-commerce businesses", href: "/industries/retail", category: "Industries", keywords: ["ecommerce", "pos", "retail"] },
  { title: "Government & Public Sector", description: "Compliant IT services for government agencies", href: "/industries/government", category: "Industries", keywords: ["government", "public sector", "fedramp", "municipal"] },
  { title: "Energy & Utilities", description: "IT and OT security for energy and utility companies", href: "/industries/energy", category: "Industries", keywords: ["oil", "gas", "utilities", "critical infrastructure"] },

  // Resources
  { title: "Case Studies", description: "Real client outcomes and project results", href: "/case-studies", category: "Resources" },
  { title: "Insights & Blog", description: "Articles, guides, and technical deep-dives", href: "/insights", category: "Resources" },
  { title: "Documentation", description: "Technical documentation and user guides", href: "/docs", category: "Resources" },
  { title: "Events & Webinars", description: "Upcoming events, webinars, and workshops", href: "/events", category: "Resources" },
  { title: "White Papers", description: "In-depth research and technical white papers", href: "/resources/white-papers", category: "Resources" },

  // Locations
  { title: "Vancouver", description: "Managed IT services in Vancouver, BC", href: "/locations/vancouver", category: "Locations", keywords: ["vancouver", "bc", "british columbia"] },
  { title: "Calgary", description: "Managed IT services in Calgary, AB", href: "/locations/calgary", category: "Locations", keywords: ["calgary", "alberta"] },
  { title: "Edmonton", description: "Managed IT services in Edmonton, AB", href: "/locations/edmonton", category: "Locations", keywords: ["edmonton", "alberta"] },
  { title: "Ottawa", description: "Managed IT services in Ottawa, ON", href: "/locations/ottawa", category: "Locations", keywords: ["ottawa", "ontario"] },
  { title: "Toronto", description: "Managed IT services in Toronto, ON", href: "/locations/toronto", category: "Locations", keywords: ["toronto", "ontario"] },
  { title: "Montreal", description: "Managed IT services in Montreal, QC", href: "/locations/montreal", category: "Locations", keywords: ["montreal", "quebec"] },
  { title: "Winnipeg", description: "Managed IT services in Winnipeg, MB", href: "/locations/winnipeg", category: "Locations", keywords: ["winnipeg", "manitoba"] },
  { title: "Hamilton", description: "Managed IT services in Hamilton, ON", href: "/locations/hamilton", category: "Locations", keywords: ["hamilton", "ontario"] },
  { title: "Kitchener-Waterloo", description: "Managed IT services in Kitchener-Waterloo, ON", href: "/locations/kitchener-waterloo", category: "Locations", keywords: ["kitchener", "waterloo"] },
  { title: "Mississauga", description: "Managed IT services in Mississauga, ON", href: "/locations/mississauga", category: "Locations", keywords: ["mississauga", "ontario"] },

  // Legal
  { title: "Privacy Policy", description: "How we handle your data", href: "/legal/privacy", category: "Legal" },
  { title: "Terms of Service", description: "Terms governing use of our services", href: "/legal/terms", category: "Legal" },
  { title: "SLA", description: "Service Level Agreement — our uptime and response commitments", href: "/legal/sla", category: "Legal" },
  { title: "System Status", description: "Live status of Aethon Core services", href: "/status", category: "Pages", keywords: ["uptime", "outage", "status"] },
]
