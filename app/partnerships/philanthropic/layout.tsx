import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Philanthropic Partnerships | EatoSystems",
  description:
    "Partner with EatoSystems through grant-funded programs to scale regenerative agriculture globally. Join foundations and NGOs creating lasting environmental and social impact.",
}

export default function PhilanthropicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
