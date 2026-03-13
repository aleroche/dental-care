"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Users, Gift, HeartHandshake } from "lucide-react";

const offers = [
  {
    id: 1,
    icon: Users,
    title: "New Patient Special: BOGO",
    subtitle: "$75 total",
    description: "Pay $75 for your exam and bring a friend or partner for a FREE exam.",
    cta: "Claim Offer",
    color: "primary",
  },
  {
    id: 2,
    icon: Gift,
    title: "Free Whitening Kit",
    subtitle: "After treatment",
    description: "Complete your treatment and receive a free take-home whitening kit as our thank-you.",
    cta: "Learn More",
    color: "accent",
  },
  {
    id: 3,
    icon: HeartHandshake,
    title: "Loyalty Program",
    subtitle: "First month FREE",
    description: "Join our Loyalty Program and get your first month free. Enjoy member savings and perks year-round.",
    cta: "Sign Up Now",
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
    <section className="py-20 relative overflow-hidden bg-white dark:bg-[#0F172A]">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#0A6CFF]/5 dark:bg-[#0A6CFF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#00B894]/5 dark:bg-[#00B894]/10 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-none ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full mb-4 bg-[#00B894]/10 dark:bg-[#00B894]/20 text-[#009975] dark:text-[#00D9A5]">
            Limited Time Offers
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-[#1E293B] dark:text-white">
            Special Offers Just for You
          </h2>
          <p className="max-w-2xl mx-auto text-[#64748B] dark:text-[#94A3B8]">
            Take advantage of our exclusive promotions and save on quality dental care for you and your family.
          </p>
        </div>

        {/* Offers Grid - Minimalist */}
        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className={`group relative rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 border duration-0 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } bg-white dark:bg-[#1E293B] border-[#E2E8F0] dark:border-[#334155] hover:border-[#0A6CFF]/30 dark:hover:border-[#0A6CFF]/30`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 duration-0 ${offer.color === 'primary'
                  ? 'bg-[#0A6CFF]/10 dark:bg-[#0A6CFF]/20 text-[#0A6CFF] dark:text-[#4D94FF]'
                  : 'bg-[#00B894]/10 dark:bg-[#00B894]/20 text-[#00B894] dark:text-[#00D9A5]'
                }`}>
                <offer.icon className="w-6 h-6" />
              </div>

              {/* Subtitle */}
              {offer.subtitle && (
                <span className={`text-xs font-bold uppercase tracking-wide mb-1 block duration-0 ${offer.color === 'primary'
                    ? 'text-[#0A6CFF] dark:text-[#4D94FF]'
                    : 'text-[#00B894] dark:text-[#00D9A5]'
                  }`}>
                  {offer.subtitle}
                </span>
              )}

              {/* Title */}
              <h3 className="font-serif text-xl mb-2 text-[#1E293B] dark:text-white duration-0">
                {offer.title}
              </h3>

              {/* Description */}
              <p className="text-sm mb-6 leading-relaxed text-[#64748B] dark:text-[#94A3B8] duration-0">
                {offer.description}
              </p>

              {/* CTA Button */}
              <button className={`w-full py-3 px-5 rounded-lg font-medium flex items-center justify-center gap-2 cursor-pointer duration-0 ${offer.color === 'primary'
                  ? 'bg-[#0A6CFF] text-white hover:bg-[#0052CC] dark:hover:bg-[#4D94FF]'
                  : 'bg-[#00B894] text-white hover:bg-[#009975] dark:hover:bg-[#00D9A5]'
                }`}>
                Book your offer
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className={`text-center text-sm mt-10 transition-none ${isLoaded ? 'opacity-100' : 'opacity-0'} text-[#94A3B8] dark:text-[#475569]`}>
          *Offers cannot be combined with insurance. Restrictions may apply.
        </p>
      </div>
    </section>
  );
}
