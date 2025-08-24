import { memo } from "react"
import { cn } from "@/lib/utils"

interface ProgressDisplayProps {
  value: number
  showPercentage?: boolean
  size?: "sm" | "md" | "lg"
  color?: "blue" | "green" | "yellow" | "red"
  label?: string
  className?: string
}

const ProgressDisplay = memo(
  ({ value, showPercentage = true, size = "md", color = "blue", label, className }: ProgressDisplayProps) => {
    const getColorClass = (color: string, value: number) => {
      // Dynamic color based on value if color is 'auto'
      if (color === "auto") {
        if (value >= 80) return "bg-green-500"
        if (value >= 60) return "bg-yellow-500"
        return "bg-red-500"
      }

      switch (color) {
        case "green":
          return "bg-green-500"
        case "yellow":
          return "bg-yellow-500"
        case "red":
          return "bg-red-500"
        default:
          return "bg-blue-500"
      }
    }

    const sizeClasses = {
      sm: "h-1",
      md: "h-2",
      lg: "h-3",
    }

    return (
      <div className={cn("space-y-1", className)}>
        {(label || showPercentage) && (
          <div className="flex items-center justify-between text-sm">
            {label && <span className="text-gray-600">{label}</span>}
            {showPercentage && <span className="font-medium text-gray-900">{value}%</span>}
          </div>
        )}
        <div className={cn("w-full bg-gray-200 rounded-full overflow-hidden", sizeClasses[size])}>
          <div
            className={cn("h-full transition-all duration-300 rounded-full", getColorClass(color, value))}
            style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
          />
        </div>
      </div>
    )
  },
)

ProgressDisplay.displayName = "ProgressDisplay"

export default ProgressDisplay
