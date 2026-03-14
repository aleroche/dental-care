"use client";

import { useState, useEffect } from "react";
import { SERVICES } from "@/lib/services";
import { ArrowRight } from "lucide-react";

const serviceImages: Record<string, string> = {
  "preventive-dentistry": "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-odontologia-preventiva-1024x1024.webp",
  "oral-surgery": "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-cirugia-1024x1024.webp",
  "restorative-dentistry": "https://miramarfamilydental.com/wp-content/uploads/2024/03/image-1-1024x1024.webp",
  "endodontics": "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-endodoncia-1-1024x1024.webp",
  "cosmetic-dentistry": "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-cosmetica-sonrisa-1024x1024.webp",
  "periodontics": "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-oral-surgery-1024x1024.webp",
  "orthodontics": "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-ortodoncia-1024x1024.webp",
  "pediatric-dentistry": "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-odontontologia-pediatrica-1024x1024.webp",
  "other-services-and-treatments": "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-otros-tratamientos-ferula-de-descarga-1-1024x683.webp",
};

export function ServicesSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-[#0F172A] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-[#0A6CFF]/5 dark:bg-[#0A6CFF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-[#00B894]/5 dark:bg-[#00B894]/10 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#0A6CFF] dark:text-[#4D94FF] uppercase bg-[#0A6CFF]/10 dark:bg-[#0A6CFF]/20 rounded-full">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1E293B] dark:text-white mb-4">
            Comprehensive Dental Care for the Whole Family
          </h2>
          <p className="text-[#64748B] dark:text-[#94A3B8] max-w-2xl mx-auto">
            From routine cleanings to advanced procedures, we offer a full range of
            dental services to meet all your oral health needs.
          </p>
        </div>

        {/* Services Grid - Full overlay cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {SERVICES.map((service, index) => (
            <a
              key={service.id}
              href={service.href}
              className={`group relative overflow-hidden aspect-[4/5] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 80 + 200}ms` }}
            >
              {/* Image */}
              <img
                src={serviceImages[service.id] || serviceImages["preventive-dentistry"]}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Decorative accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A6CFF] to-[#00B894] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              {/* Content - Bottom aligned */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Title */}
                <h3 className="font-serif text-2xl md:text-3xl text-white font-semibold mb-3 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                  {service.title}
                </h3>
                
                {/* Description - Hidden by default, shown on hover */}
                <p className="text-white/70 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {service.description}
                </p>
                
                {/* CTA - Shown on hover */}
                <span className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold text-[#00B894] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  Discover more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-12 h-12 border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </a>
          ))}
        </div>

        {/* View All Services */}
        <div className={`text-center mt-12 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <a
            href="/services"
            className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-[#0A6CFF] text-white font-semibold rounded-lg hover:bg-[#0052CC] dark:hover:bg-[#4D94FF] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#0A6CFF]/25"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom border for visual separation */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E2E8F0] dark:via-[#334155] to-transparent" />
    </section>
  );
}
