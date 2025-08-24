"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Send, CheckCircle, Stethoscope, Heart, Zap } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header - preserved from original */}
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
            <a href="/contact" className="opacity-100 transition-opacity duration-200">
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

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Get in Touch
            <div className="w-24 h-1 bg-[#028156] mx-auto mt-4"></div>
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto leading-relaxed">
            We're here to assist you with any inquiries about our medical education platform. Reach out to our team for
            support, partnerships, or general questions.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div>
            <Card className="bg-gray-50 p-8 shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-black mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white border-gray-300 focus:ring-[#1696c4] text-black"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white border-gray-300 focus:ring-[#1696c4] text-black"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300 focus:ring-[#1696c4] text-black"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300 focus:ring-[#1696c4] resize-none text-black"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#1696c4] hover:bg-[#1696c4]/90 text-white py-3 text-lg font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer - preserved from original */}
      <footer className="bg-[#028156] text-white px-6 py-[29px]">
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
