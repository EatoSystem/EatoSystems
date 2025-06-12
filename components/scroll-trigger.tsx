"use client"

import { useEffect, useRef, useState, type ReactNode, useCallback } from "react"

interface ScrollTriggerProps {
  children: (inView: boolean) => ReactNode
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function ScrollTrigger({ children, threshold = 0.1, rootMargin = "0px", once = true }: ScrollTriggerProps) {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Memoize the callback function
  const callback = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setInView(true)
        // Once triggered, we can disconnect the observer if once is true
        if (once && ref.current) {
          observer.unobserve(ref.current)
        }
      } else if (!once) {
        setInView(false)
      }
    },
    [once],
  )

  let observer: IntersectionObserver

  useEffect(() => {
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      setInView(true)
      return
    }

    observer = new IntersectionObserver(callback, { threshold, rootMargin })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [threshold, rootMargin, callback])

  return <div ref={ref}>{children(inView)}</div>
}
