import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import MobileCallBar from "@/components/MobileCallBar";
import { IconChat, IconCheck, IconMail, IconPhone } from "@/components/icons";
import { breadcrumbJsonLd, business, businessId, smsLink } from "@/lib/business";
import { locations, siteBaseUrl } from "@/lib/locations";
import { services } from "@/lib/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);

  if (!location) {
    return {
      title: "Location Not Found | Latten Lawncare",
    };
  }

  const title = `Leaf Cleanup & Lawn Mowing in ${location.city}, OH | $40 | Latten Lawncare`;
  const description = `Fall leaf cleanup in ${location.city}: we blow, rake, and bag your leaves for $40. ${location.summary} Call (216) 889-7822.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteBaseUrl}/locations/${location.slug}`,
    },
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const location = locations.find((item) => item.slug === slug);

  if (!location) {
    notFound();
  }

  const pagePath = `/locations/${location.slug}`;
  const nearby = locations.filter((item) => item.slug !== location.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...services.map((service) => ({
        "@type": "Service",
        name: `${service.name} in ${location.city}, OH`,
        serviceType: service.shortName,
        provider: { "@id": businessId },
        areaServed: { "@type": "City", name: `${location.city}, OH` },
        offers: {
          "@type": "Offer",
          price: String(service.price),
          priceCurrency: "USD",
          url: `${siteBaseUrl}/services/${service.slug}`,
        },
      })),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Locations", path: "/locations" },
        { name: location.city, path: pagePath },
      ]),
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `What lawn services are available in ${location.city}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Fall leaf cleanup (we blow, rake, and bag your leaves) and lawn mowing with edging included, for small to medium sized lawns.",
            },
          },
          {
            "@type": "Question",
            name: `How much does mowing cost in ${location.city}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Front and backyard mowing starts at $40, and edging is included.",
            },
          },
          {
            "@type": "Question",
            name: `How much does leaf cleanup cost in ${location.city}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Leaf cleanup is $40 for the front and back yard of a small to medium lawn, including blowing, raking, and bagging the leaves.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="site-shell">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content">
        <section className="section reveal">
          <p className="eyebrow">Local Service Page</p>
          <h1>{location.headline}</h1>
          <p className="hero__lead">{location.summary}</p>
          <div className="hero__cta-group">
            <a className="btn btn--primary" href="tel:+12168897822">
              <IconPhone />
              Call (216) 889-7822
            </a>
            <a
              className="btn btn--ghost"
              href={smsLink(`Hi James, I'd like a lawn care quote in ${location.city}. My address is: `)}
            >
              <IconChat />
              Text for a Quote
            </a>
          </div>
        </section>

        <section className="section reveal reveal--delay-1">
          <div className="split">
            <div>
              <h2>Neighborhoods We Commonly Serve</h2>
              <ul className="checklist checklist--spaced">
                {location.neighborhoods.map((spot) => (
                  <li key={spot}>
                    <IconCheck />
                    <span>{spot}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card card--accent">
              <h3>What to expect</h3>
              <ul className="checklist checklist--spaced">
                <li>
                  <IconCheck />
                  <span>Clear communication and easy scheduling</span>
                </li>
                <li>
                  <IconCheck />
                  <span>Reliable mowing and clean edging detail</span>
                </li>
                <li>
                  <IconCheck />
                  <span>Fall leaf cleanup: leaves blown, raked, and bagged</span>
                </li>
                <li>
                  <IconCheck />
                  <span>Consistent quality from a local owner-operator</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--highlight reveal reveal--delay-2">
          <h2>Lawn care services in {location.city}</h2>
          <div className="service-grid">
            {services.map((service) => (
              <article className="card" key={service.slug}>
                <h3>
                  <Link href={`/services/${service.slug}`}>{service.name}</Link>
                </h3>
                <p>
                  <strong>${service.price}</strong> {service.priceNote}
                </p>
                <p>{service.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--dark reveal reveal--delay-2">
          <div className="contact-box">
            <p className="eyebrow">Request Service in {location.city}</p>
            <h2>Get your quote today</h2>
            <p className="contact-box__lead">
              Let us know your lawn size and preferred day, and we will get you on the schedule quickly.
            </p>
            <div className="contact-box__links">
              <a className="btn btn--accent" href="tel:+12168897822">
                <IconPhone />
                (216) 889-7822
              </a>
              <a
                className="btn btn--outline"
                href={smsLink(`Hi James, I'd like a lawn care quote in ${location.city}. My address is: `)}
              >
                <IconChat />
                Text us
              </a>
              <a className="btn btn--outline" href={`mailto:${business.email}`}>
                <IconMail />
                hello@lattenlawncare.com
              </a>
            </div>
            <p className="section__linkline">
              Also serving{" "}
              {nearby.map((item, index) => (
                <span key={item.slug}>
                  {index > 0 && ", "}
                  <Link href={`/locations/${item.slug}`}>{item.city}</Link>
                </span>
              ))}
              . <Link href="/">Back to homepage</Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCallBar />
    </div>
  );
}
