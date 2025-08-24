"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Heart,
  Users,
  Target,
  BookOpen,
  Award,
  Globe,
  Lightbulb,
  ArrowRight,
  Quote,
  Stethoscope,
  GraduationCap,
} from "lucide-react"

export default function AboutUsPage() {
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
            <a href="/" className="hover:opacity-90 transition-opacity">
              <img src="/medcamps-navbar-logo.svg" alt="MedCamps" className="h-16 w-auto" />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-semibold text-lg">
            <a href="#" className="text-white hover:opacity-90 transition-opacity">
              About Us
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
              Contact Us
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
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
      <section className="relative py-20 px-6" style={{ backgroundColor: "rgba(255, 165, 0, 0.02)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Democratising Medical Education</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Born from the belief that every aspiring healthcare professional deserves equal access to quality
            preparation, regardless of their background or financial circumstances.
          </p>
          <div className="flex items-center justify-center gap-4 text-primary font-semibold">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>1000+ Students Supported</span>
            </div>
            <div className="w-1 h-1 bg-primary rounded-full"></div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span>4 Countries Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <Quote className="w-12 h-12 text-primary mb-4" />
                <blockquote className="text-2xl text-gray-800 font-medium leading-relaxed mb-6">
                  "I witnessed too many brilliant minds being held back not by lack of ability, but by lack of access to
                  quality preparation resources."
                </blockquote>
                <cite className="text-lg text-primary font-semibold">— Twezher Gurdji, Founder</cite>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The journey to medical school is challenging enough without the added burden of expensive preparation
                  courses that many simply cannot afford. As someone who navigated this path, I saw firsthand how
                  financial barriers created an uneven playing field.
                </p>
                <p>
                  MedCamps was born from a simple yet powerful vision: to level the playing field by providing
                  world-class interview preparation at a fraction of traditional costs, ensuring that talent and
                  determination—not financial privilege—determine success.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <img
                  src="/twezher-founder-cropped.jpg"
                  alt="Twezher Gurdji, Founder of MedCamps"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-full shadow-lg">
                <Heart className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-6" style={{ backgroundColor: "rgba(255, 165, 0, 0.02)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by principles that put students first and accessibility at the heart of everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-white border-2 border-primary/10 hover:border-primary/30 transition-colors">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accessibility First</h3>
              <p className="text-gray-600 leading-relaxed">
                Breaking down financial barriers to ensure every aspiring healthcare professional has access to quality
                preparation, regardless of their economic background.
              </p>
            </Card>

            <Card className="p-8 text-center bg-white border-2 border-secondary/10 hover:border-secondary/30 transition-colors">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence in Education</h3>
              <p className="text-gray-600 leading-relaxed">
                Delivering world-class preparation through human-crafted mark schemes and innovative AI support,
                maintaining the highest standards of educational quality.
              </p>
            </Card>

            <Card className="p-8 text-center bg-white border-2 border-accent/10 hover:border-accent/30 transition-colors">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation & Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Pioneering new approaches to medical education preparation while measuring success through the
                achievements and dreams we help make possible.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Challenge We Address</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the real barriers facing aspiring healthcare professionals today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/medcamps-mentoring-session.jpg"
                alt="MedCamps mentoring session in progress"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expensive Preparation Costs</h3>
                  <p className="text-gray-600">
                    Traditional interview coaching can cost thousands of pounds, creating insurmountable barriers for
                    many talented students from diverse backgrounds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Limited Access to Quality Resources</h3>
                  <p className="text-gray-600">
                    Many students lack access to standardised, professional-grade preparation materials and structured
                    practice opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Inconsistent Preparation Standards</h3>
                  <p className="text-gray-600">
                    Without standardised mark schemes and structured feedback, students often practice without clear
                    direction or measurable improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 px-6" style={{ backgroundColor: "rgba(255, 165, 0, 0.02)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How MedCamps Changes Everything</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary technology meets human expertise to create an accessible, comprehensive preparation
              platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-primary/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Stethoscope className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Human-Crafted Excellence</h3>
                </div>
                <p className="text-gray-600">
                  Our mark schemes are developed by experienced medical professionals, ensuring authentic assessment
                  standards that mirror real interview scenarios.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">AI-Powered Support</h3>
                </div>
                <p className="text-gray-600">
                  Optional AI examiner provides instant, personalised feedback available 24/7, complementing human
                  expertise with accessible practice opportunities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-accent/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Affordable Access</h3>
                </div>
                <p className="text-gray-600">
                  Professional-grade preparation at a fraction of traditional costs, with unlimited practice sessions
                  and detailed performance analytics.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8">
                <img src="/interview-platform-mockup.svg" alt="MedCamps Platform Interface" className="w-full h-auto" />
              </div>
              <div className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-full shadow-lg">
                <Award className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Future */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building a future where healthcare education is accessible to all talented individuals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-600">Students Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">4</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">3</div>
              <div className="text-gray-600">Medical Fields</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">AI Support Available</div>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking Forward</h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              We're expanding our platform to include UCAT and GAMSAT preparation, continuing our mission to democratise
              access to quality medical education resources across all stages of the journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                Join Our Mission
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-3 bg-transparent"
              >
                Learn More About Our Platform
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
