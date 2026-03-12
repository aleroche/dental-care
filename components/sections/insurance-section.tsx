"use client";

import { useEffect, useState } from "react";
import { INSURANCE_PROVIDERS } from "@/lib/insurance";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function InsuranceSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('insurance-section');
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
    <section id="insurance-section" className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[--color-primary]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header - More Spacing */}
        <div 
          className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block px-5 py-2 mb-5 text-xs font-semibold tracking-wider text-[--color-primary] uppercase bg-[--color-primary]/10 rounded-full">
            Insurance
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-[--color-slate-800] mb-5">
            We Accept Most Dental Insurance
          </h2>
          <p className="text-[--color-slate-500] max-w-2xl mx-auto text-lg">
            We work with major insurance providers to help you get the dental care 
            you deserve. Our team handles the paperwork so you can focus on your smile.
          </p>
        </div>

        {/* Insurance Logos Grid - More Spacing */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12 transition-all duration-700 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {INSURANCE_PROVIDERS.map((provider, index) => (
            <div
              key={provider.id}
              className="group flex items-center justify-center p-8 bg-[--color-slate-50] rounded-xl border border-transparent hover:border-[--color-primary]/20 hover:shadow-lg hover:shadow-[--color-primary]/10 transition-all duration-300"
            >
              <span className="text-[--color-slate-600] font-semibold text-sm text-center group-hover:text-[--color-primary] transition-colors">
                {provider.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-700 delay-400 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 text-[--color-slate-500]">
            <ShieldCheck className="w-6 h-6 text-[--color-primary]" />
            <span className="text-base">Don't see your insurance? Call us to verify.</span>
          </div>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 text-[--color-accent] font-semibold hover:gap-3 transition-all"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
