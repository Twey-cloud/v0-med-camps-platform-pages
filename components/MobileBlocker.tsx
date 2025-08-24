"use client"

import { Button } from "@/components/ui/button"

export function MobileBlocker() {
  return (
    <div className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 mx-auto bg-teal-600 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-gray-900">Desktop Required</h1>
          <p className="text-gray-600 leading-relaxed">
            This platform can only be used on a computer, for the best possible experience.
          </p>
        </div>

        <Button variant="default" size="lg" className="w-full bg-teal-600 hover:bg-teal-700">
          Return to Home
        </Button>
      </div>
    </div>
  )
}
