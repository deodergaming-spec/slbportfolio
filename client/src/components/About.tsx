export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-playfair font-bold text-forest mb-8">About Sarah</h2>
            <div className="prose prose-lg text-charcoal space-y-6">
              <p>
                With over fifteen years of experience in the theatre industry, Sarah Mitchell has established herself as a visionary director and compelling storyteller. Her work spans from intimate black box productions to large-scale theatrical spectacles, always with a focus on authentic human connection and innovative narrative techniques.
              </p>
              <p>
                As a playwright, Sarah's works have been performed in venues across the country, earning critical acclaim for their nuanced character development and bold exploration of contemporary themes. Her published novels have garnered literary awards and have been praised for their theatrical sensibility and vivid storytelling.
              </p>
              <p>
                Sarah holds an MFA in Theatre Direction from Yale School of Drama and has been a resident artist at several prestigious theatre companies. When not in rehearsals or at her writing desk, she mentors emerging artists and advocates for diverse voices in the performing arts.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-burnt-orange">25+</div>
                <div className="text-sm text-charcoal">Productions Directed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-burnt-orange">12</div>
                <div className="text-sm text-charcoal">Original Plays</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-burnt-orange">3</div>
                <div className="text-sm text-charcoal">Published Books</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
              alt="Professional portrait of Sarah Mitchell" 
              className="rounded-2xl shadow-2xl w-full" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
