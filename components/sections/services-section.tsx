"use client";

import { useState, useEffect } from "react";
import { SERVICES } from "@/lib/services";
import { ArrowRight } from "lucide-react";

const serviceImages: Record<string, string> = {
  "dental-cleanings": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
  "dental-implants": "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80",
  "cosmetic-dentistry": "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
  "orthodontics": "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=600&q=80",
  "root-canals": "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=600&q=80",
  "pediatric-dentistry": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
  "teeth-whitening": "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=600&q=80",
  "emergency-dental": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
  "preventive-dentistry": "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80",
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

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A6CFF] group-hover:gap-3 transition-all">
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
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0A6CFF] text-white font-semibold rounded-lg hover:bg-[#0052CC] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#0A6CFF]/25"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
