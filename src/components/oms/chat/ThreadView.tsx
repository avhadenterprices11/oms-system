"use client";
import { useState } from "react";

export function ThreadView() {
  const [message, setMessage] = useState("");

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
      {/* Thread Header */}
      <div className="border-b border-[#e2e8f0] px-6 py-4">
        <div className="flex items-center gap-2 text-[#64748b] text-[13px] mb-2">
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#5048e5] hover:underline cursor-pointer">
            #general
          </span>
          <span>/</span>
          <span>Thread</span>
        </div>
        <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[16px] text-[#0f172a]">
          API Migration Discussion
        </h2>
      </div>

      {/* Thread Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {/* Original Message */}
        <div className="border-l-4 border-[#5048e5] pl-4 pb-6 mb-6">
          <div className="flex gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }}
            >
              <span className="text-white text-[13px] font-bold">SM</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#0f172a]">
                  Sarah Miller
                </span>
                <span className="text-[11px] text-[#94a3b8]">10:32 AM</span>
              </div>
              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-4">
                <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#334155]">
                  Hey team! Just pushed the latest API changes to staging. The new authentication flow is live.
                  Can everyone test their integrations and report any issues here?
                </p>
              </div>
              <div className="mt-2 text-[12px] text-[#64748b]">
                5 replies
              </div>
            </div>
          </div>
        </div>

        {/* Thread Replies */}
        <div className="space-y-4 pl-8">
          <div className="flex gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }}
            >
              <span className="text-white text-[13px] font-bold">MC</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#0f172a]">
                  Michael Chen
                </span>
                <span className="text-[11px] text-[#94a3b8]">10:34 AM</span>
              </div>
              <div className="bg-[#f1f5f9] rounded-lg px-4 py-2.5">
                <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#334155]">
                  Testing now. So far so good on my end!
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }}
            >
              <span className="text-white text-[13px] font-bold">ER</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#0f172a]">
                  Elena Rodriguez
                </span>
                <span className="text-[11px] text-[#94a3b8]">10:35 AM</span>
              </div>
              <div className="bg-[#f1f5f9] rounded-lg px-4 py-2.5">
                <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#334155]">
                  Getting a 401 error when trying to refresh tokens. Anyone else seeing this?
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundImage: "linear-gradient(135deg, rgb(80, 72, 229) 0%, rgb(67, 56, 202) 100%)" }}
            >
              <span className="text-white text-[13px] font-bold">You</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#0f172a]">
                  You
                </span>
                <span className="text-[11px] text-[#94a3b8]">10:36 AM</span>
              </div>
              <div className="bg-[#5048e5] text-white rounded-lg px-4 py-2.5">
                <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px]">
                  @Elena Check if you're passing the refresh token in the Authorization header.
                  It should be Bearer {"{token}"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reply Input */}
      <div className="border-t border-[#e2e8f0] px-6 py-4">
        <div className="flex gap-3 items-end">
          <div className="flex-1 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Reply to thread..."
              className="w-full bg-transparent text-[14px] placeholder:text-[#94a3b8] focus:outline-none resize-none"
              rows={1}
            />
          </div>
          <button
            onClick={sendMessage}
            className="bg-[#5048e5] text-white px-6 py-3 rounded-lg font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] hover:bg-[#4338ca] transition-colors"
          >
            Reply
          </button>
        </div>
      </div>
    </div>
  );
}
