"use client"

import { Button } from "@/components/ui/button"
import type { UserState } from "@/lib/types"

interface UserStateDemoProps {
  userState: UserState
  subscribedProduct: string | null
  onStateChange: (state: UserState, product?: string | null) => void
}

export function UserStateDemo({ userState, subscribedProduct, onStateChange }: UserStateDemoProps) {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Demo User States</h3>
        <p className="text-gray-600 mb-8">Experience how the interface adapts based on your account status</p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            onClick={() => onStateChange("anonymous", null)}
            variant={userState === "anonymous" ? "default" : "outline"}
            className="min-w-[140px]"
          >
            Anonymous User
          </Button>
          <Button
            onClick={() => onStateChange("authenticated", null)}
            variant={userState === "authenticated" && !subscribedProduct ? "default" : "outline"}
            className="min-w-[140px]"
          >
            Authenticated
          </Button>
          <Button
            onClick={() => onStateChange("subscribed", "uk-medicine")}
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
  )
}
