import { JsonLd } from "@/components/ui/JsonLd"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, CheckCircle2, Globe, Lock,
  Network, RefreshCw, Server, Shield, Wifi, Zap,
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { NetworkHeroVisual } from "@/components/ui/ServiceHeroVisuals"
import { CTASection } from "@/components/sections/CTASection"
import { FadeIn } from "@/components/ui/FadeIn"
import { FaqAccordion } from "@/components/ui/FaqAccordion"

const rightFor = [
  "Your offices, data centres, and cloud environments need to reliably communicate and you don't fully control how",
  "You've had network outages that took down operations — not just inconvenienced users",
  "Your network has grown ad-hoc over years and you don't have a clear view of it end to end",
  "You need to connect a new office, data centre, or region and do it properly",
  "Remote workers need secure access without the slowness and maintenance burden of a traditional VPN",
]

const notRightFor = [
  "You need basic internet access set up for a single office — that's a telecoms order, not a network design",
  "You need WiFi and cable runs installed in a single building — that's facilities work",
]

const faqs: { q: string; a: string }[] = [
  {
    q: "What is a WAN?",
    a: "A WAN (Wide Area Network) is the network that connects your different locations — offices, data centres, cloud environments — to each other. A well-designed WAN means traffic flows reliably between your sites, with automatic failover if a connection fails. A poorly designed WAN is often the reason an office 'goes down' when a single circuit has a problem.",
  },
  {
    q: "What is SD-WAN?",
    a: "SD-WAN (Software-Defined WAN) is an approach to WAN networking that gives you central control over how traffic is routed across multiple connection types — MPLS, broadband, 4G, cloud on-ramps — from a single management point. It allows application-aware routing, automatic failover, and cost optimization without the rigidity of traditional MPLS-only architectures.",
  },
  {
    q: "We have a network that kind of works — why would we redesign it?",
    a: "Because 'kind of works' tends to fail at the worst moment and cost more to maintain than a properly designed network. Ad-hoc networks accumulate single points of failure, undocumented dependencies, and security gaps that only become visible during an incident. We typically find the risks are larger than the organization realized — and remediation is easier before an incident than after.",
  },
  {
    q: "What happens to operations during a network redesign?",
    a: "Nothing, if we've done our job. We design new connectivity in parallel with existing circuits, migrate traffic in controlled cutover windows, and maintain fallback to the old configuration until the new one is proven stable. We don't do hard cutovers that put your operations at risk.",
  },
  {
    q: "What is Zero Trust Network Access?",
    a: "ZTNA (Zero Trust Network Access) replaces the concept of a network perimeter with per-application, per-identity access control. Instead of connecting to a VPN and having broad access to the network, users access only the specific applications they're authorized for — based on who they are, what device they're on, and the context at the time of the request. It's more secure and typically faster than traditional VPN.",
  },
  {
    q: "How much does it cost?",
    a: "Network design engagements are scoped based on the number of sites, the complexity of the environment, and whether implementation follows the design. We'll give you a fixed-price engagement after an initial discovery conversation and traffic flow analysis.",
  },
]

export const metadata: Metadata = {
  title: "Enterprise Network Services Canada | SD-WAN & Private WAN | Aethon Core",
  description: "Enterprise network services across Canada. Private WAN, SD-WAN, SASE, and managed connectivity for distributed organizations. High-availability design, 24/7 operations, and SLA-backed uptime.",
  keywords: [
    "enterprise network services Canada",
    "SD-WAN Canada",
    "private WAN Canada",
    "network managed services Canada",
    "SASE Canada",
    "managed network services British Columbia",
    "enterprise WAN Canada",
    "network infrastructure Canada",
    "managed connectivity Canada",
    "business network services Canada",
  ],
  alternates: { canonical: "https://aethoncore.com/services/network" },
  openGraph: {
    type: "website", locale: "en_CA", url: "https://aethoncore.com/services/network",
    siteName: "Aethon Core",
    title: "Enterprise Network Services Canada | SD-WAN & Private WAN | Aethon Core",
    description: "Enterprise network services across Canada. Private WAN, SD-WAN, SASE, and managed connectivity for distributed organizations. High-availability design, 24/7 operations, and SLA-backed uptime.",
  },
}

const capabilities = [
  {
    icon: Globe,
    title: "Private WAN and SD-WAN",
    description:
      "Purpose-built private wide-area networks for enterprises with distributed sites, data centres, and cloud environments. SD-WAN overlays that provide application-aware routing, automatic failover, and centralized policy — without the complexity of traditional MPLS management.",
    note: "Covers: MPLS, SD-WAN, hybrid WAN, SASE integration",
  },
  {
    icon: Lock,
    title: "Secure network access without a traditional VPN",
    description:
      "Replace legacy VPN with access control based on who you are, what device you're on, and what you need — not just where you're connecting from. If a device is compromised, it can't reach everything the way an old-style VPN allows.",
    note: "Per-application, per-identity access control",
  },
  {
    icon: Server,
    title: "Data centre interconnect",
    description:
      "High-bandwidth, low-latency connectivity between co-location facilities, private data centres, and cloud environments. Dark fibre, lit fibre, and carrier Ethernet options designed to your throughput and latency requirements — sized correctly rather than over-provisioned for comfort.",
    note: "< 10ms round-trip on standard DCI routes across major Canadian and US metros",
  },
  {
    icon: Wifi,
    title: "Cloud on-ramps and direct connectivity",
    description:
      "AWS Direct Connect, Azure ExpressRoute, and Google Cloud Interconnect — designed, provisioned, and managed. Redundant circuits with automated failover, BGP route management, and capacity planning so your cloud connectivity doesn't become a single point of failure.",
    note: "Redundant circuits as standard · BGP-managed failover · Capacity headroom built in",
  },
  {
    icon: Network,
    title: "Network segmentation and microsegmentation",
    description:
      "Control traffic between systems at the most detailed level. Separate your network by business function, data type, and compliance requirement — without the management overhead of traditional approaches. Segmentation that grows with your organization.",
    note: "Supports: OT/IT segmentation, PCI cardholder data environment isolation, guest network separation",
  },
  {
    icon: RefreshCw,
    title: "Network resilience and failover design",
    description:
      "Networks designed to survive real failure scenarios — not just the ones in the vendor documentation. Every design includes a failure mode analysis, failover validation, and a tested recovery procedure. Mean time to failover is measured, not assumed.",
    note: "Sub-60-second failover on all primary-path designs",
  },
  {
    icon: Shield,
    title: "Network security and DDoS protection",
    description:
      "Inline threat detection, DDoS mitigation, and network-layer security controls. Scrubbing centres, anycast routing, and traffic baselining that distinguishes attack traffic from legitimate volume spikes. Security that operates at the network layer — not just the application layer.",
    note: "BGP blackholing · Scrubbing centre integration · Real-time traffic analysis",
  },
  {
    icon: Zap,
    title: "Edge and branch connectivity",
    description:
      "Managed connectivity for distributed branch offices, retail locations, manufacturing sites, and remote facilities. Standardized edge deployments with central management, zero-touch provisioning, and 24/7 monitoring — so branch connectivity is never the reason your operations go down.",
    note: "Zero-touch provisioning · Centralized monitoring · 4G/5G failover as standard",
  },
]

const deliverables = [
  "Network architecture assessment and current-state documentation",
  "Traffic flow analysis and capacity modelling",
  "Logical and physical network design with redundancy modelling",
  "Vendor-neutral technology selection and procurement support",
  "Implementation, testing, and cutover management",
  "BGP and routing configuration and validation",
  "Failover testing and recovery procedure documentation",
  "Handover to operations with runbook documentation",
]

const complianceFrameworks = [
  { label: "PCI DSS", detail: "CDE network isolation and segmentation controls" },
  { label: "HIPAA", detail: "ePHI network transmission encryption requirements" },
  { label: "NERC CIP", detail: "OT/IT network boundary controls and monitoring" },
  { label: "FedRAMP", detail: "Boundary protection and network access controls" },
  { label: "SOC 2", detail: "Network access control and monitoring requirements" },
  { label: "ISO 27001", detail: "Network security management controls" },
]

export default function NetworkConnectivityPage() {
  return (
    <>
      <JsonLd schema={[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://aethoncore.com"},{"@type":"ListItem","position":2,"name":"Services","item":"https://aethoncore.com/services"},{"@type":"ListItem","position":3,"name":"Network & Connectivity","item":"https://aethoncore.com/services/network"}]},{"@context":"https://schema.org","@type":"Service","name":"Network & Connectivity","url":"https://aethoncore.com/services/network","provider":{"@type":"Organization","name":"Aethon Core Inc.","url":"https://aethoncore.com"},"areaServed":[{"@type":"Country","name":"Canada"},{"@type":"Country","name":"United States"}],"serviceType":"Network & Connectivity"}]} />
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Network & Connectivity" }]}
        eyebrow="Services — Network & Connectivity"
        title="Enterprise networking that stays up when everything else goes down"
        subtitle="Private WAN, SD-WAN, zero trust network access, and data centre interconnect — designed around your workloads, your compliance requirements, and your tolerance for downtime."
        variant="tinted"
        visual={<NetworkHeroVisual />}
      />

      {/* Capabilities */}
      <section className="bg-white py-16 dark:bg-background lg:py-20">
        <div className="container-enterprise">
          <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-blue">
            What we deliver
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 dark:bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-light">
                    <cap.icon className="h-5 w-5 text-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-sm font-semibold text-foreground">{cap.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
                  </div>
                </div>
                <div className="ml-14 rounded-md bg-white px-3 py-2 dark:bg-background">
                  <p className="text-xs text-muted-foreground">{cap.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-surface py-16 dark:bg-card lg:py-20">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">
                Engagement deliverables
              </p>
              <h2 className="mb-6 text-2xl font-semibold text-foreground lg:text-3xl">
                What every engagement includes
              </h2>
              <ul className="space-y-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">
                Compliance frameworks
              </p>
              <h2 className="mb-6 text-2xl font-semibold text-foreground lg:text-3xl">
                Network controls mapped to your framework
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Every network design is reviewed against the compliance frameworks relevant to your industry. Network segmentation, access control, and logging requirements are built into the architecture from the start — not retrofitted.
              </p>
              <div className="space-y-3">
                {complianceFrameworks.map((fw) => (
                  <div
                    key={fw.label}
                    className="flex items-start gap-4 rounded-lg border border-border bg-white p-4 dark:bg-background"
                  >
                    <span className="mt-0.5 shrink-0 rounded-md bg-blue-light px-2 py-0.5 text-[11px] font-semibold text-blue">
                      {fw.label}
                    </span>
                    <p className="text-xs leading-relaxed text-muted-foreground">{fw.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-canvas py-16 lg:py-20">
        <div className="container-enterprise">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">
              How we approach it
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Network design from operational first principles
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Understand the workloads first",
                body: "Network requirements are derived from what runs on the network — not the other way around. We start by documenting your workloads, their latency and throughput requirements, their compliance constraints, and their failure tolerance before drawing a single topology diagram.",
              },
              {
                step: "02",
                title: "Design for failure, not uptime",
                body: "Every network we design has a documented failure mode analysis. We identify every single point of failure, model the impact of each, and design redundancy accordingly. Then we test the failover — not on paper, but in the environment — before calling the design done.",
              },
              {
                step: "03",
                title: "Operate what we build",
                body: "Most network design engagements end at implementation. We can take ongoing operational responsibility for the networks we build — 24/7 monitoring, incident response, and proactive capacity management — so your team isn't managing infrastructure we designed but don't own.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-xl bg-white/[0.04] p-6">
                <p className="mb-3 font-mono text-2xl font-semibold text-white/20">{item.step}</p>
                <h3 className="mb-3 text-sm font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-canvas-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-white py-16 dark:bg-background lg:py-20">
        <div className="container-enterprise">
          <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-blue">
            Related services
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { label: "Cloud Infrastructure", href: "/services/cloud", desc: "Multi-cloud and hybrid environments designed for resilience." },
              { label: "Cybersecurity", href: "/services/security", desc: "Zero Trust security and 24/7 monitoring coverage." },
              { label: "Managed Services", href: "/services/managed", desc: "24/7 operations and support from engineers who know your stack." },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col gap-2 rounded-xl border border-border bg-surface p-5 transition-all hover:border-blue/30 hover:shadow-sm dark:bg-card"
              >
                <span className="text-sm font-semibold text-foreground group-hover:text-blue transition-colors">
                  {s.label}
                </span>
                <span className="text-xs leading-relaxed text-muted-foreground">{s.desc}</span>
                <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-blue">
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
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
        variant="navy"
        title="Need a network that stays up?"
        subtitle="Tell us about your environment and we'll come back with a direct assessment — no padded proposals, no vendor pitches."
        primaryLabel="Start a conversation"
        primaryHref="/contact?inquiry=network"
        secondaryLabel="All services"
        secondaryHref="/services"
      />
    </>
  )
}
