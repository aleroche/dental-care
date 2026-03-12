"use client";

import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The best dental experience I've ever had! The team is incredibly gentle and caring. My children actually look forward to their dental visits now.",
    name: "Maria G.",
    location: "Katy, TX",
    rating: 5,
  },
  {
    quote: "Dr. Beovides is amazing! She explained every step of my procedure and made me feel completely at ease. The office is beautiful and modern.",
    name: "John D.",
    location: "Katy, TX",
    rating: 5,
  },
  {
    quote: "We switched to MiraMar Family Dental after a bad experience elsewhere. They made my children feel comfortable and safe. Highly recommend!",
    name: "Sarah L.",
    location: "Katy, TX",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#00B894]/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border border-[#0A6CFF]/10 rounded-full" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#00B894]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#00B894] uppercase bg-[#00B894]/10 rounded-full">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1E293B] mb-4">
            Real Patient Stories at Our Katy Dental Office
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            Real reviews from families in Katy, Texas who trust us with their smiles.
          </p>
        </div>

        {/* Testimonials Grid - Video cards as per SPEC */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#0A6CFF]/20 hover:shadow-xl transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center">
                <Quote className="w-5 h-5 text-[#0A6CFF]/30" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#00B894] fill-[#00B894]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[#475569] text-sm leading-relaxed mb-6">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0A6CFF]/10 flex items-center justify-center">
                  <span className="text-[#0A6CFF] font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-[#1E293B] text-sm">{testimonial.name}</p>
                  <p className="text-xs text-[#94A3B8]">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className={`text-center mt-10 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <a 
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-[#E2E8F0] rounded-lg hover:border-[#0A6CFF]/30 hover:shadow-lg transition-all"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#00B894] fill-[#00B894]" />
              ))}
            </div>
            <span className="text-[#1E293B] text-sm font-medium">
              See all 200+ reviews on Google
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
