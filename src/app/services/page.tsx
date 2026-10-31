import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import MobileCallBar from "@/components/MobileCallBar";
import JsonLd from "@/components/JsonLd";
import { IconCheck, IconLeaf, IconMower, IconPhone } from "@/components/icons";
import { breadcrumbJsonLd, business, businessId, pageMetadata } from "@/lib/business";
import { services } from "@/lib/services";
import { siteBaseUrl } from "@/lib/locations";

export const metadata: Metadata = pageMetadata({
  title: "Lawn Care Services & Pricing | Latten Lawncare",
  description:
    "Fall leaf cleanup (we blow, rake, and bag) and lawn mowing with edging, $40 each, or both in one visit with Leaf & Mow for $70. Small to medium lawns in Lorain County, OH. Call (216) 889-7822.",
  path: "/services",
});

const serviceIcons: Record<string, typeof IconMower> = {
  "lawn-mowing": IconMower,
  "leaf-cleanup": IconLeaf,
  "leaf-and-mow": IconLeaf,
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "OfferCatalog",
        name: "Latten Lawncare services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          price: String(service.price),
          priceCurrency: "USD",
          url: `${siteBaseUrl}/services/${service.slug}`,
          itemOffered: {
            "@type": "Service",
            name: service.name,
            provider: { "@id": businessId },
          },
        })),
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
      ]),
    ],
  };

  return (
    <div className="site-shell">
      <SiteHeader />
      <JsonLd data={jsonLd} />
      <main id="main-content">
        <section className="section reveal">
          <p className="eyebrow">Services</p>
          <h1>Lawn care services in Lorain County</h1>
          <p className="hero__lead">
            Simple services with flat prices for the front and back yard of a small to medium lawn:
            leaf cleanup or mowing for $40 each, or both in one visit with Leaf &amp; Mow for $70.
            Bigger yard? Call for a free quote.
          </p>
        </section>

        <section className="section reveal reveal--delay-1">
          <div className="service-grid">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug] ?? IconMower;
              return (
                <article className="card card--interactive" key={service.slug}>
                  <span className="card__icon">
                    <Icon />
                  </span>
                  <h2>{service.name}</h2>
                  <p>
                    <strong>${service.price}</strong> {service.priceNote}
                  </p>
                  <p>{service.summary}</p>
                  <ul className="checklist">
                    {service.includes.map((item) => (
                      <li key={item}>
                        <IconCheck />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link className="btn btn--ghost" href={`/services/${service.slug}`}>
                    More about {service.shortName.toLowerCase()}
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section section--dark reveal reveal--delay-2">
          <div className="contact-box">
            <p className="eyebrow">Free quotes</p>
            <h2>Call or text to get on the schedule</h2>
            <div className="contact-box__links">
              <a className="btn btn--accent" href={business.phoneHref}>
                <IconPhone />
                {business.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCallBar />
    </div>
  );
}
