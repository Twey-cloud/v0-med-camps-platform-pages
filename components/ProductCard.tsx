"use client"

import { memo, useCallback, useMemo } from "react"
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

export const ProductCard = memo(function ProductCard({
  platform,
  userState,
  subscribedProduct,
  formatPrice,
  onSubscribe,
}: ProductCardProps) {
  const isSubscribed = useMemo(
    () => userState === "subscribed" && subscribedProduct === platform.id,
    [userState, subscribedProduct, platform.id],
  )

  const showPricing = useMemo(() => shouldShowPricing(userState, isSubscribed), [userState, isSubscribed])

  const actionText = useMemo(() => getUserActionText(userState, isSubscribed), [userState, isSubscribed])

  const secondaryText = useMemo(() => getUserSecondaryText(userState), [userState])

  const handleSubscribe = useCallback(() => {
    onSubscribe(platform.id)
  }, [onSubscribe, platform.id])

  const handleSignIn = useCallback(() => {
    // This would typically navigate to sign in page
    console.log("[v0] Navigate to sign in")
  }, [])

  const renderUserActions = useCallback(() => {
    if (userState === "anonymous") {
      return (
        <div className="space-y-3">
          <Button
            className="w-full text-white focus:ring-2 focus:ring-white focus:ring-offset-2"
            style={{ backgroundColor: BRAND_COLORS.secondary }}
            aria-label={`Try free demo for ${platform.title}`}
          >
            Free Demo
          </Button>
          <Button
            variant="outline"
            className="w-full border-white text-white hover:bg-white/10 bg-transparent focus:ring-2 focus:ring-white focus:ring-offset-2"
            onClick={handleSignIn}
            aria-label="Sign up for an account"
          >
            {actionText}
          </Button>
          {secondaryText && (
            <p className="text-center text-sm text-white/80">
              {secondaryText.split("?")[0]}?{" "}
              <button
                className="underline hover:text-white focus:text-white focus:outline-none"
                onClick={handleSignIn}
                aria-label="Sign in to existing account"
              >
                {secondaryText.split("?")[1]}
              </button>
            </p>
          )}
        </div>
      )
    } else if (userState === "authenticated" && !isSubscribed) {
      return (
        <div className="space-y-3">
          <Button
            className="w-full text-white focus:ring-2 focus:ring-white focus:ring-offset-2"
            style={{ backgroundColor: BRAND_COLORS.secondary }}
            aria-label={`Try free demo for ${platform.title}`}
          >
            Free Demo
          </Button>
          <Button
            onClick={handleSubscribe}
            className="w-full bg-white hover:bg-white/90 font-semibold focus:ring-2 focus:ring-offset-2"
            style={{ color: BRAND_COLORS.primary }}
            aria-label={`Subscribe to ${platform.title} platform`}
          >
            {actionText}
          </Button>
        </div>
      )
    } else if (isSubscribed) {
      return (
        <Button
          className="w-full bg-white hover:bg-white/90 font-semibold flex items-center justify-center gap-2 focus:ring-2 focus:ring-offset-2"
          style={{ color: BRAND_COLORS.primary }}
          aria-label={`Access your ${platform.title} platform`}
        >
          {actionText}
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Button>
      )
    } else {
      return (
        <div className="space-y-3">
          <Button
            className="w-full text-white focus:ring-2 focus:ring-white focus:ring-offset-2"
            style={{ backgroundColor: BRAND_COLORS.secondary }}
            aria-label={`Try free demo for ${platform.title}`}
          >
            Free Demo
          </Button>
          <Button
            onClick={handleSubscribe}
            className="w-full bg-white hover:bg-white/90 font-semibold focus:ring-2 focus:ring-offset-2"
            style={{ color: BRAND_COLORS.primary }}
            aria-label={`Subscribe to ${platform.title} platform`}
          >
            Subscribe
          </Button>
        </div>
      )
    }
  }, [userState, isSubscribed, actionText, secondaryText, platform.title, handleSubscribe, handleSignIn])

  return (
    <Card
      className="text-white overflow-hidden relative group hover:scale-105 transition-transform duration-300 focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2"
      style={{ backgroundColor: BRAND_COLORS.primary }}
      role="article"
      aria-labelledby={`platform-${platform.id}-title`}
    >
      <div
        className="absolute inset-0 opacity-[0.49]"
        style={{
          backgroundImage: `url('/medical-wallpaper.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
        aria-hidden="true"
      />

      <div className="h-48 relative overflow-hidden">
        <img
          src={platform.image || "/placeholder.svg"}
          alt={`${platform.title} interview preparation platform`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {isSubscribed && (
          <div
            className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
            role="status"
            aria-label="You are subscribed to this platform"
          >
            Subscribed
          </div>
        )}
      </div>

      <div className="p-6 relative z-10">
        <div className="mb-4">
          <h3 id={`platform-${platform.id}-title`} className="text-xl font-bold mb-2">
            {platform.title}
          </h3>
        </div>

        <p className="mb-6 text-sm opacity-90">{platform.description}</p>

        {showPricing && (
          <div className="mb-6 bg-white/10 rounded-lg p-4" role="region" aria-label="Pricing information">
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
})
