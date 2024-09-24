import Nav from "@/components/Nav";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex relative min-h-[90vh] flex-col bg-foreground  sm:rounded-xl max-w-[1600px] mx-auto p-2 max-lg:px-6 max-md:px-3 px-12 font-light">
      <Nav />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}
