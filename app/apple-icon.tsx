import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: "linear-gradient(135deg, #1e40af 0%, #1D4ED8 50%, #2563eb 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "inset 0 2px 0 rgba(255,255,255,0.12)",
        }}
      >
        <svg width="100" height="100" viewBox="0 0 18 18" fill="none">
          <path d="M2 15.5 L9 2.5 L16 15.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M5 11 L13 11" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="9" cy="2.5" r="1.3" fill="#60a5fa" />
        </svg>
      </div>
    ),
    { ...size },
  )
}
