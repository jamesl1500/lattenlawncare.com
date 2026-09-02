import { describe, expect, it } from "vitest";
import robots from "@/app/robots";

describe("robots", () => {
  it("allows crawling and points to the sitemap", () => {
    const result = robots();

    expect(result.rules).toEqual({ userAgent: "*", allow: "/" });
    expect(result.sitemap).toBe("https://www.lattenlawncare.com/sitemap.xml");
    expect(result.host).toBe("https://www.lattenlawncare.com");
  });
});
