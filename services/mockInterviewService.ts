interface MockInterviewSession {
  id: string
  mockInterviewId: string
  userId: string
  timePerQuestion: number
  currentStation: number
  responses: Record<string, any>
  assessments: Record<string, any>
  timerState: "idle" | "running" | "paused" | "finished"
  timeRemaining: number
  startedAt: Date
  completedAt?: Date
}

interface StationData {
  id: number
  title: string
  scenario: string
  category: string
  markingCriteria: Record<string, any>
}

export class MockInterviewService {
  private static instance: MockInterviewService
  private currentSession: MockInterviewSession | null = null
  private stationsData: StationData[] = []

  private mockStations: StationData[] = [
    {
      id: 1,
      title: "Ethical Dilemma - Confidentiality",
      scenario:
        "A patient asks you not to tell their family about their diagnosis. However, the family is asking you directly about the patient's condition.",
      category: "Ethics",
      markingCriteria: {
        "Patient Autonomy": "Respects patient's right to confidentiality",
        Communication: "Explains situation clearly and empathetically",
        "Professional Boundaries": "Maintains appropriate professional boundaries",
      },
    },
    {
      id: 2,
      title: "Communication - Breaking Bad News",
      scenario:
        "You need to inform a patient that their test results show a serious condition that will require immediate treatment.",
      category: "Communication",
      markingCriteria: {
        Empathy: "Shows genuine concern and understanding",
        Clarity: "Explains medical information in understandable terms",
        Support: "Offers appropriate support and next steps",
      },
    },
    {
      id: 3,
      title: "Teamwork - Conflict Resolution",
      scenario:
        "Two members of your medical team disagree on a treatment approach. The disagreement is affecting patient care.",
      category: "Teamwork",
      markingCriteria: {
        Leadership: "Takes initiative to resolve conflict",
        Diplomacy: "Handles disagreement professionally",
        "Patient Focus": "Prioritizes patient welfare in resolution",
      },
    },
  ]

  static getInstance(): MockInterviewService {
    if (!MockInterviewService.instance) {
      MockInterviewService.instance = new MockInterviewService()
    }
    return MockInterviewService.instance
  }

  getStations(): StationData[] {
    return this.mockStations
  }

  initializeSession(): void {
    this.currentSession = {
      id: `session-${Date.now()}`,
      mockInterviewId: "mock-1",
      userId: "user-1",
      timePerQuestion: 5,
      currentStation: 0,
      responses: {},
      assessments: {},
      timerState: "idle",
      timeRemaining: 0,
      startedAt: new Date(),
    }
  }

  startInterview(timePerQuestion: number): void {
    if (this.currentSession) {
      this.currentSession.timePerQuestion = timePerQuestion
      this.currentSession.timerState = "running"
    }
  }

  completeStation(stationIndex: number): void {
    if (this.currentSession) {
      this.currentSession.currentStation = stationIndex + 1
    }
  }

  updateResponse(stationIndex: number, response: string): void {
    if (this.currentSession) {
      this.currentSession.responses[stationIndex] = response
    }
  }

  getResponse(stationIndex: number): string {
    return this.currentSession?.responses[stationIndex] || ""
  }

  getAllResponses(): Record<string, any> {
    return this.currentSession?.responses || {}
  }

  updateStationScore(stationIndex: number, score: number): void {
    if (this.currentSession) {
      this.currentSession.assessments[stationIndex] = score
    }
  }

  getAllScores(): Record<string, any> {
    return this.currentSession?.assessments || {}
  }

  async createSession(mockInterviewId: string, timePerQuestion: number): Promise<MockInterviewSession> {
    // API call to create new session
    const response = await fetch(`/api/mock-interviews/${mockInterviewId}/sessions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ timePerQuestion }),
    })
    return response.json()
  }

  async getSession(sessionId: string): Promise<MockInterviewSession> {
    // API call to get session data
    const response = await fetch(`/api/mock-interviews/sessions/${sessionId}`)
    return response.json()
  }

  async updateSessionProgress(sessionId: string, progress: Partial<MockInterviewSession>): Promise<void> {
    // API call to update session progress
    await fetch(`/api/mock-interviews/sessions/${sessionId}/progress`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(progress),
    })
  }

  async getStationData(mockInterviewId: string, stationId: number): Promise<StationData> {
    // API call to get station data
    const response = await fetch(`/api/mock-interviews/${mockInterviewId}/stations/${stationId}`)
    return response.json()
  }

  async saveStationResponse(sessionId: string, stationId: number, response: any): Promise<void> {
    // API call to save station response
    await fetch(`/api/mock-interviews/sessions/${sessionId}/stations/${stationId}/response`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(response),
    })
  }

  async saveAssessment(sessionId: string, stationId: number, assessment: any): Promise<void> {
    // API call to save assessment
    await fetch(`/api/mock-interviews/sessions/${sessionId}/stations/${stationId}/assessment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(assessment),
    })
  }

  async completeSession(sessionId: string): Promise<any> {
    // API call to complete session and get final results
    const response = await fetch(`/api/mock-interviews/sessions/${sessionId}/complete`, {
      method: "POST",
    })
    return response.json()
  }

  async getSessionResults(sessionId: string): Promise<any> {
    // API call to get session results
    const response = await fetch(`/api/mock-interviews/sessions/${sessionId}/results`)
    return response.json()
  }
}

export const mockInterviewService = MockInterviewService.getInstance()
