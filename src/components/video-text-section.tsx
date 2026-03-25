interface VideoTextSectionProps {
  videoSrc: string;
  title?: string | null;
  description: string;
}

export function VideoTextSection({
  videoSrc,
  title = null,
  description,
}: VideoTextSectionProps) {
  return (
    <section className="bg-white dark:bg-[#0F172A] py-12 md:py-16">
      <div className="container-wide w-full">
        <div className="animate-fade-in-up px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-lg">
              <video
                src={videoSrc}
                controls
                playsInline
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl text-[#1E293B] dark:text-white font-bold leading-tight">
                {title}
              </h2>
              <p className="text-[#475569] dark:text-[#94A3B8] text-base leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
