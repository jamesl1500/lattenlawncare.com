import type { Metadata } from "next";
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
    "Latten Lawncare provides reliable lawn cutting, edging, and weed control in Lorain County. Front and backyard cuts start at $40 for small to medium lawns.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Lorain County lawn care",
    "lawn cutting Lorain County",
    "edging service",
    "weed control",
    "affordable lawn mowing",
    "Latten Lawncare",
  ],
  openGraph: {
    url: "https://www.lattenlawncare.com",
    siteName: "Latten Lawncare",
    title: "Latten Lawncare",
    description:
      "Local lawn cutting, edging, and weed control for Lorain County homeowners.",
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
      "Lawn cutting, edging, and weed control for homeowners across Lorain County.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
