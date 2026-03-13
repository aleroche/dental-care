"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Heart, Shield, Stethoscope, Play } from "lucide-react";

const aboutImage = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80";

const values = [
  { icon: Heart, text: "Compassionate Care" },
  { icon: Shield, text: "Safety First" },
  { icon: Stethoscope, text: "Expertise You Trust" },
];

export function AboutSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-[#F8FAFC] dark:bg-[#0F172A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0A6CFF]/5 dark:bg-[#0A6CFF]/10 rounded-l-[100px]" />
        <div className="absolute bottom-20 left-10 w-40 h-40 border border-[#00B894]/10 dark:border-[#00B894]/5 rounded-full" />
        <div className="absolute top-20 right-20 w-20 h-20 border border-[#0A6CFF]/10 dark:border-[#0A6CFF]/5 rounded-full" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Video Side */}
          <div className={`relative transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage} 
                alt="MiraMar Family Dental Clinic"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-transparent" />
              
              {/* Play Button for Video */}
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="w-24 h-24 bg-white/90 dark:bg-white/20 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 duration-0">
                  {isPlaying ? (
                    <div className="w-0 h-0 border-l-[16px] border-l-[#0A6CFF] border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                  ) : (
                    <Play className="w-8 h-8 text-[#0A6CFF] ml-1" fill="currentColor" />
                  )}
                </div>
              </button>

              {/* Stats Overlay */}
              <div className="absolute top-6 left-6 flex gap-3">
                <div className="bg-white/95 backdrop-blur-sm dark:bg-[#1E293B]/95 dark:backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <span className="font-serif text-3xl text-[#0A6CFF] dark:text-[#4D94FF] font-bold">15+</span>
                  <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">Years</p>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm dark:bg-[#1E293B]/95 dark:backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
                <span className="text-sm font-semibold text-[#1E293B] dark:text-white">Years of Excellence</span>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-[#1E293B] rounded-2xl p-6 shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#00B894]/10 dark:bg-[#00B894]/20 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-[#00B894] dark:text-[#00D9A5]" />
                </div>
                <div>
                  <p className="font-bold text-[#1E293B] dark:text-white text-xl">2,500+</p>
                  <p className="text-sm text-[#64748B] dark:text-[#94A3B8]">Happy Patients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <span className="inline-block px-4 py-1.5 mb-5 text-sm font-semibold text-[#00B894] dark:text-[#00D9A5] uppercase bg-[#00B894]/10 dark:bg-[#00B894]/20 rounded-full">
              Who We Are
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1E293B] dark:text-white mb-6 leading-tight">
              Your Trusted <span className="text-[#0A6CFF] dark:text-[#4D94FF]">Family Dentist</span> in Katy, Texas
            </h2>
            
            <p className="text-[#64748B] dark:text-[#94A3B8] text-lg mb-6 leading-relaxed">
              With family-centered care, MiraMar Family Dental is your trusted dental practice in Katy. We offer professional dental services for all ages, and guarantee a comfortable experience in our modern, well-equipped facilities.
            </p>

            <p className="text-[#64748B] dark:text-[#94A3B8] mb-8 leading-relaxed">
              At MiraMar Family Dental you have it all. We take care of your health and your smile with the most advanced technology, and we are distinguished by our friendly and close treatment: all in one place. That's why we are the preferred choice of the Hispanic community in Katy and surrounding Houston. Our doctors, dental assistants and staff come from different countries in Latin America, and we all speak Spanish and English.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-[#1E293B] rounded-xl border border-[#E2E8F0] dark:border-[#334155] hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0A6CFF]/10 dark:bg-[#0A6CFF]/20 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-[#0A6CFF] dark:text-[#4D94FF]" />
                  </div>
                  <span className="text-sm font-semibold text-[#1E293B] dark:text-white">{value.text}</span>
                </div>
              ))}
            </div>

            {/* Button - Defined Colors */}
            <button className="cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-[#0A6CFF] text-white font-semibold rounded-lg hover:bg-[#0052CC] dark:hover:bg-[#4D94FF] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#0A6CFF]/25">
              Book Your Next Appointment
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
