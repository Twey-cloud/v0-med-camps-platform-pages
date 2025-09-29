"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const emailTemplates = [
  {
    id: "confirm-signup",
    name: "Confirm Signup",
    subject: "Confirm Your Signup - MedCamps",
    file: "confirm-signup.html",
  },
  {
    id: "invite-user",
    name: "Invite User",
    subject: "You've Been Invited to MedCamps",
    file: "invite-user.html",
  },
  {
    id: "magic-link",
    name: "Magic Link",
    subject: "Your MedCamps Sign-In Link",
    file: "magic-link.html",
  },
  {
    id: "change-email",
    name: "Change Email Address",
    subject: "Confirm Your Email Change - MedCamps",
    file: "change-email.html",
  },
  {
    id: "reset-password",
    name: "Reset Password",
    subject: "Reset Your MedCamps Password",
    file: "reset-password.html",
  },
  {
    id: "reauthentication",
    name: "Reauthentication",
    subject: "Reauthentication Required - MedCamps",
    file: "reauthentication.html",
  },
]

export default function EmailTemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState(emailTemplates[0])

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">MedCamps Email Templates</h1>
          <p className="text-gray-600">Preview and copy authentication email templates for Supabase</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Template Selector */}
          <div className="lg:col-span-1">
            <Card className="p-4">
              <h2 className="font-semibold text-lg mb-4">Templates</h2>
              <div className="space-y-2">
                {emailTemplates.map((template) => (
                  <Button
                    key={template.id}
                    variant={selectedTemplate.id === template.id ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedTemplate(template)}
                  >
                    {template.name}
                  </Button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t">
                <a
                  href="/email-templates/README.md"
                  target="_blank"
                  className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                  rel="noreferrer"
                >
                  📖 View Implementation Guide
                </a>
              </div>
            </Card>
          </div>

          {/* Template Preview */}
          <div className="lg:col-span-3">
            <Card className="p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedTemplate.name}</h2>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Subject:</strong> {selectedTemplate.subject}
                </p>
                <div className="flex gap-2">
                  <Button
                    onClick={() => {
                      window.open(`/email-templates/${selectedTemplate.file}`, "_blank")
                    }}
                  >
                    Open in New Tab
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = `/email-templates/${selectedTemplate.file}`
                      link.download = selectedTemplate.file
                      link.click()
                    }}
                  >
                    Download HTML
                  </Button>
                </div>
              </div>

              {/* Preview Frame */}
              <div className="border rounded-lg overflow-hidden bg-white">
                <div className="bg-gray-100 px-4 py-2 border-b text-sm text-gray-600">Preview</div>
                <iframe
                  src={`/email-templates/${selectedTemplate.file}`}
                  className="w-full h-[600px]"
                  title={`${selectedTemplate.name} Preview`}
                />
              </div>

              {/* Instructions */}
              <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <h3 className="font-semibold text-emerald-900 mb-2">How to Use This Template</h3>
                <ol className="text-sm text-emerald-800 space-y-1 list-decimal list-inside">
                  <li>Open the template in a new tab or download the HTML file</li>
                  <li>Copy all the HTML code</li>
                  <li>Go to your Supabase Dashboard → Authentication → Email Templates</li>
                  <li>Select the "{selectedTemplate.name}" tab</li>
                  <li>Paste the HTML into the "Message body" section</li>
                  <li>
                    Update the "Subject heading" to:{" "}
                    <code className="bg-white px-1 rounded">{selectedTemplate.subject}</code>
                  </li>
                  <li>Click Save</li>
                </ol>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
