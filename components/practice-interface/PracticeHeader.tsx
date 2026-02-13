"use client"

interface PracticeHeaderProps {
  subtestName: string
  currentQuestion: number
  totalQuestions: number
  timeFormatted: string
}

export function PracticeHeader({
  subtestName,
  currentQuestion,
  totalQuestions,
  timeFormatted,
}: PracticeHeaderProps) {
  // Abbreviate subtest name for mobile
  const abbreviations: Record<string, string> = {
    "Verbal Reasoning": "VR",
    "Decision Making": "DM",
    "Quantitative Reasoning": "QR",
    "Situational Judgement": "SJT",
  }
  const shortName = abbreviations[subtestName] || subtestName

  return (
    <header className="flex items-center justify-between h-10 bg-[#1e3a5f] text-white px-2 md:px-4 shrink-0">
      {/* Left: MedCamps branding */}
      <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-xtW6DJG22oopkP1mifyHakaW5g1QCw.svg"
          alt="MedCamps"
          className="h-5 md:h-6 w-auto brightness-0 invert"
        />
        <span className="hidden md:inline font-bold text-sm">MedCamps</span>
      </div>

      <span className="hidden md:inline mx-2 text-white/60">-</span>

      {/* Subtest name: abbreviated on mobile, full on desktop */}
      <span className="text-xs md:text-sm">
        <span className="md:hidden">{shortName}</span>
        <span className="hidden md:inline">{subtestName}</span>
      </span>

      <span className="mx-1 md:mx-2 text-white/60">-</span>

      {/* Question progress */}
      <span className="text-xs md:text-sm">
        {currentQuestion}/{totalQuestions}
      </span>

      <span className="mx-1 md:mx-2 text-white/60">-</span>

      {/* Timer */}
      <span className="text-xs md:text-sm font-mono">{timeFormatted}</span>
    </header>
  )
}
