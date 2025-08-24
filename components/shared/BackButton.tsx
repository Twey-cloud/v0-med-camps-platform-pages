"use client"

import { memo } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronLeft } from "lucide-react"
import Link from "next/link"

interface BackButtonProps {
  href: string
  label?: string
  variant?: "ghost" | "outline" | "default"
  icon?: "arrow" | "chevron"
  className?: string
}

const BackButton = memo<BackButtonProps>(
  ({ href, label = "Back", variant = "ghost", icon = "arrow", className = "" }) => {
    const IconComponent = icon === "arrow" ? ArrowLeft : ChevronLeft

    return (
      <Link href={href}>
        <Button variant={variant} className={`flex items-center gap-2 ${className}`}>
          <IconComponent className="h-4 w-4" />
          {label}
        </Button>
      </Link>
    )
  },
)

BackButton.displayName = "BackButton"

export default BackButton
