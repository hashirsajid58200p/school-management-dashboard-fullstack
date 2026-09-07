import prisma from "@/lib/prisma";
import { encrypt } from "@/lib/session";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// In-memory rate limiter tracking failed attempts per email / client
interface AttemptRecord {
  count: number;
  firstAttempt: number;
  lockedUntil?: number;
}

const loginAttempts = new Map<string, AttemptRecord>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes window
const LOCKOUT_MS = 15 * 60 * 1000; // 15 minutes lockout

function checkRateLimit(key: string): { allowed: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const record = loginAttempts.get(key);

  if (!record) return { allowed: true };

  if (record.lockedUntil && now < record.lockedUntil) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((record.lockedUntil - now) / 1000),
    };
  }

  if (now - record.firstAttempt > WINDOW_MS) {
    loginAttempts.delete(key);
    return { allowed: true };
  }

  if (record.count >= MAX_ATTEMPTS) {
    record.lockedUntil = now + LOCKOUT_MS;
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil(LOCKOUT_MS / 1000),
    };
  }

  return { allowed: true };
}

function recordFailedAttempt(key: string) {
  const now = Date.now();
  const record = loginAttempts.get(key);
  if (!record || now - record.firstAttempt > WINDOW_MS) {
    loginAttempts.set(key, { count: 1, firstAttempt: now });
  } else {
    record.count += 1;
    if (record.count >= MAX_ATTEMPTS) {
      record.lockedUntil = now + LOCKOUT_MS;
    }
  }
}

function resetAttempts(key: string) {
  loginAttempts.delete(key);
}

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required!" }, { status: 400 });
    }

    const trimmedInput = email.trim();
    const trimmedEmail = trimmedInput.toLowerCase();
    const clientIp = req.headers.get("x-forwarded-for") || "unknown_ip";
    const rateLimitKey = `${trimmedEmail}_${clientIp}`;

    // Rate-limit check
    const rateLimit = checkRateLimit(rateLimitKey);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: `Too many failed login attempts. Please try again after ${Math.ceil(
            (rateLimit.retryAfterSeconds || 60) / 60
          )} minutes.`,
        },
        { status: 429 }
      );
    }

    // 1. Search Admin (by email or username)
    let user: any = await prisma.admin.findFirst({
      where: {
        OR: [{ email: trimmedEmail }, { username: trimmedInput }],
      },
    });
    let role = "admin";

    // 2. Search Teacher (by email or username)
    if (!user) {
      user = await prisma.teacher.findFirst({
        where: {
          OR: [{ email: trimmedEmail }, { username: trimmedInput }],
        },
      });
      role = "teacher";
    }

    // 3. Search Student (by email or username)
    if (!user) {
      user = await prisma.student.findFirst({
        where: {
          OR: [{ email: trimmedEmail }, { username: trimmedInput }],
        },
      });
      role = "student";
    }

    // 4. Search Parent (by email or username)
    if (!user) {
      user = await prisma.parent.findFirst({
        where: {
          OR: [{ email: trimmedEmail }, { username: trimmedInput }],
        },
      });
      role = "parent";
    }

    // Password verification via bcrypt
    const isMatch = user && user.password ? await bcrypt.compare(password, user.password) : false;
    if (!isMatch) {
      recordFailedAttempt(rateLimitKey);
      return NextResponse.json({ error: "Invalid email or password!" }, { status: 401 });
    }

    // Login successful - reset attempt counter
    resetAttempts(rateLimitKey);

    // Encrypt user metadata for the signed JWT session
    const sessionData = {
      id: user.id,
      email: user.email,
      role,
      name: user.name || user.username,
      surname: user.surname || "",
      username: user.username || "",
      img: user.img || null,
    };

    const token = await encrypt(sessionData);

    const response = NextResponse.json({ success: true, role });

    // Set cookie
    response.cookies.set("auth_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (e: any) {
    console.error("Login API error:", e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
