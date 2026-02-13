"use client"

interface MobileTabSwitcherProps {
  activeTab: "passage" | "question"
  onTabChange: (tab: "passage" | "question") => void
}

export function MobileTabSwitcher({ activeTab, onTabChange }: MobileTabSwitcherProps) {
  return (
    <div className="flex md:hidden shrink-0 bg-gray-100 border-b border-gray-300">
      <button
        onClick={() => onTabChange("passage")}
        className={`flex-1 py-2.5 text-sm font-medium text-center transition-colors ${
          activeTab === "passage"
            ? "bg-white text-[#1e3a5f] border-b-2 border-[#1e3a5f]"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        Passage
      </button>
      <button
        onClick={() => onTabChange("question")}
        className={`flex-1 py-2.5 text-sm font-medium text-center transition-colors ${
          activeTab === "question"
            ? "bg-white text-[#1e3a5f] border-b-2 border-[#1e3a5f]"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        Question
      </button>
    </div>
  )
}
