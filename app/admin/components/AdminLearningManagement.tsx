"use client"

import { memo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, ChevronRight, Edit, Trash2 } from "lucide-react"

interface Category {
  id: number
  name: string
  description: string
  status: string
}

interface Topic {
  id: number
  title: string
  status: string
  hasContent: boolean
}

interface AdminLearningManagementProps {
  unifiedCategories: Category[]
  topicsByCategory: Record<number, Topic[]>
  onCreateCategory: () => void
  onCreateTopic: () => void
}

const AdminLearningManagement = memo(
  ({ unifiedCategories, topicsByCategory, onCreateCategory, onCreateTopic }: AdminLearningManagementProps) => {
    const [currentView, setCurrentView] = useState("categories")
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)
    const [editMode, setEditMode] = useState(false)

    if (currentView === "categories") {
      return (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Learning Categories</h2>
            <Button className="bg-blue-500 hover:bg-blue-600" onClick={onCreateCategory}>
              <Plus className="h-4 w-4 mr-2" />
              New Category
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Manage Learning Categories</CardTitle>
              <CardDescription>Level 0: Main subject categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {unifiedCategories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium">{category.name}</h3>
                      <p className="text-sm text-gray-600">{category.description}</p>
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
                          setSelectedCategory(category)
                          setCurrentView("topics")
                        }}
                      >
                        View Topics
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

    if (currentView === "topics") {
      const topics = topicsByCategory[selectedCategory?.id || 0] || []
      return (
        <>
          <div className="flex items-center justify-between mb-6">
            <div>
              <Button variant="outline" onClick={() => setCurrentView("categories")} className="mb-2">
                ← Back to Categories
              </Button>
              <h2 className="text-2xl font-bold">{selectedCategory?.name} Topics</h2>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600" onClick={onCreateTopic}>
              <Plus className="h-4 w-4 mr-2" />
              New Topic
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Manage Topics in {selectedCategory?.name}</CardTitle>
              <CardDescription>Level 1: Specific topics within this category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topics.map((topic) => (
                  <div
                    key={topic.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium">{topic.title}</h3>
                      <p className="text-sm text-gray-600">
                        {topic.hasContent ? "Content available" : "No content yet"}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          topic.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {topic.status}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedTopic(topic)
                          setCurrentView("notes")
                        }}
                      >
                        Edit Content
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

    if (currentView === "notes") {
      return (
        <>
          <div className="flex items-center justify-between mb-6">
            <div>
              <Button variant="outline" onClick={() => setCurrentView("topics")} className="mb-2">
                ← Back to Topics
              </Button>
              <h2 className="text-2xl font-bold">Edit: {selectedTopic?.title}</h2>
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
              <CardTitle>Content Management</CardTitle>
              <CardDescription>Level 2: Individual note content and media</CardDescription>
            </CardHeader>
            <CardContent>
              {editMode ? (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="noteTitle">Title</Label>
                    <Input id="noteTitle" defaultValue={selectedTopic?.title} />
                  </div>
                  <div>
                    <Label htmlFor="noteContent">Content</Label>
                    <Textarea
                      id="noteContent"
                      className="min-h-64"
                      defaultValue="This is where the rich text content for the note would be displayed and edited. In a real implementation, this would be a rich text editor with formatting options, images, and other media support."
                    />
                  </div>
                  <div>
                    <Label htmlFor="videoUrl">Video URL</Label>
                    <Input id="videoUrl" placeholder="YouTube embed URL" />
                  </div>
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select defaultValue={selectedTopic?.status?.toLowerCase()}>
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
                    <h3 className="font-medium mb-2">Current Content</h3>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-700">
                        This is where the rich text content for "{selectedTopic?.title}" would be displayed. The content
                        includes formatted text, images, videos, and other educational materials that students will see
                        when they access this topic.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Video Content</h3>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-600">No video currently attached</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Status</h3>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        selectedTopic?.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {selectedTopic?.status}
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
  },
)

AdminLearningManagement.displayName = "AdminLearningManagement"

export default AdminLearningManagement
