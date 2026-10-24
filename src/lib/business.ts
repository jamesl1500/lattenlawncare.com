import { locations, siteBaseUrl } from "@/lib/locations";

export const business = {
  name: "Latten Lawncare",
  phoneDisplay: "(216) 889-7822",
  phoneHref: "tel:+12168897822",
  phoneSchema: "+1-216-889-7822",
  smsHref: "sms:+12168897822",
  email: "hello@lattenlawncare.com",
  region: "Lorain County",
  state: "OH",
  url: siteBaseUrl,
  logo: `${siteBaseUrl}/brand/logo-mark.png`,
  image: `${siteBaseUrl}/opengraph-image`,
  priceRange: "$40",
  owner: "James Latten",
} as const;

/** Builds an sms: link with a pre-filled message so customers only have to hit send. */
export function smsLink(body: string) {
  return `${business.smsHref}?body=${encodeURIComponent(body)}`;
}

export const defaultTextMessage =
  "Hi James, I'd like a quote from Latten Lawncare. My address is: ";

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
    currenciesAccepted: "USD",
    description,
    // Service-area business: no street address is published, only the region.
    address: {
      "@type": "PostalAddress",
      addressRegion: business.state,
      addressCountry: "US",
    },
    founder: { "@type": "Person", name: business.owner },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: business.phoneSchema,
      email: business.email,
      areaServed: "US-OH",
      availableLanguage: "English",
    },
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
