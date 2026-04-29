"use client"

import * as React from "react"
import Link from "next/link"

interface Insight {
  category: string
  title: string
  excerpt: string
  date: string
  readTime: string
  href: string
  author: string
}

const categories = ["All topics", "Infrastructure", "Security", "AI & Data", "Cloud", "Digital Transformation", "Leadership"]

export function InsightList({ insights }: { insights: Insight[] }) {
  const [active, setActive] = React.useState("All topics")

  const filtered = active === "All topics"
    ? insights
    : insights.filter((i) => i.category === active)

  if (filtered.length === 0) {
    return (
      <>
        <FilterBar active={active} onSelect={setActive} />
        <p className="py-16 text-center text-sm text-muted-foreground">
          No articles in this category yet.
        </p>
      </>
    )
  }

  const [featured, ...rest] = filtered

  return (
    <>
      <FilterBar active={active} onSelect={setActive} />

      {/* Featured article */}
      <div className="mb-12">
        <Link
          href={featured.href}
          className="group grid grid-cols-1 gap-8 rounded-2xl border border-border bg-surface p-8 transition-all hover:border-blue/30 hover:shadow-sm dark:bg-card lg:grid-cols-2 lg:p-10"
        >
          <div className="flex flex-col">
            <span className="mb-4 inline-flex w-fit rounded-full bg-blue-light px-2.5 py-1 text-[11px] font-semibold text-blue-light-foreground">
              {featured.category}
            </span>
            <h2 className="mb-4 text-2xl font-semibold leading-snug text-foreground transition-colors group-hover:text-blue lg:text-3xl">
              {featured.title}
            </h2>
            <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-[10px] font-semibold text-foreground">
                {featured.author.split(" ").map((n) => n[0]).join("")}
              </div>
              <span>{featured.author}</span>
              {featured.date && <><span className="text-border">·</span><span>{featured.date}</span></>}
              {featured.readTime && <><span className="text-border">·</span><span>{featured.readTime}</span></>}
            </div>
          </div>
          <div className="flex items-center justify-center rounded-xl bg-brand p-8">
            <div className="text-center">
              <p className="text-5xl font-semibold text-white/20">01</p>
              <p className="mt-2 text-sm font-medium text-white/60">Featured article</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Article grid */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((insight) => (
            <Link
              key={insight.href}
              href={insight.href}
              className="group flex flex-col rounded-xl border border-border bg-white p-6 transition-all hover:border-blue/30 hover:shadow-sm dark:bg-card"
            >
              <span className="mb-3 inline-flex w-fit rounded-full bg-blue-light px-2.5 py-1 text-[11px] font-semibold text-blue-light-foreground">
                {insight.category}
              </span>
              <h3 className="mb-3 flex-1 text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-blue">
                {insight.title}
              </h3>
              <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {insight.excerpt}
              </p>
              <div className="flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-[9px] font-semibold text-foreground">
                    {insight.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <span>{insight.author}</span>
                </div>
                {insight.readTime && <span>{insight.readTime}</span>}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

function FilterBar({ active, onSelect }: { active: string; onSelect: (cat: string) => void }) {
  return (
    <div className="mb-10 flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onSelect(cat)}
          className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
            active === cat
              ? "border-brand bg-brand text-brand-foreground"
              : "border-border bg-white text-foreground hover:bg-muted dark:bg-card"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
