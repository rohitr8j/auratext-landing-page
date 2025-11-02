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
  keywords: [
    "AuraText",
    "AI text assistant",
    "Windows text assistant",
    "AI writing tool",
    "text generator",
    "Windows 10",
    "Windows 11",
    "AI copilot",
    "writing assistant",
    "text editor AI",
    "productivity tool",
    "AI writing software",
  ],
  authors: [{ name: "AuraText Team" }],
  creator: "AuraText",
  publisher: "AuraText",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    { rel: "icon", url: favicon.src },
    { rel: "apple-touch-icon", url: favicon.src },
  ],
  manifest: "/manifest.json",
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
  category: "technology",
  applicationName: "AuraText",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }: LayoutProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AuraText",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Windows",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      ratingCount: "19",
    },
    description:
      "AuraText is an AI-powered text assistant for Windows 10/11. Generate, edit, and insert AI text seamlessly into any application with intelligent cursor locking.",
    url: "https://auratext.app/",
    author: {
      "@type": "Organization",
      name: "AuraText",
    },
    publisher: {
      "@type": "Organization",
      name: "AuraText",
    },
    screenshot: "https://auratext.app/images/summary_large_image.png",
    softwareVersion: "1.0",
    releaseNotes: "AI-powered text assistant for Windows with intelligent cursor locking and seamless text insertion.",
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AuraText",
    url: "https://auratext.app/",
    logo: "https://auratext.app/images/summary_large_image.png",
    description:
      "AuraText is an AI-powered text assistant for Windows 10/11. Generate, edit, and insert AI text seamlessly into any application with intelligent cursor locking.",
    sameAs: [
      "https://twitter.com/auratext",
      "https://www.producthunt.com/posts/auratxt",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationData),
          }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZNHE967CYV"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZNHE967CYV', {
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
