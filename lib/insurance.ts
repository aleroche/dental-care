export interface InsuranceProvider {
  id: string;
  name: string;
  logo: string;
}

export const INSURANCE_PROVIDERS: InsuranceProvider[] = [
  { id: "delta-dental", name: "Delta Dental", logo: "/images/insurance/delta-dental.svg" },
  { id: "aetna", name: "Aetna", logo: "/images/insurance/aetna.svg" },
  { id: "cigna", name: "Cigna", logo: "/images/insurance/cigna.svg" },
  { id: "humana", name: "Humana", logo: "/images/insurance/humana.svg" },
  { id: "metlife", name: "MetLife", logo: "/images/insurance/metlife.svg" },
  { id: "guardian", name: "Guardian", logo: "/images/insurance/guardian.svg" },
];
