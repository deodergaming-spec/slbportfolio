import { useRoute } from "wouter";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function GalleryDetail() {
  const params = useParams();
  const { category, item } = params;

  // Sample data - in a real app, this would come from a database
  const galleryItems = [
    {
      title: "Seagulls and Sad Sad Stories - Production",
      category: "Theatre",
      description: "Behind the scenes from the award-winning production",
      slug: "seagulls-and-sad-sad-stories---production",
      images: [
        { url: null, caption: "Rehearsal process" },
        { url: null, caption: "Set design" },
        { url: null, caption: "Cast performance" },
        { url: null, caption: "Audience reaction" }
      ],
      longDescription: "An intimate look at the production of 'Seagulls and Sad Sad Stories', showcasing the collaborative process between director and cast members."
    },
    {
      title: "Writing Workshop",
      category: "Writing",
      description: "Leading creative writing sessions",
      slug: "writing-workshop",
      images: [
        { url: null, caption: "Workshop participants" },
        { url: null, caption: "Creative exercises" },
        { url: null, caption: "Group discussion" }
      ],
      longDescription: "Sarah leading an intensive writing workshop, focusing on character development and narrative structure."
    },
    {
      title: "Theatre Collaboration",
      category: "Theatre",
      description: "Working with young performers",
      slug: "theatre-collaboration",
      images: [
        { url: null, caption: "Director guidance" },
        { url: null, caption: "Young performers" },
        { url: null, caption: "Collaborative process" }
      ],
      longDescription: "A collaborative theatre project working with emerging young talent in the North East theatre scene."
    },
    {
      title: "Creative Process",
      category: "Writing",
      description: "Sarah's writing workspace and process",
      slug: "creative-process",
      images: [
        { url: null, caption: "Writing desk" },
        { url: null, caption: "Notebook pages" },
        { url: null, caption: "Research materials" }
      ],
      longDescription: "An insight into Sarah's creative writing process, from initial inspiration to final manuscript."
    }
  ];

  const currentItem = galleryItems.find(
    galleryItem => galleryItem.category.toLowerCase() === category && galleryItem.slug === item
  );

  if (!currentItem) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-24 pb-12 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-pixel font-bold text-white mb-6">
              Item Not Found
            </h1>
            <Link href="/gallery" className="text-silver hover:text-white transition-colors duration-200">
              ← Back to Gallery
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Page Header */}
      <div className="pt-24 pb-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-pixel font-bold text-white mb-6">
            {currentItem.title}
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto mb-4">
            {currentItem.longDescription}
          </p>
          <span className="inline-block bg-silver text-black px-4 py-2 rounded-full text-sm font-medium mb-6">
            {currentItem.category}
          </span>
          <div className="mt-8">
            <Link href="/gallery" className="text-silver hover:text-white transition-colors duration-200">
              ← Back to Gallery
            </Link>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="py-20 bg-light-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentItem.images.map((image, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-medium">Image Here</span>
                </div>
                <div className="p-4">
                  <p className="text-black text-sm font-medium">{image.caption}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}