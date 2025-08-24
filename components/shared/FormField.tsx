"use client"

import * as React from "react"
import { memo } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: string) => string | null
}

interface FormFieldProps {
  id: string
  label: string
  type: "text" | "email" | "password" | "number" | "textarea" | "select"
  placeholder?: string
  value?: string
  defaultValue?: string
  options?: Array<{ value: string; label: string }>
  validation?: ValidationRule
  error?: string
  onChange?: (value: string) => void
  className?: string
  disabled?: boolean
  required?: boolean
}

const FormField = memo(
  ({
    id,
    label,
    type,
    placeholder,
    value,
    defaultValue,
    options,
    validation,
    error,
    onChange,
    className,
    disabled = false,
    required = false,
  }: FormFieldProps) => {
    const [internalError, setInternalError] = React.useState<string>("")
    const displayError = error || internalError

    const validateField = React.useCallback(
      (fieldValue: string) => {
        if (!validation) return null

        if (validation.required && !fieldValue.trim()) {
          return "This field is required"
        }

        if (validation.minLength && fieldValue.length < validation.minLength) {
          return `Minimum ${validation.minLength} characters required`
        }

        if (validation.maxLength && fieldValue.length > validation.maxLength) {
          return `Maximum ${validation.maxLength} characters allowed`
        }

        if (validation.pattern && !validation.pattern.test(fieldValue)) {
          return "Invalid format"
        }

        if (validation.custom) {
          return validation.custom(fieldValue)
        }

        return null
      },
      [validation],
    )

    const handleChange = React.useCallback(
      (newValue: string) => {
        const validationError = validateField(newValue)
        setInternalError(validationError || "")
        onChange?.(newValue)
      },
      [onChange, validateField],
    )

    const fieldId = `field-${id}`
    const errorId = `${fieldId}-error`

    return (
      <div className={cn("space-y-2", className)}>
        <Label htmlFor={fieldId} className="text-sm font-medium">
          {label}
          {(required || validation?.required) && <span className="text-red-500 ml-1">*</span>}
        </Label>

        {type === "text" && (
          <Input
            id={fieldId}
            type="text"
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={(e) => handleChange(e.target.value)}
            disabled={disabled}
            aria-invalid={!!displayError}
            aria-describedby={displayError ? errorId : undefined}
            className={cn(displayError && "border-red-500 focus-visible:ring-red-500/20")}
          />
        )}

        {type === "email" && (
          <Input
            id={fieldId}
            type="email"
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={(e) => handleChange(e.target.value)}
            disabled={disabled}
            aria-invalid={!!displayError}
            aria-describedby={displayError ? errorId : undefined}
            className={cn(displayError && "border-red-500 focus-visible:ring-red-500/20")}
          />
        )}

        {type === "password" && (
          <Input
            id={fieldId}
            type="password"
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={(e) => handleChange(e.target.value)}
            disabled={disabled}
            aria-invalid={!!displayError}
            aria-describedby={displayError ? errorId : undefined}
            className={cn(displayError && "border-red-500 focus-visible:ring-red-500/20")}
          />
        )}

        {type === "number" && (
          <Input
            id={fieldId}
            type="number"
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={(e) => handleChange(e.target.value)}
            disabled={disabled}
            aria-invalid={!!displayError}
            aria-describedby={displayError ? errorId : undefined}
            className={cn(displayError && "border-red-500 focus-visible:ring-red-500/20")}
          />
        )}

        {type === "textarea" && (
          <Textarea
            id={fieldId}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={(e) => handleChange(e.target.value)}
            disabled={disabled}
            aria-invalid={!!displayError}
            aria-describedby={displayError ? errorId : undefined}
            className={cn("min-h-24", displayError && "border-red-500 focus-visible:ring-red-500/20")}
          />
        )}

        {type === "select" && options && (
          <Select value={value} defaultValue={defaultValue} onValueChange={handleChange} disabled={disabled}>
            <SelectTrigger
              id={fieldId}
              aria-invalid={!!displayError}
              aria-describedby={displayError ? errorId : undefined}
              className={cn(displayError && "border-red-500 focus-visible:ring-red-500/20")}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        {displayError && (
          <p id={errorId} className="text-sm text-red-600" role="alert">
            {displayError}
          </p>
        )}
      </div>
    )
  },
)

FormField.displayName = "FormField"

export { FormField, type FormFieldProps, type ValidationRule }
