import type { Metadata, Viewport } from "next";
import Header from "@/components/shared/header";
import { VideoTextSection } from "@/src/components/video-text-section";
import { ServicesList } from "@/src/components/services-list";
import { ImageGrid } from "@/src/components/image-grid";
import { SectionText } from "@/src/components/section-text";
import { otherDentalServicesData } from "@/src/data/other-dental-services";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://miramarfamilydental.com"),
  title: "Other Dental Services in Katy, TX | MiraMar Family Dental",
  description:
    "MiraMar Family Dental offers comprehensive dental services including TMJ therapy, dental emergencies, bruxism treatment, sleep apnea, and sedation dentistry in Katy, TX.",
  keywords: [
    "other dental services Katy TX",
    "TMJ therapy",
    "dental emergencies",
    "bruxism treatment",
    "sleep apnea",
    "sedation dentistry",
    "family dentist Katy",
    "MiraMar Family Dental",
  ],
  openGraph: {
    title: "Other Dental Services in Katy, TX | MiraMar Family Dental",
    description:
      "At MiraMar Family Dental we care about providing comprehensive care to our patients. We offer a wide range of other services and treatments to meet your needs.",
    url: "https://miramarfamilydental.com/dental-services/other-dental-services/",
    siteName: "MiraMar Family Dental",
    images: [
      {
        url: "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-otros-servicios-y-tratamiento-1-683x1024.webp",
        width: 1200,
        height: 630,
        alt: "Other Dental Services at MiraMar Family Dental",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Other Dental Services in Katy, TX",
    description:
      "Comprehensive dental services including TMJ therapy, dental emergencies, bruxism, sleep apnea, and sedation dentistry.",
    images: [
      "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-otros-servicios-y-tratamiento-1-683x1024.webp",
    ],
  },
  alternates: {
    canonical:
      "https://miramarfamilydental.com/dental-services/other-dental-services/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OtherDentalServicesPage() {
  return (
    <main>
      <Header title="Other Dental Services" />

      <VideoTextSection
        videoSrc="https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-otros-tramientos.mp4"
        title="Comprehensive Dental Care for All Your Needs"
        description="At MiraMar Family Dental we care about providing comprehensive care to our patients. That's why, in addition to general dental services, we also offer a wide range of other services and treatments to meet your needs, and which are designed to meet your individual preferences and possibilities. Our commitment to you is to offer comprehensive care considering your oral health in conjunction with your general wellbeing."
      />

      <ServicesList
        title="We offer other dental services and treatments such as:"
        services={otherDentalServicesData.services}
      />

      <ImageGrid images={otherDentalServicesData.galleryImages} />

      <SectionText
        text="Ask about the financing options and plans that are right for you. This way you can get a completely personalized treatment."
        emphasis
      />
    </main>
  );
}
