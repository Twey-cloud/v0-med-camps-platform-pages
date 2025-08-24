"use client"

import { memo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Play, CheckCircle, BookOpen } from "lucide-react"

interface ContentCardProps {
  title: string
  description: string
  duration?: string
  difficulty?: "Beginner" | "Intermediate" | "Advanced"
  progress?: number
  completed?: boolean
  type: "learning" | "practice" | "mock-interview"
  onStart: () => void
  onContinue?: () => void
}

const ContentCard = memo(
  ({
    title,
    description,
    duration,
    difficulty,
    progress = 0,
    completed = false,
    type,
    onStart,
    onContinue,
  }: ContentCardProps) => {
    const getTypeIcon = () => {
      switch (type) {
        case "learning":
          return <BookOpen className="h-4 w-4" />
        case "practice":
          return <Play className="h-4 w-4" />
        case "mock-interview":
          return <Clock className="h-4 w-4" />
      }
    }

    const getDifficultyColor = (level?: string) => {
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

    const getActionButton = () => {
      if (completed) {
        return (
          <Button onClick={onStart} variant="outline" className="w-full bg-transparent">
            <CheckCircle className="h-4 w-4 mr-2" />
            Review
          </Button>
        )
      }

      if (progress > 0 && onContinue) {
        return (
          <Button onClick={onContinue} className="w-full">
            Continue
          </Button>
        )
      }

      return (
        <Button onClick={onStart} className="w-full">
          {getTypeIcon()}
          <span className="ml-2">Start</span>
        </Button>
      )
    }

    return (
      <Card className="h-full flex flex-col">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg leading-tight">{title}</CardTitle>
            {difficulty && <Badge className={getDifficultyColor(difficulty)}>{difficulty}</Badge>}
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-between">
          <div className="space-y-3">
            {duration && (
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                {duration}
              </div>
            )}

            {progress > 0 && !completed && (
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="mt-4">{getActionButton()}</div>
        </CardContent>
      </Card>
    )
  },
)

ContentCard.displayName = "ContentCard"

export default ContentCard
