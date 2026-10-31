import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import MobileCallBar from "@/components/MobileCallBar";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import { IconCheck, IconLeaf, IconMail, IconPhone } from "@/components/icons";
import {
  areaServed,
  breadcrumbJsonLd,
  business,
  businessId,
  pageMetadata,
} from "@/lib/business";
import { projectsForService } from "@/lib/gallery";
import { locations } from "@/lib/locations";
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
    return { title: "Service Not Found | Latten Lawncare", robots: { index: false } };
  }

  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ];
  const gallery = projectsForService(service.slug);
  const related = (service.related ?? []).map((slug) => getService(slug)!);

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
      breadcrumbJsonLd(breadcrumbs),
    ],
  };

  return (
    <div className="site-shell">
      <SiteHeader />
      <JsonLd data={jsonLd} />
      <main id="main-content">
        <section className={`section reveal${service.badge ? " section--leaf" : ""}`}>
          <Breadcrumbs items={breadcrumbs} />
          <p className="eyebrow">Lorain County {service.shortName}</p>
          <h1>{service.name} in Lorain County, OH</h1>
          <p className="hero__lead">{service.intro}</p>
          <div className="hero__cta-group">
            <a className="btn btn--primary" href={business.phoneHref}>
              <IconPhone />
              {`Call ${business.phoneDisplay}`}
            </a>
            <a className="btn btn--ghost" href={business.emailHref}>
              <IconMail />
              {`Email ${business.email}`}
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
            <div className={`pricing-card${service.badge ? " pricing-card--leaf" : ""}`}>
              {service.badge ? (
                <span className="pricing-card__badge">
                  <IconLeaf />
                  {service.badge}
                </span>
              ) : null}
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

        {gallery.length > 0 && (
          <section className="section section--highlight reveal reveal--delay-2">
            <div className="section__heading section__heading--center">
              <p className="eyebrow">Before &amp; After</p>
              <h2>{service.shortName} results</h2>
              <p>Drag the slider to compare the yard before and after.</p>
            </div>
            <BeforeAfterGallery projects={gallery} />
            <p className="section__linkline section__linkline--center">
              <Link href="/before-and-after">See all before and after photos</Link>
            </p>
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

        {related.length > 0 && (
          <section className="section reveal reveal--delay-2">
            <div className="section__heading">
              <p className="eyebrow">Related Services</p>
              <h2>Other ways we can help</h2>
            </div>
            <div className="related-grid">
              {related.map((item) => (
                <article className="card card--interactive" key={item.slug}>
                  {item.badge ? <p className="related-card__badge">{item.badge}</p> : null}
                  <h3>
                    <Link href={`/services/${item.slug}`}>{item.name}</Link>
                  </h3>
                  <p>
                    <strong>${item.price}</strong> {item.priceNote}
                  </p>
                  <p>{item.summary}</p>
                </article>
              ))}
            </div>
          </section>
        )}

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
