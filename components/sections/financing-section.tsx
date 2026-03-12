"use client";

import { useState, useEffect } from "react";
import { FINANCING_OPTIONS } from "@/lib/financing";
import { ArrowRight, CreditCard, PiggyBank, Wallet } from "lucide-react";

const getIcon = (index: number) => {
  const icons = [CreditCard, PiggyBank, Wallet, CreditCard];
  return icons[index % icons.length];
};

export function FinancingSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-[#0A6CFF] to-[#0052CC] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute -right-32 top-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -left-32 bottom-0 w-96 h-96 bg-[#00B894]/30 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#0A6CFF] uppercase bg-white/20 rounded-full">
            Payment Options
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Flexible Payment Plans
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Quality dental care shouldn&apos;t break the bank. We offer flexible financing 
            options to make your treatment affordable and stress-free.
          </p>
        </div>

        {/* Financing Options Grid - 4 columns as per SPEC */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FINANCING_OPTIONS.map((option, index) => {
            const Icon = getIcon(index);
            return (
              <div
                key={option.id}
                className={`group relative p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#00B894]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#00B894]/20 flex items-center justify-center mb-5 group-hover:bg-[#00B894] group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-[#00B894] group-hover:text-white transition-colors" />
                </div>

                <h3 className="font-serif text-xl text-white mb-3">
                  {option.name}
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  {option.description}
                </p>

                {/* Button - Defined Colors */}
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#00B894] group-hover:gap-3 transition-all">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Help Text */}
        <div className={`text-center mt-10 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <p className="text-white/60">
            Have questions about payment options?{' '}
            <a href="tel:+12815550123" className="text-[#00B894] font-semibold hover:underline">
              Call us
            </a>{' '}
            for personalized assistance.
          </p>
        </div>
      </div>
    </section>
  );
}
