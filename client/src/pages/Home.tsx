import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TheatreWork from "@/components/TheatreWork";
import Writing from "@/components/Writing";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <Hero />
      <About />
      <TheatreWork />
      <Writing />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
