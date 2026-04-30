"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  Search, X, ArrowRight, Clock, Headphones, Package, Building2,
  MapPin, FileText, BookOpen, Scale, Layers, Hash,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { searchIndex, type SearchEntry } from "@/lib/constants/search-index"

/* ── Category config ───────────────────────────────────────────────────────── */
const CATEGORY_ORDER = ["Services", "Products", "Industries", "Locations", "Pages", "Resources", "Legal"]

const CATEGORY_META: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  Services:   { icon: Headphones, color: "text-blue",        bg: "bg-blue/10" },
  Products:   { icon: Package,    color: "text-violet-500",  bg: "bg-violet-500/10" },
  Industries: { icon: Building2,  color: "text-amber-500",   bg: "bg-amber-500/10" },
  Locations:  { icon: MapPin,     color: "text-emerald-500", bg: "bg-emerald-500/10" },
  Pages:      { icon: FileText,   color: "text-slate-500",   bg: "bg-slate-500/10" },
  Resources:  { icon: BookOpen,   color: "text-orange-500",  bg: "bg-orange-500/10" },
  Legal:      { icon: Scale,      color: "text-slate-400",   bg: "bg-slate-400/10" },
}

const QUICK_LINKS = [
  { title: "Managed IT",  href: "/services/managed",  cat: "Services"  },
  { title: "Security",    href: "/services/security",  cat: "Services"  },
  { title: "Cloud",       href: "/services/cloud",     cat: "Services"  },
  { title: "Pricing",     href: "/pricing",             cat: "Pages"     },
  { title: "Contact",     href: "/contact",             cat: "Pages"     },
  { title: "Locations",   href: "/locations",           cat: "Locations" },
]

const RECENT_KEY = "aethon_recent_searches"
const MAX_RECENT = 5

/* ── Score ─────────────────────────────────────────────────────────────────── */
function scoreEntry(entry: SearchEntry, query: string): number {
  const q = query.toLowerCase().trim()
  if (!q) return 0
  const title    = entry.title.toLowerCase()
  const desc     = entry.description.toLowerCase()
  const keywords = (entry.keywords ?? []).join(" ").toLowerCase()

  if (title === q)            return 100
  if (title.startsWith(q))    return 85
  if (title.includes(q))      return 65
  if (keywords.includes(q))   return 55
  if (desc.includes(q))       return 35

  const words   = q.split(" ").filter(Boolean)
  const matches = words.filter((w) => title.includes(w) || keywords.includes(w) || desc.includes(w))
  if (matches.length === words.length) return 25
  if (matches.length > 0) return Math.round(12 * (matches.length / words.length))
  return 0
}

function doSearch(query: string): SearchEntry[] {
  if (!query.trim()) return []
  return searchIndex
    .map((e) => ({ e, s: scoreEntry(e, query) }))
    .filter(({ s }) => s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, 14)
    .map(({ e }) => e)
}

function groupResults(results: SearchEntry[]) {
  const groups: Record<string, SearchEntry[]> = {}
  for (const e of results) {
    if (!groups[e.category]) groups[e.category] = []
    groups[e.category].push(e)
  }
  return CATEGORY_ORDER.filter((c) => groups[c]).map((c) => ({ category: c, items: groups[c] }))
}

/* ── Highlight matched text ────────────────────────────────────────────────── */
function Highlight({ text, query }: { text: string; query: string }) {
  const q = query.trim().toLowerCase()
  if (!q) return <>{text}</>
  const idx = text.toLowerCase().indexOf(q)
  if (idx === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-blue font-semibold">{text.slice(idx, idx + q.length)}</span>
      {text.slice(idx + q.length)}
    </>
  )
}

/* ── Recent searches (localStorage) ───────────────────────────────────────── */
function getRecent(): string[] {
  if (typeof window === "undefined") return []
  try { return JSON.parse(localStorage.getItem(RECENT_KEY) ?? "[]") } catch { return [] }
}
function saveRecent(query: string) {
  if (!query.trim()) return
  const prev = getRecent().filter((q) => q !== query)
  localStorage.setItem(RECENT_KEY, JSON.stringify([query, ...prev].slice(0, MAX_RECENT)))
}

/* ── ResultItem ────────────────────────────────────────────────────────────── */
function ResultItem({
  item, isActive, flatIdx, query, onNavigate, onHover,
}: {
  item: SearchEntry
  isActive: boolean
  flatIdx: number
  query: string
  onNavigate: (href: string) => void
  onHover: (i: number) => void
}) {
  const meta = CATEGORY_META[item.category] ?? CATEGORY_META.Pages
  const Icon = meta.icon
  return (
    <button
      type="button"
      data-idx={flatIdx}
      onClick={() => onNavigate(item.href)}
      onMouseEnter={() => onHover(flatIdx)}
      className={cn(
        "group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all duration-100",
        isActive
          ? "bg-blue/[0.07] dark:bg-blue/[0.12]"
          : "hover:bg-muted/70 dark:hover:bg-white/[0.04]"
      )}
      style={{
        animation: `result-item-in 0.22s cubic-bezier(0.16,1,0.3,1) ${flatIdx * 25}ms both`,
      }}
    >
      {/* Left accent bar */}
      <span
        className={cn(
          "absolute left-0 top-2 bottom-2 w-[3px] rounded-full transition-all duration-150",
          isActive ? "opacity-100 bg-blue" : "opacity-0"
        )}
      />

      {/* Icon */}
      <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-lg", meta.bg)}>
        <Icon className={cn("h-3.5 w-3.5", meta.color)} />
      </span>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <p className={cn(
          "text-sm font-medium leading-tight transition-colors",
          isActive ? "text-foreground" : "text-foreground/85"
        )}>
          <Highlight text={item.title} query={query} />
        </p>
        <p className="mt-0.5 truncate text-xs text-muted-foreground/70">
          {item.description}
        </p>
      </div>

      {/* Arrow */}
      <ArrowRight className={cn(
        "h-3.5 w-3.5 shrink-0 text-blue transition-all duration-150",
        isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"
      )} />
    </button>
  )
}

/* ── SearchModal ───────────────────────────────────────────────────────────── */
export function SearchModal({ onClose }: { onClose: () => void }) {
  const router = useRouter()
  const [query, setQuery]       = React.useState("")
  const [activeIdx, setActiveIdx] = React.useState(0)
  const [closing, setClosing]   = React.useState(false)
  const [recent, setRecent]     = React.useState<string[]>([])
  const inputRef  = React.useRef<HTMLInputElement>(null)
  const listRef   = React.useRef<HTMLDivElement>(null)

  const results = React.useMemo(() => doSearch(query), [query])
  const grouped = React.useMemo(() => groupResults(results), [results])

  React.useEffect(() => { inputRef.current?.focus() }, [])
  React.useEffect(() => { setRecent(getRecent()) }, [])
  React.useEffect(() => { setActiveIdx(0) }, [query])

  function close() {
    setClosing(true)
    setTimeout(onClose, 160)
  }

  function navigate(href: string) {
    if (query.trim()) saveRecent(query.trim())
    router.push(href)
    onClose()
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") { close(); return }
    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIdx((i) => Math.min(i + 1, results.length - 1)) }
    if (e.key === "ArrowUp")   { e.preventDefault(); setActiveIdx((i) => Math.max(i - 1, 0)) }
    if (e.key === "Enter" && results[activeIdx]) navigate(results[activeIdx].href)
  }

  React.useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${activeIdx}"]`) as HTMLElement | null
    el?.scrollIntoView({ block: "nearest" })
  }, [activeIdx])

  const showEmpty   = !!query.trim() && results.length === 0
  const showResults = !!query.trim() && results.length > 0
  const showDefault = !query.trim()

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center px-4 pt-[8vh] sm:pt-[12vh]"
      style={{ animation: closing ? "search-backdrop-in 0.16s ease reverse" : "search-backdrop-in 0.2s ease both" }}
      onClick={(e) => { if (e.target === e.currentTarget) close() }}
      role="presentation"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "oklch(0 0 0 / 0.50)", backdropFilter: "blur(6px)" }}
      />

      {/* Panel */}
      <div
        className="relative w-full max-w-[600px] overflow-hidden rounded-2xl border border-border bg-white shadow-2xl dark:bg-[oklch(0.13_0.018_252)]"
        style={{ animation: closing ? "search-modal-out 0.16s cubic-bezier(0.4,0,1,1) both" : "search-modal-in 0.28s cubic-bezier(0.16,1,0.3,1) both" }}
        role="dialog"
        aria-label="Search"
        onKeyDown={handleKeyDown}
      >
        {/* ── Input ─────────────────────────────────────────────────────────── */}
        <div className="flex items-center gap-3 px-4 py-4">
          <Search className="h-5 w-5 shrink-0 text-blue" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search services, pages, cities…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-[15px] font-medium text-foreground placeholder:font-normal placeholder:text-muted-foreground/60 focus:outline-none"
            autoComplete="off"
            spellCheck={false}
            aria-label="Search query"
          />
          <div className="flex items-center gap-2 shrink-0">
            {query && (
              <button
                type="button"
                onClick={() => { setQuery(""); inputRef.current?.focus() }}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-border hover:text-foreground"
                aria-label="Clear"
              >
                <X className="h-3 w-3" />
              </button>
            )}
            <kbd
              onClick={close}
              className="cursor-pointer select-none rounded-md border border-border bg-muted px-2 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Esc
            </kbd>
          </div>
        </div>

        <div className="h-px bg-border" />

        {/* ── Results ───────────────────────────────────────────────────────── */}
        {showResults && (
          <div ref={listRef} className="max-h-[55vh] overflow-y-auto px-2 py-2 scroll-smooth">
            {grouped.map(({ category, items }) => {
              const groupOffset = results.indexOf(items[0])
              return (
                <div key={category} className="mb-3 last:mb-0">
                  <div className="mb-1 flex items-center gap-2 px-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/50">
                      {category}
                    </span>
                    <span className="flex-1 h-px bg-border/60" />
                  </div>
                  <div className="space-y-0.5">
                    {items.map((item, i) => (
                      <ResultItem
                        key={item.href}
                        item={item}
                        isActive={groupOffset + i === activeIdx}
                        flatIdx={groupOffset + i}
                        query={query}
                        onNavigate={navigate}
                        onHover={setActiveIdx}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* ── Empty state ───────────────────────────────────────────────────── */}
        {showEmpty && (
          <div className="flex flex-col items-center py-14">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
              <Hash className="h-5 w-5 text-muted-foreground/50" />
            </div>
            <p className="text-sm font-medium text-foreground">No results for &ldquo;{query}&rdquo;</p>
            <p className="mt-1 text-xs text-muted-foreground/60">Try a service name, city, or keyword</p>
          </div>
        )}

        {/* ── Default state ─────────────────────────────────────────────────── */}
        {showDefault && (
          <div className="px-2 py-3">
            {/* Recent searches */}
            {recent.length > 0 && (
              <div className="mb-4">
                <div className="mb-1 flex items-center gap-2 px-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/50">Recent</span>
                  <span className="flex-1 h-px bg-border/60" />
                  <button
                    type="button"
                    onClick={() => { localStorage.removeItem(RECENT_KEY); setRecent([]) }}
                    className="text-[10px] text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                  >
                    Clear
                  </button>
                </div>
                <div className="space-y-0.5">
                  {recent.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setQuery(q)}
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted/70"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted">
                        <Clock className="h-3.5 w-3.5 text-muted-foreground/60" />
                      </span>
                      <span className="text-sm text-foreground/75">{q}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick links */}
            <div>
              <div className="mb-1 flex items-center gap-2 px-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/50">Quick links</span>
                <span className="flex-1 h-px bg-border/60" />
              </div>
              <div className="grid grid-cols-2 gap-0.5">
                {QUICK_LINKS.map((item) => {
                  const meta = CATEGORY_META[item.cat] ?? CATEGORY_META.Pages
                  const Icon = meta.icon
                  return (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => navigate(item.href)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted/70 group"
                    >
                      <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-lg", meta.bg)}>
                        <Icon className={cn("h-3.5 w-3.5", meta.color)} />
                      </span>
                      <span className="text-sm font-medium text-foreground/75 group-hover:text-foreground transition-colors">
                        {item.title}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── Footer ────────────────────────────────────────────────────────── */}
        <div className="h-px bg-border" />
        <div className="flex items-center justify-between px-4 py-2.5">
          <div className="flex items-center gap-3 text-[10px] text-muted-foreground/40">
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-border/80 bg-muted px-1.5 py-0.5 font-mono text-[10px]">↑↓</kbd>
              navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-border/80 bg-muted px-1.5 py-0.5 font-mono text-[10px]">↵</kbd>
              open
            </span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-muted-foreground/30">
            <Layers className="h-3 w-3" />
            <span>Aethon Core</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── SearchTrigger ─────────────────────────────────────────────────────────── */
export function SearchTrigger({ onDark }: { onDark?: boolean }) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setOpen((v) => !v) }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <>
      {/* Desktop — pill button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "hidden lg:flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm transition-all duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          onDark
            ? "border-white/10 bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/70"
            : "border-border bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground hover:border-border/80"
        )}
        aria-label="Search"
      >
        <Search className="h-3.5 w-3.5 shrink-0" />
        <span className="text-[13px]">Search…</span>
        <kbd className={cn(
          "ml-1 hidden rounded px-1.5 py-0.5 font-mono text-[10px] sm:inline-block",
          onDark ? "bg-white/10 text-white/30" : "bg-background text-muted-foreground/60 border border-border"
        )}>
          ⌘K
        </kbd>
      </button>

      {/* Mobile — icon only */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search"
        className={cn(
          "flex lg:hidden h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          onDark ? "text-white/60 hover:text-white" : "text-foreground/60 hover:text-foreground hover:bg-muted"
        )}
      >
        <Search className="h-4 w-4" />
      </button>

      {open && <SearchModal onClose={() => setOpen(false)} />}
    </>
  )
}
