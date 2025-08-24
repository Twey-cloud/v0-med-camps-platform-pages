"use client"

import { memo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Edit, Trash2, ArrowLeft, Plus } from "lucide-react"

interface PracticeQuestion {
  id: string
  title: string
  category: string
  questionText: string
  markingCriteria: any
  status: "Active" | "Draft"
  criteriaCount: number
}

interface AdminPracticeManagementProps {
  categories: Array<{ id: string; name: string; questionCount: number; status: string }>
  onBack: () => void
}

const AdminPracticeManagement = memo(({ categories, onBack }: AdminPracticeManagementProps) => {
  const [currentView, setCurrentView] = useState<"categories" | "questions" | "edit">("categories")
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [selectedQuestion, setSelectedQuestion] = useState<PracticeQuestion | null>(null)
  const [editingQuestion, setEditingQuestion] = useState<PracticeQuestion | null>(null)

  // Mock practice questions data
  const practiceQuestions: PracticeQuestion[] = [
    {
      id: "1",
      title: "Valid Consent & Patient Autonomy",
      category: "Ethics",
      questionText: "A 16-year-old patient wants to start contraception but doesn't want their parents to know...",
      markingCriteria: {
        introduction: [
          "Introduces themselves professionally",
          "Confirms patient identity",
          "Explains purpose of consultation",
        ],
        mainContent: [
          "Demonstrates understanding of consent principles",
          "Addresses patient concerns appropriately",
          "Uses clear, non-medical language",
        ],
        conclusion: ["Summarizes key points", "Checks patient understanding", "Provides next steps"],
      },
      status: "Active",
      criteriaCount: 8,
    },
    {
      id: "2",
      title: "Healthcare Ethics & Dilemmas",
      category: "Ethics",
      questionText: "You witness a colleague making a medication error...",
      markingCriteria: {
        introduction: ["Professional introduction", "Situation assessment"],
        mainContent: ["Ethical reasoning", "Patient safety priority", "Professional duty"],
        conclusion: ["Action plan", "Follow-up steps"],
      },
      status: "Active",
      criteriaCount: 12,
    },
    {
      id: "3",
      title: "Communication Skills",
      category: "Communication",
      questionText: "Break bad news to a patient about their diagnosis...",
      markingCriteria: {
        introduction: ["Appropriate setting", "Professional manner"],
        mainContent: ["Clear communication", "Empathy shown", "Patient support"],
        conclusion: ["Summary provided", "Next steps clear"],
      },
      status: "Active",
      criteriaCount: 10,
    },
  ]

  const getQuestionsForCategory = (categoryName: string) => {
    return practiceQuestions.filter((q) => q.category === categoryName)
  }

  const handleViewQuestions = (categoryName: string) => {
    setSelectedCategory(categoryName)
    setCurrentView("questions")
  }

  const handleEditQuestion = (question: PracticeQuestion) => {
    setEditingQuestion({ ...question })
    setCurrentView("edit")
  }

  const handleSaveQuestion = () => {
    // In real implementation, this would call an API
    console.log("[v0] Saving question:", editingQuestion)
    setCurrentView("questions")
    setEditingQuestion(null)
  }

  const handleDeleteQuestion = (questionId: string) => {
    // In real implementation, this would call an API
    console.log("[v0] Deleting question:", questionId)
  }

  if (currentView === "edit" && editingQuestion) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => setCurrentView("questions")} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Questions
          </Button>
          <h2 className="text-2xl font-bold">Edit Practice Question</h2>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Question Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Question Title</label>
              <Input
                value={editingQuestion.title}
                onChange={(e) => setEditingQuestion({ ...editingQuestion, title: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Question Text/Scenario</label>
              <Textarea
                value={editingQuestion.questionText}
                onChange={(e) => setEditingQuestion({ ...editingQuestion, questionText: e.target.value })}
                rows={6}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Marking Criteria (JSON format)</label>
              <Textarea
                value={JSON.stringify(editingQuestion.markingCriteria, null, 2)}
                onChange={(e) => {
                  try {
                    const criteria = JSON.parse(e.target.value)
                    setEditingQuestion({ ...editingQuestion, markingCriteria: criteria })
                  } catch (error) {
                    // Handle JSON parsing error
                  }
                }}
                rows={12}
                className="font-mono text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Status</label>
              <Select
                value={editingQuestion.status}
                onValueChange={(value: "Active" | "Draft") => setEditingQuestion({ ...editingQuestion, status: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2 pt-4">
              <Button onClick={handleSaveQuestion}>Save Changes</Button>
              <Button variant="outline" onClick={() => setCurrentView("questions")}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (currentView === "questions") {
    const categoryQuestions = getQuestionsForCategory(selectedCategory)

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => setCurrentView("categories")} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Categories
            </Button>
            <h2 className="text-2xl font-bold">{selectedCategory} Questions</h2>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Question
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Questions in {selectedCategory}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryQuestions.map((question) => (
                <div key={question.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold">{question.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {question.category} • {question.criteriaCount} criteria points
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={question.status === "Active" ? "default" : "secondary"}>{question.status}</Badge>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleEditQuestion(question)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDeleteQuestion(question.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Admin
          </Button>
          <h2 className="text-2xl font-bold">Practice Question Categories</h2>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Practice Categories</CardTitle>
          <p className="text-sm text-gray-600">Level 0: Main subject categories (unified with learning)</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.questionCount} practice questions</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={category.status === "Active" ? "default" : "secondary"}>{category.status}</Badge>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleViewQuestions(category.name)}
                    className="flex items-center gap-2"
                  >
                    View Questions
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
})

AdminPracticeManagement.displayName = "AdminPracticeManagement"

export default AdminPracticeManagement
