import Header from "../components/Header";
import Audience from "../components/Audience";
import Features from "../components/Features";
import Product from "../components/Product";
import Pricing from "../components/Pricing";
import Download from "../components/Download";
import GitHubReleases from "../components/GitHubReleases";
import ProductHuntStats from "../components/ProductHuntStats";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import BrowserExtension from "../components/BrowserExtension";
import AIIntegrations from "../components/AIIntegrations";
import PromptOptimizer from "../components/PromptOptimizer";



export default function Home() {
  return (
    <main>
      <section aria-label="Hero section">
        <Header />
      </section>

      <section id="features" aria-label="Features">
        <Features />
      </section>

      <section id="prompt-optimizer" aria-label="Prompt Optimizer Showcase">
        <PromptOptimizer />
      </section>

      <section id="ai-integrations" aria-label="AI Integrations">
        <AIIntegrations />
      </section>
      <section id="how-it-works" aria-label="How It Works">
        <HowItWorks />
      </section>

      <section id="audience" aria-label="Target Audience">
        <Audience />
      </section>
      <section id="product" aria-label="Product Showcase">
        <Product />
      </section>
      <section id="pricing" aria-label="Pricing">
        <Pricing />
      </section>
      <section id="faq" aria-label="Frequently Asked Questions">
        <FAQ />
        <BrowserExtension />
      </section>
      <section id="download" aria-label="Download Section">
        <Download />
      </section>

      <section id="releases" aria-label="Releases">
        <GitHubReleases />
      </section>

    </main>
  );
}
