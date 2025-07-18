import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login - EatoSystems",
  description: "Access the EatoSystems platform with your credentials",
  robots: "noindex, nofollow",
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">{children}</div>
}
