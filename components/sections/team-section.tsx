"use client";

import { useState, useEffect } from "react";
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
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 border border-[#0A6CFF]/10 rounded-full" />
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-[#00B894]/10 rounded-full" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#0A6CFF]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#00B894] uppercase bg-[#00B894]/10 rounded-full">
            Our Team
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1E293B] mb-4">
            Meet Our Dental Experts
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            Experienced professionals dedicated to creating healthy, beautiful smiles
            for your entire family.
          </p>
        </div>

        {/* Team Grid - 3 cards as per SPEC */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={member.id}
              className={`group relative overflow-hidden rounded-2xl bg-white border border-[#E2E8F0] hover:shadow-xl transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <imgi
                  src={teamImages[member.id] || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social Button */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm font-semibold hover:bg-white/30 transition-colors">
                    <Linkedin className="w-4 h-4" />
                    View Profile
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-[#1E293B] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#0A6CFF] font-semibold text-sm mb-3">
                  {member.title}
                </p>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA - Defined Button Color */}
        <div className={`text-center mt-12 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '700ms' }}>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#1E293B] text-white font-semibold rounded-lg hover:bg-[#0A6CFF] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Schedule Your Visit
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
