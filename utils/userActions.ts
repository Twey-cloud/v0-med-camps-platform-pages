import type { UserState } from "@/lib/types"

export const getUserActionText = (userState: UserState, isSubscribed: boolean) => {
  if (isSubscribed) return "Go to Platform"
  if (userState === "authenticated") return "Subscribe"
  return "Sign Up"
}

export const getUserSecondaryText = (userState: UserState) => {
  if (userState === "anonymous") return "Already have an account? Sign in"
  if (userState === "authenticated") return "Welcome back!"
  return ""
}

export const shouldShowPricing = (userState: UserState, isSubscribed: boolean): boolean => {
  return !isSubscribed
}
