"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== "undefined" && "performance" in window) {
      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          console.log("LCP:", entry.startTime)
        })
      }).observe({ entryTypes: ["largest-contentful-paint"] })

      // First Input Delay
      new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          console.log("FID:", entry.processingStart - entry.startTime)
        })
      }).observe({ entryTypes: ["first-input"] })

      // Cumulative Layout Shift
      new PerformanceObserver((list) => {
        let clsValue = 0
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        console.log("CLS:", clsValue)
      }).observe({ entryTypes: ["layout-shift"] })
    }
  }, [])

  return null
}
