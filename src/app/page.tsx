import GadgetGrid from "@/components/GadgetGrid";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <>
      <Hero />
      {/* Gadgets card */}
      <GadgetGrid />
    </>
  );
}