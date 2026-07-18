import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt } from "@/lib/session";
import { routeAccessMap } from "./lib/settings";

const matchers = Object.keys(routeAccessMap).map((route) => ({
  matcher: (pathname: string) => {
    // Replace Clerk's syntax with simple regex match
    const regexStr = route.replace(/\(\.\*\)/g, ".*");
    const regex = new RegExp(`^${regexStr}$`);
    return regex.test(pathname);
  },
  allowedRoles: routeAccessMap[route],
}));

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  
  // 1. Skip static assets, api routes, and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // 2. Read the session cookie
  const sessionCookie = req.cookies.get("auth_session")?.value;
  let user: any = null;
  if (sessionCookie) {
    const decrypted = decrypt(sessionCookie);
    if (decrypted) {
      try {
        user = JSON.parse(decrypted);
      } catch (e) {}
    }
  }

  const isSignIn = pathname === "/sign-in";

  // 3. Authenticate
  if (!user) {
    if (!isSignIn) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
    return NextResponse.next();
  }

  // If logged in and hitting sign-in page, redirect to home/dashboard
  if (isSignIn) {
    return NextResponse.redirect(new URL(`/${user.role}`, req.url));
  }

  // 4. Authorize based on roles mapping
  for (const { matcher, allowedRoles } of matchers) {
    if (matcher(pathname) && !allowedRoles.includes(user.role)) {
      // Unauthorized, redirect back to their default dashboard home
      return NextResponse.redirect(new URL(`/${user.role}`, req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Matches all routes except files/assets
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
