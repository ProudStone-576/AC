import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Code2, GitBranch, Layers, RefreshCw, Shield, Terminal } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { DevOpsHeroVisual } from "@/components/ui/ServiceHeroVisuals"
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
    q: "What is DevOps in plain language?",
    a: "It is the work that helps software move from a developer's computer into production faster and with fewer mistakes. Less manual handoffs, fewer surprises, fewer late-night deployments.",
  },
  {
    q: "Do we need a full platform rebuild?",
    a: "Not always. Some teams need a cleaner pipeline. Some need better environments. Some need both. We start with what is causing the most pain and work from there.",
  },
  {
    q: "Will this slow developers down at first?",
    a: "There is some setup work, but the goal is to remove the manual steps and confusion that slow them down today. Most engineers feel the difference within a few weeks.",
  },
  {
    q: "Can this support compliance?",
    a: "Yes. A good delivery setup creates clearer records, safer approvals, and more repeatable releases. That is exactly what auditors look for.",
  },
  {
    q: "How long does it take to get results?",
    a: "Quick wins like faster pipelines and cleaner environments can show up in weeks. Bigger changes like full platform adoption take two to four months depending on team size.",
  },
  {
    q: "We already have a pipeline. Can you improve it?",
    a: "Yes. Most pipelines we see have untested stages, missing checks, or steps that quietly fail. We audit what is there and improve the parts that matter most.",
  },
]

export const metadata: Metadata = {
  title: "DevOps & Platform Engineering - Services",
  description:
    "We help teams ship changes faster, with less manual work and less stress, using simpler and safer delivery systems.",
}

const outcomes = [
  {
    title: "Faster releases",
    description:
      "Teams spend less time waiting on manual steps and more time shipping useful work. Changes that once took days can take hours.",
  },
  {
    title: "Fewer deployment mistakes",
    description:
      "Better automation and better checks lower the odds that a release breaks production. When something does go wrong, the rollback is quick.",
  },
  {
    title: "A smoother developer experience",
    description:
      "Engineers get clearer paths to build, test, deploy, and request what they need. Less waiting on other teams. Less guesswork about what happened.",
  },
]

const photoCards = [
  {
    title: "Delivery work people can trust",
    description:
      "When pipelines are built well, releases feel calm and repeatable. Your team stops dreading deployment days.",
    imageSrc:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Software engineers working on laptops with code on screen",
  },
  {
    title: "Automation that saves real time",
    description:
      "Manual steps that eat hours every week get replaced with automated checks, tests, and deployments your team can rely on.",
    imageSrc:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Close-up of circuit board representing automated systems",
  },
  {
    title: "Infrastructure your engineers control",
    description:
      "Environments, capacity, and deployments managed as code so changes are reviewed, repeatable, and easy to roll back.",
    imageSrc:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Enterprise server infrastructure representing cloud and infrastructure",
  },
]

const capabilities = [
  {
    icon: GitBranch,
    title: "CI/CD pipelines",
    description:
      "We build release pipelines that automate testing, checks, and deployment so your team is not doing the same steps by hand every time.",
    note: "Less manual release work",
  },
  {
    icon: Layers,
    title: "Internal developer platforms",
    description:
      "We create self-service paths so engineers can spin up environments, request resources, and deploy without waiting on long ticket queues.",
    note: "Faster setup for every team",
  },
  {
    icon: Code2,
    title: "Infrastructure as code",
    description:
      "We manage infrastructure in version-controlled code so changes are easier to review, track, and repeat across environments.",
    note: "Safer and more consistent infrastructure",
  },
  {
    icon: RefreshCw,
    title: "GitOps and automation",
    description:
      "We use source control as the clear record of what should be running and where. Drift between intended and actual state is caught automatically.",
    note: "Cleaner deployment and rollback",
  },
  {
    icon: Shield,
    title: "Security in the pipeline",
    description:
      "Checks for code, dependencies, secrets, and containers can happen automatically earlier in the process so problems are caught before they reach production.",
    note: "Security built into delivery, not bolted on",
  },
  {
    icon: Terminal,
    title: "Reliability engineering",
    description:
      "We help teams measure service health, reduce repeat toil, and build the on-call practices that keep engineers from burning out.",
    note: "Better visibility and fewer wake-up calls",
  },
]

const doraMetrics = [
  {
    metric: "Deployment frequency",
    current: "Weekly or less",
    target: "Daily or multiple times a day",
    why: "Smaller, more frequent releases carry less risk per deployment",
  },
  {
    metric: "Lead time for changes",
    current: "Days to weeks",
    target: "Hours to a day",
    why: "Faster feedback loops and fewer blocking handoffs",
  },
  {
    metric: "Change failure rate",
    current: "15–25%",
    target: "Under 5%",
    why: "Automated tests and gates catch problems before production",
  },
  {
    metric: "Mean time to restore",
    current: "Hours to days",
    target: "Under 1 hour",
    why: "Clear runbooks, automatic alerts, and fast rollback paths",
  },
]

const rightFor = [
  "Releases take too long and involve too many manual steps",
  "Engineers spend more time debugging environments than building features",
  "Deploys to production cause anxiety and require after-hours attention",
  "Your team is growing but the delivery system is not keeping up",
  "You have had incidents caused by a configuration change that was not reviewed",
]

const notRightFor = [
  "You only need someone to manage a single small pipeline with no broader context",
  "Your team is purely exploratory and not shipping to production regularly yet",
]

const walkthroughItems = [
  {
    title: "Where delivery is slowing down today",
    description:
      "We show the manual steps, wait times, and risks that are getting in the way of your team moving faster.",
  },
  {
    title: "What should be automated first",
    description:
      "You will see the changes that give the biggest speed and reliability gains earliest, without rebuilding everything at once.",
  },
  {
    title: "How your team would use the new setup",
    description:
      "We explain what changes for developers, platform teams, and leaders in day-to-day work so the adoption plan is realistic.",
  },
]

export default function DevOpsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "DevOps & Platform Engineering" }]}
        eyebrow="Delivery"
        title="Help your team ship faster without adding more stress"
        subtitle="We improve the systems behind software delivery so releases are easier, safer, and less dependent on manual heroics. Your engineers build products — not deployment rituals."
        variant="tinted"
        visual={<DevOpsHeroVisual />}
      />

      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-in">
            <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
              {[
                { value: "Daily", label: "Deployment frequency, achievable" },
                { value: "<5%", label: "Target change failure rate" },
                { value: "Hours", label: "Lead time from code to production" },
                { value: "Fast", label: "Mean time to restore service" },
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
        title="Good delivery systems help people move with confidence"
        intro="When pipelines, environments, and release steps are easier to use, teams spend less time fighting process and more time building value. Deployment becomes something people look forward to — not dread."
        outcomes={outcomes}
      />

      <ServicePhotoGrid
        title="What better DevOps looks like in practice"
        intro="This work is about making day-to-day engineering smoother, clearer, and more dependable. Not just for the team — for the business that depends on reliable software."
        photos={photoCards}
      />

      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">What we do</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                The building blocks behind smoother, safer delivery
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Every capability here removes manual work, reduces risk, or gives your team more confidence in the code they ship.
              </p>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:border-blue/20 hover:shadow-md dark:bg-card"
                >
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
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Benchmarks</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                What good delivery performance actually looks like
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                These are the four measures that high-performing engineering teams track. They are real, measurable, and achievable with the right systems in place.
              </p>
            </div>
          </FadeIn>
          <FadeIn variant="fade-in">
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-surface dark:bg-muted">
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">Metric</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">Typical starting point</th>
                    <th className="hidden px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:table-cell">Where teams get to</th>
                    <th className="hidden px-6 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground lg:table-cell">How</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {doraMetrics.map((row, index) => (
                    <tr key={row.metric} className={index % 2 === 0 ? "bg-white dark:bg-card" : "bg-surface dark:bg-background"}>
                      <td className="px-6 py-3.5 text-sm font-semibold text-foreground/80">{row.metric}</td>
                      <td className="px-6 py-3.5 text-sm text-muted-foreground">{row.current}</td>
                      <td className="hidden px-6 py-3.5 text-sm font-semibold text-blue sm:table-cell">{row.target}</td>
                      <td className="hidden px-6 py-3.5 text-sm text-muted-foreground lg:table-cell">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      <ServiceWalkthroughSection
        title="Want to see where your delivery process could get easier?"
        description="We can walk through the parts of your pipeline, tooling, and release process that create the most delay or risk today — and show you what improvement looks like in real terms."
        items={walkthroughItems}
        primaryHref="/contact?inquiry=devops"
        secondaryHref="/services"
        secondaryLabel="See all services"
      />

      <section className="bg-canvas py-20 lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="blur-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Is this the right fit?</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                DevOps and platform engineering works best when delivery is already a bottleneck
              </h2>
            </div>
          </FadeIn>
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
                    Not sure what you need? Talk to us first.
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
                Questions teams ask before changing delivery systems
              </h2>
            </div>
          </FadeIn>
          <FadeIn variant="fade-in">
            <FaqAccordion faqs={faqs} />
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Want a simpler path from code to production?"
        subtitle="Tell us where delivery feels slow, manual, or risky today. We will help you see the fastest route to improvement — and show you what it looks like in your environment."
        primaryLabel="Request a walkthrough"
        primaryHref="/contact?inquiry=devops"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  )
}
