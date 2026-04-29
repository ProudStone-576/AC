import type { Metadata } from "next"
import { Mail, Phone, Clock, MessageSquare } from "lucide-react"
import { PageHero } from "@/components/ui/PageHero"
import { ContactForm } from "@/components/contact/ContactForm"
import { FadeIn } from "@/components/ui/FadeIn"
import { company } from "@/lib/constants/company"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Aethon Core about your technology needs — cloud, security, network, data, or anything else your business runs on.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Contact" }]}
        eyebrow="Contact"
        title="Let's talk about your organization"
        subtitle="Whether you're evaluating options, have a specific project in mind, or just want to understand what's possible — we're ready to have that conversation."
        variant="tinted"
        backgroundImageSrc="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=3840&q=100"
      />

      <section className="bg-white py-16 dark:bg-background lg:py-20">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Contact form */}
            <FadeIn variant="slide-left" className="lg:col-span-3">
              <h2 className="mb-8 text-xl font-semibold text-foreground">Send us a message</h2>
              <ContactForm />
            </FadeIn>

            {/* Contact info sidebar */}
            <FadeIn variant="slide-right" delay={100} className="lg:col-span-2">
              <div className="rounded-xl border border-border bg-surface p-6 dark:bg-card">
                <h3 className="mb-6 text-base font-semibold text-foreground">Other ways to reach us</h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-light">
                      <Mail className="h-4 w-4 text-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <a
                        href={`mailto:${company.email}`}
                        className="text-sm text-muted-foreground transition-colors hover:text-blue"
                      >
                        {company.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-light">
                      <Phone className="h-4 w-4 text-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <a
                        href={`tel:+18002384667`}
                        className="text-sm text-muted-foreground transition-colors hover:text-blue"
                      >
                        {company.phone}
                      </a>
                      <p className="mt-0.5 text-xs text-muted-foreground/70">Mon–Fri, 9am–5pm ET</p>
                    </div>
                  </div>
                </div>

                <div className="my-6 border-t border-border" />

                <h3 className="mb-4 text-sm font-semibold text-foreground">What to expect</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-light">
                      <Clock className="h-4 w-4 text-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Response time</p>
                      <p className="text-xs text-muted-foreground">
                        We respond to all inquiries within 1 business day. Enterprise and urgent requests are prioritized.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-light">
                      <MessageSquare className="h-4 w-4 text-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">No sales pressure</p>
                      <p className="text-xs text-muted-foreground">
                        Our first conversation is about understanding your environment — not pitching. We'll tell you honestly if we're not the right fit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
