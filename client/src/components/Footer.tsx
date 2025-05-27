export default function Footer() {
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
    <footer className="bg-charcoal py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-semibold text-cream mb-4">Sarah Mitchell</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-cream mb-4">Lorem Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-burnt-orange transition-colors duration-200 text-sm text-left"
              >
                Lorem
              </button>
              <button 
                onClick={() => scrollToSection('theatre')}
                className="block text-gray-300 hover:text-burnt-orange transition-colors duration-200 text-sm text-left"
              >
                Ipsum Dolor
              </button>
              <button 
                onClick={() => scrollToSection('writing')}
                className="block text-gray-300 hover:text-burnt-orange transition-colors duration-200 text-sm text-left"
              >
                Sit Amet
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-burnt-orange transition-colors duration-200 text-sm text-left"
              >
                Consectetur
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-cream mb-4">Lorem Updates</h4>
            <p className="text-gray-300 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Sarah Mitchell. All rights reserved. | Website designed for portfolio presentation.
          </p>
        </div>
      </div>
    </footer>
  );
}
