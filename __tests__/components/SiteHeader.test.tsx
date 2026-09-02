import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SiteHeader from "@/components/SiteHeader";

describe("SiteHeader", () => {
  it("renders the brand and primary navigation links", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: /latten lawncare/i })).toHaveAttribute("href", "/");

    const primaryNav = screen.getByRole("navigation", { name: "Primary" });
    expect(within(primaryNav).getByRole("link", { name: "Locations" })).toHaveAttribute(
      "href",
      "/locations",
    );
    expect(within(primaryNav).getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
  });

  it("opens and closes the mobile navigation panel", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    const toggle = screen.getByRole("button", { name: /open menu/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /close menu/i }));
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
