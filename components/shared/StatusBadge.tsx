import { memo } from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface StatusBadgeProps {
  status: "active" | "draft" | "completed" | "in-progress" | "needs-attention"
  size?: "sm" | "md" | "lg"
  className?: string
}

const StatusBadge = memo(({ status, size = "md", className }: StatusBadgeProps) => {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "active":
        return { text: "Active", className: "bg-green-100 text-green-800 border-green-200" }
      case "draft":
        return { text: "Draft", className: "bg-yellow-100 text-yellow-800 border-yellow-200" }
      case "completed":
        return { text: "Completed", className: "bg-green-100 text-green-800 border-green-200" }
      case "in-progress":
        return { text: "In Progress", className: "bg-blue-100 text-blue-800 border-blue-200" }
      case "needs-attention":
        return { text: "Needs Attention", className: "bg-red-100 text-red-800 border-red-200" }
      default:
        return { text: status, className: "bg-gray-100 text-gray-800 border-gray-200" }
    }
  }

  const config = getStatusConfig(status)
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
  }

  return (
    <Badge className={cn(config.className, sizeClasses[size], "border font-medium", className)}>{config.text}</Badge>
  )
})

StatusBadge.displayName = "StatusBadge"

export default StatusBadge
