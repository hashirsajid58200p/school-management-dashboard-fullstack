import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set("auth_session", "", {
    httpOnly: true,
    expires: new Date(0),
    path: "/",
  });
  return response;
}

export async function GET(request: Request) {
  // Never clear cookies on GET requests - this prevents browser link prefetchers from destroying sessions
  return NextResponse.redirect(new URL("/sign-in", request.url));
}
