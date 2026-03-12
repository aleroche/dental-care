"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Globe2 } from "lucide-react";

export function BilingualSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('bilingual-section');
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

  return (
    <section id="bilingual-section" className="py-28 bg-gradient-to-r from-[--color-accent] to-[--color-accent-dark] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div 
            className={`relative transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              
              {/* Decorative */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-10">
                  <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                    <span className="text-5xl">🇺🇸</span>
                  </div>
                  <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                    <span className="text-5xl">🇲🇽</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-8 shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <Globe2 className="w-10 h-10 text-[--color-accent]" />
                <div>
                  <p className="font-bold text-[--color-slate-800] text-lg">Bilingual Care</p>
                  <p className="text-sm text-[--color-slate-500]">English & Spanish</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div 
            className={`text-white transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <span className="inline-block px-5 py-2 mb-5 text-xs font-semibold tracking-wider text-[--color-accent] uppercase bg-white/20 rounded-full">
              Language No Barrier
            </span>
            
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl mb-6 leading-tight">
              Dental Care in Your <span className="italic font-light">Language</span>
            </h2>
            
            <p className="text-white/85 text-lg mb-6 leading-relaxed">
              At MiraMar Family Dental, we believe language should never be a barrier 
              to receiving quality dental care. Our bilingual team is dedicated to 
              making every patient feel comfortable and understood, whether you prefer 
              English or Spanish.
            </p>

            <p className="text-white/85 mb-10 leading-relaxed">
              From your first phone call to your final treatment, our team communicates 
              in your preferred language, ensuring you fully understand your oral health 
              and treatment options.
            </p>

            <button className="inline-flex items-center gap-3 px-9 py-5 bg-white text-[--color-accent] font-semibold rounded-full hover:bg-[--color-slate-50] transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Meet Our Team
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
