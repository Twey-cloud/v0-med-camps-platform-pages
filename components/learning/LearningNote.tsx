"use client"

import { memo, useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Play, Clock, ArrowLeft, ArrowRight } from "lucide-react"

interface LearningNoteProps {
  topicId: string
  title: string
  content: string
  videoUrl?: string
  estimatedTime: number
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  progress: number
  isCompleted: boolean
  onComplete: (topicId: string) => void
  onNavigateBack: () => void
  onNavigateNext?: () => void
  hasNext?: boolean
}

const LearningNote = memo<LearningNoteProps>(
  ({
    topicId,
    title,
    content,
    videoUrl,
    estimatedTime,
    difficulty,
    progress,
    isCompleted,
    onComplete,
    onNavigateBack,
    onNavigateNext,
    hasNext = false,
  }) => {
    const [videoWatched, setVideoWatched] = useState(false)
    const [contentRead, setContentRead] = useState(progress >= 100)

    const handleMarkComplete = useCallback(() => {
      if (!isCompleted) {
        onComplete(topicId)
        setContentRead(true)
      }
    }, [topicId, isCompleted, onComplete])

    const handleVideoComplete = useCallback(() => {
      setVideoWatched(true)
    }, [])

    const getDifficultyColor = (level: string) => {
      switch (level) {
        case "Beginner":
          return "bg-green-100 text-green-800"
        case "Intermediate":
          return "bg-yellow-100 text-yellow-800"
        case "Advanced":
          return "bg-red-100 text-red-800"
        default:
          return "bg-gray-100 text-gray-800"
      }
    }

    return (
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={onNavigateBack} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Learning
          </Button>

          <div className="flex items-center gap-4">
            <Badge className={getDifficultyColor(difficulty)}>{difficulty}</Badge>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="h-4 w-4" />
              {estimatedTime} min
            </div>
          </div>
        </div>

        {/* Progress */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </CardContent>
        </Card>

        {/* Main Content */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              {isCompleted && <CheckCircle className="h-6 w-6 text-green-600" />}
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Video Section */}
            {videoUrl && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Video Content</h3>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Play className="h-12 w-12 text-blue-600 mx-auto" />
                    <div>
                      <p className="font-medium">Video: {title}</p>
                      <p className="text-sm text-gray-600">Duration: {estimatedTime} minutes</p>
                    </div>
                    <Button onClick={handleVideoComplete} className="bg-blue-600 hover:bg-blue-700">
                      {videoWatched ? "Watch Again" : "Start Video"}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Text Content */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Learning Notes</h3>
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-6 border-t">
              <div className="flex items-center gap-4">
                {!isCompleted && (
                  <Button
                    onClick={handleMarkComplete}
                    className="bg-green-600 hover:bg-green-700"
                    disabled={isCompleted}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Mark as Complete
                  </Button>
                )}

                {isCompleted && (
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span className="font-medium">Completed</span>
                  </div>
                )}
              </div>

              {hasNext && onNavigateNext && (
                <Button onClick={onNavigateNext} variant="outline" className="flex items-center gap-2 bg-transparent">
                  Next Topic
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
)

LearningNote.displayName = "LearningNote"

export default LearningNote
