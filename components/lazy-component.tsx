"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"

interface LazyComponentProps {
  children: ReactNode
  threshold?: number
  placeholder?: ReactNode
  rootMargin?: string
  triggerOnce?: boolean
}

export function LazyComponent({
  children,
  threshold = 0.1,
  placeholder = <div className="min-h-[100px] bg-gray-50 animate-pulse rounded-md" />,
  rootMargin = "50px",
  triggerOnce = true,
}: LazyComponentProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasRendered, setHasRendered] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      setIsVisible(true)
      return
    }

    const element = elementRef.current
    if (!element) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasRendered)) {
          setIsVisible(true)
          setHasRendered(true)
          if (triggerOnce) {
            observer.disconnect()
          }
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce, hasRendered])

  return (
    <div ref={elementRef} className="w-full">
      {isVisible ? children : placeholder}
    </div>
  )
}
