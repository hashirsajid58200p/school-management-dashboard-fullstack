import { cookies } from "next/headers";
import { decrypt } from "./session";

export interface SessionClaims {
  metadata: {
    role?: string;
  };
}

export function auth() {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get("auth_session")?.value;
  if (!sessionCookie) {
    return { userId: null, sessionClaims: null };
  }
  const decrypted = decrypt(sessionCookie);
  if (!decrypted) {
    return { userId: null, sessionClaims: null };
  }
  try {
    const user = JSON.parse(decrypted);
    return {
      userId: user.id,
      sessionClaims: {
        metadata: {
          role: user.role
        }
      } as SessionClaims
    };
  } catch (e) {
    return { userId: null, sessionClaims: null };
  }
}

export async function currentUser() {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get("auth_session")?.value;
  if (!sessionCookie) return null;
  const decrypted = decrypt(sessionCookie);
  if (!decrypted) return null;
  try {
    const user = JSON.parse(decrypted);
    return {
      id: user.id,
      firstName: user.name,
      lastName: user.surname,
      username: user.username,
      img: user.img,
      publicMetadata: {
        role: user.role
      }
    };
  } catch (e) {
    return null;
  }
}

// Mock clerkClient for actions.ts to completely bypass Clerk API calls
export const clerkClient = {
  users: {
    createUser: async (data: any) => {
      // Return a mock object with generated user ID.
      // This allows actions.ts to proceed to save record to local DB.
      return { id: `mock_user_${Math.random().toString(36).substring(2, 11)}` };
    },
    updateUser: async (id: string, data: any) => {
      return {};
    },
    deleteUser: async (id: string) => {
      return {};
    }
  }
};

// Client-side hook mock for logout.tsx
export function useClerk() {
  return {
    signOut: (callback?: () => void) => {
      fetch("/api/logout", { method: "POST" })
        .then(() => {
          if (callback) callback();
          else window.location.href = "/sign-in";
        })
        .catch(() => {
          window.location.href = "/sign-in";
        });
    }
  };
}
