"use client"

import { memo } from "react"
import { Button } from "@/components/ui/button"
import { Plus, ArrowLeft } from "lucide-react"

interface AdminHeaderProps {
  title: string
  subtitle?: string
  showBackButton?: boolean
  onBack?: () => void
  showCreateButton?: boolean
  onCreate?: () => void
  createButtonText?: string
}

const AdminHeader = memo(
  ({
    title,
    subtitle,
    showBackButton = false,
    onBack,
    showCreateButton = false,
    onCreate,
    createButtonText = "Create New",
  }: AdminHeaderProps) => {
    return (
      <div className="flex items-center justify-between mb-6">
        <div>
          {showBackButton && onBack && (
            <Button variant="outline" onClick={onBack} className="mb-2 bg-transparent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          )}
          <h2 className="text-2xl font-bold">{title}</h2>
          {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
        </div>

        {showCreateButton && onCreate && (
          <Button className="bg-blue-500 hover:bg-blue-600" onClick={onCreate}>
            <Plus className="h-4 w-4 mr-2" />
            {createButtonText}
          </Button>
        )}
      </div>
    )
  },
)

AdminHeader.displayName = "AdminHeader"

export default AdminHeader
