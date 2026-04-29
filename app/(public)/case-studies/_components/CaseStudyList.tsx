"use client"

import * as React from "react"
import Link from "next/link"

interface CaseStudy {
  client: string
  industry: string
  title: string
  result: string
  href: string
}

const industries = ["All industries", "Financial Services", "Healthcare", "Manufacturing", "Retail & Commerce", "Energy & Utilities"]

export function CaseStudyList({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [active, setActive] = React.useState("All industries")

  const filtered = active === "All industries"
    ? caseStudies
    : caseStudies.filter((cs) => cs.client === active)

  return (
    <>
      {/* Filter bar */}
      <div className="mb-8 flex flex-wrap gap-2">
        {industries.map((industry) => (
          <button
            key={industry}
            type="button"
            onClick={() => setActive(industry)}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
              active === industry
                ? "border-brand bg-brand text-brand-foreground"
                : "border-border bg-white text-foreground hover:bg-muted dark:bg-card"
            }`}
          >
            {industry}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-sm text-muted-foreground">
          No case studies in this industry yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cs) => (
            <Link
              key={cs.href}
              href={cs.href}
              className="group flex flex-col rounded-xl border border-border bg-white p-6 transition-all hover:border-blue/30 hover:shadow-sm dark:bg-card"
            >
              <span className="mb-3 inline-flex w-fit rounded-full bg-blue-light px-2.5 py-1 text-[11px] font-semibold text-blue-light-foreground">
                {cs.industry}
              </span>
              <h3 className="mb-3 text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-blue">
                {cs.title}
              </h3>
              <div className="mt-auto flex flex-col gap-3 border-t border-border pt-4">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Our Approach
                </p>
                <p className="text-sm text-foreground/80">{cs.result}</p>
                <p className="text-xs text-muted-foreground">{cs.client}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
