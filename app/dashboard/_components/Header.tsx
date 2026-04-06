"use client"

import { usePathname } from "next/navigation"

interface HeaderProps {
  firstName: string
  lastName: string
  email: string
}

function getPageTitle(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean)
  if (segments.length === 1 && segments[0] === "dashboard") return "Dashboard"

  const last = segments[segments.length - 1]

  const titleMap: Record<string, string> = {
    dashboard: "Dashboard",
    users: "Users",
    infrastructure: "Infrastructure",
    blogs: "Blog Posts",
    projects: "Projects",
    settings: "Settings",
    billing: "Billing",
    new: "New Post",
    edit: "Edit",
    content: "Content",
  }

  if (pathname.includes("/content/blogs/new")) return "New Blog Post"
  if (pathname.includes("/content/blogs") && pathname.includes("/edit")) return "Edit Blog Post"
  if (pathname.includes("/content/projects/new")) return "New Project"
  if (pathname.includes("/content/projects") && pathname.includes("/edit")) return "Edit Project"
  if (pathname.includes("/content/blogs")) return "Blog Posts"
  if (pathname.includes("/content/projects")) return "Projects"

  return titleMap[last] ?? last.charAt(0).toUpperCase() + last.slice(1)
}

export function AdminHeader({ firstName, lastName, email }: HeaderProps) {
  const pathname = usePathname()
  const title = getPageTitle(pathname)
  const initials = `${firstName[0] ?? ""}${lastName[0] ?? ""}`.toUpperCase()
  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  return (
    <header className="flex h-16 items-center justify-between border-b border-border/60 bg-card/95 px-6 backdrop-blur">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Admin workspace
        </p>
        <h1 className="text-lg font-semibold tracking-tight text-foreground">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-right sm:block">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {today}
          </p>
        </div>
        <div className="hidden text-right sm:block">
          <p className="text-sm font-medium text-foreground">
            {firstName} {lastName}
          </p>
          <p className="text-xs text-muted-foreground">{email}</p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-blue to-sky-400 text-xs font-semibold text-white shadow-[0_12px_30px_-18px_rgba(59,130,246,0.95)]">
          {initials}
        </div>
      </div>
    </header>
  )
}
