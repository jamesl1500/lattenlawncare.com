import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { locations, siteBaseUrl } from "@/lib/locations";

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

  it("has no duplicate urls", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(new Set(urls).size).toBe(urls.length);
  });
});
