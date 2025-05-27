export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-playfair font-bold text-forest mb-8">About Sarah</h2>
            <div className="prose prose-lg text-charcoal space-y-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
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
            <div className="w-full h-96 bg-gray-200 rounded-2xl shadow-2xl flex items-center justify-center">
              <span className="text-gray-500 text-lg font-medium">Image Here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
