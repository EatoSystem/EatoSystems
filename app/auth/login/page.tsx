"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Lock, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get("redirect") || "/about"

  // Clear any existing auth on component mount
  useEffect(() => {
    document.cookie = "eato-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate loading for better UX
    await new Promise((resolve) => setTimeout(resolve, 800))

    if (password === "EatoVite") {
      // Set authentication cookie
      document.cookie = `eato-auth=authenticated; path=/; max-age=86400; SameSite=Lax; Secure=${location.protocol === "https:"}`

      // Redirect after a short delay
      setTimeout(() => {
        window.location.href = redirectTo
      }, 200)
    } else {
      setError("Incorrect password. Please try again.")
      setPassword("")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 p-4">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      </div>

      <Card className="w-full max-w-md shadow-2xl border-0 bg-white/90 backdrop-blur-sm relative z-10">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center shadow-lg">
            <Lock className="w-10 h-10 text-green-600" />
          </div>
          <div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-2">
              EatoSystems
            </CardTitle>
            <CardDescription className="text-gray-600 text-base">
              Enter the password to access the platform
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Access Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  disabled={isLoading}
                  className="h-12 text-base border-gray-300 focus:border-green-500 focus:ring-green-500 pr-12"
                  autoComplete="current-password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-12 px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </Button>
              </div>
            </div>

            {error && (
              <Alert variant="destructive" className="border-red-200 bg-red-50">
                <AlertDescription className="text-red-700 font-medium">{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium text-base transition-all duration-200 shadow-lg hover:shadow-xl"
              disabled={isLoading || !password}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Authenticating...
                </>
              ) : (
                "Access Platform"
              )}
            </Button>
          </form>

          <div className="text-center pt-4 border-t border-gray-200">
            <Button
              variant="ghost"
              onClick={() => router.push("/")}
              className="text-green-600 hover:text-green-700 hover:bg-green-50 font-medium"
              disabled={isLoading}
            >
              ← Back to Homepage
            </Button>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500">This platform is password protected for authorized access only.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
