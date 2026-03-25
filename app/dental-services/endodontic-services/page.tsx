import type { Metadata, Viewport } from "next";
import Header from "@/components/shared/header";
import { VideoTextSection } from "@/src/components/video-text-section";
import { ServicesList } from "@/src/components/services-list";
import { ImageGrid } from "@/src/components/image-grid";
import { SectionText } from "@/src/components/section-text";
import { endodonticData } from "@/src/data/endodontic-services";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://miramarfamilydental.com"),
  title: "Endodontics (Root Canal) in Katy, TX | MiraMar Family Dental",
  description:
    "Save your damaged tooth with MiraMar Family Dental's endodontic services in Katy, TX. We provide root canal treatment, apicoectomy, and retreatment procedures to preserve your natural teeth.",
  keywords: [
    "endodontics Katy TX",
    "root canal treatment",
    "root canal therapy",
    "apicoectomy",
    "endodontist Katy",
    "tooth saving treatment",
    "MiraMar Family Dental",
  ],
  openGraph: {
    title: "Endodontics (Root Canal) in Katy, TX | MiraMar Family Dental",
    description:
      "Save your damaged tooth with our endodontic services. Root canal treatment and specialized procedures.",
    url: "https://miramarfamilydental.com/dental-services/endodontic-services/",
    siteName: "MiraMar Family Dental",
    images: [
      {
        url: "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-cosmetica-sonrisa-1024x1024.webp",
        width: 1200,
        height: 630,
        alt: "Endodontics at MiraMar Family Dental",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Endodontics (Root Canal) in Katy, TX",
    description:
      "Save your damaged tooth with our endodontic services.",
    images: [
      "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-cosmetica-sonrisa-1024x1024.webp",
    ],
  },
  alternates: {
    canonical:
      "https://miramarfamilydental.com/dental-services/endodontic-services/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EndodonticServicesPage() {
  return (
    <main>
      <Header title="Endodontics or Root Canal Dental Services" />

      <VideoTextSection
        videoSrc="https://miramarfamilydental.com/wp-content/uploads/2024/03/tratameinto-de-canales.mp4"
        title="Endodontics"
        description="Endodontics, also known as root canal treatment or Root Canal, is a procedure performed to save a tooth or molar damaged by an infection caused by deep decay, dental trauma or wear. Infection or damage can affect the dental pulp, which is the soft tissue inside the tooth that contains the nerves and blood vessels. The treatment focuses on removing the affected dental pulp and replacing it with a biocompatible filling."
      />

      <ServicesList
        title="Types of endodontics according to the condition"
        services={endodonticData.services}
      />

      <ImageGrid images={endodonticData.galleryImages} />

      <SectionText
        text="The endodontic service is performed in one or two appointments, and in most cases the procedure is painless."
        emphasis
      />
    </main>
  );
}
