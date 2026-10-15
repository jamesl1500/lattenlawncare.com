import type { Metadata, Viewport } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lattenlawncare.com"),
  title: "Latten Lawncare | Affordable Lawn Care in Lorain County",
  description:
    "Latten Lawncare provides lawn mowing, edging, and leaf cleanup in Lorain County, OH. Front and back yard service is $40 for small to medium lawns. Call (216) 889-7822.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Lorain County lawn care",
    "lawn mowing Lorain County",
    "lawn mowing Elyria",
    "edging service",
    "leaf cleanup Lorain County",
    "affordable lawn mowing",
    "Latten Lawncare",
  ],
  openGraph: {
    url: "https://www.lattenlawncare.com",
    siteName: "Latten Lawncare",
    title: "Latten Lawncare",
    description:
      "Local lawn mowing, edging, and leaf cleanup for Lorain County homeowners. $40 for small to medium lawns.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Latten Lawncare serving Lorain County",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Latten Lawncare",
    description:
      "Lawn mowing, edging, and leaf cleanup for homeowners across Lorain County. $40 for small to medium lawns.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#124f30",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
