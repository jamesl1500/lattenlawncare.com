"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import TrackedLink from "@/components/TrackedLink";
import { IconClose, IconLeaf, IconMenu, IconPhone } from "@/components/icons";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/locations", label: "Locations" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const mobileNav = (
    <div id="mobile-nav" className="mobile-nav" data-open={open}>
      <button
        type="button"
        className="mobile-nav__backdrop"
        aria-hidden="true"
        tabIndex={-1}
        onClick={() => setOpen(false)}
      />
      <div className="mobile-nav__panel" role="dialog" aria-modal="true">
        <div className="mobile-nav__head">
          <span className="site-header__brand">
            <span className="site-header__brand-mark">
              <IconLeaf />
            </span>
            Latten Lawncare
          </span>
          <button
            type="button"
            className="mobile-nav__close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <IconClose />
          </button>
        </div>

        <div className="mobile-nav__links">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="mobile-nav__link"
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <TrackedLink
          className="btn btn--primary btn--block"
          href="tel:+12168897822"
          trackingEvent="conversion_call_click"
          trackingLabel="Mobile Nav Call"
        >
          <IconPhone />
          Call (216) 889-7822
        </TrackedLink>
      </div>
    </div>
  );

  return (
    <header className="site-header" role="banner">
      <div className="site-header__inner">
        <Link className="site-header__brand" href="/">
          <span className="site-header__brand-mark">
            <IconLeaf />
          </span>
          Latten Lawncare
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          <div className="site-header__links">
            {navItems.map((item) => (
              <Link key={item.href} className="site-header__link" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="site-header__actions">
            <TrackedLink
              className="site-header__phone"
              href="tel:+12168897822"
              trackingEvent="conversion_call_click"
              trackingLabel="Header Call"
            >
              <IconPhone />
              (216) 889-7822
            </TrackedLink>
            <TrackedLink
              className="btn btn--primary btn--sm"
              href="mailto:hello@lattenlawncare.com"
              trackingEvent="conversion_email_click"
              trackingLabel="Header Email"
            >
              Get a Quote
            </TrackedLink>
          </div>

          <button
            type="button"
            className="site-header__toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <IconMenu />
          </button>
        </nav>
      </div>

      {typeof document !== "undefined" ? createPortal(mobileNav, document.body) : null}
    </header>
  );
}
