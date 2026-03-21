"use client";

import { ShieldCheck } from "lucide-react";

export function DigitalXRaySafety() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-[#0F172A] relative overflow-hidden">
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
              <h2 className="font-serif text-2xl md:text-3xl text-[#1E293B] dark:text-white font-bold mb-4 leading-tight">
                Are Digital X-rays Safe?
              </h2>
              <p className="text-base text-[#475569] dark:text-[#94A3B8] leading-relaxed mb-10">
              Yes! In fact, if you were to fly from Houston to Miami, you would be exposed to greater levels of radiation than a standard digital dental X-ray. Digital X-rays emit very low levels of radiation, far less than traditional methods. At MiraMar Family Dental, we take extra precautions to ensure safety, especially for pregnant patients or those with specific health concerns. For most adults, a few digital X-rays every 6 to 12 months is considered both safe and beneficial.
            </p>

            {/* CTA Section */}
            <div className="relative rounded-2xl overflow-hidden bg-[#E7F7FD] dark:bg-[#0F172A] p-10">
              <div className="grid md:grid-cols-2 items-center">
                <div className="relative max-h-[500px] rounded-xl overflow-hidden">
                  <img
                    src="https://miramarfamilydental.com/wp-content/uploads/2024/08/image-for-landing-5.png"
                    alt="Dental care"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="relative z-10 bg-white dark:bg-[#1E293B] rounded-xl p-8 shadow-xl md:-ml-20 md:mr-4">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#1E293B] dark:text-white font-bold mb-4">
                    Schedule Your Visit Today
                  </h3>
                  <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed mb-5">
                    Ready to experience the MiraMar Family Dental difference? Whether you're due for a checkup or have a dental concern, we're here to help. Our team in Katy, Texas, uses the latest technologies to provide accurate, gentle, and personalized care.
                  </p>
                  <a
                    href="https://miramarfamilydental.com/appointment-at-miramar-family-dental/"
                    className="inline-block bg-[#0A6CFF] hover:bg-[#0052CC] dark:bg-[#4D94FF] dark:hover:bg-[#0A6CFF] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
