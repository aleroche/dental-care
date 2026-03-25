export interface NavItem {
  title: string;
  href?: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  
  {
    title: "About us",
    children: [
      { title: "Dr Keyttia Beovides", href: "/about-us/dr-keyttia-beovides" },
      { title: "Meet the Team", href: "/about-us/team" },
    ],
  },
  {
    title: "Dental Services",
    children: [
      {
        title: "Diagnostic & Preventive",
        children: [
          { title: "Dental Radiographs", href: "/dental-services/diagnostic-and-preventive/dental-radiographs" },
        ],
      },
      {
        title: "Oral Surgery",
        children: [
          { title: "Dental Implants", href: "/services/dental-implants" },
          {
            title: "All-on-X Dental Implants",
            href: "/services/all-on-x-dental-implants",
          },
        ],
      },
      { title: "Restorative Dentistry", href: "/dental-services/restorative-dentistry" },
      { title: "Endodontics", href: "/dental-services/endodontic-services" },
      { title: "Cosmetic Dentistry", href: "/dental-services/cosmetic-dentistry" },
      {
        title: "Periodontal",
        
        children: [
          { title: "Periodontal Services", href: "/dental-services/periodontal-services", },
          { title: "Deep Dental Cleaning", href: "/services/deep-dental-cleaning" },
        ],
      },
      { title: "Orthodontic", href: "/dental-services/orthodontic-services" },
      { title: "Pediatric Dentistry", href: "/dental-services/pediatric-dentistry" },
      { title: "Other Services", href: "/dental-services/other-dental-services" },
    ],
  },
  {
    title: "Patients",
    children: [
      { title: "New patients", href: "/patients/new-patients" },
      { title: "MFD Membership", href: "/patients/mfd-membership" },
      { title: "Financing plans", href: "/patients/financing" },
      { title: "Dental Insurance", href: "/patients/insurance" },
      { title: "FAQs", href: "/patients/faqs" },
    ],
  },
  { title: "Deals", href: "/deals" },
  { title: "Reviews", href: "/reviews" },
  { title: "Contact us", href: "/contact" },
];
