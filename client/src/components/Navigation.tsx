import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-black font-playfair text-xl font-semibold">Sarah Bond</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-black hover:text-silver transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-black hover:text-silver transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('theatre')}
                className="text-black hover:text-silver transition-colors duration-200 font-medium"
              >
                Theatre Work
              </button>
              <button 
                onClick={() => scrollToSection('writing')}
                className="text-black hover:text-silver transition-colors duration-200 font-medium"
              >
                Writing
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-black hover:text-silver transition-colors duration-200 font-medium"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-black hover:text-silver transition-colors duration-200 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-silver focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-black hover:text-silver transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-black hover:text-silver transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('theatre')}
              className="block w-full text-left px-3 py-2 text-black hover:text-silver transition-colors duration-200 font-medium"
            >
              Theatre Work
            </button>
            <button 
              onClick={() => scrollToSection('writing')}
              className="block w-full text-left px-3 py-2 text-black hover:text-silver transition-colors duration-200 font-medium"
            >
              Writing
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left px-3 py-2 text-black hover:text-silver transition-colors duration-200 font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-black hover:text-silver transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
