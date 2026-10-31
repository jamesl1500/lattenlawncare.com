import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import BeforeAndAfterPage, { metadata } from "@/app/before-and-after/page";
import { galleryProjects } from "@/lib/gallery";

describe("Before and after page", () => {
  it("renders a heading and a slider for every gallery project", () => {
    render(<BeforeAndAfterPage />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/before & after/i);
    expect(screen.getAllByRole("slider")).toHaveLength(galleryProjects.length);
    expect(metadata.alternates?.canonical).toBe("/before-and-after");
  });

  it("links visitors on to the Leaf & Mow page", () => {
    render(<BeforeAndAfterPage />);

    expect(screen.getByRole("link", { name: /see what's included/i })).toHaveAttribute(
      "href",
      "/services/leaf-and-mow",
    );
  });
});
