import type { Metadata } from "next"
import {
  Cloud,
  DollarSign,
  Globe,
  RefreshCw,
  Server,
  Shield,
  Zap,
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { CloudHeroVisual } from "@/components/ui/ServiceHeroVisuals"
import { CTASection } from "@/components/sections/CTASection"
import {
  ServiceOutcomeSection,
  ServicePhotoGrid,
  ServiceWalkthroughSection,
} from "@/components/sections/ServicePageAdditions"
import { FadeIn } from "@/components/ui/FadeIn"
import { FaqAccordion } from "@/components/ui/FaqAccordion"

const faqs = [
  { q: "What do you mean by cloud infrastructure?", a: "It is the servers, storage, networking, and security setup that runs your systems in cloud platforms instead of only in your own building." },
  { q: "Can you help if we are already in the cloud?", a: "Yes. Many teams already have cloud systems but need help making them safer, simpler, or less expensive." },
  { q: "Will migration cause downtime?", a: "The goal is to avoid that. We plan carefully, test early, and use cutover steps that reduce business risk." },
  { q: "Do you only work with one provider?", a: "No. We work across AWS, Azure, Google Cloud, and private environments." },
  { q: "How do you control cloud costs?", a: "We design for the right size, review usage, remove waste, and make sure the architecture matches the business need." },
]

export const metadata: Metadata = {
  title: "Cloud Infrastructure - Services",
  description:
    "We design, improve, and manage cloud environments so they are reliable, secure, and easier for teams to understand.",
}

const outcomes = [
  { title: "Stronger reliability", description: "Your systems are built so one outage, one region problem, or one weak setup choice is less likely to take the business down." },
  { title: "Better cost control", description: "Cloud spending becomes easier to understand and easier to manage before bills drift too far." },
  { title: "A clearer path forward", description: "Teams get a practical plan for migration, cleanup, or modernization instead of a vague cloud vision." },
]

const photoCards = [
  {
    title: "Cloud built around real business needs",
    description: "We start with what the business needs to stay available, move faster, and control cost.",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cloud infrastructure illustration with connected devices",
  },
  {
    title: "Safer migrations and cleaner environments",
    description: "The work is planned step by step so teams know what is moving, when, and why.",
    imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Network graphic representing cloud migration and connectivity",
  },
  {
    title: "Visibility across systems and spend",
    description: "Leaders get a clearer view of resilience, security, and cost instead of a black-box cloud bill.",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Analytics dashboard showing infrastructure and cost data",
  },
]

const capabilities = [
  { icon: Globe, title: "Multi-cloud design", description: "We help choose the right place for each workload instead of forcing everything into one mold.", note: "Architecture based on fit, not vendor preference" },
  { icon: RefreshCw, title: "Cloud migration", description: "We move systems in a careful order so risk is lower and teams stay informed.", note: "Phased migration with validation and rollback planning" },
  { icon: Shield, title: "Cloud security", description: "Access, data protection, and baseline controls are built in from the beginning.", note: "Security designed into the environment" },
  { icon: Server, title: "Hybrid connectivity", description: "We connect sites, data centers, and cloud systems so they work together reliably.", note: "Secure links between old and new environments" },
  { icon: DollarSign, title: "Cost reduction", description: "We show what is being wasted, what should be resized, and where spending can be simpler.", note: "Practical savings work without sacrificing performance" },
  { icon: Zap, title: "Disaster recovery", description: "We plan and test how systems recover so the business is not learning during the crisis.", note: "Recovery planning with testing" },
]

const platforms = [
  { provider: "Amazon Web Services", services: ["Networking", "Compute", "Managed databases", "Logging and security"] },
  { provider: "Microsoft Azure", services: ["Landing zones", "Identity integration", "Networking", "Managed platforms"] },
  { provider: "Google Cloud", services: ["Shared networking", "Containers", "Data platforms", "Security controls"] },
  { provider: "Private cloud", services: ["Virtualization", "Colocation", "Physical networking", "Hybrid architecture"] },
]

const walkthroughItems = [
  { title: "What to keep, move, or redesign", description: "We help separate what is working from what is slowing you down or costing too much." },
  { title: "How the migration or cleanup would run", description: "You will see the stages, the risks, and how business disruption is reduced." },
  { title: "What leaders should expect", description: "We explain timeline, ownership, and cost in plain terms so planning is easier." },
]

export default function CloudPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Cloud Infrastructure" }]}
        eyebrow="Specialized"
        title="Cloud systems that are easier to run, safer to grow, and less likely to surprise you"
        subtitle="Whether you are moving to the cloud or cleaning up what is already there, we help make the setup more reliable, more secure, and easier to understand."
        variant="tinted"
        visual={<CloudHeroVisual />}
      />

      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-in">
            <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
              {[
                { value: "AWS", label: "Cloud platform support" },
                { value: "Azure", label: "Cloud platform support" },
                { value: "GCP", label: "Cloud platform support" },
                { value: "Hybrid", label: "On-prem and cloud together" },
              ].map((s, index) => (
                <div key={`${s.value}-${index}`} className="px-6 py-5">
                  <p className="font-mono text-xl font-semibold text-foreground tabular-nums">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <ServiceOutcomeSection
        title="Cloud should give you more control, not more confusion"
        intro="The right cloud setup helps your business stay available, keeps options open, and makes cost and security easier to manage."
        outcomes={outcomes}
      />

      <ServicePhotoGrid
        title="What a healthier cloud environment looks like"
        intro="The best cloud work is not just technical. It gives teams better visibility, steadier operations, and fewer unwanted surprises."
        photos={photoCards}
      />

      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">What we do</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Cloud work built around outcomes, not buzzwords</h2>
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

      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Platforms</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Depth across the major cloud environments</h2>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {platforms.map((platform) => (
                <div key={platform.provider} className="rounded-xl border border-border bg-white p-6 dark:bg-card">
                  <div className="mb-1 flex items-center gap-2">
                    <Cloud className="h-3.5 w-3.5 text-blue" />
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue">{platform.provider}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {platform.services.map((service) => (
                      <span key={service} className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-foreground/80 dark:bg-muted">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <ServiceWalkthroughSection
        title="Want to see how your cloud environment could be improved?"
        description="We can walk through your current setup, where the risk or waste sits today, and what a realistic improvement plan would look like."
        items={walkthroughItems}
        primaryHref="/contact?inquiry=cloud"
        secondaryHref="/services"
        secondaryLabel="See all services"
      />

      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Common questions</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Questions teams ask before cloud work starts</h2>
            </div>
          </FadeIn>
          <FadeIn variant="fade-in">
            <FaqAccordion faqs={faqs} />
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Need a clearer cloud plan?"
        subtitle="Tell us what you have today, what is not working, and where you want to get to. We will help you turn that into a realistic path forward."
        primaryLabel="Request a walkthrough"
        primaryHref="/contact?inquiry=cloud"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  )
}
