// To add a real project: drop the photos in /public/gallery, add an entry below, and
// put it first so it leads on the homepage. Use the same width/height for both shots
// (landscape 3:2 works best) and write alt text that names the service and city.
// Remove the `illustration` flag once an entry uses real photos.

import { getService } from "@/lib/services";

/** Slug of the service shown, from src/lib/services.ts. */
export type GalleryService = "leaf-cleanup" | "leaf-and-mow" | "lawn-mowing";

export type GalleryPhoto = {
  src: string;
  alt: string;
};

export type GalleryProject = {
  slug: string;
  title: string;
  service: GalleryService;
  city: string;
  description: string;
  before: GalleryPhoto;
  after: GalleryPhoto;
  width: number;
  height: number;
  illustration?: boolean;
};

export const galleryProjects: GalleryProject[] = [
  {
    slug: "fall-leaf-cleanup",
    title: "Fall leaf cleanup and mow",
    service: "leaf-and-mow",
    city: "Lorain County",
    description:
      "A front yard buried under fallen leaves, cleared from lawn, beds, and walkway, then mowed for a clean finish.",
    before: {
      src: "/gallery/leaf-cleanup-before.svg",
      alt: "Front lawn in Lorain County covered in fallen autumn leaves before a Latten Lawncare leaf cleanup",
    },
    after: {
      src: "/gallery/leaf-cleanup-after.svg",
      alt: "Same front lawn after fall leaf cleanup and mowing by Latten Lawncare, with leaves removed",
    },
    width: 1200,
    height: 800,
    illustration: true,
  },
  {
    slug: "mow-and-edge",
    title: "Overgrown lawn mow and edge",
    service: "lawn-mowing",
    city: "Lorain County",
    description:
      "An overgrown, patchy yard brought back to an even height with crisp edges along the sidewalk.",
    before: {
      src: "/gallery/mow-before.svg",
      alt: "Overgrown, patchy lawn before mowing and edging by Latten Lawncare",
    },
    after: {
      src: "/gallery/mow-after.svg",
      alt: "Freshly mowed and edged lawn with striped grass after Latten Lawncare service",
    },
    width: 1200,
    height: 800,
    illustration: true,
  },
];

export function projectsForService(...services: string[]) {
  return galleryProjects.filter((project) => services.includes(project.service));
}

export function serviceLabel(service: GalleryService) {
  return getService(service)?.shortName ?? service;
}
