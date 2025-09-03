import type { Platform } from "@/lib/types"

export const INTERVIEW_PLATFORMS: Platform[] = [
  {
    id: "uk-medicine",
    title: "UK Medicine",
    description:
      "Comprehensive interview preparation for UK medical schools with expert guidance and practice scenarios.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/What-is-a-GP-scaled.jpg-3SawCtY4Ns0kjLtAtGKlraUy7mQhCX.jpeg",
    available: true,
  },
  {
    id: "uk-dentistry",
    title: "UK Dentistry",
    description:
      "Specialised interview training for UK dental schools with scenario-based practice and expert feedback.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/s960_dentist_performing_check_up_on_patient.jpg-Uaqbbi3MUzrnxLK9I0yllenfXzRcn6.jpeg",
    available: true,
  },
  {
    id: "uk-veterinary",
    title: "UK Veterinary Medicine",
    description: "Expert interview preparation for UK veterinary schools with hands-on scenario practice.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/28565-veterinary-medicine-and-bioveterinary-sciences-2021.x5f0d7d0b-MZ6Fiaa5zdpK7joSLzgSzMP82EfauS.webp",
    available: true,
  },
  {
    id: "aus-medicine",
    title: "AUS Medicine",
    description: "Comprehensive preparation for Australian medical school interviews with local expertise.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2022.03.22-231281-rpa-bone-and-soft-tissue-sarcoma-unit-prospectus-alx-dsc01563.jpg-OM8iZIroUlY6tk0gjq8AOH3BQNGRwa.jpeg",
    available: true,
  },
  {
    id: "us-medicine",
    title: "US Medicine",
    description: "Expert guidance for US medical school interviews with comprehensive scenario training.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HMM-2012-SS-029-8K9EEsDSf6N8vQqmT4RjMmBarPkLVq.jpeg",
    available: true,
  },
]

export const COMING_SOON_PLATFORMS: Platform[] = [
  {
    id: "ucat",
    title: "UCAT",
    description: "University Clinical Aptitude Test preparation with comprehensive practice materials.",
    image: "/medical-equipment-tools.png",
    available: false,
  },
  {
    id: "gamsat",
    title: "GAMSAT",
    description: "Graduate Australian Medical School Admissions Test preparation and practice.",
    image: "/chemistry-molecular-structure.png",
    available: false,
  },
]
