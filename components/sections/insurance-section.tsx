"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";

const insuranceProviders = [
  { id: "aetna", name: "Aetna", image: "https://miramarfamilydental.com/wp-content/uploads/2024/03/Seguros-Aetna.png" },
  { id: "ameritas", name: "Ameritas", image: "https://miramarfamilydental.com/wp-content/uploads/2024/03/Seguros-Ameritas.png" },
  { id: "assurant", name: "Assurant", image: "https://miramarfamilydental.com/wp-content/uploads/2024/03/Seguros-Assurant.png" },
  { id: "bluecross", name: "BlueCross BlueShield", image: "https://miramarfamilydental.com/wp-content/uploads/2024/03/Seguros-BlueCross.png" },
  { id: "careington", name: "Careington", image: "https://miramarfamilydental.com/wp-content/uploads/2024/03/Seguros-Careington.png" },
  { id: "cigna", name: "Cigna", image: "https://miramarfamilydental.com/wp-content/uploads/2024/03/Seguros-Cigna.png" },
  { id: "deltadental", name: "Delta Dental", image: "https://miramarfamilydental.com/wp-content/uploads/2024/03/Seguros-DeltaDental.png" },
  { id: "equitable", name: "Equitable", image: "https://miramarfamilydental.com/wp-content/uploads/2024/03/Seguros-Equitable.png" },
  { id: "geha", name: "GEHA", image: "https://miramarfamilydental.com/wp-content/uploads/2024/03/Seguro-Geha.png" },
  { id: "humana", name: "Humana", image: "https://miramarfamilydental.com/wp-content/uploads/2024/03/Seguros-Humana.png" },
  { id: "metlife", name: "MetLife", image: "https://miramarfamilydental.com/wp-content/uploads/2024/03/Seguros-Metlife.png" },
  { id: "unitedhealth", name: "United Healthcare", image: "https://miramarfamilydental.com/wp-content/uploads/2024/03/Seguros-UnitedHealth.png" },
];

const financingOptions = [
  {
    image: "https://miramarfamilydental.com/wp-content/uploads/2025/09/Alphaeon_Credit_logo_registered_RGB.webp",
    title: "Alpaheon Credit",
    description: "Pay for your dental and medical treatments with ease. Alphaeon Credit offers flexible monthly payment plans designed to fit your budget.",
    link: "https://go.alphaeoncredit.com/credit-portal/store/49180"
  },
  {
    image: "https://miramarfamilydental.com/wp-content/uploads/2025/09/LC_PatientSolutions_logo.svg",
    title: "Lending Club",
    description: "Choose a financing plan that works for you. Lending Club provides affordable monthly payments with clear terms and no hidden surprises.",
    link: "https://www.lendingclub.com/patientsolutions/app/check-your-rate?user=applicant&clientid=330315"
  },
  {
    image: "https://miramarfamilydental.com/wp-content/uploads/2025/09/carecreditlogo.svg",
    title: "Care Credit",
    description: "From checkups to major treatments, CareCredit helps you manage dental costs with convenient financing and low monthly payments.",
    link: "https://www.carecredit.com/go/ZCV726/"
  },
  {
    image: "https://miramarfamilydental.com/wp-content/uploads/2025/09/cherry-logo.webp",
    title: "Cherry",
    description: "Select from a variety of monthly payment plans, some of which qualify for 0% APR options. Thanks to Cherry's fast application process, you'll be able to get access in no time.",
    link: "https://pay.withcherry.com/miramarfamilydental?utm_source=merchant&utm_medium=website"
  }
];

export function InsuranceSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-[#0F172A] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white dark:from-[#0F172A] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-[#0F172A] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0A6CFF]/5 dark:bg-[#0A6CFF]/10 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header - Insurance */}
        <div className={`text-center mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#0A6CFF] dark:text-[#4D94FF] uppercase bg-[#0A6CFF]/10 dark:bg-[#0A6CFF]/20 rounded-full">
            Insurance
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1E293B] dark:text-white mb-4">
            Dental insurances we work with
          </h2>
          <p className="text-[#64748B] dark:text-[#94A3B8] max-w-2xl mx-auto">
            We work with major insurance providers to help you get the dental care 
            you deserve. Our team handles the paperwork so you can focus on your smile.
          </p>
        </div>

        {/* Insurance Logos */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 items-center justify-items-center mb-24 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          {insuranceProviders.map((provider, index) => (
            <div
              key={provider.id}
              className={`w-full aspect-[3/2] flex items-center justify-center p-5 bg-white dark:bg-white rounded-xl shadow-sm dark:shadow-lg transition-all duration-500 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <Image
                src={provider.image}
                alt={provider.name}
                fill
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className={`w-full h-px bg-gradient-to-r from-transparent via-[#E2E8F0] dark:via-[#334155] to-transparent mb-24 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} />

        {/* Header - Financing */}
        <div className={`text-center mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-[#00B894] dark:text-[#00D9A5] uppercase bg-[#00B894]/10 dark:bg-[#00B894]/20 rounded-full">
            Our financing options
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1E293B] dark:text-white mb-4">
            No insurance? No problem
          </h2>
          <p className="text-[#64748B] dark:text-[#94A3B8] max-w-2xl mx-auto">
            We believe everyone deserves quality dental care. Explore our flexible 
            payment options to find what works best for you.
          </p>
        </div>

        {/* Financing Options Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
          {financingOptions.map((option, index) => (
            <a
              key={option.title}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col p-6 bg-white dark:bg-white rounded-2xl shadow-sm dark:shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative w-full h-16 mb-4 flex items-center justify-center">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl text-[#1E293B] font-semibold mb-3">
                {option.title}
              </h3>

              {/* Description */}
              <p className="text-[#64748B] text-sm leading-relaxed mb-4 flex-grow">
                {option.description}
              </p>

              {/* CTA */}
              <span className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold text-[#00B894] group-hover:gap-3 transition-all">
                Apply now
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-16 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <div className="flex items-center gap-3 text-[#64748B] dark:text-[#94A3B8]">
            <ShieldCheck className="w-5 h-5 text-[#0A6CFF] dark:text-[#4D94FF]" />
            <span className="text-sm">Don&apos;t see your insurance? Call us to verify.</span>
          </div>
          <a 
            href="/contact"
            className="cursor-pointer inline-flex items-center gap-2 text-[#00B894] dark:text-[#00D9A5] font-semibold text-sm hover:gap-3 transition-all"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
