import Link from "next/link";
import { IconLeaf, IconMail, IconMapPin, IconPhone } from "@/components/icons";
import { locations } from "@/lib/locations";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const featuredLocations = locations.slice(0, 5);

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div>
          <span className="footer__brand">
            <span className="footer__brand-mark">
              <IconLeaf />
            </span>
            Latten Lawncare
          </span>
          <p className="footer__tagline">
            Locally owned, fully insured lawn care for small to medium sized
            yards across Lorain County, Ohio.
          </p>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="/#services">Services</Link>
            </li>
            <li>
              <Link href="/#pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/locations">Service Areas</Link>
            </li>
            <li>
              <Link href="/#faq">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Service Areas</h4>
          <ul>
            {featuredLocations.map((location) => (
              <li key={location.slug}>
                <Link href={`/locations/${location.slug}`}>{location.city}, OH</Link>
              </li>
            ))}
            <li>
              <Link href="/locations">View all locations</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li className="footer__contact-item">
              <a href="tel:+14409218245">
                <IconPhone /> (440) 921-8245
              </a>
            </li>
            <li className="footer__contact-item">
              <a href="mailto:hello@lattenlawncare.com">
                <IconMail /> hello@lattenlawncare.com
              </a>
            </li>
            <li className="footer__contact-item">
              <IconMapPin /> <span>Lorain County, Ohio</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <span>&copy; {year} Latten Lawncare. All rights reserved.</span>
          <span>Fully insured &middot; Serving Lorain County, Ohio</span>
        </div>
      </div>
    </footer>
  );
}
