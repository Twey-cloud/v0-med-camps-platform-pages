"use client"

import { useState } from "react"
import { Plus, Edit, Trash2, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface MockInterview {
  id: number
  title: string
  stations: number
  status: string
  description: string
}

interface MockCategory {
  id: number
  categoryId: number
  name: string
  description: string
  questionCount: number
  status: string
}

interface MockQuestion {
  id: number
  title: string
  status: string
  hasContent: boolean
}

interface MockQuestionDetails {
  title: string
  questionText: string
  markingCriteria: Record<string, string[]>
  status: string
}

interface AdminMockInterviewManagementProps {
  unifiedCategories: Array<{
    id: number
    name: string
    description: string
    status: string
  }>
  onCreateMockInterview: () => void
  onCreateMockQuestion: () => void
}

const AdminMockInterviewManagement = ({
  unifiedCategories,
  onCreateMockInterview,
  onCreateMockQuestion,
}: AdminMockInterviewManagementProps) => {
  const [mockView, setMockView] = useState("interviews")
  const [selectedMockInterview, setSelectedMockInterview] = useState<MockInterview | null>(null)
  const [selectedMockCategory, setSelectedMockCategory] = useState<MockCategory | null>(null)
  const [selectedMockQuestion, setSelectedMockQuestion] = useState<MockQuestion | null>(null)
  const [editMode, setEditMode] = useState(false)

  // Mock data - in real app, this would come from props or API
  const mockInterviews: MockInterview[] = [
    {
      id: 1,
      title: "Mock Interview 1",
      stations: 7,
      status: "Active",
      description: "Comprehensive MMI assessment covering all competencies",
    },
    {
      id: 2,
      title: "Mock Interview 2",
      stations: 7,
      status: "Draft",
      description: "Advanced scenarios for experienced candidates",
    },
    {
      id: 3,
      title: "Mock Interview 3",
      stations: 7,
      status: "Draft",
      description: "Specialized scenarios for specific medical schools",
    },
  ]

  const mockCategoriesByInterview: Record<number, MockCategory[]> = {
    1: [
      {
        id: 1,
        categoryId: 3,
        name: "Ethics",
        description: "Medical ethics and professional conduct",
        questionCount: 3,
        status: "Active",
      },
      {
        id: 2,
        categoryId: 2,
        name: "Communication",
        description: "Essential communication skills for healthcare",
        questionCount: 2,
        status: "Active",
      },
      {
        id: 3,
        categoryId: 5,
        name: "Problem Solving",
        description: "Clinical problem-solving scenarios",
        questionCount: 2,
        status: "Active",
      },
    ],
  }

  const mockQuestionsByCategory: Record<number, MockQuestion[]> = {
    1: [
      { id: 1, title: "Informed Consent in Emergency", status: "Active", hasContent: true },
      { id: 2, title: "Resource Allocation During Crisis", status: "Active", hasContent: true },
      { id: 3, title: "Confidentiality vs Public Safety", status: "Draft", hasContent: false },
    ],
    2: [
      { id: 4, title: "Delivering Unexpected Diagnosis", status: "Active", hasContent: true },
      { id: 5, title: "Managing Aggressive Relatives", status: "Active", hasContent: true },
    ],
  }

  const mockQuestionDetails: Record<number, MockQuestionDetails> = {
    1: {
      title: "Informed Consent in Emergency",
      questionText:
        "You are working in A&E when an unconscious patient is brought in following a car accident. They require immediate surgery, but you discover they are a Jehovah's Witness and may refuse blood transfusions. Their family is present but divided on what to do. How would you handle this situation?",
      markingCriteria: {
        "Assessment of Situation": [
          "Recognizes urgency of medical situation",
          "Identifies key ethical principles at stake",
          "Considers legal framework for emergency treatment",
        ],
        "Communication with Family": [
          "Explains medical situation clearly and sensitively",
          "Listens to family concerns and religious beliefs",
          "Explores patient's previously expressed wishes",
        ],
        "Ethical Decision Making": [
          "Balances patient autonomy with duty of care",
          "Considers best interests of unconscious patient",
          "Seeks appropriate consultation when needed",
        ],
        "Professional Conduct": [
          "Maintains respect for religious beliefs",
          "Documents decisions appropriately",
          "Follows institutional protocols",
        ],
      },
      status: "Active",
    },
  }

  if (mockView === "interviews") {
    return (
      <>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Mock Interview Sets</h2>
          <Button className="bg-blue-500 hover:bg-blue-600" onClick={onCreateMockInterview}>
            <Plus className="h-4 w-4 mr-2" />
            New Mock Interview
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Manage Mock Interview Sets</CardTitle>
            <CardDescription>Level 0: Mock interview collections (Mock 1, Mock 2, etc.)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockInterviews.map((mock) => (
                <div key={mock.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex-1">
                    <h3 className="font-medium">{mock.title}</h3>
                    <p className="text-sm text-gray-600">{mock.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{mock.stations} stations total</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        mock.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {mock.status}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedMockInterview(mock)
                        setMockView("categories")
                      }}
                    >
                      Manage Stations
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </>
    )
  }

  if (mockView === "categories") {
    return (
      <>
        <div className="flex items-center justify-between mb-6">
          <div>
            <Button variant="outline" onClick={() => setMockView("interviews")} className="mb-2">
              ← Back to Mock Interviews
            </Button>
            <h2 className="text-2xl font-bold">{selectedMockInterview?.title} - Categories</h2>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Select Category for {selectedMockInterview?.title}</CardTitle>
            <CardDescription>
              Level 1: Choose from unified categories to create mock interview questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {unifiedCategories.map((category) => {
                const mockCategory = mockCategoriesByInterview[selectedMockInterview?.id || 0]?.find(
                  (mc) => mc.categoryId === category.id,
                )
                const questionCount = mockCategory?.questionCount || 0

                return (
                  <div
                    key={category.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium">{category.name}</h3>
                      <p className="text-sm text-gray-600">{category.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{questionCount} mock questions</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          category.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {category.status}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedMockCategory({ ...mockCategory, ...category, questionCount } as MockCategory)
                          setMockView("questions")
                        }}
                      >
                        {questionCount > 0 ? "View Questions" : "Create Questions"}
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </>
    )
  }

  if (mockView === "questions") {
    const questions = mockQuestionsByCategory[selectedMockCategory?.id || 0] || []
    return (
      <>
        <div className="flex items-center justify-between mb-6">
          <div>
            <Button variant="outline" onClick={() => setMockView("categories")} className="mb-2">
              ← Back to Categories
            </Button>
            <h2 className="text-2xl font-bold">{selectedMockCategory?.name} Questions</h2>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600" onClick={onCreateMockQuestion}>
            <Plus className="h-4 w-4 mr-2" />
            New Question
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Questions in {selectedMockCategory?.name}</CardTitle>
            <CardDescription>Level 2: Individual question titles within this category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {questions.map((question) => (
                <div
                  key={question.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-1">
                    <h3 className="font-medium">{question.title}</h3>
                    <p className="text-sm text-gray-600">
                      {question.hasContent ? "Question text and criteria available" : "No content yet"}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        question.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {question.status}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedMockQuestion(question)
                        setMockView("details")
                      }}
                    >
                      Edit Details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </>
    )
  }

  if (mockView === "details") {
    const questionDetails = mockQuestionDetails[selectedMockQuestion?.id || 0]
    return (
      <>
        <div className="flex items-center justify-between mb-6">
          <div>
            <Button variant="outline" onClick={() => setMockView("questions")} className="mb-2">
              ← Back to Questions
            </Button>
            <h2 className="text-2xl font-bold">Edit: {selectedMockQuestion?.title}</h2>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={() => setEditMode(!editMode)}>
              {editMode ? "Cancel" : "Edit"}
            </Button>
            {editMode && <Button className="bg-blue-500 hover:bg-blue-600">Save Changes</Button>}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Mock Interview Question Details</CardTitle>
            <CardDescription>Level 3: Question text, marking criteria, and station configuration</CardDescription>
          </CardHeader>
          <CardContent>
            {editMode ? (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="questionTitle">Question Title</Label>
                  <Input id="questionTitle" defaultValue={selectedMockQuestion?.title} />
                </div>
                <div>
                  <Label htmlFor="questionText">Question Text/Scenario</Label>
                  <Textarea id="questionText" className="min-h-32" defaultValue={questionDetails?.questionText} />
                </div>
                <div>
                  <Label htmlFor="mockMarkingCriteria">Marking Criteria (JSON format)</Label>
                  <Textarea
                    id="mockMarkingCriteria"
                    className="min-h-64"
                    defaultValue={JSON.stringify(questionDetails?.markingCriteria, null, 2)}
                  />
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue={selectedMockQuestion?.status?.toLowerCase()}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Question Scenario</h3>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">{questionDetails?.questionText}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Marking Criteria</h3>
                  <div className="space-y-4">
                    {questionDetails?.markingCriteria &&
                      Object.entries(questionDetails.markingCriteria).map(([section, criteria]) => (
                        <div key={section} className="border rounded-lg p-4">
                          <h4 className="font-medium mb-2 bg-gray-800 text-white px-3 py-1 rounded text-sm inline-block">
                            {section}
                          </h4>
                          <ul className="space-y-1 mt-2">
                            {criteria.map((criterion, index) => (
                              <li key={index} className="text-sm text-gray-700 flex items-center">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                                {criterion}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Status</h3>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      selectedMockQuestion?.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {selectedMockQuestion?.status}
                  </span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </>
    )
  }

  return null
}

export default AdminMockInterviewManagement
