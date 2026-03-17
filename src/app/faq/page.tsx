import type { Metadata } from "next";
import FAQ from "#/src/components/FAQ";

export const metadata: Metadata = {
    title: "AuraText FAQ — Common Questions Answered",
    description:
        "Frequently asked questions about AuraText. Is it just a prompt rewriter? Will it slow me down? Does it work with ChatGPT and Claude? Get answers here.",
    keywords: [
        "AuraText FAQ",
        "AuraText questions",
        "AuraText help",
        "how does AuraText work",
        "AuraText vs prompt rewriter",
        "AI overlay questions",
    ],
    alternates: {
        canonical: "https://auratxt.com/faq",
    },
    openGraph: {
        title: "AuraText FAQ — Common Questions Answered",
        description:
            "Common questions about AuraText answered. Learn how it works, whether it slows you down, and how it compares to prompt rewriters.",
        url: "https://auratxt.com/faq",
        type: "website",
    },
};

export default function FAQPage() {
    const faqs = [
        {
            question: "Is this just another prompt rewriter?",
            answer:
                "No. Most tools rewrite your prompts after you write them. AuraText helps you think before you write them — by asking the right questions and structuring your intent.",
        },
        {
            question: "Will this slow me down?",
            answer:
                "No. AuraText adds a few seconds of thinking — but saves minutes of rewriting and fixing bad outputs.",
        },
        {
            question: "Do I need to know prompt engineering?",
            answer:
                "No. AuraText guides you in real time. You improve naturally as you use it — no courses, no frameworks to memorize.",
        },
        {
            question: "Does it work with the AI tools I already use?",
            answer:
                "Yes. AuraText works with ChatGPT, Claude, Gemini, and Perplexity — no switching required.",
        },
        {
            question: "Will this actually improve my results?",
            answer:
                "Yes — and you'll see it immediately. AuraText shows you the difference between a vague prompt and a structured one.",
        },
        {
            question: "What if I'm already getting decent outputs?",
            answer:
                "Decent is the trap. AuraText helps you go from decent → intentional → high-quality.",
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
