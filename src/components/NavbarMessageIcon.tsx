"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { pusherClient } from "@/lib/pusher-client";
import { getUnreadMessagesCount } from "@/lib/actions";

type NavbarMessageIconProps = {
  initialCount: number;
  currentUserId: string;
};

const NavbarMessageIcon: React.FC<NavbarMessageIconProps> = ({
  initialCount,
  currentUserId,
}) => {
  const [unreadCount, setUnreadCount] = useState(initialCount);
  const pathname = usePathname();

  // Reset or refetch unread messages count on route navigation shifts
  useEffect(() => {
    const refetchCount = async () => {
      try {
        const count = await getUnreadMessagesCount();
        setUnreadCount(count);
      } catch (err) {
        console.error("Failed to refetch unread message count:", err);
      }
    };
    refetchCount();
  }, [pathname]);

  // Subscribe to real-time events to increment the badge count dynamically
  useEffect(() => {
    if (!pusherClient) return;

    const channelName = `user-${currentUserId}`;
    const channel = pusherClient.subscribe(channelName);

    const handleNewMessage = () => {
      // Do not increment if user is already actively view the messages dashboard
      if (!pathname.includes("/list/messages")) {
        setUnreadCount((prev) => prev + 1);
      }
    };

    channel.bind("new-message", handleNewMessage);

    return () => {
      channel.unbind("new-message", handleNewMessage);
      if (pusherClient) {
        pusherClient.unsubscribe(channelName);
      }
    };
  }, [currentUserId, pathname]);

  return (
    <Link
      href="/list/messages"
      className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative hover:bg-slate-50 transition-colors"
      title="Messages"
    >
      <Image src="/message.png" alt="Messages" width={20} height={20} />
      {unreadCount > 0 && (
        <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-rose-500 text-white rounded-full text-[10px] font-extrabold shadow-sm border border-white">
          {unreadCount}
        </div>
      )}
    </Link>
  );
};

export default NavbarMessageIcon;
