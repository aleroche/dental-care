export interface Service {
  title: string;
  description: string;
  link?: string;
}

export interface RestorativeDentistryData {
  services: Service[];
  galleryImages: { src: string; alt: string }[];
}

export const restorativeDentistryData: RestorativeDentistryData = {
  services: [
    {
      title: "Dental Fillings",
      description: "Composite (tooth-colored) or amalgam fillings to restore teeth affected by cavities or minor damage.",
    },
    {
      title: "Dental Crowns",
      description: "Custom-made caps placed over damaged teeth to restore strength, shape, and appearance. Available in porcelain, ceramic, or zirconia.",
    },
    {
      title: "Dental Bridges",
      description: "Fixed prosthetic devices that replace one or more missing teeth by anchoring to adjacent natural teeth or implants.",
    },
    {
      title: "Root Canal Therapy",
      description: "Treatment to save severely infected teeth by removing damaged pulp, cleaning the canal, and sealing with a filling or crown.",
    },
    {
      title: "Dentures",
      description: "Removable appliances that replace missing teeth. Available as full or partial dentures for upper and/or lower arches.",
    },
    {
      title: "Dental Implants",
      description: "Titanium posts surgically placed into the jawbone to support replacement teeth, providing a permanent solution for missing teeth.",
    },
  ],
  galleryImages: [
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/04/dental-bridge-734x1024.png",
      alt: "Dental Bridge",
    },
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/04/crown-734x1024.png",
      alt: "Dental Crown",
    },
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/tecnico-dentadura-1024x1024.webp",
      alt: "Dentures",
    },
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/image-1-1024x1024.webp",
      alt: "Dental Care",
    },
  ],
};
