export interface Service {
  title: string;
  description: string;
}

export interface CosmeticDentistryData {
  services: Service[];
  galleryImages: { src: string; alt: string }[];
}

export const cosmeticDentistryData: CosmeticDentistryData = {
  services: [
    {
      title: "Veneers",
      description:
        "Veneers are thin sheets of porcelain or composite material that are bonded to the front of the teeth. They are used to correct imperfections such as stains, wear or misaligned teeth. Porcelain ones are durable and highly esthetic. Composite veneers are more economical and ideal for small corrections.",
    },
    {
      title: "Mouth Reconstruction (Smile Design)",
      description:
        "This treatment aims to improve the overall appearance of the smile. It includes a combination of procedures such as veneers, crowns, implants and orthodontics. Customized smile design is tailored to the needs and desires of each patient.",
    },
    {
      title: "Teeth Whitening",
      description:
        "It is a safe and effective procedure to lighten the color of teeth. We offer two options: performed in the office by professionals with faster and more effective results, or at home by the patient himself with a set that we deliver and in which is included the whitening gel to be applied for a few weeks.",
    },
  ],
  galleryImages: [
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-carillas-682x1024.webp",
      alt: "Las carillas son láminas finas por encima del diente"
    },
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-sonrisa-1024x1024.webp",
      alt: "Servicio de diseño de sonrisa en Miramar Family Dental"
    },
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-blanqueamiento-dental-paciente-hombre-closeup-1024x1024.webp",
      alt: "Teeth whitening in male patients is very common."
    },
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-cosmetica-sonrisa-1024x1024.webp",
      alt: "Una sonrisa blanca y perfecta después de odontología cosmética"
    }
  ],
};
