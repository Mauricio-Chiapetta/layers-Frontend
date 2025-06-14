import { CallToAction } from "@/components/(sections)/CallToAction";
import { Faqs } from "@/components/(sections)/Faqs";
import { Features } from "@/components/(sections)/Features";
import { Footer } from "@/components/(sections)/Footer";
import { Hero } from "@/components/(sections)/Hero";
import { Integrations } from "@/components/(sections)/Integrations";
import { Introduction } from "@/components/(sections)/Introduction";
import { LogoTicker } from "@/components/(sections)/LogoTicker";
import { Navbar } from "@/components/(sections)/Navbar";
import { ScrollLinked } from "@/components/ui/ScrollLinked";

export default function Home() {
  return (
    <>
      <ScrollLinked />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
      <Integrations />
      <Faqs />
      <CallToAction />
      <Footer />
    </>
  );
}
