import type { Metadata, Viewport } from "next";
import Header from "@/components/shared/header";
import { VideoTextSection } from "@/src/components/video-text-section";
import { ServicesList } from "@/src/components/services-list";
import { ImageGrid } from "@/src/components/image-grid";
import { SectionText } from "@/src/components/section-text";
import { pediatricDentistryData } from "@/src/data/pediatric-dentistry";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://miramarfamilydental.com"),
  title: "Pediatric Dentistry Services in Katy, TX | MiraMar Family Dental",
  description:
    "Expert pediatric dentistry services at MiraMar Family Dental in Katy, TX. We provide comprehensive dental care for children, including cleanings, fluoride treatments, fillings, sealants, and orthodontics.",
  keywords: [
    "pediatric dentistry Katy TX",
    "children's dentist",
    "pediatric dental care",
    "kids dentist Katy",
    "family dentist Katy",
    "MiraMar Family Dental",
  ],
  openGraph: {
    title: "Pediatric Dentistry Services in Katy, TX | MiraMar Family Dental",
    description:
      "Pediatric dentistry is the specialty of dentistry that deals with the oral health of children from birth through adolescence.",
    url: "https://miramarfamilydental.com/dental-services/pediatric-dentistry/",
    siteName: "MiraMar Family Dental",
    images: [
      {
        url: "https://miramarfamilydental.com/wp-content/uploads/2024/03/odontologia-pediatrica-1024x683.webp",
        width: 1200,
        height: 630,
        alt: "Pediatric Dentistry Services at MiraMar Family Dental",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pediatric Dentistry Services in Katy, TX",
    description:
      "Expert pediatric dentistry services for children. Comprehensive dental care including cleanings, fluoride treatments, and orthodontics.",
    images: [
      "https://miramarfamilydental.com/wp-content/uploads/2024/03/odontologia-pediatrica-1024x683.webp",
    ],
  },
  alternates: {
    canonical:
      "https://miramarfamilydental.com/dental-services/pediatric-dentistry/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PediatricDentistryPage() {
  return (
    <main>
      <Header title="Pediatric Dentistry" />

      <VideoTextSection
        videoSrc="https://miramarfamilydental.com/wp-content/uploads/2024/03/Servicios-odontologia-pediatrica.mp4"
        title="Specialized Dental Care for Your Child"
        description="Pediatric dentistry, also known as pediatric dentistry, is the specialty of dentistry that deals with the oral health of children from birth through adolescence. Given their fundamental role in the health and well-being of children, it is important that as a parent you take steps to take care of your children's oral health from an early age. Good oral health in childhood can prevent health problems in the future, such as heart disease, diabetes or learning disabilities."
      />

      <ServicesList
        title="Pediatric dentistry services we offer for your kids"
        services={pediatricDentistryData.services}
      />

      <ImageGrid images={pediatricDentistryData.galleryImages} />

      <SectionText
        text="As a parent, create a positive environment around oral hygiene and make brushing teeth a fun experience for them."
        emphasis
      />
    </main>
  );
}
