import { describe, it, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";

let currentCookieValue: string | undefined = undefined;

vi.mock("next/headers", () => ({
  cookies: () => ({
    get: (key: string) => (currentCookieValue ? { value: currentCookieValue } : undefined),
  }),
}));

vi.mock("@/lib/session", () => ({
  decrypt: vi.fn(async (token: string) => {
    if (token === "user_alice_token") return { id: "user_alice", role: "admin" };
    if (token === "user_bob_token") return { id: "user_bob", role: "teacher" };
    return null;
  }),
}));

vi.mock("@/lib/pusher", () => ({
  pusherServer: {
    authorizeChannel: vi.fn((socketId: string, channel: string) => ({
      auth: `mock_key:mock_auth_signature_for_${channel}`,
    })),
  },
}));

import { POST } from "@/app/api/pusher/auth/route";

describe("Pusher Channel Authorization Route (POST /api/pusher/auth)", () => {
  beforeEach(() => {
    currentCookieValue = undefined;
  });

  it("returns 401 when no user is authenticated", async () => {
    const formData = new FormData();
    formData.append("socket_id", "123.456");
    formData.append("channel_name", "private-user-user_alice");

    const req = new NextRequest("http://localhost:3000/api/pusher/auth", {
      method: "POST",
      body: formData,
    });

    const res = await POST(req);
    expect(res.status).toBe(401);
  });

  it("returns 403 Forbidden when user attempts to subscribe to another user's private channel", async () => {
    currentCookieValue = "user_alice_token"; // Logged in as user_alice

    const formData = new FormData();
    formData.append("socket_id", "123.456");
    formData.append("channel_name", "private-user-user_bob"); // Subscribing to Bob's channel

    const req = new NextRequest("http://localhost:3000/api/pusher/auth", {
      method: "POST",
      body: formData,
    });

    const res = await POST(req);
    expect(res.status).toBe(403);
  });

  it("authorizes successfully when user subscribes to their own private channel", async () => {
    currentCookieValue = "user_alice_token"; // Logged in as user_alice

    const formData = new FormData();
    formData.append("socket_id", "123.456");
    formData.append("channel_name", "private-user-user_alice"); // Subscribing to own channel

    const req = new NextRequest("http://localhost:3000/api/pusher/auth", {
      method: "POST",
      body: formData,
    });

    const res = await POST(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.auth).toBe("mock_key:mock_auth_signature_for_private-user-user_alice");
  });
});
