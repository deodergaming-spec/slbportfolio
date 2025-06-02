import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Hero() {
  // Hero background images for slideshow
  const heroImages = [
    '/hero-bg.jpg'
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    if (heroImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [heroImages.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Hero background slideshow */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: '60% center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}

      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-pixel font-bold text-white mb-6">
          Sarah Bond
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light" 
           style={{ 
             color: 'white',
             textShadow: '3px 3px 6px rgba(0,0,0,1), -1px -1px 2px rgba(0,0,0,1), 1px -1px 2px rgba(0,0,0,1), -1px 1px 2px rgba(0,0,0,1), 1px 1px 2px rgba(0,0,0,1)',
             WebkitTextStroke: '0.5px black'
           }}>
          Writer and Director
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button 
            onClick={() => scrollToSection('theatre')}
            className="bg-silver text-black px-8 py-3 rounded-lg font-semibold hover:bg-silver/90 transition-all duration-200 transform hover:scale-105"
          >
            View Theatre Work
          </Button>
          <Button 
            onClick={() => scrollToSection('writing')}
            variant="outline"
            className="border-2 border-white text-white bg-transparent px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-200"
          >
            Explore Writing
          </Button>
        </div>
      </div>
    </section>
  );
}
