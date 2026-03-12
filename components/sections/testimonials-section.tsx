"use client";

import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('testimonials-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    {
      quote: "The bilingual staff is wonderful! They explained everything in Spanish to my mother, and she was so grateful. Great family dentistry.",
      name: "Robert M.",
      location: "Katy, TX",
      rating: 5,
    },
    {
      quote: "Same-day emergency appointment saved me! They were so understanding and took care of my toothache immediately. Truly caring professionals.",
      name: "Jennifer K.",
      location: "Katy, TX",
      rating: 5,
    },
    {
      quote: "Love the financing options. They helped me get the dental work I needed without breaking the bank. The whole team is fantastic!",
      name: "David P.",
      location: "Katy, TX",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials-section" className="py-28 bg-[--color-slate-50] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-12 w-40 h-40 border border-[--color-accent]/10 rounded-full" />
        <div className="absolute bottom-12 right-12 w-48 h-48 border border-[--color-primary]/10 rounded-full" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header - More Spacing */}
        <div 
          className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block px-5 py-2 mb-5 text-xs font-semibold tracking-wider text-[--color-accent] uppercase bg-[--color-accent]/10 rounded-full">
            Testimonials
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-[--color-slate-800] mb-5">
            What Our Patients Say
          </h2>
          <p className="text-[--color-slate-500] max-w-2xl mx-auto text-lg">
            Real reviews from families in Katy, Texas who trust us with their smiles.
          </p>
        </div>

        {/* Testimonials Grid - More Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative p-10 bg-white rounded-2xl border-2 border-transparent hover:border-[--color-primary]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[--color-primary]/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-[--color-slate-50] flex items-center justify-center">
                <Quote className="w-6 h-6 text-[--color-primary]/30" />
              </div>

              {/* Stars - Green */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[--color-accent] fill-[--color-accent]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[--color-slate-600] leading-relaxed mb-8 text-base">
                "{testimonial.quote}"
              </blockquote>

              {/* Author - Larger Avatar */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[--color-primary]/10 flex items-center justify-center">
                  <span className="text-[--color-primary] font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-[--color-slate-800]">{testimonial.name}</p>
                  <p className="text-sm text-[--color-slate-400]">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge - More Spacing */}
        <div 
          className={`text-center mt-16 transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <a 
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-8 py-4 bg-white border border-[--color-slate-200] rounded-full hover:border-[--color-primary]/30 hover:shadow-lg transition-all"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[--color-accent] fill-[--color-accent]" />
              ))}
            </div>
            <span className="text-[--color-slate-700] font-medium">
              See all 200+ reviews on Google
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
