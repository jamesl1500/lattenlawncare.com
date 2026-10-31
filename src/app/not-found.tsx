import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import MobileCallBar from "@/components/MobileCallBar";
import { IconPhone } from "@/components/icons";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Page Not Found | Latten Lawncare",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content">
        <section className="section reveal">
          <p className="eyebrow">Page not found</p>
          <h1>That page blew away with the leaves</h1>
          <p className="hero__lead">
            The page you were looking for isn&apos;t here, but we can still get your yard taken care of.
          </p>
          <div className="hero__cta-group">
            <a className="btn btn--primary" href={business.phoneHref}>
              <IconPhone />
              Call {business.phoneDisplay}
            </a>
            <Link className="btn btn--ghost" href="/services">
              See our services
            </Link>
            <Link className="btn btn--ghost" href="/">
              Back to home
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCallBar />
    </div>
  );
}
