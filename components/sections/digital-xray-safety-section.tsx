"use client";

import { ShieldCheck } from "lucide-react";

export function DigitalXRaySafety() {
  return (
    <section className="py-20 bg-white dark:bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E2E8F0] dark:via-[#334155] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E2E8F0] dark:via-[#334155] to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        <div className="flex items-start gap-4 px-10">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00B894]/10 dark:bg-[#00B894]/20 flex items-center justify-center mt-1">
            <ShieldCheck className="w-6 h-6 text-[#00B894]" />
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1E293B] dark:text-white mb-6 leading-tight">
              Are Digital X-rays Safe?
            </h2>
            <p className="text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
              Yes! In fact, if you were to fly from Houston to Miami, you would be exposed to greater levels of radiation than a standard digital dental X-ray. Digital X-rays emit very low levels of radiation, far less than traditional methods. At MiraMar Family Dental, we take extra precautions to ensure safety, especially for pregnant patients or those with specific health concerns. For most adults, a few digital X-rays every 6 to 12 months is considered both safe and beneficial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
