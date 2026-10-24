import TrackedLink from "@/components/TrackedLink";
import { IconChat, IconPhone } from "@/components/icons";
import { business, defaultTextMessage, smsLink } from "@/lib/business";

export default function MobileCallBar() {
  return (
    <div className="mobile-cta-bar" role="complementary" aria-label="Quick contact">
      <TrackedLink
        className="btn btn--primary"
        href={business.phoneHref}
        trackingEvent="conversion_call_click"
        trackingLabel="Sticky Bar Call"
      >
        <IconPhone />
        Call Now
      </TrackedLink>
      <TrackedLink
        className="btn btn--ghost"
        href={smsLink(defaultTextMessage)}
        trackingEvent="conversion_text_click"
        trackingLabel="Sticky Bar Text"
      >
        <IconChat />
        Text Us
      </TrackedLink>
    </div>
  );
}
