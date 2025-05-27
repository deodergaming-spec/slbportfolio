import { Card, CardContent } from "@/components/ui/card";

export default function Writing() {
  const books = [
    {
      title: "Book Title",
      type: "Genre/Type",
      year: "2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cover: null
    },
    {
      title: "Book Title",
      type: "Genre/Type",
      year: "2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cover: null
    },
    {
      title: "Book Title",
      type: "Genre/Type",
      year: "2021",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
          <h2 className="text-4xl font-playfair font-bold text-forest mb-4">Writing Portfolio</h2>
          <p className="text-xl text-charcoal max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Published Books */}
          <div>
            <h3 className="text-2xl font-playfair font-semibold text-forest mb-8">Published Works</h3>
            
            <div className="space-y-8">
              {books.map((book, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="w-20 h-28 bg-gray-200 rounded shadow-lg flex-shrink-0 flex items-center justify-center">
                    <span className="text-gray-500 text-xs text-center">Image Here</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-playfair font-semibold text-forest mb-2">
                      {book.title}
                    </h4>
                    <p className="text-charcoal text-sm mb-2">
                      {book.type} • {book.year}
                    </p>
                    <p className="text-charcoal leading-relaxed">
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
