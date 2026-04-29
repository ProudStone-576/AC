import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Aethon Core Inc. — Enterprise Infrastructure & Managed Services"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #060B14 0%, #0D1527 50%, #0A1020 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(96,165,250,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Top: Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", position: "relative" }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 10,
              background: "#1D4ED8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight: 700,
              color: "white",
            }}
          >
            AC
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: "white" }}>Aethon Core</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Enterprise Infrastructure</span>
          </div>
        </div>

        {/* Middle: Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", position: "relative" }}>
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            The infrastructure layer serious enterprises run on.
          </div>
          <div style={{ fontSize: 22, color: "rgba(255,255,255,0.5)", maxWidth: 700 }}>
            Cloud · Network · Security · Data — fully managed from Canada.
          </div>
        </div>

        {/* Bottom: Stats bar */}
        <div
          style={{
            display: "flex",
            gap: "0px",
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            position: "relative",
          }}
        >
          {[
            { value: "99.99%", label: "Uptime target" },
            { value: "50+", label: "Integrations" },
            { value: "< 10ms", label: "P99 latency" },
            { value: "24/7", label: "Operations" },
          ].map((s, i) => (
            <div
              key={s.label}
              style={{
                flex: 1,
                padding: "16px 24px",
                background: "rgba(255,255,255,0.03)",
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span style={{ fontSize: 22, fontWeight: 700, color: "white", fontVariantNumeric: "tabular-nums" }}>
                {s.value}
              </span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  )
}
