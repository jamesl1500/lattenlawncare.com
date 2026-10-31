import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import MobileCallBar from "@/components/MobileCallBar";
import { IconChat, IconCheck, IconMail, IconPhone } from "@/components/icons";
import { areaServed, breadcrumbJsonLd, business, businessId, smsLink } from "@/lib/business";
import { locations, siteBaseUrl } from "@/lib/locations";
import { getService, services } from "@/lib/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service Not Found | Latten Lawncare" };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteBaseUrl}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const quoteText = `Hi James, I'd like a quote for ${service.shortName.toLowerCase()}. My address is: `;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.name,
        serviceType: service.shortName,
        description: service.summary,
        ...(service.keywords && { alternateName: service.keywords }),
        provider: { "@id": businessId },
        areaServed,
        offers: {
          "@type": "Offer",
          price: String(service.price),
          priceCurrency: "USD",
          description: `$${service.price}, ${service.priceNote}, small to medium lawns`,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: service.name, path: `/services/${service.slug}` },
      ]),
    ],
  };

  return (
    <div className="site-shell">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="main-content">
        <section className="section reveal">
          <p className="eyebrow">Lorain County {service.shortName}</p>
          <h1>{service.name} in Lorain County, OH</h1>
          <p className="hero__lead">{service.intro}</p>
          <div className="hero__cta-group">
            <a className="btn btn--primary" href={business.phoneHref}>
              <IconPhone />
              Call {business.phoneDisplay}
            </a>
            <a className="btn btn--ghost" href={smsLink(quoteText)}>
              <IconChat />
              Text for a Quote
            </a>
          </div>
        </section>

        <section className="section reveal reveal--delay-1">
          <div className="split">
            <div>
              <h2>What&apos;s included</h2>
              <ul className="checklist checklist--spaced">
                {service.includes.map((item) => (
                  <li key={item}>
                    <IconCheck />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>{service.bestFor}</p>
            </div>
            <div className="pricing-card">
              <div className="pricing-card__price">
                <strong>${service.price}</strong>
                <span>{service.priceNote}</span>
              </div>
              <p className="pricing-card__desc">
                Flat price for small to medium lawns. Larger yards get a free custom quote.
              </p>
              <a className="btn btn--primary btn--block" href={business.phoneHref}>
                <IconPhone />
                Book {service.shortName.toLowerCase()}
              </a>
            </div>
          </div>
        </section>

        {service.steps && (
          <section className="section section--highlight reveal reveal--delay-1">
            <div className="section__heading section__heading--center">
              <p className="eyebrow">How we do it</p>
              <h2>
                {service.steps.map((step) => step.title).join(", ").replace(/, ([^,]*)$/, ", and $1")}
              </h2>
            </div>
            <div className="process-grid">
              {service.steps.map((step, index) => (
                <div className="process-step" key={step.title}>
                  <span className="process-step__index">{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="section reveal reveal--delay-2">
          <div className="section__heading">
            <p className="eyebrow">Frequently Asked Questions</p>
            <h2>{service.shortName} questions</h2>
          </div>
          <div className="faq-list">
            {service.faqs.map((faq) => (
              <details key={faq.question} className="faq-item">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section section--dark reveal reveal--delay-2">
          <div className="contact-box">
            <p className="eyebrow">Free quotes</p>
            <h2>Book your {service.shortName.toLowerCase()}</h2>
            <p className="contact-box__lead">
              Call or text with your address and James will get you on the schedule, usually the same week.
            </p>
            <div className="contact-box__links">
              <a className="btn btn--accent" href={business.phoneHref}>
                <IconPhone />
                {business.phoneDisplay}
              </a>
              <a className="btn btn--outline" href={smsLink(quoteText)}>
                <IconChat />
                Text us
              </a>
              <a className="btn btn--outline" href={`mailto:${business.email}`}>
                <IconMail />
                {business.email}
              </a>
            </div>
          </div>
        </section>

        <section className="section reveal reveal--delay-2">
          <h2>{service.shortName} near you</h2>
          <p>
            {locations.map((location, index) => (
              <span key={location.slug}>
                {index > 0 && " · "}
                <Link href={`/locations/${location.slug}`}>{location.city}</Link>
              </span>
            ))}
          </p>
          <p className="section__linkline">
            <Link href="/services">All services</Link>
          </p>
        </section>
      </main>
      <SiteFooter />
      <MobileCallBar />
    </div>
  );
}
