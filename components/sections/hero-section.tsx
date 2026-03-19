"use client";

import { useState, useEffect } from "react";
import { Phone, Clock, Award, ArrowRight } from "lucide-react";

const VIDEO_URL =
  "https://miramarfamilydental.com/wp-content/uploads/2024/10/MFD-Background-Video-WEBM-V2.webm";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={VIDEO_URL} type="video/webm" />
        </video>
        {/* Velo negro: opaco arriba, se desvanece hacia abajo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-transparent" />

        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#0A6CFF]/20 rounded-full blur-[120px] animate-blob" />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#00B894]/15 rounded-full blur-[100px] animate-blob"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Content — centered */}
      <div className="container-wide relative z-10 py-24 md:py-32 lg:py-40 flex justify-center">
        <div
          className={`text-center transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 mb-8 bg-[#0A6CFF]/20 border border-[#0A6CFF]/40 rounded-full backdrop-blur-sm transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B894] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B894]" />
            </span>
            <span className="text-white/90 text-sm font-semibold">
              Now Accepting New Patients
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6">
            Your family dentist in{" "}
            <span className="text-[#00B894] italic">Katy, Texas</span>
          </h1>

          {/* Subheading */}
          <h2 className="text-xl md:text-2xl text-[#0A6CFF] font-medium mb-6">
            Top-rated dental care you can count on
          </h2>

          {/* Description */}
          <p className="text-lg text-white/75 max-w-xl mx-auto mb-10 leading-relaxed">
            At MiraMar Family Dental, we&apos;re more than just your family
            dentist in Katy, Texas &ndash; we&apos;re your partners in oral
            health. Experience exceptional dentistry in a comfortable, welcoming
            environment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <button className="cursor-pointer group px-8 py-4 bg-[#0A6CFF] text-white text-lg font-semibold rounded-lg hover:bg-[#0052CC] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#0A6CFF]/25 hover:scale-[1.02] active:scale-[0.98]">
              Book Your Appointment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="cursor-pointer px-8 py-4 border-2 border-white/30 text-white text-lg font-semibold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              Call Us: (281) 555-0123
            </button>
          </div>

          {/* Trust Stats */}
          <div className="inline-flex flex-wrap gap-px justify-center bg-white/10 border border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="flex items-center gap-3 px-7 py-4 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 bg-[#00B894] rounded-full flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-lg leading-tight">15+ Years</p>
                <p className="text-white/60 text-xs uppercase tracking-wide">Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-7 py-4 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 bg-[#0A6CFF] rounded-full flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-lg leading-tight">Same-Day</p>
                <p className="text-white/60 text-xs uppercase tracking-wide">Emergencies</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-7 py-4 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 bg-[#00B894] rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-lg leading-tight">2,500+</p>
                <p className="text-white/60 text-xs uppercase tracking-wide">Happy Patients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
