import TrackedLink from "@/components/TrackedLink";
import { IconMail, IconPhone } from "@/components/icons";

export default function MobileCallBar() {
  return (
    <div className="mobile-cta-bar" role="complementary" aria-label="Quick contact">
      <TrackedLink
        className="btn btn--primary"
        href="tel:+14409218245"
        trackingEvent="conversion_call_click"
        trackingLabel="Sticky Bar Call"
      >
        <IconPhone />
        Call Now
      </TrackedLink>
      <TrackedLink
        className="btn btn--ghost"
        href="mailto:hello@lattenlawncare.com"
        trackingEvent="conversion_email_click"
        trackingLabel="Sticky Bar Email"
      >
        <IconMail />
        Email
      </TrackedLink>
    </div>
  );
}
