import { Button } from "@/components/ui/button";

export default function Hero() {
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
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-lg font-medium">Image Here</span>
        </div>
        <div className="absolute inset-0 bg-forest bg-opacity-70"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-cream mb-6">
          Sarah Bond
        </h1>
        <p className="text-xl md:text-2xl text-cream mb-4 font-light">
          Theatre Director • Playwright • Author
        </p>
        <p className="text-lg text-cream mb-8 max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('theatre')}
            className="bg-burnt-orange text-cream px-8 py-3 rounded-lg font-semibold hover:bg-burnt-orange/90 transition-all duration-200 transform hover:scale-105"
          >
            View Theatre Work
          </Button>
          <Button 
            onClick={() => scrollToSection('writing')}
            variant="outline"
            className="border-2 border-cream text-cream px-8 py-3 rounded-lg font-semibold hover:bg-cream hover:text-forest transition-all duration-200"
          >
            Explore Writing
          </Button>
        </div>
      </div>
    </section>
  );
}
