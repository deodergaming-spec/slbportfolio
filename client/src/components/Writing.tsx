import { Card, CardContent } from "@/components/ui/card";

export default function Writing() {
  const books = [
    {
      title: "Seagulls and Sad Sad Stories",
      type: "Play",
      year: "2024",
      description: "Three young lads, hoping for the answers to their maths exam and which girls in their year they stand a chance with, find out more than they bargained for when they put the question of their future to a mystical fortune teller. Faced with harsh realities, cruel stereotypes, and an unnaturally persistent seagull, they must decide whether the perceptions of others will determine their entire life or whether they believe they're worth so much more. Available to purchase from all major book retailers.",
      cover: null
    }
  ];

  const plays = [
    {
      title: "Play Name",
      type: "Play Type",
      year: "2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      awards: "Award Name"
    },
    {
      title: "Play Name",
      type: "Play Type",
      year: "2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      productions: "Production Info"
    },
    {
      title: "Play Name",
      type: "Play Type",
      year: "2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "Development Status"
    }
  ];

  return (
    <section id="writing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-black mb-4">Writing Portfolio</h2>
        </div>
        
        {/* Writing Tabs */}
        <div className="mb-16">
          <div className="flex border-b border-gray-200 mb-8">
            <button className="px-6 py-3 text-black border-b-2 border-black font-medium">
              Published Works
            </button>
            <button className="px-6 py-3 text-gray-500 hover:text-black">
              Other
            </button>
          </div>
          
          {/* Published Works */}
          <div>
            <h3 className="text-2xl font-playfair font-semibold text-black mb-8">Published Works</h3>
            
            <div className="space-y-8">
              {books.map((book, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="w-20 h-28 bg-gray-200 rounded shadow-lg flex-shrink-0 flex items-center justify-center">
                    <span className="text-gray-500 text-xs text-center">Image Here</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-playfair font-semibold text-black mb-2">
                      {book.title}
                    </h4>
                    <p className="text-black text-sm mb-2">
                      {book.type} • {book.year}
                    </p>
                    <p className="text-black leading-relaxed">
                      {book.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recent Plays */}
          <div>
            <h3 className="text-2xl font-playfair font-semibold text-forest mb-8">Recent Plays</h3>
            
            <div className="space-y-6">
              {plays.map((play, index) => (
                <Card key={index} className="bg-light-gray p-6 rounded-xl">
                  <CardContent className="p-0">
                    <h4 className="text-xl font-playfair font-semibold text-forest mb-2">
                      "{play.title}"
                    </h4>
                    <p className="text-charcoal text-sm mb-3">
                      {play.type} • {play.year}
                    </p>
                    <p className="text-charcoal leading-relaxed mb-4">
                      {play.description}
                    </p>
                    <div className="text-sm text-charcoal">
                      {play.awards && (
                        <div><strong>Awards:</strong> {play.awards}</div>
                      )}
                      {play.productions && (
                        <div><strong>Productions:</strong> {play.productions}</div>
                      )}
                      {play.status && (
                        <div><strong>Status:</strong> {play.status}</div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Writing Workspace Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="w-full h-64 md:h-80 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-lg font-medium">Image Here</span>
          </div>
          <div className="absolute inset-0 bg-forest bg-opacity-60 flex items-center justify-center">
            <div className="text-center text-cream">
              <h3 className="text-3xl font-playfair font-bold mb-4">The Writing Process</h3>
              <p className="text-lg max-w-2xl mx-auto px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
