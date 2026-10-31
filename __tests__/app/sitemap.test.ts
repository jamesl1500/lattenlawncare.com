import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { locations, siteBaseUrl } from "@/lib/locations";
import { contentLastUpdated } from "@/lib/business";
import { services } from "@/lib/services";

describe("sitemap", () => {
  it("includes the homepage and locations index", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls).toContain(siteBaseUrl);
    expect(urls).toContain(`${siteBaseUrl}/locations`);
  });

  it("includes a canonical entry for every location page", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    for (const location of locations) {
      expect(urls).toContain(`${siteBaseUrl}/locations/${location.slug}`);
    }
  });

  it("includes the services index and every service page", () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls).toContain(`${siteBaseUrl}/services`);
    for (const service of services) {
      expect(urls).toContain(`${siteBaseUrl}/services/${service.slug}`);
    }
  });

  it("includes the before and after gallery", () => {
    const urls = sitemap().map((entry) => entry.url);
    expect(urls).toContain(`${siteBaseUrl}/before-and-after`);
  });

  it("reports a stable lastModified instead of the build time", () => {
    for (const entry of sitemap()) {
      expect(entry.lastModified).toEqual(contentLastUpdated);
    }
  });

  it("has no duplicate urls", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(new Set(urls).size).toBe(urls.length);
  });
});
