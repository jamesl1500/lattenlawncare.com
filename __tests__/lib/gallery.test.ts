import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { galleryProjects, projectsForService, serviceLabel } from "@/lib/gallery";
import { getService } from "@/lib/services";

describe("gallery data", () => {
  it("has unique slugs", () => {
    const slugs = galleryProjects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("leads with a leaf project", () => {
    expect(galleryProjects[0].service).toMatch(/^leaf-/);
  });

  it("links every project to a real service", () => {
    for (const project of galleryProjects) {
      expect(getService(project.service)).toBeDefined();
      expect(serviceLabel(project.service)).toBe(getService(project.service)!.shortName);
    }
  });

  it("points every photo at a file that exists in /public", () => {
    for (const project of galleryProjects) {
      for (const photo of [project.before, project.after]) {
        expect(existsSync(join(process.cwd(), "public", photo.src))).toBe(true);
      }
    }
  });

  it("gives every photo distinct, descriptive alt text", () => {
    for (const project of galleryProjects) {
      expect(project.before.alt.length).toBeGreaterThan(20);
      expect(project.after.alt.length).toBeGreaterThan(20);
      expect(project.before.alt).not.toBe(project.after.alt);
    }
  });

  it("filters projects by service slug", () => {
    for (const project of projectsForService("leaf-and-mow")) {
      expect(project.service).toBe("leaf-and-mow");
    }
    expect(projectsForService("not-a-service")).toEqual([]);
  });
});
