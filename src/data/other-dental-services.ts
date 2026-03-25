export interface Service {
  title: string;
  description: string;
}

export interface OtherDentalServicesData {
  services: Service[];
  galleryImages: { src: string; alt: string }[];
}

export const otherDentalServicesData: OtherDentalServicesData = {
  services: [
    {
      title: "TMJ Therapy",
      description:
        "The temporomandibular joint (TMJ) is the joint that connects the jaw to the skull. TMJ problems can cause facial pain, clicking or popping noises when opening the mouth, and difficulty chewing. At Miramar Family Dental we have specialists in the treatment of TMJ disorders who will help you relieve pain and improve joint function.",
    },
    {
      title: "Dental emergencies",
      description:
        "We understand that dental emergencies can arise at any time. Do not hesitate to contact us for: toothache, bleeding and swollen gums, infections and abscesses, wisdom tooth pain, post-surgical complications, broken, cracked or chipped teeth, restorations that have fallen out, orthodontic emergencies, among others.",
    },
    {
      title: "Bruxism and sleep apnea",
      description:
        "Bruxism is the involuntary habit of grinding or clenching the teeth, usually during sleep. Sleep apnea is a breathing disorder characterized by repeated interruption of breathing during sleep. Both disorders can have serious consequences for oral and general health. In our clinic, we can diagnose and treat bruxism and sleep apnea with different techniques, such as unloading splints or mandibular advancement devices.",
    },
    {
      title: "Sedation dentistry",
      description:
        "For those patients who are anxious or fearful of the dentist, we offer the possibility of dental treatments under sedation. Sedation consists of the administration of drugs that help relax the patient and reduce anxiety, without the patient losing consciousness. In this way, patients can receive the dental treatments they need comfortably and safely.",
    },
  ],
  galleryImages: [
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-otros-servicios-y-tratamiento-1-683x1024.webp",
      alt: "Emergency dental care services treating urgent tooth pain at Miramar Family Dental",
    },
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-oral-surgery-1-1024x1024.webp",
      alt: "Oral surgery procedures performed by dental specialists at Miramar Family Dental clinic",
    },
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/enfermedades-periodonticas-1-1024x1024.webp",
      alt: "Periodontal disease treatment and gum care services at Miramar Family Dental",
    },
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-otros-tratamientos-ferula-de-descarga-1024x683.webp",
      alt: "Custom night guard splint for teeth grinding treatment at Miramar Family Dental",
    },
  ],
};
