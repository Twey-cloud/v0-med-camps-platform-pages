export interface Currency {
  code: string
  symbol: string
  name: string
  flag: string
  rate: number
}

export interface Platform {
  id: string
  name: string
  country: string
  flag: string
  icon: any // Lucide icon component
  description: string
  image: string
  available: boolean
}

export interface ComingSoonPlatform {
  id: string
  name: string
  description: string
  image: string
}

export type UserState = "anonymous" | "authenticated" | "subscribed"

export interface PricingTier {
  monthly: number
  weekly: number
}

export interface UserActionProps {
  productId: string
  userState: UserState
  subscribedProduct: string | null
  onStateChange: (state: UserState, productId?: string) => void
}
