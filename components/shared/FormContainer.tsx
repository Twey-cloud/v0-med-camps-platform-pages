"use client"

import type * as React from "react"
import { memo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FormContainerProps {
  title: string
  description?: string
  onSubmit: (e: React.FormEvent) => void
  children: React.ReactNode
  submitText?: string
  cancelText?: string
  onCancel?: () => void
  isSubmitting?: boolean
  className?: string
  variant?: "card" | "plain"
}

const FormContainer = memo(
  ({
    title,
    description,
    onSubmit,
    children,
    submitText = "Submit",
    cancelText = "Cancel",
    onCancel,
    isSubmitting = false,
    className,
    variant = "card",
  }: FormContainerProps) => {
    const formContent = (
      <>
        <form onSubmit={onSubmit} className="space-y-6">
          {children}

          <div className="flex gap-2 pt-4">
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : submitText}
            </Button>
            {onCancel && (
              <Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
                {cancelText}
              </Button>
            )}
          </div>
        </form>
      </>
    )

    if (variant === "plain") {
      return (
        <div className={cn("space-y-6", className)}>
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            {description && <p className="text-gray-600 mt-1">{description}</p>}
          </div>
          {formContent}
        </div>
      )
    }

    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>{formContent}</CardContent>
      </Card>
    )
  },
)

FormContainer.displayName = "FormContainer"

export { FormContainer, type FormContainerProps }
