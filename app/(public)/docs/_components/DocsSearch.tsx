"use client"

import * as React from "react"
import { Code2, Globe, Layers, Search, Shield, Terminal, Zap } from "lucide-react"

type DocSection = {
  icon: keyof typeof ICONS
  title: string
  description: string
  articles: string[]
}

const ICONS = {
  code: Code2,
  globe: Globe,
  layers: Layers,
  shield: Shield,
  terminal: Terminal,
  zap: Zap,
}

export function DocsSearch({ sections }: { sections: DocSection[] }) {
  const [query, setQuery] = React.useState("")
  const q = query.trim().toLowerCase()

  const filtered = q
    ? sections.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.articles.some((a) => a.toLowerCase().includes(q)),
      )
    : sections

  return (
    <>
      {/* ── Search bar ── */}
      <div className="border-b border-border bg-white dark:bg-background">
        <div className="container-enterprise py-6">
          <div className="relative max-w-xl">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search documentation…"
              spellCheck={false}
              aria-label="Search documentation"
              className="flex h-10 w-full rounded-lg border border-border bg-surface pl-10 pr-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-blue focus:ring-2 focus:ring-blue/20 dark:bg-card"
            />
          </div>
        </div>
      </div>

      {/* ── Documentation index ── */}
      <section className="bg-surface py-16 dark:bg-card lg:py-20">
        <div className="container-enterprise">
          <div className="mb-8 flex items-end justify-between">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue">Documentation index</p>
            {q && (
              <span className="text-xs text-muted-foreground">
                {filtered.length} section{filtered.length !== 1 ? "s" : ""} matched
              </span>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-xl border border-border bg-white py-20 text-center dark:bg-background">
              <Search className="mx-auto mb-3 h-6 w-6 text-muted-foreground/40" />
              <p className="text-sm font-medium text-foreground">No sections match &ldquo;{query}&rdquo;</p>
              <p className="mt-1 text-xs text-muted-foreground">Try a different keyword — or browse all sections below.</p>
              <button
                onClick={() => setQuery("")}
                className="mt-4 text-xs font-medium text-blue hover:underline"
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((section) => {
                const Icon = ICONS[section.icon]
                return (
                  <div
                    key={section.title}
                    className="rounded-xl border border-border bg-white p-6 transition-shadow hover:shadow-sm dark:bg-background"
                  >
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-light">
                      <Icon className="h-[18px] w-[18px] text-blue" />
                    </div>
                    <h3 className="mb-1.5 text-sm font-semibold text-foreground">{section.title}</h3>
                    <p className="mb-5 text-xs leading-relaxed text-muted-foreground">{section.description}</p>
                    <ul className="space-y-2">
                      {section.articles.map((article) => {
                        const matched = q && article.toLowerCase().includes(q)
                        return (
                          <li key={article} className="flex items-center gap-1.5 text-xs">
                            <div
                              className={`h-1 w-1 shrink-0 rounded-full transition-colors ${matched ? "bg-blue" : "bg-border"}`}
                            />
                            <span className={matched ? "font-medium text-foreground" : "text-muted-foreground"}>
                              {article}
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
