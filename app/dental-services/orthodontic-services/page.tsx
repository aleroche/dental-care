import type { Metadata, Viewport } from "next";
import Header from "@/components/shared/header";
import { VideoTextSection } from "@/src/components/video-text-section";
import { ServicesList } from "@/src/components/services-list";
import { ImageGrid } from "@/src/components/image-grid";
import { SectionText } from "@/src/components/section-text";
import { orthodonticServicesData } from "@/src/data/orthodontic-services";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://miramarfamilydental.com"),
  title: "Orthodontic Services in Katy, TX | MiraMar Family Dental",
  description:
    "Transform your smile with MiraMar Family Dental's orthodontic services in Katy, TX. From traditional braces to Invisalign, we provide comprehensive orthodontic care for the whole family.",
  keywords: [
    "orthodontics Katy TX",
    "braces",
    "Invisalign",
    "lingual orthodontics",
    "clear aligners",
    "orthodontist Katy",
    "family dentist Katy",
    "MiraMar Family Dental",
  ],
  openGraph: {
    title: "Orthodontic Services in Katy, TX | MiraMar Family Dental",
    description:
      "With the service of orthodontics at MiraMar Family Dental we study, diagnose, correct and prevent anomalies in the shape and position of the teeth and jaws.",
    url: "https://miramarfamilydental.com/dental-services/orthodontic/",
    siteName: "MiraMar Family Dental",
    images: [
      {
        url: "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-ortodoncia-1024x1024.webp",
        width: 1200,
        height: 630,
        alt: "Orthodontic Services at MiraMar Family Dental",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orthodontic Services in Katy, TX",
    description:
      "With the service of orthodontics at MiraMar Family Dental we study, diagnose, correct and prevent anomalies in the shape and position of the teeth and jaws.",
    images: [
      "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-ortodoncia-1024x1024.webp",
    ],
  },
  alternates: {
    canonical:
      "https://miramarfamilydental.com/dental-services/orthodontic/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OrthodonticServicesPage() {
  return (
    <main>
      <Header title="Orthodontic" />

      <VideoTextSection
        videoSrc="https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-ortodoncia.mp4"
        title="Transform Your Smile with Expert Orthodontic Care"
        description="At MiraMar Family Dental, our orthodontic services focus on studying, diagnosing, correcting, and preventing anomalies in the shape and position of your teeth and jaws. We help patients solve problems related to dental alignment and bite, including crowded, misaligned, or displaced teeth. Beyond aesthetics, we aim to improve your oral health and optimal masticatory function to prevent muscle tension, gum disease, and premature tooth loss."
      />

      <ServicesList
        title="Our orthodontic services include:"
        services={orthodonticServicesData.services}
      />

      <ImageGrid images={orthodonticServicesData.galleryImages} />

      <SectionText
        text="Successful treatment requires that you follow your orthodontist's instructions and be consistent with follow-up visits."
        emphasis
      />
    </main>
  );
}