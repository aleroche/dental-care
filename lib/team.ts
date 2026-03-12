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
      "Dr. Beovides is dedicated to providing exceptional dental care with a compassionate approach.",
    image: "/images/team/dr-keyttia-beovides.jpg",
  },
  {
    id: "dr-tihany-rodriguez",
    name: "Dr Tihany Rodriguez",
    title: "Dentist",
    description:
      "Dr. Rodriguez specializes in creating beautiful, healthy smiles for the whole family.",
    image: "/images/team/dr-tihany-rodriguez.jpg",
  },
  {
    id: "helen-vega",
    name: "Helen Vega RDH",
    title: "Registered Dental Hygienist",
    description:
      "Helen is passionate about educating patients on proper oral hygiene.",
    image: "/images/team/helen-vega.jpg",
  },
];
