"use client";

import { useState, useEffect } from "react";
import { Phone, Clock, Award, ArrowRight, ChevronDown, Star } from "lucide-react";

const heroImages = {
  background: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80",
  dentist: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80",
};

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#020617]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImages.background})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 via-transparent to-transparent" />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#0A6CFF]/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#00B894]/15 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 py-24 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 mb-8 bg-[#0A6CFF]/20 border border-[#0A6CFF]/30 rounded-full transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B894] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B894]" />
              </span>
              <span className="text-white/90 text-sm font-medium">Now Accepting New Patients</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6">
              Your family dentist in{' '}
              <span className="text-[#00B894] italic">Katy, Texas</span>
            </h1>

            {/* Subheading */}
            <h2 className="text-xl md:text-2xl text-[#0A6CFF] font-medium mb-6">
              Top-rated dental care you can count on
            </h2>

            {/* Description */}
            <p className="text-lg text-white/70 max-w-xl mb-10 leading-relaxed">
              At MiraMar Family Dental, we&apos;re more than just your family dentist in Katy, 
              Texas &ndash; we&apos;re your partners in oral health. Experience exceptional 
              dentistry in a comfortable, welcoming environment.
            </p>

            {/* CTA Buttons - Defined Colors */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group px-8 py-4 bg-[#0A6CFF] text-white text-lg font-semibold rounded-lg hover:bg-[#0052CC] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#0A6CFF]/25 hover:scale-[1.02] active:scale-[0.98]">
                Book Your Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white text-lg font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                Call Us: (281) 555-0123
              </button>
            </div>

            {/* Trust Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#00B894]/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#00B894]" />
                </div>
                <div>
                  <p className="text-white font-semibold">15+ Years</p>
                  <p className="text-white/50 text-sm">Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0A6CFF]/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#0A6CFF]" />
                </div>
                <div>
                  <p className="text-white font-semibold">Same-Day</p>
                  <p className="text-white/50 text-sm">Emergencies</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#00B894]/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#00B894]" />
                </div>
                <div>
                  <p className="text-white font-semibold">2,500+</p>
                  <p className="text-white/50 text-sm">Happy Patients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative hidden lg:block transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#00B894]/30 rounded-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImages.dentist} 
                  alt="MiraMar Family Dental Clinic"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-transparent" />
                
                {/* Floating Card */}
                <div className={`absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0A6CFF] rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white fill-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1E293B]">5.0 Rating</p>
                      <p className="text-sm text-[#64748B]">Based on 250+ reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center gap-2 text-white/50 cursor-pointer">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
