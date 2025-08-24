"use client"

import type * as React from "react"
import { memo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { FormField } from "./FormField"
import { MessageCircle } from "lucide-react"

interface ContactFormData {
  name: string
  email: string
  question: string
}

interface ContactFormProps {
  title?: string
  description?: string
  placeholder?: string
  onSubmit?: (data: ContactFormData) => void
  triggerText?: string
  triggerIcon?: React.ReactNode
  className?: string
}

const ContactForm = memo(
  ({
    title = "Ask a Medic",
    description = "Your question will aim to be answered within 48 hours by Twey.",
    placeholder = "Your question about this topic...",
    onSubmit,
    triggerText = "Ask a medic",
    triggerIcon = <MessageCircle className="h-4 w-4 mr-2" />,
    className,
  }: ContactFormProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState<ContactFormData>({
      name: "",
      email: "",
      question: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)

      try {
        await onSubmit?.(formData)
        setFormData({ name: "", email: "", question: "" })
        setIsOpen(false)
      } catch (error) {
        console.error("[v0] Contact form submission error:", error)
      } finally {
        setIsSubmitting(false)
      }
    }

    const updateFormData = (field: keyof ContactFormData) => (value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }))
    }

    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className={`w-full justify-start bg-transparent ${className}`}>
            {triggerIcon}
            {triggerText}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormField
              id="contact-name"
              label="Name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={updateFormData("name")}
              validation={{ required: true }}
            />

            <FormField
              id="contact-email"
              label="Email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={updateFormData("email")}
              validation={{
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              }}
            />

            <FormField
              id="contact-question"
              label="Question"
              type="textarea"
              placeholder={placeholder}
              value={formData.question}
              onChange={updateFormData("question")}
              validation={{ required: true, minLength: 10 }}
            />

            <p className="text-sm text-gray-600">{description}</p>

            <div className="flex gap-2">
              <Button type="submit" className="flex-1 bg-blue-400 hover:bg-blue-500" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Question"}
              </Button>
              <Button type="button" variant="outline" onClick={() => setIsOpen(false)} disabled={isSubmitting}>
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    )
  },
)

ContactForm.displayName = "ContactForm"

export { ContactForm, type ContactFormData, type ContactFormProps }
