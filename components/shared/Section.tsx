"use client"

import { memo, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: ReactNode
  title?: string
  subtitle?: string
  spacing?: "compact" | "default" | "spacious"
  className?: string
}

const Section = memo<SectionProps>(({ children, title, subtitle, spacing = "default", className }) => {
  const getSpacingClasses = () => {
    switch (spacing) {
      case "compact":
        return "mb-4"
      case "spacious":
        return "mb-12"
      default:
        return "mb-8"
    }
  }

  return (
    <section className={cn(getSpacingClasses(), className)}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h2 className="text-xl font-semibold text-gray-900">{title}</h2>}
          {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  )
})

Section.displayName = "Section"

export default Section
