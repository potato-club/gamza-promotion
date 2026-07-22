import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/test-header",
    },
    sitemap: "https://www.gamza.site/sitemap.xml",
  };
}
