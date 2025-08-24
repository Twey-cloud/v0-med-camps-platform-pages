"use client"

import { useState, Suspense, lazy } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const AdminOverview = lazy(() => import("./components/AdminOverview"))
const AdminLearningManagement = lazy(() => import("./components/AdminLearningManagement"))
const AdminPracticeManagement = lazy(() => import("./components/AdminPracticeManagement"))
const AdminMockInterviewManagement = lazy(() => import("./components/AdminMockInterviewManagement"))

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const adminData = {
    stats: {
      totalLearningTopics: 45,
      totalPracticeQuestions: 128,
      totalMockInterviews: 12,
    },
    unifiedCategories: [
      { id: 1, name: "Motivation", description: "Understanding motivation in medical careers", status: "Active" },
      { id: 2, name: "Communication", description: "Essential communication skills for healthcare", status: "Active" },
      { id: 3, name: "Ethics", description: "Medical ethics and professional conduct", status: "Active" },
      { id: 4, name: "Teamwork", description: "Collaborative healthcare practices", status: "Active" },
      { id: 5, name: "Problem Solving", description: "Clinical problem-solving scenarios", status: "Active" },
      { id: 6, name: "Empathy", description: "Empathy and compassion in healthcare", status: "Active" },
      { id: 7, name: "Leadership", description: "Leadership skills in medical settings", status: "Active" },
    ],
    topicsByCategory: {
      1: [
        { id: 1, title: "Why Medicine and Not Nursing?", status: "Active", hasContent: true },
        { id: 2, title: "Personal Statement Development", status: "Active", hasContent: true },
        { id: 3, title: "Career Motivation Assessment", status: "Draft", hasContent: false },
      ],
      2: [
        { id: 4, title: "Breaking Bad News", status: "Active", hasContent: true },
        { id: 5, title: "Patient Communication", status: "Active", hasContent: true },
        { id: 6, title: "Difficult Conversations", status: "Draft", hasContent: false },
      ],
    },
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-4 md:pt-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-base">Manage content and platform settings</p>
            </div>
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700 text-sm md:text-base">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Platform
            </Link>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 md:space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            <TabsTrigger value="overview" className="text-xs md:text-sm py-2 md:py-2.5">
              Overview
            </TabsTrigger>
            <TabsTrigger value="learning" className="text-xs md:text-sm py-2 md:py-2.5">
              Learning
            </TabsTrigger>
            <TabsTrigger value="practice" className="text-xs md:text-sm py-2 md:py-2.5">
              Practice
            </TabsTrigger>
            <TabsTrigger value="mock" className="text-xs md:text-sm py-2 md:py-2.5">
              <span className="hidden sm:inline">Mock Interviews</span>
              <span className="sm:hidden">Mock</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 md:space-y-6">
            <Suspense fallback={<div className="p-4 text-center text-sm md:text-base">Loading overview...</div>}>
              <AdminOverview stats={adminData.stats} />
            </Suspense>
          </TabsContent>

          <TabsContent value="learning" className="space-y-4 md:space-y-6">
            <Suspense
              fallback={<div className="p-4 text-center text-sm md:text-base">Loading learning management...</div>}
            >
              <AdminLearningManagement
                unifiedCategories={adminData.unifiedCategories}
                topicsByCategory={adminData.topicsByCategory}
              />
            </Suspense>
          </TabsContent>

          <TabsContent value="practice" className="space-y-4 md:space-y-6">
            <Suspense
              fallback={<div className="p-4 text-center text-sm md:text-base">Loading practice management...</div>}
            >
              <AdminPracticeManagement categories={adminData.unifiedCategories} />
            </Suspense>
          </TabsContent>

          <TabsContent value="mock" className="space-y-4 md:space-y-6">
            <Suspense
              fallback={
                <div className="p-4 text-center text-sm md:text-base">Loading mock interview management...</div>
              }
            >
              <AdminMockInterviewManagement unifiedCategories={adminData.unifiedCategories} />
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
