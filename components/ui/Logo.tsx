import { cn } from "@/lib/utils"

interface LogoProps {
  /** "light" = white mark + white text (for dark backgrounds)
   *  "dark"  = navy mark + dark text (for light backgrounds) */
  variant?: "light" | "dark"
  className?: string
  markOnly?: boolean
}

/**
 * Aethon Core — Brand mark + wordmark.
 *
 * The mark: three concentric arcs suggesting a core/nucleus.
 * Represents depth, precision, and foundational infrastructure.
 */
export function Logo({ variant = "dark", className, markOnly = false }: LogoProps) {
  const markColor = variant === "light" ? "white" : "currentColor"
  const textColor = variant === "light" ? "text-white" : "text-brand"

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {/* Mark */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Outer arc — top-right quadrant */}
        <path
          d="M14 3C20.075 3 25 7.925 25 14C25 20.075 20.075 25 14 25"
          stroke={markColor}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.35"
        />
        {/* Middle arc */}
        <path
          d="M14 7C17.866 7 21 10.134 21 14C21 17.866 17.866 21 14 21"
          stroke={markColor}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.65"
        />
        {/* Inner arc */}
        <path
          d="M14 11C15.933 11 17.5 12.567 17.5 14.5C17.5 16.433 15.933 18 14 18"
          stroke={markColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Core dot */}
        <circle cx="14" cy="14" r="2" fill={markColor} />
        {/* Left anchor line */}
        <line x1="3" y1="14" x2="11.5" y2="14" stroke={markColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </svg>

      {/* Wordmark */}
      {!markOnly && (
        <div className={cn("flex flex-col leading-none", textColor)}>
          <span className="text-[0.95rem] font-semibold tracking-tight">
            Aethon Core
          </span>
        </div>
      )}
    </div>
  )
}
