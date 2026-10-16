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
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
