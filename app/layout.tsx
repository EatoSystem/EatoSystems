import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

// Add priority to preload critical fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
  fallback: ["system-ui", "arial"],
})

// Add viewport meta tag with width=device-width
export const metadata: Metadata = {
  title: "EatoSystems - From Soil to Sanctuary",
  description:
    "Building the world's first full-stack sustainable food system — from cultural roots to regenerative governance.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://blob.v0.dev" />

        {/* Disable service worker registration in v0 preview */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (window.location.hostname.includes('vusercontent.com')) {
              // Prevent service worker registration in v0 preview
              window.navigator.serviceWorker.getRegistrations().then(registrations => {
                for(let registration of registrations) {
                  registration.unregister();
                }
              });
              
              // Override the register function to prevent new registrations
              const originalRegister = window.navigator.serviceWorker.register;
              window.navigator.serviceWorker.register = function() {
                return new Promise((resolve) => resolve(undefined));
              };
            }
          `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
