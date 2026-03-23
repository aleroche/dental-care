import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/sections";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://miramarfamilydental.com"),
  title: "MiraMar Family Dental | Dentist in Katy, Texas",
  description:
    "Your trusted family dentist in Katy, Texas. Comprehensive dental care for the whole family. Book your appointment today.",
  keywords: [
    "dentist",
    "Katy",
    "Texas",
    "family dentist",
    "dental implants",
    "cosmetic dentistry",
    "pediatric dentist",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://miramarfamilydental.com",
    siteName: "MiraMar Family Dental",
    title: "MiraMar Family Dental | Dentist in Katy, Texas",
    description: "Your trusted family dentist in Katy, Texas. Comprehensive dental care for the whole family.",
    images: [
      {
        url: "https://miramarfamilydental.com/wp-content/uploads/2024/08/image-for-landing-5.png",
        width: 1200,
        height: 630,
        alt: "MiraMar Family Dental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MiraMar Family Dental | Dentist in Katy, Texas",
    description: "Your trusted family dentist in Katy, Texas. Comprehensive dental care for the whole family.",
    images: ["https://miramarfamilydental.com/wp-content/uploads/2024/08/image-for-landing-5.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          storageKey="theme"
        > 
        <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
