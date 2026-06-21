import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Providers } from "#/src/components/Providers";
import favicon from "#/public/images/favicon.png";

import "./globals.scss";

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
    default: "AuraText — The Prompt-less Engine for AI | Tell It What You Want. It Figures Out the Rest.",
  },
  description:
    "AuraText is the prompt-less engine for AI. Describe what you want in plain language. AuraText discovers what's missing, figures out what AI needs, and sends a complete request to ChatGPT, Claude, Gemini, or Cursor — automatically.",
  keywords: [
    "AuraText",
    "Auratext",
    "auratext",
    "auratxt",
    "prompt-less AI",
    "prompt-less engine",
    "how to get better AI results",
    "how to stop rewriting AI outputs",
    "AI tool for better results",
    "Windows AI overlay",
    "AI overlay Windows",
    "ChatGPT better results",
    "Claude better results",
    "Cursor AI workflow",
    "Gemini better results",
    "how to use AI without prompt engineering",
    "AI without prompts",
    "AI request builder",
    "AI output quality",
    "stop rewriting AI outputs",
    "Windows AI productivity tool",
    "Windows 10 AI",
    "Windows 11 AI",
    "AI tool for developers",
    "AI tool for writers",
    "AI tool for founders",
    "Yash Raj",
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
    title: "AuraText — The Prompt-less Engine for AI",
    siteName: "AuraText",
    description:
      "Tell AuraText what you want. AuraText figures out what AI needs. A prompt-less engine for AI that turns goals into AI-ready requests — free for Windows.",
    url: "https://auratxt.com/",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    title: "AuraText — The Prompt-less Engine for AI",
    creator: "@auratext",
    site: "@auratext",
    description:
      "Tell AuraText what you want. AuraText figures out what AI needs. Stop writing prompts. Start getting results. Free for Windows.",
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
      "AuraText is a prompt-less engine for AI. You tell it what you want to build, write, or achieve. AuraText discovers what's missing, applies decision frameworks, and sends a complete request to ChatGPT, Claude, Gemini, or Cursor — automatically. No prompt engineering required.",
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
    releaseNotes: "Prompt-less engine for AI. Tell AuraText what you want. AuraText figures out what AI needs.",
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
      "AuraText is a prompt-less engine for AI, built by Yash Raj. It turns goals into AI-ready requests — automatically. Tell AuraText what you want to build, write, or achieve, and it figures out what ChatGPT, Claude, Gemini, or Cursor needs to deliver the result.",
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
      "https://peerlist.io/yash",
    ],
  };

  // WebSite schema — the primary signal Google uses to show sitelinks in search results
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AuraText",
    alternateName: "Auratext",
    url: "https://auratxt.com",
    description: "AuraText is the prompt-less engine for AI. Tell AuraText what you want. AuraText figures out what AI needs. Free for Windows.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://auratxt.com/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // FAQPage schema — enables People Also Ask eligibility and direct AI citation (AEO/GEO)
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is AuraText?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AuraText is a prompt-less engine for AI. You tell it what you want to build, write, or achieve. AuraText discovers what's missing, figures out what AI needs, and sends a complete request to ChatGPT, Claude, Gemini, or Cursor — automatically. No prompt engineering required.",
        },
      },
      {
        "@type": "Question",
        name: "Is AuraText just another prompt rewriter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. A prompt rewriter polishes what you wrote. AuraText works backwards from what you want to achieve — it asks the right questions, discovers what's missing, and builds a complete request for your AI tool. You never have to think about how to phrase it.",
        },
      },
      {
        "@type": "Question",
        name: "How is AuraText different from prompt engineering?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AuraText eliminates the need for prompt engineering entirely. Prompt engineering is something you have to learn, remember, and apply manually every time. With AuraText, you describe what you want, and the rest happens automatically and invisibly before AI ever sees your request.",
        },
      },
      {
        "@type": "Question",
        name: "Does AuraText work with ChatGPT, Claude, and Gemini?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AuraText works with ChatGPT, Claude, Gemini, Cursor, and Perplexity. It sits as a Windows overlay above all of them, so you use the AI tools you already have — just with complete, structured requests instead of vague ones.",
        },
      },
      {
        "@type": "Question",
        name: "ChatGPT and Claude already ask follow-up questions. Why do I need AuraText?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ChatGPT and Claude ask follow-up questions inconsistently — starting from scratch every session, only when the model decides to. AuraText is consistent, structured, and works the same way across every AI tool. It is not a replacement for any AI model. It is the layer that makes all of them work better.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to know prompt engineering to use AuraText?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No technical knowledge is required to use AuraText. AuraText guides you in real time. You describe what you want, it asks the right questions, and builds the request automatically. No frameworks to memorize, no prompt syntax to learn.",
        },
      },
      {
        "@type": "Question",
        name: "Is AuraText free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AuraText is completely free to download and use. There is also a one-time optional support payment of $49 for users who want to support indie development. No subscriptions, no recurring charges.",
        },
      },
      {
        "@type": "Question",
        name: "What operating system does AuraText support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AuraText is currently available for Windows 10 and Windows 11. It runs as a system-level overlay, so it works inside every application on Windows without requiring you to switch tabs.",
        },
      },
    ],
  };

  // HowTo schema — enables rich results and AI step-by-step citation (AEO/GEO)
  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to get better AI results with AuraText",
    description: "AuraText is a prompt-less engine that turns your goals into AI-ready requests in 3 steps. No prompt engineering required.",
    tool: [
      { "@type": "HowToTool", name: "AuraText (free, Windows)" },
      { "@type": "HowToTool", name: "ChatGPT, Claude, Gemini, or Cursor" },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Tell AuraText what you want",
        text: "Say what you're trying to build, write, fix, or figure out — in plain language. No prompt syntax. No structure. Just the result you want.",
        url: "https://auratxt.com/#how-it-works",
      },
      {
        "@type": "HowToStep",
        name: "AuraText discovers what's missing",
        text: "AuraText asks targeted questions to understand your goals, constraints, context, and edge cases. Fast. Focused. No long forms.",
        url: "https://auratxt.com/#how-it-works",
      },
      {
        "@type": "HowToStep",
        name: "AI gets what it needs. You get results.",
        text: "AuraText sends a complete, structured request to ChatGPT, Claude, Cursor, or Gemini. Better input, better output — every time.",
        url: "https://auratxt.com/#how-it-works",
      },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteData),
          }}
        />
        {/* FAQPage schema — AEO: People Also Ask + AI citation eligibility */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqData),
          }}
        />
        {/* HowTo schema — AEO/GEO: step-by-step rich results + AI citation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(howToData),
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
          <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
