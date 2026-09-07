import { describe, it, expect, beforeEach, vi } from "vitest";
import { SignJWT } from "jose/jwt/sign";

let currentCookieValue: string | undefined = undefined;

vi.mock("next/headers", () => ({
  cookies: () => ({
    get: (key: string) => (currentCookieValue ? { value: currentCookieValue } : undefined),
  }),
}));

// Import REAL unmocked auth & requireRole
import { auth, requireRole } from "@/lib/auth";

describe("JWT Signature Forgery Verification Test", () => {
  beforeEach(() => {
    currentCookieValue = undefined;
  });

  it("should reject a forged token signed with an attacker's secret", async () => {
    // Attacker generates a token with role: "admin" signed using their OWN secret key
    const attackerSecret = new TextEncoder().encode("attackers_secret_key_that_is_32_bytes_long_123");
    const forgedToken = await new SignJWT({ id: "attacker_1", role: "admin" })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(attackerSecret);

    currentCookieValue = forgedToken;

    // A secure system MUST reject this forged token!
    // In the vulnerable code, auth() calls decryptSync without checking signature,
    // so auth().userId is "attacker_1" and requireRole(["admin"]) succeeds!
    const session = await auth();
    expect(session.userId).toBeNull();
    expect(session.sessionClaims).toBeNull();
  });
});
