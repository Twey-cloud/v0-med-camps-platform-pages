interface PracticeQuestion {
  id: string
  title: string
  questionText: string
  markingCriteria: Record<string, any>
  category: string
  timeLimit?: number
}

interface PracticeSession {
  id: string
  questionIds: string[]
  currentQuestionIndex: number
  responses: Record<string, string>
  assessments: Record<string, any>
  timePerQuestion?: number
  startedAt: Date
  completedAt?: Date
}

interface SessionResponse {
  questionId: string
  response: string
  inputMethod: "voice" | "type"
  timeSpent: number
  timestamp: Date
}

class PracticeSessionService {
  private static instance: PracticeSessionService
  private currentSession: PracticeSession | null = null
  private questions: PracticeQuestion[] = []

  static getInstance(): PracticeSessionService {
    if (!PracticeSessionService.instance) {
      PracticeSessionService.instance = new PracticeSessionService()
    }
    return PracticeSessionService.instance
  }

  // Session Management
  initializeSession(config: any): any {
    // Handle both old and new API formats for backward compatibility
    if (typeof config === "object" && !Array.isArray(config)) {
      // Old format from practice page
      return {
        sessionId: `session_${Date.now()}`,
        questionId: config.questionId || "default",
        category: config.category || "General",
        title: config.title || "Practice Question",
        question: {
          content: config.content || "Default question content",
        },
        userAnswer: "",
        hasAnswer: false,
        timer: {
          minutes: 8,
          seconds: 0,
          isActive: false,
        },
        markingCriteria: {
          introduction: [
            { text: "Introduces themselves professionally", checked: false },
            { text: "Confirms patient identity", checked: false },
          ],
          mainContent: [
            { text: "Demonstrates understanding of consent", checked: false },
            { text: "Uses clear, non-medical language", checked: false },
          ],
          conclusion: [
            { text: "Summarizes key points", checked: false },
            { text: "Checks patient understanding", checked: false },
          ],
        },
      }
    }

    // New format - call the original async method
    return this.initializeSessionAsync(config, undefined)
  }

  async initializeSessionAsync(questionIds: string[], timePerQuestion?: number): Promise<PracticeSession> {
    try {
      // In production, this would call the API
      const sessionData = {
        id: `session_${Date.now()}`,
        questionIds,
        currentQuestionIndex: 0,
        responses: {},
        assessments: {},
        timePerQuestion,
        startedAt: new Date(),
      }

      this.currentSession = sessionData

      // Load questions for this session
      await this.loadSessionQuestions(questionIds)

      return sessionData
    } catch (error) {
      console.error("Failed to initialize practice session:", error)
      throw error
    }
  }

  async loadSessionQuestions(questionIds: string[]): Promise<void> {
    // Mock data - in production, fetch from API
    this.questions = questionIds.map((id, index) => ({
      id,
      title: `Practice Question ${index + 1}`,
      questionText: `This is the question text for question ${id}`,
      markingCriteria: {
        introduction: ["Introduces themselves professionally", "Confirms patient identity"],
        mainContent: ["Demonstrates understanding", "Uses clear language"],
        conclusion: ["Summarizes key points", "Checks understanding"],
      },
      category: "Ethics",
      timeLimit: 300, // 5 minutes
    }))
  }

  // Question Navigation
  getCurrentQuestion(): PracticeQuestion | null {
    if (!this.currentSession || !this.questions.length) return null
    return this.questions[this.currentSession.currentQuestionIndex] || null
  }

  async advanceToNextQuestion(): Promise<{ hasNext: boolean; nextQuestion?: PracticeQuestion }> {
    if (!this.currentSession) throw new Error("No active session")

    const nextIndex = this.currentSession.currentQuestionIndex + 1

    if (nextIndex >= this.questions.length) {
      return { hasNext: false }
    }

    this.currentSession.currentQuestionIndex = nextIndex
    await this.syncSessionState()

    return {
      hasNext: true,
      nextQuestion: this.questions[nextIndex],
    }
  }

  // Response Management
  async saveResponse(questionId: string, response: SessionResponse): Promise<void> {
    if (!this.currentSession) throw new Error("No active session")

    this.currentSession.responses[questionId] = response.response

    // In production, save to API
    await this.syncSessionState()
  }

  async saveAssessment(questionId: string, assessment: any): Promise<void> {
    if (!this.currentSession) throw new Error("No active session")

    this.currentSession.assessments[questionId] = assessment
    await this.syncSessionState()
  }

  // AI Feedback
  async generateAIFeedback(questionId: string, response: string, selfAssessment: any): Promise<any> {
    // Mock AI processing - in production, call AI API
    await new Promise((resolve) => setTimeout(resolve, 2000))

    return {
      overallScore: Math.floor(Math.random() * 40) + 60, // 60-100
      feedback: {
        strengths: ["Clear communication style", "Good understanding of ethical principles", "Professional approach"],
        improvements: [
          "Could provide more specific examples",
          "Consider patient perspective more deeply",
          "Expand on reasoning",
        ],
        suggestions: [
          "Practice with more complex scenarios",
          "Review ethical frameworks",
          "Focus on patient-centered communication",
        ],
      },
      detailedAnalysis: "Your response demonstrates a solid understanding of the core concepts...",
    }
  }

  // Session State Management
  async syncSessionState(): Promise<void> {
    if (!this.currentSession) return

    // In production, sync with backend API
    console.log("[v0] Syncing session state:", this.currentSession.id)
  }

  async completeSession(): Promise<any> {
    if (!this.currentSession) throw new Error("No active session")

    this.currentSession.completedAt = new Date()

    // Generate session results
    const results = {
      sessionId: this.currentSession.id,
      totalQuestions: this.questions.length,
      completedQuestions: Object.keys(this.currentSession.responses).length,
      overallScore: this.calculateOverallScore(),
      timeSpent: this.calculateTotalTime(),
      assessments: this.currentSession.assessments,
    }

    await this.syncSessionState()
    return results
  }

  // Utility Methods
  private calculateOverallScore(): number {
    const assessments = Object.values(this.currentSession?.assessments || {})
    if (assessments.length === 0) return 0

    const totalScore = assessments.reduce((sum: number, assessment: any) => {
      return sum + (assessment.score || 0)
    }, 0)

    return Math.round(totalScore / assessments.length)
  }

  private calculateTotalTime(): number {
    // Calculate based on session duration
    if (!this.currentSession) return 0

    const endTime = this.currentSession.completedAt || new Date()
    return Math.floor((endTime.getTime() - this.currentSession.startedAt.getTime()) / 1000)
  }

  // Session Info
  getSessionProgress(): { current: number; total: number; percentage: number } {
    if (!this.currentSession) return { current: 0, total: 0, percentage: 0 }

    const current = this.currentSession.currentQuestionIndex + 1
    const total = this.questions.length
    const percentage = Math.round((current / total) * 100)

    return { current, total, percentage }
  }

  getSessionState(): PracticeSession | null {
    return this.currentSession
  }

  // Cleanup
  clearSession(): void {
    this.currentSession = null
    this.questions = []
  }

  // Additional Methods
  submitAnswer(sessionId: string, answer: string): any {
    return {
      sessionId,
      userAnswer: answer,
      hasAnswer: true,
      // Keep other properties unchanged
      category: "Medical Ethics",
      title: "Valid Consent",
      question: { content: "Question content" },
      timer: { minutes: 8, seconds: 0, isActive: false },
      markingCriteria: {},
    }
  }

  updateMarkingCriteria(sessionId: string, section: string, criterion: string, checked: boolean): any {
    return {
      sessionId,
      // Return mock updated session data
      category: "Medical Ethics",
      title: "Valid Consent",
      question: { content: "Question content" },
      userAnswer: "",
      hasAnswer: false,
      timer: { minutes: 8, seconds: 0, isActive: false },
      markingCriteria: {},
    }
  }

  updateTimer(sessionId: string, minutes: number, seconds: number, isActive: boolean): any {
    return {
      sessionId,
      timer: { minutes, seconds, isActive },
      // Keep other properties
      category: "Medical Ethics",
      title: "Valid Consent",
      question: { content: "Question content" },
      userAnswer: "",
      hasAnswer: false,
      markingCriteria: {},
    }
  }

  formatTime(minutes: number, seconds: number): string {
    const mins = minutes.toString().padStart(2, "0")
    const secs = seconds.toString().padStart(2, "0")
    return `${mins}:${secs}`
  }

  getLearningResources(category: string): any[] {
    return [
      {
        title: "Understanding Valid Consent",
        description: "Core principles of medical consent and patient autonomy",
      },
      {
        title: "Ethical Decision Making",
        description: "Framework for ethical reasoning in healthcare",
      },
    ]
  }
}

export const practiceSessionService = PracticeSessionService.getInstance()
export default PracticeSessionService
