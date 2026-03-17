import Header from "../components/Header";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Download from "../components/Download";
import GitHubReleases from "../components/GitHubReleases";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import PromptOptimizer from "../components/PromptOptimizer";
import ProblemSection from "../components/ProblemSection";


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

      <section id="releases" aria-label="Releases">
        <GitHubReleases />
      </section>
    </main>
  );
}

