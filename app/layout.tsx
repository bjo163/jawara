import type { Metadata } from "next";
import "./globals.css";
import { ApiMetricsDisplay } from "@/components/dev/api-metrics-display";
import { baseMetadata, viewport } from "@/lib/seo";

export const metadata: Metadata = baseMetadata;

export { viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ISP",
              name: "Jawara-Net",
              alternateName: "Jawara-Net Indonesia",
              description:
                "Internet Service Provider terbaik Indonesia dengan koneksi fiber optic super cepat hingga 1 Gbps",
              url: "https://jawara-net.com",
              logo: "https://jawara-net.com/placeholder-logo.svg",
              image: "https://jawara-net.com/hero-bg.png",
              telephone: "+62-xxx-xxx-xxxx",
              email: "info@jawara-net.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ID",
                addressRegion: "Jakarta",
              },
              areaServed: ["Jakarta", "Bandung", "Surabaya", "Indonesia"],
              serviceType: ["Internet Service Provider", "Fiber Optic Internet", "Business Internet"],
              priceRange: "Rp 100.000 - Rp 2.000.000",
              openingHours: "Mo-Su 00:00-24:00",
              sameAs: [
                "https://twitter.com/jawaranet",
                "https://facebook.com/jawaranet",
                "https://instagram.com/jawaranet",
              ],
            }),
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Internet Service Provider",
              provider: {
                "@type": "Organization",
                name: "Jawara-Net",
              },
              description: "Layanan internet fiber optic tercepat dengan teknologi terdepan untuk rumahan dan bisnis",
              areaServed: {
                "@type": "Country",
                name: "Indonesia",
              },
            }),
          }}
        />
      </head>
      <body>
        {children}
        {/* Development-only API monitoring */}
        <ApiMetricsDisplay />
      </body>
    </html>
  );
}
