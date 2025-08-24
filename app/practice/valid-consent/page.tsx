"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Clock, BookOpen } from "lucide-react"
import { Collapsible } from "@/components/ui/collapsible"
import QuestionInterface from "@/components/practice/QuestionInterface"
import SelfAssessment from "@/components/practice/SelfAssessment"
import AIFeedback from "@/components/practice/AIFeedback"
import { practiceSessionService } from "@/services/practiceSessionService"

export default function ValidConsentPractice() {
  const [sessionData, setSessionData] = useState(() => {
    try {
      return practiceSessionService.initializeSession({
        questionId: "valid-consent",
        category: "Medical Ethics",
        title: "Valid Consent",
        content:
          'Describe what makes consent "valid" in a medical context. Discuss the key components that healthcare professionals must ensure are present when obtaining consent from patients.',
      })
    } catch (error) {
      // Fallback data for build time
      return {
        sessionId: "fallback-session",
        questionId: "valid-consent",
        category: "Medical Ethics",
        title: "Valid Consent",
        question: {
          content: 'Describe what makes consent "valid" in a medical context.',
        },
        userAnswer: "",
        hasAnswer: false,
        timer: {
          minutes: 8,
          seconds: 0,
          isActive: false,
        },
        markingCriteria: {},
      }
    }
  })

  const [step1Open, setStep1Open] = useState(true)
  const [step2Open, setStep2Open] = useState(false)
  const [step3Open, setStep3Open] = useState(false)

  const handleAnswerSubmit = (answer: string) => {
    const updatedSession = practiceSessionService.submitAnswer(sessionData.sessionId, answer)
    setSessionData(updatedSession)
    setStep2Open(true)
  }

  const handleCriteriaChange = (section: string, criterion: string, checked: boolean) => {
    const updatedSession = practiceSessionService.updateMarkingCriteria(
      sessionData.sessionId,
      section,
      criterion,
      checked,
    )
    setSessionData(updatedSession)
  }

  const handleTimerUpdate = (minutes: number, seconds: number, isActive: boolean) => {
    try {
      const updatedSession = practiceSessionService.updateTimer(sessionData.sessionId, minutes, seconds, isActive)
      setSessionData(updatedSession)
    } catch (error) {
      console.error("[v0] Timer update failed:", error)
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="flex-1 flex">
        <div className="flex-1 p-8 pt-8 max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/practice" className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Questions
            </Link>
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
              {sessionData.category} - {sessionData.title}
            </Badge>
          </div>

          {/* Timer */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <span className="text-lg font-mono font-semibold">
                    {practiceSessionService.formatTime(
                      sessionData.timer?.minutes || 8,
                      sessionData.timer?.seconds || 0,
                    )}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      handleTimerUpdate(
                        sessionData.timer?.minutes || 8,
                        sessionData.timer?.seconds || 0,
                        !(sessionData.timer?.isActive || false),
                      )
                    }
                  >
                    {sessionData.timer?.isActive ? "Pause" : "Start"}
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleTimerUpdate(8, 0, false)}>
                    Reset
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 1: Question Interface */}
          <Collapsible open={step1Open} onOpenChange={setStep1Open}>
            <QuestionInterface
              question={sessionData.question}
              userAnswer={sessionData.userAnswer}
              onAnswerSubmit={handleAnswerSubmit}
              hasAnswer={sessionData.hasAnswer}
            />
          </Collapsible>

          {/* Step 2: Self-Assessment */}
          <SelfAssessment
            isOpen={step2Open}
            onOpenChange={setStep2Open}
            markingCriteria={sessionData.markingCriteria}
            onCriteriaChange={handleCriteriaChange}
          />

          {/* Step 3: AI Feedback */}
          <AIFeedback
            isOpen={step3Open}
            onOpenChange={setStep3Open}
            userAnswer={sessionData.userAnswer}
            hasAnswer={sessionData.hasAnswer}
            markingCriteria={sessionData.markingCriteria}
          />
        </div>

        {/* Learning Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <BookOpen className="h-5 w-5 text-blue-600" />
            <h3 className="font-semibold">Learning Resources</h3>
          </div>

          <div className="space-y-4">
            {(practiceSessionService.getLearningResources(sessionData.category) || []).map((resource, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-sm mb-2">{resource.title}</h4>
                <p className="text-xs text-gray-600 mb-2">{resource.description}</p>
                <Button variant="link" className="text-blue-400 hover:text-blue-500 p-0 h-auto text-xs">
                  Read More →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
