"use client"

import { useState } from "react"
import type { UserState } from "@/lib/types"

export function useUserState() {
  const [userState, setUserState] = useState<UserState>("anonymous")
  const [subscribedProduct, setSubscribedProduct] = useState<string | null>(null)

  const signOut = () => {
    setUserState("anonymous")
    setSubscribedProduct(null)
  }

  const signIn = () => {
    setUserState("authenticated")
    setSubscribedProduct(null)
  }

  const subscribe = (productId: string) => {
    setUserState("subscribed")
    setSubscribedProduct(productId)
  }

  const isSubscribedTo = (productId: string): boolean => {
    return userState === "subscribed" && subscribedProduct === productId
  }

  return {
    userState,
    subscribedProduct,
    signOut,
    signIn,
    subscribe,
    isSubscribedTo,
    setUserState,
    setSubscribedProduct,
  }
}
