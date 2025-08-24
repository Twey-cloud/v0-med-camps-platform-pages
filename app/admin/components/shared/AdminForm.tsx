"use client"

import type React from "react"

import { memo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FormField {
  id: string
  label: string
  type: "text" | "textarea" | "select"
  placeholder?: string
  defaultValue?: string
  options?: { value: string; label: string }[]
  required?: boolean
}

interface AdminFormProps {
  title: string
  description: string
  fields: FormField[]
  onSave: (data: Record<string, string>) => void
  onCancel: () => void
  isEditing?: boolean
}

const AdminForm = memo(({ title, description, fields, onSave, onCancel, isEditing = false }: AdminFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data: Record<string, string> = {}

    fields.forEach((field) => {
      data[field.id] = formData.get(field.id) as string
    })

    onSave(data)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {fields.map((field) => (
            <div key={field.id}>
              <Label htmlFor={field.id}>
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </Label>

              {field.type === "text" && (
                <Input
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  defaultValue={field.defaultValue}
                  required={field.required}
                />
              )}

              {field.type === "textarea" && (
                <Textarea
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  defaultValue={field.defaultValue}
                  required={field.required}
                  className="min-h-32"
                />
              )}

              {field.type === "select" && field.options && (
                <Select name={field.id} defaultValue={field.defaultValue}>
                  <SelectTrigger>
                    <SelectValue placeholder={field.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          ))}

          <div className="flex space-x-2 pt-4">
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
              {isEditing ? "Save Changes" : "Create"}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
})

AdminForm.displayName = "AdminForm"

export default AdminForm
