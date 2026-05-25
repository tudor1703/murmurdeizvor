import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Gallery />
        <Events />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
