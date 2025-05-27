import { Card, CardContent } from "@/components/ui/card";

export default function TheatreWork() {
  const productions = [
    {
      title: "Lorem Ipsum Dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      venue: "Consectetur Adipiscing",
      year: "2023",
      image: null,
      featured: true
    },
    {
      title: "Sed Do Eiusmod",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      venue: "Tempor Incididunt",
      year: "2022",
      image: null
    },
    {
      title: "Duis Aute Irure",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      venue: "Voluptate Velit",
      year: "2021",
      image: null
    },
    {
      title: "Nemo Enim Ipsam",
      description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      venue: "Adipisci Velit",
      year: "2023",
      image: null
    },
    {
      title: "Ut Enim Ad Minim",
      description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      venue: "Magna Aliqua",
      year: "2020",
      image: null
    }
  ];

  const featuredProduction = productions.find(p => p.featured);
  const otherProductions = productions.filter(p => !p.featured);

  return (
    <section id="theatre" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-forest mb-4">Lorem Ipsum Dolor</h2>
          <p className="text-xl text-charcoal max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        
        {/* Featured Production */}
        {featuredProduction && (
          <div className="mb-16 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-medium">Image Here</span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <span className="inline-block bg-burnt-orange text-cream px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Lorem Ipsum
                </span>
                <h3 className="text-2xl font-playfair font-bold text-forest mb-4">
                  {featuredProduction.title}
                </h3>
                <p className="text-charcoal mb-6 leading-relaxed">
                  {featuredProduction.description}
                </p>
                <div className="space-y-2 text-sm text-charcoal">
                  <div><strong>Lorem:</strong> {featuredProduction.venue}</div>
                  <div><strong>Ipsum:</strong> {featuredProduction.year}</div>
                  <div><strong>Dolor:</strong> Sit Amet Consectetur</div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Production Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProductions.map((production, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-lg font-medium">Image Here</span>
              </div>
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
