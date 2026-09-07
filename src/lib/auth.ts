import { cookies } from "next/headers";
import { decrypt } from "./session";

export interface SessionClaims {
  metadata: {
    role?: string;
  };
}

export async function auth() {
  try {
    const cookieStore = cookies();
    const sessionCookie = cookieStore.get("auth_session")?.value;
    if (!sessionCookie) {
      return { userId: null, sessionClaims: null };
    }
    const decrypted = await decrypt(sessionCookie);
    if (!decrypted) {
      return { userId: null, sessionClaims: null };
    }
    const user = typeof decrypted === "string" ? JSON.parse(decrypted) : decrypted;
    return {
      userId: user.id,
      sessionClaims: {
        metadata: {
          role: user.role,
        },
      } as SessionClaims,
    };
  } catch (e) {
    return { userId: null, sessionClaims: null };
  }
}

export async function requireRole(allowed: string[]) {
  const { sessionClaims } = await auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  if (!role || !allowed.includes(role)) {
    throw new Error("Unauthorized");
  }
  return role;
}

export async function currentUser() {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get("auth_session")?.value;
  if (!sessionCookie) return null;
  try {
    const decrypted = await decrypt(sessionCookie);
    if (!decrypted) return null;
    const user = typeof decrypted === "string" ? JSON.parse(decrypted) : decrypted;
    return {
      id: user.id,
      firstName: user.name,
      lastName: user.surname,
      username: user.username,
      img: user.img,
      publicMetadata: {
        role: user.role,
      },
    };
  } catch (e) {
    return null;
  }
}
