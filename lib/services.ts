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
    id: "preventive-dentistry",
    title: "Preventive Dentistry",
    description: "Stop problems before they start.",
    href: "/services/preventive-dentistry",
  },

  {
    id: "oral-surgery",
    title: "Oral Surgery",
    description: "Specialized surgical procedures for complex dental issues.",
    href: "/services/oral-surgery",
  },

  {
    id: "restorative-dentistry",
    title: "Restorative Dentistry",
    description: "Restore your smile with advanced restorative procedures.",
    href: "/services/restorative-dentistry",
  },

  {
    id: "endodontics",
    title: "Endodontics",
    description: "Specialized treatment for the dental pulp and surrounding tissues.",
    href: "/services/endodontics",
  },

  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with modern cosmetic procedures.",
    href: "/services/cosmetic-dentistry",
  },

  {
    id: "periodontics",
    title: "Periodontics",
    description: "Specialized treatment for the gums and supporting structures.",
    href: "/services/periodontics",
  },

  {
    id: "orthodontics",
    title: "Orthodontics",
    description: "Straighten your teeth with braces or aligners.",
    href: "/services/orthodontics",
  },

  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    description: "Gentle dental care for children.",
    href: "/services/pediatric-dentistry",
  },

  {
    id: "other-services-and-treatments",
    title: "Other Services and Treatments",
    description: "Additional dental services to meet your needs.",
    href: "/services/other-services-and-treatments",
  },

];
