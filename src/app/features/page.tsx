import type { Metadata } from "next";
import Features from "#/src/components/Features";

export const metadata: Metadata = {
    title: "AuraText Features — Think Better Before Using AI",
    description:
        "AuraText features: guided prompt builder, works with ChatGPT, Claude, Gemini, and Perplexity. Think before you prompt, get dramatically better AI outputs on Windows.",
    keywords: [
        "AuraText features",
        "AI prompt builder",
        "guided prompt writing",
        "better AI outputs",
        "Windows AI features",
        "ChatGPT helper",
        "Claude helper",
        "Gemini helper",
    ],
    alternates: {
        canonical: "https://auratxt.com/features",
    },
    openGraph: {
        title: "AuraText Features — Get Better AI Outputs",
        description:
            "AuraText helps you think before you prompt. Guided intent building, structured inputs, works with every major AI on Windows.",
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
            "AuraText features: guided thinking before prompting, works with ChatGPT, Claude, Gemini, and Perplexity on Windows.",
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
