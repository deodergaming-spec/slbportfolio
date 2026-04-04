import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import img1 from "@assets/1_Creative_Workshops_1775309012543.png";
import img2 from "@assets/2_About_me_1775309012543.png";
import img3 from "@assets/3_1775309012542.png";
import img4 from "@assets/4_1775309012542.png";
import img5 from "@assets/5_1775309012543.png";
import img6 from "@assets/6_1775309012543.png";

export default function Workshops() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Header */}
      <div className="bg-black text-white py-8 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button className="mb-4 bg-white text-black border-white hover:bg-gray-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <h1 className="text-4xl font-pixel font-bold">Creative Workshops</h1>
          <p className="text-lg mt-2">Presented by Sarah Bond</p>
        </div>
      </div>

      {/* Workshop Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src={img1} alt="Creative Workshops 2026 Programme" className="w-full h-auto" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src={img2} alt="About Sarah Bond" className="w-full h-auto" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src={img3} alt="Workshop Packages - Writing, Directing, Get into Theatre" className="w-full h-auto" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src={img4} alt="Workshop Packages - Voiceover, Seagulls, 3 Week Workshop" className="w-full h-auto" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src={img5} alt="Bespoke Workshops" className="w-full h-auto" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src={img6} alt="Get in Touch" className="w-full h-auto" />
        </div>

        {/* Contact Section */}
        <div className="text-center pt-6">
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
