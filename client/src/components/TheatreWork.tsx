import { Card, CardContent } from "@/components/ui/card";

export default function TheatreWork() {
  const productions = [
    {
      title: "The Last Garden",
      description: "A haunting exploration of memory and loss, this original production combined multimedia elements with intimate storytelling.",
      venue: "Riverside Theatre",
      year: "2023",
      image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      featured: true
    },
    {
      title: "Echoes of Tomorrow",
      description: "A sci-fi drama exploring themes of technology and human connection.",
      venue: "Metropolitan Theatre",
      year: "2022",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Winter's Tale Reimagined",
      description: "A modern adaptation of Shakespeare's classic with contemporary relevance.",
      venue: "City Arts Center",
      year: "2021",
      image: "https://images.unsplash.com/photo-1490633874781-1c63cc424610?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Quiet Revolutions",
      description: "An intimate exploration of family dynamics and social change.",
      venue: "Studio Theatre",
      year: "2023",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Songs of the City",
      description: "Original musical celebrating urban life and community.",
      venue: "Grand Theatre",
      year: "2020",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ];

  const featuredProduction = productions.find(p => p.featured);
  const otherProductions = productions.filter(p => !p.featured);

  return (
    <section id="theatre" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-forest mb-4">Theatre Work</h2>
          <p className="text-xl text-charcoal max-w-2xl mx-auto">
            A collection of directing projects, original productions, and collaborative works that showcase innovative storytelling and artistic vision.
          </p>
        </div>
        
        {/* Featured Production */}
        {featuredProduction && (
          <div className="mb-16 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredProduction.image}
                  alt={featuredProduction.title}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-8 lg:p-12">
                <span className="inline-block bg-burnt-orange text-cream px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Featured Production
                </span>
                <h3 className="text-2xl font-playfair font-bold text-forest mb-4">
                  {featuredProduction.title}
                </h3>
                <p className="text-charcoal mb-6 leading-relaxed">
                  {featuredProduction.description}
                </p>
                <div className="space-y-2 text-sm text-charcoal">
                  <div><strong>Venue:</strong> {featuredProduction.venue}</div>
                  <div><strong>Year:</strong> {featuredProduction.year}</div>
                  <div><strong>Role:</strong> Director & Co-Writer</div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Production Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProductions.map((production, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={production.image}
                alt={production.title}
                className="w-full h-48 object-cover" 
              />
              <CardContent className="p-6">
                <h4 className="text-xl font-playfair font-semibold text-forest mb-2">
                  {production.title}
                </h4>
                <p className="text-charcoal text-sm mb-4">
                  {production.description}
                </p>
                <div className="text-xs text-charcoal">
                  <div>{production.venue} • {production.year}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
