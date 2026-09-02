import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import LocationsPage from "@/app/locations/page";
import { locations } from "@/lib/locations";

describe("LocationsPage", () => {
  it("renders a heading and a card for every service area", () => {
    render(<LocationsPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Lorain County Locations We Serve" }),
    ).toBeInTheDocument();

    for (const location of locations) {
      expect(screen.getByRole("heading", { name: location.city })).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: new RegExp(`View ${location.city} Lawn Care Page`) }),
      ).toHaveAttribute("href", `/locations/${location.slug}`);
    }
  });
});
