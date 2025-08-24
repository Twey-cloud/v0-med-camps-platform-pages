import { memo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScoreDisplayProps {
  value: string | number
  label: string
  icon?: LucideIcon
  trend?: "up" | "down" | "neutral"
  trendValue?: string
  size?: "sm" | "md" | "lg"
  variant?: "card" | "inline"
  className?: string
}

const ScoreDisplay = memo(
  ({ value, label, icon: Icon, trend, trendValue, size = "md", variant = "card", className }: ScoreDisplayProps) => {
    const getTrendColor = (trend?: string) => {
      switch (trend) {
        case "up":
          return "text-green-600"
        case "down":
          return "text-red-600"
        default:
          return "text-gray-600"
      }
    }

    const sizeClasses = {
      sm: { value: "text-lg", label: "text-xs", icon: "h-4 w-4" },
      md: { value: "text-2xl", label: "text-sm", icon: "h-6 w-6" },
      lg: { value: "text-3xl", label: "text-base", icon: "h-8 w-8" },
    }

    const content = (
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className={cn("text-gray-600", sizeClasses[size].label)}>{label}</p>
          <div className="flex items-center gap-2">
            <p className={cn("font-bold text-gray-900", sizeClasses[size].value)}>{value}</p>
            {trendValue && (
              <span className={cn("text-sm font-medium", getTrendColor(trend))}>
                {trend === "up" ? "+" : trend === "down" ? "-" : ""}
                {trendValue}
              </span>
            )}
          </div>
        </div>
        {Icon && <Icon className={cn("text-blue-400", sizeClasses[size].icon)} />}
      </div>
    )

    if (variant === "inline") {
      return <div className={cn("p-4", className)}>{content}</div>
    }

    return (
      <Card className={className}>
        <CardContent className="p-6">{content}</CardContent>
      </Card>
    )
  },
)

ScoreDisplay.displayName = "ScoreDisplay"

export default ScoreDisplay
