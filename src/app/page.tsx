import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import MobileCallBar from "@/components/MobileCallBar";
import QuoteForm from "@/components/QuoteForm";
import {
  IconCalendar,
  IconChat,
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
import { business, defaultTextMessage, localBusinessJsonLd, smsLink } from "@/lib/business";
import { locations } from "@/lib/locations";
import { getService, services as serviceOffers } from "@/lib/services";

const leafCleanup = getService("leaf-cleanup")!;

const trustBadges = [
  { icon: IconShield, label: "Fully Insured" },
  { icon: IconCalendar, label: "Same-Week Scheduling" },
  { icon: IconMapPin, label: "Locally Owned in Lorain County" },
  { icon: IconSpark, label: "Free, No-Obligation Quotes" },
];

/** Plain facts about the offer, shown right under the hero so visitors can scan them. */
const quickFacts = [
  { value: "$40", label: "flat price per visit" },
  { value: "Front + back", label: "both yards, every time" },
  { value: "No contracts", label: "book once or every week" },
  { value: "Same week", label: "scheduling in most cases" },
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
    description: "Call, text, or send the quick quote form with your address, and James gets back to you fast.",
  },
  {
    title: "Get Scheduled",
    description: "We find a time that works for you, often within the same week you reach out.",
  },
  {
    title: "Enjoy Your Lawn",
    description: "Relax while we handle the leaves, mowing, edging, and cleanup. You only pay $40 a visit.",
  },
];

const pricingPlans = [
  {
    name: "Fall Leaf Cleanup",
    unit: "front + back yard",
    badge: "In season now",
    desc: "We do the raking so you don't have to.",
    href: "/services/leaf-cleanup",
    cta: "Book a Leaf Cleanup",
    trackingLabel: "Pricing Leaf Call",
    inclusions: [
      "Leaves blown out of beds, corners, and fence lines",
      "Front and back lawn raked clean",
      "Every leaf raked up and bagged",
      "Walkways and driveway blown off before we leave",
    ],
  },
  {
    name: "Lawn Mowing & Edging",
    unit: "front + back yard",
    badge: "Edging included",
    desc: "Everything you need for a consistently sharp lawn.",
    href: "/services/lawn-mowing",
    cta: "Book a Mow",
    trackingLabel: "Pricing Mow Call",
    inclusions: [
      "Full front and backyard mow",
      "Edging along sidewalks and driveways",
      "Grass clippings cleared from walkways and driveways",
      "Weekly, every-other-week, or one-time visits",
    ],
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
      "Call or text (216) 889-7822, use the free quote form on this page, or email hello@lattenlawncare.com. Quotes are always free.",
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
        "@type": "WebSite",
        "@id": `${business.url}/#website`,
        url: business.url,
        name: business.name,
        publisher: { "@id": `${business.url}/#business` },
        inLanguage: "en-US",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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

                <div className="hero__cta-group">
                  <TrackedLink
                    className="btn btn--primary btn--lg"
                    href={business.phoneHref}
                    trackingEvent="conversion_call_click"
                    trackingLabel="Hero Call"
                  >
                    <IconPhone />
                    Call (216) 889-7822
                  </TrackedLink>
                  <TrackedLink
                    className="btn btn--ghost btn--lg"
                    href={smsLink(defaultTextMessage)}
                    trackingEvent="conversion_text_click"
                    trackingLabel="Hero Text"
                  >
                    <IconChat />
                    Text for a Quote
                  </TrackedLink>
                </div>
                <p className="hero__note">
                  Leaf cleanup is <strong>$40</strong> for the front and back yard, blown, raked, and bagged.{" "}
                  <Link href="#quote">Or send the 30-second quote form.</Link>
                </p>
                <div className="hero__badges">
                  {trustBadges.map((badge) => (
                    <span className="chip" key={badge.label}>
                      <badge.icon />
                      {badge.label}
                    </span>
                  ))}
                </div>

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
            <ul className="fact-strip" aria-label="At a glance">
              {quickFacts.map((fact) => (
                <li className="fact-strip__item" key={fact.value}>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </li>
              ))}
            </ul>
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
                href={business.phoneHref}
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

          <section className="section reveal reveal--delay-1" id="services">
            <div className="section__heading">
              <p className="eyebrow">What We Offer</p>
              <h2>Simple, reliable lawn care done right</h2>
            </div>
            <div className="service-grid">
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
              <h2>Getting on the schedule takes minutes</h2>
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
            <div className="section__heading section__heading--center">
              <p className="eyebrow">Fair Pricing</p>
              <h2>Straightforward pricing, no surprises</h2>
              <p>
                Flat rates for small to medium properties in Lorain County.
                Larger lot or need extra detail work?{" "}
                <Link href="#quote">Ask for a free custom quote.</Link>
              </p>
            </div>
            <div className="pricing-grid">
              {pricingPlans.map((plan) => (
                <div className="pricing-card" key={plan.name}>
                  <span className="pricing-card__badge">{plan.badge}</span>
                  <h3 className="pricing-card__name">
                    <Link href={plan.href}>{plan.name}</Link>
                  </h3>
                  <div className="pricing-card__price">
                    <strong>$40</strong>
                    <span>{plan.unit}</span>
                  </div>
                  <p className="pricing-card__desc">{plan.desc}</p>
                  <ul className="checklist">
                    {plan.inclusions.map((item) => (
                      <li key={item}>
                        <IconCheck />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <TrackedLink
                    className="btn btn--primary btn--block"
                    href={business.phoneHref}
                    trackingEvent="conversion_call_click"
                    trackingLabel={plan.trackingLabel}
                  >
                    <IconPhone />
                    {plan.cta}
                  </TrackedLink>
                </div>
              ))}
            </div>
          </section>

          <section className="section section--highlight reveal reveal--delay-2" id="results">
            <div className="section__heading section__heading--center">
              <p className="eyebrow">The Difference</p>
              <h2>What a Latten Lawncare visit looks like</h2>
            </div>
            <div className="compare">
              <figure className="compare-panel">
                <span className="compare-panel__tag">Before</span>
                <Image
                  src="/lawn-before.svg"
                  alt="Illustration of an overgrown, patchy lawn before service"
                  width={1200}
                  height={800}
                />
              </figure>
              <figure className="compare-panel compare-panel--after">
                <span className="compare-panel__tag">After</span>
                <Image
                  src="/lawn-after.svg"
                  alt="Illustration of a freshly mowed and edged lawn after service"
                  width={1200}
                  height={800}
                />
              </figure>
            </div>
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
            <div className="contact-split">
              <div className="contact-box contact-box--left">
                <p className="eyebrow">Free, No-Obligation Quotes</p>
                <h2 id="quote-heading">Get your free quote</h2>
                <p className="contact-box__lead">
                  Tell James where you are and what you need. You&apos;ll hear back
                  quickly with a price and the next open day.
                </p>
                <div className="contact-box__links">
                  <TrackedLink
                    className="btn btn--accent"
                    href={business.phoneHref}
                    trackingEvent="conversion_call_click"
                    trackingLabel="Contact Call"
                  >
                    <IconPhone />
                    Call (216) 889-7822
                  </TrackedLink>
                  <TrackedLink
                    className="btn btn--outline"
                    href={`mailto:${business.email}`}
                    trackingEvent="conversion_email_click"
                    trackingLabel="Contact Email"
                  >
                    <IconMail />
                    hello@lattenlawncare.com
                  </TrackedLink>
                </div>
              </div>
              <div id="quote" className="contact-split__form">
                <QuoteForm />
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
