"use client"

import { useEffect } from "react"

export default function SupportLayout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <div className="min-h-screen">{children}</div>
}
