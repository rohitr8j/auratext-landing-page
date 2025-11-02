import Header from "../components/Header";
import Audience from "../components/Audience";
import Features from "../components/Features";
import Product from "../components/Product";
import Download from "../components/Download";
import GitHubReleases from "../components/GitHubReleases";
import ProductHuntStats from "../components/ProductHuntStats";

export default function Home() {
  return (
    <main>
      <section aria-label="Hero section">
        <Header />
      </section>
      <section id="features" aria-label="Features">
        <Features />
      </section>
      <section id="audience" aria-label="Target Audience">
        <Audience />
      </section>
      <section id="product" aria-label="Product Showcase">
        <Product />
      </section>
      <section id="download" aria-label="Download Section">
        <Download />
      </section>
      <section id="social-proof" aria-label="Social Proof">
        <ProductHuntStats />
      </section>
      <section id="releases" aria-label="Releases">
        <GitHubReleases />
      </section>
    </main>
  );
}
