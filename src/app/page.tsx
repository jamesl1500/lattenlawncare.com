import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { locations } from "@/lib/locations";

export default function Home() {
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
        "You can call (440) 921-8245 or email hello@lattenlawncare.com for scheduling and quotes.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Latten Lawncare",
        areaServed: "Lorain County, Ohio",
        telephone: "+1-440-921-8245",
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
                <h1>Latten Lawncare</h1>
                <p className="hero__lead">
                  Clean cuts, crisp edges, and healthier lawns from a local company
                  that focuses on small to medium sized yards.
                </p>
                <div className="hero__cta-group">
                  <TrackedLink
                    className="btn btn--primary"
                    href="tel:+14409218245"
                    trackingEvent="conversion_call_click"
                    trackingLabel="Hero Call"
                  >
                    Call (440) 921-8245
                  </TrackedLink>
                  <TrackedLink
                    className="btn btn--ghost"
                    href="mailto:hello@lattenlawncare.com"
                    trackingEvent="conversion_email_click"
                    trackingLabel="Hero Email"
                  >
                    Email for a Quote
                  </TrackedLink>
                </div>
                <p className="hero__note">
                  Starting at <strong>$40</strong> for front and backyard mowing.
                </p>
              </div>

              <figure className="hero__photo-wrap">
                <Image
                  src="/Latten, James Headshot.jpg"
                  alt="James Latten, owner of Latten Lawncare"
                  width={620}
                  height={760}
                  className="hero__photo"
                  priority
                />
                <figcaption className="hero__photo-caption">
                  James Latten, owner and operator
                </figcaption>
              </figure>
            </div>
          </div>
        </header>

        <main>
          <section className="section reveal reveal--delay-1" id="services">
            <div className="section__heading">
              <p className="eyebrow">What We Offer</p>
              <h2>Simple, reliable lawn care done right</h2>
            </div>
            <div className="service-grid">
              <article className="card">
                <h3>Lawn Cutting</h3>
                <p>
                  Precision mowing for small to medium lawns with clean patterns
                  and even height for a polished look.
                </p>
              </article>
              <article className="card">
                <h3>Edging</h3>
                <p>
                  Sharp, defined lines along sidewalks, driveways, and beds to
                  frame your lawn and boost curb appeal.
                </p>
              </article>
              <article className="card">
                <h3>Weed Control</h3>
                <p>
                  Targeted weed management to help your grass thrive and keep
                  your yard looking neat through the season.
                </p>
              </article>
            </div>
          </section>

          <section className="section section--highlight reveal reveal--delay-2" id="pricing">
            <div className="pricing">
              <div>
                <p className="eyebrow">Fair Pricing</p>
                <h2>$40 Front + Backyard Cut</h2>
                <p>
                  Our signature cut is designed for homeowners who want
                  dependable service without overpaying. Ideal for small to
                  medium sized properties in Lorain County.
                </p>
              </div>
              <div className="pricing__meta">
                <p>Included with each mowing visit:</p>
                <ul>
                  <li>Full front and backyard mow</li>
                  <li>Attention to detail around edges</li>
                  <li>Consistent local service you can trust</li>
                </ul>
              </div>
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
                <ul>
                  <li>Friendly communication and easy scheduling</li>
                  <li>Specialized in small to medium lots</li>
                  <li>Consistent quality with every visit</li>
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
                  {location.city} Lawn Care
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
              <blockquote className="card">
                <p>
                  &ldquo;Fast response, clean cut, and the edging made the whole front yard look brand new.&rdquo;
                </p>
                <cite>Homeowner in Elyria</cite>
              </blockquote>
              <blockquote className="card">
                <p>
                  &ldquo;Exactly what I needed for a small lawn. Great communication and fair pricing.&rdquo;
                </p>
                <cite>Homeowner in Lorain</cite>
              </blockquote>
              <blockquote className="card">
                <p>
                  &ldquo;Consistent every visit. Yard always looks sharp when James is done.&rdquo;
                </p>
                <cite>Homeowner in North Ridgeville</cite>
              </blockquote>
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

          <section className="section section--contact reveal reveal--delay-3" id="contact">
            <div className="contact-box">
              <p className="eyebrow">Let&apos;s Get Your Lawn Looking Great</p>
              <h2>Request service today</h2>
              <p>
                Call or email Latten Lawncare for quick scheduling and a
                welcoming, no-hassle experience.
              </p>
              <div className="contact-box__links">
                <TrackedLink
                  href="tel:+14409218245"
                  trackingEvent="conversion_call_click"
                  trackingLabel="Footer Call"
                >
                  (440) 921-8245
                </TrackedLink>
                <TrackedLink
                  href="mailto:hello@lattenlawncare.com"
                  trackingEvent="conversion_email_click"
                  trackingLabel="Footer Email"
                >
                  hello@lattenlawncare.com
                </TrackedLink>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
