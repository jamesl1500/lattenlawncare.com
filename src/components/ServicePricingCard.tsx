import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import { IconCheck, IconLeaf, IconPhone } from "@/components/icons";
import { business } from "@/lib/business";
import type { ServiceInfo } from "@/lib/services";

type ServicePricingCardProps = {
  service: ServiceInfo;
  trackingLabel: string;
  showDetailsLink?: boolean;
};

export default function ServicePricingCard({
  service,
  trackingLabel,
  showDetailsLink = true,
}: ServicePricingCardProps) {
  const featured = Boolean(service.badge);

  return (
    <div className={`pricing-card${featured ? " pricing-card--leaf" : ""}`}>
      {service.badge ? (
        <span className="pricing-card__badge">
          <IconLeaf />
          {service.badge}
        </span>
      ) : null}
      <p className="pricing-card__name">{service.name}</p>
      <div className="pricing-card__price">
        <strong>${service.price}</strong>
        <span>{service.priceNote}</span>
      </div>
      <ul className="checklist">
        {service.includes.map((item) => (
          <li key={item}>
            <IconCheck />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <TrackedLink
        className={`btn ${featured ? "btn--primary" : "btn--ghost"} btn--block`}
        href={business.phoneHref}
        trackingEvent="conversion_call_click"
        trackingLabel={trackingLabel}
      >
        <IconPhone />
        {`Book ${service.shortName} for $${service.price}`}
      </TrackedLink>
      {showDetailsLink ? (
        <p className="pricing-card__fine">
          <Link href={`/services/${service.slug}`}>
            {`${service.shortName} details`}
          </Link>
        </p>
      ) : null}
    </div>
  );
}
