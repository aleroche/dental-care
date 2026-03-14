"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/lib/team";
import { ArrowRight, Linkedin } from "lucide-react";

const teamImages: Record<string, string> = {
  "dr-keyttia-beovides": "https://miramarfamilydental.com/wp-content/uploads/elementor/thumbs/DrKeyttiaBeovides-consultorio-rgvvp61lhr67t812swuzm3e994t3nslp2evnammykc.webp",
  "dr-tihany-rodriguez": "https://miramarfamilydental.com/wp-content/uploads/elementor/thumbs/dr-rodriguez-rbyrlgx6oompjz8xf45rjmy9f0rfsjwvme4ngbfou4.webp",
  "helen-vega": "https://miramarfamilydental.com/wp-content/uploads/elementor/thumbs/Helen-hygienist-rgx7tc0ltsdkw1yn65fqzhku896lby6ivu6pwcc67w.webp",
};

export function TeamSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-[#F8FAFC] dark:bg-[#1E293B] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 border border-[#0A6CFF]/10 dark:border-[#0A6CFF]/5 rounded-full" />
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-[#00B894]/10 dark:border-[#00B894]/5 rounded-full" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#0A6CFF]/5 dark:bg-[#0A6CFF]/10 rounded-full blur-3xl" />
      </div>

      {/* Top border for visual separation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E2E8F0] dark:via-[#334155] to-transparent" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#00B894] dark:text-[#00D9A5] uppercase bg-[#00B894]/10 dark:bg-[#00B894]/20 rounded-full">
            Our Team
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1E293B] dark:text-white mb-4">
            Meet Our Dental Experts
          </h2>
          <p className="text-[#64748B] dark:text-[#94A3B8] max-w-2xl mx-auto">
            Experienced professionals dedicated to creating healthy, beautiful smiles
            for your entire family.
          </p>
        </div>

        {/* Team Grid - Full overlay cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-3xl overflow-hidden">
          {TEAM_MEMBERS.map((member, index) => (
            <a
              key={member.id}
              href={`/about/${member.id}`}
              className={`group relative overflow-hidden aspect-[3/4] md:aspect-[4/5] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Image */}
              <Image
                src={teamImages[member.id] || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80"}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Gradient Overlay - Always visible but stronger on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Accent line at bottom */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A6CFF] to-[#00B894] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Content - Always visible, enhanced on hover */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Name */}
                <h3 className="font-serif text-3xl md:text-4xl text-white font-bold mb-1 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                  {member.name}
                </h3>
                
                {/* Title */}
                <p className="text-[#00B894] dark:text-[#00D9A5] font-semibold text-sm mb-3 uppercase tracking-wider">
                  {member.title}
                </p>
                
                {/* Description - Hidden by default */}
                <p className="text-white/60 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {member.description}
                </p>
                
                {/* CTA - Shows on hover */}
                <span className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  View Profile
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              {/* Corner social icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#0A6CFF] hover:border-[#0A6CFF]">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '700ms' }}>
          <a
            href="/contact"
            className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-[#1E293B] dark:bg-[#1E293B] text-white font-semibold rounded-lg hover:bg-[#0A6CFF] dark:hover:bg-[#0A6CFF] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Schedule Your Visit
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
