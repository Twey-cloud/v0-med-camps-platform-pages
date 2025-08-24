"use client"

import { memo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileQuestion, Video, Plus } from "lucide-react"

interface AdminOverviewProps {
  stats: {
    totalLearningTopics: number
    totalPracticeQuestions: number
    totalMockInterviews: number
  }
  onCreateAction: (type: string) => void
}

const AdminOverview = memo(({ stats, onCreateAction }: AdminOverviewProps) => {
  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Topics</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalLearningTopics}</div>
            <p className="text-xs text-muted-foreground">Across 8 categories</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Practice Questions</CardTitle>
            <FileQuestion className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalPracticeQuestions}</div>
            <p className="text-xs text-muted-foreground">With marking criteria</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mock Interviews</CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalMockInterviews}</div>
            <p className="text-xs text-muted-foreground">7 stations each</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button
              className="bg-blue-500 hover:bg-blue-600 h-auto py-4 flex-col"
              onClick={() => onCreateAction("Learning Category")}
            >
              <Plus className="h-5 w-5 mb-2" />
              New Category
            </Button>
            <Button
              className="bg-green-500 hover:bg-green-600 h-auto py-4 flex-col"
              onClick={() => onCreateAction("Learning Topic")}
            >
              <Plus className="h-5 w-5 mb-2" />
              New Topic
            </Button>
            <Button
              className="bg-purple-500 hover:bg-purple-600 h-auto py-4 flex-col"
              onClick={() => onCreateAction("Practice Question")}
            >
              <Plus className="h-5 w-5 mb-2" />
              New Question
            </Button>
            <Button
              className="bg-orange-500 hover:bg-orange-600 h-auto py-4 flex-col"
              onClick={() => onCreateAction("Mock Interview")}
            >
              <Plus className="h-5 w-5 mb-2" />
              New Mock Interview
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
})

AdminOverview.displayName = "AdminOverview"

export default AdminOverview
