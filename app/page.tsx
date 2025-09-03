"use client"

import { Card } from "@/components/ui/card"
import { Lock } from "lucide-react"
import { useCurrency } from "@/hooks/useCurrency"
import { useUserState } from "@/hooks/useUserState"
import { BRAND_COLORS } from "@/lib/constants"
import { INTERVIEW_PLATFORMS, COMING_SOON_PLATFORMS } from "@/data/platforms"
import { Header } from "@/components/Header"
import { CurrencySelector } from "@/components/CurrencySelector"
import { ProductCard } from "@/components/ProductCard"
import { UserStateDemo } from "@/components/UserStateDemo"
import { Footer } from "@/components/Footer"

export default function MedCampsProductHub() {
  const { selectedCurrency, setSelectedCurrency, convertPrice, availableCurrencies } = useCurrency()
  const { userState, subscribedProduct, signIn, signOut, subscribe, setUserState, setSubscribedProduct } =
    useUserState()

  const handleStateChange = (state: typeof userState, product?: string | null) => {
    setUserState(state)
    setSubscribedProduct(product || null)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header userState={userState} onSignIn={signIn} onSignOut={signOut} />

      <section className="px-6 py-12" style={{ backgroundColor: BRAND_COLORS.background }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <img src="/medcamps-hero-logo.png" alt="MedCamps" className="h-20 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Product Hub</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your path to success. Access our comprehensive preparation platforms for medical, dental, and
              veterinary admissions.
            </p>
          </div>

          <CurrencySelector
            selectedCurrency={selectedCurrency.code}
            onCurrencyChange={(code) => {
              const currency = availableCurrencies.find((c) => c.code === code)
              if (currency) setSelectedCurrency(currency)
            }}
          />
        </div>
      </section>

      <section className="px-6 bg-white py-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interview Platforms</h2>
            <p className="text-lg text-gray-600">
              Developed alongside professionals who have walked these career paths, learn from experts and smash your
              interviews. At a fraction of the cost of a 1-to-1 tutor, you can use our platforms to access expert-made
              videos, textbook notes, practice questions, and mock interviews, powered by an AI examiner - allowing you
              to practice for your interviews on your own!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {INTERVIEW_PLATFORMS.map((platform) => (
              <ProductCard
                key={platform.id}
                platform={platform}
                userState={userState}
                subscribedProduct={subscribedProduct}
                formatPrice={convertPrice}
                onSubscribe={subscribe}
              />
            ))}
          </div>

          {/* Coming Soon Platforms - kept inline as they're simpler and less reusable */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h3>
            <p className="text-gray-600">Additional platforms currently in development</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {COMING_SOON_PLATFORMS.map((platform) => (
              <Card key={platform.id} className="bg-gray-100 overflow-hidden relative">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={platform.image || "/placeholder.svg"}
                    alt={`${platform.title} preparation`}
                    className="w-full h-full object-cover opacity-30 grayscale"
                  />
                  <div className="absolute inset-0 bg-gray-800/60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Lock className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">{platform.title}</h3>
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

      <UserStateDemo userState={userState} subscribedProduct={subscribedProduct} onStateChange={handleStateChange} />

      <Footer />
    </div>
  )
}
