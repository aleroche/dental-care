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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-[#0A6CFF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-[#00B894]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#0A6CFF] uppercase bg-[#0A6CFF]/10 rounded-full">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1E293B] mb-4">
            Comprehensive Dental Care for the Whole Family
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            From routine cleanings to advanced procedures, we offer a full range of
            dental services to meet all your oral health needs.
          </p>
        </div>

        {/* Services Grid - 3x3 as per SPEC */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <a
              key={service.id}
              href={service.href}
              className={`group relative overflow-hidden rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#0A6CFF]/20 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 80 + 200}ms` }}
            >
              {/* Image Background */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={serviceImages[service.id] || serviceImages["dental-cleanings"]}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-transparent to-transparent" />

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-xl text-white font-semibold">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-[#64748B] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <span className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold text-[#0A6CFF] group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              {/* Hover Accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-[#0A6CFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>

        {/* View All Services - Defined Button Color */}
        <div className={`text-center mt-12 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <a
            href="/services"
            className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-[#0A6CFF] text-white font-semibold rounded-lg hover:bg-[#0052CC] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#0A6CFF]/25"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
