"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/shared/header";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const thumbnailStyles = `
  .yarl__thumbnails_thumbnail {
    border: none !important;
    box-shadow: none !important;
  }
  .yarl__thumbnails_thumbnail::before {
    border: none !important;
  }
  .yarl__thumbnails_thumbnail[data-active="true"] {
    outline: 2px solid #5EC8F2;
    outline-offset: -2px;
  }
  :global(.dark) .yarl__thumbnails_thumbnail[data-active="true"] {
    outline: 2px solid #38bdf8;
    outline-offset: -2px;
  }
`;

const galleryImages = [
  {
    src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/miramarfamilydental_1548787986_1967698708021599110_8597807466.jpg",
    alt: "MiraMar Family Dental office",
    title: "Our Office",
  },
  {
    src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/miramarfamilydental_1542339136_1913601827481713115_8597807466.jpg",
    alt: "Dental team",
    title: "Our Team",
  },
  {
    src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/miramarfamilydental_1582328953_2249060729349378278_8597807466.jpg",
    alt: "Dental equipment",
    title: "Modern Equipment",
  },
  {
    src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/miramarfamilydental_1598033532_2380800290042725983_8597807466.jpg",
    alt: "Patient care",
    title: "Patient Care",
  },
  {
    src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/miramarfamilydental_1601661146_2411230921310435554_8597807466.jpg",
    alt: "Dental treatment room",
    title: "Treatment Rooms",
  },
  {
    src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/miramarfamilydental_1577739783_2210563979957647424_8597807466.jpg",
    alt: "Dental care",
    title: "Quality Care",
  },
  {
    src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/miramarfamilydental_1568733167_2135011013146614895_8597807466.jpg",
    alt: "Dental procedure",
    title: "Expert Procedures",
  },
  {
    src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/miramarfamilydental_1563910914_2094559018749294111_8597807466.jpg",
    alt: "Family dental care",
    title: "Family Care",
  },
];

export default function DrKeyttiaBeovidesPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const slides = galleryImages.map((image) => ({
    src: image.src,
    alt: image.alt,
  }));

  return (
    <>
      <style jsx global>{thumbnailStyles}</style>
    <main>
      <Header title="Meet Dr. Keyttia Beovides" />

      <section className="bg-white dark:bg-slate-900 py-12 md:py-16">
        <div className="container-wide w-full">
          <div className="animate-fade-in-up px-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="https://miramarfamilydental.com/wp-content/uploads/2025/12/DrKeyttiaBeovides-consultorio.webp"
                  alt="Dr. Keyttia Beovides"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-[#5EC8F2] dark:text-sky-400 font-semibold text-sm uppercase tracking-wider mb-2">
                    General Dentist & Founder
                  </p>
                  <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1E293B] dark:text-white font-bold leading-tight">
                    Dr. Keyttia Beovides
                  </h1>
                </div>

                <div className="text-[#475569] dark:text-[#94A3B8] text-base leading-relaxed space-y-4">
                  <p>
                    I'm Dr. Keyttia Beovides, a general dentist and the founder of MiraMar Family Dental. I was born and raised in Cuba, I'm a proud mom of three, and I've loved dentistry since I was a child on that beautiful Caribbean island.
                  </p>
                  <p>
                    What guides my work is simple: help patients feel confident when they smile, and make sure they truly understand how to protect their oral health—because prevention and clear education change everything. I take the time to explain each step, answer questions, and create a calm, respectful experience in English or Spanish.
                  </p>
                  <p>
                    I earned my dental degree from the Institute of Medical Sciences in Havana in 2003, and practiced in Cuba and Venezuela before moving to the United States in January 2010.
                  </p>
                  <p>
                    In 2014, I was accepted into the International Program for Dentists at the University of Pennsylvania School of Dental Medicine, where I completed my DMD. I've been licensed in Texas since 2016, serving patients across Houston—especially in Katy and Cypress.
                  </p>
                  <p>
                    Outside the office, I enjoy cooking, family time, and being around good friends. Helping someone move from pain or worry to relief and peace of mind is still one of the most meaningful parts of what I do.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <div className="bg-[#5EC8F2]/10 dark:bg-sky-500/10 px-4 py-2 rounded-full">
                    <span className="text-[#1E293B] dark:text-white font-medium text-sm">U Penn DMD</span>
                  </div>
                  <div className="bg-[#5EC8F2]/10 dark:bg-sky-500/10 px-4 py-2 rounded-full">
                    <span className="text-[#1E293B] dark:text-white font-medium text-sm">Licensed in Texas</span>
                  </div>
                  <div className="bg-[#5EC8F2]/10 dark:bg-sky-500/10 px-4 py-2 rounded-full">
                    <span className="text-[#1E293B] dark:text-white font-medium text-sm">Bilingual</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-slate-800 py-12 md:py-16">
        <div className="container-wide w-full">
          <div className="animate-fade-in-up px-10" style={{ animationDelay: "200ms" }}>
            <h2 className="font-serif text-2xl md:text-3xl text-[#1E293B] dark:text-white font-bold mb-4">
              Our Gallery
            </h2>
            <p className="text-[#475569] dark:text-[#94A3B8] text-base leading-relaxed mb-10">
              Explore our facilities and discover why so many patients trust us with their oral health care.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <Card
                  key={index}
                  className="overflow-hidden group cursor-pointer bg-white dark:bg-slate-700 border-0"
                  onClick={() => {
                    setPhotoIndex(index);
                    setIsOpen(true);
                  }}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={slides}
        plugins={[Zoom, Thumbnails]}
        styles={{
          container: {
            backgroundColor: "rgba(0, 0, 0, 0.95)",
          },
        }}
        thumbnails={{
          position: "bottom",
          width: 100,
          height: 75,
          gap: 12,
          padding: 8,
          borderRadius: 4,
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
      />
    </main>
    </>
  );
}
