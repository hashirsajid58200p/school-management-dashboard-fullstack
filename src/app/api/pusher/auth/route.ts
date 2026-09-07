import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { pusherServer } from "@/lib/pusher";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    let socketId: string | null = null;
    let channel: string | null = null;

    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const body = await req.json();
      socketId = body.socket_id;
      channel = body.channel_name;
    } else {
      const formData = await req.formData();
      socketId = formData.get("socket_id") as string;
      channel = formData.get("channel_name") as string;
    }

    if (!socketId || !channel) {
      return new NextResponse("Missing socket_id or channel_name", { status: 400 });
    }

    // Only allow user to subscribe to their own private channel
    const expectedChannel = `private-user-${userId}`;
    if (channel !== expectedChannel) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    const authResponse = pusherServer.authorizeChannel(socketId, channel);
    return NextResponse.json(authResponse);
  } catch (error) {
    console.error("Pusher auth error:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
