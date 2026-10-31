import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ServiceDetailPage, { generateMetadata } from "@/app/services/[slug]/page";
import nextConfig from "../../next.config";
import { getService, services } from "@/lib/services";

const props = { params: Promise.resolve({ slug: "leaf-and-mow" }) };

function readJsonLd(container: HTMLElement) {
  const script = container.querySelector('script[type="application/ld+json"]');
  return JSON.parse(script?.innerHTML ?? "{}");
}

describe("Leaf & Mow service", () => {
  it("is priced at $70 and badged as the fall special", () => {
    const leafAndMow = getService("leaf-and-mow");

    expect(leafAndMow?.price).toBe(70);
    expect(leafAndMow?.badge).toBe("Fall Special");
  });

  it("only cross-links services that exist", () => {
    for (const service of services) {
      for (const slug of service.related ?? []) {
        expect(getService(slug)).toBeDefined();
        expect(slug).not.toBe(service.slug);
      }
    }
  });

  it("renders the offer, before and after gallery, and related services", async () => {
    render(await ServiceDetailPage(props));

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Leaf Cleanup & Mow");
    expect(screen.getAllByText("$70").length).toBeGreaterThan(0);
    expect(screen.getAllByRole("slider").length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: "Fall Leaf Cleanup" })).toHaveAttribute(
      "href",
      "/services/leaf-cleanup",
    );
  });

  it("offers $70 in its Service schema", async () => {
    const { container } = render(await ServiceDetailPage(props));
    const service = readJsonLd(container)["@graph"].find(
      (node: { "@type": string }) => node["@type"] === "Service",
    );

    expect(service.offers.price).toBe("70");
  });

  it("targets fall cleanup searches with a full metadata set", async () => {
    const metadata = await generateMetadata(props);

    expect(metadata.title).toMatch(/\$70/);
    expect(metadata.alternates?.canonical).toBe("/services/leaf-and-mow");
    expect(metadata.openGraph?.images).toBeDefined();
  });

  it("only marks up FAQ questions that are visible on every service page", async () => {
    for (const service of services) {
      const { container, unmount } = render(
        await ServiceDetailPage({ params: Promise.resolve({ slug: service.slug }) }),
      );
      const faq = readJsonLd(container)["@graph"].find(
        (node: { "@type": string }) => node["@type"] === "FAQPage",
      );

      for (const question of faq.mainEntity) {
        expect(screen.getByText(question.name)).toBeInTheDocument();
      }
      unmount();
    }
  });
});

describe("short service redirects", () => {
  it("permanently redirects /leaf-cleanup and /leaf-and-mow to their service pages", async () => {
    const redirects = await nextConfig.redirects?.();

    expect(redirects).toEqual(
      expect.arrayContaining([
        { source: "/leaf-cleanup", destination: "/services/leaf-cleanup", permanent: true },
        { source: "/leaf-and-mow", destination: "/services/leaf-and-mow", permanent: true },
      ]),
    );
  });
});
