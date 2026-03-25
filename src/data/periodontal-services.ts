import { Service } from "./restorative-dentistry";

export interface PeriodontalServicesData {
  services: Service[];
  galleryImages: { src: string; alt: string }[];
  footerText?: string;
}

export const periodontalServicesData: PeriodontalServicesData = {
  services: [
    {
      title: "Periodontal therapy",
      description:
        "Periodontal therapy helps prevent the progression of periodontal disease and keep teeth firmly anchored in place. We perform comprehensive examinations to evaluate gum health and detect early signs of periodontal disease. When necessary, deep cleaning (scaling and root planing) is performed to remove plaque and tartar from under the gums.",
    },
    {
      title: "Dental implants",
      description:
        "Dental implants are a permanent solution to replace missing teeth. These are titanium screws that are inserted into the maxillary bone, acting as artificial roots to support crowns, bridges or dental prostheses. An implant can be placed for a single tooth, for several teeth or for the entire arch (All-on-X implants).",
      link: "/dental-services/dental-implants",
    },
    {
      title: "Alveolar ridge augmentation",
      description:
        "This procedure is usually performed when there is a loss or deficiency of bone in the alveolar ridge (which is the bone that surrounds and supports the teeth), either by previous tooth extractions, periodontal disease, trauma, etc. Alveolar ridge augmentation allows the reconstruction of the lost bone for the subsequent placement of dental implants or other prosthetic restorations.",
    },
    {
      title: "Gum grafting",
      description:
        "This procedure consists of taking healthy gingival tissue from the patient and surgically transplanting it to the gum deficient areas to reconstruct the soft tissues surrounding the teeth. This will help cover the root of the tooth, protect it from sensitivity and improve the esthetics of your smile. It is a relatively simple procedure performed under local anesthesia. It only requires a postoperative period of specific care to allow adequate healing of the graft.",
    },
    {
      title: "Gum contouring",
      description:
        "Gum contouring, also known as gum reshaping or gingivoplasty, is a procedure performed to modify the shape, position and contour of the gums to improve the appearance of the smile. This procedure seeks to enhance the smile, creating a more aesthetic and symmetrical gingival contour.",
    },
  ],
  galleryImages: [

    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-implantes-dentales-1-1024x682.webp",
      alt: "Dental implant services for adults at Miramar Family Dental clinic",
    },

    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/04/Dental-implant-734x1024.png",
      alt: "Dental implant procedure infographic at Miramar Family Dental",
    },

    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/encias-rojas-1024x683.webp",
      alt: "Treatment for red and inflamed gums periodontal care",
    },
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-implante-1024x1024.webp",
      alt: "Periodontal and dental implant services at Miramar Family Dental",
    },
  ],
 
};
