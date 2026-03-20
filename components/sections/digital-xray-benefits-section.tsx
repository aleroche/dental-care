"use client";

import { ShieldCheck, Zap, ImageIcon, Leaf, Share2, Heart } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, title: "Up to 90% less radiation", desc: "Significantly reduced exposure compared to traditional film X-rays." },
  { icon: Zap, title: "Instant images for faster diagnosis", desc: "No waiting for film development — results are available immediately." },
  { icon: ImageIcon, title: "Clear, detailed visuals", desc: "Enhanced image quality for better treatment planning and accuracy." },
  { icon: Leaf, title: "Eco-friendly processing", desc: "No chemicals required — better for the environment and our planet." },
  { icon: Share2, title: "Easily shared", desc: "Quickly send images to specialists or insurance companies digitally." },
  { icon: Heart, title: "Comfortable & quicker", desc: "A faster, more comfortable experience for patients of all ages." },
];

export function DigitalXRayBenefits() {
  return (
    <section className="py-24 bg-[#F8FAFC] dark:bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E2E8F0] dark:via-[#334155] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E2E8F0] dark:via-[#334155] to-transparent" />
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-[#0A6CFF]/5 dark:bg-[#0A6CFF]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#00B894]/5 dark:bg-[#00B894]/10 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1E293B] dark:text-white mb-6 leading-tight">
              Benefits of Digital Dental X-rays
            </h2>
            <p className="text-lg text-[#64748B] dark:text-[#94A3B8] mb-8 leading-relaxed">
              Compared to traditional X-rays, digital X-rays offer multiple advantages:
            </p>
            <div className="relative h-48 lg:h-56 w-full rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80"
                alt="Digital dental X-ray technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/50 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/50 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/50 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/50 rounded-br-lg" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {benefits.map((item, i) => (
              <div key={i} className="group p-5 lg:p-6 bg-white dark:bg-[#1E293B] rounded-xl border border-[#E2E8F0] dark:border-[#334155] hover:border-[#0A6CFF]/30 dark:hover:border-[#0A6CFF]/30 hover:shadow-lg dark:hover:shadow-[#0A6CFF]/10 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#0A6CFF]/10 dark:bg-[#0A6CFF]/20 flex items-center justify-center group-hover:bg-[#0A6CFF] group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-[#0A6CFF] dark:text-[#4D94FF] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-[#1E293B] dark:text-white text-sm lg:text-base mb-1 group-hover:text-[#0A6CFF] dark:group-hover:text-[#4D94FF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
