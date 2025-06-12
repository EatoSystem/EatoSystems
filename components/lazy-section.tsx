"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { type ReactNode, useRef } from "react"

interface LazySectionProps {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  fallback?: ReactNode
}

export function LazySection({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "50px",
  fallback = <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(ref, { threshold, rootMargin })

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : fallback}
    </div>
  )
}
