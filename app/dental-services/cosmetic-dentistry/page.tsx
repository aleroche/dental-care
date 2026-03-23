import type { Metadata } from "next";
import Header from "@/components/shared/header";
import { VideoTextSection } from "@/src/components/video-text-section";
import { ServicesList } from "@/src/components/services-list";
import { ImageGrid } from "@/src/components/image-grid";
import { SectionText } from "@/src/components/section-text";
import { cosmeticDentistryData } from "@/src/data/cosmetic-dentistry";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry in Katy, TX | MiraMar Family Dental",
  description:
    "Transform your smile with MiraMar Family Dental's cosmetic dentistry services in Katy, TX. From veneers to teeth whitening, we provide comprehensive cosmetic dental care for the whole family.",
  keywords: [
    "cosmetic dentistry Katy TX",
    "dental veneers",
    "teeth whitening",
    "smile design",
    "porcelain veneers",
    "composite veneers",
    "family dentist Katy",
    "MiraMar Family Dental",
  ],
  openGraph: {
    title: "Cosmetic Dentistry in Katy, TX | MiraMar Family Dental",
    description:
      "Transform your smile with our cosmetic dentistry services. From veneers to teeth whitening.",
    url: "https://miramarfamilydental.com/dental-services/cosmetic-dentistry/",
    siteName: "MiraMar Family Dental",
    images: [
      {
        url: "https://miramarfamilydental.com/wp-content/uploads/2024/08/image-for-landing-5.png",
        width: 1200,
        height: 630,
        alt: "Cosmetic Dentistry at MiraMar Family Dental",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmetic Dentistry in Katy, TX",
    description:
      "Transform your smile with our cosmetic dentistry services.",
    images: [
      "https://miramarfamilydental.com/wp-content/uploads/2024/08/image-for-landing-5.png",
    ],
  },
  alternates: {
    canonical:
      "https://miramarfamilydental.com/dental-services/cosmetic-dentistry/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CosmeticDentistryPage() {
  return (
    <main>
      <Header title="Cosmetic Dentistry Dental Services" />

      <VideoTextSection
        videoSrc="https://miramarfamilydental.com/wp-content/uploads/2024/03/Servicios-cosmetica-carillas.mp4"
        title="Why Cosmetic Dentistry Matters"
        description="As clearly stated, this cosmetic dentistry service focuses on correcting imperfections and achieving a radiant smile that gives patients more confidence. At MiraMar Family Dental we take care of improving the appearance of your smile, correcting imperfections such as stained, worn, chipped, chipped, gapped or poorly positioned teeth. We go beyond simple aesthetics, because some procedures have an impact on improving your oral health and your overall health."
      />

      <ServicesList
        title="We can help you if you need cosmetic dentistry services with:"
        services={cosmeticDentistryData.services}
      />

      <ImageGrid images={cosmeticDentistryData.galleryImages} />

      <SectionText
        text="Remember that cosmetic dentistry services and treatments must go hand in hand with good oral health."
        emphasis
      />
    </main>
  );
}
