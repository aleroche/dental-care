"use client";

import { useState, useEffect } from "react";
import { Clock, CreditCard, Languages, ShieldCheck, Stethoscope, Users, Wrench } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Same-Day Emergency Care",
    description: "Dental emergencies don't wait. We offer same-day appointments for urgent dental needs.",
  },
  {
    icon: Users,
    title: "Accepting New Patients",
    description: "We're always welcoming new families. Schedule your first visit today and join our dental family.",
  },
  {
    icon: CreditCard,
    title: "Most Insurance Accepted",
    description: "We work with major dental insurance providers to maximize your benefits.",
  },
  {
    icon: Wrench,
    title: "Flexible Payment Plans",
    description: "Quality dental care fits your budget. We offer financing options to make treatment affordable.",
  },
  {
    icon: Stethoscope,
    title: "State-of-the-Art Technology",
    description: "Advanced dental equipment for precise diagnoses and comfortable, efficient treatments.",
  },
  {
    icon: Languages,
    title: "Bilingual Staff",
    description: "Our team speaks both English and Spanish, ensuring clear communication for all patients.",
  },
];

export function WhyUsSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F8FAFC] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#0A6CFF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#00B894]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#00B894] uppercase bg-[#00B894]/10 rounded-full">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1E293B] mb-4">
            Why We Are Your Best Choice
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            Experience the difference of a dental practice that truly cares about your family's oral health.
          </p>
        </div>

        {/* Features Grid - 3 columns as per SPEC */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className={`group p-8 bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#0A6CFF]/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#00B894]/10 flex items-center justify-center mb-5 group-hover:bg-[#00B894] group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-[#00B894] group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="font-serif text-xl text-[#1E293B] mb-3">
                {feature.title}
              </h3>
              
              <p className="text-[#64748B] text-sm leading-relaxed">
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
