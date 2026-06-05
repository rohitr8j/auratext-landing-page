import dynamic from "next/dynamic";
import Header from "../components/Header";

// Below-fold sections: dynamically imported to split JS bundles and reduce TBT
const ProblemSection  = dynamic(() => import("../components/ProblemSection"));
const Features        = dynamic(() => import("../components/Features"));
const HowItWorks      = dynamic(() => import("../components/HowItWorks"));
const PromptOptimizer = dynamic(() => import("../components/PromptOptimizer"));
const Download        = dynamic(() => import("../components/Download"));
const Pricing         = dynamic(() => import("../components/Pricing"));
const FAQ             = dynamic(() => import("../components/FAQ"));
const Founder         = dynamic(() => import("../components/Founder"));
const GitHubReleases  = dynamic(() => import("../components/GitHubReleases"));

export default function Home() {
  return (
    <main>
      <section aria-label="Hero section">
        <Header />
      </section>

      <section id="problem" aria-label="Problem Section">
        <ProblemSection />
      </section>

      <section id="features" aria-label="Outcomes">
        <Features />
      </section>

      <section id="how-it-works" aria-label="How It Works">
        <HowItWorks />
      </section>

      <section id="prompt-optimizer" aria-label="Prompt Optimizer Showcase">
        <PromptOptimizer />
      </section>

      <section id="download" aria-label="Download Section">
        <Download />
      </section>

      <section id="pricing" aria-label="Pricing">
        <Pricing />
      </section>

      <section id="faq" aria-label="Frequently Asked Questions">
        <FAQ />
      </section>

      <section id="founder" aria-label="Meet the Founder">
        <Founder />
      </section>

      <section id="releases" aria-label="Releases">
        <GitHubReleases />
      </section>
    </main>
  );
}
