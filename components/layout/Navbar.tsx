"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  BarChart2,
  Building,
  ChevronDown,
  ChevronRight,
  Code2,
  Compass,
  Cpu,
  Database,
  GitMerge,
  Globe,
  Headphones,
  Key,
  Layers,
  Layout,
  Network,
  RefreshCw,
  Search,
  Server,
  Shield,
  Star,
  Users,
  Zap,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { navigation } from "@/lib/constants/navigation"
import { Logo } from "@/components/ui/Logo"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import type { NavGroup } from "@/types"

/* ─── Icon registry ────────────────────────────────────────────────────────── */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  layers: Layers,
  "bar-chart-2": BarChart2,
  shield: Shield,
  zap: Zap,
  compass: Compass,
  layout: Layout,
  "git-merge": GitMerge,
  headphones: Headphones,
  users: Users,
  building: Building,
  cpu: Cpu,
  server: Server,
  database: Database,
  network: Network,
  search: Search,
  key: Key,
  "refresh-cw": RefreshCw,
  "code-2": Code2,
  globe: Globe,
  star: Star,
}

function NavIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon className={className} />
}

/* ─── Section meta ─────────────────────────────────────────────────────────── */
const sectionMeta: Record<string, { description: string }> = {
  Products: { description: "Platform, analytics & security tooling" },
  Services: { description: "Advisory, delivery & managed operations" },
  Industries: { description: "Sector-specific programs and frameworks" },
  Company: { description: "Who we are and how we work" },
  Resources: { description: "Documentation, insights & case studies" },
}

/* ─── Animated hamburger ───────────────────────────────────────────────────── */
function HamburgerButton({
  open,
  onClick,
  onDark,
}: {
  open: boolean
  onClick: () => void
  onDark?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center rounded-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden",
        onDark
          ? "text-white/70 hover:text-white"
          : "text-foreground/70 hover:text-foreground hover:bg-muted",
      )}
    >
      <svg
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
        aria-hidden="true"
        className="overflow-visible"
      >
        <rect x="0" y="0" width="20" height="1.75" rx="0.875" fill="currentColor"
          style={{
            transformOrigin: "10px 0.875px",
            transition: "transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)",
            transform: open ? "translateY(5.3px) rotate(45deg)" : "none",
          }}
        />
        <rect x="3" y="6.125" width="17" height="1.75" rx="0.875" fill="currentColor"
          style={{
            transformOrigin: "11.5px 7px",
            transition: "opacity 0.25s ease, transform 0.35s ease",
            opacity: open ? 0 : 1,
            transform: open ? "scaleX(0)" : "none",
          }}
        />
        <rect x="0" y="12.25" width="20" height="1.75" rx="0.875" fill="currentColor"
          style={{
            transformOrigin: "10px 13.125px",
            transition: "transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)",
            transform: open ? "translateY(-5.3px) rotate(-45deg)" : "none",
          }}
        />
      </svg>
    </button>
  )
}

/* ─── Navbar ─────────────────────────────────────────────────────────────── */
export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [openMenu, setOpenMenu] = React.useState<string | null>(null)
  const [closingMenu, setClosingMenu] = React.useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [layer, setLayer] = React.useState<"top" | "sub">("top")
  const [activeSection, setActiveSection] = React.useState<string | null>(null)
  const closeTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const closeAnimTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    setMobileOpen(false)
    setIsExpanded(false)
    setActiveSection(null)
    setLayer("top")
    setOpenMenu(null)
    setClosingMenu(null)
  }, [pathname])

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  function openMobileMenu() {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    setMobileOpen(true)
    setLayer("top")
    setActiveSection(null)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsExpanded(true))
    })
  }

  function closeMobileMenu() {
    setIsExpanded(false)
    closeTimeoutRef.current = setTimeout(() => {
      setMobileOpen(false)
      setLayer("top")
      setActiveSection(null)
    }, 650)
  }

  function handleSectionTap(label: string) {
    const section = navigation.find((s) => s.label === label)
    if (!section?.items && !section?.groups) return
    setActiveSection(label)
    setLayer("sub")
  }

  function handleBack() {
    setLayer("top")
    setTimeout(() => setActiveSection(null), 420)
  }

  function startClose() {
    if (closeAnimTimer.current) clearTimeout(closeAnimTimer.current)
    const current = openMenu
    if (!current) return
    setClosingMenu(current)
    closeAnimTimer.current = setTimeout(() => {
      setOpenMenu(null)
      setClosingMenu(null)
    }, 140)
  }

  function handleMouseEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    if (closeAnimTimer.current) clearTimeout(closeAnimTimer.current)
    setClosingMenu(null)
    setOpenMenu(label)
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(startClose, 120)
  }

  function handleDropdownEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    if (closeAnimTimer.current) clearTimeout(closeAnimTimer.current)
    setClosingMenu(null)
  }

  const currentSection = navigation.find((s) => s.label === activeSection)
  const meta = activeSection ? sectionMeta[activeSection] : null

  // A dropdown is "mounted" (rendered) if it's open OR in the middle of closing
  function isDropdownMounted(label: string) {
    return openMenu === label || closingMenu === label
  }

  function isDropdownClosing(label: string) {
    return closingMenu === label
  }

  return (
    <>
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[60] transition-all duration-300",
          mobileOpen
            ? "bg-transparent border-b border-white/[0.07]"
            : scrolled
              ? "bg-white/96 shadow-sm backdrop-blur-sm border-b border-border dark:bg-canvas/96"
              : "bg-white dark:bg-canvas",
        )}
      >
        <div className="container-enterprise">
          <div className="flex h-16 items-center justify-between gap-8">
            <Link
              href="/"
              className="shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Logo
                variant="dark"
                className={cn(
                  "dark:[&_path]:stroke-white dark:[&_line]:stroke-white dark:[&_circle]:fill-white dark:text-white",
                  mobileOpen && "[&_path]:stroke-white [&_line]:stroke-white [&_circle]:fill-white text-white",
                )}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
              {navigation.map((section) => (
                <div
                  key={section.label}
                  className="relative"
                  onMouseEnter={() => (section.items || section.groups) ? handleMouseEnter(section.label) : undefined}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={section.href}
                    className={cn(
                      "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      "text-foreground/75 hover:text-foreground hover:bg-muted",
                      openMenu === section.label && "bg-muted text-foreground",
                      pathname.startsWith(section.href) && section.href !== "/" && "text-foreground",
                    )}
                    aria-expanded={openMenu === section.label}
                  >
                    {section.label}
                    {(section.items || section.groups) && (
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 text-muted-foreground/70 transition-transform duration-200",
                          openMenu === section.label && !isDropdownClosing(section.label) && "rotate-180",
                        )}
                      />
                    )}
                  </Link>

                  {section.mega && section.groups && isDropdownMounted(section.label) && (
                    <div
                      className="absolute left-0 top-full pt-2"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <MegaMenu
                        groups={section.groups}
                        onClose={() => startClose()}
                        isClosing={isDropdownClosing(section.label)}
                      />
                    </div>
                  )}
                  {!section.mega && section.items && isDropdownMounted(section.label) && (
                    <div
                      className="absolute left-0 top-full pt-2"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <SimpleDropdown
                        items={section.items}
                        onClose={() => startClose()}
                        isClosing={isDropdownClosing(section.label)}
                      />
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle className="hidden lg:flex" />
              <Link href="/contact" className="hidden items-center gap-1.5 rounded-md px-4 py-2 text-sm font-semibold bg-blue text-blue-foreground hover:bg-blue-hover transition-colors glow-blue lg:flex">
                Talk to us
              </Link>
              <ThemeToggle className={cn("lg:hidden transition-colors", mobileOpen && "[&_button]:text-white/60 [&_button:hover]:text-white")} />
              <HamburgerButton open={mobileOpen} onClick={mobileOpen ? closeMobileMenu : openMobileMenu} onDark={mobileOpen} />
            </div>
          </div>
        </div>
      </header>

      <div className="h-16" aria-hidden="true" />

      {/* ── Mobile overlay ──────────────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden overflow-hidden"
          style={{
            background: "oklch(0.090 0.018 252)",
            clipPath: isExpanded
              ? "circle(170% at calc(100% - 2.25rem) 2rem)"
              : "circle(0% at calc(100% - 2.25rem) 2rem)",
            transition: "clip-path 0.65s cubic-bezier(0.77, 0, 0.175, 1)",
          }}
          aria-modal="true"
          role="dialog"
          aria-label="Navigation menu"
        >
          {/* Subtle grid */}
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-25" aria-hidden="true" />
          {/* Top glow */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-80" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.50 0.250 250 / 0.12) 0%, transparent 100%)" }} aria-hidden="true" />
          {/* Bottom fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 z-10" style={{ background: "linear-gradient(to bottom, transparent, oklch(0.090 0.018 252))" }} aria-hidden="true" />

          {/* Header spacer */}
          <div className="h-16 shrink-0" aria-hidden="true" />

          {/* Content */}
          <div className="relative z-[1] h-[calc(100dvh-4rem)]">

            {/* ── TOP LEVEL ──────────────────────────────────────────────────── */}
            <div
              className="absolute inset-0 flex flex-col"
              style={{
                opacity: layer === "top" ? 1 : 0,
                transform: layer === "top" ? "translateX(0)" : "translateX(-48px)",
                transition: "opacity 0.36s cubic-bezier(0.4,0,0.2,1), transform 0.36s cubic-bezier(0.4,0,0.2,1)",
                pointerEvents: layer === "top" ? "auto" : "none",
              }}
            >
              <nav className="flex-1 overflow-y-auto px-6 pt-3" aria-label="Mobile navigation">
                {navigation.map((section, i) => {
                  const hasChildren = !!(section.items || section.groups)
                  const isActive = pathname.startsWith(section.href) && section.href !== "/"
                  const Inner = (
                    <>
                      <span className="flex items-baseline gap-4">
                        <span className="w-5 shrink-0 font-mono text-[10px] font-bold tracking-widest" style={{ color: "oklch(0.60 0.220 248 / 0.55)" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className={cn(
                          "text-[1.7rem] font-semibold tracking-tight leading-none transition-colors duration-150",
                          isActive ? "text-white" : "text-white/70 group-hover:text-white",
                        )}>
                          {section.label}
                        </span>
                      </span>
                      <span className={cn(
                        "ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-200",
                        "border border-white/[0.08] text-white/25",
                        "group-hover:border-blue/40 group-hover:text-blue group-hover:bg-blue/10",
                      )}>
                        <ChevronRight className="h-3 w-3" />
                      </span>
                    </>
                  )

                  return (
                    <div
                      key={section.label}
                      className="border-b border-white/[0.05]"
                      style={{
                        animation: isExpanded
                          ? `nav-item-in 0.52s cubic-bezier(0.16, 1, 0.3, 1) ${i * 62 + 90}ms both`
                          : "none",
                      }}
                    >
                      {hasChildren ? (
                        <button type="button" className="group flex w-full items-center gap-4 py-[1.05rem] text-left" onClick={() => handleSectionTap(section.label)}>
                          {Inner}
                        </button>
                      ) : (
                        <Link href={section.href} className="group flex w-full items-center gap-4 py-[1.05rem]" onClick={closeMobileMenu}>
                          {Inner}
                        </Link>
                      )}
                    </div>
                  )
                })}
              </nav>

              {/* Bottom CTAs */}
              <div
                className="shrink-0 px-6 pb-10 pt-5 space-y-2.5"
                style={{
                  animation: isExpanded
                    ? `nav-item-in 0.52s cubic-bezier(0.16, 1, 0.3, 1) ${navigation.length * 62 + 140}ms both`
                    : "none",
                }}
              >
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 glow-blue"
                  style={{ background: "oklch(0.50 0.250 250)" }}
                  onClick={closeMobileMenu}
                >
                  Talk to us
                </Link>
              </div>
            </div>

            {/* ── SUB-NAV ────────────────────────────────────────────────────── */}
            <div
              className="absolute inset-0 flex flex-col"
              style={{
                opacity: layer === "sub" ? 1 : 0,
                transform: layer === "sub" ? "translateX(0)" : "translateX(48px)",
                transition: "opacity 0.36s cubic-bezier(0.4,0,0.2,1), transform 0.36s cubic-bezier(0.4,0,0.2,1)",
                pointerEvents: layer === "sub" ? "auto" : "none",
              }}
            >
              {/* Header: back + section title */}
              <div
                className="shrink-0 px-6 pt-5 pb-5"
                style={{
                  animation: layer === "sub"
                    ? "nav-sub-in 0.38s cubic-bezier(0.16,1,0.3,1) 40ms both"
                    : "none",
                  borderBottom: "1px solid oklch(1 0 0 / 0.06)",
                }}
              >
                {/* Back pill */}
                <button
                  type="button"
                  onClick={handleBack}
                  className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium text-white/45 transition-all hover:border-white/20 hover:text-white/70"
                >
                  <ArrowLeft className="h-3 w-3" />
                  All sections
                </button>

                {/* Section name */}
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  {activeSection}
                </h2>
                {meta && (
                  <p className="mt-1 text-sm text-white/35">{meta.description}</p>
                )}

                {/* View all link */}
                {currentSection && (
                  <Link
                    href={currentSection.href}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
                    style={{ color: "oklch(0.60 0.220 248 / 0.85)" }}
                    onClick={closeMobileMenu}
                  >
                    View all {activeSection}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                )}
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto px-6 py-5">

                {/* Grouped items — Products / Services */}
                {currentSection?.groups?.map((group, gi) => (
                  <div key={group.label} className="mb-7">
                    {/* Group label */}
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/25">
                        {group.label}
                      </span>
                      <span className="flex-1 h-px" style={{ background: "oklch(1 0 0 / 0.05)" }} aria-hidden="true" />
                    </div>

                    <div className="space-y-1">
                      {group.items.map((item, ii) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group flex items-start gap-3.5 rounded-xl py-3 px-3 -mx-3 transition-all duration-150"
                          style={{
                            animation: layer === "sub"
                              ? `nav-sub-in 0.38s cubic-bezier(0.16,1,0.3,1) ${gi * 35 + ii * 50 + 130}ms both`
                              : "none",
                          }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget
                            el.style.background = "oklch(1 0 0 / 0.04)"
                            el.style.borderLeft = "2px solid oklch(0.60 0.220 248 / 0.7)"
                            el.style.paddingLeft = "calc(0.75rem - 2px)"
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget
                            el.style.background = ""
                            el.style.borderLeft = ""
                            el.style.paddingLeft = ""
                          }}
                          onClick={closeMobileMenu}
                        >
                          {item.icon && (
                            <span
                              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-150 group-hover:scale-105"
                              style={{ background: "oklch(0.50 0.250 250 / 0.14)", border: "1px solid oklch(0.50 0.250 250 / 0.18)" }}
                            >
                              <span style={{ color: "oklch(0.70 0.200 248)" }}><NavIcon name={item.icon} className="h-4 w-4" /></span>
                            </span>
                          )}
                          <span className="min-w-0 flex-1 pt-0.5">
                            <span className="block text-[15px] font-semibold leading-tight text-white/85 transition-colors duration-150 group-hover:text-white">
                              {item.label}
                            </span>
                            {item.description && (
                              <span className="mt-1 block text-xs leading-relaxed text-white/35">
                                {item.description}
                              </span>
                            )}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Flat items — Industries / Company / Resources */}
                {currentSection?.items && (
                  <div>
                    {currentSection.items.map((item, ii) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-center justify-between py-3.5 transition-all"
                        style={{
                          borderBottom: ii < currentSection.items!.length - 1
                            ? "1px solid oklch(1 0 0 / 0.05)"
                            : "none",
                          animation: layer === "sub"
                            ? `nav-sub-in 0.38s cubic-bezier(0.16,1,0.3,1) ${ii * 45 + 100}ms both`
                            : "none",
                        }}
                        onClick={closeMobileMenu}
                      >
                        <span className="text-[15px] font-medium text-white/65 transition-colors duration-150 group-hover:text-white">
                          {item.label}
                        </span>
                        <span className="flex items-center gap-2.5 shrink-0">
                          {item.badge && (
                            <span
                              className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold"
                              style={{
                                background: "oklch(0.50 0.250 250 / 0.14)",
                                color: "oklch(0.70 0.200 248)",
                              }}
                            >
                              {item.badge}
                            </span>
                          )}
                          <ChevronRight
                            className="h-4 w-4 transition-all duration-200 group-hover:translate-x-0.5"
                            style={{ color: "oklch(1 0 0 / 0.18)" }}
                          />
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="shrink-0 px-6 pb-10 pt-4">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 glow-blue"
                  style={{ background: "oklch(0.50 0.250 250)" }}
                  onClick={closeMobileMenu}
                >
                  Talk to us
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

/* ─── Desktop mega menu ───────────────────────────────────────────────────── */
function MegaMenu({
  groups,
  onClose,
  isClosing,
}: {
  groups: NavGroup[]
  onClose: () => void
  isClosing: boolean
}) {
  const cols = groups.length >= 4 ? 4 : groups.length === 3 ? 3 : 2
  const widthClass =
    cols === 4 ? "w-[860px]" : cols === 3 ? "w-[680px]" : "w-[500px]"
  const gridClass =
    cols === 4 ? "grid-cols-4" : cols === 3 ? "grid-cols-3" : "grid-cols-2"

  return (
    <div
      className={cn(
        widthClass,
        "rounded-xl border border-border bg-white p-6 shadow-xl dark:bg-card",
        isClosing ? "animate-dropdown-out" : "animate-dropdown-in",
      )}
    >
      <div className={cn("grid gap-6", gridClass)}>
        {groups.map((group, gi) => (
          <div key={group.label}>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
              {group.label}
            </p>
            <div className="space-y-0.5">
              {group.items.map((item, ii) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="animate-menu-item flex items-start gap-2.5 rounded-lg p-2 transition-colors hover:bg-surface"
                  style={{ animationDelay: isClosing ? "0ms" : `${gi * 20 + ii * 35 + 40}ms` }}
                >
                  {item.icon && (
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-light">
                      <NavIcon name={item.icon} className="h-3.5 w-3.5 text-blue" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    {item.description && (
                      <p className="mt-0.5 text-[11px] text-muted-foreground leading-snug">{item.description}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Desktop simple dropdown ─────────────────────────────────────────────── */
function SimpleDropdown({
  items,
  onClose,
  isClosing,
}: {
  items: { label: string; href: string; badge?: string }[]
  onClose: () => void
  isClosing: boolean
}) {
  return (
    <div
      className={cn(
        "min-w-[220px] rounded-xl border border-border bg-white p-2 shadow-xl dark:bg-card",
        isClosing ? "animate-dropdown-out" : "animate-dropdown-in",
      )}
    >
      {items.map((item, i) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="animate-menu-item flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-surface"
          style={{ animationDelay: isClosing ? "0ms" : `${i * 40 + 30}ms` }}
        >
          <span className="font-medium text-foreground">{item.label}</span>
          {item.badge && (
            <span className="ml-3 rounded-full bg-blue-light px-2 py-0.5 text-[11px] font-medium text-blue-light-foreground">
              {item.badge}
            </span>
          )}
        </Link>
      ))}
    </div>
  )
}
