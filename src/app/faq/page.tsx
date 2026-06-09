import type { Metadata } from "next";
import FAQ from "#/src/components/FAQ";

export const metadata: Metadata = {
    title: "AuraText FAQ - Is It a Prompt Rewriter? Why Not Just Use ChatGPT?",
    description:
        "Frequently asked questions about AuraText. Is it just a prompt rewriter? Why not use ChatGPT directly? How is it different from prompt engineering? Get clear answers.",
    keywords: [
        "AuraText FAQ",
        "AuraText vs prompt rewriter",
        "AuraText vs ChatGPT",
        "AuraText questions",
        "AI requirement discovery FAQ",
        "prompt engineering alternative",
    ],
    alternates: {
        canonical: "https://auratxt.com/faq",
    },
    openGraph: {
        title: "AuraText FAQ - Common Questions Answered",
        description:
            "Is AuraText just a prompt rewriter? No. Why not use ChatGPT directly? Because it never pushes back. How is this different from prompt engineering? Get clear answers here.",
        url: "https://auratxt.com/faq",
        type: "website",
    },
};

export default function FAQPage() {
    const faqs = [
        {
            question: "Is this just another prompt rewriter?",
            answer:
                "No. Prompt rewriters take what you wrote and rephrase it. AuraText does something different. It asks you questions to discover what's missing from your request before you send anything to AI.",
        },
        {
            question: "Why not just use ChatGPT directly?",
            answer:
                "ChatGPT generates based on what you give it. It doesn't push back. AuraText surfaces the missing requirements before you hit send, so ChatGPT, Claude, or Cursor gets a complete request instead of a vague one.",
        },
        {
            question: "How is this different from prompt engineering?",
            answer:
                "Prompt engineering is a skill you have to learn and manually apply every time. AuraText applies it for you, in real time, through targeted questions. No frameworks to memorize.",
        },
        {
            question: "Will this slow me down?",
            answer:
                "No. AuraText adds 30 seconds of structured thinking and saves you from 3 hours of fixing a bad output.",
        },
        {
            question: "Does it work with the AI tools I already use?",
            answer:
                "Yes. AuraText works with ChatGPT, Claude, Gemini, and Perplexity. No switching required. Use the tools you already have, just with complete requests.",
        },
        {
            question: "Will this actually improve my results?",
            answer:
                "Yes, and you'll see it immediately. Typing 'Build a casino app' gets you generic code. Running it through AuraText first surfaces 6 critical requirements you hadn't defined.",
        },
        {
            question: "What if I'm already getting decent outputs?",
            answer:
                "Decent is the trap. You settle for outputs that are good enough but not precise or fully aligned with what you actually need. AuraText helps you go from decent to intentional to consistently high-quality.",
        },
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
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
                <FAQ />
            </main>
        </>
    );
}
