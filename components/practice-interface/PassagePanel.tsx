"use client"

interface PassagePanelProps {
  passage: string
}

export function PassagePanel({ passage }: PassagePanelProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 md:border-r border-gray-300 bg-white">
      <div className="text-base md:text-sm leading-relaxed md:leading-relaxed text-gray-900 whitespace-pre-line">
        {passage}
      </div>
    </div>
  )
}
