import type { Metadata } from "next";
import Pricing from "#/src/components/Pricing";

export const metadata: Metadata = {
    title: "AuraText Pricing — Free to Use, Support If It Helps",
    description:
        "AuraText is completely free to download and use. Optional supporter tiers available. No subscription required to get better AI outputs — download free for Windows.",
    keywords: [
        "AuraText pricing",
        "AuraText free",
        "AuraText cost",
        "AI overlay pricing",
        "free Windows AI tool",
        "AuraText supporter",
    ],
    alternates: {
        canonical: "https://auratxt.com/pricing",
    },
    openGraph: {
        title: "AuraText Pricing — Free to Use",
        description:
            "AuraText is completely free to download and use. Support the developer if it helps you — no subscription required.",
        url: "https://auratxt.com/pricing",
        type: "website",
    },
};

export default function PricingPage() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "AuraText Pricing",
        description:
            "AuraText pricing plans. Free to download and use. Optional supporter plans available.",
        url: "https://auratxt.com/pricing",
        mainEntity: [
            {
                "@type": "Offer",
                name: "Free",
                price: "0",
                priceCurrency: "USD",
                description:
                    "Full guided prompt builder, works with ChatGPT, Claude, Gemini & Perplexity. Free forever.",
            },
            {
                "@type": "Offer",
                name: "One-Time Support",
                price: "49",
                priceCurrency: "USD",
                description:
                    "Lifetime updates, priority support, indie developer support, and early access to new features.",
            },
        ],
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
                <Pricing />
            </main>
        </>
    );
}
