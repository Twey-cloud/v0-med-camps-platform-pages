"use client"

import { useState } from "react"
import { Mic, MicOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"

interface Station {
  id: number
  title: string
  scenario: string
  category: string
  markingCriteria: Record<string, string[]>
}

interface InterviewStationProps {
  station: Station
  currentStation: number
  totalStations: number
  timeRemaining: number
  timerState: "running" | "paused" | "finished"
  formatTime: (time: number) => string
  response: string
  onResponseChange: (value: string) => void
  onStationComplete: () => void
  isLastStation: boolean
}

export const InterviewStation = ({
  station,
  currentStation,
  totalStations,
  timeRemaining,
  timerState,
  formatTime,
  response,
  onResponseChange,
  onStationComplete,
  isLastStation,
}: InterviewStationProps) => {
  const [isRecording, setIsRecording] = useState(false)
  const [inputMethod, setInputMethod] = useState<"voice" | "type">("voice")

  const toggleRecording = () => {
    setIsRecording(!isRecording)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pt-8 pb-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            Station {currentStation + 1} of {totalStations}
          </Badge>
          <Badge variant="outline" className="ml-2">
            {station.category}
          </Badge>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold text-blue-600">{formatTime(timeRemaining)}</div>
          {timerState === "finished" && <Badge variant="destructive">Time's Up!</Badge>}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{station.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <Badge className="bg-blue-400 text-white mb-2">Scenario</Badge>
                <p className="text-gray-800">{station.scenario}</p>
              </div>

              <div className="space-y-4">
                <div className="flex space-x-2">
                  <Button
                    variant={inputMethod === "voice" ? "default" : "outline"}
                    onClick={() => setInputMethod("voice")}
                    className={inputMethod === "voice" ? "bg-blue-400 hover:bg-blue-500" : ""}
                  >
                    <Mic className="h-4 w-4 mr-2" />
                    Voice Response
                  </Button>
                  <Button
                    variant={inputMethod === "type" ? "default" : "outline"}
                    onClick={() => setInputMethod("type")}
                    className={inputMethod === "type" ? "bg-blue-400 hover:bg-blue-500" : ""}
                  >
                    Type Response
                  </Button>
                </div>

                {inputMethod === "voice" ? (
                  <div className="text-center space-y-4">
                    <button
                      onClick={toggleRecording}
                      className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
                        isRecording ? "bg-red-500 hover:bg-red-600 animate-pulse" : "bg-blue-400 hover:bg-blue-500"
                      }`}
                    >
                      {isRecording ? <MicOff className="h-8 w-8 text-white" /> : <Mic className="h-8 w-8 text-white" />}
                    </button>
                    <p className="text-gray-600">
                      {isRecording ? "Recording... Click to stop" : "Click to start recording"}
                    </p>
                    {response && (
                      <div className="bg-gray-50 p-3 rounded-lg text-left">
                        <p className="text-sm text-gray-600 mb-1">Transcription:</p>
                        <p className="text-gray-800">{response}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <Textarea
                    placeholder="Type your response here..."
                    value={response}
                    onChange={(e) => onResponseChange(e.target.value)}
                    className="min-h-32"
                  />
                )}
              </div>

              <div className="flex space-x-3">
                <Button
                  onClick={onStationComplete}
                  className="bg-blue-400 hover:bg-blue-500"
                  disabled={!response && !isRecording}
                >
                  {isLastStation ? "Complete Mock Interview" : "Next Station"}
                </Button>
                {timerState === "finished" && (
                  <Button
                    onClick={onStationComplete}
                    variant="outline"
                    className="border-orange-400 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    Time's Up - Continue
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={(currentStation / totalStations) * 100} className="mb-2" />
              <p className="text-sm text-gray-600">
                Station {currentStation + 1} of {totalStations}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
