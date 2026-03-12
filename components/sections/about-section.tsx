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
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0A6CFF]/5 rounded-l-[100px]" />
        <div className="absolute bottom-20 left-10 w-40 h-40 border border-[#00B894]/10 rounded-full" />
        <div className="absolute top-20 right-20 w-20 h-20 border border-[#0A6CFF]/10 rounded-full" />
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
                <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  {isPlaying ? (
                    <div className="w-0 h-0 border-l-[16px] border-l-[#0A6CFF] border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                  ) : (
                    <Play className="w-8 h-8 text-[#0A6CFF] ml-1" fill="currentColor" />
                  )}
                </div>
              </button>

              {/* Stats Overlay */}
              <div className="absolute top-6 left-6 flex gap-3">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <span className="font-serif text-3xl text-[#0A6CFF] font-bold">15+</span>
                  <p className="text-xs text-[#64748B]">Years</p>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
                <span className="text-sm font-semibold text-[#1E293B]">Years of Excellence</span>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#00B894]/10 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-[#00B894]" />
                </div>
                <div>
                  <p className="font-bold text-[#1E293B] text-xl">2,500+</p>
                  <p className="text-sm text-[#64748B]">Happy Patients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <span className="inline-block px-4 py-1.5 mb-5 text-sm font-semibold text-[#00B894] uppercase bg-[#00B894]/10 rounded-full">
              About Us
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1E293B] mb-6 leading-tight">
              Your Trusted <span className="text-[#0A6CFF]">Family Dentist</span> in Katy, Texas
            </h2>
            
            <p className="text-[#64748B] text-lg mb-6 leading-relaxed">
              For over 15 years, MiraMar Family Dental has been providing exceptional 
              dental care to families in Katy, TX and surrounding communities. Our mission 
              is to create healthy, beautiful smiles in a warm and comfortable environment 
              where every patient feels like family.
            </p>

            <p className="text-[#64748B] mb-8 leading-relaxed">
              We combine state-of-the-art technology with a gentle, personalized approach 
              to dentistry. From routine cleanings to complex restorative procedures, 
              our experienced team is dedicated to making your dental visit as comfortable 
              and stress-free as possible.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E2E8F0] hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0A6CFF]/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-[#0A6CFF]" />
                  </div>
                  <span className="text-sm font-semibold text-[#1E293B]">{value.text}</span>
                </div>
              ))}
            </div>

            {/* Button - Defined Colors */}
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-[#0A6CFF] text-white font-semibold rounded-lg hover:bg-[#0052CC] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#0A6CFF]/25">
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
