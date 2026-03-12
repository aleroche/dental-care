"use client";

import { useEffect, useState } from "react";
import { FINANCING_OPTIONS } from "@/lib/financing";
import { ArrowRight, CreditCard, PiggyBank, Wallet } from "lucide-react";

export function FinancingSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('financing-section');
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

  const getIcon = (index: number) => {
    const icons = [CreditCard, PiggyBank, Wallet];
    return icons[index % icons.length];
  };

  return (
    <section id="financing-section" className="py-28 bg-gradient-to-r from-[--color-primary] to-[--color-primary-dark] relative overflow-hidden">
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[--color-accent]/30 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header - More Spacing */}
        <div 
          className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block px-5 py-2 mb-5 text-xs font-semibold tracking-wider text-[--color-primary] uppercase bg-white/20 rounded-full">
            Payment Options
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-white mb-5">
            Flexible Payment Plans
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Quality dental care shouldn't break the bank. We offer flexible financing 
            options to make your treatment affordable and stress-free.
          </p>
        </div>

        {/* Financing Options Grid - More Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FINANCING_OPTIONS.map((option, index) => {
            const Icon = getIcon(index);
            return (
              <div
                key={option.id}
                className={`group relative p-10 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[--color-accent]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[--color-accent]/10 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-[--color-accent]/20 flex items-center justify-center mb-6 group-hover:bg-[--color-accent] group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-[--color-accent] group-hover:text-white transition-colors" />
                </div>

                <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-white mb-3">
                  {option.name}
                </h3>
                
                <p className="text-white/70 leading-relaxed mb-5">
                  {option.description}
                </p>

                <button className="inline-flex items-center gap-2 text-sm font-semibold text-[--color-accent] group-hover:gap-3 transition-all">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Help Text - More Spacing */}
        <div 
          className={`text-center mt-16 transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-white/60 text-lg">
            Have questions about payment options?{' '}
            <a href="tel:+12819999999" className="text-[--color-accent] font-semibold hover:underline">
              Call us
            </a>{' '}
            for personalized assistance.
          </p>
        </div>
      </div>
    </section>
  );
}
