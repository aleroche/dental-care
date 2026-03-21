"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Globe2 } from "lucide-react";

const teamImage = "https://miramarfamilydental.com/wp-content/uploads/2025/09/mfd-new-team-image.webp";

export function BilingualSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-r from-[#00896B] to-[#006B52] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#006B52]/60 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 -right-5 bg-white dark:bg-[#1E293B] rounded-xl p-5 shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <Globe2 className="w-8 h-8 text-[#00896B] dark:text-[#00D9A5]" />
                <div>
                  <p className="font-bold text-[#1E293B] dark:text-white text-sm">Bilingual Care</p>
                  <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">English & Spanish</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`text-white transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Badge - White text on green bg for contrast */}
            <span className="inline-block px-5 py-2 mb-6 text-sm font-bold text-[#006B52] uppercase bg-white rounded-full shadow-md">
              Language No Barrier
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Services Available in <span className="italic font-light">English & Spanish</span>
            </h2>
            
            <p className="text-white/95 text-lg mb-6 leading-relaxed">
              At MiraMar Family Dental, we believe language should never be a barrier 
              to receiving quality dental care. Our bilingual team is dedicated to 
              making every patient feel comfortable and understood.
            </p>

            <p className="text-white/95 mb-8 leading-relaxed">
              From your first phone call to your final treatment, our team communicates 
              in your preferred language, ensuring you fully understand your oral health 
              and treatment options.
            </p>

            {/* Button - Better contrast */}
            <button className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-white text-[#006B52] font-bold rounded-lg hover:bg-[#F1F5F9] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg">
              Meet Our Team
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
