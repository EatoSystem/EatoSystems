"use client"

import { useEffect } from "react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function ContributeLayout({ children }) {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Contribute", href: "/contribute" },
          ]}
        />
        <div className="mt-8">{children}</div>
      </div>
    </div>
  )
}
