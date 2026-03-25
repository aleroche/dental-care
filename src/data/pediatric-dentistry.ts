export interface Service {
  title: string;
  description: string;
}

export interface PediatricDentistryData {
  services: Service[];
  galleryImages: { src: string; alt: string }[];
}

export const pediatricDentistryData: PediatricDentistryData = {
  services: [
    {
      title: "Cleaning and testing",
      description:
        "They are performed to evaluate the general health of the child's teeth and gums, detect cavities, bite problems or malocclusions, and regular professional dental cleanings are scheduled. In the cleaning, we remove plaque and tartar accumulated on your child's teeth, preventing cavities and gum disease.",
    },
    {
      title: "Fluoride treatments",
      description:
        "We apply topical fluoride gel or varnish to strengthen your child's teeth and make them more resistant to cavities.",
    },
    {
      title: "Fillings and restorations",
      description:
        "If your child has a cavity, we remove it and replace it with a tooth-colored biocompatible material, restoring its function and esthetics, and preventing them from causing more serious problems by not taking care of them in time. Sometimes we even restore molars and small teeth that have been slightly fractured due to falls or strong impact.",
    },
    {
      title: "Dental sealants",
      description:
        "We apply a protective coating on the chewing surfaces of teeth and molars to prevent the formation of caries in areas that are difficult to access and where sometimes, due to insufficient brushing, tartar and plaque can accumulate.",
    },
    {
      title: "Orthodontics",
      description:
        "We correct bite problems and tooth position with different options, such as metal or colored brackets or clear aligners, improving esthetics and masticatory function.",
    },
    {
      title: "Extractions",
      description:
        "In some cases, such as teeth with severe decay or crowding, extraction may be necessary.",
    },
    {
      title: "Athletic mouthguards",
      description:
        "To protect your child's teeth during contact sports, we recommend the use of customized and personalized mouthguards, according to their oral and dental anatomy.",
    },
  ],
  galleryImages: [
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/odontologia-pediatrica-1024x683.webp",
      alt: "Pediatric dentistry treatment for children in a friendly dental clinic at Miramar Family Dental",
    },

    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/miramarfamilydental_1548787986_1967698708021599110_8597807466-1-1024x1024.jpg",
      alt: "Happy child smiling after pediatric dental visit at Miramar Family Dental clinic",
    },
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/plaque-indicator-human-teeth-with-braces-plaque-is-colored-pink-teenager-using-plaque-indicator_152904-50808-1024x683.jpg",
      alt: "Plaque indicator showing buildup on teeth with braces in pediatric dental care at Miramar Family Dental",
    },


    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-odontontologia-pediatrica-1024x1024.webp",
      alt: "Comprehensive pediatric dental services including cleaning and preventive care at Miramar Family Dental",
    },
  ],
};
