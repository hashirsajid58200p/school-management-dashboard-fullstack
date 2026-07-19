import prisma from "@/lib/prisma";
import { encrypt } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required!" }, { status: 400 });
    }

    const trimmedEmail = email.trim();

    // 1. Search Admin
    let user: any = await prisma.admin.findUnique({ where: { email: trimmedEmail } });
    let role = "admin";

    // 2. Search Teacher
    if (!user) {
      user = await prisma.teacher.findUnique({ where: { email: trimmedEmail } });
      role = "teacher";
    }

    // 3. Search Student
    if (!user) {
      user = await prisma.student.findUnique({ where: { email: trimmedEmail } });
      role = "student";
    }

    // 4. Search Parent
    if (!user) {
      user = await prisma.parent.findUnique({ where: { email: trimmedEmail } });
      role = "parent";
    }

    // Validation
    if (!user || user.password !== password) {
      return NextResponse.json({ error: "Invalid email or password!" }, { status: 401 });
    }

    // Encrypt user metadata for the session
    const sessionData = {
      id: user.id,
      email: user.email,
      role,
      name: user.name || user.username,
      surname: user.surname || "",
      username: user.username || "",
      img: user.img || null
    };

    const token = encrypt(JSON.stringify(sessionData));

    const response = NextResponse.json({ success: true, role });
    
    // Set cookie
    response.cookies.set("auth_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    return response;
  } catch (e: any) {
    console.error("Login API error:", e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
