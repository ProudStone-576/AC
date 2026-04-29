import { JsonLd } from "@/components/ui/JsonLd"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  FileText,
  Lock,
  Search,
  ShieldCheck,
  Zap,
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { SecurityHeroVisual } from "@/components/ui/ServiceHeroVisuals"
import { CTASection } from "@/components/sections/CTASection"
import {
  ServiceOutcomeSection,
  ServicePhotoGrid,
  ServiceWalkthroughSection,
} from "@/components/sections/ServicePageAdditions"
import { FadeIn } from "@/components/ui/FadeIn"
import { FaqAccordion } from "@/components/ui/FaqAccordion"

const faqs = [
  {
    q: "What does Zero Trust mean in simple English?",
    a: "It means your systems stop giving automatic trust just because someone is inside the network. Every person and device has to prove they should have access.",
  },
  {
    q: "Do we need a big project before improving security?",
    a: "No. We usually start with the highest-risk gaps first so you get real improvement early instead of waiting for a perfect future state.",
  },
  {
    q: "Will this only help with audits?",
    a: "No. Good security should help you pass audits and reduce the chance that one mistake or stolen password turns into a bigger incident.",
  },
  {
    q: "How fast can monitoring be set up?",
    a: "Many teams are live in four to six weeks, depending on how many systems need to be connected and how much tuning is needed.",
  },
  {
    q: "What happens when you find a serious issue?",
    a: "We tell you quickly, explain the risk in plain language, and give you a clear plan for what to fix first.",
  },
]

export const metadata: Metadata = {
  title: "Managed Cybersecurity Services Canada | MDR & Zero Trust | Aethon Core",
  description: "Enterprise cybersecurity and managed detection & response for Canadian organizations. Zero Trust architecture, 24/7 SOC, threat intelligence, and compliance-grade security controls. Toronto & national.",
  keywords: [
    "managed cybersecurity services Canada",
    "MDR Canada",
    "managed detection response Canada",
    "cybersecurity company Toronto",
    "SOC as a service Canada",
    "Zero Trust security Canada",
    "cybersecurity services Ontario",
    "enterprise security Canada",
    "24/7 SOC Canada",
    "SIEM managed services Canada",
    "cybersecurity company Canada",
  ],
  alternates: { canonical: "https://aethoncore.com/services/security" },
  openGraph: {
    type: "website", locale: "en_CA", url: "https://aethoncore.com/services/security",
    siteName: "Aethon Core",
    title: "Managed Cybersecurity Services Canada | MDR & Zero Trust | Aethon Core",
    description: "Enterprise cybersecurity and managed detection & response for Canadian organizations. Zero Trust architecture, 24/7 SOC, threat intelligence, and compliance-grade security controls. Toronto & national.",
  },
}

const outcomes = [
  {
    title: "Lower risk from simple mistakes",
    description:
      "One weak password, one shared account, or one missed setting should not be enough to expose your whole business.",
  },
  {
    title: "Clearer answers for leadership",
    description:
      "Leaders get a simple picture of what matters most, what is already protected, and what still needs work.",
  },
  {
    title: "Better security without panic",
    description:
      "We fix the biggest gaps first so the work feels practical instead of overwhelming.",
  },
]

const photoCards = [
  {
    title: "Security people can understand",
    description:
      "We explain risks in business terms so teams know what could go wrong and why it matters.",
    imageSrc:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Digital network illustration representing cybersecurity monitoring",
  },
  {
    title: "Protection built into everyday work",
    description:
      "Good security becomes part of access, devices, and systems instead of a separate burden people ignore.",
    imageSrc:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Person using laptop with security dashboard visible",
  },
  {
    title: "A plan for incidents before they happen",
    description:
      "When something suspicious shows up, the next steps are already clear instead of being invented on the fly.",
    imageSrc:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Security analyst reviewing alerts on multiple screens",
  },
]

const capabilities = [
  {
    icon: Search,
    title: "Security review",
    description: "We look at where access is too open, where controls are weak, and where a small mistake could become a major problem.",
    note: "Plain-language findings with priorities",
  },
  {
    icon: Lock,
    title: "Zero Trust setup",
    description: "We build access rules that make users and devices prove they belong before they can reach important systems.",
    note: "Less automatic trust, better protection",
  },
  {
    icon: Eye,
    title: "24/7 monitoring",
    description: "We watch for threats and suspicious activity so issues are investigated quickly instead of being found days later.",
    note: "Ongoing detection and response support",
  },
  {
    icon: ShieldCheck,
    title: "Admin account protection",
    description: "We lock down powerful accounts so they are harder to abuse and easier to track.",
    note: "Stronger controls around privileged access",
  },
  {
    icon: FileText,
    title: "Compliance support",
    description: "We help you improve security in a way that also supports audits, customer reviews, and insurance requirements.",
    note: "Security work that supports audit readiness",
  },
  {
    icon: Zap,
    title: "Penetration testing",
    description: "We test whether important systems can actually be broken into and then show you how to close the gaps.",
    note: "Real testing with clear remediation steps",
  },
]

const rightFor = [
  "You have not had a proper security review in the last year",
  "Leaders or clients are asking hard questions about your security posture",
  "You need stronger protection around accounts, devices, and sensitive systems",
  "You are growing fast and security has not kept up",
]

const notRightFor = [
  "You only want a single product installed with no broader program around it",
  "You are looking for a basic antivirus-only conversation",
]

const walkthroughItems = [
  { title: "Where your biggest risk sits today", description: "We show the top gaps that could hurt the business most if left alone." },
  { title: "What a practical fix path looks like", description: "You will see what can be improved first without trying to change everything at once." },
  { title: "How this affects staff and leaders", description: "We explain what changes for users, IT, and decision-makers in everyday terms." },
]

export default function CybersecurityPage() {
  return (
    <>
      <JsonLd schema={[{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://aethoncore.com"},{"@type":"ListItem","position":2,"name":"Services","item":"https://aethoncore.com/services"},{"@type":"ListItem","position":3,"name":"Cybersecurity & MDR","item":"https://aethoncore.com/services/security"}]},{"@context":"https://schema.org","@type":"Service","name":"Cybersecurity & MDR","url":"https://aethoncore.com/services/security","provider":{"@type":"Organization","name":"Aethon Core Inc.","url":"https://aethoncore.com"},"areaServed":[{"@type":"Country","name":"Canada"},{"@type":"Country","name":"United States"}],"serviceType":"Cybersecurity & MDR"}]} />
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Cybersecurity" }]}
        eyebrow="Specialized"
        title="Security that protects the business, not just the checklist"
        subtitle="We help you reduce real risk in simple, practical steps so one mistake does not turn into a much bigger problem."
        variant="tinted"
        visual={<SecurityHeroVisual />}
      />

      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-in">
            <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
              {[
                { value: "Real", label: "Risk reduction focus" },
                { value: "Fast", label: "Priority-based remediation" },
                { value: "Clear", label: "Business-language reporting" },
                { value: "24/7", label: "Monitoring options available" },
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

      <ServiceOutcomeSection
        title="Good security should feel practical"
        intro="Most teams do not need more fear or more jargon. They need clear priorities, better controls, and a plan that lowers risk without slowing the whole company down."
        outcomes={outcomes}
      />

      <ServicePhotoGrid
        title="What stronger security looks like in real life"
        intro="This work touches people, systems, and decisions. It should be visible, understandable, and built around how your team actually works."
        photos={photoCards}
      />

      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">What we do</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                The core work that makes a company harder to break into
              </h2>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((cap) => (
                <div key={cap.title} className="rounded-xl border border-border bg-white p-6 shadow-sm dark:bg-card">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                    <cap.icon className="h-5 w-5 text-blue" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">{cap.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
                  <p className="text-xs font-semibold text-blue/80">{cap.note}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <ServiceWalkthroughSection
        title="Want a walkthrough of what better security would look like for your team?"
        description="We can review your current setup, explain the highest-risk gaps in simple language, and show the fastest path to meaningful improvement."
        items={walkthroughItems}
        primaryHref="/contact?inquiry=security"
        secondaryHref="/services"
        secondaryLabel="See all services"
      />

      <section className="bg-canvas py-20 lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-8">
                <p className="mb-4 text-sm font-semibold text-white">This is a good fit if:</p>
                <ul className="space-y-3">
                  {rightFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-canvas-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-8">
                <p className="mb-4 text-sm font-semibold text-white">You may want a different starting point if:</p>
                <ul className="space-y-3">
                  {notRightFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-canvas-muted">
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-canvas-muted/50" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors hover:text-blue-hover">
                    Not sure where to begin? Talk to us first.
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Common questions</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Questions people ask before starting security work
              </h2>
            </div>
          </FadeIn>
          <FadeIn variant="fade-in">
            <FaqAccordion faqs={faqs} />
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Need a clearer picture of your security risk?"
        subtitle="Tell us what you are protecting and where you feel unsure. We will help you understand the risk and the next practical steps."
        primaryLabel="Request a walkthrough"
        primaryHref="/contact?inquiry=security"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  )
}
