import type { Metadata } from "next"
import { PageHero } from "@/components/ui/PageHero"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Aethon Core Inc. Cookie Policy — what cookies we use, why, and how to control them.",
}

const cookieCategories = [
  {
    name: "Strictly necessary",
    canDisable: false,
    description:
      "These cookies are required for the website and platform to function. They enable core features like authentication, session management, and security. You cannot opt out of these cookies.",
    examples: [
      { name: "ac_session", purpose: "Maintains your authenticated session", duration: "Session" },
      { name: "ac_csrf", purpose: "Protects against cross-site request forgery", duration: "Session" },
      { name: "ac_region", purpose: "Routes you to the correct infrastructure region", duration: "30 days" },
    ],
  },
  {
    name: "Analytics",
    canDisable: true,
    description:
      "We use analytics cookies to understand how visitors interact with our website. Data is aggregated and anonymized. We use this to improve page performance and content relevance.",
    examples: [
      { name: "_ga", purpose: "Google Analytics — distinguishes unique visitors", duration: "2 years" },
      { name: "_gid", purpose: "Google Analytics — stores and updates page view count", duration: "24 hours" },
      { name: "ac_perf", purpose: "Aethon Core internal performance measurement", duration: "90 days" },
    ],
  },
  {
    name: "Functional",
    canDisable: true,
    description:
      "Functional cookies remember your preferences — like your chosen theme, language, or the last section you were viewing in the platform. Disabling these means you may need to re-enter preferences each visit.",
    examples: [
      { name: "ac_theme", purpose: "Stores your light/dark theme preference", duration: "1 year" },
      { name: "ac_lang", purpose: "Stores your language preference", duration: "1 year" },
      { name: "ac_sidebar", purpose: "Stores platform sidebar state", duration: "90 days" },
    ],
  },
  {
    name: "Marketing",
    canDisable: true,
    description:
      "We do not run behavioral advertising. We use a limited number of marketing cookies to measure the effectiveness of our own campaigns (e.g., which channels bring qualified enterprise visitors). We do not sell this data.",
    examples: [
      { name: "_fbp", purpose: "Facebook — campaign attribution only", duration: "90 days" },
      { name: "li_fat_id", purpose: "LinkedIn — campaign attribution only", duration: "30 days" },
      { name: "ac_utm", purpose: "Aethon Core — attribution for inbound campaigns", duration: "30 days" },
    ],
  },
]

export default function CookiesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Legal", href: "/legal" }, { label: "Cookie Policy" }]}
        eyebrow="Legal"
        title="Cookie Policy"
        subtitle="Last updated: January 15, 2025"
        variant="tinted"
      />

      <section className="py-16 bg-white dark:bg-background">
        <div className="container-enterprise">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm leading-relaxed text-muted-foreground mb-10">
              This Cookie Policy explains how Aethon Core Inc. ("Aethon Core") uses cookies and similar tracking
              technologies on aethoncore.com and our platform console. We use cookies to make our services work,
              to improve performance, and to understand how people use our platform.
            </p>

            {/* What are cookies */}
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-foreground mb-4">What are cookies?</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Cookies are small text files stored on your device by your browser. They allow websites to remember
                your actions and preferences over time. Some cookies expire when you close your browser (session cookies);
                others persist for a defined period (persistent cookies).
              </p>
            </div>

            {/* Cookie categories */}
            <div className="space-y-8">
              {cookieCategories.map((cat) => (
                <div
                  key={cat.name}
                  className="rounded-xl border border-border bg-white p-6 dark:bg-card"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-base font-semibold text-foreground">{cat.name}</h3>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        cat.canDisable
                          ? "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400"
                          : "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                      }`}
                    >
                      {cat.canDisable ? "Optional" : "Required"}
                    </span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{cat.description}</p>

                  <div className="overflow-hidden rounded-lg border border-border">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-surface dark:bg-muted">
                          <th className="px-4 py-2 text-left font-semibold text-foreground/70">Cookie</th>
                          <th className="px-4 py-2 text-left font-semibold text-foreground/70">Purpose</th>
                          <th className="px-4 py-2 text-left font-semibold text-foreground/70">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {cat.examples.map((ex) => (
                          <tr key={ex.name} className="bg-white dark:bg-card">
                            <td className="px-4 py-2.5 font-mono text-foreground/80">{ex.name}</td>
                            <td className="px-4 py-2.5 text-muted-foreground">{ex.purpose}</td>
                            <td className="px-4 py-2.5 text-muted-foreground">{ex.duration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            {/* Managing cookies */}
            <div className="mt-12">
              <h2 className="text-xl font-semibold text-foreground mb-4">Managing your cookie preferences</h2>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                You can manage optional cookie categories at any time using the cookie preference center (accessible via
                the "Cookie settings" link in our footer). You can also control cookies through your browser settings:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><strong className="text-foreground">Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong className="text-foreground">Firefox:</strong> Settings → Privacy &amp; Security → Cookies and Site Data</li>
                <li><strong className="text-foreground">Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong className="text-foreground">Edge:</strong> Settings → Cookies and site permissions</li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Note: Disabling strictly necessary cookies will prevent the website and platform from functioning correctly.
              </p>
            </div>

            {/* Contact */}
            <div className="mt-12 rounded-xl border border-border bg-surface p-6 dark:bg-card">
              <h2 className="text-base font-semibold text-foreground mb-2">Questions?</h2>
              <p className="text-sm text-muted-foreground">
                Contact our privacy team at privacy@aethoncore.com or write to us at Aethon Core Inc.,
                Aethon Core Inc., Canada.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
