"use client"

import { useState } from "react"
import { CheckCircle, ChevronRight, ChevronDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface MarkingCriteria {
  [category: string]: string[]
}

interface Station {
  id: number
  title: string
  scenario: string
  category: string
  markingCriteria: MarkingCriteria
}

interface AssessmentPanelProps {
  station: Station
  stationIndex: number
  response: string
  onScoreUpdate?: (stationIndex: number, score: number) => void
}

export function AssessmentPanel({ station, stationIndex, response, onScoreUpdate }: AssessmentPanelProps) {
  const [expandedCriteria, setExpandedCriteria] = useState(false)
  const [checkedCriteria, setCheckedCriteria] = useState<{ [key: string]: boolean }>({})

  const totalCriteria = Object.values(station.markingCriteria).flat().length
  const checkedCount = Object.values(checkedCriteria).filter(Boolean).length
  const currentScore = Math.round((checkedCount / totalCriteria) * 100)

  const handleCriteriaToggle = (criteriaKey: string) => {
    const newCheckedCriteria = {
      ...checkedCriteria,
      [criteriaKey]: !checkedCriteria[criteriaKey],
    }
    setCheckedCriteria(newCheckedCriteria)

    const newCheckedCount = Object.values(newCheckedCriteria).filter(Boolean).length
    const newScore = Math.round((newCheckedCount / totalCriteria) * 100)
    onScoreUpdate?.(stationIndex, newScore)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">
            Station {stationIndex + 1}: {station.title}
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">{station.category}</Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              {currentScore}%
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Your Response:</p>
          <p className="text-gray-800">{response || "No response recorded"}</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
          <h4 className="font-semibold text-blue-900 mb-2">AI Feedback</h4>
          <div className="space-y-2 text-blue-800">
            <p>
              <strong>Strengths:</strong> Good understanding of ethical principles, clear communication structure.
            </p>
            <p>
              <strong>Areas for improvement:</strong> Could have explored alternative perspectives more thoroughly.
            </p>
          </div>
        </div>

        <div className="border rounded-lg">
          <button
            onClick={() => setExpandedCriteria(!expandedCriteria)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <span className="font-medium">Review Marking Criteria</span>
            </div>
            {expandedCriteria ? (
              <ChevronDown className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronRight className="h-5 w-5 text-gray-400" />
            )}
          </button>

          {expandedCriteria && (
            <div className="border-t p-4 space-y-4">
              {Object.entries(station.markingCriteria).map(([category, criteria]) => (
                <div key={category} className="space-y-2">
                  <h5 className="font-semibold text-gray-900 bg-gray-800 text-white px-3 py-2 rounded">{category}</h5>
                  <div className="space-y-2 pl-2">
                    {criteria.map((criterion, index) => {
                      const criteriaKey = `${category}-${index}`
                      return (
                        <label
                          key={index}
                          className="flex items-start space-x-3 p-2 rounded hover:bg-gray-50 cursor-pointer"
                          onClick={() => handleCriteriaToggle(criteriaKey)}
                        >
                          <input
                            type="checkbox"
                            checked={checkedCriteria[criteriaKey] || false}
                            onChange={() => handleCriteriaToggle(criteriaKey)}
                            className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300"
                          />
                          <span className="text-sm text-gray-700 leading-relaxed">{criterion}</span>
                        </label>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Current Score:</strong> {currentScore}% ({checkedCount} / {totalCriteria} criteria met)
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
