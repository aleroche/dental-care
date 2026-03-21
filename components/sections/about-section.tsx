"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Heart, Shield, Stethoscope, Play } from "lucide-react";

const YT_VIDEO_ID = "wtia5_wCFdI";
const YT_THUMBNAIL = "https://miramarfamilydental.com/wp-content/uploads/2024/04/Miramar-Family-Dental.jpeg";

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
          {/* Video Side */}
          <div className={`relative transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              {isPlaying ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${YT_VIDEO_ID}?autoplay=1&mute=1&controls=1&rel=0`}
                  title="MiraMar Family Dental"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src={YT_THUMBNAIL}
                    alt="MiraMar Family Dental"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Play Button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    aria-label="Play video"
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-8 h-8 text-[#0A6CFF] ml-1" fill="currentColor" />
                    </div>
                  </button>
                </>
              )}
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
