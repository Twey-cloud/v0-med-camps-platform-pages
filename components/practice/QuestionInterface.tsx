"use client"

import { memo, useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Play, Pause, RotateCcw } from "lucide-react"
import { useTimer } from "@/hooks/useTimer"

interface QuestionInterfaceProps {
  question: {
    id: string
    title: string
    scenario: string
    timeLimit?: number
  }
  onSubmitResponse: (response: string) => void
  onTimeUp?: () => void
}

const QuestionInterface = memo(({ question, onSubmitResponse, onTimeUp }: QuestionInterfaceProps) => {
  const [response, setResponse] = useState("")
  const [isStarted, setIsStarted] = useState(false)

  const { timeLeft, isRunning, start, pause, reset } = useTimer({
    initialTime: question.timeLimit || 600, // Default 10 minutes
    onTimeUp: useCallback(() => {
      onTimeUp?.()
      handleSubmit()
    }, [onTimeUp]),
  })

  const handleStart = useCallback(() => {
    setIsStarted(true)
    start()
  }, [start])

  const handleSubmit = useCallback(() => {
    onSubmitResponse(response)
  }, [response, onSubmitResponse])

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }, [])

  if (!isStarted) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            {question.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed">{question.scenario}</p>
          </div>

          {question.timeLimit && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Time Limit:</strong> {Math.floor(question.timeLimit / 60)} minutes
              </p>
            </div>
          )}

          <Button onClick={handleStart} className="w-full" size="lg">
            <Play className="h-4 w-4 mr-2" />
            Start Question
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{question.title}</CardTitle>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className={`font-mono ${timeLeft < 60 ? "text-red-600" : "text-gray-600"}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={isRunning ? pause : start}>
                {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button variant="outline" size="sm" onClick={reset}>
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="prose max-w-none">
          <p className="text-gray-600 leading-relaxed">{question.scenario}</p>
        </div>

        <div className="space-y-4">
          <label htmlFor="response" className="block text-sm font-medium text-gray-700">
            Your Response
          </label>
          <Textarea
            id="response"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Type your response here..."
            className="min-h-[200px] resize-y"
          />
        </div>

        <Button onClick={handleSubmit} className="w-full" size="lg" disabled={!response.trim()}>
          Submit Response
        </Button>
      </CardContent>
    </Card>
  )
})

QuestionInterface.displayName = "QuestionInterface"

export default QuestionInterface
