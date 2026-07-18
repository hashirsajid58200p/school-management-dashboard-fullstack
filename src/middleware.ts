import { clerkClient, clerkMiddleware, createRouteMatcher } from "./src/mocks/clerk-server";
import { routeAccessMap } from "./lib/settings";
import { NextResponse } from "next/server";

const matchers = Object.keys(routeAccessMap).map((route) => ({
  matcher: createRouteMatcher([route]),
  allowedRoles: routeAccessMap[route],
}));

console.log(matchers);

export default clerkMiddleware(async (auth, req) => {
  // if (isProtectedRoute(req)) auth().protect()

  const { sessionClaims, userId } = auth();

  let role = (sessionClaims?.metadata as { role?: string })?.role;

  // Fallback: If role is not in session claims, fetch it directly from the Clerk API
  if (!role && userId) {
    try {
      const user = await clerkClient.users.getUser(userId);
      role = (user.publicMetadata as { role?: string })?.role;
    } catch (e) {
      console.error("Failed to fetch user role from Clerk API:", e);
    }
  }

  for (const { matcher, allowedRoles } of matchers) {
    if (matcher(req) && (!role || !allowedRoles.includes(role))) {
      return NextResponse.redirect(new URL(`/${role || "sign-in"}`, req.url));
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
