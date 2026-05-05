"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function ChatModuleLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");

  const channels = [
    { id: "general", name: "general" },
    { id: "product-team", name: "product-team" },
    { id: "announcements", name: "announcements" },
    { id: "design-critique", name: "design-critique" },
  ];

  const dms = [
    { id: "sarah-jenkins", name: "Sarah Jenkins", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150", status: "online" },
    { id: "michael-scott", name: "Michael Scott", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150", status: "online" },
    { id: "elena-rodriguez", name: "Elena Rodriguez", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150", status: "offline" },
  ];

  return (
    <div className="flex h-screen bg-white font-['Inter',sans-serif]">
      {/* Sidebar Navigation */}
      <div className="w-[280px] border-r border-[#e5e7eb] flex flex-col bg-[#f9fafb]">
        {/* Search Bar */}
        <div className="p-4">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Jump to..."
              className="w-full bg-white border border-[#e5e7eb] rounded-[6px] py-1.5 pl-9 pr-3 text-[14px] outline-none focus:border-[#5048e5] transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-2">
          {/* Channels Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between px-2 mb-2 group">
              <span className="text-[11px] font-bold text-[#6b7280] uppercase tracking-wider">Channels</span>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 hover:bg-gray-200 rounded">
                <svg className="w-3.5 h-3.5 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
            <div className="space-y-[2px]">
              {channels.map((channel) => {
                const isActive = pathname.includes(channel.id);
                return (
                  <Link
                    key={channel.id}
                    href={`/chat/channels/${channel.id}`}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-[6px] text-[14px] transition-colors ${
                      isActive 
                        ? "bg-[#e0e1ff] text-[#5048e5] font-semibold" 
                        : "text-[#4b5563] hover:bg-gray-200"
                    }`}
                  >
                    <span className={`text-[16px] ${isActive ? "text-[#5048e5]" : "text-[#9ca3af]"}`}>#</span>
                    <span className="truncate">{channel.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Direct Messages Section */}
          <div>
            <div className="flex items-center justify-between px-2 mb-2 group">
              <span className="text-[11px] font-bold text-[#6b7280] uppercase tracking-wider">Direct Messages</span>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 hover:bg-gray-200 rounded">
                <svg className="w-3.5 h-3.5 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
            <div className="space-y-[2px]">
              {dms.map((dm) => {
                const isActive = pathname.includes(dm.id);
                return (
                  <Link
                    key={dm.id}
                    href={`/chat/dm/${dm.id}`}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-[6px] text-[14px] transition-colors ${
                      isActive 
                        ? "bg-[#e0e1ff] text-[#5048e5] font-semibold" 
                        : "text-[#4b5563] hover:bg-gray-200"
                    }`}
                  >
                    <div className="relative shrink-0">
                      <img src={dm.avatar} alt="" className="w-5 h-5 rounded-full object-cover" />
                      {dm.status === "online" && (
                        <div className="absolute -right-0.5 -bottom-0.5 w-2 h-2 bg-[#10b981] border border-white rounded-full" />
                      )}
                    </div>
                    <span className="truncate">{dm.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
