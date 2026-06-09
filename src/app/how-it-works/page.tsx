import type { Metadata } from "next";
import HowItWorks from "#/src/components/HowItWorks";

export const metadata: Metadata = {
    title: "How AuraText Works - Write Your Idea, Get the Questions, Send a Complete Request",
    description:
        "Learn how AuraText works. Write your idea, AuraText asks the missing questions, and you send a complete structured request to Cursor, Claude, ChatGPT, or Gemini. Better input = better output.",
    keywords: [
        "how AuraText works",
        "AuraText process",
        "AI requirement discovery steps",
        "how to use AuraText",
        "AuraText workflow",
        "better AI requests",
    ],
    alternates: {
        canonical: "https://auratxt.com/how-it-works",
    },
    openGraph: {
        title: "How AuraText Works - Write, Discover, Send",
        description:
            "Write your idea, AuraText asks what's missing, you send a complete request to AI. Better input = better output. Every time.",
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
            "AuraText guides you from a rough idea to a complete AI request in 3 steps. Write your idea, AuraText asks the missing questions, then send a structured request to your AI tool.",
        url: "https://auratxt.com/how-it-works",
        step: [
            {
                "@type": "HowToStep",
                name: "Write Your Idea",
                text: "Type whatever's in your head. Vague, incomplete, half-formed. AuraText works with where you are, not where you think you should be.",
                position: 1,
            },
            {
                "@type": "HowToStep",
                name: "AuraText Asks the Questions",
                text: "AuraText asks targeted questions to surface missing requirements: goals, constraints, audience, scale, regulations. Fast and focused. No long forms.",
                position: 2,
            },
            {
                "@type": "HowToStep",
                name: "Send a Complete Request to AI",
                text: "A structured, complete request goes to the AI tool of your choice: Cursor, Claude, ChatGPT, Gemini. Better input = better output. Every single time.",
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
