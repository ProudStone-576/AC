"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { AlertCircle, ArrowRight } from "lucide-react"

/* ─── Tier data (must match pricing page) ──────────────────────────────────── */
const TIERS = [
  { name: "Foundation",      maxNodes: 100,      monthlyUSD: 3800,  href: "/contact?plan=foundation"      },
  { name: "Professional",    maxNodes: 500,       monthlyUSD: 9200,  href: "/contact?plan=professional"    },
  { name: "Enterprise",      maxNodes: 2500,      monthlyUSD: 21500, href: "/contact?plan=enterprise"      },
  { name: "Enterprise Plus", maxNodes: Infinity,  monthlyUSD: null,  href: "/contact?plan=enterprise-plus" },
] as const

type Tier = (typeof TIERS)[number]

function getTier(nodes: number): Tier {
  return TIERS.find((t) => nodes <= t.maxNodes) ?? TIERS[TIERS.length - 1]
}

/* ─── Assumptions (shown to the user) ─────────────────────────────────────── */
const AVG_TOOL_COST_MO = 800   // Typical enterprise SaaS infrastructure tool (monitoring, SIEM, etc.)
const FINOPS_SAVINGS_RATE = 0.25  // Conservative end of the 25–40% range stated on /services/finops

/* ─── Formatting ──────────────────────────────────────────────────────────── */
function fmt(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000)     return `$${Math.round(n / 1_000)}K`
  return `$${Math.round(n)}`
}

/* ─── Component ───────────────────────────────────────────────────────────── */
export function RoiCalculator() {
  const [nodes,      setNodes]      = useState(100)
  const [tools,      setTools]      = useState(8)
  const [cloudSpend, setCloudSpend] = useState(30_000)

  const tier = getTier(nodes)

  const calc = useMemo(() => {
    const aethonMo      = tier.monthlyUSD ?? 0
    const aethonAnnual  = aethonMo * 12
    const toolsAnnual   = tools * AVG_TOOL_COST_MO * 12
    const cloudSavings  = cloudSpend * FINOPS_SAVINGS_RATE * 12
    const toolSavings   = toolsAnnual - aethonAnnual   // can be negative (shown as cost)
    const totalBenefit  = Math.max(0, toolSavings) + cloudSavings

    return { aethonMo, aethonAnnual, toolsAnnual, cloudSavings, toolSavings, totalBenefit }
  }, [tools, cloudSpend, tier])

  const isCustom = !tier.monthlyUSD

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">

      {/* ── Inputs ───────────────────────────────────────────────────────── */}
      <div className="space-y-8 lg:col-span-2">

        {/* Nodes */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-semibold text-foreground">Managed nodes</label>
            <span className="font-mono text-sm font-semibold text-blue">{nodes}</span>
          </div>
          <input
            type="range" min={10} max={2500} step={10}
            value={nodes}
            onChange={(e) => setNodes(Number(e.target.value))}
            className="w-full accent-blue"
          />
          <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
            <span>10</span><span>2,500</span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            VMs, container hosts, bare metal servers, or network appliances currently
            in production.
          </p>
        </div>

        {/* Tools */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-semibold text-foreground">
              Infrastructure tools managed separately
            </label>
            <span className="font-mono text-sm font-semibold text-blue">{tools}</span>
          </div>
          <input
            type="range" min={2} max={20} step={1}
            value={tools}
            onChange={(e) => setTools(Number(e.target.value))}
            className="w-full accent-blue"
          />
          <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
            <span>2</span><span>20</span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Monitoring, orchestration, SIEM, backup, automation tools — each with a
            separate subscription, login, and support contract.
          </p>
        </div>

        {/* Cloud spend */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-semibold text-foreground">Monthly cloud spend</label>
            <span className="font-mono text-sm font-semibold text-blue">
              {cloudSpend === 0 ? "None" : fmt(cloudSpend)}
            </span>
          </div>
          <input
            type="range" min={0} max={200_000} step={1_000}
            value={cloudSpend}
            onChange={(e) => setCloudSpend(Number(e.target.value))}
            className="w-full accent-blue"
          />
          <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
            <span>$0</span><span>$200K</span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            AWS, Azure, GCP, or combined. Used to estimate FinOps optimization
            potential if you engage our Cloud Cost Management service.
          </p>
        </div>
      </div>

      {/* ── Output ───────────────────────────────────────────────────────── */}
      <div className="space-y-4 lg:col-span-3">

        {/* Recommended tier */}
        <div className="rounded-xl border border-blue/20 bg-blue/5 p-5">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue">
            Recommended platform tier
          </p>
          <p className="text-2xl font-bold text-foreground">{tier.name}</p>
          {tier.monthlyUSD ? (
            <p className="mt-1 font-mono text-sm text-muted-foreground">
              ${tier.monthlyUSD.toLocaleString()}/mo · billed annually ($
              {(tier.monthlyUSD * 12).toLocaleString()}/yr)
            </p>
          ) : (
            <p className="mt-1 text-sm text-muted-foreground">
              Custom pricing — scoped to your environment after a discovery call.
            </p>
          )}
        </div>

        {/* Breakdown — hidden for Enterprise Plus (custom pricing) */}
        {!isCustom && (
          <div className="space-y-3">

            <div className="flex items-center justify-between rounded-lg border border-border bg-white p-4 dark:bg-card">
              <div>
                <p className="text-sm font-medium text-foreground">Estimated current tool spend</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {tools} tools × ~${AVG_TOOL_COST_MO}/mo avg
                </p>
              </div>
              <p className="font-mono text-base font-semibold text-foreground">
                {fmt(calc.toolsAnnual)}/yr
              </p>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-blue/20 bg-blue/5 p-4">
              <div>
                <p className="text-sm font-medium text-foreground">Aethon Core platform cost</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{tier.name} · annual billing</p>
              </div>
              <p className="font-mono text-base font-semibold text-blue">
                {fmt(calc.aethonAnnual)}/yr
              </p>
            </div>

            {calc.toolSavings > 0 ? (
              <div className="flex items-center justify-between rounded-lg border border-border bg-white p-4 dark:bg-card">
                <div>
                  <p className="text-sm font-medium text-foreground">Tool consolidation saving</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Replacing {tools} separate tools with one platform
                  </p>
                </div>
                <p className="font-mono text-base font-semibold text-emerald-600">
                  +{fmt(calc.toolSavings)}/yr
                </p>
              </div>
            ) : (
              <div className="flex items-center justify-between rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/20">
                <div>
                  <p className="text-sm font-medium text-foreground">Tool consolidation</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Platform cost exceeds estimated current tool spend with {tools} tools
                  </p>
                </div>
                <p className="font-mono text-base font-semibold text-amber-600">
                  {fmt(calc.toolSavings)}/yr
                </p>
              </div>
            )}

            {cloudSpend > 0 && (
              <div className="flex items-center justify-between rounded-lg border border-border bg-white p-4 dark:bg-card">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Cloud cost optimization (est.)
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    25% conservative reduction — requires FinOps managed service
                  </p>
                </div>
                <p className="font-mono text-base font-semibold text-emerald-600">
                  +{fmt(calc.cloudSavings)}/yr
                </p>
              </div>
            )}

            <div className={`flex items-center justify-between rounded-xl border p-5 ${
              calc.totalBenefit > 0
                ? "border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/20"
                : "border-border bg-surface dark:bg-card"
            }`}>
              <div>
                <p className="text-sm font-semibold text-foreground">Estimated annual benefit</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Tool savings + cloud optimization combined
                </p>
              </div>
              <p className={`font-mono text-xl font-bold ${
                calc.totalBenefit > 0 ? "text-emerald-600" : "text-foreground"
              }`}>
                {calc.totalBenefit > 0 ? "+" : ""}{fmt(calc.totalBenefit)}/yr
              </p>
            </div>

            <Link
              href={tier.href}
              className="inline-flex items-center gap-2 rounded-md bg-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-hover"
            >
              Get a real quote for {tier.name}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        {isCustom && (
          <Link
            href="/contact?plan=enterprise-plus"
            className="inline-flex items-center gap-2 rounded-md bg-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-hover"
          >
            Contact sales for Enterprise Plus pricing
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}

        {/* Disclaimer */}
        <div className="flex gap-3 rounded-lg border border-border bg-surface p-4 dark:bg-card">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
          <p className="text-xs leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">These are rough estimates, not a projection.</strong>{" "}
            Tool cost uses ~${AVG_TOOL_COST_MO}/mo per infrastructure tool as a typical enterprise average — your
            actual contracts may differ significantly. Cloud savings assumes a conservative{" "}
            {FINOPS_SAVINGS_RATE * 100}% reduction via active FinOps management (our{" "}
            <Link href="/services/finops" className="text-blue hover:underline">
              FinOps service page
            </Link>{" "}
            explains the range). These figures do not account for implementation costs, staff time, or migration
            effort. Request a{" "}
            <Link href="/services/assessment" className="text-blue hover:underline">
              formal assessment
            </Link>{" "}
            for numbers based on your actual environment.
          </p>
        </div>
      </div>
    </div>
  )
}
