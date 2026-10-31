import type { MetadataRoute } from "next";
import { locations, siteBaseUrl } from "@/lib/locations";
import { services } from "@/lib/services";
import { contentLastUpdated } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = contentLastUpdated;

  return [
    {
      url: siteBaseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteBaseUrl}/locations`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteBaseUrl}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteBaseUrl}/before-and-after`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...services.map((service) => ({
      url: `${siteBaseUrl}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...locations.map((location) => ({
      url: `${siteBaseUrl}/locations/${location.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
