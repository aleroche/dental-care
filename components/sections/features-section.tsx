"use client";

import { useState, useEffect } from "react";

const features: { type: "image" | "text"; src?: string; alt?: string; content?: string }[] = [
  {
    type: "image",
    src: "https://miramarfamilydental.com/wp-content/uploads/2024/06/abstract-delight-pediatric-dentistry_1029473-529057-1536x1024.jpg",
    alt: "Niña en sillón de consulta dental"
  },
  {
    type: "text",
    content: "A family clinic very close to you"
  },
  {
    type: "image",
    src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/smiling-woman-drinking-orange-juice-kitchen_605022-26571-600x600.jpg",
    alt: "Cuidamos tu salud y tu sonrisa"
  },
  {
    type: "text",
    content: "that takes care of your smile and your oral health"
  },
  {
    type: "text",
    content: "with affordable prices and convenient payment plans"
  },
  {
    type: "image",
    src: "https://miramarfamilydental.com/wp-content/uploads/2024/06/woman-glasses-closeup-with-confidence-thinking-with-vision-idea-planning-hr-female-employee-specs-with-hand-thought-office-onboarding-staff-workforce-atlanta_590464-334926-scaled.jpg",
    alt: "Woman glasses and closeup with confidence and thinking"
  },
  {
    type: "text",
    content: "because we are \"latinos\" and speak Spanish and English"
  },
  {
    type: "image",
    src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/happy-family-254_936147-2253-600x600.jpg",
    alt: "Somos una clinica familiar para toda la familia hispana"
  }
];

export function FeaturesSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const row1 = features.slice(0, 4);
  const row2 = features.slice(4);

  return (
    <section className="py-20 bg-white dark:bg-[#0F172A] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F8FAFC] dark:from-[#0F172A] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F8FAFC] dark:from-[#0F172A] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0A6CFF]/5 dark:bg-[#0A6CFF]/10 rounded-full blur-3xl" />
      </div>

      {/* Top border for visual separation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E2E8F0] dark:via-[#334155] to-transparent" />

      <div className="container-wide relative z-10">
        {/* Row 1: Image | Text | Image | Text */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {row1.map((item, index) => (
            <div
              key={`row1-${index}`}
              className={`relative aspect-[4/5] md:aspect-[3/4] overflow-hidden ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.type === "image" ? (
                <>
                  <img
                    src={item.src || "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"}
                    alt={item.alt || ""}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 via-transparent to-transparent" />
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center p-8 bg-gradient-to-br from-[#0A6CFF] to-[#003D99] dark:from-[#1E293B] dark:to-[#0F172A]">
                  <p className="font-serif text-xl md:text-2xl lg:text-3xl text-white text-center font-semibold leading-tight">
                    {item.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Row 2: Text | Image | Text | Image */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mt-0 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {row2.map((item, index) => (
            <div
              key={`row2-${index}`}
              className={`relative aspect-[4/5] md:aspect-[3/4] overflow-hidden ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {item.type === "image" ? (
                <>
                  <img
                    src={item.src || "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"}
                    alt={item.alt || ""}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 via-transparent to-transparent" />
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center p-8 bg-gradient-to-br from-[#00B894] to-[#006B52] dark:from-[#1E293B] dark:to-[#0F172A]">
                  <p className="font-serif text-xl md:text-2xl lg:text-3xl text-white text-center font-semibold leading-tight">
                    {item.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border for visual separation */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E2E8F0] dark:via-[#334155] to-transparent" />
    </section>
  );
}
