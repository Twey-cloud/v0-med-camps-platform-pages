import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const mockInterviews = [
  {
    id: 1,
    title: "Mock Interview 1",
    description: "Comprehensive MMI assessment covering all core competencies",
    href: "/mock-interview/mock-1",
  },
  {
    id: 2,
    title: "Mock Interview 2",
    description: "Advanced scenarios for experienced candidates with complex ethical dilemmas",
    href: "/mock-interview/mock-2",
  },
  {
    id: 3,
    title: "Mock Interview 3",
    description: "Specialized scenarios tailored for specific medical school requirements",
    href: "/mock-interview/mock-3",
  },
]

export default function MockInterviewPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Mock Interview</h1>
        <p className="text-gray-600 mt-2">Practice your interview skills with AI-powered mock interviews</p>
      </div>

      {/* Mock Interview Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockInterviews.map((mock) => (
          <Card key={mock.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{mock.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 text-sm">{mock.description}</p>

              <Link
                href={mock.href}
                className="block w-full bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors text-center font-medium"
              >
                Begin Mock
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Information Section */}
      <div className="mt-12 bg-blue-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">How Mock Interviews Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">1. Choose Your Mock</h3>
            <p className="text-sm text-gray-600">
              Select a mock interview based on your experience level and target competencies.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">2. Complete 7 Stations</h3>
            <p className="text-sm text-gray-600">
              Work through realistic MMI scenarios with timed responses and structured feedback.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">3. Review & Improve</h3>
            <p className="text-sm text-gray-600">
              Get detailed AI feedback on each station plus overall performance insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
