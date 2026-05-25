import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Murmur de Izvor | Restaurant elegant în Drăsliceni, Moldova",
    template: "%s | Murmur de Izvor",
  },
  description:
    "Restaurant elegant și modern în Drăsliceni, Moldova, potrivit pentru cine rafinate, evenimente private și întâlniri corporate.",
  keywords: [
    "restaurant Moldova",
    "restaurant Drăsliceni",
    "evenimente Moldova",
    "restaurant elegant",
    "corporate events Moldova",
    "nunți Moldova",
    "Murmur de Izvor",
  ],
  authors: [{ name: "Murmur de Izvor" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: SITE.url,
    siteName: "Murmur de Izvor",
    title: "Murmur de Izvor | Restaurant elegant în Drăsliceni, Moldova",
    description:
      "Un spațiu elegant pentru experiențe culinare, seri memorabile și evenimente speciale.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Murmur de Izvor - Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Murmur de Izvor",
    description: "Rafinament în mijlocul naturii.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Murmur de Izvor",
              image: `${SITE.url}/images/og-image.jpg`,
              url: SITE.url,
              telephone: SITE.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Drasliceni - Ratus",
                postalCode: "MD-4821",
                addressLocality: "Drăsliceni",
                addressCountry: "MD",
              },
              servesCuisine: "European",
              priceRange: "$$$",
            }),
          }}
        />
      </body>
    </html>
  );
}
