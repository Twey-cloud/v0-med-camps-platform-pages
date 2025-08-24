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
    <div className="max-w-7xl mx-auto px-4 md:px-6 pt-4 md:pt-8 pb-6 md:pb-8">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Mock Interview</h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Practice your interview skills with AI-powered mock interviews
        </p>
      </div>

      {/* Mock Interview Cards */}
      <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockInterviews.map((mock) => (
          <Card key={mock.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-4 md:p-6">
              <div className="mb-3 md:mb-4">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">{mock.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4 md:mb-6 text-sm leading-relaxed">{mock.description}</p>

              <Link
                href={mock.href}
                className="block w-full bg-blue-400 text-white py-2.5 md:py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors text-center font-medium text-sm md:text-base"
              >
                Begin Mock
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Information Section */}
      <div className="mt-8 md:mt-12 bg-blue-50 rounded-lg p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">How Mock Interviews Work</h2>
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2 text-sm md:text-base">1. Choose Your Mock</h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Select a mock interview based on your experience level and target competencies.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2 text-sm md:text-base">2. Complete 7 Stations</h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Work through realistic MMI scenarios with timed responses and structured feedback.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2 text-sm md:text-base">3. Review & Improve</h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              Get detailed AI feedback on each station plus overall performance insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
