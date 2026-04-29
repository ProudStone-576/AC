import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard/", "/portal/", "/api/", "/_next/"],
      },
    ],
    sitemap: "https://aethoncore.com/sitemap.xml",
    host: "https://aethoncore.com",
  }
}
