import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Target, CheckCircle } from "lucide-react"

export default function GAMSATPage() {
  return (
    <div className="pt-8 p-8 bg-gray-50 min-h-screen max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Your pre-med home</p>
      </div>

      {/* Welcome Staff Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Welcome back, John</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="bg-blue-100 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-600 text-sm">Questions Completed</p>
                    <p className="text-4xl font-bold mt-1 text-blue-800">43</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-100 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-600 text-sm">Practice Streak</p>
                    <p className="text-4xl font-bold mt-1 text-blue-800">57%</p>
                  </div>
                  <Target className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Video Section */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/r-bP9NLWPro?si=MnXFyNhLHXicblZx"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 font-medium">MMI Masterclass Series</p>
                  <p className="text-xs text-gray-500">6 Videos in total</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Questions Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Questions</h2>
        <div className="space-y-3">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div>
                    <span className="font-semibold text-gray-900">5345 Questions</span>
                    <p className="text-sm text-gray-500 mt-1">Complete question bank</p>
                  </div>
                </div>
                <Button className="bg-blue-400 hover:bg-blue-500 font-medium">Continue Questions</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div>
                    <span className="font-semibold text-gray-900">Motivation</span>
                    <p className="text-sm text-gray-500 mt-1">Motivational content and tips</p>
                  </div>
                </div>
                <Button className="bg-blue-400 hover:bg-blue-500 font-medium">Continue Learning</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div>
                    <span className="font-semibold text-gray-900">Recommended Questions</span>
                    <p className="text-sm text-gray-500 mt-1">Personalized question recommendations</p>
                  </div>
                </div>
                <Button className="bg-blue-400 hover:bg-blue-500 font-medium">Start Questions</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Event and News */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Event and News</h2>
        <Card>
          <CardContent className="p-8 text-center">
            <div className="text-gray-400 mb-4">
              <Clock className="h-12 w-12 mx-auto mb-3" />
            </div>
            <p className="text-gray-600 font-medium">No upcoming events or news at this time.</p>
            <p className="text-sm text-gray-500 mt-2">Check back later for updates and announcements.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
