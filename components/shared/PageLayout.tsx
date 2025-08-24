"use client"

import { memo, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface PageLayoutProps {
  children: ReactNode
  className?: string
  variant?: "default" | "narrow" | "wide" | "admin"
  padding?: "default" | "compact" | "spacious"
}

const PageLayout = memo<PageLayoutProps>(({ children, className, variant = "default", padding = "default" }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "narrow":
        return "max-w-4xl"
      case "wide":
        return "max-w-full"
      case "admin":
        return "max-w-7xl bg-white"
      default:
        return "max-w-7xl"
    }
  }

  const getPaddingClasses = () => {
    switch (padding) {
      case "compact":
        return "pt-4 p-4"
      case "spacious":
        return "pt-12 p-12"
      default:
        return "pt-8 p-8"
    }
  }

  return (
    <div className={cn("bg-gray-50 min-h-screen mx-auto", getVariantClasses(), getPaddingClasses(), className)}>
      {children}
    </div>
  )
})

PageLayout.displayName = "PageLayout"

export default PageLayout
