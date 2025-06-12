import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// List of paths that don't require authentication
const publicPaths = ["/auth/login"]

export function middleware(request: NextRequest) {
  // Check if the path is public
  const path = request.nextUrl.pathname
  if (publicPaths.includes(path)) {
    return NextResponse.next()
  }

  // Check for authentication cookie
  const authCookie = request.cookies.get("eato-auth")?.value

  // If not authenticated, redirect to login
  if (authCookie !== "authenticated") {
    const url = request.nextUrl.clone()
    url.pathname = "/auth/login"
    url.search = `?redirect=${encodeURIComponent(request.nextUrl.pathname)}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// Apply middleware to all routes except static files
export const config = {
  matcher: [
    /*
     * Match all paths except static assets and API routes
     */
    "/((?!_next/static|_next/image|favicon.ico|images|api).*)",
  ],
}
