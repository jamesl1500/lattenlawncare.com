import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import SiteFooter from "@/components/SiteFooter";
import { locations } from "@/lib/locations";

describe("SiteFooter", () => {
  it("renders the brand, contact details, and current year", () => {
    render(<SiteFooter />);

    expect(screen.getByText("Latten Lawncare")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /\(440\) 921-8245/ })).toHaveAttribute(
      "href",
      "tel:+14409218245",
    );
    expect(screen.getByRole("link", { name: /hello@lattenlawncare\.com/ })).toHaveAttribute(
      "href",
      "mailto:hello@lattenlawncare.com",
    );

    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("links to a subset of service area pages", () => {
    render(<SiteFooter />);

    const firstLocation = locations[0];
    expect(
      screen.getByRole("link", { name: new RegExp(firstLocation.city) }),
    ).toHaveAttribute("href", `/locations/${firstLocation.slug}`);
    expect(screen.getByRole("link", { name: /view all locations/i })).toHaveAttribute(
      "href",
      "/locations",
    );
  });
});
