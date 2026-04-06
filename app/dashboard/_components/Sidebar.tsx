"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard, Server, Users, FileText, Briefcase,
  Settings, CreditCard, Inbox, Calendar, Layers,
  AlertTriangle, GitBranch, Shield, HardDrive, BarChart2,
} from "lucide-react"
import { LogoutButton } from "@/components/auth/LogoutButton"

interface SidebarProps {
  firstName: string
  lastName: string
  email: string
  role: string
}

interface NavItem {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  exact?: boolean
}

interface NavGroup {
  label: string
  items: NavItem[]
}

const navGroups: NavGroup[] = [
  {
    label: "OVERVIEW",
    items: [{ label: "Dashboard", href: "/dashboard", icon: LayoutDashboard, exact: true }],
  },
  {
    label: "INFRASTRUCTURE",
    items: [
      { label: "Assets", href: "/dashboard/infrastructure", icon: Server },
      { label: "Incidents", href: "/dashboard/incidents", icon: AlertTriangle },
      { label: "Deployments", href: "/dashboard/deployments", icon: GitBranch },
      { label: "Security", href: "/dashboard/security", icon: Shield },
      { label: "Backups", href: "/dashboard/backups", icon: HardDrive },
    ],
  },
  {
    label: "CLIENTS",
    items: [
      { label: "Users", href: "/dashboard/users", icon: Users },
      { label: "Service Requests", href: "/dashboard/requests", icon: Inbox },
      { label: "Meetings", href: "/dashboard/meetings", icon: Calendar },
      { label: "Engagements", href: "/dashboard/engagements", icon: Layers },
      { label: "Billing", href: "/dashboard/billing", icon: CreditCard },
      { label: "Reports", href: "/dashboard/reports", icon: BarChart2 },
    ],
  },
  {
    label: "CONTENT",
    items: [
      { label: "Blogs", href: "/dashboard/content/blogs", icon: FileText },
      { label: "Projects", href: "/dashboard/content/projects", icon: Briefcase },
    ],
  },
  {
    label: "ACCOUNT",
    items: [{ label: "Settings", href: "/dashboard/settings", icon: Settings }],
  },
]

export function AdminSidebar({ firstName, lastName, email, role }: SidebarProps) {
  const pathname = usePathname()

  function isActive(href: string, exact?: boolean) {
    if (exact) return pathname === href
    return pathname === href || pathname.startsWith(href + "/")
  }

  const initials = `${firstName[0] ?? ""}${lastName[0] ?? ""}`.toUpperCase()

  return (
    <aside className="relative flex h-screen w-72 flex-shrink-0 flex-col overflow-hidden border-r border-white/10 bg-canvas text-canvas-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.32),_transparent_68%)]" />

      <div className="relative flex items-center gap-3 border-b border-white/10 px-5 py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue to-sky-400 text-sm font-bold text-white shadow-[0_14px_30px_-18px_rgba(59,130,246,0.95)]">
          AC
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide text-canvas-foreground">Aethon Core</p>
          <p className="text-xs uppercase tracking-[0.22em] text-canvas-muted">Control Center</p>
        </div>
      </div>

      <nav className="relative flex-1 space-y-5 overflow-y-auto px-3 py-5">
        {navGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-canvas-muted/85">
              {group.label}
            </p>
            <ul className="space-y-1">
              {group.items.map((item) => {
                const active = isActive(item.href, item.exact)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`group flex items-center gap-3 rounded-xl border px-3 py-2.5 text-sm font-medium transition-all ${
                        active
                          ? "border-blue/35 bg-gradient-to-r from-blue to-sky-500 text-white shadow-[0_16px_36px_-22px_rgba(56,189,248,0.9)]"
                          : "border-transparent text-canvas-muted hover:border-white/10 hover:bg-white/6 hover:text-white"
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg transition-colors ${
                          active
                            ? "bg-white/15 text-white"
                            : "bg-white/6 text-canvas-muted group-hover:bg-white/10 group-hover:text-white"
                        }`}
                      >
                        <item.icon className="h-4 w-4 flex-shrink-0" />
                      </span>
                      <span className="truncate">{item.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="relative space-y-3 border-t border-white/10 bg-white/4 px-3 py-4 backdrop-blur-sm">
        <div className="rounded-2xl border border-white/8 bg-white/5 px-3 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue to-sky-400 text-xs font-semibold text-white">
              {initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-canvas-foreground">{firstName} {lastName}</p>
              <p className="truncate text-xs text-canvas-muted">{email}</p>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-canvas-muted">
              Access
            </span>
            <span className={`inline-flex rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${role === "admin" ? "bg-blue/20 text-sky-100" : "bg-white/10 text-canvas-muted"}`}>
              {role}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg px-3 py-1 text-[11px] text-canvas-muted">
          <span className="inline-flex rounded-full bg-emerald-400/80 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-canvas">
            Live
          </span>
          <span className="truncate">Admin workspace</span>
        </div>
        <LogoutButton className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-medium text-canvas-muted transition-colors hover:bg-white/10 hover:text-white" />
      </div>
    </aside>
  )
}
