"use client"

import { useState, useEffect, useCallback } from "react"
import { PracticeHeader } from "@/components/practice-interface/PracticeHeader"
import { PracticeToolbar } from "@/components/practice-interface/PracticeToolbar"
import { PassagePanel } from "@/components/practice-interface/PassagePanel"
import { QuestionPanel } from "@/components/practice-interface/QuestionPanel"
import { PracticeNavigation } from "@/components/practice-interface/PracticeNavigation"
import { QuestionNavigator } from "@/components/practice-interface/QuestionNavigator"
import { MobileTabSwitcher } from "@/components/practice-interface/MobileTabSwitcher"

// --- Dummy data for Verbal Reasoning ---

const SUBTEST_NAME = "Verbal Reasoning"
const TOTAL_QUESTIONS = 44
const TIME_LIMIT_SECONDS = 22 * 60 // 22 minutes

const dummyQuestions = [
  {
    passage: `When Sarah Chen installed her first beehive on a London rooftop in 2012, her neighbours were alarmed. Today, she manages over forty hives across the capital and trains hundreds of new beekeepers annually. Urban beekeeping has transformed from an eccentric hobby into a widespread movement, driven by concerns about declining bee populations and a growing interest in local food production.

The British Beekeepers Association reports that membership has tripled since 2008, with the sharpest increases in metropolitan areas. Cities, surprisingly, often provide better foraging conditions than the countryside. Urban gardens offer diverse flowering plants throughout the year, whereas rural monocultures may bloom for only a few weeks. Pesticide use is also typically lower in cities, reducing one major threat to bee health.

However, some experts warn that the enthusiasm may be counterproductive. Dr Marcus Webb, an entomologist at Imperial College London, argues that too many honeybees in urban areas could outcompete wild pollinators such as bumblebees and solitary bees. 'Honeybees are essentially livestock,' he explains. 'Keeping more of them doesn't necessarily help biodiversity.' His research suggests that in some London boroughs, honeybee density has reached levels that may stress local flower resources.

Chen acknowledges these concerns but believes education is the solution. Her organisation now emphasises habitat creation alongside beekeeping, encouraging participants to plant wildflower meadows and build insect hotels. 'The goal isn't just honey production,' she says. 'It's about reconnecting people with nature and understanding our role in the ecosystem.' Local councils have begun incorporating pollinator-friendly policies into urban planning, though funding remains inconsistent.`,
    question: "According to the passage, urban environments can benefit bees because:",
    options: [
      { label: "A", text: "there are fewer predators in cities than in rural areas." },
      { label: "B", text: "city gardens provide varied plants that flower at different times." },
      { label: "C", text: "urban beekeepers are more experienced than rural ones." },
      { label: "D", text: "local councils provide funding for beekeeping initiatives." },
    ],
  },
  {
    passage: `When Sarah Chen installed her first beehive on a London rooftop in 2012, her neighbours were alarmed. Today, she manages over forty hives across the capital and trains hundreds of new beekeepers annually. Urban beekeeping has transformed from an eccentric hobby into a widespread movement, driven by concerns about declining bee populations and a growing interest in local food production.

The British Beekeepers Association reports that membership has tripled since 2008, with the sharpest increases in metropolitan areas. Cities, surprisingly, often provide better foraging conditions than the countryside. Urban gardens offer diverse flowering plants throughout the year, whereas rural monocultures may bloom for only a few weeks. Pesticide use is also typically lower in cities, reducing one major threat to bee health.

However, some experts warn that the enthusiasm may be counterproductive. Dr Marcus Webb, an entomologist at Imperial College London, argues that too many honeybees in urban areas could outcompete wild pollinators such as bumblebees and solitary bees. 'Honeybees are essentially livestock,' he explains. 'Keeping more of them doesn't necessarily help biodiversity.' His research suggests that in some London boroughs, honeybee density has reached levels that may stress local flower resources.

Chen acknowledges these concerns but believes education is the solution. Her organisation now emphasises habitat creation alongside beekeeping, encouraging participants to plant wildflower meadows and build insect hotels. 'The goal isn't just honey production,' she says. 'It's about reconnecting people with nature and understanding our role in the ecosystem.' Local councils have begun incorporating pollinator-friendly policies into urban planning, though funding remains inconsistent.`,
    question: "Dr Marcus Webb's main concern about urban beekeeping is that it:",
    options: [
      { label: "A", text: "increases the risk of disease among honeybee colonies." },
      { label: "B", text: "may negatively affect wild pollinator species through competition." },
      { label: "C", text: "leads to overproduction of honey in urban markets." },
      { label: "D", text: "discourages people from supporting rural farming communities." },
    ],
  },
  {
    passage: `When Sarah Chen installed her first beehive on a London rooftop in 2012, her neighbours were alarmed. Today, she manages over forty hives across the capital and trains hundreds of new beekeepers annually. Urban beekeeping has transformed from an eccentric hobby into a widespread movement, driven by concerns about declining bee populations and a growing interest in local food production.

The British Beekeepers Association reports that membership has tripled since 2008, with the sharpest increases in metropolitan areas. Cities, surprisingly, often provide better foraging conditions than the countryside. Urban gardens offer diverse flowering plants throughout the year, whereas rural monocultures may bloom for only a few weeks. Pesticide use is also typically lower in cities, reducing one major threat to bee health.

However, some experts warn that the enthusiasm may be counterproductive. Dr Marcus Webb, an entomologist at Imperial College London, argues that too many honeybees in urban areas could outcompete wild pollinators such as bumblebees and solitary bees. 'Honeybees are essentially livestock,' he explains. 'Keeping more of them doesn't necessarily help biodiversity.' His research suggests that in some London boroughs, honeybee density has reached levels that may stress local flower resources.

Chen acknowledges these concerns but believes education is the solution. Her organisation now emphasises habitat creation alongside beekeeping, encouraging participants to plant wildflower meadows and build insect hotels. 'The goal isn't just honey production,' she says. 'It's about reconnecting people with nature and understanding our role in the ecosystem.' Local councils have begun incorporating pollinator-friendly policies into urban planning, though funding remains inconsistent.`,
    question: "Which of the following best describes Sarah Chen's response to criticism of urban beekeeping?",
    options: [
      { label: "A", text: "She dismisses the concerns as unfounded and based on limited evidence." },
      { label: "B", text: "She accepts the concerns and has shifted her focus to include broader ecological education." },
      { label: "C", text: "She argues that honeybee welfare should take priority over wild pollinators." },
      { label: "D", text: "She proposes reducing the number of hives in densely populated areas." },
    ],
  },
]

export default function PracticeInterfacePage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState<(string | null)[]>(
    Array(TOTAL_QUESTIONS).fill(null)
  )
  const [flaggedQuestions, setFlaggedQuestions] = useState<boolean[]>(
    Array(TOTAL_QUESTIONS).fill(false)
  )
  const [timeRemaining, setTimeRemaining] = useState(TIME_LIMIT_SECONDS)
  const [showNavigator, setShowNavigator] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)
  const [mobileTab, setMobileTab] = useState<"passage" | "question">("passage")

  // Timer countdown
  useEffect(() => {
    if (timeRemaining <= 0) return
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) return 0
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [timeRemaining])

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }, [])

  // Get the current question data (cycle through dummy data for demo)
  const currentData = dummyQuestions[currentQuestionIndex % dummyQuestions.length]

  const handleSelectOption = (label: string) => {
    setSelectedOptions((prev) => {
      const next = [...prev]
      next[currentQuestionIndex] = label
      return next
    })
  }

  const handleToggleFlag = () => {
    setFlaggedQuestions((prev) => {
      const next = [...prev]
      next[currentQuestionIndex] = !next[currentQuestionIndex]
      return next
    })
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    }
  }

  const handleMarkAndReview = () => {
    // Flag current question and advance
    setFlaggedQuestions((prev) => {
      const next = [...prev]
      next[currentQuestionIndex] = true
      return next
    })
    if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    }
  }

  const handleSelectQuestion = (index: number) => {
    setCurrentQuestionIndex(index)
    setShowNavigator(false)
  }

  const questionStatuses = selectedOptions.map((opt, i) => ({
    answered: opt !== null,
    flagged: flaggedQuestions[i],
  }))

  return (
    <div className="flex flex-col h-screen bg-gray-100 select-none">
      {/* Top header bar */}
      <PracticeHeader
        subtestName={SUBTEST_NAME}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={TOTAL_QUESTIONS}
        timeFormatted={formatTime(timeRemaining)}
      />

      {/* Toolbar row */}
      <PracticeToolbar
        isFlagged={flaggedQuestions[currentQuestionIndex]}
        onToggleFlag={handleToggleFlag}
        onToggleCalculator={() => setShowCalculator(!showCalculator)}
      />

      {/* Mobile tab switcher */}
      <MobileTabSwitcher activeTab={mobileTab} onTabChange={setMobileTab} />

      {/* Main content area */}
      {/* Desktop: side-by-side | Mobile: tabbed view */}
      <div className="flex flex-1 min-h-0">
        {/* Desktop always shows both panels */}
        <div className={`flex-1 ${mobileTab === "passage" ? "flex" : "hidden"} md:flex`}>
          <PassagePanel passage={currentData.passage} />
        </div>
        <div className={`flex-1 ${mobileTab === "question" ? "flex" : "hidden"} md:flex`}>
          <QuestionPanel
            questionText={currentData.question}
            options={currentData.options}
            selectedOption={selectedOptions[currentQuestionIndex]}
            onSelectOption={handleSelectOption}
          />
        </div>
      </div>

      {/* Bottom navigation bar */}
      <PracticeNavigation
        onPrevious={handlePrevious}
        onNext={handleNext}
        onMarkAndReview={handleMarkAndReview}
        onCancelTest={() => {
          if (window.confirm("Are you sure you want to cancel this test?")) {
            window.location.href = "/"
          }
        }}
        onOpenNavigator={() => setShowNavigator(true)}
        hasPrevious={currentQuestionIndex > 0}
        hasNext={currentQuestionIndex < TOTAL_QUESTIONS - 1}
      />

      {/* Question navigator modal */}
      {showNavigator && (
        <QuestionNavigator
          totalQuestions={TOTAL_QUESTIONS}
          currentQuestion={currentQuestionIndex + 1}
          questionStatuses={questionStatuses}
          onSelectQuestion={handleSelectQuestion}
          onClose={() => setShowNavigator(false)}
        />
      )}

      {/* Calculator placeholder modal */}
      {showCalculator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-xl w-72 p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-900">Calculator</h3>
              <button
                onClick={() => setShowCalculator(false)}
                className="text-gray-400 hover:text-gray-600 text-lg leading-none"
              >
                {"×"}
              </button>
            </div>
            <div className="text-center text-gray-500 text-sm py-8">
              Calculator functionality under development
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
