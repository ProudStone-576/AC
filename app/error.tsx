"use client"

import { useEffect } from "react"
import Link from "next/link"
import { RotateCw } from "lucide-react"
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("[error]", error.digest, error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-widest text-destructive">
        500
      </p>
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Something went wrong
      </h1>
      <p className="mb-8 max-w-md text-base text-muted-foreground">
        An unexpected error occurred. Our team has been notified.
        {error.digest && (
          <span className="block mt-2 font-mono text-xs text-muted-foreground/60">
            Error ID: {error.digest}
          </span>
        )}
      </p>
      <div className="flex items-center gap-3">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-lg bg-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-hover focus:outline-none focus:ring-2 focus:ring-blue/40"
        >
          <RotateCw className="h-4 w-4" />
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus:outline-none"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
