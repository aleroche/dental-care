import { Service } from "@/src/data/restorative-dentistry";
import Link from "next/link";

interface ServicesListProps {
  title?: string;
  services: Service[];
}

export function ServicesList({ title, services }: ServicesListProps) {
  return (
    <section className="bg-gradient-to-b from-gray-50/50 to-white dark:from-[#0F172A] dark:to-[#0F172A] py-8 md:py-12">
      <div className="container-wide w-full">
        <div className="animate-fade-in-up px-10">
          <div className="text-center mb-10">
            {title && (
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1E293B] dark:text-white font-bold leading-tight mb-6">
                {title}
              </h2>
            )}
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1E293B] p-6 md:p-8 rounded-xl border border-gray-100 dark:border-[#334155] hover:border-[#00B894]/30 dark:hover:border-[#00D9A5]/30 transition-colors duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-serif text-xl md:text-2xl text-[#1E293B] dark:text-white font-semibold leading-snug mb-3">
                  {service.title}
                </h3>
                <p className="text-[#64748B] dark:text-[#94A3B8] text-base leading-relaxed">
                  {service.description}
                </p>
                {service.link && (
                  <Link
                    href={service.link}
                    className="inline-block mt-3 text-[#00B894] hover:text-[#00D9A5] font-medium transition-colors"
                  >
                    Learn More
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
