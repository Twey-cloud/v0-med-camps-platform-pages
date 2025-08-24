"use client"

import type React from "react"
import { memo } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface ActionButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  loading?: boolean
  disabled?: boolean
  className?: string
  type?: "button" | "submit" | "reset"
}

export const ActionButton = memo<ActionButtonProps>(
  ({
    children,
    onClick,
    variant = "default",
    size = "default",
    loading = false,
    disabled = false,
    className,
    type = "button",
  }) => {
    return (
      <Button
        type={type}
        variant={variant}
        size={size}
        onClick={onClick}
        disabled={disabled || loading}
        className={cn(className)}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </Button>
    )
  },
)

ActionButton.displayName = "ActionButton"
