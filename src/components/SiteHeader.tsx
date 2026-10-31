"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import TrackedLink from "@/components/TrackedLink";
import BrandLogo from "@/components/BrandLogo";
import { IconClose, IconLeaf, IconMenu, IconPhone } from "@/components/icons";
import { getService } from "@/lib/services";

const leafCleanup = getService("leaf-cleanup")!;
const leafAndMow = getService("leaf-and-mow")!;

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services/leaf-cleanup", label: "Leaf Cleanup" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/before-and-after", label: "Before & After" },
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
            <BrandLogo className="site-header__logo" />
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
    <>
      <div className="promo-bar" role="region" aria-label="Seasonal offer">
        <IconLeaf />
        <p>
          <strong>Fall leaf cleanup now booking.</strong>{" "}
          {`Leaf cleanup $${leafCleanup.price} · Leaf & Mow $${leafAndMow.price}.`}
        </p>
        <TrackedLink
          className="promo-bar__link"
          href="/services/leaf-and-mow"
          trackingEvent="promo_bar_click"
          trackingLabel="Promo Bar Leaf & Mow"
        >
          See details
        </TrackedLink>
      </div>
      <header className="site-header" role="banner">
        <div className="site-header__inner">
          <Link className="site-header__brand" href="/">
            <BrandLogo className="site-header__logo" preload />
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
    </>
  );
}
