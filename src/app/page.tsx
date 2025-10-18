import Header from "../components/Header";
import Audience from "../components/Audience";
import Features from "../components/Features";
import Product from "../components/Product";
import Download from "../components/Download";
import GitHubReleases from "../components/GitHubReleases";

export default function Home() {
  return (
    <main>
      <Header />
      <Features />
      <Audience />
      <Product />
      <Download />
      <GitHubReleases />
    </main>
  );
}
