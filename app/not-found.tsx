import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-widest text-blue">
        404
      </p>
      <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Page not found
      </h1>
      <p className="mb-8 max-w-md text-base text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg bg-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-hover focus:outline-none focus:ring-2 focus:ring-blue/40"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
    </div>
  )
}
