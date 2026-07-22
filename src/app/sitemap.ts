import type { MetadataRoute } from "next";

const BASE_URL = "https://www.gamza.site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, priority: 1 },
    { url: `${BASE_URL}/projects`, priority: 0.8 },
    { url: `${BASE_URL}/result`, priority: 0.5 },
  ];
}
