import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  BarChart2,
  CheckCircle2,
  Code2,
  Globe,
  Search,
  Shield,
  Zap,
} from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { WebHeroVisual } from "@/components/ui/ServiceHeroVisuals"
import { CTASection } from "@/components/sections/CTASection"
import { FadeIn } from "@/components/ui/FadeIn"
import { FaqAccordion } from "@/components/ui/FaqAccordion"

const rightFor = [
  "You need a new website or your current one is slow, outdated, or not appearing in search",
  "You're on a platform that's hard to update, requires an agency for every change, or you don't own",
  "You're launching a new product or service and need a professional web presence that converts",
  "Competitors rank above you for the terms your customers are actually searching",
]

const notRightFor = [
  "You need a complex custom web application with specific business logic — that's the App Development service",
  "You need a temporary landing page for a short campaign — our builds are built to last",
]

const faqs: { q: string; a: string }[] = [
  {
    q: "What's included in a website build?",
    a: "Design, development, technical SEO implementation, content strategy, performance optimization, accessibility review, hosting setup, and Search Console configuration. SEO isn't an add-on — it's built into every project from day one, alongside the code.",
  },
  {
    q: "What technology do you build on?",
    a: "Our default stack is Next.js, TypeScript, and Tailwind CSS, deployed on Aethon Core managed infrastructure with a global CDN. If you have an existing CMS or platform preference, we'll assess whether it fits the project requirements — but we won't use something that will create a performance or maintainability problem.",
  },
  {
    q: "What is SEO and how do you improve it?",
    a: "SEO (Search Engine Optimization) is the practice of making your site more visible in search results for the terms your customers use. We improve it through technical SEO (fast load times, proper structure, schema markup, Core Web Vitals), on-page optimization (keyword-targeted content, clear hierarchy), and authority building over time. We don't promise rankings — but we build the foundation that makes ranking possible.",
  },
  {
    q: "How long does a website build take?",
    a: "Discovery and strategy take one week. Design and content production take two to four weeks. Build and optimization take four to eight weeks. Most sites go live eight to twelve weeks after kickoff. Timeline depends on how quickly content and approvals move on your side.",
  },
  {
    q: "Who owns the website after it's built?",
    a: "You own everything: the code, the domain, the content, the Google Search Console account. We don't retain any licensing or access rights after handover. The site runs on our managed infrastructure, which means we operate the environment — but you own what runs on it.",
  },
  {
    q: "How much does it cost?",
    a: "Website builds are scoped based on the number of pages, the complexity of the design, and the content production required. Simple marketing sites are different from large product catalogues or multilingual builds. We'll scope after a discovery conversation and give you a fixed-price proposal.",
  },
]

export const metadata: Metadata = {
  title: "Website Design & SEO — Services",
  description:
    "Fast, accessible, SEO-optimised websites built in Next.js and deployed on managed infrastructure. Technical SEO, Core Web Vitals, and content strategy that compounds over time.",
}

const capabilities = [
  {
    icon: Search,
    title: "Technical SEO",
    description:
      "Server-rendered pages, structured data, canonical tags, XML sitemaps, and Core Web Vitals optimization built into every project from day one — not retrofitted after launch.",
    note: "Includes: on-page SEO, technical audit, schema markup, Search Console setup",
  },
  {
    icon: Code2,
    title: "Website design and development",
    description:
      "Conversion-focused design built in Next.js. Fast, accessible, and mobile-first. We handle design-led projects as well as design-handoff builds from your existing Figma files.",
    note: "Default stack: Next.js, TypeScript, Tailwind CSS — deployed on Aethon Core infrastructure",
  },
  {
    icon: BarChart2,
    title: "Content strategy and copywriting",
    description:
      "SEO-aligned content that ranks and converts. Keyword research, content calendars, and on-page copy written for both search engines and the humans who actually make purchasing decisions.",
    note: "Includes: keyword research, content calendar, landing page copy, blog content",
  },
  {
    icon: Zap,
    title: "Performance engineering",
    description:
      "Sub-second load times through image optimization, CDN configuration, lazy loading, and bundle analysis. We don't ship a fast site and hope it stays that way — we monitor it.",
    note: "Targets: LCP < 2.5s, FID < 100ms, CLS < 0.1 — measured, not estimated",
  },
  {
    icon: Globe,
    title: "Hosting and deployment",
    description:
      "Sites deployed on Aethon Core managed infrastructure with global CDN, automated SSL, DDoS protection, and uptime monitoring included. No third-party hosting dependency.",
    note: "Includes: CDN, SSL, uptime monitoring, automatic deployments from Git",
  },
  {
    icon: Shield,
    title: "Accessibility and compliance",
    description:
      "WCAG 2.1 AA compliance by default. We audit, remediate, and document — because accessibility isn't optional for organizations that serve the public or operate in regulated sectors.",
    note: "Includes: accessibility audit, automated and manual remediation, compliance report",
  },
]

const phases = [
  {
    phase: "Discovery & Strategy",
    duration: "Week 1",
    description:
      "We map your site architecture, run keyword research, audit existing content, and agree on target pages and performance baselines. No assumptions — we understand your audience and competitors before writing a line of code.",
    deliverable: "Site architecture + SEO strategy document",
  },
  {
    phase: "Design & Content",
    duration: "Week 2–4",
    description:
      "Wireframes, page designs, and copy produced in parallel. You review and approve before development begins. No surprises in staging.",
    deliverable: "Approved page designs + final copy for all pages",
  },
  {
    phase: "Build & Optimise",
    duration: "Week 4–8",
    description:
      "Development, SEO implementation, performance tuning, accessibility review, and structured data markup. The site doesn't go to staging until it passes Core Web Vitals.",
    deliverable: "Staging site — Lighthouse 90+ on all pages, Core Web Vitals pass",
  },
  {
    phase: "Launch & Monitor",
    duration: "Ongoing",
    description:
      "Production deployment, Google Search Console setup, sitemap submission, and 301 redirect configuration for any migrated URLs. Monthly SEO reports from month one.",
    deliverable: "Live site + monthly SEO performance report",
  },
]

const useCases = [
  {
    industry: "Professional Services",
    title: "Law firm website redesign with SEO rebuild",
    challenge:
      "A mid-size law firm was locked into an agency-managed CMS that required paid support for every content change. Their site scored 38 on Lighthouse, had no structured data, and ranked for zero competitive keywords despite 10 years of content.",
    approach:
      "We rebuilt the site in Next.js with full editorial control handed back to their team. Implemented attorney schema markup, practice area keyword targeting, and a content calendar. Organic traffic grew 3.8× in 9 months. The CMS dependency was eliminated.",
  },
  {
    industry: "Manufacturing",
    title: "B2B product catalogue with international SEO",
    challenge:
      "A manufacturer needed a multi-language product catalogue targeting North American and European markets. Their existing site had no hreflang implementation, duplicate content across regions, and no structured product data.",
    approach:
      "We built a Next.js site with proper i18n routing, hreflang tags, and product schema markup across 400+ catalogue pages. Duplicate content issues were resolved with canonical strategy. European organic traffic grew from near-zero to 2,400 monthly visits within 6 months.",
  },
]

export default function WebPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Website & SEO" }]}
        eyebrow="Build & Digital"
        title="Websites that load fast, rank well, and you actually own"
        subtitle="We build conversion-focused sites in Next.js with technical SEO from the ground up — no agency lock-in, no CMS dependency. Deployed on infrastructure we operate."
        variant="tinted"
        visual={<WebHeroVisual />}
      />

      {/* Stats strip */}
      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise">
          <FadeIn variant="fade-in">
            <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
              {[
                { value: "100", label: "Lighthouse SEO score — our baseline" },
                { value: "Core Web Vitals", label: "Pass rate on every site we ship" },
                { value: "3× avg", label: "Organic traffic growth — 12 months" },
                { value: "No lock-in", label: "You own the code and the domain" },
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

      {/* Capabilities */}
      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">What we do</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Everything a site needs to perform — built in from the start
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                We don&apos;t separate SEO from development. Both happen in the same engagement, by the same team.
              </p>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="group rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:border-blue/20 hover:shadow-md dark:bg-card"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-light">
                    <cap.icon className="h-5 w-5 text-blue" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">{cap.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
                  <p className="font-mono text-xs font-semibold text-blue/80">{cap.note}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">
                How a web engagement runs
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                From brief to ranked and live
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Most web projects fail because SEO is an afterthought and performance is checked on launch day.
                We reverse that.
              </p>
            </div>
          </FadeIn>
          <div className="relative">
            <div className="absolute bottom-0 left-8 top-0 hidden w-px bg-border sm:block" aria-hidden="true" />
            <div className="space-y-6">
              {phases.map((step, i) => (
                <FadeIn key={step.phase} variant="fade-up" delay={i * 60}>
                  <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-[180px_1fr] sm:gap-8 sm:pl-20">
                    <div className="hidden sm:absolute sm:left-0 sm:top-0 sm:flex sm:h-16 sm:w-16 sm:items-center sm:justify-center sm:rounded-full sm:border sm:border-border sm:bg-white sm:shadow-sm dark:sm:bg-card">
                      <span className="font-mono text-xs font-bold text-blue">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue">{step.phase}</p>
                      <p className="font-mono text-xs text-muted-foreground">{step.duration}</p>
                    </div>
                    <div className="rounded-xl border border-border bg-white p-5 dark:bg-card">
                      <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-blue" />
                        <p className="text-xs font-semibold text-foreground/70">{step.deliverable}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-canvas py-20 lg:py-24">
        <div className="container-enterprise">
          <FadeIn variant="blur-up">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">Use Cases</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Web and SEO problems we&apos;re designed to solve
              </h2>
            </div>
          </FadeIn>
          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {useCases.map((uc) => (
                <div key={uc.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-8">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue">{uc.industry}</p>
                  <h3 className="mb-4 text-lg font-semibold text-white">{uc.title}</h3>
                  <div className="mb-3">
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-canvas-muted">
                      The Situation
                    </p>
                    <p className="text-sm leading-relaxed text-canvas-muted">{uc.challenge}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-canvas-muted">
                      Our Approach
                    </p>
                    <p className="text-sm leading-relaxed text-white/80">{uc.approach}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <div className="mt-8 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors hover:text-blue-hover"
            >
              See all case studies <ArrowRight className="h-4 w-4" />
            </Link>
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
        title="Ready to build a site that actually ranks?"
        subtitle="We build fast, accessible, SEO-ready websites — owned by you, deployed on infrastructure we operate. Tell us what you need."
        primaryLabel="Talk to our web team"
        primaryHref="/contact"
        secondaryLabel="See all services"
        secondaryHref="/services"
      />
    </>
  )
}
