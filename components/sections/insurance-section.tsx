"use client";

import { useState, useEffect } from "react";
import { INSURANCE_PROVIDERS } from "@/lib/insurance";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function InsuranceSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0A6CFF]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#0A6CFF] uppercase bg-[#0A6CFF]/10 rounded-full">
            Insurance
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1E293B] mb-4">
            We Accept Most Dental Insurance
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            We work with major insurance providers to help you get the dental care 
            you deserve. Our team handles the paperwork so you can focus on your smile.
          </p>
        </div>

        {/* Insurance Logos Grid - 6 providers as per SPEC */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          {INSURANCE_PROVIDERS.map((provider, index) => (
            <div
              key={provider.id}
              className="group flex items-center justify-center p-6 bg-white rounded-xl border border-[#E2E8F0] hover:border-[#0A6CFF]/20 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-[#475569] font-semibold text-sm text-center group-hover:text-[#0A6CFF] transition-colors">
                {provider.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <div className="flex items-center gap-3 text-[#64748B]">
            <ShieldCheck className="w-5 h-5 text-[#0A6CFF]" />
            <span className="text-sm">Don&apos;t see your insurance? Call us to verify.</span>
          </div>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 text-[#00B894] font-semibold text-sm hover:gap-3 transition-all"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
