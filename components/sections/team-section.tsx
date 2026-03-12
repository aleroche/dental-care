"use client";

import { useEffect, useState } from "react";
import { TEAM_MEMBERS } from "@/lib/team";
import { ArrowRight, Linkedin } from "lucide-react";

export function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('team-section');
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
    <section id="team-section" className="py-28 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-12 w-48 h-48 border border-[--color-primary]/10 rounded-full" />
        <div className="absolute bottom-24 right-12 w-40 h-40 border border-[--color-accent]/10 rounded-full" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header - More Spacing */}
        <div 
          className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block px-5 py-2 mb-5 text-xs font-semibold tracking-wider text-[--color-accent] uppercase bg-[--color-accent]/10 rounded-full">
            Our Team
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-[--color-slate-800] mb-5">
            Meet Our Dental Experts
          </h2>
          <p className="text-[--color-slate-500] max-w-2xl mx-auto text-lg">
            Experienced professionals dedicated to creating healthy, beautiful smiles 
            for your entire family.
          </p>
        </div>

        {/* Team Grid - More Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={member.id}
              className={`group relative overflow-hidden rounded-2xl bg-[--color-slate-50] transition-all duration-700 hover:shadow-xl hover:shadow-[--color-primary]/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Image Container - Larger */}
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* Gradient Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-[--color-primary]/10 to-[--color-accent]/5" />
                
                {/* Decorative Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full bg-[--color-primary]/10 flex items-center justify-center">
                    <span className="text-7xl">🦷</span>
                  </div>
                </div>

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[--color-slate-800]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="inline-flex items-center gap-2 px-5 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold hover:bg-white/30 transition-colors">
                    <Linkedin className="w-4 h-4" />
                    View Profile
                  </button>
                </div>
              </div>

              {/* Content - More Padding */}
              <div className="p-8">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[--color-slate-800] mb-2">
                  {member.name}
                </h3>
                <p className="text-[--color-primary] font-semibold text-sm mb-4">
                  {member.title}
                </p>
                <p className="text-[--color-slate-500] text-base leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA - More Spacing */}
        <div 
          className={`text-center mt-16 transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <a 
            href="/contact"
            className="inline-flex items-center gap-3 px-9 py-5 bg-[--color-slate-800] text-white font-medium rounded-full hover:bg-[--color-primary] transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Schedule Your Visit
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
