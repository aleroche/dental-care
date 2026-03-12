"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Globe2 } from "lucide-react";

const teamImage = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80";

export function BilingualSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-r from-[#00B894] to-[#009975] relative overflow-hidden">
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
        <div className="absolute -right-32 top-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -left-32 bottom-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className={`relative transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={teamImage} 
                alt="Our bilingual dental team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#009975]/60 via-transparent to-transparent" />
              
              {/* Language Badges */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-center gap-6">
                <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex items-center gap-3">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="font-semibold text-[#1E293B]">English</span>
                </div>
                <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex items-center gap-3">
                  <span className="text-2xl">🇪🇸</span>
                  <span className="font-semibold text-[#1E293B]">Español</span>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-xl p-5 shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <Globe2 className="w-8 h-8 text-[#00B894]" />
                <div>
                  <p className="font-bold text-[#1E293B] text-sm">Bilingual Care</p>
                  <p className="text-xs text-[#64748B]">English & Spanish</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`text-white transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <span className="inline-block px-4 py-1.5 mb-5 text-sm font-semibold text-[#009975] uppercase bg-white/20 rounded-full">
              Language No Barrier
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Services Available in <span className="italic font-light">English & Spanish</span>
            </h2>
            
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              At MiraMar Family Dental, we believe language should never be a barrier 
              to receiving quality dental care. Our bilingual team is dedicated to 
              making every patient feel comfortable and understood.
            </p>

            <p className="text-white/90 mb-8 leading-relaxed">
              From your first phone call to your final treatment, our team communicates 
              in your preferred language, ensuring you fully understand your oral health 
              and treatment options.
            </p>

            {/* Button - Defined Colors */}
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#00B894] font-semibold rounded-lg hover:bg-[#F1F5F9] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg">
              Meet Our Team
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
