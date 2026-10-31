import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { locations } from "@/lib/locations";

describe("Home page", () => {
  it("renders the hero heading and primary calls to action", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /call \(216\) 889-7822/i }).length).toBeGreaterThan(
      0,
    );
    expect(
      screen.getAllByRole("link", { name: /hello@lattenlawncare\.com/i }).length,
    ).toBeGreaterThan(0);
  });

  it("lists all three core services", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: "Lawn Mowing" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Edging" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Leaf Cleanup" })).toBeInTheDocument();
    expect(screen.queryByText(/weed control/i)).not.toBeInTheDocument();
  });

  it("features the $70 Leaf & Mow fall special", () => {
    render(<Home />);

    expect(document.getElementById("leaf-and-mow")).not.toBeNull();
    expect(screen.getAllByText("$70").length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { name: "Leaf & Mow" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /book leaf & mow for \$70/i }).length).toBeGreaterThan(0);
  });

  it("prices all three services in the pricing section", () => {
    render(<Home />);

    const pricing = document.getElementById("pricing")!;
    for (const name of ["Leaf Cleanup & Mow", "Fall Leaf Cleanup", "Lawn Mowing & Edging"]) {
      expect(pricing).toHaveTextContent(name);
    }
  });

  it("shows before and after sliders with a link to the full gallery", () => {
    render(<Home />);

    expect(screen.getAllByRole("slider").length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /view all before and after photos/i })).toHaveAttribute(
      "href",
      "/before-and-after",
    );
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

  it("does not show testimonials until there are real customer reviews", () => {
    render(<Home />);

    expect(screen.queryByRole("heading", { name: /what local homeowners are saying/i })).not.toBeInTheDocument();
  });

  it("renders all FAQ questions", () => {
    render(<Home />);

    expect(
      screen.getByText("What services does Latten Lawncare offer?"),
    ).toBeInTheDocument();
    expect(screen.getByText("How much is lawn mowing?")).toBeInTheDocument();
    expect(screen.getByText("How much is leaf cleanup?")).toBeInTheDocument();
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

  it("only marks up FAQ questions that are visible on the page", () => {
    const { container } = render(<Home />);

    const script = container.querySelector('script[type="application/ld+json"]');
    const data = JSON.parse(script?.innerHTML ?? "{}");
    const faq = data["@graph"].find((node: { "@type": string }) => node["@type"] === "FAQPage");

    for (const question of faq.mainEntity) {
      expect(screen.getByText(question.name)).toBeInTheDocument();
    }
  });

  it("features fall leaf cleanup: blow, rake, and bag", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/leaf cleanup/i);
    expect(screen.getByRole("heading", { name: "We blow, rake, and bag your leaves" })).toBeInTheDocument();
    for (const step of ["Blow", "Rake", "Bag"]) {
      expect(screen.getByRole("heading", { name: step })).toBeInTheDocument();
    }
    expect(screen.getByRole("link", { name: "More about leaf cleanup" })).toHaveAttribute(
      "href",
      "/services/leaf-cleanup",
    );
  });
});
