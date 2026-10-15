import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ServicesPage from "@/app/services/page";
import ServiceDetailPage, { generateMetadata, generateStaticParams } from "@/app/services/[slug]/page";
import { services } from "@/lib/services";

describe("ServicesPage", () => {
  it("lists every service with its price and a link to its page", () => {
    render(<ServicesPage />);

    for (const service of services) {
      expect(screen.getByRole("heading", { name: service.name })).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: `More about ${service.shortName.toLowerCase()}` }),
      ).toHaveAttribute("href", `/services/${service.slug}`);
    }
  });
});

describe("ServiceDetailPage", () => {
  it("builds a static page for every service", async () => {
    expect(await generateStaticParams()).toEqual(services.map((service) => ({ slug: service.slug })));
  });

  it("renders the service with Service, FAQPage and BreadcrumbList structured data", async () => {
    const service = services[0];
    const { container } = render(await ServiceDetailPage({ params: Promise.resolve({ slug: service.slug }) }));

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(service.name);

    const script = container.querySelector('script[type="application/ld+json"]');
    const data = JSON.parse(script?.innerHTML ?? "{}");
    const types = data["@graph"].map((node: { "@type": string }) => node["@type"]);
    expect(types).toEqual(expect.arrayContaining(["Service", "FAQPage", "BreadcrumbList"]));
  });

  it("uses the service's own title and canonical url", async () => {
    const service = services[1];
    const metadata = await generateMetadata({ params: Promise.resolve({ slug: service.slug }) });

    expect(metadata.title).toBe(service.metaTitle);
    expect(metadata.alternates?.canonical).toBe(`/services/${service.slug}`);
  });
});
