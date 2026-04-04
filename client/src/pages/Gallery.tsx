import { useState, useEffect, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const seagullsImages = [
  "09.12.24_Seagulls_Dress-Rehearsal_LPP-1.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-2.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-3.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-4.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-5.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-6.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-7.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-8.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-9.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-10.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-11.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-12.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-13.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-14.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-15.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-16.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-17.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-18.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-19.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-20.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-21.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-22.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-23.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-24.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-25.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-26.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-27.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-28.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-29.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-30.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-31.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-32.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-33.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-34.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-35.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-36.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-37.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-38.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-39.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-40.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-41.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-42.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-43.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-44.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-45.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-46.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-47.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-48.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-49.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-50.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-51.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-52.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-53.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-54.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-55.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-56.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-57.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-58.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-59.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-60.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-61.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-62.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-63.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-64.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-65.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-66.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-67.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-68.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-69.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-70.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-71.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-72.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-73.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-74.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-75.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-76.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-77.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-78.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-79.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-80.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-81.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-82.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-83.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-84.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-85.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-86.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-87.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-88.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-89.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-90.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-91.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-92.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-93.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-94.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-95.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-96.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-97.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-98.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-99.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-100.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-101.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-102.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-103.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-104.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-105.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-106.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-107.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-108.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-110.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-111.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-112.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-113.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-114.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-115.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-116.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-117.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-118.jpg","09.12.24_Seagulls_Dress-Rehearsal_LPP-119.jpg",
].map(f => `/gallery/seagulls/${f}`);

const schoolOfRockImages = [
  "08.01.23_School-of-Rock-Promo_Tyne-Theatre-Productions_LPP-4.jpg",
  "08.01.23_School-of-Rock-Promo_Tyne-Theatre-Productions_LPP-13.jpg",
  "08.01.23_School-of-Rock-Promo_Tyne-Theatre-Productions_LPP-19.jpg",
  "08.01.23_School-of-Rock-Promo_Tyne-Theatre-Productions_LPP-21.jpg",
  "08.01.23_School-of-Rock-Promo_Tyne-Theatre-Productions_LPP-31--1-.jpg",
  "08.01.23_School-of-Rock-Promo_Tyne-Theatre-Productions_LPP-44.jpg",
  "08.01.23_School-of-Rock-Promo_Tyne-Theatre-Productions_LPP-69.jpg",
  "08.01.23_School-of-Rock-Promo_Tyne-Theatre-Productions_LPP-78.jpg",
  "School-of-Rock_Tyne-Theatre-Productions_Tech-Runs_LPP-20.jpg",
  "School-of-Rock_Tyne-Theatre-Productions_Tech-Runs_LPP-132.jpg",
  "School-of-Rock_Tyne-Theatre-Productions_Tech-Runs_LPP-133--1-.jpg",
  "School-of-Rock_Tyne-Theatre-Productions_Tech-Runs_LPP-135.jpg",
  "School-of-Rock_Tyne-Theatre-Productions_Tech-Runs_LPP-186--1-.jpg",
  "School-of-Rock_Tyne-Theatre-Productions_Tech-Runs_LPP-266.jpg",
  "School-of-Rock_Tyne-Theatre-Productions_Tech-Runs_LPP-271--1-.jpg",
].map(f => `/gallery/school-of-rock/${f}`);

const otherImages = [
  "02.09.25_Orpheus-And-Eurydice_SB_LPP-1--1-.jpg",
  "02.09.25_Orpheus-And-Eurydice_SB_LPP-2.jpg",
  "02.09.25_Orpheus-And-Eurydice_SB_LPP-3--2-.jpg",
  "02.09.25_Orpheus-And-Eurydice_SB_LPP-19.jpg",
  "02.09.25_Orpheus-And-Eurydice_SB_LPP-38--1-.jpg",
  "02.09.25_Orpheus-And-Eurydice_SB_LPP-42--1-.jpg",
].map(f => `/gallery/other/${f}`);

const sections = [
  {
    id: "seagulls",
    title: "Seagulls and Sad Sad Stories",
    subtitle: "Dress Rehearsal · December 2024",
    images: seagullsImages,
    initialCount: 24,
  },
  {
    id: "school-of-rock",
    title: "School of Rock: The Next Generation",
    subtitle: "Tyne Theatre Productions · 2023",
    images: schoolOfRockImages,
    initialCount: 15,
  },
  {
    id: "other",
    title: "Workshops and Other Projects",
    subtitle: "Orpheus and Eurydice · September 2025",
    images: otherImages,
    initialCount: 6,
  },
];

interface LightboxState {
  sectionIndex: number;
  imageIndex: number;
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const openLightbox = (sectionIndex: number, imageIndex: number) => {
    setLightbox({ sectionIndex, imageIndex });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  const navigate = useCallback((dir: 1 | -1) => {
    if (!lightbox) return;
    const section = sections[lightbox.sectionIndex];
    const visibleImages = expanded[section.id] ? section.images : section.images.slice(0, section.initialCount);
    const newIndex = (lightbox.imageIndex + dir + visibleImages.length) % visibleImages.length;
    setLightbox({ ...lightbox, imageIndex: newIndex });
  }, [lightbox, expanded]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, navigate, closeLightbox]);

  const currentImage = lightbox
    ? (() => {
        const section = sections[lightbox.sectionIndex];
        const visibleImages = expanded[section.id] ? section.images : section.images.slice(0, section.initialCount);
        return visibleImages[lightbox.imageIndex];
      })()
    : null;

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-24 pb-14 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-pixel font-bold text-white mb-4">
            Gallery
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A visual journey through Sarah's theatrical productions and creative collaborations
          </p>
          <div className="mt-6">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-zinc-950 py-4 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              {s.title}
            </a>
          ))}
        </div>
      </div>

      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {sections.map((section, sectionIndex) => {
            const isExpanded = !!expanded[section.id];
            const visibleImages = isExpanded
              ? section.images
              : section.images.slice(0, section.initialCount);
            const hasMore = section.images.length > section.initialCount;

            return (
              <div key={section.id} id={section.id}>
                <div className="mb-8 border-b border-zinc-800 pb-5">
                  <h2 className="text-2xl md:text-3xl font-pixel font-bold text-white mb-1">
                    {section.title}
                  </h2>
                  <p className="text-gray-500 text-sm">{section.subtitle} &middot; {section.images.length} photos</p>
                </div>

                <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
                  {visibleImages.map((src, imgIndex) => (
                    <div
                      key={src}
                      className="break-inside-avoid cursor-pointer overflow-hidden rounded-lg group relative"
                      onClick={() => openLightbox(sectionIndex, imgIndex)}
                    >
                      <img
                        src={src}
                        alt={`${section.title} — photo ${imgIndex + 1}`}
                        loading="lazy"
                        className="w-full h-auto block transition-all duration-300 group-hover:brightness-75 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-xs bg-black/60 px-3 py-1 rounded-full">View</span>
                      </div>
                    </div>
                  ))}
                </div>

                {hasMore && (
                  <div className="text-center mt-8">
                    <button
                      onClick={() => setExpanded(prev => ({ ...prev, [section.id]: !isExpanded }))}
                      className="border border-zinc-600 text-gray-300 hover:text-white hover:border-white px-8 py-2 rounded-full text-sm transition-all duration-200"
                    >
                      {isExpanded
                        ? `Show fewer`
                        : `Show all ${section.images.length} photos`}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-24">
          <p className="text-gray-500 mb-5 text-sm">
            All photography by{" "}
            <a href="https://lewispalmerphotography.co.uk" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white underline underline-offset-2 transition-colors duration-200">
              Lewis Palmer Photography
            </a>
          </p>
          <Link
            href="/#contact"
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-200 inline-block text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {lightbox && currentImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={28} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/40 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            aria-label="Previous"
          >
            <ChevronLeft size={32} />
          </button>

          <img
            src={currentImage}
            alt="Gallery image"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/40 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            aria-label="Next"
          >
            <ChevronRight size={32} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
            {lightbox.imageIndex + 1} / {(expanded[sections[lightbox.sectionIndex].id] ? sections[lightbox.sectionIndex].images : sections[lightbox.sectionIndex].images.slice(0, sections[lightbox.sectionIndex].initialCount)).length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
