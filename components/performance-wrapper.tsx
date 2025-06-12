"use client"

import { Suspense, type ReactNode } from "react"

interface PerformanceWrapperProps {
  children: ReactNode
  fallback?: ReactNode
  className?: string
}

export function PerformanceWrapper({
  children,
  fallback = <div className="animate-pulse bg-gray-200 rounded-md h-32" />,
  className = "",
}: PerformanceWrapperProps) {
  return (
    <Suspense fallback={fallback}>
      <div className={`${className} will-change-transform`}>{children}</div>
    </Suspense>
  )
}

// Hook for performance monitoring
export function usePerformanceMonitor() {
  if (typeof window !== "undefined" && "performance" in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === "largest-contentful-paint") {
          console.log("LCP:", entry.startTime)
        }
        if (entry.entryType === "first-input") {
          console.log("FID:", entry.processingStart - entry.startTime)
        }
      }
    })

    observer.observe({ entryTypes: ["largest-contentful-paint", "first-input"] })

    return () => observer.disconnect()
  }

  return () => {}
}
