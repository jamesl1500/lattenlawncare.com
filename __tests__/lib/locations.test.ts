import { describe, expect, it } from "vitest";
import { locations, siteBaseUrl } from "@/lib/locations";

describe("locations data", () => {
  it("has at least one location", () => {
    expect(locations.length).toBeGreaterThan(0);
  });

  it("has unique slugs", () => {
    const slugs = locations.map((location) => location.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("uses url-safe, lowercase, hyphenated slugs", () => {
    for (const location of locations) {
      expect(location.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  it("has required non-empty fields for every location", () => {
    for (const location of locations) {
      expect(location.city.trim().length).toBeGreaterThan(0);
      expect(location.headline.trim().length).toBeGreaterThan(0);
      expect(location.summary.trim().length).toBeGreaterThan(0);
      expect(location.neighborhoods.length).toBeGreaterThan(0);
      for (const neighborhood of location.neighborhoods) {
        expect(neighborhood.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it("includes the city name in its headline", () => {
    for (const location of locations) {
      expect(location.headline).toContain(location.city);
    }
  });

  it("exposes a well-formed absolute site base url", () => {
    expect(siteBaseUrl).toMatch(/^https:\/\//);
    expect(siteBaseUrl.endsWith("/")).toBe(false);
  });
});
