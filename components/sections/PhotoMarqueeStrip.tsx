import Image from "next/image"

const ROW1 = [
  { id: "photo-1558494949-ef010cbdcc31", alt: "Server infrastructure" },
  { id: "photo-1477959858617-67f85cf4f1df", alt: "Global city network" },
  { id: "photo-1486406146926-c627a92ad1ab", alt: "Enterprise towers" },
  { id: "photo-1555949963-aa79dcee981c", alt: "Cybersecurity operations" },
  { id: "photo-1544197150-b99a580bb7a8", alt: "Fiber optic network" },
  { id: "photo-1497366216548-37526070297c", alt: "Operations center" },
  { id: "photo-1485827404703-89b55fcc595e", alt: "Automation technology" },
  { id: "photo-1576091160399-112ba8d25d1d", alt: "Healthcare technology" },
]

const ROW2 = [
  { id: "photo-1518770660439-4636190af475", alt: "Circuit infrastructure" },
  { id: "photo-1517430816045-df4b7de11d1d", alt: "Data center corridor" },
  { id: "photo-1558618666-fcd25c85cd64", alt: "Server rack systems" },
  { id: "photo-1486406146926-c627a92ad1ab", alt: "Enterprise buildings" },
  { id: "photo-1558494949-ef010cbdcc31", alt: "Data center" },
  { id: "photo-1555949963-aa79dcee981c", alt: "Security systems" },
  { id: "photo-1519501025264-65ba15a82390", alt: "City infrastructure" },
  { id: "photo-1551288049-bebda4e38f71", alt: "Data analytics" },
]

function PhotoCard({
  photo,
  deg,
  height = "h-44",
  width = "w-64",
}: {
  photo: { id: string; alt: string }
  deg: number
  height?: string
  width?: string
}) {
  return (
    <div
      className={`relative ${height} ${width} shrink-0 overflow-hidden rounded-xl border border-white/8 shadow-lg shadow-black/30`}
      style={{ transform: `rotate(${deg}deg)` }}
    >
      <Image
        src={`https://images.unsplash.com/${photo.id}?w=3840&q=100`}
        alt={photo.alt}
        fill
        className="object-cover transition-transform duration-700 hover:scale-110"
        sizes="256px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-canvas/20" />
    </div>
  )
}

export function PhotoMarqueeStrip() {
  return (
    <div className="relative overflow-hidden bg-canvas border-t border-white/5 py-10">
      {/* Left gradient mask */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40"
        style={{ background: "linear-gradient(to right, oklch(0.090 0.018 252), transparent)" }}
        aria-hidden="true"
      />
      {/* Right gradient mask */}
      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40"
        style={{ background: "linear-gradient(to left, oklch(0.090 0.018 252), transparent)" }}
        aria-hidden="true"
      />

      {/* Row 1 — scrolls left */}
      <div
        className="flex gap-5 mb-5"
        style={{ animation: "marquee 55s linear infinite" }}
      >
        {[...ROW1, ...ROW1].map((photo, i) => (
          <PhotoCard key={i} photo={photo} deg={i % 3 === 0 ? 1.2 : i % 3 === 1 ? -0.8 : 1.8} />
        ))}
      </div>

      {/* Row 2 — scrolls right, different speed */}
      <div
        className="flex gap-5"
        style={{ animation: "marquee-reverse 70s linear infinite" }}
      >
        {[...ROW2, ...ROW2].map((photo, i) => (
          <PhotoCard
            key={i}
            photo={photo}
            deg={i % 3 === 0 ? -1.5 : i % 3 === 1 ? 0.6 : -2}
            height="h-40"
            width="w-72"
          />
        ))}
      </div>
    </div>
  )
}
