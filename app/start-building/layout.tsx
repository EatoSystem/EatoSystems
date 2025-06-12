import type React from "react"
import type { Metadata } from "next"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Start Building | EatoSystems",
  description:
    "Join our global community of developers, researchers, and innovators to build the future of global food security and resilience.",
}

export default function StartBuildingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
