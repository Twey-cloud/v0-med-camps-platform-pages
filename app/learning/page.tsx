"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, BookOpen, Brain, Heart, Target, Zap, Shield, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const learningData = [
  {
    id: 1,
    name: "Motivation",
    icon: Heart,
    expanded: true,
    topics: [
      { id: 1, title: "Why Medicine and Not Nursing?", slug: "why-medicine-not-nursing" },
      { id: 2, title: "Finding Your Purpose in Healthcare", slug: "finding-purpose" },
      { id: 3, title: "Overcoming Self-Doubt", slug: "overcoming-doubt" },
      { id: 4, title: "Building Long-term Motivation", slug: "long-term-motivation" },
    ],
  },
  {
    id: 2,
    name: "Work-Life Balance",
    icon: Target,
    expanded: false,
    topics: [
      { id: 5, title: "Managing Work While Studying", slug: "work-study-balance" },
      { id: 6, title: "Time Management Strategies", slug: "time-management" },
      { id: 7, title: "Setting Boundaries", slug: "setting-boundaries" },
    ],
  },
  {
    id: 3,
    name: "Stress Management",
    icon: Shield,
    expanded: false,
    topics: [
      { id: 8, title: "Recognizing Stress Signals", slug: "stress-signals" },
      { id: 9, title: "Breathing Techniques", slug: "breathing-techniques" },
      { id: 10, title: "Mindfulness for Medical Students", slug: "mindfulness" },
    ],
  },
  {
    id: 4,
    name: "Study Techniques",
    icon: Brain,
    expanded: false,
    topics: [
      { id: 11, title: "Active Learning Methods", slug: "active-learning" },
      { id: 12, title: "Note-Taking Systems", slug: "note-taking" },
      { id: 13, title: "Spaced Repetition", slug: "spaced-repetition" },
    ],
  },
  {
    id: 5,
    name: "Memory Enhancement",
    icon: Zap,
    expanded: false,
    topics: [
      { id: 14, title: "Memory Palace Technique", slug: "memory-palace" },
      { id: 15, title: "Visual Learning Strategies", slug: "visual-learning" },
      { id: 16, title: "Mnemonics for Medical Terms", slug: "medical-mnemonics" },
    ],
  },
  {
    id: 6,
    name: "Health & Wellness",
    icon: Heart,
    expanded: false,
    topics: [
      { id: 17, title: "Physical Exercise for Students", slug: "exercise" },
      { id: 18, title: "Nutrition During Study Periods", slug: "nutrition" },
      { id: 19, title: "Sleep Hygiene", slug: "sleep-hygiene" },
    ],
  },
  {
    id: 7,
    name: "Exam Strategies",
    icon: BookOpen,
    expanded: false,
    topics: [
      { id: 20, title: "Test-Taking Techniques", slug: "test-taking" },
      { id: 21, title: "Managing Exam Anxiety", slug: "exam-anxiety" },
      { id: 22, title: "Last-Minute Preparation", slug: "last-minute-prep" },
    ],
  },
]

export default function LearningResourcesPage() {
  const [categories, setCategories] = useState(learningData)
  const [completedTopics, setCompletedTopics] = useState<Set<number>>(new Set())

  const toggleCategory = (categoryId: number) => {
    setCategories((prev) => prev.map((cat) => (cat.id === categoryId ? { ...cat, expanded: !cat.expanded } : cat)))
  }

  const toggleTopicCompletion = (topicId: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCompletedTopics((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(topicId)) {
        newSet.delete(topicId)
      } else {
        newSet.add(topicId)
      }
      return newSet
    })
  }

  const getCategoryProgress = (category: (typeof learningData)[0]) => {
    const completedCount = category.topics.filter((topic) => completedTopics.has(topic.id)).length
    return Math.round((completedCount / category.topics.length) * 100)
  }

  return (
    <div className="pt-8 p-8 bg-gray-50 min-h-screen max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Learning Resources</h1>
        <p className="text-gray-600 mt-2">Comprehensive Resources for your Success</p>
      </div>

      <div className="space-y-4">
        {categories.map((category) => {
          const IconComponent = category.icon
          const progress = getCategoryProgress(category)

          return (
            <Card key={category.id} className="overflow-hidden">
              {/* Category Header */}
              <div
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                      <div className="flex items-center gap-3">
                        <p className="text-sm text-gray-500">{category.topics.length} topics</p>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-green-400 transition-all duration-300"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500 font-medium">{progress}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {category.expanded ? (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              {/* Topics List */}
              {category.expanded && (
                <CardContent className="pt-0 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <div className="space-y-3">
                      {category.topics.map((topic) => {
                        const isCompleted = completedTopics.has(topic.id)

                        return (
                          <Link
                            key={topic.id}
                            href={`/learning/${category.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}/${topic.slug}`}
                            className="block"
                          >
                            <div
                              className={`flex items-center justify-between p-3 rounded-lg transition-colors group ${
                                isCompleted
                                  ? "bg-green-50 hover:bg-green-100 border border-green-200"
                                  : "hover:bg-blue-50"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-2 h-2 rounded-full ${isCompleted ? "bg-green-500" : "bg-blue-400"}`}
                                ></div>
                                <span
                                  className={`font-medium ${
                                    isCompleted
                                      ? "text-green-700 group-hover:text-green-800"
                                      : "text-gray-700 group-hover:text-blue-600"
                                  }`}
                                >
                                  {topic.title}
                                </span>
                                {isCompleted && <Check className="h-4 w-4 text-green-600" />}
                              </div>
                              <div className="flex items-center gap-2">
                                <Button
                                  size="sm"
                                  variant={isCompleted ? "outline" : "secondary"}
                                  className={`transition-opacity ${
                                    isCompleted
                                      ? "border-green-300 text-green-700 hover:bg-green-50"
                                      : "opacity-0 group-hover:opacity-100"
                                  }`}
                                  onClick={(e) => toggleTopicCompletion(topic.id, e)}
                                >
                                  {isCompleted ? "Completed" : "Mark Complete"}
                                </Button>
                                <Button
                                  size="sm"
                                  className={`transition-opacity ${
                                    isCompleted
                                      ? "bg-green-500 hover:bg-green-600 text-white"
                                      : "bg-blue-400 hover:bg-blue-500 text-white opacity-0 group-hover:opacity-100"
                                  }`}
                                >
                                  Read
                                </Button>
                              </div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          )
        })}
      </div>
    </div>
  )
}
