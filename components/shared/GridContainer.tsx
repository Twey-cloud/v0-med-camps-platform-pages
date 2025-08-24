"use client"

import { memo, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GridContainerProps {
  children: ReactNode
  columns: 1 | 2 | 3 | 4
  gap?: 4 | 6 | 8
  responsive?: boolean
  className?: string
}

const GridContainer = memo<GridContainerProps>(({ children, columns, gap = 6, responsive = true, className }) => {
  const getGridClasses = () => {
    const baseClass = "grid"
    const gapClass = `gap-${gap}`

    if (!responsive) {
      return `${baseClass} grid-cols-${columns} ${gapClass}`
    }

    // Responsive grid classes
    switch (columns) {
      case 1:
        return `${baseClass} grid-cols-1 ${gapClass}`
      case 2:
        return `${baseClass} grid-cols-1 md:grid-cols-2 ${gapClass}`
      case 3:
        return `${baseClass} grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${gapClass}`
      case 4:
        return `${baseClass} grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${gapClass}`
      default:
        return `${baseClass} grid-cols-1 ${gapClass}`
    }
  }

  return <div className={cn(getGridClasses(), className)}>{children}</div>
})

GridContainer.displayName = "GridContainer"

export default GridContainer
