"use client"

import { useState, useEffect, useCallback } from "react"

export type TimerState = "idle" | "running" | "paused" | "finished"

interface UseTimerReturn {
  timeRemaining: number
  timerState: TimerState
  formatTime: (seconds: number) => string
  startTimer: (duration: number) => void
  pauseTimer: () => void
  resumeTimer: () => void
  resetTimer: () => void
}

export function useTimer(): UseTimerReturn {
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [timerState, setTimerState] = useState<TimerState>("idle")

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (timerState === "running" && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setTimerState("finished")
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [timerState, timeRemaining])

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }, [])

  const startTimer = useCallback((duration: number) => {
    setTimeRemaining(duration * 60)
    setTimerState("running")
  }, [])

  const pauseTimer = useCallback(() => {
    setTimerState("paused")
  }, [])

  const resumeTimer = useCallback(() => {
    if (timeRemaining > 0) {
      setTimerState("running")
    }
  }, [timeRemaining])

  const resetTimer = useCallback(() => {
    setTimeRemaining(0)
    setTimerState("idle")
  }, [])

  return {
    timeRemaining,
    timerState,
    formatTime,
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
  }
}
