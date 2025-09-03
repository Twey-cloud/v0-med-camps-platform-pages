"use client"

import { memo } from "react"
import { CheckCircle, Clock } from "lucide-react"
import { BRAND_COLORS, FOOTER_LINKS, SUPPORTED_COUNTRIES } from "@/lib/constants"

export const Footer = memo(function Footer() {
  return (
    <footer className="text-white py-16 px-6" style={{ backgroundColor: BRAND_COLORS.primary }} role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img src="/medcamps-navbar-logo.svg" alt="MedCamps" className="h-12 w-auto" loading="lazy" />
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              The one-stop platform for pre-meds, pre-vets, and pre-dents. Comprehensive preparation for medical,
              dental, and veterinary admissions across multiple countries.
            </p>
            <div className="flex items-center gap-4" role="group" aria-label="Platform features">
              <div className="bg-white/10 p-2 rounded-lg" aria-label="Verified platform">
                <CheckCircle className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="bg-white/10 p-2 rounded-lg" aria-label="24/7 availability">
                <Clock className="w-5 h-5" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <nav role="navigation" aria-label="Footer navigation">
              <ul className="space-y-3 text-white/80">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="hover:text-white focus:text-white transition-colors focus:outline-none focus:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Platforms</h4>
            <ul className="space-y-3 text-white/80" role="list">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" aria-hidden="true" />
                <span>Interview Platforms</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-yellow-400" aria-hidden="true" />
                <span>UCAT (Coming Soon)</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-yellow-400" aria-hidden="true" />
                <span>GAMSAT (Coming Soon)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">© 2024 MedCamps. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-white/60" role="group" aria-label="Supported countries">
            {SUPPORTED_COUNTRIES.map((country) => (
              <span key={country.name} aria-label={`Available in ${country.name}`}>
                <span aria-hidden="true">{country.flag}</span> {country.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
})
