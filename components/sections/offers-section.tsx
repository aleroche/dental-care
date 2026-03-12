"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export function OffersSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('offers-section');
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

  const offers = [
    {
      title: "New Patient Special",
      description: "Comprehensive exam, professional cleaning, and X-rays — all at an exclusive rate for first-time visitors.",
      cta: "Claim Offer",
      discount: "20% OFF",
      icon: Sparkles,
    },
    {
      title: "Free Consultation",
      description: "Discuss your dental goals with our experienced team at no cost. No pressure, just answers.",
      cta: "Book Free Visit",
      discount: "FREE",
      icon: Sparkles,
    },
    {
      title: "Teeth Whitening Promo",
      description: "Professional in-office whitening treatment. Transform your smile in just one visit.",
      cta: "Get Offer",
      discount: "$99",
      icon: Sparkles,
    },
  ];

  return (
    <section id="offers-section" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-40 h-40 border border-[--color-primary]/10 rounded-full" />
        <div className="absolute bottom-16 right-16 w-32 h-32 border border-[--color-accent]/10 rounded-full" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header - More Spacing */}
        <div 
          className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block px-5 py-2 mb-5 text-xs font-semibold tracking-wider text-[--color-primary] uppercase bg-[--color-primary]/10 rounded-full">
            Limited Time Offers
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-[--color-slate-800] mb-5">
            Special Offers
          </h2>
          <p className="text-[--color-slate-500] max-w-xl mx-auto text-lg">
            Take advantage of our exclusive promotions for new and existing patients.
          </p>
        </div>

        {/* Offers Grid - More Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-10 border-2 border-[--color-slate-100] hover:border-[--color-primary]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[--color-primary]/10 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Discount Badge - Blue */}
              <div className="absolute -top-5 left-8 px-5 py-2 bg-[--color-primary] text-white text-sm font-bold rounded-full shadow-lg">
                {offer.discount}
              </div>

              {/* Content */}
              <div className="pt-6">
                <div className="w-14 h-14 rounded-2xl bg-[--color-accent]/10 flex items-center justify-center mb-6 group-hover:bg-[--color-accent] group-hover:scale-110 transition-all duration-300">
                  <offer.icon className="w-7 h-7 text-[--color-accent] group-hover:text-white transition-colors" />
                </div>

                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[--color-slate-800] mb-4">
                  {offer.title}
                </h3>
                <p className="text-[--color-slate-500] leading-relaxed mb-6">
                  {offer.description}
                </p>

                <button className="group/btn inline-flex items-center gap-2 text-[--color-primary] font-medium hover:text-[--color-accent] transition-colors">
                  {offer.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[--color-accent]/20 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
