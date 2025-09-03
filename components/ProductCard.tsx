"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import type { UserState, Platform } from "@/lib/types"
import { BRAND_COLORS, PRICING } from "@/lib/constants"
import { getUserActionText, getUserSecondaryText, shouldShowPricing } from "@/utils/userActions"

interface ProductCardProps {
  platform: Platform
  userState: UserState
  subscribedProduct: string | null
  formatPrice: (gbpPrice: number) => string
  onSubscribe: (productId: string) => void
}

export function ProductCard({ platform, userState, subscribedProduct, formatPrice, onSubscribe }: ProductCardProps) {
  const isSubscribed = userState === "subscribed" && subscribedProduct === platform.id
  const showPricing = shouldShowPricing(userState, isSubscribed)
  const actionText = getUserActionText(userState, isSubscribed)
  const secondaryText = getUserSecondaryText(userState)

  const renderUserActions = () => {
    if (userState === "anonymous") {
      return (
        <div className="space-y-3">
          <Button className="w-full text-white" style={{ backgroundColor: BRAND_COLORS.secondary }}>
            Free Demo
          </Button>
          <Button variant="outline" className="w-full border-white text-white hover:bg-white/10 bg-transparent">
            {actionText}
          </Button>
          {secondaryText && (
            <p className="text-center text-sm text-white/80">
              {secondaryText.split("?")[0]}?{" "}
              <button className="underline hover:text-white">{secondaryText.split("?")[1]}</button>
            </p>
          )}
        </div>
      )
    } else if (userState === "authenticated" && !isSubscribed) {
      return (
        <div className="space-y-3">
          <Button className="w-full text-white" style={{ backgroundColor: BRAND_COLORS.secondary }}>
            Free Demo
          </Button>
          <Button
            onClick={() => onSubscribe(platform.id)}
            className="w-full bg-white hover:bg-white/90 font-semibold"
            style={{ color: BRAND_COLORS.primary }}
          >
            {actionText}
          </Button>
        </div>
      )
    } else if (isSubscribed) {
      return (
        <Button
          className="w-full bg-white hover:bg-white/90 font-semibold flex items-center justify-center gap-2"
          style={{ color: BRAND_COLORS.primary }}
        >
          {actionText}
          <ArrowRight className="w-4 h-4" />
        </Button>
      )
    } else {
      return (
        <div className="space-y-3">
          <Button className="w-full text-white" style={{ backgroundColor: BRAND_COLORS.secondary }}>
            Free Demo
          </Button>
          <Button
            onClick={() => onSubscribe(platform.id)}
            className="w-full bg-white hover:bg-white/90 font-semibold"
            style={{ color: BRAND_COLORS.primary }}
          >
            Subscribe
          </Button>
        </div>
      )
    }
  }

  return (
    <Card
      className="text-white overflow-hidden relative group hover:scale-105 transition-transform duration-300"
      style={{ backgroundColor: BRAND_COLORS.primary }}
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
          alt={`${platform.title} interview preparation`}
          className="w-full h-full object-cover"
        />
        {isSubscribed && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Subscribed
          </div>
        )}
      </div>

      <div className="p-6 relative z-10">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">{platform.title}</h3>
        </div>

        <p className="mb-6 text-sm opacity-90">{platform.description}</p>

        {showPricing && (
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
