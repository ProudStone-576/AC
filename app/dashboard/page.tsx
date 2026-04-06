import Link from "next/link"
import { requireAdmin } from "@/lib/admin"
import { db } from "@/lib/db"
import {
  Users,
  FileText,
  Briefcase,
  Mail,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Activity,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard - Aethon Core Admin",
}

export default async function DashboardPage() {
  await requireAdmin()

  const [userCount, blogCount, projectCount, contactCount, recentUsers, recentActivity] =
    await Promise.all([
      db.user.count(),
      db.blogPost.count(),
      db.project.count(),
      db.contactSubmission.count(),
      db.user.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          role: true,
          createdAt: true,
        },
      }),
      db.blogPost.findMany({
        orderBy: { updatedAt: "desc" },
        take: 3,
        select: { id: true, title: true, status: true, updatedAt: true },
      }),
    ])

  const stats = [
    {
      label: "Total Users",
      value: userCount,
      icon: Users,
      iconClassName: "text-sky-600",
      chipClassName: "bg-sky-500/12 text-sky-700 dark:text-sky-300",
      accentClassName: "from-sky-500/20 via-sky-500/5 to-transparent",
      detail: "Signed-in customer accounts",
    },
    {
      label: "Blog Posts",
      value: blogCount,
      icon: FileText,
      iconClassName: "text-violet-600",
      chipClassName: "bg-violet-500/12 text-violet-700 dark:text-violet-300",
      accentClassName: "from-violet-500/20 via-violet-500/5 to-transparent",
      detail: "Published and draft content",
    },
    {
      label: "Projects",
      value: projectCount,
      icon: Briefcase,
      iconClassName: "text-emerald-600",
      chipClassName: "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300",
      accentClassName: "from-emerald-500/20 via-emerald-500/5 to-transparent",
      detail: "Case studies in the pipeline",
    },
    {
      label: "Contact Inquiries",
      value: contactCount,
      icon: Mail,
      iconClassName: "text-amber-600",
      chipClassName: "bg-amber-500/12 text-amber-700 dark:text-amber-300",
      accentClassName: "from-amber-500/20 via-amber-500/5 to-transparent",
      detail: "Inbound conversations to review",
    },
  ]

  const quickActions = [
    { label: "Write new blog post", href: "/dashboard/content/blogs/new" },
    { label: "Create project", href: "/dashboard/content/projects/new" },
    { label: "Review users", href: "/dashboard/users" },
  ]

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-[28px] border border-border/70 bg-card px-6 py-6 shadow-sm sm:px-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_42%),radial-gradient(circle_at_85%_20%,_rgba(16,185,129,0.12),_transparent_28%)]" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue/15 bg-blue/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue">
              <Sparkles className="h-3.5 w-3.5" />
              Operations snapshot
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-[2rem]">
              Keep the platform calm, current, and visibly under control.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
              This workspace brings together customer growth, content velocity, and operational load so the team can act quickly without hunting across screens.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[420px]">
            <div className="rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/12 text-sky-600 dark:text-sky-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Access
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">Admin permissions active</p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/12 text-emerald-600 dark:text-emerald-300">
                <Activity className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Activity
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {recentUsers.length} new users in the latest review set
              </p>
            </div>
            <div className="rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Quick actions
              </p>
              <div className="mt-2 space-y-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.href}
                    href={action.href}
                    className="flex items-center justify-between rounded-xl px-2 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted/60"
                  >
                    <span>{action.label}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group relative overflow-hidden rounded-[24px] border border-border/70 bg-card p-5 shadow-sm transition-transform hover:-translate-y-0.5"
          >
            <div className={`pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-r ${stat.accentClassName}`} />
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {stat.label}
                </p>
                <p className="mt-3 text-4xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </p>
              </div>
              <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${stat.chipClassName}`}>
                <stat.icon className={`h-5 w-5 ${stat.iconClassName}`} />
              </div>
            </div>
            <div className="relative mt-5 flex items-center justify-between gap-4">
              <p className="max-w-[16rem] text-sm text-muted-foreground">
                {stat.detail}
              </p>
              <div className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-10 rounded-full bg-foreground/70" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
        <section className="overflow-hidden rounded-[24px] border border-border/70 bg-card shadow-sm">
          <div className="flex items-center justify-between border-b border-border/60 px-6 py-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Newest accounts
              </p>
              <h2 className="mt-1 text-lg font-semibold text-foreground">Recent users</h2>
            </div>
            <Link
              href="/dashboard/users"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {recentUsers.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <p className="text-sm font-medium text-foreground">No users yet</p>
              <p className="mt-1 text-sm text-muted-foreground">
                New customer accounts will appear here once signup activity begins.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto px-3 pb-3 pt-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/70">
                    <th className="px-3 pb-3 text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Name
                    </th>
                    <th className="px-3 pb-3 text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Email
                    </th>
                    <th className="px-3 pb-3 text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Role
                    </th>
                    <th className="px-3 pb-3 text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Joined
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="transition-colors hover:bg-muted/35">
                      <td className="px-3 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue/10 text-sm font-semibold text-blue">
                            {(user.firstName[0] ?? "")}{(user.lastName[0] ?? "")}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{user.firstName} {user.lastName}</p>
                            <p className="text-xs text-muted-foreground">Customer record</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 text-muted-foreground">{user.email}</td>
                      <td className="px-3 py-4">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                            user.role === "admin"
                              ? "bg-blue/12 text-blue"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="px-3 py-4 text-muted-foreground">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="space-y-6">
          <div className="overflow-hidden rounded-[24px] border border-border/70 bg-card shadow-sm">
            <div className="border-b border-border/60 px-6 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Publishing lane
              </p>
              <h2 className="mt-1 text-lg font-semibold text-foreground">Recent blog activity</h2>
            </div>
            {recentActivity.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <p className="text-sm font-medium text-foreground">No blog posts yet</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Create a post to start the editorial pipeline.
                </p>
              </div>
            ) : (
              <ul className="space-y-0 px-3 py-3">
                {recentActivity.map((post) => (
                  <li key={post.id} className="rounded-2xl px-3 py-3 transition-colors hover:bg-muted/35">
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl ${
                          post.status === "published"
                            ? "bg-emerald-500/12 text-emerald-600 dark:text-emerald-300"
                            : "bg-amber-500/12 text-amber-600 dark:text-amber-300"
                        }`}
                      >
                        <FileText className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <p className="truncate text-sm font-medium text-foreground">{post.title}</p>
                          <span
                            className={`inline-flex rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${
                              post.status === "published"
                                ? "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300"
                                : "bg-amber-500/12 text-amber-700 dark:text-amber-300"
                            }`}
                          >
                            {post.status}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Updated {new Date(post.updatedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="rounded-[24px] border border-border/70 bg-card p-6 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Focus
            </p>
            <h2 className="mt-1 text-lg font-semibold text-foreground">Today&apos;s admin priorities</h2>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
                <p className="text-sm font-medium text-foreground">Triage inbound demand</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Review the {contactCount} newest contact inquiries and route urgent opportunities quickly.
                </p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
                <p className="text-sm font-medium text-foreground">Keep content moving</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  There are currently {blogCount} blog records and {projectCount} project entries available to refine and publish.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
