"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { getChatHistory, sendMessage, markConversationAsRead } from "@/lib/actions";
import { pusherClient } from "@/lib/pusher-client";
import UserAvatar from "@/components/UserAvatar";

type Contact = {
  id: string;
  name: string;
  role: string;
  img?: string | null;
  lastMessage: string | null;
  lastMessageTime: Date | string | null;
  unreadCount: number;
  subject?: string;
};

type Message = {
  id: string;
  senderId: string;
  senderName: string;
  receiverId: string;
  content: string;
  createdAt: Date | string;
  isRead: boolean;
};

type ChatClientPageProps = {
  currentUserId: string;
  currentUserRole: string;
  initialContacts: Contact[];
};

const ChatClientPage: React.FC<ChatClientPageProps> = ({
  currentUserId,
  currentUserRole,
  initialContacts,
}) => {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [selectedContactId, setSelectedContactId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingChat, setLoadingChat] = useState(false);
  const [activeTab, setActiveTab] = useState<"chats" | "directory">("chats");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // 1. Filtered contacts based on search query
  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Active Chats: Conversations with messages, or unread count, or the currently selected contact
  const chatsList = filteredContacts.filter(
    (c) => c.lastMessageTime !== null || c.unreadCount > 0 || c.id === selectedContactId
  );

  // Directory / Teachers: All allowed contacts
  const directoryList = filteredContacts;

  // Get currently active contact details
  const activeContact = contacts.find((c) => c.id === selectedContactId);

  // Scroll to bottom helper
  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  // 2. Fetch Chat History when a contact is clicked
  useEffect(() => {
    if (!selectedContactId) return;

    const fetchHistory = async () => {
      setLoadingChat(true);
      try {
        const history = await getChatHistory(selectedContactId);
        // Cast SQLite date strings or Date objects properly
        setMessages(history as any);

        // Reset unread count locally in sidebar contacts
        setContacts((prev) =>
          prev.map((c) =>
            c.id === selectedContactId ? { ...c, unreadCount: 0 } : c
          )
        );
      } catch (err) {
        console.error("Failed to load chat history:", err);
      } finally {
        setLoadingChat(false);
      }
    };

    fetchHistory();
  }, [selectedContactId]);

  // Scroll to bottom when messages load/change
  useEffect(() => {
    scrollToBottom(messages.length > 5 ? "smooth" : "auto");
  }, [messages]);

  // 3. Real-time Pusher event listener
  useEffect(() => {
    if (!pusherClient) {
      console.warn("Pusher client is not initialized.");
      return;
    }

    const channelName = `user-${currentUserId}`;
    const channel = pusherClient.subscribe(channelName);

    const handleNewMessage = (msg: Message) => {
      // Check if the message is from our currently active chat partner
      if (selectedContactId && msg.senderId === selectedContactId) {
        setMessages((prev) => [...prev, msg]);
        // Notify database that message was read
        markConversationAsRead(selectedContactId);
      } else {
        // Increment unread count for the sender in the sidebar contacts
        setContacts((prev) =>
          prev.map((c) =>
            c.id === msg.senderId ? { ...c, unreadCount: c.unreadCount + 1 } : c
          )
        );
      }

      // Update last message preview and move that contact to the top of the sidebar list
      setContacts((prev) => {
        const targetIdx = prev.findIndex((c) => c.id === msg.senderId || c.id === msg.receiverId);
        if (targetIdx === -1) return prev;

        const updatedContacts = [...prev];
        const targetContact = {
          ...updatedContacts[targetIdx],
          lastMessage: msg.content,
          lastMessageTime: msg.createdAt,
        };

        // Remove from old position and push to index 0
        updatedContacts.splice(targetIdx, 1);
        return [targetContact, ...updatedContacts];
      });
    };

    channel.bind("new-message", handleNewMessage);

    return () => {
      channel.unbind("new-message", handleNewMessage);
      if (pusherClient) {
        pusherClient.unsubscribe(channelName);
      }
    };
  }, [currentUserId, selectedContactId]);

  // 4. Send Message Handler
  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedContactId) return;

    const messageText = newMessage.trim();
    setNewMessage("");

    // Optimistically insert message into active message log
    const tempId = `temp-${Date.now()}`;
    const optimisticMessage: Message = {
      id: tempId,
      senderId: currentUserId,
      senderName: "Me",
      receiverId: selectedContactId,
      content: messageText,
      createdAt: new Date().toISOString(),
      isRead: false,
    };

    setMessages((prev) => [...prev, optimisticMessage]);

    // Update last message preview in sidebar immediately
    setContacts((prev) => {
      const idx = prev.findIndex((c) => c.id === selectedContactId);
      if (idx === -1) return prev;

      const updated = [...prev];
      const target = {
        ...updated[idx],
        lastMessage: messageText,
        lastMessageTime: new Date().toISOString(),
      };
      updated.splice(idx, 1);
      return [target, ...updated];
    });

    try {
      const response = await sendMessage(selectedContactId, messageText);
      if (response.success && response.message) {
        // Swap optimistic message with the database persisted record
        setMessages((prev) =>
          prev.map((m) => (m.id === tempId ? (response.message as any) : m))
        );
      } else {
        console.error("Message send failed:", response.error);
      }
    } catch (err) {
      console.error("Exception during message sending:", err);
    }
  };

  // Helper to color-code role tags matching the primary theme
  const getRoleBadge = (role: string) => {
    switch (role.toLowerCase()) {
      case "teacher":
        return <span className="text-[10px] bg-hsPurpleLight text-purple-700 font-bold px-1.5 py-0.5 rounded capitalize">teacher</span>;
      case "parent":
        return <span className="text-[10px] bg-hsSkyLight text-sky-700 font-bold px-1.5 py-0.5 rounded capitalize">parent</span>;
      case "student":
        return <span className="text-[10px] bg-hsGreenLight text-emerald-700 font-bold px-1.5 py-0.5 rounded capitalize">student</span>;
      case "admin":
        return <span className="text-[10px] bg-rose-50 text-rose-700 font-bold px-1.5 py-0.5 rounded capitalize">admin</span>;
      default:
        return <span className="text-[10px] bg-slate-50 text-slate-700 font-bold px-1.5 py-0.5 rounded capitalize">{role}</span>;
    }
  };

  return (
    <>
      {/* SIDEBAR: CONTACTS LIST */}
      <div className="w-80 flex-shrink-0 border-r border-slate-100 flex flex-col h-full bg-white">
        <div className="p-4 border-b border-slate-100">
          <h1 className="text-xl font-bold text-slate-800 mb-2">Chats</h1>
          
          {/* Segmented Tabs Control */}
          <div className="flex bg-slate-50 p-1 rounded-xl mb-3 border border-slate-100/50">
            <button
              onClick={() => setActiveTab("chats")}
              className={`flex-1 py-1.5 text-center text-xs font-bold rounded-lg transition-all ${
                activeTab === "chats"
                  ? "bg-hsSky text-sky-800 shadow-sm border border-sky-100/50"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              Conversations
            </button>
            <button
              onClick={() => setActiveTab("directory")}
              className={`flex-1 py-1.5 text-center text-xs font-bold rounded-lg transition-all ${
                activeTab === "directory"
                  ? "bg-hsSky text-sky-800 shadow-sm border border-sky-100/50"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {currentUserRole === "parent" || currentUserRole === "student" ? "Teachers" : "Contacts"}
            </button>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder={activeTab === "chats" ? "Search chats..." : "Search directory..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 text-sm text-slate-800 px-4 py-2.5 pl-9 rounded-xl outline-none focus:ring-1 focus:ring-slate-200 transition-all border border-transparent font-medium"
            />
            <Image
              src="/search.png"
              alt=""
              width={14}
              height={14}
              className="absolute left-3.5 top-3.5 opacity-40"
            />
          </div>
        </div>

        {/* SCROLLABLE CONTACTS CONTAINER */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {activeTab === "chats" ? (
            chatsList.length === 0 ? (
              <div className="text-center py-12 px-4 flex flex-col items-center">
                <Image src="/message.png" alt="" width={24} height={24} className="opacity-30 mb-2" />
                <p className="text-xs text-slate-400 font-semibold leading-relaxed">
                  No active conversations.
                </p>
                <button
                  onClick={() => setActiveTab("directory")}
                  className="mt-3 text-xs text-indigo-600 font-bold hover:underline"
                >
                  Find {currentUserRole === "parent" || currentUserRole === "student" ? "Teachers" : "Contacts"} &rarr;
                </button>
              </div>
            ) : (
              chatsList.map((contact) => {
                const isSelected = contact.id === selectedContactId;
                const formattedTime = contact.lastMessageTime
                  ? new Intl.DateTimeFormat("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    }).format(new Date(contact.lastMessageTime))
                  : "";

                return (
                  <button
                    key={contact.id}
                    onClick={() => setSelectedContactId(contact.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left ${
                      isSelected
                        ? "bg-hsSkyLight border border-hsSky/40"
                        : "hover:bg-slate-50/50 border border-transparent"
                    }`}
                  >
                    <UserAvatar
                      name={contact.name}
                      role={contact.role}
                      img={contact.img}
                      className="w-11 h-11"
                    />
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="font-bold text-slate-800 text-sm truncate">
                            {contact.name}
                          </span>
                          {getRoleBadge(contact.role)}
                        </div>
                        <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
                          {formattedTime}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs text-slate-500 font-medium truncate min-w-0">
                          {contact.lastMessage || "No messages yet"}
                        </p>
                        {contact.unreadCount > 0 && (
                          <span className="bg-red-500 text-white text-[9px] font-extrabold w-4.5 h-4.5 rounded-full flex items-center justify-center flex-shrink-0">
                            {contact.unreadCount}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })
            )
          ) : (
            /* DIRECTORY / TEACHERS TAB */
            directoryList.length === 0 ? (
              <div className="text-center py-8 text-xs text-slate-400 font-semibold">
                No matches found in directory
              </div>
            ) : (
              directoryList.map((contact) => {
                return (
                  <div
                    key={contact.id}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50/50 border border-transparent transition-all"
                  >
                    <UserAvatar
                      name={contact.name}
                      role={contact.role}
                      img={contact.img}
                      className="w-11 h-11"
                    />
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-1.5 min-w-0 mb-0.5 font-semibold">
                        <span className="font-bold text-slate-800 text-sm truncate">
                          {contact.name}
                        </span>
                        {getRoleBadge(contact.role)}
                      </div>
                      <p className="text-[10px] text-slate-400 font-bold truncate">
                        {contact.subject ? `${contact.subject} Teacher` : "Associated Contact"}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedContactId(contact.id);
                        setActiveTab("chats");
                      }}
                      className="px-3 py-1.5 bg-hsSky hover:bg-sky-200 text-sky-800 border border-sky-100/50 rounded-lg text-[10px] font-bold shadow-sm transition-all"
                    >
                      Chat
                    </button>
                  </div>
                );
              })
            )
          )}
        </div>
      </div>

      {/* CHAT DISPLAY WINDOW */}
      <div className="flex-1 flex flex-col h-full bg-slate-50/30">
        {selectedContactId === null ? (
          /* EMPTY CHAT WINDOW */
          <div className="flex-grow flex flex-col items-center justify-center p-8 text-center bg-slate-50/10">
            <div className="bg-white p-4 rounded-full shadow-sm border border-slate-50 mb-3.5">
              <Image src="/message.png" alt="" width={32} height={32} className="opacity-70" />
            </div>
            <h2 className="text-md font-bold text-slate-800 mb-1">Your School Conversations</h2>
            <p className="text-xs text-slate-400 font-medium max-w-sm leading-relaxed">
              Select an academically associated student, teacher, or parent from the contacts list to start messaging.
            </p>
          </div>
        ) : (
          /* ACTIVE CONVERSATION PANE */
          <>
            {/* CHAT HEADER */}
            <div className="bg-white p-4 border-b border-slate-100 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <UserAvatar
                  name={activeContact?.name || "User"}
                  role={activeContact?.role || "contact"}
                  img={activeContact?.img}
                  className="w-10 h-10"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold text-slate-800 text-sm">
                      {activeContact?.name}
                    </h2>
                    {activeContact && getRoleBadge(activeContact.role)}
                  </div>
                  <span className="text-[10px] text-emerald-600 font-bold block leading-tight">
                    Active Session
                  </span>
                </div>
              </div>
            </div>

            {/* CHAT BUBBLES SCROLL AREA */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
              {loadingChat ? (
                <div className="flex items-center justify-center h-full text-xs text-slate-400 font-medium gap-2">
                  <span className="w-4 h-4 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin"></span>
                  Loading messages...
                </div>
              ) : messages.length === 0 ? (
                <div className="text-center py-12 text-xs text-slate-400 font-medium">
                  No messages yet. Send a message to start the conversation!
                </div>
              ) : (
                messages.map((msg) => {
                  const isOwnMessage = msg.senderId === currentUserId;
                  const formattedTime = new Intl.DateTimeFormat("en-US", {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  }).format(new Date(msg.createdAt));

                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${
                        isOwnMessage ? "items-end" : "items-start"
                      }`}
                    >
                      <div
                        className={`max-w-[70%] px-4 py-2.5 rounded-2xl text-xs font-semibold leading-relaxed shadow-sm ${
                          isOwnMessage
                            ? "bg-hsSky text-sky-800 rounded-tr-sm border border-sky-100/30"
                            : "bg-white text-slate-800 border border-slate-100 rounded-tl-sm"
                        }`}
                      >
                        {msg.content}
                      </div>
                      <span className="text-[9px] text-slate-400 font-semibold mt-1 px-1">
                        {formattedTime}
                      </span>
                    </div>
                  );
                })
              )}
              {/* Anchor div for auto scrolling */}
              <div ref={messagesEndRef} />
            </div>

            {/* MESSAGE SEND BAR */}
            <form
              onSubmit={handleSend}
              className="bg-white p-4 border-t border-slate-100 flex items-center gap-3 shadow-md"
            >
              <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 bg-slate-50 text-xs text-slate-800 px-4 py-3 rounded-xl outline-none focus:ring-1 focus:ring-slate-200 transition-all border border-transparent font-medium"
              />
              <button
                type="submit"
                disabled={!newMessage.trim()}
                className={`p-3 rounded-xl flex items-center justify-center shadow-sm border transition-all ${
                  newMessage.trim()
                    ? "bg-hsSky hover:bg-sky-200 text-sky-800 border-sky-100"
                    : "bg-slate-50 text-slate-400 border-slate-100 cursor-not-allowed"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default ChatClientPage;
