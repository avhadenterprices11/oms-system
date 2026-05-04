"use client";

export default function ChatHubPage() {
  return (
    <div className="size-full flex flex-col items-center justify-center text-[#64748b] bg-white">
      <div className="size-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
        <svg className="size-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </div>
      <h2 className="text-[18px] font-semibold text-[#0f172a]">Select a conversation</h2>
      <p className="text-[14px]">Choose a channel or direct message from the left to start chatting.</p>
    </div>
  );
}