import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function IconLeaf(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 19c8.5 0 14-5.5 14-14 0 0-9 0-13 4S4 19 5 19Z" />
      <path d="M5 19c1-4 3.5-8 8-10.5" />
    </svg>
  );
}

export function IconMower(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="7" cy="17" r="2.4" />
      <circle cx="17" cy="17" r="2.4" />
      <path d="M9.2 17h5.6" />
      <path d="M12 17V9.5a2 2 0 0 1 2-2h1.8" />
      <path d="M8.5 9.5h6.6l2.2 3.3" />
      <path d="M5.5 12.8 8.5 9.5" />
    </svg>
  );
}

export function IconEdge(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 18h18" />
      <path d="M3 18V8" />
      <path d="M7 18v-4" />
      <path d="M11 18v-7" />
      <path d="M15 18v-3" />
      <path d="M19 18v-6" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 5 6v5.2c0 4.4 3 7.7 7 9.3 4-1.6 7-4.9 7-9.3V6l-7-2.5Z" />
      <path d="m9.2 12 2 2 3.6-4" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5.3 4h3l1.4 4.2-2 1.6a11.5 11.5 0 0 0 5.5 5.5l1.6-2 4.2 1.4v3a1.6 1.6 0 0 1-1.7 1.6A16.4 16.4 0 0 1 3.7 5.7 1.6 1.6 0 0 1 5.3 4Z" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m4.5 12.5 4.5 4.5 10.5-11" />
    </svg>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function IconQuote(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M9.6 6.4C6.1 8 4 10.9 4 14.3c0 2.4 1.6 4 3.6 4 1.9 0 3.3-1.4 3.3-3.2 0-1.7-1.2-3-2.8-3.1.3-1.6 1.6-3.1 3.4-4Zm9.4 0c-3.5 1.6-5.6 4.5-5.6 7.9 0 2.4 1.6 4 3.6 4 1.9 0 3.3-1.4 3.3-3.2 0-1.7-1.2-3-2.8-3.1.3-1.6 1.6-3.1 3.4-4Z" />
    </svg>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </svg>
  );
}

export function IconSpark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="m6 6 2.5 2.5" />
      <path d="m15.5 15.5 2.5 2.5" />
      <path d="m18 6-2.5 2.5" />
      <path d="m8.5 15.5-2.5 2.5" />
    </svg>
  );
}
