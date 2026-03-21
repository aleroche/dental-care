import { Service } from "@/src/data/restorative-dentistry";

interface ServicesListProps {
  title: string;
  services: Service[];
}

export function ServicesList({ title, services }: ServicesListProps) {
  return (
    <section className="bg-gradient-to-b from-gray-50/50 to-white dark:from-[#0F172A] dark:to-[#0F172A] py-12 md:py-16">
      <div className="container-wide w-full">
        <div className="animate-fade-in-up px-10">
          <div className="text-center mb-16">
            <span className="inline-block text-[#00B894] dark:text-[#00D9A5] text-sm font-semibold uppercase tracking-widest mb-4">
              Our Expertise
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1E293B] dark:text-white font-bold leading-tight mb-6">
              {title}
            </h2>
            <p className="text-[#64748B] dark:text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive restorative solutions tailored to restore your smile with precision and care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/80 dark:bg-[#1E293B]/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-transparent hover:border-[#00B894]/20 dark:hover:border-[#00D9A5]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#00B894]/5 dark:hover:shadow-[#00D9A5]/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-serif text-xl md:text-2xl text-[#1E293B] dark:text-white font-semibold leading-snug mb-4 group-hover:text-[#00B894] dark:group-hover:text-[#00D9A5] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#64748B] dark:text-[#94A3B8] text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
