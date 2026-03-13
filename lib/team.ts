export interface TeamMember {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "dr-keyttia-beovides",
    name: "Dr Keyttia Beovides",
    title: "Dentist",
    description:
      "Dr. Keyttia Beovides is the founder of MiraMar Family Dental, dedicated to improving smiles and helping patients understand the value of lifelong oral health. She provides compassionate care for families in Katy, Cypress, and the Houston area.",
    image: "/images/team/dr-keyttia-beovides.jpg",
  },
  {
    id: "dr-tihany-rodriguez",
    name: "Dr Tihany Rodriguez",
    title: "Dentist",
    description:
      "Dr. Tihany Rodriguez combines international orthodontic training with general dentistry to help patients achieve healthy, confident smiles. She provides compassionate, personalized care for patients of all ages.",
    image: "/images/team/dr-tihany-rodriguez.jpg",
  },
  {
    id: "helen-vega",
    name: "Helen Vega RDH",
    title: "Registered Dental Hygienist",
    description:
      "Our dental hygienist joined MiraMar Family Dental in 2023 and is known for her gentle, thorough care. Bilingual in English and Spanish, she brings strong clinical training in dental hygiene, including coronal polishing and digital radiography.",
    image: "/images/team/helen-vega.jpg",
  },
];
