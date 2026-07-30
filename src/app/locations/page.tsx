import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Lorain County Service Areas | Latten Lawncare",
  description:
    "View all Lorain County cities served by Latten Lawncare for lawn cutting, edging, and weed control.",
  alternates: {
    canonical: "/locations",
  },
};

export default function LocationsPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="section reveal">
          <p className="eyebrow">Service Areas</p>
          <h1>Lorain County Locations We Serve</h1>
          <p className="hero__lead">
            Latten Lawncare provides local lawn cutting, edging, and weed control for
            small to medium lawns throughout Lorain County.
          </p>
        </section>

        <section className="section reveal reveal--delay-1">
          <div className="location-grid">
            {locations.map((location) => (
              <article className="card" key={location.slug}>
                <h2>{location.city}</h2>
                <p>{location.summary}</p>
                <p>
                  <strong>Neighborhood focus:</strong> {location.neighborhoods.join(", ")}
                </p>
                <Link className="btn btn--ghost" href={`/locations/${location.slug}`}>
                  View {location.city} Lawn Care Page
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
