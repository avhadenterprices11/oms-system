"use client";
import { useState } from "react";

export function MessageSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = [
    {
      id: 1,
      channel: "#general",
      sender: "Sarah Miller",
      text: "Hey team! Just pushed the latest API changes to staging.",
      time: "10:32 AM",
      date: "Today",
    },
    {
      id: 2,
      channel: "#engineering",
      sender: "Michael Chen",
      text: "The new authentication flow is working great. Nice work everyone!",
      time: "Yesterday",
      date: "April 27",
    },
    {
      id: 3,
      channel: "Direct Message",
      sender: "Ashwini Reddy",
      text: "Can you review the API migration spec before the standup?",
      time: "11:45 AM",
      date: "April 26",
    },
    {
      id: 4,
      channel: "#product",
      sender: "Jordan Lee",
      text: "Updated the roadmap with the new API features. Check it out!",
      time: "3:21 PM",
      date: "April 25",
    },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Search Header */}
      <div className="border-b border-[#e2e8f0] px-6 py-4">
        <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] text-[#0f172a] mb-3">
          Search Messages
        </h2>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for messages, files, or people..."
            className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-lg h-[44px] pl-11 pr-4 text-[14px] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#5048e5] focus:border-transparent"
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
            fill="none"
            viewBox="0 0 16 16"
            stroke="#94a3b8"
            strokeWidth="2"
          >
            <circle cx="7" cy="7" r="5" />
            <path strokeLinecap="round" d="M11 11l3 3" />
          </svg>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-[#e2e8f0] px-6 py-3 flex gap-2">
        <button className="px-3 py-1.5 bg-[#5048e5] text-white rounded-lg text-[13px] font-medium">
          All
        </button>
        <button className="px-3 py-1.5 bg-[#f8fafc] text-[#64748b] rounded-lg text-[13px] font-medium hover:bg-[#f1f5f9]">
          Messages
        </button>
        <button className="px-3 py-1.5 bg-[#f8fafc] text-[#64748b] rounded-lg text-[13px] font-medium hover:bg-[#f1f5f9]">
          Files
        </button>
        <button className="px-3 py-1.5 bg-[#f8fafc] text-[#64748b] rounded-lg text-[13px] font-medium hover:bg-[#f1f5f9]">
          People
        </button>
      </div>

      {/* Search Results */}
      <div className="flex-1 overflow-y-auto">
        {searchQuery ? (
          <div className="p-6">
            <div className="mb-4">
              <span className="text-[13px] text-[#64748b]">
                {searchResults.length} results for "{searchQuery}"
              </span>
            </div>
            <div className="space-y-4">
              {searchResults.map((result) => (
                <div
                  key={result.id}
                  className="border border-[#e2e8f0] rounded-lg p-4 hover:bg-[#f8fafc] cursor-pointer transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }}
                    >
                      <span className="text-white text-[13px] font-bold">
                        {result.sender.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#0f172a]">
                          {result.sender}
                        </span>
                        <span className="text-[12px] text-[#94a3b8]">in {result.channel}</span>
                        <span className="text-[12px] text-[#94a3b8]">· {result.time}</span>
                      </div>
                      <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#334155]">
                        {result.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center px-6">
            <div className="w-16 h-16 bg-[#f1f5f9] rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="#94a3b8" strokeWidth="2">
                <circle cx="14" cy="14" r="9" />
                <path strokeLinecap="round" d="M21 21l6 6" />
              </svg>
            </div>
            <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#0f172a] mb-2">
              Search your messages
            </h3>
            <p className="text-[14px] text-[#64748b] max-w-[320px]">
              Find messages, files, and people across all your conversations
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
