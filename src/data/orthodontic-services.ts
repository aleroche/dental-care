export interface Service {
  title: string;
  description: string;
}

export interface OrthodonticServicesData {
  services: Service[];
  galleryImages: { src: string; alt: string }[];
}

export const orthodonticServicesData: OrthodonticServicesData = {
  services: [
    {
      title: "Preliminary examinations and studies",
      description:
        "This is a fundamental part of the orthodontic process. The examinations allow the orthodontist to obtain accurate information about the position of the teeth and jaw bones, as well as the general health of the patient's mouth. In addition to the clinical history and analysis, x-rays are taken, molds of the teeth are taken and we document from day zero the whole process of transformation that your smile will have.",
    },
    {
      title: "Diagnosis",
      description:
        "From the examinations and preliminary study, the orthodontist determines the cause of the bite problems and the position of the teeth, and establishes the appropriate treatment plan and will help you choose the best one for your case.",
    },
    {
      title: "Fixed orthodontics",
      description:
        "This is the most traditional type of orthodontics. Metal, ceramic or sapphire brackets and archwires are used, which are fixed to the teeth. Brackets can be placed on the external side of the teeth (vestibular orthodontics) or on the internal side (lingual orthodontics). It is an excellent option for correcting a wide variety of bite and tooth position problems.",
    },
    {
      title: "Lingual Orthodontics",
      description:
        "Lingual orthodontics is an orthodontic technique that uses brackets to correct the position of your teeth, but unlike traditional (fixed) orthodontics, the brackets are placed on the inside of your teeth, behind the tongue, rather than on the visible outside. This makes it an ideal option for patients who are looking for an esthetic solution and do not want brackets to be noticeable.",
    },
    {
      title: "Invisible orthodontics",
      description:
        "With this innovative technique, custom-made clear aligners are used to correct the position of the teeth. Have you heard of Invisalign? These aligners are virtually invisible, removable and are changed every two weeks to apply gentle, gradual pressure on the teeth, gradually moving them into the desired position.",
    },
  ],
  galleryImages: [
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/dentist-discussing-tooth-extraction-procedure-with-patient-showing-xrays_177415-3993-1024x683.jpg",
      alt: "Dentist explaining tooth extraction procedure with X-rays to patient at Miramar Family Dental",
    },
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-ortodoncia-brackets-de-colores-1024x683.webp",
      alt: "Orthodontic treatment with colorful braces improving smiles at Miramar Family Dental",
    },
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-invisalign-1024x681.webp",
      alt: "Invisalign clear aligners for discreet orthodontic treatment at Miramar Family Dental",
    },
    {
      src: "https://miramarfamilydental.com/wp-content/uploads/2024/03/servicios-ortodoncia-1024x1024.webp",
      alt: "Comprehensive orthodontic services at MiraMar Family Dental clinic",
    },
  ],
};