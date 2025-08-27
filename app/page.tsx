"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Clock, Stethoscope, Heart, Zap, Lock, ChevronDown, Globe, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function MedCampsProductHub() {
  const [selectedCurrency, setSelectedCurrency] = useState("GBP")
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false)
  const [userState, setUserState] = useState<"anonymous" | "authenticated" | "subscribed">("anonymous")
  const [subscribedProduct, setSubscribedProduct] = useState<string | null>(null)

  const currencies = [
    { code: "GBP", symbol: "£", name: "British Pound", flag: "🇬🇧", rate: 1 },
    { code: "USD", symbol: "$", name: "US Dollar", flag: "🇺🇸", rate: 1.27 },
    { code: "AUD", symbol: "A$", name: "Australian Dollar", flag: "🇦🇺", rate: 1.91 },
    { code: "EUR", symbol: "€", name: "Euro", flag: "🇪🇺", rate: 1.18 },
  ]

  const currentCurrency = currencies.find((c) => c.code === selectedCurrency) || currencies[0]

  const formatPrice = (gbpPrice: number) => {
    const convertedPrice = gbpPrice * currentCurrency.rate
    return `${currentCurrency.symbol}${convertedPrice.toFixed(2)}`
  }

  const interviewPlatforms = [
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
  ]

  const comingSoonPlatforms = [
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
  ]

  const renderUserActions = (productId: string) => {
    if (userState === "anonymous") {
      return (
        <div className="space-y-3">
          <Button className="w-full bg-[#1696c4] hover:bg-[#1696c4]/90 text-white">Free Demo</Button>
          <Button variant="outline" className="w-full border-white text-white hover:bg-white/10 bg-transparent">
            Sign Up
          </Button>
          <p className="text-center text-sm text-white/80">
            Already have an account?{" "}
            <button onClick={() => setUserState("authenticated")} className="underline hover:text-white">
              Sign in
            </button>
          </p>
        </div>
      )
    } else if (userState === "authenticated" && subscribedProduct !== productId) {
      return (
        <div className="space-y-3">
          <Button className="w-full bg-[#1696c4] hover:bg-[#1696c4]/90 text-white">Free Demo</Button>
          <Button
            onClick={() => {
              setUserState("subscribed")
              setSubscribedProduct(productId)
            }}
            className="w-full bg-white text-[#028156] hover:bg-white/90 font-semibold"
          >
            Subscribe
          </Button>
        </div>
      )
    } else if (userState === "subscribed" && subscribedProduct === productId) {
      return (
        <Button className="w-full bg-white text-[#028156] hover:bg-white/90 font-semibold flex items-center justify-center gap-2">
          Go to Platform
          <ArrowRight className="w-4 h-4" />
        </Button>
      )
    } else {
      return (
        <div className="space-y-3">
          <Button className="w-full bg-[#1696c4] hover:bg-[#1696c4]/90 text-white">Free Demo</Button>
          <Button
            onClick={() => {
              setUserState("subscribed")
              setSubscribedProduct(productId)
            }}
            className="w-full bg-white text-[#028156] hover:bg-white/90 font-semibold"
          >
            Subscribe
          </Button>
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header - keeping existing */}
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
            {userState === "anonymous" ? (
              <Button
                onClick={() => setUserState("authenticated")}
                className="bg-[#1696c4] hover:bg-[#1696c4]/90 text-white px-[29px] font-semibold text-base"
              >
                Sign in
              </Button>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-sm opacity-80">Welcome back!</span>
                <Button
                  onClick={() => {
                    setUserState("anonymous")
                    setSubscribedProduct(null)
                  }}
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Sign out
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      <section className="px-6 py-12" style={{ backgroundColor: "rgba(255, 165, 0, 0.02)" }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <img src="/medcamps-hero-logo.png" alt="MedCamps" className="h-20 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Product Hub</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your path to success. Access our comprehensive preparation platforms for medical, dental, and
              veterinary admissions.
            </p>
          </div>

          {/* Currency Selector */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <button
                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                className="bg-white border border-gray-200 rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm"
              >
                <Globe className="w-4 h-4 text-gray-500" />
                <span className="text-lg">{currentCurrency.flag}</span>
                <span className="text-sm font-medium">{currentCurrency.code}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
              {showCurrencyDropdown && (
                <div className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px] z-20">
                  {currencies.map((currency) => (
                    <button
                      key={currency.code}
                      onClick={() => {
                        setSelectedCurrency(currency.code)
                        setShowCurrencyDropdown(false)
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3 text-gray-800"
                    >
                      <span className="text-lg">{currency.flag}</span>
                      <div>
                        <div className="text-sm font-medium">{currency.name}</div>
                        <div className="text-xs text-gray-500">{currency.code}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 bg-white py-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interview Platforms</h2>
            <p className="text-lg text-gray-600">
              Developed alongside professionals who have walked these career paths, learn from experts and smash your interviews. 

At a fraction of the cost of a 1-to-1 tutor, you can use our platforms to access expert-made videos, textbook notes, practice questions, and mock interviews, powered by an AI examiner - allowing you to practice for your interviews on your own!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {interviewPlatforms.map((platform) => {
              const Icon = platform.icon
              const isSubscribed = userState === "subscribed" && subscribedProduct === platform.id

              return (
                <Card
                  key={platform.id}
                  className="bg-[#028156] text-white overflow-hidden relative group hover:scale-105 transition-transform duration-300"
                >
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
                      src={platform.image || "/placeholder.svg"}
                      alt={`${platform.name} interview preparation`}
                      className="w-full h-full object-cover"
                    />
                    {isSubscribed && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Subscribed
                      </div>
                    )}
                  </div>

                  <div className="p-6 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6" />
                        <div>
                          <h3 className="text-xl font-bold">{platform.name}</h3>
                          <div className="flex items-center gap-2 text-sm opacity-80">
                            <span>{platform.flag}</span>
                            <span>{platform.country}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="mb-6 text-sm opacity-90">{platform.description}</p>

                    {/* Pricing */}
                    <div className="mb-6 bg-white/10 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Monthly Access</span>
                        <span className="font-bold text-lg">{formatPrice(34.99)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Weekly Access</span>
                        <span className="font-bold text-lg">{formatPrice(19.99)}</span>
                      </div>
                    </div>

                    {renderUserActions(platform.id)}
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Coming Soon Platforms */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h3>
            <p className="text-gray-600">Additional platforms currently in development</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {comingSoonPlatforms.map((platform) => (
              <Card key={platform.id} className="bg-gray-100 overflow-hidden relative">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={platform.image || "/placeholder.svg"}
                    alt={`${platform.name} preparation`}
                    className="w-full h-full object-cover opacity-30 grayscale"
                  />
                  <div className="absolute inset-0 bg-gray-800/60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Lock className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                      <p className="text-sm opacity-80">Coming Soon!</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{platform.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Demo User States</h3>
          <p className="text-gray-600 mb-8">Experience how the interface adapts based on your account status</p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              onClick={() => {
                setUserState("anonymous")
                setSubscribedProduct(null)
              }}
              variant={userState === "anonymous" ? "default" : "outline"}
              className="min-w-[140px]"
            >
              Anonymous User
            </Button>
            <Button
              onClick={() => {
                setUserState("authenticated")
                setSubscribedProduct(null)
              }}
              variant={userState === "authenticated" && !subscribedProduct ? "default" : "outline"}
              className="min-w-[140px]"
            >
              Authenticated
            </Button>
            <Button
              onClick={() => {
                setUserState("subscribed")
                setSubscribedProduct("uk-medicine")
              }}
              variant={userState === "subscribed" ? "default" : "outline"}
              className="min-w-[140px]"
            >
              Subscribed User
            </Button>
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg border">
            <p className="text-sm text-gray-600">
              Current state:{" "}
              <span className="font-semibold text-gray-900">
                {userState === "anonymous" && "Anonymous visitor"}
                {userState === "authenticated" && !subscribedProduct && "Authenticated, not subscribed"}
                {userState === "subscribed" && subscribedProduct && `Subscribed to ${subscribedProduct}`}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer - keeping existing */}
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
              <span>🇬🇧 UK</span>
              <span>🇦🇺 Australia</span>
              <span>🇺🇸 United States</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
