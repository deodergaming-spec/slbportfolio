import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const sections = [
  {
    title: "Seagulls and Sad Sad Stories",
    images: []
  },
  {
    title: "School of Rock: The Next Generation",
    images: []
  },
  {
    title: "Workshops and Other Projects",
    images: []
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Page Header */}
      <div className="pt-24 pb-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-pixel font-bold text-white mb-6">
            Gallery
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            A visual journey through Sarah's theatrical productions, writing process, and creative collaborations
          </p>
          <div className="mt-8">
            <Link href="/" className="text-silver hover:text-white transition-colors duration-200">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Sections */}
      <section className="py-20 bg-light-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-3xl font-pixel font-bold text-black mb-8 border-b border-gray-300 pb-4">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {section.images.length > 0 ? (
                  section.images.map((src, imgIndex) => (
                    <Card key={imgIndex} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="h-56 overflow-hidden">
                        <img
                          src={src}
                          alt={`${section.title} photo ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-3 flex items-center justify-center h-48 bg-white rounded-xl border-2 border-dashed border-gray-300">
                    <span className="text-gray-400 text-lg">Images coming soon</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="text-black mb-6">
            Want to collaborate or learn more about Sarah's work?
          </p>
          <Link href="/#contact" className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 inline-block">
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
