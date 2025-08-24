import { memo } from "react"
import { Check, Clock, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface CompletionIndicatorProps {
  status: "completed" | "in-progress" | "not-started" | "overdue"
  size?: "sm" | "md" | "lg"
  showText?: boolean
  className?: string
}

const CompletionIndicator = memo(({ status, size = "md", showText = false, className }: CompletionIndicatorProps) => {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "completed":
        return {
          icon: Check,
          color: "text-green-600 bg-green-100",
          text: "Completed",
        }
      case "in-progress":
        return {
          icon: Clock,
          color: "text-blue-600 bg-blue-100",
          text: "In Progress",
        }
      case "overdue":
        return {
          icon: AlertCircle,
          color: "text-red-600 bg-red-100",
          text: "Overdue",
        }
      default:
        return {
          icon: Clock,
          color: "text-gray-400 bg-gray-100",
          text: "Not Started",
        }
    }
  }

  const config = getStatusConfig(status)
  const Icon = config.icon

  const sizeClasses = {
    sm: { container: "w-4 h-4", icon: "h-2.5 w-2.5", text: "text-xs" },
    md: { container: "w-6 h-6", icon: "h-3.5 w-3.5", text: "text-sm" },
    lg: { container: "w-8 h-8", icon: "h-5 w-5", text: "text-base" },
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("rounded-full flex items-center justify-center", config.color, sizeClasses[size].container)}>
        <Icon className={sizeClasses[size].icon} />
      </div>
      {showText && (
        <span className={cn("font-medium", config.color.split(" ")[0], sizeClasses[size].text)}>{config.text}</span>
      )}
    </div>
  )
})

CompletionIndicator.displayName = "CompletionIndicator"

export default CompletionIndicator
