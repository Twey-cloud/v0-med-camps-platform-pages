"use client"

import { memo, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import BackButton from "./BackButton"

interface PageHeaderProps {
  title: string
  subtitle?: string
  backButton?: {
    href: string
    label?: string
  }
  actionButton?: {
    label: string
    onClick: () => void
    icon?: ReactNode
  }
  children?: ReactNode
}

const PageHeader = memo<PageHeaderProps>(({ title, subtitle, backButton, actionButton, children }) => {
  return (
    <div className="mb-6">
      {backButton && (
        <div className="mb-4">
          <BackButton href={backButton.href} label={backButton.label} />
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
        </div>

        <div className="flex items-center gap-3">
          {children}
          {actionButton && (
            <Button onClick={actionButton.onClick} className="bg-blue-500 hover:bg-blue-600">
              {actionButton.icon || <Plus className="h-4 w-4 mr-2" />}
              {actionButton.label}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
})

PageHeader.displayName = "PageHeader"

export default PageHeader
