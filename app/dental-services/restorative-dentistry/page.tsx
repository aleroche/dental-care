import type { Metadata } from "next";
import Header from "@/components/shared/header";
import { VideoTextSection } from "@/src/components/video-text-section";
import { ServicesList } from "@/src/components/services-list";
import { ImageGrid } from "@/src/components/image-grid";
import { SectionText } from "@/src/components/section-text";
import { restorativeDentistryData } from "@/src/data/restorative-dentistry";

export const metadata: Metadata = {
  title: "Restorative Dentistry in Katy, TX | MiraMar Family Dental",
  description:
    "Restore your smile with MiraMar Family Dental's restorative dentistry services in Katy, TX. From fillings to implants, we provide comprehensive dental care for the whole family.",
  keywords: [
    "restorative dentistry Katy TX",
    "dental fillings",
    "dental crowns",
    "dental bridges",
    "root canal",
    "dentures",
    "dental implants",
    "family dentist Katy",
    "MiraMar Family Dental",
  ],
  openGraph: {
    title: "Restorative Dentistry in Katy, TX | MiraMar Family Dental",
    description:
      "Restore your smile with comprehensive restorative dentistry services. From fillings to implants.",
    url: "https://miramarfamilydental.com/dental-services/restorative-dentistry/",
    siteName: "MiraMar Family Dental",
    images: [
      {
        url: "https://miramarfamilydental.com/wp-content/uploads/2024/08/image-for-landing-5.png",
        width: 1200,
        height: 630,
        alt: "Restorative Dentistry at MiraMar Family Dental",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restorative Dentistry in Katy, TX",
    description:
      "Restore your smile with comprehensive restorative dentistry services.",
    images: [
      "https://miramarfamilydental.com/wp-content/uploads/2024/08/image-for-landing-5.png",
    ],
  },
  alternates: {
    canonical:
      "https://miramarfamilydental.com/dental-services/restorative-dentistry/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RestorativeDentistryPage() {
  return (
    <main>
      <Header title="Restorative Dentistry Dental Services" />

      <VideoTextSection
        videoSrc="https://miramarfamilydental.com/wp-content/uploads/2024/03/4774134_Dentist_Drilling_Sick_1280x720.mp4"
        title="Why Restorative Dentistry Matters"
        description="At MiraMar Family Dental, we believe everyone deserves a healthy, beautiful smile. Restorative dentistry focuses on repairing and replacing damaged or missing teeth to restore both function and aesthetics. Whether you need a simple filling or a complete smile makeover, our experienced team is here to help you regain confidence in your oral health."
      />

      <ServicesList
        title="Most Recurrent Procedures and Services"
        services={restorativeDentistryData.services}
      />

      <ImageGrid images={restorativeDentistryData.galleryImages} />

      <SectionText
        text="At MiraMar Family Dental, we are committed to providing high-quality restorative dentistry services in a comfortable and welcoming environment. Schedule your consultation today and let us help you achieve the healthy, beautiful smile you deserve."
        emphasis
      />
    </main>
  );
}
