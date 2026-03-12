"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Heart, Shield, Stethoscope } from "lucide-react";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about-section');
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

  const values = [
    { icon: Heart, text: "Compassionate Care" },
    { icon: Shield, text: "Safety First" },
    { icon: Stethoscope, text: "Expertise You Trust" },
  ];

  return (
    <section id="about-section" className="py-28 bg-[--color-slate-50] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[--color-primary]/5 rounded-l-[120px]" />
        <div className="absolute bottom-24 left-12 w-48 h-48 border border-[--color-accent]/10 rounded-full" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side - More Space */}
          <div 
            className={`relative transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            {/* Main Image Container */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[--color-primary]/10 to-[--color-accent]/10">
              {/* Placeholder for image - shows gradient if no image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[--color-primary]/10 to-[--color-accent]/5" />
              
              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 w-24 h-24 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                <span className="font-[family-name:var(--font-cormorant)] text-4xl text-[--color-primary] font-bold">15+</span>
              </div>
              
              <div className="absolute bottom-8 right-8 px-8 py-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                <span className="text-sm font-semibold text-[--color-slate-700]">Years of Excellence</span>
              </div>

              {/* Teeth Icon Watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg className="w-56 h-56 text-[--color-primary]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C9.5 2 7.5 3.5 7 5.5C6.5 7.5 6 9.5 6 12C6 14.5 6.5 16.5 7 18.5C7.5 20.5 9.5 22 12 22C14.5 22 16.5 20.5 17 18.5C17.5 16.5 18 14.5 18 12C18 9.5 17.5 7.5 17 5.5C16.5 3.5 14.5 2 12 2ZM12 4C14 4 15.5 5 16 6.5C16.5 8 17 10 17 12C17 14 16.5 16 16 17.5C15.5 19 14 20 12 20C10 20 8.5 19 8 17.5C7.5 16 7 14 7 12C7 10 7.5 8 8 6.5C8.5 5 10 4 12 4ZM9 9C9.5 9 10 9.5 10 10C10 10.5 9.5 11 9 11C8.5 11 8 10.5 8 10C8 9.5 8.5 9 9 9ZM15 9C15.5 9 16 9.5 16 10C16 10.5 15.5 11 15 11C14.5 11 14 10.5 14 10C14 9.5 14.5 9 15 9ZM12 13C13.5 13 15 14 15.5 15.5C16 17 16 18.5 15.5 19.5C15 20.5 14 21 12 21C10 21 9 20.5 8.5 19.5C8 18.5 8 17 8.5 15.5C9 14 10.5 13 12 13Z"/>
                </svg>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-8 shadow-xl hidden md:block">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[--color-accent]/10 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[--color-accent]" />
                </div>
                <div>
                  <p className="font-bold text-[--color-slate-800] text-xl">2,000+</p>
                  <p className="text-sm text-[--color-slate-500]">Happy Patients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div 
            className={`transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <span className="inline-block px-5 py-2 mb-5 text-xs font-semibold tracking-wider text-[--color-accent] uppercase bg-[--color-accent]/10 rounded-full">
              About Us
            </span>
            
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl text-[--color-slate-800] mb-6 leading-tight">
              Your Trusted <span className="text-[--color-primary]">Family Dentist</span> in Katy, Texas
            </h2>
            
            <p className="text-[--color-slate-500] text-lg mb-8 leading-relaxed">
              For over 15 years, MiraMar Family Dental has been providing exceptional 
              dental care to families in Katy, TX and surrounding communities. Our mission 
              is to create healthy, beautiful smiles in a warm and comfortable environment 
              where every patient feels like family.
            </p>

            <p className="text-[--color-slate-500] mb-10 leading-relaxed">
              We combine state-of-the-art technology with a gentle, personalized approach 
              to dentistry. From routine cleanings to complex restorative procedures, 
              our experienced team is dedicated to making your dental visit as comfortable 
              and stress-free as possible.
            </p>

            {/* Values - More Spacing */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[--color-slate-100]"
                >
                  <div className="w-12 h-12 rounded-xl bg-[--color-primary]/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-[--color-primary]" />
                  </div>
                  <span className="text-sm font-semibold text-[--color-slate-700]">{value.text}</span>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center gap-3 px-9 py-5 bg-[--color-primary] text-white font-medium rounded-full hover:bg-[--color-primary-dark] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[--color-primary]/25">
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
