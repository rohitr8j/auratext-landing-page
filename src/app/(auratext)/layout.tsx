import type { ReactNode } from "react";
import Cookie from "#/src/components/Cookie";
import Banner from "#/src/components/Banner";
import Navbar from "#/src/components/Navbar";
import Footer from "#/src/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function AuratextLayout({ children }: LayoutProps) {
  return (
    <>
      <Cookie />
      <Banner />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
