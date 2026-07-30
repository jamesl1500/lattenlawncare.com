import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
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
      <main>
        <section className="section reveal">
          <p className="eyebrow">Local Service Page</p>
          <h1>{location.headline}</h1>
          <p className="hero__lead">{location.summary}</p>
          <div className="hero__cta-group">
            <a className="btn btn--primary" href="tel:+14409218245">
              Call (440) 921-8245
            </a>
            <a className="btn btn--ghost" href="mailto:hello@lattenlawncare.com">
              Email hello@lattenlawncare.com
            </a>
          </div>
        </section>

        <section className="section reveal reveal--delay-1">
          <div className="split">
            <div>
              <h2>Neighborhoods We Commonly Serve</h2>
              <ul>
                {location.neighborhoods.map((spot) => (
                  <li key={spot}>{spot}</li>
                ))}
              </ul>
            </div>
            <div className="card card--accent">
              <h3>What to expect</h3>
              <ul>
                <li>Clear communication and easy scheduling</li>
                <li>Reliable mowing and clean edging detail</li>
                <li>Consistent quality from a local owner-operator</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--contact reveal reveal--delay-2">
          <div className="contact-box">
            <p className="eyebrow">Request Service in {location.city}</p>
            <h2>Get your quote today</h2>
            <p>Let us know your lawn size and preferred day, and we will get you on the schedule quickly.</p>
            <div className="contact-box__links">
              <a href="tel:+14409218245">(440) 921-8245</a>
              <a href="mailto:hello@lattenlawncare.com">hello@lattenlawncare.com</a>
              <Link href="/">Back to homepage</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
