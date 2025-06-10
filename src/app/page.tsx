import { Features } from "@/components/(sections)/Features";
import { Hero } from "@/components/(sections)/Hero";
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
      <Introduction/>
      <Features/>
    </>
  );
}
