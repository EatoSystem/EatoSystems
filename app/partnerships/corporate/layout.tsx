import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Corporate Partnerships | EatoSystems",
  description:
    "Transform your business through strategic partnerships with EatoSystems. Achieve sustainability goals, reduce emissions, and drive innovation through regenerative agriculture solutions.",
}

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
