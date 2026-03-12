"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Phone, Clock, Star } from "lucide-react";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[--color-slate-50] via-white to-[--color-slate-100]">
      {/* Background Elements - Blue/Green */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-transparent to-[--color-slate-50]/50" />
        
        {/* Decorative Blobs */}
        <div 
          className="absolute top-20 -left-32 w-[600px] h-[600px] bg-[--color-primary]/5 rounded-full blur-3xl animate-blob"
        />
        <div 
          className="absolute bottom-20 -right-32 w-[500px] h-[500px] bg-[--color-accent]/5 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: '2s' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[--color-primary-light]/3 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: '4s' }}
        />
        
        {/* Geometric Accents */}
        <div className="absolute top-40 right-16 w-32 h-32 border border-[--color-primary]/10 rounded-full animate-float" />
        <div className="absolute bottom-48 left-16 w-20 h-20 border border-[--color-accent]/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[--color-primary]/30 rounded-full animate-pulse-gentle" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[--color-accent]/30 rounded-full animate-pulse-gentle" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Content - More Spacious */}
      <div className="container-wide relative z-10 py-32 md:py-40">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge - Green Accent */}
          <div 
            className={`inline-flex items-center gap-2 px-5 py-2.5 mb-10 text-sm font-semibold text-[--color-accent-dark] bg-[--color-accent]/10 rounded-full opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: '200ms' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[--color-accent] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[--color-accent]"></span>
            </span>
            Now Accepting New Patients
          </div>

          {/* Main Heading - Professional Blue */}
          <h1 
            className={`font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl lg:text-7xl text-[--color-slate-800] leading-[1.15] mb-8 opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: '400ms' }}
          >
            Your Smile,
            <br />
            <span className="text-[--color-primary] italic font-normal">Our Priority</span>
          </h1>

          {/* Subtitle - More Spacing */}
          <p 
            className={`text-lg md:text-xl text-[--color-slate-500] max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: '600ms' }}
          >
            Experience exceptional family dentistry in Katy, Texas. Our compassionate 
            team provides comprehensive dental care for patients of all ages, from 
            routine cleanings to advanced procedures.
          </p>

          {/* CTA Buttons - Blue/Green */}
          <div 
            className={`flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''}`}
            style={{ animationDelay: '800ms' }}
          >
            <button className="group px-8 py-4 bg-[--color-primary] text-white text-lg font-medium rounded-full hover:bg-[--color-primary-dark] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[--color-primary]/25 flex items-center gap-2">
              Book Your Appointment
              <ChevronDown className="w-5 h-5 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 border-2 border-[--color-accent] text-[--color-accent] text-lg font-medium rounded-full hover:bg-[--color-accent] hover:text-white transition-all duration-300 flex items-center gap-2">
              Meet Our Team
              <ChevronDown className="w-5 h-5 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Badges - Professional Spacing */}
          <div 
            className={`flex flex-wrap justify-center gap-8 md:gap-12 opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '1000ms' }}
          >
            <div className="flex items-center gap-3 text-[--color-slate-500]">
              <Star className="w-5 h-5 text-[--color-accent] fill-[--color-accent]" />
              <span className="text-sm font-medium">2,000+ Happy Patients</span>
            </div>
            <div className="flex items-center gap-3 text-[--color-slate-500]">
              <Clock className="w-5 h-5 text-[--color-primary] fill-[--color-primary]" />
              <span className="text-sm font-medium">Same-Day Emergencies</span>
            </div>
            <div className="flex items-center gap-3 text-[--color-slate-500]">
              <Phone className="w-5 h-5 text-[--color-accent] fill-[--color-accent]" />
              <span className="text-sm font-medium">15+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
        style={{ animationDelay: '1200ms' }}
      >
        <div className="flex flex-col items-center gap-3 text-[--color-slate-300]">
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <div className="w-7 h-12 border-2 border-current rounded-full flex justify-center pt-3">
            <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
