"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export interface Faq {
  q: string
  a: string
}

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = React.useState<number | null>(null)

  return (
    <div className="mx-auto max-w-3xl divide-y divide-border">
      {faqs.map((faq, i) => (
        <div key={faq.q} className="py-1">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-5 text-left"
            aria-expanded={open === i}
          >
            <h3 className="text-base font-semibold text-foreground">{faq.q}</h3>
            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                open === i && "rotate-180",
              )}
            />
          </button>
          {open === i && (
            <div className="animate-accordion-open pb-5">
              <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
