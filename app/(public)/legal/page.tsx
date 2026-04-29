import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FileText, Globe, Lock, Scale, Shield } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { FadeIn } from "@/components/ui/FadeIn"

export const metadata: Metadata = {
  title: "Legal",
  description: "Aethon Core legal center with policies, terms, accessibility, service commitments, and data handling documents.",
}

const legalPages = [
  {
    title: "Privacy Policy",
    href: "/legal/privacy",
    description: "How we collect, use, store, and protect personal information.",
    icon: Lock,
  },
  {
    title: "Terms of Service",
    href: "/legal/terms",
    description: "The rules that govern use of our website, platform, and services.",
    icon: Scale,
  },
  {
    title: "Cookie Policy",
    href: "/legal/cookies",
    description: "What cookies and tracking technologies we use and how to manage them.",
    icon: Globe,
  },
  {
    title: "Accessibility Statement",
    href: "/legal/accessibility",
    description: "Our accessibility standards, current status, and how to report barriers.",
    icon: Shield,
  },
  {
    title: "Service Level Agreement",
    href: "/legal/sla",
    description: "Service availability, response targets, service credits, and support commitments.",
    icon: FileText,
  },
  {
    title: "Data Processing Addendum",
    href: "/legal/dpa",
    description: "How we process customer personal data and the roles and responsibilities of each party.",
    icon: Lock,
  },
  {
    title: "Acceptable Use Policy",
    href: "/legal/acceptable-use",
    description: "Activities that are not allowed when using our services, systems, or infrastructure.",
    icon: Shield,
  },
]

export default function LegalIndexPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Legal" }]}
        eyebrow="Legal"
        title="Legal center"
        subtitle="The main policies and legal documents for our website, products, and services."
        variant="tinted"
      />

      <section className="bg-white py-16 dark:bg-background lg:py-20">
        <div className="container-enterprise">
          <FadeIn variant="fade-up">
            <div className="mb-10 max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Policies and agreements in one place
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                These pages explain how we handle privacy, service commitments, accessibility, website use, and customer data.
              </p>
            </div>
          </FadeIn>

          <FadeIn variant="scale-up" stagger>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {legalPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:border-blue/20 hover:shadow-md dark:bg-card"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-light">
                    <page.icon className="h-5 w-5 text-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{page.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{page.description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors group-hover:text-blue-hover">
                    Read page
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
