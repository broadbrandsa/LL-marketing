import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Poppins is the Liquid Lighting brand typeface (Shopify theme: header/body/menu).
const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const poppinsHeading = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Liquid Lighting · Launch Marketing Plan",
  description:
    "A phased digital launch and growth strategy for Liquid Lighting's direct-to-consumer and trade storefront. Prepared by Broadbrand.",
  applicationName: "Liquid Lighting Launch Proposal",
  authors: [{ name: "Broadbrand · Digital Agency" }],
  keywords: [
    "Liquid Lighting",
    "launch marketing plan",
    "Broadbrand",
    "ecommerce",
    "paid search",
    "paid social",
    "SEO",
  ],
  openGraph: {
    title: "Liquid Lighting · Launch Marketing Plan",
    description:
      "A phased digital launch and growth strategy for Liquid Lighting. Prepared by Broadbrand.",
    type: "website",
    siteName: "Liquid Lighting Launch Proposal",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${poppins.variable} ${poppinsHeading.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
