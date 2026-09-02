import { describe, expect, it, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import TrackedLink from "@/components/TrackedLink";

describe("TrackedLink", () => {
  beforeEach(() => {
    window.dataLayer = undefined;
    window.gtag = undefined;
  });

  it("renders an anchor with the given href and label", () => {
    render(
      <TrackedLink href="tel:+14409218245" trackingEvent="conversion_call_click">
        Call Now
      </TrackedLink>,
    );

    const link = screen.getByRole("link", { name: "Call Now" });
    expect(link).toHaveAttribute("href", "tel:+14409218245");
  });

  it("pushes a tracking event to dataLayer on click", () => {
    render(
      <TrackedLink
        href="mailto:hello@lattenlawncare.com"
        trackingEvent="conversion_email_click"
        trackingLabel="Test Email"
      >
        Email Us
      </TrackedLink>,
    );

    fireEvent.click(screen.getByRole("link", { name: "Email Us" }));

    expect(window.dataLayer).toHaveLength(1);
    expect(window.dataLayer?.[0]).toMatchObject({
      event: "conversion_email_click",
      link_text: "Test Email",
      href: "mailto:hello@lattenlawncare.com",
    });
  });

  it("falls back to the link text when no tracking label is given", () => {
    render(
      <TrackedLink href="/locations" trackingEvent="location_page_click">
        Elyria
      </TrackedLink>,
    );

    fireEvent.click(screen.getByRole("link", { name: "Elyria" }));

    expect(window.dataLayer?.[0]).toMatchObject({ link_text: "Elyria" });
  });

  it("forwards clicks to gtag when available", () => {
    let called = false;
    window.gtag = () => {
      called = true;
    };

    render(
      <TrackedLink href="tel:+14409218245" trackingEvent="conversion_call_click">
        Call Now
      </TrackedLink>,
    );

    fireEvent.click(screen.getByRole("link", { name: "Call Now" }));

    expect(called).toBe(true);
  });
});
