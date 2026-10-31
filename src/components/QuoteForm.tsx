"use client";

import type { FormEvent } from "react";
import { IconChat, IconMail } from "@/components/icons";
import { business, smsLink } from "@/lib/business";
import { locations } from "@/lib/locations";

const serviceOptions = ["Leaf cleanup", "Lawn mowing & edging", "Both"];

/**
 * There is no backend, so the form builds a ready-to-send text (or email)
 * from what the customer typed and opens their messaging app.
 */
export function buildQuoteMessage(data: FormData) {
  const field = (name: string) => String(data.get(name) ?? "").trim();
  const lines = [
    `Hi James, I'd like a quote for: ${field("service") || "lawn care"}.`,
    field("name") && `Name: ${field("name")}`,
    field("address") && `Address: ${field("address")}${field("city") ? `, ${field("city")}` : ""}`,
    !field("address") && field("city") && `City: ${field("city")}`,
    field("notes") && `Notes: ${field("notes")}`,
  ];
  return lines.filter(Boolean).join("\n");
}

export default function QuoteForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const channel = submitter?.value === "email" ? "email" : "text";
    const message = buildQuoteMessage(new FormData(event.currentTarget));

    const payload = { event: `conversion_quote_${channel}`, link_text: "Quote Form" };
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push(payload);
    if (typeof window.gtag === "function") {
      window.gtag("event", payload.event, payload);
    }

    window.location.href =
      channel === "email"
        ? `mailto:${business.email}?subject=${encodeURIComponent("Lawn care quote request")}&body=${encodeURIComponent(message)}`
        : smsLink(message);
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit} aria-labelledby="quote-heading">
      <div className="quote-form__row">
        <label className="quote-form__field">
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label className="quote-form__field">
          <span>City</span>
          <select name="city" defaultValue="" required>
            <option value="" disabled>
              Choose your city
            </option>
            {locations.map((location) => (
              <option key={location.slug} value={`${location.city}, OH`}>
                {location.city}
              </option>
            ))}
            <option value="Other Lorain County town">Somewhere else in Lorain County</option>
          </select>
        </label>
      </div>

      <label className="quote-form__field">
        <span>Street address</span>
        <input name="address" type="text" autoComplete="street-address" placeholder="So James can look at your yard" />
      </label>

      <fieldset className="quote-form__field quote-form__services">
        <legend>What do you need?</legend>
        {serviceOptions.map((option, index) => (
          <label key={option} className="quote-form__choice">
            <input type="radio" name="service" value={option} defaultChecked={index === 0} />
            <span>{option}</span>
          </label>
        ))}
      </fieldset>

      <label className="quote-form__field">
        <span>
          Anything else? <em>(optional)</em>
        </span>
        <textarea name="notes" rows={2} placeholder="Gate code, dog in the yard, best day, etc." />
      </label>

      <div className="quote-form__actions">
        <button type="submit" value="text" className="btn btn--accent">
          <IconChat />
          Text my quote request
        </button>
        <button type="submit" value="email" className="btn btn--outline">
          <IconMail />
          Email it instead
        </button>
      </div>
      <p className="quote-form__fine">
        Opens your phone&apos;s messages or email app with your details filled in. Nothing is sent until you hit send.
      </p>
    </form>
  );
}
