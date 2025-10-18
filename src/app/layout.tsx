import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Providers } from "#/src/components/Providers";
import favicon from "#/public/images/favicon.png";
import SummaryLargeImage from "#/public/images/summary_large_image.png";
import Cookie from "../components/Cookie";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

import "./globals.scss";
import Footer from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export const viewport: Viewport = {
  themeColor: "#3b82f6",
  colorScheme: "dark",
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title: {
    template: "AuraText | %s",
    default: "AuraText | AI-Powered Text Assistant for Windows",
  },
  description:
    "AuraText is an AI-powered text assistant for Windows 10/11. Generate, edit, and insert AI text seamlessly into any application with intelligent cursor locking.",
  icons: [{ rel: "icon", url: favicon.src }],
  metadataBase: new URL("https://auratext.app/"),
  openGraph: {
    title: "AuraText | AI-Powered Text Assistant for Windows",
    siteName: "AuraText",
    description:
      "AuraText is an AI-powered text assistant for Windows 10/11. Generate, edit, and insert AI text seamlessly into any application with intelligent cursor locking.",
    url: "https://auratext.app/",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "AuraText | AI-Powered Text Assistant for Windows",
      },
    ],
  },
  twitter: {
    title: "AuraText | AI-Powered Text Assistant for Windows",
    creator: "@auratext",
    site: "@auratext",
    description:
      "AuraText is an AI-powered text assistant for Windows 10/11. Generate, edit, and insert AI text seamlessly into any application with intelligent cursor locking.",
    card: "summary_large_image",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "AuraText | AI-Powered Text Assistant for Windows",
      },
    ],
  },
  alternates: {
    canonical: "https://auratext.app/",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: 'AuraText Landing Page',
                page_location: window.location.href,
              });
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning={true} style={{ backgroundColor: '#000000' }}>
        <Providers>
          <Cookie />
          <Banner />
          <Navbar />
          <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
