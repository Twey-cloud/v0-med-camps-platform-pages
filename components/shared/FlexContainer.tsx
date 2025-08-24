"use client"

import { memo, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FlexContainerProps {
  children: ReactNode
  direction?: "row" | "column"
  align?: "start" | "center" | "end" | "stretch"
  justify?: "start" | "center" | "between" | "around" | "end"
  gap?: 2 | 3 | 4 | 6 | 8
  wrap?: boolean
  className?: string
}

const FlexContainer = memo<FlexContainerProps>(
  ({ children, direction = "row", align = "start", justify = "start", gap = 4, wrap = false, className }) => {
    const getFlexClasses = () => {
      const baseClass = "flex"
      const directionClass = direction === "column" ? "flex-col" : "flex-row"
      const alignClass = `items-${align === "start" ? "start" : align === "center" ? "center" : align === "end" ? "end" : "stretch"}`
      const justifyClass = `justify-${justify === "start" ? "start" : justify === "center" ? "center" : justify === "between" ? "between" : justify === "around" ? "around" : "end"}`
      const gapClass = `gap-${gap}`
      const wrapClass = wrap ? "flex-wrap" : ""

      return cn(baseClass, directionClass, alignClass, justifyClass, gapClass, wrapClass)
    }

    return <div className={cn(getFlexClasses(), className)}>{children}</div>
  },
)

FlexContainer.displayName = "FlexContainer"

export default FlexContainer
