import { Card, CardContent } from "@/components/ui/card";

export default function TheatreWork() {
  const productions = [
    {
      title: "Seagulls and Sad Sad Stories",
      description: "Three young lads, hoping for the answers to their maths exam and which girls in their year they stand a chance with, find out more than they bargained for when they put the question of their future to a mystical fortune teller. Faced with harsh realities, cruel stereotypes, and an unnaturally persistent seagull, they must decide whether the perceptions of others will determine their entire life or whether they believe they're worth so much more.",
      venue: "Laurels, Whitley Bay",
      year: "2024",
      role: "Writer and Director",
      image: null,
      featured: true
    },
    {
      title: "You Need to Say Sorry",
      description: "A hard-hitting play about the dangers of online dating and domestic abuse in older couples. Written by Alison Stanley.",
      venue: "Laurels, Whitley Bay",
      year: "2023",
      role: "Director",
      image: "/you-need-to-say-sorry.jpg"
    },
    {
      title: "School of Rock: The Next Generation",
      description: "The regional north east amateur debut, featuring a talented cast of over 40 young performers who played their instruments live on stage.",
      venue: "Tyne Theatre and Opera House",
      year: "2023",
      role: "Director",
      image: "/school-of-rock-cast.jpg"
    }
  ];

  const featuredProduction = productions.find(p => p.featured);
  const otherProductions = productions.filter(p => !p.featured);

  return (
    <section id="theatre" className="py-20 bg-light-silver">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-pixel font-bold text-black mb-4">Theatre Work</h2>
        </div>
        
        {/* Featured Production */}
        {featuredProduction && (
          <div className="mb-16 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src="/seagulls-production.jpg" 
                  alt="Seagulls and Sad Sad Stories production photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <span className="inline-block bg-silver text-black px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Featured Production
                </span>
                <h3 className="text-2xl font-playfair font-bold text-black mb-4">
                  {featuredProduction.title}
                </h3>
                <p className="text-black mb-6 leading-relaxed">
                  {featuredProduction.description}
                </p>
                <div className="space-y-2 text-sm text-black">
                  <div><strong>Venue:</strong> {featuredProduction.venue}</div>
                  <div><strong>Year:</strong> {featuredProduction.year}</div>
                  <div><strong>Role:</strong> {featuredProduction.role}</div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Production Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProductions.map((production, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 overflow-hidden">
                {production.image ? (
                  <img 
                    src={production.image} 
                    alt={`${production.title} production photo`}
                    className={`w-full h-full ${production.title === "You Need to Say Sorry" ? "object-contain bg-gray-100" : "object-cover"}`}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-lg font-medium">Image Here</span>
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-playfair font-semibold text-black mb-2">
                  {production.title}
                </h4>
                <p className="text-black text-sm mb-4">
                  {production.description}
                </p>
                <div className="text-xs text-black space-y-1">
                  <div><strong>Venue:</strong> {production.venue}</div>
                  <div><strong>Year:</strong> {production.year}</div>
                  <div><strong>Role:</strong> {production.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
