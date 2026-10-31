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
  /** Optional step-by-step "how we do it" list shown on the service page. */
  steps?: { title: string; description: string }[];
  /** Search phrases people use for this service; feeds meta keywords and schema alternateName. */
  keywords?: string[];
  /** Slugs of other services to cross-link from this service's page. */
  related?: string[];
  /** Short label shown on pricing cards, e.g. "Fall Special". */
  badge?: string;
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
    related: ["leaf-and-mow", "leaf-cleanup"],
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
    name: "Fall Leaf Cleanup",
    shortName: "Leaf Cleanup",
    price: 40,
    priceNote: "front + back yard, blown, raked & bagged",
    summary:
      "We blow, rake, and bag the leaves in your front and back yard, so your lawn is clean and ready for winter.",
    intro:
      "Leaves left on the lawn block sunlight and trap moisture, which can leave dead patches by spring. Our fall leaf cleanup handles the whole job: we blow the leaves out of beds, corners, and along fences, rake the lawn clean, and bag every leaf. It is a flat $40 for the front and back yard of a small to medium lawn.",
    includes: [
      "Leaves blown out of beds, corners, fence lines, and walkways",
      "Front and back lawn raked clean",
      "All leaves bagged and set out, ready for yard waste pickup",
      "Driveways, sidewalks, and patios blown clear",
      "One-time cleanup or repeat visits through the fall",
    ],
    bestFor:
      "Homeowners with trees who want the leaves gone before the snow comes, without spending a weekend raking and bagging.",
    related: ["leaf-and-mow", "lawn-mowing"],
    metaTitle: "Fall Leaf Cleanup in Lorain County, OH | Blow, Rake & Bag | $40",
    metaDescription:
      "Fall leaf cleanup in Lorain County: we blow, rake, and bag your leaves for $40 (front and back, small to medium lawns). Elyria, Lorain, Avon, North Ridgeville and more. Call (216) 889-7822.",
    keywords: [
      "leaf cleanup",
      "fall leaf cleanup",
      "leaf removal",
      "leaf blowing",
      "leaf raking",
      "leaf bagging",
      "yard cleanup",
    ],
    steps: [
      {
        title: "Blow",
        description:
          "We blow leaves out of flower beds, corners, fence lines, and off the driveway and walkways.",
      },
      {
        title: "Rake",
        description: "We rake the front and back lawn clean so the grass gets light and air before winter.",
      },
      {
        title: "Bag",
        description: "Every leaf goes into bags, set out and ready for yard waste pickup. Nothing left behind.",
      },
    ],
    faqs: [
      {
        question: "How much does leaf cleanup cost?",
        answer:
          "Leaf cleanup is $40 for the front and back yard of a small to medium lawn, and that includes blowing, raking, and bagging. Larger yards or heavy leaf cover get a free custom quote.",
      },
      {
        question: "Do you bag the leaves?",
        answer:
          "Yes. We blow and rake the leaves, then bag all of them and set the bags out, ready for yard waste pickup.",
      },
      {
        question: "Do you use a leaf blower or rake by hand?",
        answer:
          "Both. A blower clears leaves out of beds, corners, and hard surfaces quickly, and raking gets the lawn itself fully clean.",
      },
      {
        question: "When should I schedule a leaf cleanup?",
        answer:
          "Most Lorain County yards need a cleanup from late October through November, once most of the leaves are down. Some homeowners book a second visit after the last leaves fall.",
      },
    ],
  },
  {
    slug: "leaf-and-mow",
    name: "Leaf Cleanup & Mow",
    shortName: "Leaf & Mow",
    price: 70,
    priceNote: "full leaf cleanup + mow and edge, one visit",
    badge: "Fall Special",
    summary:
      "The complete fall visit: we blow, rake, and bag every leaf, then mow and edge the lawn so your yard is finished for winter.",
    intro:
      "Leaf & Mow is our complete fall visit. We do the full leaf cleanup first, blowing leaves out of beds and corners, raking the lawn clean, and bagging every leaf. Then we mow and edge the front and back yard in the same trip, so the grass goes into winter short, even, and clear. It is $70 for a small to medium lawn.",
    includes: [
      "Full fall leaf cleanup: leaves blown, raked, and bagged",
      "Bags set out, ready for yard waste pickup",
      "Driveways, sidewalks, and patios blown clear",
      "Front and back yard mowed after the leaves are gone",
      "Edging along sidewalks and driveways",
      "Everything done in one visit",
    ],
    bestFor:
      "Homeowners who want the whole yard done before winter, leaves gone and grass cut, in a single appointment.",
    metaTitle: "Leaf Cleanup & Mow in Lorain County, OH | $70 Fall Special",
    metaDescription:
      "Leaf & Mow for $70: we blow, rake, and bag your leaves, then mow and edge your lawn in the same visit. Small to medium lawns across Lorain County. Call (216) 889-7822.",
    keywords: [
      "leaf cleanup and mowing",
      "fall cleanup",
      "fall yard cleanup",
      "leaf removal and lawn mowing",
      "last mow of the season",
      "fall lawn cleanup",
    ],
    related: ["leaf-cleanup", "lawn-mowing"],
    steps: [
      {
        title: "Clear",
        description:
          "We blow leaves out of beds, corners, and fence lines, then rake the front and back lawn clean.",
      },
      {
        title: "Bag",
        description: "Every leaf is bagged and set out, ready for yard waste pickup.",
      },
      {
        title: "Mow",
        description:
          "With the leaves gone, we mow and edge the lawn so it heads into winter short, even, and sharp.",
      },
    ],
    faqs: [
      {
        question: "How much is Leaf & Mow?",
        answer:
          "Leaf & Mow is $70 for the front and back yard of a small to medium lawn. Larger yards or very heavy leaf cover get a free custom quote.",
      },
      {
        question: "What is the difference between leaf cleanup and Leaf & Mow?",
        answer:
          "Leaf cleanup ($40) clears and bags the leaves. Leaf & Mow ($70) includes that full leaf cleanup and then mows and edges the lawn in the same visit, so your whole yard is finished for winter in one appointment.",
      },
      {
        question: "Why mow after the leaves are cleared?",
        answer:
          "Cutting the grass a little shorter for the last mow of the season helps it stand up to snow and keeps it from matting down, which lowers the chance of snow mold in spring. Mowing after the cleanup also picks up any small leaf bits left behind.",
      },
      {
        question: "When should I book Leaf & Mow?",
        answer:
          "Book once most of your leaves are down, usually early to late November in Lorain County. That way the cleanup and the final mow happen together, right before winter.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
