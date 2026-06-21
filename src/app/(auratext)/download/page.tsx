import type { Metadata } from "next";
import Download from "#/src/components/Download";

export const metadata: Metadata = {
    title: "Download AuraText for Windows - AI Requirement Discovery Tool, Free",
    description:
        "Download AuraText free for Windows 10 and Windows 11. AuraText asks the questions ChatGPT, Claude, Cursor, and Gemini never ask - surface missing requirements before AI generates anything. Start in under 60 seconds.",
    keywords: [
        "AuraText download",
        "download AuraText",
        "AuraText Windows download",
        "AI overlay download",
        "free AI tool Windows",
        "AuraText setup",
        "AuraText installer",
    ],
    alternates: {
        canonical: "https://auratxt.com/download",
    },
    openGraph: {
        title: "Download AuraText for Windows - Free",
        description:
            "Download AuraText free for Windows. Surface missing requirements before ChatGPT, Claude, Cursor, or Gemini generates anything. Better input = better output.",
        url: "https://auratxt.com/download",
        type: "website",
    },
};

export default function DownloadPage() {
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
        downloadUrl: "https://github.com/y4shr4j/auratext-releases/releases/latest",
        url: "https://auratxt.com",
        creator: {
            "@type": "Person",
            name: "Yash Raj",
        },
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
                <Download />
            </main>
        </>
    );
}
