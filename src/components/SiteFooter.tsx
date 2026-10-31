import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { IconChat, IconMail, IconMapPin, IconPhone } from "@/components/icons";
import { business, defaultTextMessage, smsLink } from "@/lib/business";
import { locations } from "@/lib/locations";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const featuredLocations = locations.slice(0, 5);

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div>
          <span className="footer__brand">
            <BrandLogo onDark className="footer__logo" />
          </span>
          <p className="footer__tagline">
            Locally owned, fully insured lawn care for small to medium sized
            yards across Lorain County, Ohio.
          </p>
        </div>

        <div className="footer__col">
          <h2 className="footer__heading">Quick Links</h2>
          <ul>
            <li>
              <Link href="/services">Services</Link>
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
          <h2 className="footer__heading">Service Areas</h2>
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
          <h2 className="footer__heading">Contact</h2>
          <ul>
            <li className="footer__contact-item">
              <a href="tel:+12168897822">
                <IconPhone /> (216) 889-7822
              </a>
            </li>
            <li className="footer__contact-item">
              <a href={smsLink(defaultTextMessage)}>
                <IconChat /> Text {business.phoneDisplay}
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
          <span>
            Designed by{" "}
            <a
              className="footer__credit-link"
              href="https://www.foundryframe.com/"
              target="_blank"
              rel="noopener"
            >
              Foundry Frame
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
