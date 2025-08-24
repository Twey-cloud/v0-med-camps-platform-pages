"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface SetupScreenProps {
  timePerQuestion: number
  onTimeChange: (time: number) => void
  onSetupComplete: () => void
}

export const SetupScreen = ({ timePerQuestion, onTimeChange, onSetupComplete }: SetupScreenProps) => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-8 pb-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Setup Your Mock Interview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time per question (minutes)</label>
            <Input
              type="number"
              value={timePerQuestion}
              onChange={(e) => onTimeChange(Number(e.target.value))}
              min="1"
              max="15"
              className="w-32"
            />
            <p className="text-sm text-gray-600 mt-2">
              <strong>Note:</strong> Check with your medical school for their specific time requirements. We recommend 5
              minutes as a default if not specified.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Your Mock Interview Setup:</h4>
            <ul className="text-blue-800 space-y-1">
              <li>
                • <strong>Stations:</strong> 7 MMI stations
              </li>
              <li>
                • <strong>Time per station:</strong> {timePerQuestion} minutes
              </li>
              <li>
                • <strong>Break time:</strong> 1 minute between stations
              </li>
              <li>
                • <strong>Total time:</strong> ~{timePerQuestion * 7 + 6} minutes
              </li>
            </ul>
          </div>

          <Button onClick={onSetupComplete} className="w-full bg-blue-400 hover:bg-blue-500">
            Start Mock Interview
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
