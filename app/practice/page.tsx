import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileQuestion, Clock, Play } from "lucide-react"
import Link from "next/link"

const categories = [
  { name: "All Topics", active: true },
  { name: "Ethics", active: false },
  { name: "Communication", active: false },
  { name: "Teamwork", active: false },
  { name: "Problem Solving", active: false },
  { name: "Empathy", active: false },
  { name: "Leadership", active: false },
]

const questionSetsByCategory = {
  Ethics: [
    {
      id: 1,
      title: "Valid Consent & Patient Autonomy",
      description:
        "Valid consent scenarios exploring patient autonomy and informed decision-making in clinical settings",
      questions: 12,
      duration: "45 min",
      status: "start",
      progress: 0,
      category: "Ethics",
    },
    {
      id: 2,
      title: "Healthcare Ethics & Dilemmas",
      description:
        "Ethical dilemmas in healthcare including confidentiality, resource allocation, and end-of-life care",
      questions: 15,
      duration: "60 min",
      status: "start",
      progress: 0,
      category: "Ethics",
    },
    {
      id: 3,
      title: "End-of-Life Care Decisions",
      description: "Complex ethical scenarios involving end-of-life care, advance directives, and family dynamics",
      questions: 8,
      duration: "35 min",
      status: "start",
      progress: 0,
      category: "Ethics",
    },
  ],
  Communication: [
    {
      id: 4,
      title: "Breaking Bad News Scenarios",
      description: "Communication skills for delivering difficult diagnoses and unexpected medical news",
      questions: 10,
      duration: "40 min",
      status: "start",
      progress: 0,
      category: "Communication",
    },
    {
      id: 5,
      title: "Cultural Sensitivity Communication",
      description: "Cross-cultural communication challenges and culturally sensitive patient interactions",
      questions: 9,
      duration: "35 min",
      status: "practice",
      progress: 25,
      category: "Communication",
    },
    {
      id: 6,
      title: "Angry Patient Management",
      description: "De-escalation techniques and professional communication with upset patients and families",
      questions: 7,
      duration: "30 min",
      status: "start",
      progress: 0,
      category: "Communication",
    },
  ],
  Teamwork: [
    {
      id: 7,
      title: "Multidisciplinary Team Conflicts",
      description: "Resolving conflicts within healthcare teams and managing professional disagreements",
      questions: 8,
      duration: "35 min",
      status: "practice",
      progress: 60,
      category: "Teamwork",
    },
    {
      id: 8,
      title: "Leadership in Crisis Situations",
      description: "Taking leadership roles during medical emergencies and crisis management",
      questions: 6,
      duration: "25 min",
      status: "start",
      progress: 0,
      category: "Teamwork",
    },
  ],
  "Problem Solving": [
    {
      id: 9,
      title: "Clinical Problem Solving",
      description:
        "Problem-solving in clinical situations including triage, emergency decisions, and resource management",
      questions: 14,
      duration: "50 min",
      status: "practice",
      progress: 80,
      category: "Problem Solving",
    },
    {
      id: 10,
      title: "Resource Allocation Dilemmas",
      description: "Making difficult decisions about limited medical resources and competing patient needs",
      questions: 11,
      duration: "45 min",
      status: "start",
      progress: 0,
      category: "Problem Solving",
    },
  ],
  Empathy: [
    {
      id: 11,
      title: "Empathy & Compassion",
      description: "Empathy and compassion scenarios dealing with patient distress and family concerns",
      questions: 9,
      duration: "30 min",
      status: "practice",
      progress: 15,
      category: "Empathy",
    },
    {
      id: 12,
      title: "Supporting Grieving Families",
      description: "Providing emotional support and guidance to families during loss and grief",
      questions: 7,
      duration: "25 min",
      status: "start",
      progress: 0,
      category: "Empathy",
    },
  ],
  Leadership: [
    {
      id: 13,
      title: "Leadership & Advocacy",
      description: "Leadership and advocacy in healthcare including speaking up for patient safety",
      questions: 11,
      duration: "45 min",
      status: "start",
      progress: 0,
      category: "Leadership",
    },
    {
      id: 14,
      title: "Professional Boundaries",
      description: "Maintaining professional boundaries and managing dual relationships in medical practice",
      questions: 8,
      duration: "30 min",
      status: "start",
      progress: 0,
      category: "Leadership",
    },
  ],
}

const allQuestionSets = Object.values(questionSetsByCategory).flat()

export default function PracticeQuestionsPage() {
  const activeCategory = categories.find((cat) => cat.active)?.name || "All Topics"
  const displayQuestions =
    activeCategory === "All Topics" ? allQuestionSets : questionSetsByCategory[activeCategory] || []

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Practice Questions</h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          MMI interview scenarios to prepare for UK medical school admissions
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-6 md:mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category.name}
              variant={category.active ? "default" : "secondary"}
              className={`px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium cursor-pointer transition-colors ${
                category.active
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "bg-white hover:bg-gray-100 text-gray-700 border"
              }`}
            >
              {category.name}
            </Badge>
          ))}
        </div>
      </div>

      {/* Question Sets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {displayQuestions.map((set) => (
          <Card key={set.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-4 md:p-6">
              {/* Header with Badge */}
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 text-xs">MMI Practice</Badge>
                <Badge variant="outline" className="text-xs">
                  {set.category}
                </Badge>
              </div>

              {/* Description */}
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base leading-tight">{set.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 mb-3 line-clamp-3 leading-relaxed">{set.description}</p>

                {/* Stats */}
                <div className="flex items-center gap-3 md:gap-4 text-xs text-gray-500 mb-3 md:mb-4">
                  <div className="flex items-center gap-1">
                    <FileQuestion className="h-3 w-3 flex-shrink-0" />
                    <span>{set.questions} scenarios</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 flex-shrink-0" />
                    <span>{set.duration}</span>
                  </div>
                </div>

                {/* Progress Bar (only show if progress > 0) */}
                {set.progress > 0 && (
                  <div className="mb-3 md:mb-4">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{set.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${set.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              {set.id === 1 ? (
                <Link href="/practice/valid-consent">
                  <Button className="w-full bg-blue-400 hover:bg-blue-500 font-medium text-sm md:text-base py-2 md:py-2.5">
                    <Play className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                    Start
                  </Button>
                </Link>
              ) : (
                <Button className="w-full bg-blue-400 hover:bg-blue-500 font-medium text-sm md:text-base py-2 md:py-2.5">
                  <Play className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                  Start
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Stats Summary */}
      <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <Card>
          <CardContent className="p-4 md:p-6 text-center">
            <div className="text-2xl md:text-3xl font-bold text-emerald-600 mb-2">47</div>
            <p className="text-xs md:text-sm text-gray-600">Scenarios Completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 md:p-6 text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">85%</div>
            <p className="text-xs md:text-sm text-gray-600">Average Performance</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 md:p-6 text-center">
            <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">6</div>
            <p className="text-xs md:text-sm text-gray-600">Practice Sets Completed</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
