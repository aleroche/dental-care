"use client";

import { useState, useEffect } from "react";
import { Star, Play } from "lucide-react";

const testimonials = [
  {
    youtube_embed: "https://www.youtube.com/embed/JkY78xTWT9E",
    youtube_url: "https://www.youtube.com/shorts/JkY78xTWT9E",
    description: "Lulu says that even though she has strong anxiety—especially about injections—at MiraMar Family Dental the doctors were incredibly patient, made her feel safe, and the whole team was excellent, plus they speak Spanish. She adds that she didn't need sedation or to \"go to another doctor,\" and because of the care and service, she recommends the office 100%."
  },
  {
    youtube_embed: "https://www.youtube.com/embed/9n7eRs3sQGs",
    youtube_url: "https://youtube.com/shorts/9n7eRs3sQGs",
    description: "Sylvia says she's had extensive dental work done over the past two months at MiraMar Family Dental and she's very happy with the results and how conscientious the dentists are. She highlights that the care is very affordable, that the team works with her budget as a senior on a fixed income, and she knows exactly where to come if she needs more dental work."
  },
  {
    youtube_embed: "https://www.youtube.com/embed/141yUOIg0qQ",
    youtube_url: "https://youtube.com/shorts/141yUOIg0qQ",
    description: "David Pickett says he's been coming to MiraMar Family Dental for three years and that the entire staff is outstanding—friendly, helpful (even on phone calls), and consistently delivers work they're satisfied with. He adds that as retirees without insurance, they appreciate the fair pricing and how comfortable they feel there, and he recommends the office to anyone looking for a caring, family-like place."
  }
];

export function TestimonialsSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-[#0F172A] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white dark:from-[#0F172A] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-[#0F172A] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00B894]/5 dark:bg-[#00B894]/10 rounded-full blur-3xl" />
      </div>

      {/* Top border for visual separation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E2E8F0] dark:via-[#334155] to-transparent" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#00B894] dark:text-[#00D9A5] uppercase bg-[#00B894]/10 dark:bg-[#00B894]/20 rounded-full">
            Real smiles
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1E293B] dark:text-white mb-4">
            What Our Patients Say
          </h2>
          <p className="text-[#64748B] dark:text-[#94A3B8] max-w-2xl mx-auto">
            Real stories from real patients. See the transformation in their smiles and hear their experiences.
          </p>
        </div>

        {/* Video Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group flex flex-col bg-white dark:bg-[#1E293B] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Video Container */}
              <div className="relative aspect-video w-full">
                <iframe
                  src={`${testimonial.youtube_embed}?rel=0&modestbranding=1&hd=1&hq=1`}
                  title={`Patient testimonial ${index + 1}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Description */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#00B894] fill-[#00B894]" />
                  ))}
                </div>

                <blockquote className="text-[#475569] dark:text-[#CBD5E1] text-sm leading-relaxed mb-4 flex-grow">
                  &quot;{testimonial.description}&quot;
                </blockquote>

                {/* Watch more link */}
                <a
                  href={testimonial.youtube_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold text-[#0A6CFF] dark:text-[#4D94FF] hover:gap-3 transition-all"
                >
                  Watch on YouTube
                  <Play className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className={`text-center mt-16 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <a 
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] rounded-lg hover:border-[#0A6CFF]/30 dark:hover:border-[#0A6CFF]/30 hover:shadow-lg transition-all"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#00B894] fill-[#00B894]" />
              ))}
            </div>
            <span className="text-[#1E293B] dark:text-white text-sm font-medium">
              See all 200+ reviews on Google
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
