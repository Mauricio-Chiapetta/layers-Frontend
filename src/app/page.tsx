import { Hero } from "@/components/(sections)/Hero";
import { Navbar } from "@/components/(sections)/Navbar";
import { ScrollLinked } from "@/components/ui/ScrollLinked";
export default function Home() {
  return (
    <>
      <ScrollLinked />
      <Navbar />
      <Hero />
    </>
  );
}
