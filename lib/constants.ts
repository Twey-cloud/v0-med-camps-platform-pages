import { Stethoscope, Heart, Zap } from "lucide-react"
import type { Currency, Platform, ComingSoonPlatform, PricingTier } from "./types"

// Pricing configuration
export const PRICING: PricingTier = {
  monthly: 34.99,
  weekly: 19.99,
} as const

// Brand colors
export const BRAND_COLORS = {
  primary: "#028156",
  secondary: "#1696c4",
  background: "rgba(255, 165, 0, 0.02)",
} as const

// Currency exchange rates (base: GBP)
export const CURRENCIES: Currency[] = [
  { code: "GBP", symbol: "£", name: "British Pound", flag: "🇬🇧", rate: 1 },
  { code: "USD", symbol: "$", name: "US Dollar", flag: "🇺🇸", rate: 1.27 },
  { code: "AUD", symbol: "A$", name: "Australian Dollar", flag: "🇦🇺", rate: 1.91 },
  { code: "EUR", symbol: "€", name: "Euro", flag: "🇪🇺", rate: 1.18 },
] as const

// Interview platform configurations
export const INTERVIEW_PLATFORMS: Platform[] = [
  {
    id: "uk-medicine",
    name: "UK Medicine",
    country: "United Kingdom",
    flag: "🇬🇧",
    icon: Stethoscope,
    description: "Comprehensive interview preparation for UK medical school applications",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/What-is-a-GP-scaled.jpg-3SawCtY4Ns0kjLtAtGKlraUy7mQhCX.jpeg",
    available: true,
  },
  {
    id: "uk-dentistry",
    name: "UK Dentistry",
    country: "United Kingdom",
    flag: "🇬🇧",
    icon: Heart,
    description: "Specialised interview training for UK dental school admissions",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/s960_dentist_performing_check_up_on_patient.jpg-Uaqbbi3MUzrnxLK9I0yllenfXzRcn6.jpeg",
    available: true,
  },
  {
    id: "uk-veterinary",
    name: "UK Veterinary Medicine",
    country: "United Kingdom",
    flag: "🇬🇧",
    icon: Zap,
    description: "Expert preparation for UK veterinary medicine interviews",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/28565-veterinary-medicine-and-bioveterinary-sciences-2021.x5f0d7d0b-MZ6Fiaa5zdpK7joSLzgSzMP82EfauS.webp",
    available: true,
  },
  {
    id: "aus-medicine",
    name: "AUS Medicine",
    country: "Australia",
    flag: "🇦🇺",
    icon: Stethoscope,
    description: "Tailored interview preparation for Australian medical schools",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2022.03.22-231281-rpa-bone-and-soft-tissue-sarcoma-unit-prospectus-alx-dsc01563.jpg-OM8iZIroUlY6tk0gjq8AOH3BQNGRwa.jpeg",
    available: true,
  },
  {
    id: "us-medicine",
    name: "US Medicine",
    country: "United States",
    flag: "🇺🇸",
    icon: Stethoscope,
    description: "Comprehensive preparation for US medical school interviews",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HMM-2012-SS-029-8K9EEsDSf6N8vQqmT4RjMmBarPkLVq.jpeg",
    available: true,
  },
] as const

// Coming soon platform configurations
export const COMING_SOON_PLATFORMS: ComingSoonPlatform[] = [
  {
    id: "ucat",
    name: "UCAT",
    description: "University Clinical Aptitude Test preparation platform",
    image: "/smiling-medical-student.png",
  },
  {
    id: "gamsat",
    name: "GAMSAT",
    description: "Graduate Medical School Admissions Test preparation",
    image: "/chemistry-molecular-structure.png",
  },
] as const

// Navigation links
export const NAV_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/work-with-us", label: "Work with us" },
] as const

// Footer links
export const FOOTER_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/work-with-us", label: "Work with us" },
  { href: "/privacy", label: "Privacy Policy" },
] as const

// Supported countries
export const SUPPORTED_COUNTRIES = [
  { flag: "🇬🇧", name: "UK" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇺🇸", name: "United States" },
] as const
