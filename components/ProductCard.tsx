"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import type { UserState, Platform } from "@/lib/types"
import { BRAND_COLORS, PRICING } from "@/lib/constants"

interface ProductCardProps {
  platform: Platform
  userState: UserState
  subscribedProduct: string | null
  formatPrice: (gbpPrice: number) => string
  onSubscribe: (productId: string) => void
}

export function ProductCard({ platform, userState, subscribedProduct, formatPrice, onSubscribe }: ProductCardProps) {
  const Icon = platform.icon
  const isSubscribed = userState === "subscribed" && subscribedProduct === platform.id

  const renderUserActions = () => {
    if (userState === "anonymous") {
      return (
        <div className="space-y-3">
          <Button
            className={`w-full bg-[${BRAND_COLORS.secondary}] hover:bg-[${BRAND_COLORS.secondary}]/90 text-white`}
          >
            Free Demo
          </Button>
          <Button variant="outline" className="w-full border-white text-white hover:bg-white/10 bg-transparent">
            Sign Up
          </Button>
          <p className="text-center text-sm text-white/80">
            Already have an account? <button className="underline hover:text-white">Sign in</button>
          </p>
        </div>
      )
    } else if (userState === "authenticated" && subscribedProduct !== platform.id) {
      return (
        <div className="space-y-3">
          <Button
            className={`w-full bg-[${BRAND_COLORS.secondary}] hover:bg-[${BRAND_COLORS.secondary}]/90 text-white`}
          >
            Free Demo
          </Button>
          <Button
            onClick={() => onSubscribe(platform.id)}
            className={`w-full bg-white text-[${BRAND_COLORS.primary}] hover:bg-white/90 font-semibold`}
          >
            Subscribe
          </Button>
        </div>
      )
    } else if (userState === "subscribed" && subscribedProduct === platform.id) {
      return (
        <Button
          className={`w-full bg-white text-[${BRAND_COLORS.primary}] hover:bg-white/90 font-semibold flex items-center justify-center gap-2`}
        >
          Go to Platform
          <ArrowRight className="w-4 h-4" />
        </Button>
      )
    } else {
      return (
        <div className="space-y-3">
          <Button
            className={`w-full bg-[${BRAND_COLORS.secondary}] hover:bg-[${BRAND_COLORS.secondary}]/90 text-white`}
          >
            Free Demo
          </Button>
          <Button
            onClick={() => onSubscribe(platform.id)}
            className={`w-full bg-white text-[${BRAND_COLORS.primary}] hover:bg-white/90 font-semibold`}
          >
            Subscribe
          </Button>
        </div>
      )
    }
  }

  return (
    <Card
      className={`bg-[${BRAND_COLORS.primary}] text-white overflow-hidden relative group hover:scale-105 transition-transform duration-300`}
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

        {/* Pricing - hidden for subscribed users on their platform */}
        {!isSubscribed && (
          <div className="mb-6 bg-white/10 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">Monthly Access</span>
              <span className="font-bold text-lg">{formatPrice(PRICING.monthly)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Weekly Access</span>
              <span className="font-bold text-lg">{formatPrice(PRICING.weekly)}</span>
            </div>
          </div>
        )}

        {renderUserActions()}
      </div>
    </Card>
  )
}
