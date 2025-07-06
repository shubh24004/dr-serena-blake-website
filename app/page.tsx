// app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#f9f9f9] text-gray-800">
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
    </main>
  );
}
