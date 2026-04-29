import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react"
import { FadeIn } from "@/components/ui/FadeIn"

interface OutcomeCard {
  title: string
  description: string
}

interface PhotoCard {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

interface WalkthroughItem {
  title: string
  description: string
}

export function ServiceOutcomeSection({
  eyebrow = "What this helps you do",
  title,
  intro,
  outcomes,
}: {
  eyebrow?: string
  title: string
  intro: string
  outcomes: OutcomeCard[]
}) {
  return (
    <section className="bg-white py-20 dark:bg-background lg:py-24">
      <div className="container-enterprise">
        <FadeIn variant="fade-up">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">{eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>
          </div>
        </FadeIn>
        <FadeIn variant="scale-up" stagger>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="rounded-2xl border border-border bg-surface p-6 shadow-sm dark:bg-card"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-light">
                  <CheckCircle2 className="h-5 w-5 text-blue" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{outcome.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{outcome.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export function ServicePhotoGrid({
  eyebrow = "What it looks like",
  title,
  intro,
  photos,
}: {
  eyebrow?: string
  title: string
  intro: string
  photos: PhotoCard[]
}) {
  return (
    <section className="bg-surface py-20 dark:bg-card lg:py-24">
      <div className="container-enterprise">
        <FadeIn variant="fade-up">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue">{eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>
          </div>
        </FadeIn>
        <FadeIn variant="scale-up" stagger>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {photos.map((photo) => (
              <article
                key={photo.title}
                className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm dark:bg-background"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photo.imageSrc}
                    alt={photo.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">{photo.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{photo.description}</p>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export function ServiceWalkthroughSection({
  title,
  description,
  items,
  primaryLabel = "Request a walkthrough",
  primaryHref = "/contact",
  secondaryLabel = "Contact us",
  secondaryHref = "/contact",
}: {
  title: string
  description: string
  items: WalkthroughItem[]
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}) {
  return (
    <section className="bg-canvas py-20 lg:py-24">
      <div className="container-enterprise">
        <FadeIn variant="fade-up">
          <div className="grid gap-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue">
                <PlayCircle className="h-3.5 w-3.5" />
                Request a walkthrough
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-canvas-muted">{description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={primaryHref}
                  className="inline-flex items-center gap-2 rounded-full bg-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-hover"
                >
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                >
                  {secondaryLabel}
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              {items.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-canvas-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
