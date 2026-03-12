export interface FinancingOption {
  id: string;
  name: string;
  description: string;
  logo: string;
  website: string;
}

export const FINANCING_OPTIONS: FinancingOption[] = [
  {
    id: "alphaeon-credit",
    name: "Alphaeon Credit",
    description: "Flexible financing for healthcare expenses.",
    logo: "/images/financing/alphaeon-credit.svg",
    website: "",
  },
  {
    id: "lending-club",
    name: "Lending Club",
    description: "Personal loans for dental care.",
    logo: "/images/financing/lending-club.svg",
    website: "",
  },
  {
    id: "care-credit",
    name: "Care Credit",
    description: "Healthcare credit card for medical expenses.",
    logo: "/images/financing/care-credit.svg",
    website: "",
  },
  {
    id: "cherry",
    name: "Cherry",
    description: "Simple installment plans.",
    logo: "/images/financing/cherry.svg",
    website: "",
  },
];
