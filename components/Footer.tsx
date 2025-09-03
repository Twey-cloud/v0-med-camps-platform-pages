"use client"

import { CheckCircle, Clock } from "lucide-react"
import { BRAND_COLORS, FOOTER_LINKS, SUPPORTED_COUNTRIES } from "@/lib/constants"

export function Footer() {
  return (
    <footer className={`bg-[${BRAND_COLORS.primary}] text-white py-16 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img src="/medcamps-navbar-logo.svg" alt="MedCamps" className="h-12 w-auto" />
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              The one-stop platform for pre-meds, pre-vets, and pre-dents. Comprehensive preparation for medical,
              dental, and veterinary admissions across multiple countries.
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-2 rounded-lg">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="bg-white/10 p-2 rounded-lg">
                <Clock className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Platforms</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Interview Platforms</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span>UCAT (Coming Soon)</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span>GAMSAT (Coming Soon)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">© 2024 MedCamps. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            {SUPPORTED_COUNTRIES.map((country) => (
              <span key={country.name}>
                {country.flag} {country.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
