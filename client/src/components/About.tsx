export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-pixel font-bold text-black mb-8">About Sarah</h2>
            <div className="prose prose-lg text-black space-y-6">
              <p>
                Sarah is a writer and director from County Durham.
              </p>
              <p>
                In 2023, her debut play 'Seagulls and Sad Sad Stories' was the winner of the inaugural Richard Jenkinson Commission. The show enjoyed a very successful run at Laurels, Whitley Bay and the play text was published by Methuen Drama in December 2024. In 2025, she was nominated for Best Writer at The Stage Debut Awards.
                
              </p>
              <p>
                Sarah began her theatre journey as a volunteer, working with young people in deprived areas on a number of choir, drama, film, and musical productions. In 2022, she directed the regional amateur debut production of 'School of Rock: The Next Generation' at the Tyne Theatre and Opera House.
              </p>
              <p>
                After graduating from Newcastle University, Sarah worked as a Creative Advertising Copywriter for a major media company. She wrote multimedia advertising campaigns for regional and national clients, and worked as a professional voiceover artist.
              </p>
              <p>
                In 2022, she participated in the WriteMentor summer programme with her debut novel 'The Mystics of Little Edmunswick'. In 2024, the novel was shortlisted for the Searchlight Awards 'Best Novel Opening' prize. The work is still in development.
              </p>
              <p>
                Sarah is a fan of anything mystical, magical, or supernatural. Her works include screenplays, stage plays, novels, and picture books. She enjoys exploring themes of class, coming-of-age adventures, friendship, and the supernatural!
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="w-full aspect-square rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="/sarah-headshot-new.png" 
                alt="Sarah Bond headshot"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
