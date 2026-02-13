"use client"

import { Grid3X3, Flag } from "lucide-react"

interface PracticeToolbarProps {
  isFlagged: boolean
  onToggleFlag: () => void
  onToggleCalculator: () => void
}

export function PracticeToolbar({
  isFlagged,
  onToggleFlag,
  onToggleCalculator,
}: PracticeToolbarProps) {
  return (
    <div className="flex items-center justify-between h-10 md:h-8 bg-[#4a7ab5] text-white px-2 md:px-4 text-xs shrink-0">
      {/* Left: Calculator */}
      <button
        onClick={onToggleCalculator}
        className="flex items-center gap-1.5 hover:bg-white/20 px-2 py-2 md:py-1 rounded transition-colors min-h-[44px] md:min-h-0"
      >
        <Grid3X3 className="h-4 w-4 md:h-3.5 md:w-3.5" />
        <span className="underline hidden md:inline">Calculator</span>
      </button>

      {/* Right: Flag for Review */}
      <button
        onClick={onToggleFlag}
        className="flex items-center gap-1.5 hover:bg-white/20 px-2 py-2 md:py-1 rounded transition-colors min-h-[44px] md:min-h-0"
      >
        <span className="underline hidden md:inline">Flag for Review</span>
        <span className="underline md:hidden">Flag</span>
        <Flag className={`h-4 w-4 md:h-3.5 md:w-3.5 ${isFlagged ? "fill-yellow-300 text-yellow-300" : ""}`} />
      </button>
    </div>
  )
}
