"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTimer } from "@/hooks/useTimer"
import { InstructionsScreen } from "@/components/mock-interview/InstructionsScreen"
import { SetupScreen } from "@/components/mock-interview/SetupScreen"
import { InterviewStation } from "@/components/mock-interview/InterviewStation"
import { ReviewScreen } from "@/components/mock-interview/ReviewScreen"
import { mockInterviewService } from "@/services/mockInterviewService"

const MMI_STATIONS = mockInterviewService.getStations()

type MockStage = "instructions" | "setup" | "station" | "break" | "review"

export default function Mock1Page() {
  const [stage, setStage] = useState<MockStage>("instructions")
  const [currentStation, setCurrentStation] = useState(0)
  const [timePerQuestion, setTimePerQuestion] = useState(5)

  const { timeRemaining, timerState, formatTime, startTimer } = useTimer()

  const handleStartMock = () => {
    mockInterviewService.initializeSession()
    setStage("setup")
  }

  const handleSetupComplete = () => {
    mockInterviewService.startInterview(timePerQuestion)
    setStage("station")
    startTimer(timePerQuestion)
  }

  const handleStationComplete = () => {
    mockInterviewService.completeStation(currentStation)

    if (currentStation < MMI_STATIONS.length - 1) {
      setStage("break")
      startTimer(1)
    } else {
      setStage("review")
    }
  }

  const handleBreakComplete = () => {
    setCurrentStation((prev) => prev + 1)
    setStage("station")
    startTimer(timePerQuestion)
  }

  const handleResponseChange = (value: string) => {
    mockInterviewService.updateResponse(currentStation, value)
  }

  const handleScoreUpdate = (stationIndex: number, score: number) => {
    mockInterviewService.updateStationScore(stationIndex, score)
  }

  if (stage === "instructions") {
    return <InstructionsScreen onStartMock={handleStartMock} />
  }

  if (stage === "setup") {
    return (
      <SetupScreen
        timePerQuestion={timePerQuestion}
        onTimeChange={setTimePerQuestion}
        onSetupComplete={handleSetupComplete}
      />
    )
  }

  if (stage === "station") {
    const station = MMI_STATIONS[currentStation]
    return (
      <InterviewStation
        station={station}
        currentStation={currentStation}
        totalStations={MMI_STATIONS.length}
        timeRemaining={timeRemaining}
        timerState={timerState}
        formatTime={formatTime}
        response={mockInterviewService.getResponse(currentStation)}
        onResponseChange={handleResponseChange}
        onStationComplete={handleStationComplete}
        isLastStation={currentStation === MMI_STATIONS.length - 1}
      />
    )
  }

  if (stage === "break") {
    return (
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Break Time</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="text-6xl font-bold text-blue-400">{formatTime(timeRemaining)}</div>
            <p className="text-gray-600">Take a moment to relax before the next station</p>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-800">
                <strong>Station {currentStation + 1} completed!</strong>
                <br />
                Next up: Station {currentStation + 2} - {MMI_STATIONS[currentStation + 1]?.category}
              </p>
            </div>
            {timerState === "finished" && (
              <Button onClick={handleBreakComplete} className="bg-blue-400 hover:bg-blue-500">
                Continue to Next Station
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  if (stage === "review") {
    return (
      <ReviewScreen
        stations={MMI_STATIONS}
        responses={mockInterviewService.getAllResponses()}
        stationScores={mockInterviewService.getAllScores()}
        onScoreUpdate={handleScoreUpdate}
      />
    )
  }

  return null
}
