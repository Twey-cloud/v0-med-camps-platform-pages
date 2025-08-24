"use client"

import { memo } from "react"
import { Play, BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AssessmentPanel } from "./AssessmentPanel"

interface Station {
  id: number
  title: string
  scenario: string
  category: string
  markingCriteria: Record<string, string[]>
}

interface ReviewScreenProps {
  stations: Station[]
  responses: string[]
  stationScores: number[]
  onScoreUpdate: (stationIndex: number, score: number) => void
}

export const ReviewScreen = memo<ReviewScreenProps>(({ stations, responses, stationScores, onScoreUpdate }) => {
  const overallScore = Math.round(stationScores.reduce((acc, score) => acc + score, 0) / stationScores.length)

  return (
    <div className="max-w-6xl mx-auto px-6 pt-8 pb-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mock Interview Complete!</h1>
        <p className="text-gray-600">Review your performance and get AI-powered feedback</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {stations.map((station, index) => (
            <AssessmentPanel
              key={station.id}
              station={station}
              stationIndex={index}
              response={responses[index]}
              onScoreUpdate={onScoreUpdate}
            />
          ))}

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Overall Mock Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Overall Performance: {overallScore}%</h4>
                  <p className="text-green-800">
                    Strong performance overall with good ethical reasoning and communication skills. Focus on exploring
                    multiple perspectives and providing more specific examples.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Key Recommendations:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Practice structuring responses using frameworks (e.g., SPIKES for breaking bad news)</li>
                    <li>• Develop more detailed examples from personal experience</li>
                    <li>• Work on time management - some responses were rushed</li>
                    <li>• Continue developing empathy and active listening skills</li>
                  </ul>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg text-center">
                  <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center mb-4">
                    <Play className="h-12 w-12 text-gray-400" />
                  </div>
                  <h4 className="font-semibold mb-2">Personal Feedback Video</h4>
                  <p className="text-gray-600 text-sm">Watch this personalized video feedback from our expert</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Further Reading</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <a href="#" className="flex items-center text-blue-600 hover:text-blue-700 text-sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Medical Ethics Guidelines
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                <a href="#" className="flex items-center text-blue-600 hover:text-blue-700 text-sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Communication Skills in Healthcare
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                <a href="#" className="flex items-center text-blue-600 hover:text-blue-700 text-sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Teamwork in Medical Settings
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Next Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/mock-interview" className="block">
                <Button variant="outline" className="w-full bg-transparent">
                  Try Another Mock
                </Button>
              </Link>
              <Link href="/practice" className="block">
                <Button variant="outline" className="w-full bg-transparent">
                  Practice Individual Skills
                </Button>
              </Link>
              <Link href="/learning" className="block">
                <Button variant="outline" className="w-full bg-transparent">
                  Study Resources
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
})

ReviewScreen.displayName = "ReviewScreen"
