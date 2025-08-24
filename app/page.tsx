"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Users,
  Heart,
  Stethoscope,
  Zap,
  MapPin,
  Clock,
  Globe,
  TrendingUp,
  CheckCircle,
  Upload,
  Plus,
  Minus,
} from "lucide-react"
import { useState } from "react"

export default function WorkWithUsPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const jobCategories = ["All", "Teaching", "Content", "Technology", "Operations"]

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Medical Education Specialist",
      category: "Teaching",
      location: "Remote (UK)",
      type: "Full-time",
      description:
        "Lead the development of our medical interview preparation content and mentor aspiring healthcare professionals.",
      requirements: ["Medical degree", "5+ years teaching experience", "Interview panel experience"],
    },
    {
      id: 2,
      title: "Content Creator - Veterinary Medicine",
      category: "Content",
      location: "London, UK",
      type: "Part-time",
      description:
        "Create engaging educational content for veterinary medicine applicants across multiple assessment formats.",
      requirements: ["Veterinary degree", "Content creation experience", "Strong communication skills"],
    },
    {
      id: 3,
      title: "Full-Stack Developer",
      category: "Technology",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain our cutting-edge interview platform using modern web technologies.",
      requirements: ["React/Next.js expertise", "Node.js experience", "Healthcare tech interest"],
    },
    {
      id: 4,
      title: "Student Success Coordinator",
      category: "Operations",
      location: "Manchester, UK",
      type: "Full-time",
      description: "Support students throughout their preparation journey and ensure exceptional user experience.",
      requirements: ["Customer success experience", "Healthcare background preferred", "Excellent communication"],
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Meaningful Impact",
      description: "Help shape the future of healthcare by supporting the next generation of medical professionals.",
    },
    {
      icon: TrendingUp,
      title: "Professional Growth",
      description: "Continuous learning opportunities with conference attendance and professional development budget.",
    },
    {
      icon: Globe,
      title: "Flexible Working",
      description: "Remote-first culture with flexible hours and work-life balance as core values.",
    },
    {
      icon: Users,
      title: "Collaborative Team",
      description: "Work alongside passionate educators, healthcare professionals, and innovative technologists.",
    },
  ]

  const faqs = [
    {
      question: "What is the application process like?",
      answer:
        "Our process typically involves an initial application review, followed by a video interview with the hiring manager, and a final panel interview with team members. We aim to complete the process within 2-3 weeks.",
    },
    {
      question: "Do you offer remote work opportunities?",
      answer:
        "Yes! We're a remote-first company with team members across the UK, Australia, and North America. We also have office spaces in London and Manchester for those who prefer hybrid working.",
    },
    {
      question: "What professional development opportunities are available?",
      answer:
        "We provide a £2,000 annual professional development budget, conference attendance, internal mentorship programs, and opportunities to contribute to medical education research.",
    },
    {
      question: "What benefits do you offer?",
      answer:
        "We offer competitive salaries, comprehensive health insurance, 25 days holiday plus bank holidays, pension contributions, flexible working arrangements, and wellness programs.",
    },
  ]

  const filteredJobs =
    selectedCategory === "All" ? jobOpenings : jobOpenings.filter((job) => job.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Same as main page */}
      <header
        className="bg-primary text-primary-foreground px-6 relative py-5"
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
            <a href="/work-with-us" className="opacity-100">
              Work with us
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-[29px] font-semibold text-base">
              Sign in
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('/professional-interview-meeting.png')`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Join Our Mission to Inspire Future Healthcare Leaders
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            At MedCamps, we're building the future of medical education. Join our passionate team of educators,
            healthcare professionals, and innovators who are transforming how students prepare for their healthcare
            careers.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
              Explore Opportunities
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg bg-transparent">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-card-foreground mb-6">Why Work With MedCamps?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're more than just an education platform – we're a community dedicated to empowering the next generation
              of healthcare professionals. Our team combines expertise, innovation, and genuine care for student
              success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Current Opportunities</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our growing team and make a direct impact on thousands of aspiring healthcare professionals.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {jobCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="px-4 py-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {job.category}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4">{job.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-2">Key Requirements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Apply Now
                </Button>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No positions available in this category at the moment.</p>
              <p className="text-muted-foreground">Check back soon or apply speculatively below!</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-card-foreground mb-6">Ready to Apply?</h2>
            <p className="text-xl text-muted-foreground">
              Don't see the perfect role? We're always interested in hearing from talented individuals who share our
              mission.
            </p>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Position of Interest</label>
                  <select className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Select a position</option>
                    {jobOpenings.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                    <option value="speculative">Speculative Application</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Location Preference</label>
                  <select className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Select location</option>
                    <option value="remote">Remote</option>
                    <option value="london">London, UK</option>
                    <option value="manchester">Manchester, UK</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Cover Letter *</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us why you're interested in joining MedCamps and how you can contribute to our mission..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Resume/CV *</label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">Drag and drop your resume here, or click to browse</p>
                  <Button variant="outline" type="button">
                    Choose File
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Submit Application
                </Button>
                <Button type="button" variant="outline" size="lg">
                  Save as Draft
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Get answers to common questions about working at MedCamps.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <Minus className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Same as main page */}
      <footer className="bg-primary text-primary-foreground py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo and Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <img src="/medcamps-navbar-logo.svg" alt="MedCamps" className="h-12 w-auto" />
              </div>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                The one-stop platform for pre-meds, pre-vets, and pre-dents. Comprehensive preparation for medical,
                dental, and veterinary admissions across multiple countries.
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-primary-foreground/10 p-2 rounded-lg">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div className="bg-primary-foreground/10 p-2 rounded-lg">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="bg-primary-foreground/10 p-2 rounded-lg">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3 text-primary-foreground/80">
                <li>
                  <a href="/about" className="hover:text-primary-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-primary-foreground transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/work-with-us" className="hover:text-primary-foreground transition-colors">
                    Work with us
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-primary-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Platforms */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Our Platforms</h4>
              <ul className="space-y-3 text-primary-foreground/80">
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
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">© 2024 MedCamps. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
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
