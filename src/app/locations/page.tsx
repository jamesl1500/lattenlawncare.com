import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import MobileCallBar from "@/components/MobileCallBar";
import { IconMapPin } from "@/components/icons";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Lorain County Service Areas | Latten Lawncare",
  description:
    "Lawn mowing, edging, and leaf cleanup in Elyria, Lorain, Avon, North Ridgeville, Amherst, Avon Lake, Sheffield Lake, and Sheffield Village. $40 for small to medium lawns.",
  alternates: {
    canonical: "/locations",
  },
};

export default function LocationsPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content">
        <section className="section reveal">
          <p className="eyebrow">Service Areas</p>
          <h1>Lorain County Locations We Serve</h1>
          <p className="hero__lead">
            Latten Lawncare provides local lawn mowing, edging, and leaf cleanup for
            small to medium lawns throughout Lorain County.
          </p>
        </section>

        <section className="section reveal reveal--delay-1">
          <div className="location-grid">
            {locations.map((location) => (
              <article className="card card--interactive" key={location.slug}>
                <span className="card__icon">
                  <IconMapPin />
                </span>
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
      <MobileCallBar />
    </div>
  );
}
