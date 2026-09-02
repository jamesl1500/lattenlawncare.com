import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { locations } from "@/lib/locations";

describe("Home page", () => {
  it("renders the hero heading and primary calls to action", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /call \(440\) 921-8245/i }).length).toBeGreaterThan(
      0,
    );
    expect(
      screen.getAllByRole("link", { name: /hello@lattenlawncare\.com/i }).length,
    ).toBeGreaterThan(0);
  });

  it("lists all three core services", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: "Lawn Cutting" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Edging" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Weed Control" })).toBeInTheDocument();
  });

  it("shows the $40 starting price", () => {
    render(<Home />);

    expect(screen.getAllByText("$40").length).toBeGreaterThan(0);
  });

  it("renders a link to every service location", () => {
    render(<Home />);

    for (const location of locations) {
      expect(
        screen.getByRole("link", { name: new RegExp(`^${location.city}$`) }),
      ).toHaveAttribute("href", `/locations/${location.slug}`);
    }
  });

  it("renders all FAQ questions", () => {
    render(<Home />);

    expect(
      screen.getByText("What services does Latten Lawncare offer?"),
    ).toBeInTheDocument();
    expect(screen.getByText("How much is lawn mowing?")).toBeInTheDocument();
    expect(screen.getByText("What areas do you serve?")).toBeInTheDocument();
    expect(screen.getByText("How do I request service?")).toBeInTheDocument();
  });

  it("embeds valid LocalBusiness and FAQPage structured data", () => {
    const { container } = render(<Home />);

    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).not.toBeNull();

    const data = JSON.parse(script?.innerHTML ?? "{}");
    const types = data["@graph"].map((node: { "@type": string }) => node["@type"]);

    expect(types).toContain("LocalBusiness");
    expect(types).toContain("FAQPage");
  });
});
