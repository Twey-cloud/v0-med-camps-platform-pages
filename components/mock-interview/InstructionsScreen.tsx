"use client"

import { CheckCircle, Clock, RotateCcw, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface InstructionsScreenProps {
  onStartMock: () => void
}

export const InstructionsScreen = ({ onStartMock }: InstructionsScreenProps) => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-8 pb-8">
      <div className="mb-6">
        <Link href="/mock-interview" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
          <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Mock Interviews
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">MMI Mock Interview 1 - Instructions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Welcome to your MMI Mock Interview</h3>
            <p className="text-blue-800">
              This mock interview consists of 7 stations, each designed to assess different competencies required for
              medical school.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">What to expect:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>7 MMI Stations:</strong> Each focusing on different competencies (ethics, communication,
                  teamwork, etc.)
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Timed Responses:</strong> You'll have a set time limit for each station
                </span>
              </li>
              <li className="flex items-start">
                <RotateCcw className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Break Between Stations:</strong> 1-minute break between each station
                </span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>AI Feedback:</strong> Receive detailed feedback on each response at the end
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-900 mb-2">Tips for Success:</h4>
            <ul className="text-yellow-800 space-y-1">
              <li>• Think out loud - explain your reasoning</li>
              <li>• Consider multiple perspectives</li>
              <li>• Be honest about limitations</li>
              <li>• Show empathy and professionalism</li>
            </ul>
          </div>

          <Button onClick={onStartMock} className="w-full bg-blue-400 hover:bg-blue-500">
            Begin Mock Interview
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
