"use client";

import { useEffect, useState } from "react";
import { Clock, CreditCard, Languages, ShieldCheck, Stethoscope, Users, Wrench } from "lucide-react";

export function WhyUsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('why-us-section');
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
      description: "We work with major dental insurance providers to maximize your benefits and minimize out-of-pocket costs.",
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

  return (
    <section id="why-us-section" className="py-28 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[--color-slate-100] to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header - More Spacing */}
        <div 
          className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block px-5 py-2 mb-5 text-xs font-semibold tracking-wider text-[--color-accent] uppercase bg-[--color-accent]/10 rounded-full">
            Why Choose Us
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-[--color-slate-800] mb-5">
            Families Trust MiraMar Dental
          </h2>
          <p className="text-[--color-slate-500] max-w-2xl mx-auto text-lg">
            Experience the difference of a dental practice that truly cares about your family's oral health.
          </p>
        </div>

        {/* Features Grid - More Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-10 bg-white rounded-2xl border-2 border-[--color-slate-100] hover:border-[--color-primary]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[--color-primary]/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[--color-accent]/10 flex items-center justify-center mb-6 group-hover:bg-[--color-accent] group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-[--color-accent] group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[--color-slate-800] mb-3">
                {feature.title}
              </h3>
              
              <p className="text-[--color-slate-500] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats - More Prominent */}
        <div 
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-10 bg-gradient-to-r from-[--color-primary] to-[--color-primary-light] rounded-3xl transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {[
            { number: "15+", label: "Years Experience" },
            { number: "2,000+", label: "Happy Patients" },
            { number: "100%", label: "Satisfaction" },
            { number: "9+", label: "Dental Services" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-white font-bold">
                {stat.number}
              </p>
              <p className="text-white/80 text-sm mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
