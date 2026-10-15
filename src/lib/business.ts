import { locations, siteBaseUrl } from "@/lib/locations";

export const business = {
  name: "Latten Lawncare",
  phoneDisplay: "(216) 889-7822",
  phoneHref: "tel:+12168897822",
  phoneSchema: "+1-216-889-7822",
  email: "hello@lattenlawncare.com",
  region: "Lorain County",
  state: "OH",
  url: siteBaseUrl,
  logo: `${siteBaseUrl}/brand/logo-mark.png`,
  image: `${siteBaseUrl}/opengraph-image`,
  priceRange: "$40",
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
