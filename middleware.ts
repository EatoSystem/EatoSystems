import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// List of paths that don't require authentication
const publicPaths = ["/"]

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Allow public paths
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

// Apply middleware to all routes except static files and API routes
export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|images).*)",
  ],
}
