import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow access to homepage and login page
  if (pathname === "/" || pathname === "/auth/login") {
    return NextResponse.next()
  }

  // Allow static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/public") ||
    pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  // Check for authentication cookie
  const authCookie = request.cookies.get("eato-auth")

  if (!authCookie || authCookie.value !== "authenticated") {
    // Redirect to login with the current path as redirect parameter
    const loginUrl = new URL("/auth/login", request.url)
    loginUrl.searchParams.set("redirect", pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
