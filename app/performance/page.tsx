"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Target, Clock, Award } from "lucide-react"

const histogramData = [
  { range: "20%", users: 12, percentage: 20 },
  { range: "30%", users: 28, percentage: 30 },
  { range: "40%", users: 45, percentage: 40 },
  { range: "50%", users: 68, percentage: 50 },
  { range: "60%", users: 85, percentage: 60 },
  { range: "70%", users: 92, percentage: 70 },
  { range: "80%", users: 78, percentage: 80 },
  { range: "90%", users: 45, percentage: 90 },
  { range: "100%", users: 18, percentage: 100 },
]

const userScore = 85 // User's score position

// Custom histogram component matching the design
const CustomHistogram = () => {
  const maxUsers = Math.max(...histogramData.map((d) => d.users))
  const chartWidth = 320 // Reduced chart width for mobile
  const chartHeight = 160 // Reduced chart height for mobile
  const barWidth = chartWidth / histogramData.length

  // Function to get color based on percentage
  const getBarColor = (percentage: number) => {
    if (percentage <= 30) return "#ef4444" // red
    if (percentage <= 40) return "#f97316" // orange
    if (percentage <= 50) return "#f59e0b" // amber
    if (percentage <= 60) return "#eab308" // yellow
    if (percentage <= 70) return "#84cc16" // lime
    if (percentage <= 80) return "#22c55e" // green
    return "#16a34a" // dark green
  }

  return (
    <div className="w-full bg-gray-100 p-3 md:p-6 rounded-lg overflow-x-auto">
      <div className="relative min-w-[320px]">
        <svg width={chartWidth} height={chartHeight + 40} className="mx-auto">
          {/* Bars */}
          {histogramData.map((data, index) => {
            const barHeight = (data.users / maxUsers) * chartHeight
            const x = index * barWidth + barWidth * 0.1
            const y = chartHeight - barHeight

            return (
              <rect
                key={data.range}
                x={x}
                y={y}
                width={barWidth * 0.8}
                height={barHeight}
                fill={getBarColor(data.percentage)}
                className="transition-all duration-200"
              />
            )
          })}

          {/* User score line */}
          <line
            x1={((userScore - 20) / 10) * barWidth + barWidth / 2}
            y1={0}
            x2={((userScore - 20) / 10) * barWidth + barWidth / 2}
            y2={chartHeight}
            stroke="#000"
            strokeWidth="2"
          />

          {/* X-axis labels */}
          {histogramData.map((data, index) => (
            <text
              key={data.range}
              x={index * barWidth + barWidth / 2}
              y={chartHeight + 20}
              textAnchor="middle"
              fontSize="10"
              fill="#666"
            >
              {data.range}
            </text>
          ))}
        </svg>

        {/* User score label */}
        <div
          className="absolute top-0 transform -translate-x-1/2 -translate-y-6"
          style={{ left: `${((userScore - 20) / 80) * 100}%` }}
        >
          <span className="text-xs md:text-sm font-medium text-gray-700 bg-white px-2 py-1 rounded shadow">
            Your score
          </span>
        </div>
      </div>
    </div>
  )
}

const categoryPerformance = [
  { category: "Communication", percentage: 92, color: "text-green-600", bgColor: "bg-green-100" },
  { category: "Ethics", percentage: 88, color: "text-green-600", bgColor: "bg-green-100" },
  { category: "Problem Solving", percentage: 85, color: "text-green-600", bgColor: "bg-green-100" },
  { category: "Teamwork", percentage: 78, color: "text-yellow-600", bgColor: "bg-yellow-100" },
  { category: "Leadership", percentage: 72, color: "text-yellow-600", bgColor: "bg-yellow-100" },
  { category: "Empathy", percentage: 65, color: "text-red-600", bgColor: "bg-red-100" },
  { category: "Motivation", percentage: 58, color: "text-red-600", bgColor: "bg-red-100" },
]

const progressData = [
  { week: "Week 1", score: 65 },
  { week: "Week 2", score: 68 },
  { week: "Week 3", score: 72 },
  { week: "Week 4", score: 75 },
  { week: "Week 5", score: 78 },
  { week: "Week 6", score: 82 },
  { week: "Week 7", score: 85 },
  { week: "Week 8", score: 87 },
]

const chartConfig = {
  users: {
    label: "Users",
    color: "#60a5fa",
  },
  score: {
    label: "Score",
    color: "#60a5fa",
  },
  week: {
    label: "Week",
    color: "#60a5fa",
  },
}

const HistogramTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-white p-3 border rounded-lg shadow-lg">
        <p className="font-medium">{label}</p>
        <p className="text-blue-400">{payload[0].value} users</p>
        {data.isUser && <p className="text-green-600 font-semibold">← You are here!</p>}
      </div>
    )
  }
  return null
}

const LineTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border rounded-lg shadow-lg">
        <p className="font-medium">{label}</p>
        <p className="text-blue-400">Score: {payload[0].value}%</p>
      </div>
    )
  }
  return null
}

export default function PerformanceTrackerPage() {
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Performance Tracker</h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Track your progress and performance across all sections
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
        <Card>
          <CardContent className="p-3 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-2 md:mb-0">
                <p className="text-xs md:text-sm text-gray-600">Total Questions</p>
                <p className="text-lg md:text-2xl font-bold text-gray-900">1,247</p>
              </div>
              <Target className="h-6 w-6 md:h-8 md:w-8 text-blue-400 self-end md:self-auto" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-2 md:mb-0">
                <p className="text-xs md:text-sm text-gray-600">Average Score</p>
                <p className="text-lg md:text-2xl font-bold text-blue-400">85%</p>
              </div>
              <Award className="h-6 w-6 md:h-8 md:w-8 text-blue-400 self-end md:self-auto" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-2 md:mb-0">
                <p className="text-xs md:text-sm text-gray-600">Study Time</p>
                <p className="text-lg md:text-2xl font-bold text-gray-900">127h</p>
              </div>
              <Clock className="h-6 w-6 md:h-8 md:w-8 text-blue-400 self-end md:self-auto" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-2 md:mb-0">
                <p className="text-xs md:text-sm text-gray-600">Improvement</p>
                <p className="text-lg md:text-2xl font-bold text-blue-400">+22%</p>
              </div>
              <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-blue-400 self-end md:self-auto" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
        {/* Custom Histogram */}
        <Card>
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-base md:text-lg">Your Performance vs Other Users</CardTitle>
            <p className="text-xs md:text-sm text-gray-600">See how you compare to other students</p>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <CustomHistogram />
            <div className="mt-3 md:mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="text-xs md:text-sm text-green-800 font-medium">
                🎉 You're in the top 15% of all users! Keep up the excellent work.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Category Performance List */}
        <Card>
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-base md:text-lg">Category Performance</CardTitle>
            <p className="text-xs md:text-sm text-gray-600">Your scores by category (highest to lowest)</p>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <div className="space-y-2 md:space-y-3">
              {categoryPerformance.map((category, index) => (
                <div
                  key={category.category}
                  className={`flex items-center justify-between p-3 md:p-4 rounded-lg ${category.bgColor} border`}
                >
                  <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
                    <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-white rounded-full text-xs md:text-sm font-semibold text-gray-700 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="font-medium text-gray-900 text-sm md:text-base truncate">{category.category}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={`text-sm md:text-lg font-bold ${category.color}`}>{category.percentage}%</span>
                    <div className="w-12 md:w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${
                          category.percentage >= 80
                            ? "bg-green-500"
                            : category.percentage >= 70
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }`}
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Performance Guide:</h4>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-600">Excellent (80%+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-600">Good (70-79%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-600">Needs Improvement (&lt;70%)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
