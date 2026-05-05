"use client";
import { useState } from "react";

interface ChannelChatProps {
  channelName?: string;
  channelId?: string;
}

export function ChannelChat({ channelName = "product-team" }: ChannelChatProps) {
  const [message, setMessage] = useState("");
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="flex h-full min-w-0 bg-white font-['Inter',sans-serif]">
      {/* Middle Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-[64px] border-b border-[#e5e7eb] flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="text-[18px] font-bold text-[#111827]"># {channelName}</h2>
            <button className="flex items-center gap-1 px-2.5 py-1 bg-[#f3f4f6] hover:bg-gray-200 rounded-md transition-colors">
              <svg className="w-4 h-4 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197" />
              </svg>
              <span className="text-[13px] font-medium text-[#4b5563]">12 Members</span>
            </button>
          </div>
          <div className="flex items-center gap-4 text-[#6b7280]">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
            <button 
              className={`p-2 hover:bg-gray-100 rounded-full transition-colors ${showDetails ? "text-[#5048e5]" : ""}`}
              onClick={() => setShowDetails(!showDetails)}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Yesterday */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-[#f3f4f6]"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-[11px] font-bold text-[#9ca3af] uppercase tracking-widest">Yesterday</span>
            </div>
          </div>

          <div className="flex gap-4 group">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150" alt="" className="w-10 h-10 rounded-lg object-cover" />
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[14px] font-bold text-[#111827]">Michael Scott</span>
                <span className="text-[11px] text-[#9ca3af]">4:20 PM</span>
              </div>
              <p className="text-[14px] text-[#4b5563] leading-relaxed">
                Hey team, did everyone see the updated Figma file for the new dashboard? I've pinned it to the channel. Let me know if the charts look okay.
              </p>
            </div>
          </div>

          <div className="flex gap-4 group">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150" alt="" className="w-10 h-10 rounded-lg object-cover" />
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[14px] font-bold text-[#111827]">Sarah Jenkins</span>
                <span className="text-[11px] text-[#9ca3af]">4:25 PM</span>
              </div>
              <p className="text-[14px] text-[#4b5563] leading-relaxed">
                Looks great Michael! I think the <span className="text-[#5048e5] font-medium cursor-pointer hover:underline">@design-critique</span> team did an amazing job on the accessibility features.
              </p>
            </div>
          </div>

          {/* Today */}
          <div className="relative pt-4">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-[#f3f4f6]"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-[11px] font-bold text-[#9ca3af] uppercase tracking-widest">Today</span>
            </div>
          </div>

          <div className="flex gap-4 group">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150" alt="" className="w-10 h-10 rounded-lg object-cover" />
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[14px] font-bold text-[#111827]">Elena Rodriguez</span>
                <span className="text-[11px] text-[#9ca3af]">10:15 AM</span>
              </div>
              <div className="space-y-4">
                <p className="text-[14px] text-[#4b5563] leading-relaxed">
                  Good morning everyone! Reminder that we have our weekly sprint planning at 2 PM today.
                </p>
                <div className="space-y-2">
                  <p className="text-[14px] text-[#4b5563] font-medium">Tasks to cover:</p>
                  <ul className="list-disc list-inside text-[14px] text-[#4b5563] space-y-1 ml-2">
                    <li>Q3 Roadmap alignment</li>
                    <li>Mobile view bug fixes</li>
                    <li>New user onboarding flow</li>
                  </ul>
                </div>
                {/* File Attachment */}
                <div className="flex items-center justify-between p-3 border border-[#e5e7eb] rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group/file w-full max-w-[400px]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#fff1f2] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#ef4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-[#111827]">Sprint_Notes_Q3.pdf</p>
                      <p className="text-[11px] text-[#9ca3af]">1.2 MB • PDF Document</p>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                    <svg className="w-5 h-5 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer / Input */}
        <div className="p-6 shrink-0">
          <div className="border border-[#e5e7eb] rounded-xl shadow-sm">
            <div className="flex items-center gap-1 p-2 border-b border-[#f3f4f6]">
              <button className="p-1.5 hover:bg-gray-100 rounded text-[#6b7280]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <button className="p-1.5 hover:bg-gray-100 rounded text-[#6b7280] font-serif font-bold italic">I</button>
              <button className="p-1.5 hover:bg-gray-100 rounded text-[#6b7280]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </button>
              <div className="w-px h-4 bg-gray-200 mx-1" />
              <button className="p-1.5 hover:bg-gray-100 rounded text-[#6b7280]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </button>
              <button className="p-1.5 hover:bg-gray-100 rounded text-[#6b7280]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </button>
            </div>
            <div className="relative px-4 py-3">
              <textarea
                placeholder={`Message #${channelName}`}
                className="w-full text-[14px] text-[#111827] outline-none placeholder:text-[#9ca3af] resize-none h-[80px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg text-[#6b7280]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg text-[#6b7280] font-bold text-[18px]">@</button>
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg text-[#6b7280]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
                <button className="bg-[#5048e5] text-white p-2.5 rounded-lg hover:bg-[#4338ca] transition-colors shadow-lg shadow-[#5048e5]/20">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Details */}
      {showDetails && (
        <div className="w-[320px] border-l border-[#e5e7eb] flex flex-col bg-white overflow-y-auto">
          <header className="h-[64px] border-b border-[#e5e7eb] flex items-center justify-between px-6 shrink-0">
            <h3 className="text-[16px] font-bold text-[#111827]">Details</h3>
            <button 
              className="p-1.5 hover:bg-gray-100 rounded-lg text-[#9ca3af]"
              onClick={() => setShowDetails(false)}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </header>

          <div className="p-6 space-y-8">
            {/* Pinned Items */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[12px] font-bold text-[#6b7280] uppercase tracking-wider">Pinned Items</h4>
                <button className="text-[12px] font-semibold text-[#5048e5] hover:underline">View all</button>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-[#f9fafb] rounded-xl border border-[#f3f4f6] group cursor-pointer hover:bg-white hover:border-[#e5e7eb] transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-3.5 h-3.5 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    <span className="text-[13px] font-bold text-[#111827]">Figma Design File</span>
                  </div>
                  <p className="text-[11px] text-[#9ca3af] truncate">https://figma.com/file/a847291...</p>
                </div>
                <div className="p-4 bg-[#f9fafb] rounded-xl border border-[#f3f4f6] group cursor-pointer hover:bg-white hover:border-[#e5e7eb] transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-3.5 h-3.5 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    <span className="text-[13px] font-bold text-[#111827]">Sprint Roadmap Q3</span>
                  </div>
                  <p className="text-[11px] text-[#9ca3af]">Shared by Elena Rodriguez</p>
                </div>
              </div>
            </section>

            {/* Shared Files */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[12px] font-bold text-[#6b7280] uppercase tracking-wider">Shared Files</h4>
                <button className="text-[12px] font-semibold text-[#5048e5] hover:underline">View all</button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-8 h-8 bg-[#eff6ff] rounded-md flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#111827] group-hover:text-[#5048e5]">Project_Brief_Final.docx</p>
                    <p className="text-[11px] text-[#9ca3af]">2 days ago • 840 KB</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-8 h-8 bg-[#fdf2f8] rounded-md flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#ec4899]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#111827] group-hover:text-[#5048e5]">Dashboard_Mockup_v2.png</p>
                    <p className="text-[11px] text-[#9ca3af]">Yesterday • 3.4 MB</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Members */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[12px] font-bold text-[#6b7280] uppercase tracking-wider">Members — 12</h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150" alt="" className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-[13px] font-semibold text-[#111827]">Alex Rivard (You)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150" alt="" className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-[13px] font-semibold text-[#111827]">Elena Rodriguez</span>
                  </div>
                  <div className="w-2 h-2 bg-[#10b981] rounded-full" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150" alt="" className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-[13px] font-semibold text-[#111827]">Sarah Jenkins</span>
                  </div>
                  <div className="w-2 h-2 bg-[#10b981] rounded-full" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150" alt="" className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-[13px] font-semibold text-[#111827]">Michael Scott</span>
                  </div>
                  <div className="w-2 h-2 bg-[#d1d5db] rounded-full" />
                </div>
              </div>
              <button className="w-full mt-6 py-2 px-4 border border-[#e5e7eb] rounded-lg text-[13px] font-bold text-[#111827] hover:bg-gray-50 transition-colors">
                Add People
              </button>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
