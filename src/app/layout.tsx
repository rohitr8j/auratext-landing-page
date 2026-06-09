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
    default: "AuraText - Don't Let AI Guess | AI Requirement Discovery for Windows",
  },
  description:
    "AuraText asks the questions ChatGPT, Claude, Cursor, and Gemini never ask. Before you hit send, AuraText surfaces missing requirements, hidden assumptions, and unclear goals - so your first AI output is your best.",
  keywords: [
    "AuraText",
    "Auratext",
    "auratext",
    "AI requirement discovery",
    "AI workflow clarification",
    "better AI results",
    "AI missing requirements",
    "AI thinking layer",
    "AI overlay Windows",
    "ChatGPT better results",
    "Claude better results",
    "Cursor AI workflow",
    "AI prompt discovery",
    "Windows AI tool",
    "Windows 10",
    "Windows 11",
    "AI requirement discovery tool",
    "structured AI requests",
    "AI output quality",
    "Yash Raj",
    "auratxt",
  ],
  authors: [{ name: "Yash Raj" }, { name: "AuraText" }],
  creator: "Yash Raj",
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
    title: "AuraText - Don't Let AI Guess",
    siteName: "AuraText",
    description:
      "AuraText asks the questions ChatGPT, Claude, Cursor, and Gemini never ask. Surface missing requirements before AI generates anything. Free for Windows.",
    url: "https://auratxt.com/",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    title: "AuraText - Don't Let AI Guess",
    creator: "@auratext",
    site: "@auratext",
    description:
      "AuraText surfaces missing requirements before ChatGPT, Claude, or Cursor generates anything. Better input = better output. Free for Windows.",
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
    alternateName: "Auratext",
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
      "AuraText is an AI requirement discovery tool for Windows. Before you send a request to ChatGPT, Claude, Cursor, or Gemini, AuraText asks the questions those tools never ask - surfacing missing requirements, hidden assumptions, and unclear goals so your first output is your best.",
    url: "https://auratxt.com/",
    creator: {
      "@type": "Person",
      name: "Yash Raj",
    },
    author: {
      "@type": "Person",
      name: "Yash Raj",
    },
    publisher: {
      "@type": "Organization",
      name: "AuraText",
    },
    screenshot: "https://auratxt.com/opengraph-image",
    softwareVersion: "1.0",
    releaseNotes: "AI requirement discovery layer for Windows. Surfaces missing requirements before AI generates anything.",
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AuraText",
    alternateName: "Auratext",
    url: "https://auratxt.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://auratxt.com/images/favicon.png",
      width: 192,
      height: 192,
    },
    description:
      "AuraText is an AI requirement discovery tool built by Yash Raj. It surfaces missing requirements before ChatGPT, Claude, Cursor, or Gemini generates anything - so users get better outputs on the first try.",
    founder: {
      "@type": "Person",
      name: "Yash Raj",
    },
    sameAs: [
      "https://twitter.com/auratext",
      "https://x.com/auratext",
      "https://www.producthunt.com/posts/auratxt",
      "https://github.com/Y4shr4j",
      "https://www.reddit.com/r/AuraText/",
      "https://www.linkedin.com/company/auratext",
      "https://www.instagram.com/auratext.app/",
      "https://youtube.com/@auratext_ai_app",
      "https://discord.com/invite/NamyGv3ecs",
    ],
  };

  // WebSite schema — the primary signal Google uses to show sitelinks in search results
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AuraText",
    alternateName: "Auratext",
    url: "https://auratxt.com",
    description: "AuraText surfaces missing requirements before AI generates anything - so your first output is your best. Free for Windows.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://auratxt.com/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteData),
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
