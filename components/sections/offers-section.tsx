"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Calendar, Percent } from "lucide-react";

const offers = [
  {
    id: 1,
    icon: Sparkles,
    title: "New Patient Special",
    description: "Comprehensive exam, X-rays, and cleaning for only $99. A $350 value!",
    cta: "Claim Offer",
    discount: "$99",
    color: "primary",
  },
  {
    id: 2,
    icon: Calendar,
    title: "Free Consultation",
    description: "Free orthodontic consultation for braces or aligners. No commitment required.",
    cta: "Book Now",
    discount: "FREE",
    color: "accent",
  },
  {
    id: 3,
    icon: Percent,
    title: "Teeth Whitening Promo",
    description: "Get professional whitening for just $199. Regular price $450.",
    cta: "Learn More",
    discount: "$199",
    color: "primary",
  },
];

export function OffersSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#0A6CFF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#00B894]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-[#0A6CFF]/10 rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-[#00B894]/10 rounded-full" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 bg-[#00B894]/10 text-[#009975] text-sm font-semibold rounded-full mb-4">
            Limited Time Offers
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1E293B] mb-4">
            Special Offers Just for You
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            Take advantage of our exclusive promotions and save on quality dental care for you and your family.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[#E2E8F0] overflow-hidden ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Background Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 transition-opacity duration-500 group-hover:opacity-20 ${
                offer.color === 'primary' ? 'bg-[#0A6CFF]' : 'bg-[#00B894]'
              }`} />

              {/* Discount Badge */}
              <div className={`absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center shadow-lg z-10 ${
                offer.color === 'primary' ? 'bg-[#0A6CFF]' : 'bg-[#00B894]'
              }`}>
                <span className="text-white font-bold text-sm">{offer.discount}</span>
              </div>

              {/* Icon */}
              <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mt-2 transition-transform duration-300 group-hover:scale-110 ${
                offer.color === 'primary' 
                  ? 'bg-[#0A6CFF]/10 text-[#0A6CFF]' 
                  : 'bg-[#00B894]/10 text-[#00B894]'
              }`}>
                <offer.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl text-[#1E293B] mb-3">
                {offer.title}
              </h3>
              <p className="text-[#64748B] mb-6 leading-relaxed">
                {offer.description}
              </p>

              {/* CTA - Defined Colors */}
              <button className={`group/btn inline-flex items-center gap-2 font-semibold transition-colors duration-300 ${
                offer.color === 'primary'
                  ? 'text-[#0A6CFF] hover:text-[#0052CC]'
                  : 'text-[#00B894] hover:text-[#009975]'
              }`}>
                {offer.cta}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>

              {/* Border Gradient on Hover */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 ${
                offer.color === 'primary'
                  ? 'bg-gradient-to-r from-[#0A6CFF]/10 to-transparent'
                  : 'bg-gradient-to-r from-[#00B894]/10 to-transparent'
              }`} />
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className={`text-center text-[#94A3B8] text-sm mt-12 transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          *Offers valid for new patients. Cannot be combined with insurance.
        </p>
      </div>
    </section>
  );
}
