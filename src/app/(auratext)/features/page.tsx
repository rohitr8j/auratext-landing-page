import type { Metadata } from "next";
import Features from "#/src/components/Features";

export const metadata: Metadata = {
    title: "AuraText Features - Fewer Rewrites. Better Requirements. Outputs You Actually Want.",
    description:
        "AuraText surfaces missing requirements before ChatGPT, Claude, Gemini, or Cursor generates anything. Discover what you're missing before AI fills in the blanks. Free for Windows.",
    keywords: [
        "AuraText features",
        "AI requirement discovery",
        "better AI outputs",
        "AI missing requirements",
        "fewer AI rewrites",
        "Windows AI tool",
        "ChatGPT better results",
        "Claude workflow",
        "Cursor AI",
    ],
    alternates: {
        canonical: "https://auratxt.com/features",
    },
    openGraph: {
        title: "AuraText Features - Surface Missing Requirements Before AI Generates Anything",
        description:
            "AuraText finds what your request is missing before ChatGPT, Claude, or Cursor generates anything. Fewer rewrites. Better requirements. Outputs you actually want.",
        url: "https://auratxt.com/features",
        type: "website",
    },
};

export default function FeaturesPage() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "AuraText Features",
        description:
            "AuraText features: AI requirement discovery, missing requirement surfacing, and structured request building that works with ChatGPT, Claude, Gemini, and Cursor on Windows.",
        url: "https://auratxt.com/features",
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <main>
                <Features />
            </main>
        </>
    );
}
