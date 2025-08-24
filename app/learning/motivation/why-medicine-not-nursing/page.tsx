"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, BookOpen, Play, FileText, Video, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const topicNavigation = [
  { id: 1, title: "Why Medicine and Not Nursing?", slug: "why-medicine-not-nursing", current: true },
  { id: 2, title: "Dealing with Rejection", slug: "dealing-with-rejection", current: false },
  { id: 3, title: "Maintaining Long-term Motivation", slug: "long-term-motivation", current: false },
  { id: 4, title: "Finding Your Why", slug: "finding-your-why", current: false },
  { id: 5, title: "Overcoming Imposter Syndrome", slug: "imposter-syndrome", current: false },
  { id: 6, title: "Setting Realistic Goals", slug: "realistic-goals", current: false },
]

export default function WhyMedicineNotNursingPage() {
  const [isCompleted, setIsCompleted] = useState(false)
  const [contactForm, setContactForm] = useState({ name: "", email: "", question: "" })
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  const currentTopicIndex = topicNavigation.findIndex((topic) => topic.current)
  const previousTopic = currentTopicIndex > 0 ? topicNavigation[currentTopicIndex - 1] : null
  const nextTopic = currentTopicIndex < topicNavigation.length - 1 ? topicNavigation[currentTopicIndex + 1] : null

  const handleMarkComplete = () => {
    setIsCompleted(true)
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", contactForm)
    setIsContactFormOpen(false)
    setContactForm({ name: "", email: "", question: "" })
  }

  return (
    <div className="pt-8 p-8 bg-gray-50 min-h-screen max-w-7xl mx-auto">
      {/* Header with Navigation */}
      <div className="mb-8">
        <Link
          href="/learning"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Learning Resources
        </Link>
        <div className="flex items-center gap-3 mb-2">
          <Badge className="bg-blue-100 text-blue-700">Motivation</Badge>
          {isCompleted && <Badge className="bg-emerald-100 text-emerald-700">Completed</Badge>}
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Why Medicine and Not Nursing?</h1>
        <p className="text-gray-600 mt-2">
          Understanding the fundamental differences and making the right career choice
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Video Section */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Video className="h-5 w-5 text-blue-600" />
                <h2 className="text-xl font-semibold">Introduction Video</h2>
              </div>
              <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-white">
                  <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg">Medicine vs Nursing: Making the Right Choice</p>
                  <p className="text-sm opacity-70 mt-2">Duration: 8 minutes</p>
                </div>
              </div>
              <Button className="w-full bg-blue-400 hover:bg-blue-500">
                <Play className="h-4 w-4 mr-2" />
                Watch Video
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <FileText className="h-5 w-5 text-blue-600" />
                <h2 className="text-xl font-semibold">Study Notes</h2>
              </div>

              <div className="prose max-w-none space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Understanding the Career Paths</h3>
                  <p className="text-gray-700 mb-4">
                    Both medicine and nursing are rewarding healthcare careers, but they differ significantly in scope,
                    responsibility, and training requirements. Understanding these differences is crucial for making an
                    informed decision about your future.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Medicine</h4>
                  <p className="text-gray-700 mb-3">
                    Doctors are responsible for diagnosing diseases, developing treatment plans, and making critical
                    medical decisions. They lead healthcare teams and have the authority to prescribe medications and
                    perform complex procedures.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                    <li>Diagnose and treat medical conditions</li>
                    <li>Prescribe medications and treatments</li>
                    <li>Perform surgical procedures (depending on specialty)</li>
                    <li>Lead multidisciplinary healthcare teams</li>
                    <li>Make critical life-and-death decisions</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Nursing</h4>
                  <p className="text-gray-700 mb-3">
                    Nurses provide direct patient care, administer treatments prescribed by doctors, and serve as
                    patient advocates. They spend more time with patients and focus on holistic care and support.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                    <li>Provide direct patient care and monitoring</li>
                    <li>Administer medications as prescribed</li>
                    <li>Educate patients and families</li>
                    <li>Coordinate care between different healthcare providers</li>
                    <li>Advocate for patient needs and rights</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Considerations</h4>
                  <p className="text-gray-700 mb-3">
                    When choosing between these paths, consider your personal goals, lifestyle preferences, and
                    commitment level:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                    <li>
                      <strong>Training Duration:</strong> Medicine requires 5-6 years plus residency; nursing typically
                      3-4 years
                    </li>
                    <li>
                      <strong>Financial Investment:</strong> Medical school is significantly more expensive
                    </li>
                    <li>
                      <strong>Work-Life Balance:</strong> Nursing often offers more flexible scheduling options
                    </li>
                    <li>
                      <strong>Responsibility Level:</strong> Doctors bear ultimate responsibility for patient outcomes
                    </li>
                    <li>
                      <strong>Patient Interaction:</strong> Nurses typically spend more direct time with patients
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Reflection Exercise</h4>
                  <p className="text-blue-800 mb-3">Take time to honestly answer these questions:</p>
                  <ul className="list-disc list-inside text-blue-800 space-y-1">
                    <li>What aspects of healthcare most appeal to you?</li>
                    <li>Are you prepared for the extended training commitment?</li>
                    <li>How do you handle high-pressure decision-making?</li>
                    <li>What work-life balance do you envision for yourself?</li>
                    <li>How important is financial compensation versus job satisfaction?</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            {previousTopic ? (
              <Link href={`/learning/motivation/${previousTopic.slug}`}>
                <Button variant="outline">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous Topic
                </Button>
              </Link>
            ) : (
              <div></div>
            )}

            {nextTopic ? (
              <Link href={`/learning/motivation/${nextTopic.slug}`}>
                <Button className="bg-blue-400 hover:bg-blue-500">
                  Next Topic
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            ) : (
              <Link href="/learning">
                <Button className="bg-blue-400 hover:bg-blue-500">
                  Back to Topics
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">Your Progress</h3>
              <div className="space-y-3">
                {!isCompleted && (
                  <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={handleMarkComplete}>
                    Mark as Complete
                  </Button>
                )}
                {isCompleted && (
                  <div className="text-center text-sm text-emerald-600 font-medium">✓ Topic Completed!</div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Topic Navigation */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">Course Navigation</h3>
              <div className="space-y-1">
                {topicNavigation.map((topic, index) => (
                  <Link
                    key={topic.id}
                    href={`/learning/motivation/${topic.slug}`}
                    className={`block p-2 rounded text-sm transition-colors ${
                      topic.current ? "bg-blue-100 text-blue-700 font-medium" : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{index + 1}.</span>
                      <span className="flex-1">{topic.title}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <Link href="/practice">
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Practice this topic
                  </Button>
                </Link>

                <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Ask a medic
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Ask a Medic</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div>
                        <Input
                          placeholder="Your name"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Your email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Textarea
                          placeholder="Your question about this topic..."
                          value={contactForm.question}
                          onChange={(e) => setContactForm({ ...contactForm, question: e.target.value })}
                          rows={4}
                          required
                        />
                      </div>
                      <p className="text-sm text-gray-600">
                        Your question will aim to be answered within 48 hours by Twey.
                      </p>
                      <div className="flex gap-2">
                        <Button type="submit" className="flex-1 bg-blue-400 hover:bg-blue-500">
                          Send Question
                        </Button>
                        <Button type="button" variant="outline" onClick={() => setIsContactFormOpen(false)}>
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>

                <Link href="/learning">
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
