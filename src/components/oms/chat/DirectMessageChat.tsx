"use client";
import { useState } from "react";

interface DirectMessageChatProps {
  userName?: string;
  dmId?: string;
}

export function DirectMessageChat({ userName = "Sarah Jenkins" }: DirectMessageChatProps) {
  const [message, setMessage] = useState("");
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div className="flex h-full min-w-0 bg-white font-['Inter',sans-serif]">
      {/* Middle Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-[72px] border-b border-[#f3f4f6] flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150" alt="" className="w-10 h-10 rounded-full object-cover" />
              <div className="absolute -right-0.5 -bottom-0.5 w-3 h-3 bg-[#10b981] border-2 border-white rounded-full" />
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-[#111827]">{userName}</h2>
              <p className="text-[12px] text-[#10b981] font-medium">Active now</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2.5 border border-[#f3f4f6] hover:bg-gray-50 rounded-xl transition-colors">
              <svg className="w-5 h-5 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
            <button className="p-2.5 border border-[#f3f4f6] hover:bg-gray-50 rounded-xl transition-colors">
              <svg className="w-5 h-5 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
            <button className="p-2.5 border border-[#f3f4f6] hover:bg-gray-50 rounded-xl transition-colors">
              <svg className="w-5 h-5 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </header>

        {/* Chat Content */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-[#f3f4f6]"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-[11px] font-bold text-[#9ca3af] uppercase tracking-widest">Today</span>
            </div>
          </div>

          {/* Sarah Message */}
          <div className="flex items-end gap-3">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150" alt="" className="w-8 h-8 rounded-full object-cover" />
            <div className="flex flex-col gap-1 max-w-[70%]">
              <div className="bg-[#f3f4f6] p-4 rounded-2xl rounded-bl-none">
                <p className="text-[14px] text-[#374151] leading-relaxed">
                  Hey Alex! I've just finished reviewing the wireframes for the new dashboard. Everything looks great!
                </p>
              </div>
              <span className="text-[11px] text-[#9ca3af]">10:15 AM</span>
            </div>
          </div>

          {/* Alex Message */}
          <div className="flex items-end justify-end gap-3">
            <div className="flex flex-col items-end gap-1 max-w-[70%]">
              <div className="bg-[#5048e5] p-4 rounded-2xl rounded-br-none text-white">
                <p className="text-[14px] leading-relaxed">
                  That's awesome news, Sarah! Thanks for the quick feedback. Did you notice the updated navigation flow?
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-[#9ca3af]">10:22 AM</span>
                <svg className="w-3.5 h-3.5 text-[#5048e5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7m-12 0l4 4L22 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Sarah Message */}
          <div className="flex items-end gap-3">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150" alt="" className="w-8 h-8 rounded-full object-cover" />
            <div className="flex flex-col gap-1 max-w-[70%]">
              <div className="bg-[#f3f4f6] p-4 rounded-2xl rounded-bl-none">
                <p className="text-[14px] text-[#374151] leading-relaxed">
                  Yes, it's much more intuitive. Are we still on for the project sync at 2 PM to finalize the dev handoff?
                </p>
              </div>
              <span className="text-[11px] text-[#9ca3af]">10:30 AM</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 shrink-0">
          <div className="flex items-center gap-3 bg-[#f3f4f6] rounded-[24px] px-4 py-2">
            <button className="p-2 hover:bg-gray-200 rounded-full text-[#6b7280]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-transparent border-none outline-none text-[14px] py-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="p-2 hover:bg-gray-200 rounded-full text-[#6b7280]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button className="bg-[#5048e5] p-2.5 rounded-full text-white shadow-lg shadow-[#5048e5]/20 hover:bg-[#4338ca] transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Profile */}
      {showProfile && (
        <div className="w-[340px] border-l border-[#f3f4f6] flex flex-col bg-white overflow-y-auto">
          <div className="p-8 flex flex-col items-center text-center border-b border-[#f3f4f6]">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300" alt="" className="w-[120px] h-[120px] rounded-full object-cover mb-4 ring-4 ring-[#f3f4f6]" />
            <h3 className="text-[20px] font-bold text-[#111827]">{userName}</h3>
            <p className="text-[13px] text-[#9ca3af] mb-6">Senior Product Designer</p>
            
            <div className="grid grid-cols-2 gap-4 w-full">
              <button className="flex flex-col items-center gap-2 p-4 bg-[#f8fafc] hover:bg-gray-100 rounded-2xl transition-colors group">
                <svg className="w-5 h-5 text-[#5048e5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-[11px] font-bold text-[#6b7280] uppercase tracking-wider group-hover:text-[#5048e5]">Profile</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 bg-[#f8fafc] hover:bg-gray-100 rounded-2xl transition-colors group">
                <svg className="w-5 h-5 text-[#5048e5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
                <span className="text-[11px] font-bold text-[#6b7280] uppercase tracking-wider group-hover:text-[#5048e5]">Mute</span>
              </button>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Common Projects */}
            <section>
              <h4 className="text-[12px] font-bold text-[#9ca3af] uppercase tracking-widest mb-4">Common Projects</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 border border-[#f3f4f6] rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="w-10 h-10 bg-[#eef2ff] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#5048e5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                  </div>
                  <span className="text-[14px] font-bold text-[#374151]">Alpha Redesign</span>
                </div>
                <div className="flex items-center gap-3 p-3 border border-[#f3f4f6] rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="w-10 h-10 bg-[#ecfdf5] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-[14px] font-bold text-[#374151]">Growth Portal</span>
                </div>
              </div>
            </section>

            {/* Shared Media */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[12px] font-bold text-[#9ca3af] uppercase tracking-widest">Shared Media</h4>
                <button className="text-[12px] font-bold text-[#5048e5] hover:underline tracking-tight">View all</button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden group cursor-pointer relative">
                    <img 
                      src={`https://images.unsplash.com/photo-${1550000000000 + i}?auto=format&fit=crop&q=80&w=100&h=100`} 
                      alt="" 
                      className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                    />
                  </div>
                ))}
                <div className="aspect-square bg-[#f3f4f6] rounded-lg flex items-center justify-center text-[13px] font-bold text-[#6b7280] cursor-pointer hover:bg-gray-200">
                  +12
                </div>
              </div>
            </section>

            {/* Files */}
            <section>
              <h4 className="text-[12px] font-bold text-[#9ca3af] uppercase tracking-widest mb-4">Files</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-[#f8fafc] rounded-lg border border-[#f3f4f6] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#374151] group-hover:text-[#5048e5]">Dashboard_V2.fig</p>
                    <p className="text-[11px] text-[#9ca3af]">2.4 MB • Oct 12</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-[#f8fafc] rounded-lg border border-[#f3f4f6] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#374151] group-hover:text-[#5048e5]">Project_Sync_Notes.pdf</p>
                    <p className="text-[11px] text-[#9ca3af]">842 KB • Oct 10</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
