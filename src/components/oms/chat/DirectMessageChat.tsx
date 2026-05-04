"use client";
import { useState } from "react";

interface DirectMessageChatProps {
  userName?: string;
  dmId?: string;
}

export function DirectMessageChat({ userName = "Ashwini Reddy" }: DirectMessageChatProps) {
  const [message, setMessage] = useState("");
  const [messages] = useState([
    { id: 1, sender: "Ashwini Reddy", text: "Hey, can you review the API migration spec before the standup?", time: "10:32 AM", isMe: false },
    { id: 2, sender: "You", text: "Sure, I'll take a look now. Any specific sections?", time: "10:34 AM", isMe: true },
    { id: 3, sender: "Ashwini Reddy", text: "Focus on the auth endpoints and rate limiting section. Those changed the most.", time: "10:35 AM", isMe: false },
    { id: 4, sender: "You", text: "On it. Will have notes ready by 11.", time: "10:36 AM", isMe: true },
    { id: 5, sender: "Ashwini Reddy", text: "Perfect! Also, did you see the updated deployment schedule?", time: "10:40 AM", isMe: false },
    { id: 6, sender: "You", text: "Not yet, let me check Slack. Thanks for the heads up!", time: "10:42 AM", isMe: true },
  ]);

  const sendMessage = () => {
    if (message.trim()) {
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
    <div className="flex-1 flex flex-col bg-white">
      {/* DM Header */}
      <div className="border-b border-[#e2e8f0] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }}
            >
              <span className="text-white text-[14px] font-bold">{userName.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#22c55e] border-2 border-white rounded-full" />
          </div>
          <div>
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] text-[#0f172a]">
              {userName}
            </h2>
            <p className="text-[12px] text-[#22c55e]">Active now</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-3 ${msg.isMe ? 'flex-row-reverse' : ''}`}>
            {!msg.isMe && (
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }}
              >
                <span className="text-white text-[13px] font-bold">{userName.split(' ').map(n => n[0]).join('')}</span>
              </div>
            )}
            <div className={`flex flex-col ${msg.isMe ? 'items-end' : 'items-start'} flex-1`}>
              {!msg.isMe && (
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#0f172a]">
                    {msg.sender}
                  </span>
                  <span className="text-[11px] text-[#94a3b8]">{msg.time}</span>
                </div>
              )}
              <div
                className={`max-w-[600px] px-4 py-2.5 rounded-lg ${
                  msg.isMe
                    ? "bg-[#5048e5] text-white"
                    : "bg-[#f1f5f9] text-[#334155]"
                }`}
              >
                <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px]">{msg.text}</p>
              </div>
              {msg.isMe && (
                <span className="text-[11px] text-[#94a3b8] mt-1">{msg.time}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="border-t border-[#e2e8f0] px-6 py-4">
        <div className="flex gap-3 items-end">
          <div className="flex-1 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Message ${userName}`}
              className="w-full bg-transparent text-[14px] placeholder:text-[#94a3b8] focus:outline-none resize-none"
              rows={1}
            />
            <div className="flex gap-2 mt-2">
              <button className="w-8 h-8 rounded-lg hover:bg-white flex items-center justify-center" title="Attach file">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="#64748B" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 3.5L6.5 10.5L3 7" />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-lg hover:bg-white flex items-center justify-center" title="Add emoji">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="#64748B" strokeWidth="1.5">
                  <circle cx="8" cy="8" r="6" />
                  <path d="M5.5 7.5H5.51M10.5 7.5H10.51M5.5 10.5C5.5 10.5 6.5 11.5 8 11.5C9.5 11.5 10.5 10.5 10.5 10.5" />
                </svg>
              </button>
            </div>
          </div>
          <button
            onClick={sendMessage}
            className="bg-[#5048e5] text-white px-6 py-3 rounded-lg font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] hover:bg-[#4338ca] transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
