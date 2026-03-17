import type { Metadata } from "next";
import HowItWorks from "#/src/components/HowItWorks";

export const metadata: Metadata = {
    title: "How AuraText Works — From Messy Thought to Better Output in 3 Steps",
    description:
        "Learn how AuraText works. Start messy, get the right guiding questions, and receive a structured prompt that produces dramatically better AI outputs. 3-step process.",
    keywords: [
        "how AuraText works",
        "AuraText process",
        "AI prompt guide",
        "structured prompting",
        "how to use AuraText",
        "AuraText steps",
    ],
    alternates: {
        canonical: "https://auratxt.com/how-it-works",
    },
    openGraph: {
        title: "How AuraText Works — 3 Steps to Better AI Outputs",
        description:
            "Start messy → get the right questions → get dramatically better AI outputs. See how AuraText works in 3 simple steps.",
        url: "https://auratxt.com/how-it-works",
        type: "website",
    },
};

export default function HowItWorksPage() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How to Use AuraText",
        description:
            "AuraText guides you from a messy thought to a structured AI prompt in 3 simple steps.",
        url: "https://auratxt.com/how-it-works",
        step: [
            {
                "@type": "HowToStep",
                name: "Start Messy",
                text: "Write whatever's in your head. Vague, incomplete, half-formed — it's fine. AuraText works with where you are.",
                position: 1,
            },
            {
                "@type": "HowToStep",
                name: "Get the Right Questions",
                text: "AuraText asks a few targeted questions to clarify your intent, audience, and goal. No long forms. Fast and focused.",
                position: 2,
            },
            {
                "@type": "HowToStep",
                name: "Get a Better Output",
                text: "A structured, clear input goes to the AI of your choice. Better thinking = better results. Every single time.",
                position: 3,
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
                <HowItWorks />
            </main>
        </>
    );
}
