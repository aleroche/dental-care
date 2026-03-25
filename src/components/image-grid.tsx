import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

interface ImageGridProps {
  images: GalleryImage[];
}

export function ImageGrid({ images }: ImageGridProps) {
  return (
    <section className="bg-white dark:bg-[#0F172A] py-8 md:py-12">
      <div className="container-wide w-full">
        <div className="animate-fade-in-up px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 dark:bg-[#1E293B]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  unoptimized
                  className="object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
