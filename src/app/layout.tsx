import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Providers } from "#/src/components/Providers";
import favicon from "#/public/images/favicon.png";
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
    "AuraText - Free AI-powered text assistant for Windows. Generate, edit, and insert AI text with intelligent cursor locking. Supports Gemini, OpenAI, Perplexity. Download for Windows 10/11.",
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
  icons: {
    icon: [
      { url: favicon.src, sizes: "32x32", type: "image/png" },
      { url: favicon.src, sizes: "16x16", type: "image/png" },
      { url: "/images/favicon.png", sizes: "192x192", type: "image/png" },
      { url: "/images/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/images/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/images/favicon.png",
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://auratxt.com/"),
  openGraph: {
    title: "AuraText | AI-Powered Text Assistant for Windows",
    siteName: "AuraText",
    description:
      "AuraText - Free AI-powered text assistant for Windows. Generate, edit, and insert AI text with intelligent cursor locking. Supports Gemini, OpenAI, Perplexity. Download for Windows 10/11.",
    url: "https://auratxt.com/",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    title: "AuraText | AI-Powered Text Assistant for Windows",
    creator: "@auratext",
    site: "@auratext",
    description:
      "AuraText - Free AI-powered text assistant for Windows. Generate, edit, and insert AI text with intelligent cursor locking. Supports Gemini, OpenAI, Perplexity. Download for Windows 10/11.",
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://auratxt.com/",
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
      "AuraText - Free AI-powered text assistant for Windows. Generate, edit, and insert AI text with intelligent cursor locking. Supports Gemini, OpenAI, Perplexity. Download for Windows 10/11.",
    url: "https://auratxt.com/",
    author: {
      "@type": "Organization",
      name: "AuraText",
    },
    publisher: {
      "@type": "Organization",
      name: "AuraText",
    },
    screenshot: "https://auratxt.com/opengraph-image",
    softwareVersion: "1.0",
    releaseNotes: "AI-powered text assistant for Windows with intelligent cursor locking and seamless text insertion.",
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AuraText",
    url: "https://auratxt.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://auratxt.com/images/favicon.png",
      width: 192,
      height: 192,
    },
    description:
      "AuraText - Free AI-powered text assistant for Windows. Generate, edit, and insert AI text with intelligent cursor locking. Supports Gemini, OpenAI, Perplexity. Download for Windows 10/11.",
    sameAs: [
      "https://twitter.com/auratext",
      "https://www.producthunt.com/posts/auratxt",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Favicon - Multiple sizes for better Google indexing and display */}
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.png" />
        <link rel="shortcut icon" href="/images/favicon.png" />
        {/* Primary favicon.ico for Google (fallback) */}
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        {/* Preconnect for fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap"
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
