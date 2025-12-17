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
    default: "AuraText (Auratext) | AI Prompt Optimizer for Windows | Better Prompts, Better Results",
  },
  description:
    "AuraText (also known as Auratext) is an AI prompt optimizer for Windows built by Yash Raj. Transform your AI prompts with powerful optimization engine. Use proven frameworks (RISEN, RTF, COSTAR), test across multiple AI models, and get better results—anywhere you type.",
  keywords: [
    "AuraText",
    "Auratext",
    "auratext",
    "prompt optimizer",
    "prompt engineering",
    "AI prompt tool",
    "prompt frameworks",
    "RISEN framework",
    "RTF framework",
    "COSTAR framework",
    "Windows AI tool",
    "multi-model testing",
    "AI writing tool",
    "Windows 10",
    "Windows 11",
    "prompt quality",
    "AI optimization",
    "Yash Raj",
  ],
  authors: [{ name: "Yash Raj" }, { name: "AuraText Team" }],
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
    title: "AuraText (Auratext) | AI Prompt Optimizer for Windows | Better Prompts, Better Results",
    siteName: "AuraText",
    description:
      "Transform your AI prompts with AuraText's powerful optimization engine. Use proven frameworks (RISEN, RTF, COSTAR), test across multiple AI models, and get better results—anywhere you type on Windows.",
    url: "https://auratxt.com/",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    title: "AuraText (Auratext) | AI Prompt Optimizer for Windows | Better Prompts, Better Results",
    creator: "@auratext",
    site: "@auratext",
    description:
      "AuraText (also known as Auratext) is an AI prompt optimizer for Windows built by Yash Raj. Transform your AI prompts with powerful optimization engine. Use proven frameworks (RISEN, RTF, COSTAR), test across multiple AI models, and get better results—anywhere you type.",
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
      "AuraText (also known as Auratext) is an AI prompt optimizer for Windows built by Yash Raj. Transform your AI prompts with powerful optimization engine. Use proven frameworks (RISEN, RTF, COSTAR), test across multiple AI models, and get better results—anywhere you type.",
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
    releaseNotes: "AI prompt optimizer for Windows with proven frameworks, multi-model testing, and intelligent text insertion.",
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
      "AuraText (also known as Auratext) is an AI prompt optimizer for Windows built by Yash Raj. Transform your AI prompts with powerful optimization engine. Use proven frameworks (RISEN, RTF, COSTAR), test across multiple AI models, and get better results—anywhere you type.",
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
