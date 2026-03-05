import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/widgets/header";
import { Footer } from "@/components/widgets/footer";
import { generateLocalBusinessSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.businessName,
  description: "A trusted local shop delivering precise diagnostics, honest recommendations, and repairs built to last.",
  alternates: {
    canonical: "https://www.premiumauto.local",
  },
  openGraph: {
    title: siteConfig.businessName,
    description: "Auto Repair Done Right — The First Time.",
    url: "https://www.premiumauto.local",
    siteName: siteConfig.businessName,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = generateLocalBusinessSchema();

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
