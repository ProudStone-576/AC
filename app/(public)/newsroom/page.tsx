import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Download, FileText, Mail } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { FadeIn } from "@/components/ui/FadeIn"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Newsroom",
  description:
    "Press releases, media coverage, and company announcements from Aethon Core Inc.",
}

export default function NewsroomPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Newsroom" }]}
        eyebrow="Newsroom"
        title="News and announcements from Aethon Core"
        subtitle="Press releases, media coverage, and company updates."
        variant="tinted"
        backgroundImageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=3840&q=100"
      />

      {/* Press releases */}
      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <FadeIn>
            <div className="mb-12">
              <SectionHeader
                eyebrow="Press releases"
                title="Official announcements"
              />
            </div>
          </FadeIn>

          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface py-20 text-center dark:bg-card">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-light">
              <FileText className="h-6 w-6 text-blue" />
            </div>
            <h3 className="mb-2 text-base font-semibold text-foreground">No announcements yet</h3>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We're a new company building in public. Our first official announcements will be published here — sign up to be notified when we have news worth sharing.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-hover"
            >
              Stay informed
            </Link>
          </div>
        </div>
      </section>

      {/* Media coverage */}
      <section className="bg-surface py-20 dark:bg-card lg:py-24">
        <div className="container-enterprise">
          <FadeIn>
            <div className="mb-12">
              <SectionHeader
                eyebrow="Media coverage"
                title="Aethon Core in the press"
              />
            </div>
          </FadeIn>

          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-white py-16 text-center dark:bg-background">
            <p className="text-sm font-medium text-foreground">Media coverage will appear here as it is published.</p>
            <p className="mt-2 text-xs text-muted-foreground">
              For editorial enquiries, contact{" "}
              <a href="mailto:press@aethoncore.com" className="text-blue hover:underline">press@aethoncore.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Press kit + media contact */}
      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Press kit */}
            <FadeIn variant="slide-left">
              <div className="flex flex-col gap-5 rounded-xl border border-border bg-surface p-8 dark:bg-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-light">
                  <Download className="h-5 w-5 text-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Press kit</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Download official logos, brand assets, executive headshots, and company fact sheets in a single package.
                  </p>
                </div>
                <div className="space-y-2">
                  {[
                    "Aethon Core logo suite (SVG, PNG)",
                    "Executive headshots (300 DPI)",
                    "Company fact sheet (2026)",
                    "Product screenshots",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue" />
                      {item}
                    </div>
                  ))}
                </div>
                <a
                  href="mailto:press@aethoncore.com?subject=Press%20Kit%20Request"
                  className="inline-flex items-center gap-2 self-start rounded-lg bg-blue px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-hover"
                >
                  <Download className="h-4 w-4" />
                  Request press kit
                </a>
              </div>
            </FadeIn>

            {/* Media contact */}
            <FadeIn variant="slide-right">
              <div className="flex flex-col gap-5 rounded-xl border border-border bg-surface p-8 dark:bg-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-light">
                  <Mail className="h-5 w-5 text-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Media enquiries</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    For press enquiries, interview requests, or editorial questions, reach our communications team directly.
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Press contact</p>
                    <p className="mt-1 text-sm font-medium text-foreground">Communications Team</p>
                    <a
                      href="mailto:press@aethoncore.com"
                      className="text-sm text-blue transition-colors hover:text-blue-hover"
                    >
                      press@aethoncore.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Response time</p>
                    <p className="mt-1 text-sm text-muted-foreground">We respond to all media enquiries within 4 business hours.</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 self-start text-sm font-medium text-blue transition-colors hover:text-blue-hover"
                >
                  General contact form
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to cover Aethon Core?"
        subtitle="We're happy to provide briefings, demos, and executive access for qualified media and analyst enquiries."
        primaryLabel="Contact our press team"
        primaryHref="mailto:press@aethoncore.com"
        secondaryLabel="Read our insights"
        secondaryHref="/insights"
      />
    </>
  )
}
