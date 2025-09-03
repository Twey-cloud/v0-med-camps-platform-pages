"use client"

import { memo, useCallback } from "react"
import { Button } from "@/components/ui/button"
import type { UserState } from "@/lib/types"

interface UserStateDemoProps {
  userState: UserState
  subscribedProduct: string | null
  onStateChange: (state: UserState, product?: string | null) => void
}

export const UserStateDemo = memo(function UserStateDemo({
  userState,
  subscribedProduct,
  onStateChange,
}: UserStateDemoProps) {
  const handleAnonymousClick = useCallback(() => {
    onStateChange("anonymous", null)
  }, [onStateChange])

  const handleAuthenticatedClick = useCallback(() => {
    onStateChange("authenticated", null)
  }, [onStateChange])

  const handleSubscribedClick = useCallback(() => {
    onStateChange("subscribed", "uk-medicine")
  }, [onStateChange])

  return (
    <section className="py-16 px-6 bg-gray-50" role="region" aria-labelledby="demo-heading">
      <div className="max-w-4xl mx-auto text-center">
        <h3 id="demo-heading" className="text-2xl font-bold text-gray-900 mb-6">
          Demo User States
        </h3>
        <p className="text-gray-600 mb-8">Experience how the interface adapts based on your account status</p>

        <div className="flex justify-center gap-4 flex-wrap" role="group" aria-label="User state selection buttons">
          <Button
            onClick={handleAnonymousClick}
            variant={userState === "anonymous" ? "default" : "outline"}
            className="min-w-[140px] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-pressed={userState === "anonymous"}
            aria-describedby="current-state"
          >
            Anonymous User
          </Button>
          <Button
            onClick={handleAuthenticatedClick}
            variant={userState === "authenticated" && !subscribedProduct ? "default" : "outline"}
            className="min-w-[140px] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-pressed={userState === "authenticated" && !subscribedProduct}
            aria-describedby="current-state"
          >
            Authenticated
          </Button>
          <Button
            onClick={handleSubscribedClick}
            variant={userState === "subscribed" ? "default" : "outline"}
            className="min-w-[140px] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-pressed={userState === "subscribed"}
            aria-describedby="current-state"
          >
            Subscribed User
          </Button>
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg border">
          <p id="current-state" className="text-sm text-gray-600" role="status" aria-live="polite">
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
  )
})
