"use client"

import { memo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Edit, Trash2 } from "lucide-react"

interface TableItem {
  id: number
  title: string
  subtitle?: string
  status: string
  metadata?: string
}

interface AdminTableProps {
  title: string
  description: string
  items: TableItem[]
  onView?: (item: TableItem) => void
  onEdit?: (item: TableItem) => void
  onDelete?: (item: TableItem) => void
  viewButtonText?: string
}

const AdminTable = memo(
  ({ title, description, items, onView, onEdit, onDelete, viewButtonText = "View" }: AdminTableProps) => {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex-1">
                  <h3 className="font-medium">{item.title}</h3>
                  {item.subtitle && <p className="text-sm text-gray-600">{item.subtitle}</p>}
                  {item.metadata && <p className="text-xs text-gray-500 mt-1">{item.metadata}</p>}
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      item.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {item.status}
                  </span>
                  {onView && (
                    <Button variant="outline" size="sm" onClick={() => onView(item)}>
                      {viewButtonText}
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  )}
                  {onEdit && (
                    <Button variant="outline" size="sm" onClick={() => onEdit(item)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  )}
                  {onDelete && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-700 bg-transparent"
                      onClick={() => onDelete(item)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  },
)

AdminTable.displayName = "AdminTable"

export default AdminTable
