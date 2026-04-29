import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          background: "linear-gradient(135deg, #1e40af 0%, #1D4ED8 50%, #2563eb 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)",
        }}
      >
        {/* Stylised "A" mark */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          {/* Left leg */}
          <path d="M2 15.5 L9 2.5 L16 15.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Cross bar */}
          <path d="M5 11 L13 11" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          {/* Electric arc dot at apex */}
          <circle cx="9" cy="2.5" r="1.3" fill="#60a5fa" />
        </svg>
      </div>
    ),
    { ...size },
  )
}
