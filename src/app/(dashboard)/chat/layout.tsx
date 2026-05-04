"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import svgPaths from "@/imports/Dashboard-1/svg-r8n5wq7vya";
import CreateChannel from "@/imports/CreateChannel/CreateChannel";

export default function ChatModuleLayout({ children }: { children: React.ReactNode }) {
  const [modalView, setModalView] = useState<null | "create-channel">(null);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const conversations = [
    { id: "1", name: "general", type: "channel", unread: 3, timestamp: "2:34 PM", isOnline: true },
    { id: "2", name: "engineering", type: "channel", unread: 12, timestamp: "1:12 PM", isOnline: true },
    { id: "3", name: "design", type: "channel", unread: 0, timestamp: "Yesterday", isOnline: true },
    { id: "4", name: "Ashwini Reddy", type: "dm", unread: 2, timestamp: "11:45 AM", isOnline: true },
    { id: "5", name: "Jordan Lee", type: "dm", unread: 0, timestamp: "Monday", isOnline: false },
    { id: "6", name: "marketing", type: "channel", unread: 5, timestamp: "3:21 PM", isOnline: true },
  ];

  return (
    <div className="flex h-full bg-white">
      {/* Chat Sidebar (Module specific) */}
      <div className="w-[320px] border-r border-[#e2e8f0] flex flex-col shrink-0">
        <div className="px-6 py-4 flex items-center justify-between border-b border-[#e2e8f0]">
          <h1 className="font-bold text-[20px] text-[#0f172a]">Messages</h1>
          <button 
            onClick={() => setModalView("create-channel")}
            className="p-2 hover:bg-gray-100 rounded-lg text-[#5048e5]"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 4v8M4 8h8" />
            </svg>
          </button>
        </div>

        <div className="px-4 py-3">
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-lg px-4 py-2 text-[14px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv) => (
            <Link
              key={conv.id}
              href={conv.type === "channel" ? `/chat/channels/${conv.id}` : `/chat/dm/${conv.id}`}
              className={`flex items-center gap-3 px-6 py-3 hover:bg-[#f8fafc] transition-colors border-b border-[#f1f5f9] ${
                pathname.includes(`/${conv.id}`) ? "bg-[#f8fafc]" : ""
              }`}
            >
              <div className={`size-10 rounded-lg flex items-center justify-center shrink-0 ${
                conv.type === "channel" ? "bg-[#ede9fe] text-[#5048e5]" : "bg-gray-100 text-gray-500"
              }`}>
                {conv.type === "channel" ? "#" : conv.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-[14px] truncate">{conv.name}</div>
                  <div className="text-[11px] text-gray-400">{conv.timestamp}</div>
                </div>
                <div className="text-[12px] text-gray-500 truncate">
                  {conv.unread > 0 ? `${conv.unread} new messages` : "No new messages"}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Chat Content Area */}
      <div className="flex-1 overflow-hidden bg-[#f8fafc]">
        {children}
      </div>

      {/* Modals */}
      {modalView === "create-channel" && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]" onClick={() => setModalView(null)}>
          <div className="bg-white rounded-[16px] p-8 max-w-[500px] w-full" onClick={(e) => e.stopPropagation()}>
            <CreateChannel />
          </div>
        </div>
      )}
    </div>
  );
}
