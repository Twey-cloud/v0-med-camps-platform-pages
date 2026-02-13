"use client"

import { Grid3X3, MoreVertical, BookmarkCheck, XCircle } from "lucide-react"
import { useState } from "react"

interface PracticeNavigationProps {
  onPrevious: () => void
  onNext: () => void
  onMarkAndReview: () => void
  onCancelTest: () => void
  onOpenNavigator: () => void
  hasPrevious: boolean
  hasNext: boolean
}

export function PracticeNavigation({
  onPrevious,
  onNext,
  onMarkAndReview,
  onCancelTest,
  onOpenNavigator,
  hasPrevious,
  hasNext,
}: PracticeNavigationProps) {
  const [showOverflow, setShowOverflow] = useState(false)

  return (
    <>
      {/* Desktop navigation */}
      <div className="hidden md:flex items-center justify-between h-10 bg-[#1e3a5f] text-white px-4 shrink-0">
        {/* Left side controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMarkAndReview}
            className="text-xs underline hover:text-blue-200 transition-colors px-2 py-1"
          >
            Mark and review
          </button>
          <button
            onClick={onCancelTest}
            className="text-xs underline hover:text-blue-200 transition-colors px-2 py-1"
          >
            Cancel test
          </button>
        </div>

        {/* Center: Question navigator button */}
        <button
          onClick={onOpenNavigator}
          className="flex items-center gap-1.5 text-xs hover:bg-white/20 px-3 py-1 rounded transition-colors"
        >
          <Grid3X3 className="h-3.5 w-3.5" />
          <span className="underline">Navigator</span>
        </button>

        {/* Right side controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={onPrevious}
            disabled={!hasPrevious}
            className="text-xs underline hover:text-blue-200 transition-colors px-2 py-1 disabled:opacity-40 disabled:no-underline disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={onNext}
            disabled={!hasNext}
            className="text-xs underline hover:text-blue-200 transition-colors px-2 py-1 disabled:opacity-40 disabled:no-underline disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="flex md:hidden items-center justify-between h-12 bg-[#1e3a5f] text-white px-2 shrink-0 relative">
        {/* Left: Previous */}
        <button
          onClick={onPrevious}
          disabled={!hasPrevious}
          className="text-xs font-medium px-3 py-2 min-h-[44px] flex items-center disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Prev
        </button>

        {/* Center buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={onMarkAndReview}
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center hover:bg-white/20 rounded transition-colors"
            aria-label="Mark and review"
          >
            <BookmarkCheck className="h-4 w-4" />
          </button>
          <button
            onClick={onOpenNavigator}
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center hover:bg-white/20 rounded transition-colors"
            aria-label="Question navigator"
          >
            <Grid3X3 className="h-4 w-4" />
          </button>
          <button
            onClick={() => setShowOverflow(!showOverflow)}
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center hover:bg-white/20 rounded transition-colors"
            aria-label="More options"
          >
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>

        {/* Right: Next */}
        <button
          onClick={onNext}
          disabled={!hasNext}
          className="text-xs font-medium px-3 py-2 min-h-[44px] flex items-center disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next
        </button>

        {/* Overflow menu */}
        {showOverflow && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setShowOverflow(false)} />
            <div className="absolute bottom-full right-2 mb-1 bg-white text-gray-900 rounded-lg shadow-xl z-50 overflow-hidden min-w-[180px]">
              <button
                onClick={() => {
                  onCancelTest()
                  setShowOverflow(false)
                }}
                className="flex items-center gap-2 w-full px-4 py-3 text-sm hover:bg-gray-100 transition-colors text-red-600"
              >
                <XCircle className="h-4 w-4" />
                Cancel test
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
