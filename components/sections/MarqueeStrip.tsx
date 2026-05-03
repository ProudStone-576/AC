import { clientLogos } from "@/lib/constants/company"

const certifications = [
  "SOC 2 Type II certified",
  "ISO 27001 — In Progress",
  "HIPAA-compliant environments",
  "FedRAMP — Coming soon",
  "PCI DSS managed operations",
  "Zero Trust security — nothing gets automatic access",
  "99.99% uptime guarantee — written in your contract",
  "24/7 monitoring and security operations",
  "Named engineers. No help desks.",
  "OSFI-aligned (Canadian banks & financial institutions)",
  "NERC CIP compliant (energy grid security)",
  "Written guarantees with real money-back remedies",
]

const logos = [...clientLogos, ...clientLogos]
const certs  = [...certifications, ...certifications]

export function MarqueeStrip() {
  return (
    <div className="relative overflow-hidden border-b border-white/6 bg-canvas/90 backdrop-blur-sm py-5">

      {/* Top accent line — blue shimmer */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to right, transparent 5%, oklch(0.50 0.250 250 / 0.55) 50%, transparent 95%)" }}
        aria-hidden="true"
      />

      {/* Left fade mask */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28"
        style={{ background: "linear-gradient(to right, oklch(0.090 0.018 252), transparent)" }}
        aria-hidden="true"
      />
      {/* Right fade mask */}
      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28"
        style={{ background: "linear-gradient(to left, oklch(0.090 0.018 252), transparent)" }}
        aria-hidden="true"
      />

      {/* Row 1 — industries scrolling left */}
      <div className="mb-4 flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {logos.map((name, i) => (
            <span key={`logo-${i}`} className="inline-flex items-center">
              <span className="px-7 text-sm font-semibold tracking-tight text-white/50">
                {name}
              </span>
              <span
                className="text-[7px] shrink-0"
                style={{ color: "oklch(0.50 0.250 250 / 0.55)" }}
                aria-hidden="true"
              >
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — certifications scrolling right */}
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {certs.map((cert, i) => (
            <span key={`cert-${i}`} className="inline-flex items-center gap-2.5 px-8">
              <span
                className="h-[5px] w-[5px] shrink-0 rounded-full"
                style={{ background: "oklch(0.50 0.250 250 / 0.6)" }}
                aria-hidden="true"
              />
              <span className="text-[10.5px] font-semibold uppercase tracking-widest text-white/35">
                {cert}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
