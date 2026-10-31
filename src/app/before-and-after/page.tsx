import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import MobileCallBar from "@/components/MobileCallBar";
import TrackedLink from "@/components/TrackedLink";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import { IconMail, IconPhone } from "@/components/icons";
import { breadcrumbJsonLd, business, businessId, pageMetadata } from "@/lib/business";
import { galleryProjects } from "@/lib/gallery";
import { siteBaseUrl } from "@/lib/locations";
import { getService } from "@/lib/services";

export const metadata: Metadata = pageMetadata({
  title: "Before & After Photos: Leaf Cleanup & Lawn Mowing | Latten Lawncare",
  description:
    "Before and after photos of fall leaf cleanups and lawn mowing by Latten Lawncare in Lorain County, OH. See the difference, then book your yard.",
  path: "/before-and-after",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Before & After", path: "/before-and-after" },
];

const leafAndMow = getService("leaf-and-mow")!;

export default function BeforeAndAfterPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Latten Lawncare Before and After Photos",
        url: `${siteBaseUrl}/before-and-after`,
        about: { "@id": businessId },
        hasPart: galleryProjects.flatMap((project) => [
          {
            "@type": "ImageObject",
            contentUrl: `${siteBaseUrl}${project.before.src}`,
            caption: project.before.alt,
          },
          {
            "@type": "ImageObject",
            contentUrl: `${siteBaseUrl}${project.after.src}`,
            caption: project.after.alt,
          },
        ]),
      },
      breadcrumbJsonLd(breadcrumbs),
    ],
  };

  return (
    <div className="site-shell">
      <SiteHeader />
      <JsonLd data={structuredData} />
      <main id="main-content">
        <section className="section reveal">
          <Breadcrumbs items={breadcrumbs} />
          <p className="eyebrow">Our Work</p>
          <h1>Before &amp; After Lawn Care Photos</h1>
          <p className="hero__lead">
            See the difference a Latten Lawncare visit makes for Lorain County
            yards. Drag the slider on any photo to compare. Fall leaf cleanups
            are up first, followed by mowing and edging work.
          </p>
        </section>

        <section className="section section--highlight reveal reveal--delay-1" id="gallery">
          <h2 className="sr-only">Project gallery</h2>
          <BeforeAfterGallery projects={galleryProjects} />
        </section>

        <section className="section section--dark reveal reveal--delay-2" id="contact">
          <div className="contact-box">
            <p className="eyebrow">Want Results Like These?</p>
            <h2>Book your yard next</h2>
            <p className="contact-box__lead">
              {`Leaf & Mow is $${leafAndMow.price} for most small to medium yards. `}
              <Link className="inline-link" href="/services/leaf-and-mow">
                See what&apos;s included
              </Link>
              .
            </p>
            <div className="contact-box__links">
              <TrackedLink
                className="btn btn--accent"
                href={business.phoneHref}
                trackingEvent="conversion_call_click"
                trackingLabel="Gallery Call"
              >
                <IconPhone />
                {business.phoneDisplay}
              </TrackedLink>
              <TrackedLink
                className="btn btn--outline"
                href={business.emailHref}
                trackingEvent="conversion_email_click"
                trackingLabel="Gallery Email"
              >
                <IconMail />
                {business.email}
              </TrackedLink>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCallBar />
    </div>
  );
}
