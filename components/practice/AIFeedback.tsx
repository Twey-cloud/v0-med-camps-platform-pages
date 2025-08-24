"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Brain, ChevronDown, ChevronRight, Loader2 } from "lucide-react"

interface AIFeedbackProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  userAnswer: string
  hasAnswer: boolean
  markingCriteria?: Record<string, Record<string, boolean>>
}

export default function AIFeedback({ isOpen, onOpenChange, userAnswer, hasAnswer, markingCriteria }: AIFeedbackProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [feedback, setFeedback] = useState<{
    strengths: string
    improvements: string
    overall: string
    score?: number
  } | null>(null)

  const generateFeedback = async () => {
    setIsLoading(true)

    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock AI feedback generation
    const mockFeedback = {
      strengths:
        "Clear explanation of the four pillars of consent, good use of medical terminology, professional delivery.",
      improvements:
        "Could have provided more specific examples, consider discussing special circumstances like emergency consent.",
      overall:
        "A solid response that demonstrates good understanding of valid consent principles. Your explanation was well-structured and covered the key components effectively.",
      score: 78,
    }

    setFeedback(mockFeedback)
    setIsLoading(false)
    onOpenChange(true)
  }

  return (
    <Collapsible open={isOpen} onOpenChange={onOpenChange}>
      <Card className="mb-4">
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Brain className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-lg">Step 3: AI Feedback</CardTitle>
              </div>
              {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="pt-0">
            <div className="space-y-4">
              <p className="text-gray-600 text-sm">
                Get instant AI-powered feedback on your response. The AI will analyze your answer and automatically mark
                against the criteria above.
              </p>

              <Button
                onClick={generateFeedback}
                disabled={!hasAnswer || isLoading}
                className="bg-gray-800 hover:bg-gray-700 text-white"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Brain className="h-4 w-4 mr-2" />
                    Get AI Feedback
                  </>
                )}
              </Button>

              {feedback && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="font-medium text-gray-800">AI Assessment</h5>
                    {feedback.score && (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">AI Score:</span>
                        <span
                          className={`font-semibold ${
                            feedback.score >= 80
                              ? "text-green-600"
                              : feedback.score >= 60
                                ? "text-yellow-600"
                                : "text-red-600"
                          }`}
                        >
                          {feedback.score}%
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-green-700">Strengths:</strong>
                      <p className="mt-1 text-gray-700">{feedback.strengths}</p>
                    </div>
                    <div>
                      <strong className="text-amber-700">Areas for improvement:</strong>
                      <p className="mt-1 text-gray-700">{feedback.improvements}</p>
                    </div>
                    <div>
                      <strong className="text-blue-700">Overall feedback:</strong>
                      <p className="mt-1 text-gray-700">{feedback.overall}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  )
}
