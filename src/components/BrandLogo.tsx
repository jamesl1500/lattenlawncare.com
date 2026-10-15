import Image from "next/image";

type BrandLogoProps = {
  /** Use the light-text version on dark backgrounds such as the footer. */
  onDark?: boolean;
  className?: string;
  preload?: boolean;
};

// The horizontal lockup is 612 x 200 (see public/brand). Height is set in CSS.
export default function BrandLogo({ onDark = false, className, preload }: BrandLogoProps) {
  return (
    <Image
      src={onDark ? "/brand/logo-horizontal-on-dark.svg" : "/brand/logo-horizontal.svg"}
      alt="Latten Lawncare"
      width={612}
      height={200}
      className={className}
      preload={preload}
    />
  );
}
