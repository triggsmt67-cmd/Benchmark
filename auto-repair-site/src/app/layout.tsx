import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/widgets/header";
import { Footer } from "@/components/widgets/footer";
import { generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.benchmarkmissoula.com"),
  title: {
    default: siteConfig.businessName,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: "A trusted local shop delivering precise diagnostics, honest recommendations, and repairs built to last.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.businessName,
    description: "Auto Repair Done Right — The First Time.",
    url: "/",
    siteName: siteConfig.businessName,
    locale: "en_US",
    type: "website",
  },
  verification: {
    other: {
      "msvalidate.01": "6C9FD472D8F89E45337786FC636654D3",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = [
    generateWebSiteSchema(),
    generateLocalBusinessSchema()
  ];

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WBTQJ8DS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', 'GTM-WBTQJ8DS');
            `,
          }}
        />

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
