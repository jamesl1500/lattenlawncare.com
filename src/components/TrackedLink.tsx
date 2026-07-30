"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, MouseEvent } from "react";

type TrackedLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    trackingEvent: string;
    trackingLabel?: string;
  };

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export default function TrackedLink({
  trackingEvent,
  trackingLabel,
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined") {
      const payload = {
        event: trackingEvent,
        link_text: trackingLabel ?? (typeof children === "string" ? children : undefined),
        href: String(props.href),
      };

      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push(payload);

      if (typeof window.gtag === "function") {
        window.gtag("event", trackingEvent, payload);
      }
    }

    onClick?.(event);
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
