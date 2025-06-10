"use client"

import { useState, useEffect } from "react"

interface TimeDisplayProps {
  isScrolled?: boolean
}

export function TimeDisplay({ isScrolled = false }: TimeDisplayProps) {
  const [time, setTime] = useState<{ aest: string; awst: string }>({
    aest: "",
    awst: "",
  })

  useEffect(() => {
    const updateTime = () => {
      // Get current UTC time
      const now = new Date()

      // AEST is UTC+10
      const aestTime = new Date(now.getTime() + 10 * 60 * 60 * 1000)

      // AWST is UTC+8
      const awstTime = new Date(now.getTime() + 8 * 60 * 60 * 1000)

      // Format in 24-hour format
      const formatTime = (date: Date) => {
        return date.toLocaleTimeString("en-AU", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "UTC",
        })
      }

      setTime({
        aest: formatTime(aestTime),
        awst: formatTime(awstTime),
      })
    }

    // Update immediately
    updateTime()

    // Then update every minute
    const interval = setInterval(updateTime, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`text-right text-xs transition-colors duration-300 ${isScrolled ? "text-gray-600" : "text-white/80"}`}
    >
      <div className="flex flex-col">
        <span>AEST {time.aest}</span>
        <span>AWST {time.awst}</span>
      </div>
    </div>
  )
}
