"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Users,
  Brain,
  Target,
  PoundSterling,
  CheckCircle,
  Clock,
  Stethoscope,
  Heart,
  Zap,
  Lock,
  ChevronDown,
} from "lucide-react"
import { useState } from "react"

export default function MedCampsLanding() {
  const [selectedCountry, setSelectedCountry] = useState("UK")
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)

  const countries = [
    { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
    { code: "AU", name: "Australia", flag: "🇦🇺" },
    { code: "US", name: "United States", flag: "🇺🇸" },
    { code: "CA", name: "Canada", flag: "🇨🇦" },
  ]

  const fields = [
    {
      id: "medicine",
      name: "Medicine",
      icon: Stethoscope,
      description: "Comprehensive interview preparation for medical school applications",
      color: "bg-primary",
    },
    {
      id: "dentistry",
      name: "Dentistry",
      icon: Heart,
      description: "Specialised interview training for dental school admissions",
      color: "bg-secondary",
    },
    {
      id: "veterinary",
      name: "Veterinary Medicine",
      icon: Zap,
      description: "Expert preparation for veterinary medicine interviews",
      color: "bg-accent",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header
        className="bg-[#028156] text-white px-6 relative py-5"
        style={{
          backgroundImage: `url('/medical-wallpaper.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          <div className="flex items-center">
            <a href="/" className="hover:opacity-80 transition-opacity duration-200">
              <img src="/medcamps-navbar-logo.svg" alt="MedCamps" className="h-16 w-auto" />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-semibold text-lg">
            <a href="/about" className="opacity-60 hover:opacity-100 transition-opacity duration-200">
              About Us
            </a>
            <a href="/contact" className="opacity-60 hover:opacity-100 transition-opacity duration-200">
              Contact Us
            </a>
            <a href="/work-with-us" className="opacity-60 hover:opacity-100 transition-opacity duration-200">
              Work with us
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="bg-[#1696c4] hover:bg-[#1696c4]/90 text-white px-[29px] font-semibold text-base">
              Sign in
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-96 bg-gradient-to-r from-blue-100 to-green-100"
        style={{ backgroundColor: "rgba(255, 165, 0, 0.02)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: `url('/operating-room-doctors-green.png')`,
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-full opacity-100 shadow-xl">
          <Card className="bg-white/95 backdrop-blur-sm p-8 text-center max-w-md mx-4 shadow-lg py-[46px] px-[34px]">
            <div className="h-16 mx-auto mb-[-11px] w-[265px]">
              <img src="/medcamps-logo-text.svg" alt="MedCamps Logo" className="w-full h-full object-contain" />
            </div>
            <p className="text-gray-800 text-lg">The one-stop platform for pre-meds, pre-vets, and pre-dents!</p>
          </Card>
        </div>
      </section>

      {/* Interview Products Section */}
      <section className="py-16 px-6" style={{ backgroundColor: "rgba(255, 165, 0, 0.02)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Platforms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive preparation for medical, dental, and veterinary admissions across multiple countries.
              <br />
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Interview Platform Card */}
            <Card className="bg-[#028156] text-white overflow-hidden relative group hover:scale-105 transition-transform duration-300">
              <div
                className="absolute inset-0 opacity-[0.49]"
                style={{
                  backgroundImage: `url('/medical-wallpaper.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay",
                }}
              />
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/medical-school-interview-scene.png"
                  alt="Medical school interview with student and interviewer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Interview Platform</h3>
                  <div className="relative">
                    <button
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                      className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2 hover:bg-white/30 transition-colors"
                    >
                      <span className="text-lg">{countries.find((c) => c.code === selectedCountry)?.flag}</span>
                      <span className="text-sm font-semibold">{selectedCountry}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {showCountryDropdown && (
                      <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[160px] z-20">
                        {countries.map((country) => (
                          <button
                            key={country.code}
                            onClick={() => {
                              setSelectedCountry(country.code)
                              setShowCountryDropdown(false)
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3 text-gray-800"
                          >
                            <span className="text-lg">{country.flag}</span>
                            <span className="text-sm">{country.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Stethoscope className="w-4 h-4" />
                    <span>Medicine</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1s1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z" />
                    </svg>
                    <span>Dentistry</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                    <span>Veterinary Medicine</span>
                  </div>
                </div>

                <p className="mb-6 text-sm">
                  Comprehensive interview preparation tailored for{" "}
                  {countries.find((c) => c.code === selectedCountry)?.name} medical education systems.
                </p>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-[#1696c4] hover:bg-[#1696c4]/90 text-white">Try Now</Button>
                  <Button className="flex-1 bg-white/20 hover:bg-white/30 text-white border border-white/20">
                    Sign Up
                  </Button>
                </div>
              </div>
            </Card>

            {/* UCAT Card */}
            <Card className="bg-[#028156] text-white overflow-hidden relative group">
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/smiling-medical-student.png"
                  alt="UCAT preparation"
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gray-800/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Lock className="w-12 h-12 mx-auto mb-4 text-white" />
                    <h3 className="text-2xl font-bold mb-2">UCAT Coming soon!</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 relative z-10 opacity-30">
                <p className="mb-6 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam nisl id.
                </p>
                <div className="flex gap-3">
                  <Button disabled className="flex-1 bg-gray-600 text-gray-400 cursor-not-allowed">
                    Work with us
                  </Button>
                  <Button disabled className="flex-1 bg-gray-600 text-gray-400 cursor-not-allowed">
                    Sign in
                  </Button>
                </div>
              </div>
            </Card>

            {/* GAMSAT Card */}
            <Card className="bg-[#028156] text-white overflow-hidden relative group">
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/chemistry-molecular-structure.png"
                  alt="GAMSAT preparation"
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gray-800/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Lock className="w-12 h-12 mx-auto mb-4 text-white" />
                    <h3 className="text-2xl font-bold mb-2">GAMSAT Coming soon!</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 relative z-10 opacity-30">
                <p className="mb-6 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam nisl id.
                </p>
                <div className="flex gap-3">
                  <Button disabled className="flex-1 bg-gray-600 text-gray-400 cursor-not-allowed">
                    Work with us
                  </Button>
                  <Button disabled className="flex-1 bg-gray-600 text-gray-400 cursor-not-allowed">
                    Sign in
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Interview Platform Section */}
      <section className="py-20 px-6 bg-white" style={{ backgroundColor: "rgba(255, 165, 0, 0.01)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The MedCamps Interview Platform</h2>
            <p className="text-lg text-primary font-semibold mb-4">Used by &gt; 1000 applicants last year</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our revolutionary checklist-styled MMI practice with standardised mark schemes made and
              directed by humans, featuring optional AI examiner support for comprehensive solo practice.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - SVG Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8">
                <img
                  src="/interview-platform-mockup.svg"
                  alt="MedCamps Interview Platform Interface"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                <Brain className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground p-3 rounded-full shadow-lg">
                <Target className="w-6 h-6" />
              </div>
            </div>

            {/* Right side - Features */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Human-Crafted Mark Schemes</h3>
                    <p className="text-gray-600">
                      Our standardised marking criteria are developed and refined by experienced medical professionals,
                      ensuring authentic assessment standards that mirror real interview scenarios.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg flex-shrink-0">
                    <Brain className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Optional AI Examiner</h3>
                    <p className="text-gray-600">
                      Practise with our intelligent AI examiner that provides instant feedback and personalised
                      guidance, available 24/7 to support your preparation journey.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Solo Practice Excellence</h3>
                    <p className="text-gray-600">
                      Master your interview skills independently with our structured practice system, designed for
                      comprehensive self-assessment and continuous improvement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <PoundSterling className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Save Hundreds on Tutors</h3>
                    <p className="text-gray-600">
                      Get professional-grade interview preparation at a fraction of the cost of private tutoring, with
                      unlimited practice sessions and detailed performance analytics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="bg-gray-100 rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Why Choose MedCamps Interview Platform?
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Step-by-step marking criteria for precise feedback
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Structured response development framework
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Progress tracking per assessment criteria
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Unlimited practice with instant results
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg">
                  Demo
                </Button>
                <Button className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground py-3 text-lg">
                  Ask a Question
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Video Section */}
      <section className="py-20 px-6 bg-gray-50" style={{ backgroundColor: "rgba(255, 165, 0, 0.02)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Hear from Riley, a previous MedCamps user who successfully secured multiple medical school offers after
            using our interview platform.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden shadow-md">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/QrXAvsbPu4s?si=JjqiHrZ8HrYfapNd"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Riley's Success Story</h3>
              <p className="text-gray-600">
                "After using MedCamps' interview platform, I felt confident and prepared for my medical school
                interviews. The structured practice and detailed feedback helped me secure offers from multiple
                universities."
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Now studying Medicine</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branded Footer */}
      <footer className="bg-[#028156] text-white py-16 px-6">
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
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div className="bg-white/10 p-2 rounded-lg">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="bg-white/10 p-2 rounded-lg">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3 text-white/80">
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/work-with-us" className="hover:text-white transition-colors">
                    Work with us
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Platforms */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Our Platforms</h4>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Interview Platform</span>
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
              <span>🇬🇧 UK</span>
              <span>🇦🇺 Australia</span>
              <span>🇺🇸 United States</span>
              <span>🇨🇦 Canada</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
