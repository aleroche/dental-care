"use client";

import { useState, useEffect } from "react";
import { Monitor, Building2, HeartHandshake, Wrench, CreditCard } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Latest Dental equipment",
    description: "We use the most modern techniques and technologies to make our procedures and diagnoses more accurate.",
  },
  {
    icon: Building2,
    title: "Private offices",
    description: "The privacy of the space for consultations and treatments, and the comfort in it are highly valued by our patients.",
  },
  {
    icon: HeartHandshake,
    title: "Affordable dentist for the family",
    description: "We offer a high quality service with affordable prices and with payment facilities and financing plans.",
  },
];

export function WhyUsSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-[#0F172A] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F8FAFC] dark:from-[#0F172A] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F8FAFC] dark:from-[#0F172A] to-transparent" />
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#0A6CFF]/5 dark:bg-[#0A6CFF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#00B894]/5 dark:bg-[#00B894]/10 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#00B894] dark:text-[#00D9A5] uppercase bg-[#00B894]/10 dark:bg-[#00B894]/20 rounded-full">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1E293B] dark:text-white mb-4">
            We are a quality, humane and professional dental office, at the forefront of technology
          </h2>
          <p className="text-[#64748B] dark:text-[#94A3B8] max-w-2xl mx-auto">
            Experience the difference of a dental practice that truly cares about your family's oral health.
          </p>
        </div>

        {/* Features Grid - 3 columns as per SPEC */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 bg-white dark:bg-[#1E293B] rounded-2xl border border-[#E2E8F0] dark:border-[#334155] hover:border-[#0A6CFF]/20 dark:hover:border-[#0A6CFF]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0A6CFF]/10 dark:bg-[#0A6CFF]/20 flex items-center justify-center mb-5 group-hover:bg-[#0A6CFF] group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-[#0A6CFF] dark:text-[#4D94FF] group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="font-serif text-xl text-[#1E293B] dark:text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-[#64748B] dark:text-[#94A3B8] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-10 bg-gradient-to-r from-[#0A6CFF] to-[#4D94FF] rounded-2xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          {[
            { number: "15+", label: "Years Experience" },
            { number: "2,500+", label: "Happy Patients" },
            { number: "100%", label: "Satisfaction" },
            { number: "9+", label: "Dental Services" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-white font-bold">
                {stat.number}
              </p>
              <p className="text-white/80 text-sm mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
