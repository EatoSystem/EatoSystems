"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export function AuthActions() {
  const handleLogout = () => {
    // Clear the authentication cookie
    document.cookie = "eato-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    // Redirect to login page
    window.location.href = "/auth/login"
  }

  return (
    <Button
      onClick={handleLogout}
      variant="ghost"
      size="sm"
      className="hidden lg:flex items-center space-x-2 text-gray-600 hover:text-gray-800"
    >
      <LogOut className="h-4 w-4" />
      <span>Logout</span>
    </Button>
  )
}
