import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import MobileCallBar from "@/components/MobileCallBar";
import { IconCheck, IconMail, IconPhone } from "@/components/icons";
import { locations, siteBaseUrl } from "@/lib/locations";

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

  return {
    title: `${location.city} Lawn Care | Latten Lawncare`,
    description: `${location.summary} Call (440) 921-8245 to schedule your next lawn cut in ${location.city}.`,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
    openGraph: {
      title: `${location.city} Lawn Care | Latten Lawncare`,
      description: location.summary,
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What lawn services are available in ${location.city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lawn cutting, edging, and weed control for small to medium sized lawns.",
        },
      },
      {
        "@type": "Question",
        name: `How much does mowing cost in ${location.city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Front and backyard mowing starts at $40.",
        },
      },
    ],
  };

  return (
    <div className="site-shell">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main id="main-content">
        <section className="section reveal">
          <p className="eyebrow">Local Service Page</p>
          <h1>{location.headline}</h1>
          <p className="hero__lead">{location.summary}</p>
          <div className="hero__cta-group">
            <a className="btn btn--primary" href="tel:+14409218245">
              <IconPhone />
              Call (440) 921-8245
            </a>
            <a className="btn btn--ghost" href="mailto:hello@lattenlawncare.com">
              <IconMail />
              Email hello@lattenlawncare.com
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
                  <span>Consistent quality from a local owner-operator</span>
                </li>
              </ul>
            </div>
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
              <a className="btn btn--accent" href="tel:+14409218245">
                <IconPhone />
                (440) 921-8245
              </a>
              <a className="btn btn--outline" href="mailto:hello@lattenlawncare.com">
                <IconMail />
                hello@lattenlawncare.com
              </a>
            </div>
            <p className="section__linkline">
              <Link href="/">Back to homepage</Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCallBar />
    </div>
  );
}
