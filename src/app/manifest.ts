import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Latten Lawncare",
    short_name: "Latten Lawncare",
    description:
      "Lawn mowing, edging, and leaf cleanup in Lorain County, Ohio.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#124f30",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
