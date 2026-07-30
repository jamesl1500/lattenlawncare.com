export type LocationInfo = {
  slug: string;
  city: string;
  headline: string;
  summary: string;
  neighborhoods: string[];
};

export const locations: LocationInfo[] = [
  {
    slug: "elyria",
    city: "Elyria",
    headline: "Lawn Care in Elyria, OH",
    summary:
      "Consistent mowing, edging, and weed control for small to medium lawns across Elyria.",
    neighborhoods: ["Midview", "West Ridge", "North Elyria"],
  },
  {
    slug: "lorain",
    city: "Lorain",
    headline: "Lawn Care in Lorain, OH",
    summary:
      "Dependable lawn service for Lorain homeowners who want a clean cut and sharp curb appeal.",
    neighborhoods: ["South Lorain", "Sheffield border", "Harbor area"],
  },
  {
    slug: "avon",
    city: "Avon",
    headline: "Lawn Care in Avon, OH",
    summary:
      "Flat-rate mowing and detail-focused edging for busy Avon households.",
    neighborhoods: ["French Creek", "Avon Center", "Mills Road area"],
  },
  {
    slug: "north-ridgeville",
    city: "North Ridgeville",
    headline: "Lawn Care in North Ridgeville, OH",
    summary:
      "Reliable weekly and bi-weekly lawn cutting with friendly communication and fast scheduling.",
    neighborhoods: ["Center Ridge", "Lear Nagle area", "Mills Creek"],
  },
  {
    slug: "amherst",
    city: "Amherst",
    headline: "Lawn Care in Amherst, OH",
    summary:
      "Affordable lawn maintenance for smaller and medium-sized properties in Amherst.",
    neighborhoods: ["Downtown Amherst", "Milan Avenue area", "Leavitt Road corridor"],
  },
  {
    slug: "avon-lake",
    city: "Avon Lake",
    headline: "Lawn Care in Avon Lake, OH",
    summary:
      "Professional lawn care services for Avon Lake residents, focusing on quality and reliability.",
    neighborhoods: ["Downtown Avon Lake", "Lake Road area", "Miller Road corridor"],
  },
  {
    slug: "sheffield-lake",
    city: "Sheffield Lake",
    headline: "Lawn Care in Sheffield Lake, OH",
    summary:
      "Comprehensive lawn care services for Sheffield Lake residents, ensuring a well-maintained and attractive yard.",
    neighborhoods: ["Downtown Sheffield Lake", "Lakefront area", "Industrial corridor"],
  },
  {
    slug: "sheffield-village",
    city: "Sheffield Village",
    headline: "Lawn Care in Sheffield Village, OH",
    summary:
      "Expert lawn care services for Sheffield Village residents, providing consistent and high-quality maintenance.",
    neighborhoods: ["Downtown Sheffield Village", "Lakefront area", "Residential corridor"],
  }
];

export const siteBaseUrl = "https://www.lattenlawncare.com";
