import { describe, expect, it } from "vitest";
import { business, pageMetadata, serializeJsonLd } from "@/lib/business";
import { siteBaseUrl } from "@/lib/locations";

describe("business helpers", () => {
  it("escapes < in JSON-LD so content cannot close the script tag", () => {
    const output = serializeJsonLd({ text: "</script><script>alert(1)</script>" });

    expect(output).not.toContain("<");
    expect(JSON.parse(output).text).toBe("</script><script>alert(1)</script>");
  });

  it("builds page metadata with canonical, open graph, and twitter images", () => {
    const metadata = pageMetadata({
      title: "Leaf & Mow | Latten Lawncare",
      description: "Leaf cleanup plus a mow",
      path: "/services/leaf-and-mow",
      keywords: ["fall cleanup"],
    });

    expect(metadata.alternates?.canonical).toBe("/services/leaf-and-mow");
    expect(metadata.keywords).toEqual(["fall cleanup"]);
    expect(metadata.openGraph).toMatchObject({
      url: `${siteBaseUrl}/services/leaf-and-mow`,
      siteName: business.name,
      locale: "en_US",
      type: "website",
    });
    expect(metadata.openGraph?.images).toBeDefined();
    expect(metadata.twitter?.images).toBeDefined();
  });

  it("uses the bare site url for the homepage", () => {
    const metadata = pageMetadata({ title: "Home", description: "Home", path: "/" });
    expect(metadata.openGraph?.url).toBe(siteBaseUrl);
  });
});
