export interface Service {
  title: string;
  description: string;
}

export interface EndodonticData {
  services: Service[];
  galleryImages: { src: string; alt: string }[];
}

export const endodonticData: EndodonticData = {
  services: [
    {
      title: "Single canal endodontics",
      description:
        "This is the simplest treatment and is performed on teeth with a single root canal, such as incisors or canines. The infected pulp is removed, the root canal is cleaned and filled. A temporary crown or filling is placed to protect the tooth.",
    },
    {
      title: "Pulp Canal Obliteration (PCO)",
      description:
        "Treating calcified root canals and pulp chambers. While fairly uncommon, pulp canal obliteration (PCO) is a condition where calcified tissue becomes deposited in the root canal and the pulp chamber. With this condition, the root canal is narrowed or blocked completely, complicating standard endodontic treatments such as root canal therapy. Typically pulp canal obliteration is the result of oral trauma, but may also be the result of infection or age-related dental conditions.",
    },
    {
      title: "Apicoectomy Procedure",
      description:
        "Apicoectomies, also referred to as \"root-end resections,\" are a type of specialized dental procedure designed to remove the apex (tip) of a tooth root. Typically, an apicoectomy is recommended when standard root canal procedures fail to fully treat an infection at the apex of the root or the surrounding bone tissue. In cases of chronic inflammation, infection, and cysts, an apicoectomy may be the last option to preserve the tooth and forego extraction. Once the apex is removed and the root canal is treated, it is then sealed to help prevent future infection. According to a retrospective analysis published on PubMed, the success rate of apicoectomy procedures is roughly 91.4% at one-year follow-up.",
    },
    {
      title: "Multi-canal endodontics",
      description:
        "It is performed on teeth with two or more root canals, such as molars. The procedure is similar to that of a single canal, but more time and care are needed due to the complexity of the tooth anatomy. Several appointments may be needed to complete the treatment.",
    },
    {
      title: "Retreatment of previous root canal",
      description:
        "It is necessary when a previous endodontic treatment has failed because of a persistent infection, a tooth fracture or a problem with the root canal filling material. The procedure is similar to an initial endodontic treatment, but may be more complex due to the presence of old filling material.",
    },
  ],
  galleryImages: [
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/04/root-canal-treatment-795x1024.png",
      alt: "Root canan treatment infographic"
    },
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/vector-3d-root-canal-scaled.webp",
      alt: "Extracción de pulpa en tratameinto de endodoncia modelo 3D"
    },
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-root-canal-1-849x1024.webp",
      alt: "Extracción de pulpa en Root canal"
    },
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/Servicios-endodoncia-2-1024x682.webp",
      alt: "La endodoncia o Root Canal es un servicio que ofrecemos a nuestros pacientes en Miramar Family Dental"
    },
  ],
};
