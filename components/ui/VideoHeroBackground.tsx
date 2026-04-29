"use client"

export function VideoHeroBackground({ src }: { src: string }) {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      onError={(e) => { (e.currentTarget as HTMLVideoElement).style.display = "none" }}
      className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
    />
  )
}
