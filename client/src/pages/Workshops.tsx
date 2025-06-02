import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Workshops() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Header */}
      <div className="bg-black text-white py-8 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#writing">
            <Button variant="outline" className="mb-4 text-white border-white hover:bg-white hover:text-black">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Writing Portfolio
            </Button>
          </Link>
          <h1 className="text-4xl font-pixel font-bold">Creative Workshops</h1>
          <p className="text-lg mt-2">Presented by Sarah Bond</p>
        </div>
      </div>

      {/* Workshop Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Workshop Cover Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/creative-workshops-cover.png" 
            alt="Creative Workshops 2025 Programme"
            className="w-full h-auto"
          />
        </div>
        
        {/* Workshop Packages Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-black mb-8 text-center">Workshop Packages</h2>
          
          <div className="space-y-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/workshop-packages-1.png" 
                alt="Workshop packages - Writing, Directing, and Get into Theatre"
                className="w-full h-auto"
              />
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/workshop-packages-2.png" 
                alt="Workshop packages - Voiceover, Seagulls, and 3 Week Workshop"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Bespoke Workshops Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-playfair font-bold text-black mb-8 text-center">Bespoke Workshops</h2>
          
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/bespoke-workshops.png" 
              alt="Bespoke workshops tailored to your curriculum"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-playfair font-bold text-black mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Ready to book a workshop or have questions about our offerings? 
            Contact Sarah to discuss your requirements and create an unforgettable creative experience.
          </p>
          <Link href="/#contact">
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">
              Contact Sarah
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}