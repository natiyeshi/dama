
import Nav from "@/components/Nav";
import Hero from "./_components/Hero";
import ServiceHome from "./_components/ServiceHome";
import Portfolio from "./_components/Portfolio";
import Partners from "./_components/Partners";
import About from "./_components/about";
import Footer from "../../components/Footer";
export default function Home() {
  return (
    <div className="flex relative flex-col bg-foreground  sm:rounded-xl max-w-[1600px] mx-auto p-2 max-lg:px-6 max-md:px-3 px-12 font-light">
      <Nav />
      <Hero />
      <ServiceHome />
      <Portfolio />
      <About />
      <Partners />
      <Footer />
    </div>
  );
}
