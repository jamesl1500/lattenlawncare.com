export type ServiceInfo = {
  slug: string;
  name: string;
  /** Shorter label for cards and lists. */
  shortName: string;
  price: number;
  priceNote: string;
  summary: string;
  intro: string;
  includes: string[];
  bestFor: string;
  metaTitle: string;
  metaDescription: string;
  faqs: { question: string; answer: string }[];
};

export const services: ServiceInfo[] = [
  {
    slug: "lawn-mowing",
    name: "Lawn Mowing & Edging",
    shortName: "Lawn Mowing",
    price: 40,
    priceNote: "front + back yard, edging included",
    summary:
      "An even cut for the front and back yard, with sharp edges along sidewalks and driveways on every visit.",
    intro:
      "Every mow covers your front and back yard and includes edging, so your lawn looks finished, not just cut. Pricing is a flat $40 for small to medium lawns across Lorain County.",
    includes: [
      "Full front and back yard mow",
      "Edging along sidewalks and driveways",
      "Clippings cleared from walkways and drives",
      "Weekly, every-other-week, or one-time visits",
    ],
    bestFor: "Homeowners with small to medium yards who want a sharp lawn without the weekend chore.",
    metaTitle: "Lawn Mowing & Edging in Lorain County, OH | $40 | Latten Lawncare",
    metaDescription:
      "Lawn mowing with edging included for $40 (front and back, small to medium lawns). Serving Elyria, Lorain, Avon, North Ridgeville and all of Lorain County. Call (216) 889-7822.",
    faqs: [
      {
        question: "How much does lawn mowing cost?",
        answer:
          "Lawn mowing is $40 for the front and back yard of a small to medium lawn, and edging is included. Larger yards get a free custom quote.",
      },
      {
        question: "Is edging included with mowing?",
        answer: "Yes. Every mow includes edging along sidewalks and driveways at no extra charge.",
      },
      {
        question: "How often can you mow?",
        answer: "You can book weekly, every other week, or a one-time cut.",
      },
    ],
  },
  {
    slug: "leaf-cleanup",
    name: "Leaf Cleanup",
    shortName: "Leaf Cleanup",
    price: 40,
    priceNote: "front + back yard",
    summary:
      "Fall leaves cleared from the front and back yard so your grass can breathe heading into winter.",
    intro:
      "Leaves left on the lawn block sunlight and trap moisture, which can leave dead patches by spring. A leaf cleanup clears the front and back yard for a flat $40 on small to medium lawns.",
    includes: [
      "Leaves cleared from the front and back yard",
      "Leaves cleared from walkways and driveways",
      "One-time visit or repeat visits through the fall",
    ],
    bestFor: "Homeowners with trees who want the yard clean before the snow comes.",
    metaTitle: "Leaf Cleanup in Lorain County, OH | $40 | Latten Lawncare",
    metaDescription:
      "Fall leaf cleanup for $40 (front and back, small to medium lawns). Serving Elyria, Lorain, Avon, North Ridgeville and all of Lorain County. Call (216) 889-7822.",
    faqs: [
      {
        question: "How much does leaf cleanup cost?",
        answer:
          "Leaf cleanup is $40 for the front and back yard of a small to medium lawn. Larger yards or heavy leaf cover get a free custom quote.",
      },
      {
        question: "When should I schedule a leaf cleanup?",
        answer:
          "Most Lorain County yards need a cleanup from late October through November, once most of the leaves are down. Some homeowners book a second visit after the last leaves fall.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
