import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import MobileCallBar from "@/components/MobileCallBar";
import { IconCheck, IconLeaf, IconMower, IconPhone } from "@/components/icons";
import { breadcrumbJsonLd, business, businessId } from "@/lib/business";
import { services } from "@/lib/services";
import { siteBaseUrl } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Lawn Care Services & Pricing | Latten Lawncare",
  description:
    "Lawn mowing with edging and fall leaf cleanup, each $40 for small to medium lawns in Lorain County, OH. Call or text (216) 889-7822 for a free quote.",
  alternates: {
    canonical: "/services",
  },
};

const serviceIcons: Record<string, typeof IconMower> = {
  "lawn-mowing": IconMower,
  "leaf-cleanup": IconLeaf,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="main-content">
        <section className="section reveal">
          <p className="eyebrow">Services</p>
          <h1>Lawn care services in Lorain County</h1>
          <p className="hero__lead">
            Two simple services, one flat price. Each is $40 for the front and back yard of a small to
            medium lawn. Bigger yard? Call for a free quote.
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
