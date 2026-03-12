"use client";

import { useEffect, useState } from "react";
import { SERVICES } from "@/lib/services";
import { ArrowRight, Sparkles } from "lucide-react";

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('services-section');
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
    <section id="services-section" className="py-28 bg-[--color-slate-50] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[--color-primary]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[--color-accent]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header - More Spacing */}
        <div 
          className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block px-5 py-2 mb-5 text-xs font-semibold tracking-wider text-[--color-primary] uppercase bg-[--color-primary]/10 rounded-full">
            Our Services
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-[--color-slate-800] mb-5">
            Complete Dental Care for Your Family
          </h2>
          <p className="text-[--color-slate-500] max-w-2xl mx-auto text-lg">
            From routine cleanings to advanced procedures, we offer a full range of 
            dental services to meet all your oral health needs.
          </p>
        </div>

        {/* Services Grid - More Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <a
              key={service.id}
              href={service.href}
              className={`group relative overflow-hidden rounded-2xl bg-white border-2 border-transparent hover:border-[--color-primary]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[--color-primary]/10 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80 + 200}ms` }}
            >
              {/* Card Content - More Padding */}
              <div className="p-10">
                {/* Icon Placeholder */}
                <div className="w-16 h-16 rounded-2xl bg-[--color-primary]/10 flex items-center justify-center mb-6 group-hover:bg-[--color-primary] group-hover:scale-110 transition-all duration-300">
                  <Sparkles className="w-8 h-8 text-[--color-primary] group-hover:text-white transition-colors" />
                </div>

                <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[--color-slate-800] mb-3 group-hover:text-[--color-primary] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-[--color-slate-500] leading-relaxed mb-5">
                  {service.description}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[--color-accent] group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[--color-slate-50] rotate-45 translate-x-10 -translate-y-10 group-hover:bg-[--color-primary]/10 transition-colors" />
              </div>
            </a>
          ))}
        </div>

        {/* View All Services - More Spacing */}
        <div 
          className={`text-center mt-16 transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <a 
            href="/services"
            className="inline-flex items-center gap-3 px-9 py-5 bg-[--color-slate-800] text-white font-medium rounded-full hover:bg-[--color-primary] transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
