import { memo } from "react"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface LoadingStateProps {
  message?: string
  size?: "sm" | "md" | "lg"
  className?: string
  fullScreen?: boolean
}

export const LoadingState = memo<LoadingStateProps>(
  ({ message = "Loading...", size = "md", className, fullScreen = false }) => {
    const sizeClasses = {
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
    }

    const textSizeClasses = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    }

    if (fullScreen) {
      return (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className={cn(sizeClasses[size], "animate-spin text-primary")} />
            <p className={cn(textSizeClasses[size], "text-muted-foreground")}>{message}</p>
          </div>
        </div>
      )
    }

    return (
      <div className={cn("flex items-center justify-center gap-3 p-8", className)}>
        <Loader2 className={cn(sizeClasses[size], "animate-spin text-primary")} />
        <p className={cn(textSizeClasses[size], "text-muted-foreground")}>{message}</p>
      </div>
    )
  },
)

LoadingState.displayName = "LoadingState"
