"use client";
import { useState } from "react";
import svgPaths from "@/imports/Container/svg-n8ktwn6tnu";

export function QuickChat({ isOpen: externalOpen, onOpenChange }: { isOpen?: boolean; onOpenChange?: (open: boolean) => void }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = externalOpen !== undefined ? externalOpen : internalOpen;
  const setIsOpen = (open: boolean) => {
    if (onOpenChange) onOpenChange(open);
    else setInternalOpen(open);
  };

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, sender: "Ashwini Reddy", text: "Hey, can you review the API migration spec before the standup?", time: "10:32 AM", isMe: false },
    { id: 2, sender: "You", text: "Sure, I'll take a look now. Any specific sections?", time: "10:34 AM", isMe: true },
    { id: 3, sender: "Ashwini Reddy", text: "Focus on the auth endpoints and rate limiting section. Those changed the most.", time: "10:35 AM", isMe: false },
    { id: 4, sender: "You", text: "On it. Will have notes ready by 11.", time: "10:36 AM", isMe: true }
  ]);
  const [activeFilter, setActiveFilter] = useState("ashwini");

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        sender: "You",
        text: message,
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
        isMe: true
      }]);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[440px] h-[580px] bg-white border border-slate-200 rounded-[32px] shadow-[0px_20px_50px_0px_rgba(0,0,0,0.15)] z-[200] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="px-6 py-5 flex items-center justify-between bg-white">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-[18px] text-slate-900">Quick Chat</h3>
                <div className="size-2.5 bg-green-500 rounded-full border-2 border-white shadow-sm" />
              </div>
              <p className="text-[11px] font-bold text-slate-400 mt-0.5">3 Active Conversations</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path d="M5 12h14" />
                </svg>
              </button>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="px-4 pb-4 border-b border-slate-50">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              <button
                onClick={() => setActiveFilter("ashwini")}
                className={`px-4 py-2 rounded-2xl text-[12px] font-bold whitespace-nowrap flex items-center gap-2 transition-all ${
                  activeFilter === "ashwini" ? "bg-white border-2 border-[#5048e5]/10 text-[#5048e5] shadow-sm" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                <div className="size-2 bg-green-500 rounded-full" />
                Ashwini Reddy
              </button>
              <button
                onClick={() => setActiveFilter("jordan")}
                className={`px-4 py-2 rounded-2xl text-[12px] font-bold whitespace-nowrap flex items-center gap-2 transition-all ${
                  activeFilter === "jordan" ? "bg-white border-2 border-transparent text-slate-500 hover:text-slate-700" : "text-slate-500"
                }`}
              >
                <div className="size-2 bg-green-500 rounded-full" />
                Jordan Lee
              </button>
              <button
                onClick={() => setActiveFilter("engineering")}
                className={`px-4 py-2 rounded-2xl text-[12px] font-bold whitespace-nowrap flex items-center gap-2 transition-all ${
                  activeFilter === "engineering" ? "bg-white border-2 border-transparent text-slate-500 hover:text-slate-700" : "text-slate-500"
                }`}
              >
                <span className="text-slate-400">#</span>
                engineering
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 bg-slate-50/30">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col gap-2 ${msg.isMe ? "items-end" : "items-start"}`}>
                {!msg.isMe && (
                  <p className="font-black text-[10px] text-slate-400 uppercase tracking-widest ml-1">
                    {msg.sender}
                  </p>
                )}
                <div
                  className={`max-w-[85%] px-5 py-3.5 shadow-sm ${
                    msg.isMe
                      ? "bg-[#5048e5] text-white rounded-[24px] rounded-tr-none"
                      : "bg-[#f1f5f9] text-slate-700 rounded-[24px] rounded-tl-none border border-slate-200/50"
                  }`}
                >
                  <p className="text-[13px] font-medium leading-relaxed">{msg.text}</p>
                </div>
                <p className={`text-[10px] font-bold text-slate-400 ${msg.isMe ? "mr-1" : "ml-1"}`}>
                  {msg.time}
                </p>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="px-6 py-6 bg-white border-t border-slate-50">
            <div className="relative group">
              <div className="flex items-center bg-white border-2 border-[#5048e5]/20 rounded-3xl p-1 focus-within:border-[#5048e5] transition-all shadow-sm">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent px-4 py-2.5 text-[13px] font-medium text-slate-700 outline-none placeholder:text-slate-300"
                />
                <button
                  onClick={sendMessage}
                  className="size-10 bg-slate-100 rounded-2xl flex items-center justify-center hover:bg-[#5048e5] text-slate-400 hover:text-white transition-all group-focus-within:bg-[#5048e5] group-focus-within:text-white"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="mt-4 flex items-center justify-between px-2">
              <div className="flex gap-4">
                <button className="text-slate-300 hover:text-[#5048e5] transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <button className="text-slate-300 hover:text-[#5048e5] transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              <button className="text-[11px] font-black text-[#5048e5] uppercase tracking-widest hover:underline">
                Go to Inbox
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
