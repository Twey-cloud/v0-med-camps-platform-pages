"use client"

import type React from "react"
import { memo, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface InteractiveCardProps {
  title: string
  description?: string
  children: React.ReactNode
  collapsible?: boolean
  defaultExpanded?: boolean
  onClick?: () => void
  className?: string
  headerActions?: React.ReactNode
}

export const InteractiveCard = memo<InteractiveCardProps>(
  ({
    title,
    description,
    children,
    collapsible = false,
    defaultExpanded = true,
    onClick,
    className,
    headerActions,
  }) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded)

    const handleHeaderClick = () => {
      if (collapsible) {
        setIsExpanded(!isExpanded)
      }
      onClick?.()
    }

    return (
      <Card className={cn("transition-all duration-200 hover:shadow-md", className)}>
        <CardHeader
          className={cn(
            "flex flex-row items-center justify-between space-y-0 pb-2",
            (collapsible || onClick) && "cursor-pointer hover:bg-muted/50",
          )}
          onClick={handleHeaderClick}
        >
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2">
              {collapsible && (isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />)}
              {title}
            </CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          {headerActions && <div onClick={(e) => e.stopPropagation()}>{headerActions}</div>}
        </CardHeader>
        {(!collapsible || isExpanded) && <CardContent className="pt-0">{children}</CardContent>}
      </Card>
    )
  },
)

InteractiveCard.displayName = "InteractiveCard"
