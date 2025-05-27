import { Card, CardContent } from "@/components/ui/card";

export default function Writing() {
  const books = [
    {
      title: "The Distant Shore",
      type: "Literary Fiction",
      year: "2023",
      description: "A haunting tale of memory and belonging that follows three generations of women as they navigate love, loss, and the stories that define us.",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=300"
    },
    {
      title: "Broken Monologues",
      type: "Drama Collection",
      year: "2022",
      description: "A collection of powerful monologues exploring contemporary issues with raw honesty and theatrical flair.",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=300"
    },
    {
      title: "Finding Voice",
      type: "Creative Non-Fiction",
      year: "2021",
      description: "Essays on the creative process, artistic authenticity, and the journey of finding one's voice in the performing arts.",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=300"
    }
  ];

  const plays = [
    {
      title: "Fragments of Light",
      type: "Full-length Drama",
      year: "2023",
      description: "A masterful exploration of grief and healing that showcases Mitchell's ability to find beauty in the darkest moments.",
      awards: "Regional Theatre Award for Best New Play"
    },
    {
      title: "The Garden Party",
      type: "One-Act Comedy",
      year: "2022",
      description: "A witty examination of social dynamics and family secrets that unfold during a seemingly innocent garden party.",
      productions: "5 regional theaters, 2 international"
    },
    {
      title: "Digital Natives",
      type: "Contemporary Drama",
      year: "2023",
      description: "An urgent exploration of technology's impact on human connection, told through the lens of three generations.",
      status: "Currently in development"
    }
  ];

  return (
    <section id="writing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-forest mb-4">Writing Portfolio</h2>
          <p className="text-xl text-charcoal max-w-2xl mx-auto">
            From stage to page, explore a diverse collection of plays, novels, and essays that capture the human experience through compelling storytelling.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Published Books */}
          <div>
            <h3 className="text-2xl font-playfair font-semibold text-forest mb-8">Published Works</h3>
            
            <div className="space-y-8">
              {books.map((book, index) => (
                <div key={index} className="flex space-x-4">
                  <img 
                    src={book.cover}
                    alt={`Book cover for ${book.title}`}
                    className="w-20 h-28 object-cover rounded shadow-lg flex-shrink-0" 
                  />
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
          <img 
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600" 
            alt="Creative writing workspace with typewriter and books" 
            className="w-full h-64 md:h-80 object-cover" 
          />
          <div className="absolute inset-0 bg-forest bg-opacity-60 flex items-center justify-center">
            <div className="text-center text-cream">
              <h3 className="text-3xl font-playfair font-bold mb-4">The Writing Process</h3>
              <p className="text-lg max-w-2xl mx-auto px-4">Where imagination meets craft, and stories find their voice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
