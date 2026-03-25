import type { Metadata, Viewport } from "next";
import Header from "@/components/shared/header";
import { VideoTextSection } from "@/src/components/video-text-section";
import { ServicesList } from "@/src/components/services-list";
import { ImageGrid } from "@/src/components/image-grid";
import { SectionText } from "@/src/components/section-text";
import { periodontalServicesData } from "@/src/data/periodontal-services";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://miramarfamilydental.com"),
  title: "Periodontal Services in Katy, TX | MiraMar Family Dental",
  description:
    "Protect your gum health with MiraMar Family Dental's periodontal services in Katy, TX. From deep cleaning to gum grafting, we provide comprehensive gum disease treatment.",
  keywords: [
    "periodontal services Katy TX",
    "gum disease treatment",
    "deep cleaning teeth",
    "scaling and root planing",
    "gum grafting",
    "dental implants",
    "family dentist Katy",
    "MiraMar Family Dental",
  ],
  openGraph: {
    title: "Periodontal Services in Katy, TX | MiraMar Family Dental",
    description:
      "Protect your gum health with comprehensive periodontal services. From deep cleaning to dental implants.",
    url: "https://miramarfamilydental.com/dental-services/periodontal-services/",
    siteName: "MiraMar Family Dental",
    images: [
      {
        url: "https://miramarfamilydental.com/wp-content/uploads/2024/08/image-for-landing-5.png",
        width: 1200,
        height: 630,
        alt: "Periodontal Services at MiraMar Family Dental",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Periodontal Services in Katy, TX",
    description:
      "Protect your gum health with comprehensive periodontal services.",
    images: [
      "https://miramarfamilydental.com/wp-content/uploads/2024/08/image-for-landing-5.png",
    ],
  },
  alternates: {
    canonical:
      "https://miramarfamilydental.com/dental-services/periodontal-services/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PeriodontalServicesPage() {
  return (
    <main>
      <Header title="Periodontal Dental Services" />

      <VideoTextSection
        videoSrc="https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-periodoncia.mp4"
        title="Why Periodontal Health Matters"
        description="Gum (or periodontal) disease is one of the most common causes of tooth loss in adults. At MiraMar Family Dental we specialize in the diagnosis, prevention and treatment of diseases of the gums and tissues surrounding the teeth: the gingivitis (inflammation of the gums) and the periodontitis (chronic infection of the dental support structures). Our team of experts is committed to your oral health and to preserving the function and esthetics of your teeth and smile."
      />

      <ServicesList
        title="Specialized periodontal services and treatments to keep your gums healthy:"
        services={periodontalServicesData.services}
      />

      <ImageGrid images={periodontalServicesData.galleryImages} />

      {periodontalServicesData.footerText && (
        <SectionText text={periodontalServicesData.footerText} />
      )}

      <SectionText
        text="Early diagnosis and proper treatment can help prevent tooth loss and improve your oral health."
        emphasis
      />
    </main>
  );
}
