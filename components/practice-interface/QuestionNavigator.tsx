"use client"

import { X } from "lucide-react"

interface QuestionStatus {
  answered: boolean
  flagged: boolean
}

interface QuestionNavigatorProps {
  totalQuestions: number
  currentQuestion: number
  questionStatuses: QuestionStatus[]
  onSelectQuestion: (index: number) => void
  onClose: () => void
}

export function QuestionNavigator({
  totalQuestions,
  currentQuestion,
  questionStatuses,
  onSelectQuestion,
  onClose,
}: QuestionNavigatorProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50">
      {/* Full-screen on mobile, centered modal on desktop */}
      <div className="bg-white w-full h-full md:h-auto md:rounded-lg shadow-xl md:w-full md:max-w-lg md:mx-4">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 md:py-3 bg-[#1e3a5f] text-white md:rounded-t-lg">
          <h2 className="text-sm font-semibold">Question Navigator</h2>
          <button onClick={onClose} className="hover:bg-white/20 p-2 md:p-1 rounded transition-colors min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0 flex items-center justify-center">
            <X className="h-5 w-5 md:h-4 md:w-4" />
          </button>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 px-4 py-3 border-b border-gray-200 text-xs text-gray-600">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-sm bg-white border border-gray-300" />
            <span>Unanswered</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-sm bg-[#4a7ab5]" />
            <span>Answered</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-sm bg-[#1e3a5f] ring-2 ring-yellow-400" />
            <span>Current</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-sm bg-orange-400" />
            <span>Flagged</span>
          </div>
        </div>

        {/* Grid of question numbers - larger on mobile for touch targets */}
        <div className="grid grid-cols-7 md:grid-cols-11 gap-2 md:gap-1.5 p-4 flex-1 overflow-y-auto">
          {Array.from({ length: totalQuestions }, (_, i) => {
            const qNum = i + 1
            const status = questionStatuses[i]
            const isCurrent = qNum === currentQuestion

            let bgColor = "bg-white border border-gray-300 text-gray-700"
            if (isCurrent) {
              bgColor = "bg-[#1e3a5f] text-white ring-2 ring-yellow-400"
            } else if (status?.flagged) {
              bgColor = "bg-orange-400 text-white"
            } else if (status?.answered) {
              bgColor = "bg-[#4a7ab5] text-white"
            }

            return (
              <button
                key={qNum}
                onClick={() => onSelectQuestion(i)}
                className={`h-10 w-full md:h-7 md:w-7 rounded-sm text-sm md:text-xs font-medium flex items-center justify-center hover:opacity-80 transition-opacity ${bgColor}`}
              >
                {qNum}
              </button>
            )
          })}
        </div>

        {/* Close button */}
        <div className="px-4 py-4 md:py-3 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 md:px-4 md:py-1.5 bg-[#1e3a5f] text-white text-sm md:text-xs rounded hover:bg-[#162d4a] transition-colors min-h-[44px] md:min-h-0"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
