"use client"

interface QuestionOption {
  label: string
  text: string
}

interface QuestionPanelProps {
  questionText: string
  options: QuestionOption[]
  selectedOption: string | null
  onSelectOption: (label: string) => void
}

export function QuestionPanel({
  questionText,
  options,
  selectedOption,
  onSelectOption,
}: QuestionPanelProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-white">
      {/* Question text */}
      <p className="text-base md:text-sm text-gray-900 mb-4 md:mb-6">{questionText}</p>

      {/* Options - card-style on mobile, compact on desktop */}
      <div className="space-y-2 md:space-y-3">
        {options.map((option) => {
          const isSelected = selectedOption === option.label
          return (
            <label
              key={option.label}
              className={`flex items-start gap-3 cursor-pointer rounded-lg p-3 md:p-0 md:rounded-none transition-colors ${
                isSelected
                  ? "bg-blue-50 md:bg-transparent border border-blue-300 md:border-0"
                  : "bg-gray-50 md:bg-transparent border border-gray-200 md:border-0"
              }`}
            >
              <input
                type="radio"
                name="answer"
                value={option.label}
                checked={isSelected}
                onChange={() => onSelectOption(option.label)}
                className="mt-0.5 h-5 w-5 md:h-4 md:w-4 shrink-0 accent-[#1e3a5f]"
              />
              <span className="text-base md:text-sm text-gray-900">
                <span className="font-bold">{option.label}.</span>{" "}
                {option.text}
              </span>
            </label>
          )
        })}
      </div>
    </div>
  )
}
