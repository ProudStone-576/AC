import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aethon Core",
    short_name: "Aethon Core",
    description: "Managed IT, cloud, security, and network services for businesses across Canada.",
    start_url: "/portal",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#0f172a",
    theme_color: "#3b82f6",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "My Requests",
        short_name: "Requests",
        description: "View and manage your service requests",
        url: "/portal/requests",
        icons: [{ src: "/icon.png", sizes: "96x96" }],
      },
      {
        name: "Incidents",
        short_name: "Incidents",
        description: "View active incidents",
        url: "/portal/incidents",
        icons: [{ src: "/icon.png", sizes: "96x96" }],
      },
    ],
    screenshots: [],
  }
}
