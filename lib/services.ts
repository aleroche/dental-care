export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  href: string;
}

export const SERVICES: Service[] = [
  {
    id: "dental-cleanings",
    title: "Dental Cleanings",
    description: "Professional teeth cleaning to maintain oral health.",
    href: "/services/dental-cleanings",
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions.",
    href: "/services/dental-implants",
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with modern cosmetic procedures.",
    href: "/services/cosmetic-dentistry",
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    description: "Straighten your teeth with braces or aligners.",
    href: "/services/orthodontics",
  },
  {
    id: "root-canals",
    title: "Root Canals",
    description: "Save infected teeth with root canal therapy.",
    href: "/services/root-canals",
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    description: "Gentle dental care for children.",
    href: "/services/pediatric-dentistry",
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    description: "Brighten your smile with professional whitening.",
    href: "/services/teeth-whitening",
  },
  {
    id: "emergency-dental",
    title: "Emergency Dental Care",
    description: "Urgent dental care when you need it most.",
    href: "/services/emergency-dental",
  },
  {
    id: "preventive-dentistry",
    title: "Preventive Dentistry",
    description: "Stop problems before they start.",
    href: "/services/preventive-dentistry",
  },
];
