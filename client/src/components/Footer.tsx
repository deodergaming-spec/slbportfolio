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
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-semibold text-white mb-4">Sarah Bond</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Writer and Director from County Durham, exploring themes of class, coming-of-age adventures, friendship, and the supernatural.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-silver transition-colors duration-200 text-sm text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('theatre')}
                className="block text-gray-300 hover:text-silver transition-colors duration-200 text-sm text-left"
              >
                Theatre Work
              </button>
              <button 
                onClick={() => scrollToSection('writing')}
                className="block text-gray-300 hover:text-silver transition-colors duration-200 text-sm text-left"
              >
                Writing Portfolio
              </button>
              <a 
                href="/gallery"
                className="block text-gray-300 hover:text-silver transition-colors duration-200 text-sm text-left"
              >
                Gallery
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-silver transition-colors duration-200 text-sm text-left"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-300 text-sm">
              Get updates on Sarah's latest projects, productions, and publications.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Sarah Bond. All rights reserved. | Website designed by William Bond. | All photography by{" "}
            <a
              href="https://www.lewispalmerphotography.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-silver transition-colors duration-200"
            >
              lewispalmerphotography.co.uk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
