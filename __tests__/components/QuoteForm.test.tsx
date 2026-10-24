import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import QuoteForm, { buildQuoteMessage } from "@/components/QuoteForm";
import { locations } from "@/lib/locations";

describe("QuoteForm", () => {
  it("asks for name, city, address, and service with text and email options", () => {
    render(<QuoteForm />);

    expect(screen.getByLabelText(/your name/i)).toBeRequired();
    expect(screen.getByLabelText(/street address/i)).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "Leaf cleanup" })).toBeChecked();
    for (const location of locations) {
      expect(screen.getByRole("option", { name: location.city })).toBeInTheDocument();
    }
    expect(screen.getByRole("button", { name: /text my quote request/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /email it instead/i })).toBeInTheDocument();
  });

  it("builds a readable message from the form fields, skipping blanks", () => {
    const data = new FormData();
    data.set("name", "Pat");
    data.set("city", "Elyria, OH");
    data.set("address", " 12 Elm St ");
    data.set("service", "Both");
    data.set("notes", "");

    expect(buildQuoteMessage(data)).toBe(
      "Hi James, I'd like a quote for: Both.\nName: Pat\nAddress: 12 Elm St, Elyria, OH",
    );
  });
});
