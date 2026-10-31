import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import MobileCallBar from "@/components/MobileCallBar";
import JsonLd from "@/components/JsonLd";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import ServicePricingCard from "@/components/ServicePricingCard";
import {
  IconCalendar,
  IconCheck,
  IconEdge,
  IconLeaf,
  IconMail,
  IconMapPin,
  IconMower,
  IconPhone,
  IconShield,
  IconSpark,
} from "@/components/icons";
import { localBusinessJsonLd, pageMetadata } from "@/lib/business";
import { galleryProjects } from "@/lib/gallery";
import { locations } from "@/lib/locations";
import { getService, services as serviceOffers } from "@/lib/services";

export const metadata: Metadata = pageMetadata({
  title: "Fall Leaf Cleanup in Lorain County, OH | We Blow, Rake & Bag | Latten Lawncare",
  description:
    "Fall leaf cleanup in Lorain County, OH: we blow, rake, and bag your leaves for $40, or get leaves cleared plus a mow and edge with Leaf & Mow for $70. Call (216) 889-7822.",
  path: "/",
  keywords: [
    "leaf cleanup Lorain County",
    "fall leaf cleanup",
    "leaf removal near me",
    "leaf raking service",
    "leaf blowing service",
    "leaf bagging",
    "leaf cleanup and mowing",
    "fall yard cleanup",
    "leaf cleanup Elyria",
    "leaf cleanup Avon",
    "leaf cleanup North Ridgeville",
    "leaf cleanup Lorain",
    "Lorain County lawn care",
    "lawn mowing Lorain County",
    "lawn mowing Elyria",
    "edging service",
    "affordable lawn mowing",
    "Latten Lawncare",
  ],
});

const leafCleanup = getService("leaf-cleanup")!;
const leafAndMow = getService("leaf-and-mow")!;
const pricingOrder = ["leaf-and-mow", "leaf-cleanup", "lawn-mowing"].map((slug) => getService(slug)!);

const trustBadges = [
  { icon: IconShield, label: "Fully Insured" },
  { icon: IconCalendar, label: "Same-Week Scheduling" },
  { icon: IconMapPin, label: "Locally Owned in Lorain County" },
  { icon: IconSpark, label: "Free, No-Obligation Quotes" },
];

const services = [
  {
    icon: IconLeaf,
    title: "Leaf Cleanup",
    href: "/services/leaf-cleanup",
    description:
      "We blow, rake, and bag the leaves in your front and back yard so your grass can breathe heading into winter. $40 for small to medium lawns.",
  },
  {
    icon: IconLeaf,
    title: "Leaf & Mow",
    href: "/services/leaf-and-mow",
    description:
      "The complete fall visit: full leaf cleanup, then a mow and edge in the same trip. $70 for small to medium lawns.",
  },
  {
    icon: IconMower,
    title: "Lawn Mowing",
    href: "/services/lawn-mowing",
    description:
      "Precision mowing for small to medium lawns with clean patterns and even height for a polished look.",
  },
  {
    icon: IconEdge,
    title: "Edging",
    href: "/services/lawn-mowing",
    description:
      "Sharp, defined lines along sidewalks, driveways, and beds to frame your lawn and boost curb appeal.",
  },
];

const processSteps = [
  {
    title: "Reach Out",
    description: "Call or email with your address and lawn size, and we will get back to you fast.",
  },
  {
    title: "Get Scheduled",
    description: "We find a time that works for you, often within the same week you reach out.",
  },
  {
    title: "Enjoy Your Lawn",
    description: "Relax while we handle the leaves, mowing, edging, and detail work.",
  },
];

const faqItems = [
  {
    question: "What services does Latten Lawncare offer?",
    answer:
      "We provide fall leaf cleanup (we blow, rake, and bag your leaves) and lawn mowing with edging included, for small to medium sized lawns.",
  },
  {
    question: "How much is lawn mowing?",
    answer:
      "Front and backyard mowing starts at $40, with dependable local service across Lorain County.",
  },
  {
    question: "How much is leaf cleanup?",
    answer:
      "Leaf cleanup is $40 for the front and back yard of a small to medium lawn. That includes blowing, raking, and bagging all the leaves.",
  },
  {
    question: "What is Leaf & Mow?",
    answer:
      "Leaf & Mow is our $70 complete fall visit for small to medium lawns. We blow, rake, and bag all the leaves, then mow and edge the front and back yard in the same trip.",
  },
  {
    question: "Do you bag the leaves?",
    answer:
      "Yes. We blow the leaves out of beds and corners, rake the lawn clean, and bag every leaf so the bags are ready for yard waste pickup.",
  },
  {
    question: "What areas do you serve?",
    answer:
      `We serve Lorain County, including ${locations.map((location) => location.city).join(", ").replace(/, ([^,]*)$/, ", and $1")}.`,
  },
  {
    question: "How do I request service?",
    answer:
      "You can call (216) 889-7822 or email hello@lattenlawncare.com for scheduling and quotes.",
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...localBusinessJsonLd(
          "Local lawn care company offering fall leaf cleanup (leaf blowing, raking, and bagging) and lawn mowing with edging for small to medium sized lawns in Lorain County, Ohio.",
        ),
        makesOffer: serviceOffers.map((service) => ({
          "@type": "Offer",
          price: String(service.price),
          priceCurrency: "USD",
          itemOffered: { "@type": "Service", name: service.name },
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <div className="site-shell">
        <SiteHeader />
        <JsonLd data={structuredData} />
        <header className="hero">
          <div className="hero__overlay" />
          <div className="hero__content reveal">
            <div className="hero__grid">
              <div className="hero__copy">
                <p className="eyebrow">Fall Leaf Cleanup in Lorain County</p>
                <h1>Fall leaf cleanup, done for you. We blow, rake, and bag.</h1>
                <p className="hero__lead">
                  Latten Lawncare is a local, owner-operated company. This fall
                  we clear the leaves from your front and back yard, bag them
                  up, and leave your lawn clean for winter. We mow and edge
                  small to medium yards too, with no long contracts and no
                  runaround.
                </p>

                <div className="hero__badges">
                  {trustBadges.map((badge) => (
                    <span className="chip" key={badge.label}>
                      <badge.icon />
                      {badge.label}
                    </span>
                  ))}
                </div>

                <div className="hero__cta-group">
                  <TrackedLink
                    className="btn btn--primary"
                    href="tel:+12168897822"
                    trackingEvent="conversion_call_click"
                    trackingLabel="Hero Call"
                  >
                    <IconPhone />
                    Call (216) 889-7822
                  </TrackedLink>
                  <TrackedLink
                    className="btn btn--ghost"
                    href="mailto:hello@lattenlawncare.com"
                    trackingEvent="conversion_email_click"
                    trackingLabel="Hero Email"
                  >
                    <IconMail />
                    Email for a Quote
                  </TrackedLink>
                </div>
                <p className="hero__note">
                  Leaf cleanup is <strong>$40</strong> for the front and back yard, blown, raked, and bagged.
                  Want it mowed too? <Link href="/services/leaf-and-mow">Leaf &amp; Mow is <strong>$70</strong></Link>.
                </p>
              </div>

              <figure className="hero__photo-wrap">
                <div className="hero__photo-frame">
                  <Image
                    src="/james-latten-headshot.jpg"
                    alt="James Latten, owner of Latten Lawncare"
                    width={620}
                    height={760}
                    className="hero__photo"
                    preload
                  />
                </div>
                <div className="hero__floating-card">
                  <IconSpark />
                  <span>
                    <strong>Owner-operated</strong>
                    <span>James handles every job personally</span>
                  </span>
                </div>
                <figcaption className="hero__photo-caption">
                  James Latten, owner and operator
                </figcaption>
              </figure>
            </div>
          </div>
        </header>

        <main id="main-content">
          <section className="section section--flush reveal reveal--delay-1">
            <div className="trust-strip">
              {trustBadges.map((badge) => (
                <span className="chip" key={`strip-${badge.label}`}>
                  <badge.icon />
                  {badge.label}
                </span>
              ))}
            </div>
          </section>

          <section className="section section--highlight reveal reveal--delay-1" id="leaf-cleanup">
            <div className="section__heading section__heading--center">
              <p className="eyebrow">Fall Leaf Cleanup</p>
              <h2>We blow, rake, and bag your leaves</h2>
              <p>
                One flat price of <strong>$40</strong>{" "}covers the front and back yard of a small
                to medium lawn. You don&apos;t lift a rake or fill a single bag.
              </p>
            </div>
            <div className="process-grid">
              {leafCleanup.steps?.map((step, index) => (
                <div className="process-step" key={step.title}>
                  <span className="process-step__index">{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
            <div className="hero__cta-group">
              <TrackedLink
                className="btn btn--primary"
                href="tel:+12168897822"
                trackingEvent="conversion_call_click"
                trackingLabel="Leaf Cleanup Call"
              >
                <IconPhone />
                Book a leaf cleanup
              </TrackedLink>
              <Link className="btn btn--ghost" href="/services/leaf-cleanup">
                More about leaf cleanup
              </Link>
            </div>
          </section>

          <section className="section section--leaf reveal reveal--delay-1" id="leaf-and-mow">
            <div className="pricing">
              <div>
                <p className="eyebrow">{leafAndMow.badge}</p>
                <h2>{`Leaves gone and lawn mowed, one visit, $${leafAndMow.price}`}</h2>
                <p className="hero__lead">{leafAndMow.summary}</p>
                <p>{leafAndMow.bestFor}</p>
                <p className="section__linkline">
                  <Link href="/services/leaf-and-mow">How Leaf &amp; Mow works</Link>
                </p>
              </div>
              <ServicePricingCard
                service={leafAndMow}
                trackingLabel="Homepage Leaf & Mow Call"
                showDetailsLink={false}
              />
            </div>
          </section>

          <section className="section reveal reveal--delay-1" id="services">
            <div className="section__heading">
              <p className="eyebrow">What We Offer</p>
              <h2>Simple, reliable lawn care done right</h2>
            </div>
            <div className="service-grid service-grid--four">
              {services.map((service) => (
                <article className="card card--interactive" key={service.title}>
                  <span className="card__icon">
                    <service.icon />
                  </span>
                  <h3>
                    <Link href={service.href}>{service.title}</Link>
                  </h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section section--highlight reveal reveal--delay-2" id="process">
            <div className="section__heading section__heading--center">
              <p className="eyebrow">How It Works</p>
              <h2>Booking your first cut takes minutes</h2>
            </div>
            <div className="process-grid">
              {processSteps.map((step, index) => (
                <div className="process-step" key={step.title}>
                  <span className="process-step__index">{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section reveal reveal--delay-2" id="pricing">
            <div className="section__heading">
              <p className="eyebrow">Fair Pricing</p>
              <h2>Straightforward pricing, no surprises</h2>
              <p>
                Flat prices for the front and back yard of small to medium
                lawns in Lorain County. Larger lot or need extra detail work?{" "}
                <Link className="inline-link" href="/#contact">
                  Reach out for a custom quote.
                </Link>
              </p>
            </div>
            <div className="pricing-grid pricing-grid--three">
              {pricingOrder.map((service) => (
                <ServicePricingCard
                  key={service.slug}
                  service={service}
                  trackingLabel={`Pricing ${service.shortName} Call`}
                />
              ))}
            </div>
          </section>

          <section className="section section--highlight reveal reveal--delay-2" id="results">
            <div className="section__heading section__heading--center">
              <p className="eyebrow">Before &amp; After</p>
              <h2>See the Latten Lawncare difference</h2>
              <p>Drag the slider on each photo to compare the yard before and after.</p>
            </div>
            <BeforeAfterGallery projects={galleryProjects.slice(0, 2)} />
            <p className="section__linkline section__linkline--center">
              <Link href="/before-and-after">View all before and after photos</Link>
            </p>
          </section>

          <section className="section reveal reveal--delay-3" id="area">
            <div className="split">
              <div>
                <p className="eyebrow">Service Area</p>
                <h2>Proudly Serving Lorain County</h2>
                <p>
                  Latten Lawncare is local, responsive, and focused on helping
                  neighbors maintain lawns they can be proud of all season long.
                </p>
                <p className="section__linkline">
                  <Link href="/locations">Browse all city pages</Link>
                </p>
              </div>
              <div className="card card--accent">
                <h3>Why homeowners choose us</h3>
                <ul className="checklist checklist--spaced">
                  <li>
                    <IconCheck />
                    <span>Friendly communication and easy scheduling</span>
                  </li>
                  <li>
                    <IconCheck />
                    <span>Specialized in small to medium lots</span>
                  </li>
                  <li>
                    <IconCheck />
                    <span>Consistent quality with every visit</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="location-link-grid">
              {locations.map((location) => (
                <TrackedLink
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="location-link"
                  trackingEvent="location_page_click"
                  trackingLabel={location.city}
                >
                  <IconMapPin />
                  {location.city}
                </TrackedLink>
              ))}
            </div>
          </section>

          <section className="section reveal reveal--delay-3" id="faq">
            <div className="section__heading">
              <p className="eyebrow">Frequently Asked Questions</p>
              <h2>Quick answers before you book</h2>
            </div>
            <div className="faq-list">
              {faqItems.map((item) => (
                <details key={item.question} className="faq-item">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="section section--dark reveal reveal--delay-3" id="contact">
            <div className="contact-box">
              <p className="eyebrow">Let&apos;s Get Your Lawn Looking Great</p>
              <h2>Request service today</h2>
              <p className="contact-box__lead">
                Call or email Latten Lawncare for quick scheduling and a
                welcoming, no-hassle experience.
              </p>
              <div className="contact-box__links">
                <TrackedLink
                  className="btn btn--accent"
                  href="tel:+12168897822"
                  trackingEvent="conversion_call_click"
                  trackingLabel="Footer Call"
                >
                  <IconPhone />
                  (216) 889-7822
                </TrackedLink>
                <TrackedLink
                  className="btn btn--outline"
                  href="mailto:hello@lattenlawncare.com"
                  trackingEvent="conversion_email_click"
                  trackingLabel="Footer Email"
                >
                  <IconMail />
                  hello@lattenlawncare.com
                </TrackedLink>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
        <MobileCallBar />
      </div>
    </>
  );
}
