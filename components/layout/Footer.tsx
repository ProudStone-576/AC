import Link from "next/link"
import { Globe, Share2, ExternalLink } from "lucide-react"
import { footerNavigation } from "@/lib/constants/navigation"
import { company } from "@/lib/constants/company"
import { Logo } from "@/components/ui/Logo"

const columns = [
  { title: "Products", links: footerNavigation.products },
  { title: "Services", links: footerNavigation.services },
  { title: "Company", links: footerNavigation.company },
  { title: "Resources", links: footerNavigation.resources },
]

export function Footer() {
  return (
    <footer className="bg-canvas text-canvas-foreground">
      <div className="container-enterprise py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 flex w-fit items-center gap-2 group">
              <Logo variant="light" />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-canvas-muted max-w-[220px]">
              We build and manage the technology that keeps your business running.
            </p>
            <div className="flex items-center gap-2">
              {[
                { href: company.social.linkedin, label: "LinkedIn", Icon: ExternalLink },
                { href: company.social.twitter, label: "X (Twitter)", Icon: Share2 },
                { href: company.social.youtube, label: "YouTube", Icon: Globe },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Aethon Core on ${label}`}
                  className="flex h-8 w-8 items-center justify-center rounded-md text-canvas-muted transition-colors hover:bg-white/10 hover:text-canvas-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-canvas-foreground/50">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-canvas-muted transition-colors hover:text-canvas-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/8 pt-10">
          <a href={`mailto:${company.email}`} className="text-sm text-canvas-muted hover:text-canvas-foreground transition-colors">
            {company.email}
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container-enterprise flex flex-col items-start justify-between gap-4 py-5 sm:flex-row sm:items-center">
          <p className="text-xs text-canvas-muted">
            © {new Date().getFullYear()} {company.fullName} All rights reserved.
          </p>
          <nav aria-label="Legal navigation">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {footerNavigation.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-canvas-muted hover:text-canvas-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
