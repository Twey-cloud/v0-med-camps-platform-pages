"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, ChevronDown, ChevronRight } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface MarkingCriteria {
  [section: string]: {
    [criterion: string]: boolean
  }
}

interface SelfAssessmentProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  markingCriteria: MarkingCriteria
  onCriteriaChange: (section: string, criterion: string, checked: boolean) => void
  sectionTitles?: {
    [key: string]: string
  }
}

export default function SelfAssessment({
  isOpen,
  onOpenChange,
  markingCriteria,
  onCriteriaChange,
  sectionTitles = {},
}: SelfAssessmentProps) {
  const calculateScore = () => {
    const allCriteria = Object.values(markingCriteria).flatMap((section) => Object.values(section))
    const checkedCriteria = allCriteria.filter(Boolean).length
    return Math.round((checkedCriteria / allCriteria.length) * 100)
  }

  const defaultSectionTitles: { [key: string]: string } = {
    introduction: "Opening the consultation",
    middle: "Main content delivery",
    end: "Conclusion and professionalism",
    ...sectionTitles,
  }

  return (
    <Collapsible open={isOpen} onOpenChange={onOpenChange}>
      <Card className="mb-4">
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-lg">Step 2: Self-Assessment</CardTitle>
              </div>
              {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="pt-0">
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">Marking Criteria</h4>
                <div className="flex items-center space-x-2">
                  <Progress value={calculateScore()} className="w-32" />
                  <span className="text-sm font-medium">{calculateScore()}%</span>
                </div>
              </div>

              {Object.entries(markingCriteria).map(([sectionKey, criteria]) => (
                <div key={sectionKey} className="space-y-4">
                  <div className="bg-gray-800 text-white px-4 py-2 rounded font-medium">
                    {defaultSectionTitles[sectionKey] || sectionKey}
                  </div>
                  {Object.entries(criteria).map(([criterion, checked]) => (
                    <div
                      key={criterion}
                      className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Checkbox
                        checked={checked}
                        onCheckedChange={(checked) => onCriteriaChange(sectionKey, criterion, checked as boolean)}
                        className="mt-1"
                      />
                      <label
                        className="text-base cursor-pointer flex-1 leading-relaxed"
                        onClick={() => onCriteriaChange(sectionKey, criterion, !checked)}
                      >
                        {criterion}
                      </label>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  )
}
