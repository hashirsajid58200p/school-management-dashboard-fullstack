import { describe, it, expect, vi, beforeEach } from "vitest";

let currentCookieValue: string | undefined = undefined;

vi.mock("next/headers", () => ({
  cookies: () => ({
    get: (key: string) => (currentCookieValue ? { value: currentCookieValue } : undefined),
  }),
}));

vi.mock("@/lib/session", () => ({
  decryptSync: (token: string) => {
    if (token === "admin_token") return { id: "admin_1", role: "admin" };
    if (token === "student_token") return { id: "student_1", role: "student" };
    return null;
  },
  encrypt: vi.fn(),
  decrypt: vi.fn(),
}));

import { requireRole, auth } from "@/lib/auth";

describe("requireRole Security Helper", () => {
  beforeEach(() => {
    currentCookieValue = undefined;
  });

  it("permits access and returns role when user role is in allowed list", () => {
    currentCookieValue = "admin_token";
    const role = requireRole(["admin", "teacher"]);
    expect(role).toBe("admin");
  });

  it("throws Unauthorized when user has a role not in allowed list", () => {
    currentCookieValue = "student_token";
    expect(() => requireRole(["admin", "teacher"])).toThrow("Unauthorized");
  });

  it("throws Unauthorized when user has no session cookie (logged out)", () => {
    currentCookieValue = undefined;
    expect(() => requireRole(["admin"])).toThrow("Unauthorized");
  });

  it("throws Unauthorized when token is invalid or tampered with", () => {
    currentCookieValue = "tampered_fake_token";
    expect(() => requireRole(["admin"])).toThrow("Unauthorized");
  });
});
