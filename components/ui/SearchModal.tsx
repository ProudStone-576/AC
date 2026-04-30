"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Search, X, ArrowRight, Command } from "lucide-react"
import { cn } from "@/lib/utils"
import { searchIndex, type SearchEntry } from "@/lib/constants/search-index"

const CATEGORY_ORDER = ["Services", "Products", "Industries", "Locations", "Pages", "Resources", "Legal"]

function scoreEntry(entry: SearchEntry, query: string): number {
  const q = query.toLowerCase()
  const title = entry.title.toLowerCase()
  const desc = entry.description.toLowerCase()
  const keywords = (entry.keywords ?? []).join(" ").toLowerCase()

  if (title === q) return 100
  if (title.startsWith(q)) return 80
  if (title.includes(q)) return 60
  if (keywords.includes(q)) return 50
  if (desc.includes(q)) return 30

  // partial word match
  const words = q.split(" ").filter(Boolean)
  const matches = words.filter(
    (w) => title.includes(w) || keywords.includes(w) || desc.includes(w)
  )
  if (matches.length === words.length) return 20
  if (matches.length > 0) return 10 * (matches.length / words.length)

  return 0
}

function search(query: string): SearchEntry[] {
  if (!query.trim()) return []
  const scored = searchIndex
    .map((entry) => ({ entry, score: scoreEntry(entry, query) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
  return scored.slice(0, 12).map(({ entry }) => entry)
}

function groupResults(results: SearchEntry[]) {
  const groups: Record<string, SearchEntry[]> = {}
  for (const entry of results) {
    if (!groups[entry.category]) groups[entry.category] = []
    groups[entry.category].push(entry)
  }
  return CATEGORY_ORDER.filter((c) => groups[c]).map((c) => ({ category: c, items: groups[c] }))
}

/* ── SearchModal ───────────────────────────────────────────────────────────── */
export function SearchModal({ onClose }: { onClose: () => void }) {
  const router = useRouter()
  const [query, setQuery] = React.useState("")
  const [activeIndex, setActiveIndex] = React.useState(0)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const listRef = React.useRef<HTMLDivElement>(null)

  const results = React.useMemo(() => search(query), [query])
  const flat = results // already flat, used for keyboard nav
  const grouped = React.useMemo(() => groupResults(results), [results])

  React.useEffect(() => {
    inputRef.current?.focus()
  }, [])

  React.useEffect(() => {
    setActiveIndex(0)
  }, [query])

  // Close on backdrop click
  function handleBackdropClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) onClose()
  }

  function navigate(href: string) {
    router.push(href)
    onClose()
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") { onClose(); return }
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, flat.length - 1))
    }
    if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    }
    if (e.key === "Enter" && flat[activeIndex]) {
      navigate(flat[activeIndex].href)
    }
  }

  // Scroll active item into view
  React.useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${activeIndex}"]`) as HTMLElement | null
    el?.scrollIntoView({ block: "nearest" })
  }, [activeIndex])

  const isEmpty = query.trim() && results.length === 0
  const showResults = query.trim() && results.length > 0

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center pt-[10vh] px-4"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
      onClick={handleBackdropClick}
    >
      <div
        className="w-full max-w-xl rounded-2xl border border-border bg-white shadow-2xl dark:bg-card overflow-hidden"
        role="dialog"
        aria-label="Site search"
        onKeyDown={handleKeyDown}
      >
        {/* Input row */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search services, pages, locations…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            autoComplete="off"
            spellCheck={false}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Clear search"
            >
              <X className="h-3 w-3" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-md border border-border px-2 py-1 text-[10px] font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Esc
          </button>
        </div>

        {/* Results */}
        {showResults && (
          <div ref={listRef} className="max-h-[60vh] overflow-y-auto py-2">
            {grouped.map(({ category, items }) => {
              // compute flat offset for this group
              const groupOffset = flat.indexOf(items[0])
              return (
                <div key={category}>
                  <p className="px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                    {category}
                  </p>
                  {items.map((item, i) => {
                    const flatIdx = groupOffset + i
                    const isActive = flatIdx === activeIndex
                    return (
                      <button
                        key={item.href}
                        type="button"
                        data-idx={flatIdx}
                        onClick={() => navigate(item.href)}
                        onMouseEnter={() => setActiveIndex(flatIdx)}
                        className={cn(
                          "flex w-full items-start gap-3 px-4 py-2.5 text-left transition-colors",
                          isActive ? "bg-blue/5 dark:bg-blue/10" : "hover:bg-muted/60"
                        )}
                      >
                        <div className="min-w-0 flex-1">
                          <p className={cn(
                            "text-sm font-medium leading-tight",
                            isActive ? "text-blue" : "text-foreground"
                          )}>
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground truncate">
                            {item.description}
                          </p>
                        </div>
                        <ArrowRight className={cn(
                          "mt-0.5 h-3.5 w-3.5 shrink-0 transition-opacity",
                          isActive ? "opacity-100 text-blue" : "opacity-0"
                        )} />
                      </button>
                    )
                  })}
                </div>
              )
            })}
          </div>
        )}

        {/* Empty state */}
        {isEmpty && (
          <div className="py-12 text-center">
            <p className="text-sm text-muted-foreground">No results for &ldquo;{query}&rdquo;</p>
            <p className="mt-1 text-xs text-muted-foreground/60">Try a service name, city, or keyword</p>
          </div>
        )}

        {/* Default state */}
        {!query.trim() && (
          <div className="py-6 px-4">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">Quick links</p>
            <div className="grid grid-cols-2 gap-1">
              {[
                { title: "Managed IT", href: "/services/managed" },
                { title: "Pricing",    href: "/pricing" },
                { title: "Security",   href: "/services/security" },
                { title: "Contact",    href: "/contact" },
                { title: "Cloud",      href: "/services/cloud" },
                { title: "Locations",  href: "/locations" },
              ].map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => navigate(item.href)}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/70 hover:bg-muted hover:text-foreground transition-colors"
                >
                  {item.title}
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/40" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="border-t border-border px-4 py-2.5 flex items-center gap-4 text-[10px] text-muted-foreground/50">
          <span className="flex items-center gap-1"><kbd className="rounded border border-border px-1 font-mono">↑↓</kbd> navigate</span>
          <span className="flex items-center gap-1"><kbd className="rounded border border-border px-1 font-mono">↵</kbd> open</span>
          <span className="flex items-center gap-1"><kbd className="rounded border border-border px-1 font-mono">Esc</kbd> close</span>
        </div>
      </div>
    </div>
  )
}

/* ── SearchTrigger — button that opens the modal ──────────────────────────── */
export function SearchTrigger({ onDark }: { onDark?: boolean }) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search"
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          onDark
            ? "text-white/60 hover:text-white"
            : "text-foreground/60 hover:text-foreground hover:bg-muted"
        )}
      >
        <Search className="h-4 w-4" />
      </button>
      {open && <SearchModal onClose={() => setOpen(false)} />}
    </>
  )
}
