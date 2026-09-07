import { describe, it, expect, vi, beforeEach } from "vitest";

let currentCookieValue: string | undefined = undefined;

vi.mock("next/headers", () => ({
  cookies: () => ({
    get: (key: string) => (currentCookieValue ? { value: currentCookieValue } : undefined),
  }),
}));

vi.mock("@/lib/session", () => ({
  decrypt: vi.fn(async (token: string) => {
    if (token === "admin_token") return { id: "admin_1", role: "admin" };
    if (token === "student_token") return { id: "student_1", role: "student" };
    return null;
  }),
  encrypt: vi.fn(),
}));

import { requireRole, auth } from "@/lib/auth";

describe("requireRole Security Helper", () => {
  beforeEach(() => {
    currentCookieValue = undefined;
  });

  it("permits access and returns role when user role is in allowed list", async () => {
    currentCookieValue = "admin_token";
    const role = await requireRole(["admin", "teacher"]);
    expect(role).toBe("admin");
  });

  it("throws Unauthorized when user has a role not in allowed list", async () => {
    currentCookieValue = "student_token";
    await expect(requireRole(["admin", "teacher"])).rejects.toThrow("Unauthorized");
  });

  it("throws Unauthorized when user has no session cookie (logged out)", async () => {
    currentCookieValue = undefined;
    await expect(requireRole(["admin"])).rejects.toThrow("Unauthorized");
  });

  it("throws Unauthorized when token is invalid or tampered with", async () => {
    currentCookieValue = "tampered_fake_token";
    await expect(requireRole(["admin"])).rejects.toThrow("Unauthorized");
  });
});
