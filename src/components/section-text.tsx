interface SectionTextProps {
  text: string;
  emphasis?: boolean;
}

export function SectionText({ text, emphasis = false }: SectionTextProps) {
  return (
    <section className="bg-gray-50 dark:bg-[#0F172A] py-12 md:py-16">
      <div className="container-wide w-full">
        <div className="animate-fade-in-up px-10">
          <p
            className={`max-w-3xl mx-auto text-center leading-relaxed ${
              emphasis
                ? "text-[#1E293B] dark:text-white text-lg font-medium"
                : "text-[#475569] dark:text-[#94A3B8] text-base"
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
