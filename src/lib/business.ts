import type { Metadata } from "next";
import { locations, siteBaseUrl } from "@/lib/locations";

export const business = {
  name: "Latten Lawncare",
  phoneDisplay: "(216) 889-7822",
  phoneHref: "tel:+12168897822",
  phoneSchema: "+1-216-889-7822",
  email: "hello@lattenlawncare.com",
  emailHref: "mailto:hello@lattenlawncare.com",
  region: "Lorain County",
  state: "OH",
  url: siteBaseUrl,
  logo: `${siteBaseUrl}/brand/logo-mark.png`,
  image: `${siteBaseUrl}/opengraph-image`,
  priceRange: "$40-$90",
} as const;

/** Stable id so other JSON-LD nodes (services, pages) can point at the business. */
export const businessId = `${siteBaseUrl}/#business`;

export const areaServed = [
  ...locations.map((location) => ({
    "@type": "City",
    name: `${location.city}, OH`,
  })),
  { "@type": "AdministrativeArea", name: "Lorain County, OH" },
];

export function localBusinessJsonLd(description: string) {
  return {
    "@type": "LocalBusiness",
    "@id": businessId,
    name: business.name,
    url: business.url,
    logo: business.logo,
    image: business.image,
    telephone: business.phoneSchema,
    email: business.email,
    priceRange: business.priceRange,
    description,
    areaServed,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteBaseUrl}${item.path}`,
    })),
  };
}

// Bump this when page content changes so the sitemap reports an honest lastmod.
export const contentLastUpdated = new Date("2026-10-31");

/** JSON-LD for a <script> tag, with "<" escaped so content can't close the tag. */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

// openGraph and twitter are shallow-merged by Next, so every page needs the full set,
// including the image, or it silently loses them.
export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const image = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "Latten Lawncare fall leaf cleanup in Lorain County",
  };

  return {
    title,
    description,
    ...(keywords && { keywords }),
    alternates: {
      canonical: path,
    },
    openGraph: {
      url: `${siteBaseUrl}${path === "/" ? "" : path}`,
      siteName: business.name,
      title,
      description,
      type: "website",
      locale: "en_US",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}
