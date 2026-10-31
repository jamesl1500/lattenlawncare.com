import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import LocationDetailPage, { generateMetadata } from "@/app/locations/[slug]/page";
import { locations } from "@/lib/locations";

const location = locations[0];
const props = { params: Promise.resolve({ slug: location.slug }) };

describe("Location detail page", () => {
  it("shows leaf cleanup, Leaf & Mow, and mowing prices", async () => {
    render(await LocationDetailPage(props));

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(location.city);
    expect(screen.getByRole("link", { name: /leaf & mow \$90/i })).toHaveAttribute(
      "href",
      "/services/leaf-and-mow",
    );
  });

  it("only marks up FAQ questions that are visible on the page", async () => {
    const { container } = render(await LocationDetailPage(props));
    const script = container.querySelector('script[type="application/ld+json"]');
    const data = JSON.parse(script?.innerHTML ?? "{}");
    const faq = data["@graph"].find((node: { "@type": string }) => node["@type"] === "FAQPage");

    expect(faq.mainEntity.length).toBeGreaterThan(0);
    for (const question of faq.mainEntity) {
      expect(screen.getByText(question.name)).toBeInTheDocument();
    }
  });

  it("sets a canonical url and social image for the city", async () => {
    const metadata = await generateMetadata(props);

    expect(metadata.alternates?.canonical).toBe(`/locations/${location.slug}`);
    expect(metadata.openGraph?.images).toBeDefined();
  });
});
