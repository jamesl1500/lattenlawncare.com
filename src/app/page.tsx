import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import MobileCallBar from "@/components/MobileCallBar";
import {
  IconCalendar,
  IconCheck,
  IconEdge,
  IconMail,
  IconMapPin,
  IconMower,
  IconPhone,
  IconQuote,
  IconShield,
  IconSpark,
} from "@/components/icons";
import { locations } from "@/lib/locations";

const trustBadges = [
  { icon: IconShield, label: "Fully Insured" },
  { icon: IconCalendar, label: "Same-Week Scheduling" },
  { icon: IconMapPin, label: "Locally Owned in Lorain County" },
  { icon: IconSpark, label: "Free, No-Obligation Quotes" },
];

const services = [
  {
    icon: IconMower,
    title: "Lawn Cutting",
    description:
      "Precision mowing for small to medium lawns with clean patterns and even height for a polished look.",
  },
  {
    icon: IconEdge,
    title: "Edging",
    description:
      "Sharp, defined lines along sidewalks, driveways, and beds to frame your lawn and boost curb appeal.",
  },
  {
    icon: IconShield,
    title: "Weed Control",
    description:
      "Targeted weed management to help your grass thrive and keep your yard looking neat through the season.",
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
    description: "Relax while we handle the mowing, edging, and detail work every visit.",
  },
];

const pricingInclusions = [
  "Full front and backyard mow",
  "Careful attention to detail around edges, beds, and obstacles",
  "Grass clippings cleared from walkways and driveways",
  "Consistent local service you can count on, visit after visit",
];

const testimonials = [
  {
    quote:
      "Fast response, clean cut, and the edging made the whole front yard look brand new.",
    name: "Homeowner",
    location: "Elyria, OH",
  },
  {
    quote:
      "Exactly what I needed for a small lawn. Great communication and fair pricing.",
    name: "Homeowner",
    location: "Lorain, OH",
  },
  {
    quote:
      "Consistent every visit. Yard always looks sharp when James is done.",
    name: "Homeowner",
    location: "North Ridgeville, OH",
  },
];

const faqItems = [
  {
    question: "What services does Latten Lawncare offer?",
    answer:
      "We provide lawn cutting, edging, and weed control focused on small to medium sized lawns.",
  },
  {
    question: "How much is lawn mowing?",
    answer:
      "Front and backyard mowing starts at $40, with dependable local service across Lorain County.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Lorain County, including Elyria, Lorain, Avon, North Ridgeville, and Amherst.",
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
        "@type": "LocalBusiness",
        name: "Latten Lawncare",
        areaServed: "Lorain County, Ohio",
        telephone: "+1-216-889-7822",
        email: "hello@lattenlawncare.com",
        description:
          "Local lawn care company offering lawn cutting, edging, and weed control for small to medium sized lawns.",
        offers: [
          {
            "@type": "Offer",
            name: "Lawn Cutting",
            priceCurrency: "USD",
            price: "40",
            description: "Front and backyard cut for small to medium lawns.",
          },
          {
            "@type": "Offer",
            name: "Edging",
          },
          {
            "@type": "Offer",
            name: "Weed Control",
          },
        ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="site-shell">
        <SiteHeader />
        <header className="hero">
          <div className="hero__overlay" />
          <div className="hero__content reveal">
            <div className="hero__grid">
              <div className="hero__copy">
                <p className="eyebrow">Lorain County Lawn Care</p>
                <h1>Clean cuts. Crisp edges. A lawn you&apos;ll actually be proud of.</h1>
                <p className="hero__lead">
                  Latten Lawncare is a local, owner-operated company focused on
                  fast, affordable mowing and edging for small to medium sized
                  yards &mdash; no long contracts, no runaround.
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
                  Starting at <strong>$40</strong> for front and backyard mowing.
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
                  <h3>{service.title}</h3>
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
            <div className="pricing">
              <div>
                <p className="eyebrow">Fair Pricing</p>
                <h2>Straightforward pricing, no surprises</h2>
                <p className="hero__lead">
                  Our signature cut is designed for homeowners who want
                  dependable service without overpaying. Ideal for small to
                  medium sized properties in Lorain County.
                </p>
                <p className="section__linkline">
                  Larger lot or need extra detail work? <Link href="/#contact">Reach out for a custom quote.</Link>
                </p>
              </div>
              <div className="pricing-card">
                <span className="pricing-card__badge">Most Popular</span>
                <div className="pricing-card__price">
                  <strong>$40</strong>
                  <span>front + backyard cut</span>
                </div>
                <p className="pricing-card__desc">Everything you need for a consistently sharp lawn.</p>
                <ul className="checklist">
                  {pricingInclusions.map((item) => (
                    <li key={item}>
                      <IconCheck />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <TrackedLink
                  className="btn btn--primary btn--block"
                  href="tel:+12168897822"
                  trackingEvent="conversion_call_click"
                  trackingLabel="Pricing Call"
                >
                  <IconPhone />
                  Book This Cut
                </TrackedLink>
              </div>
            </div>
          </section>

          <section className="section section--highlight reveal reveal--delay-2" id="results">
            <div className="section__heading section__heading--center">
              <p className="eyebrow">Real Results</p>
              <h2>See the Latten Lawncare difference</h2>
            </div>
            <div className="compare">
              <figure className="compare-panel">
                <span className="compare-panel__tag">Before</span>
                <Image
                  src="/lawn-before.svg"
                  alt="An overgrown, patchy lawn before service"
                  width={1200}
                  height={800}
                  loading="eager"
                />
              </figure>
              <figure className="compare-panel compare-panel--after">
                <span className="compare-panel__tag">After</span>
                <Image
                  src="/lawn-after.svg"
                  alt="A freshly mowed and edged lawn after service"
                  width={1200}
                  height={800}
                  loading="eager"
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

          <section className="section section--highlight reveal reveal--delay-3" id="testimonials">
            <div className="section__heading">
              <p className="eyebrow">Client Feedback</p>
              <h2>What local homeowners are saying</h2>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <blockquote className="card testimonial-card" key={testimonial.quote}>
                  <IconQuote className="testimonial-card__quote-mark" />
                  <p>&ldquo;{testimonial.quote}&rdquo;</p>
                  <cite>
                    <span className="testimonial-card__avatar">
                      {testimonial.name.charAt(0)}
                    </span>
                    {testimonial.name} in {testimonial.location}
                  </cite>
                </blockquote>
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
