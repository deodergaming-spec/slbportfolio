import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useState } from "react";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const galleryItems = [
    {
      title: "Seagulls and Sad Sad Stories - Production",
      category: "Theatre",
      description: "Behind the scenes from the award-winning production",
      image: null
    },
    {
      title: "School of Rock Rehearsals",
      category: "Theatre", 
      description: "Directing the regional amateur debut production",
      image: null
    },
    {
      title: "Writing Workshop",
      category: "Writing",
      description: "Leading creative writing sessions",
      image: null
    },
    {
      title: "Book Launch Event",
      category: "Publishing",
      description: "Seagulls and Sad Sad Stories book launch",
      image: null
    },
    {
      title: "Theatre Collaboration",
      category: "Theatre",
      description: "Working with young performers",
      image: null
    },
    {
      title: "Creative Process",
      category: "Writing",
      description: "Sarah's writing workspace and process",
      image: null
    }
  ];

  const categories = ["All", "Theatre", "Writing", "Publishing"];

  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Page Header */}
      <div className="pt-24 pb-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Gallery
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            A visual journey through Sarah's theatrical productions, writing process, and creative collaborations
          </p>
          <div className="mt-8">
            <Link href="/">
              <a className="text-silver hover:text-white transition-colors duration-200">
                ← Back to Home
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <section className="py-20 bg-light-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 border border-gray-300 rounded-lg transition-all duration-200 ${
                    activeFilter === category 
                      ? 'bg-black text-white' 
                      : 'bg-white text-black hover:bg-black hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                {/* Image Container */}
                <div className="relative h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <span className="text-gray-500 text-lg font-medium">Image Here</span>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block bg-silver text-black px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-black text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-black mb-6">
              Want to collaborate or learn more about Sarah's work?
            </p>
            <Link href="/#contact">
              <a className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200">
                Get in Touch
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}