"use client";
import { useState } from "react";
import svgPaths from "@/imports/Dashboard-1/svg-r8n5wq7vya";
import { ChannelChat } from "@/components/oms/chat/ChannelChat";
import { DirectMessageChat } from "@/components/oms/chat/DirectMessageChat";
import { ThreadView } from "@/components/oms/chat/ThreadView";
import { MessageSearch } from "@/components/oms/chat/MessageSearch";
import ModerationChat from "@/imports/ModerationChat/ModerationChat";
import PinnedMessagesChat from "@/imports/PinnedMessagesChat/PinnedMessagesChat";
import SharedFilesChat from "@/imports/SharedFilesChat/SharedFilesChat";
import ChannelManagementChat from "@/imports/ChannelManagementChat/ChannelManagementChat";
import AddChannelMembers from "@/imports/AddChannelMembers/AddChannelMembers";
import EditChannel from "@/imports/EditChannel/EditChannel";
import CreateChannel from "@/imports/CreateChannel/CreateChannel";

type ChatView = "message-list" | "channel" | "dm" | "thread" | "search";
type ModalView = null | "add-members" | "edit-channel" | "create-channel" | "pinned" | "files" | "moderation" | "channel-settings";

interface ChatLayoutProps {
  onNavigateBack: () => void;
}

export function ChatLayout({ onNavigateBack }: ChatLayoutProps) {
  const [currentView, setCurrentView] = useState<ChatView>("message-list");
  const [modalView, setModalView] = useState<ModalView>(null);
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDetailsPanel, setShowDetailsPanel] = useState(false);

  const conversations = [
    { id: "1", name: "general", type: "channel", unread: 3, timestamp: "2:34 PM", isOnline: true },
    { id: "2", name: "engineering", type: "channel", unread: 12, timestamp: "1:12 PM", isOnline: true },
    { id: "3", name: "design", type: "channel", unread: 0, timestamp: "Yesterday", isOnline: true },
    { id: "4", name: "Ashwini Reddy", type: "dm", unread: 2, timestamp: "11:45 AM", isOnline: true },
    { id: "5", name: "Jordan Lee", type: "dm", unread: 0, timestamp: "Monday", isOnline: false },
    { id: "6", name: "marketing", type: "channel", unread: 5, timestamp: "3:21 PM", isOnline: true },
    { id: "7", name: "Sarah Miller", type: "dm", unread: 1, timestamp: "10:30 AM", isOnline: true },
    { id: "8", name: "product", type: "channel", unread: 0, timestamp: "Sunday", isOnline: true },
  ];

  const handleConversationClick = (conversationId: string, type: string) => {
    setSelectedChannel(conversationId);
    if (type === "dm") {
      setCurrentView("dm");
    } else {
      setCurrentView("channel");
    }
  };

  const handleDetailsToggle = () => {
    setShowDetailsPanel(!showDetailsPanel);
  };

  const handleInfoClick = (action: "pinned" | "files" | "moderation" | "channel-settings") => {
    setModalView(action);
    setShowDetailsPanel(false);
  };

  const handleThreadClick = () => {
    setCurrentView("thread");
  };

  const handleSearchFocus = () => {
    setCurrentView("search");
  };

  const closeModal = () => {
    setModalView(null);
  };

  return (
    <div className="flex h-screen bg-[#f6f6f8] overflow-hidden">
      {/* Collapsed Main Sidebar */}
      <div className="bg-white w-[72px] border-r border-[rgba(80,72,229,0.1)] flex flex-col items-center py-6 flex-shrink-0" data-name="Sidebar">
        {/* Logo */}
        <div className="bg-[#5048e5] w-10 h-10 rounded-[8px] flex items-center justify-center mb-8">
          <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
            <path d={svgPaths.p245e1900} fill="white" />
          </svg>
        </div>

        {/* Navigation Icons */}
        <nav className="space-y-2 flex-1">
          <button
            onClick={onNavigateBack}
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f8fafc] transition-colors"
            title="Dashboard"
          >
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
              <path d={svgPaths.p20793584} fill="#475569" />
            </svg>
          </button>

          <button
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f8fafc] transition-colors"
            title="People"
            data-nav="people"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 100-6 3 3 0 000 6zM4 14a4 4 0 018 0H4z" fill="#475569" />
            </svg>
          </button>

          <button
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-[rgba(80,72,229,0.1)] transition-colors"
            title="Chat"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.p1fe7b600} fill="#5048E5" />
            </svg>
          </button>

          <button
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f8fafc] transition-colors"
            title="Tasks"
            data-nav="tasks"
          >
            <svg className="w-[16.667px] h-[16.667px]" fill="none" viewBox="0 0 16.6667 16.6667">
              <path d={svgPaths.p6e98980} fill="#475569" />
            </svg>
          </button>

          <button
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f8fafc] transition-colors"
            title="Projects"
            data-nav="projects"
          >
            <svg className="w-[16.667px] h-[13.333px]" fill="none" viewBox="0 0 16.6667 13.3333">
              <path d={svgPaths.p2173c3c0} fill="#475569" />
            </svg>
          </button>

          <button
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f8fafc] transition-colors"
            title="Events"
            data-nav="events"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M5 2v2M11 2v2M3 6h10M4 4h8a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </button>

          <button
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f8fafc] transition-colors"
            title="CRM"
            data-nav="crm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M3 5h10M3 8h10M3 11h10M2 3h12a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </button>

          <button
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f8fafc] transition-colors"
            title="Client Delivery"
            data-nav="client-delivery"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M2 5l6-3 6 3v6l-6 3-6-3V5z" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M2 5l6 3M8 8v6M14 5l-6 3" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </nav>

        {/* Settings at bottom */}
        <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f8fafc] transition-colors" title="Settings">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
            <path d={svgPaths.p870bf80} stroke="#475569" strokeWidth="1.5" />
            <path d={svgPaths.p38b3cc00} stroke="#475569" strokeWidth="1.5" />
          </svg>
        </button>
      </div>


      {/* Main Content Area */}
      <div className="flex-1 flex relative overflow-hidden">
        {/* Chat Area */}
        <div className={`flex-1 flex flex-col transition-all duration-300 ${showDetailsPanel ? 'mr-[400px]' : ''}`} onClick={(e) => {
        const target = e.target as HTMLElement;
        const text = target.textContent?.toLowerCase() || "";

        // Thread click
        if (target.closest('[data-thread]') || text.includes("replies") || text.includes("thread")) {
          handleThreadClick();
        }
        // Info button clicks
        else if (target.closest('[data-action="pinned"]') || text.includes("pinned message")) {
          handleInfoClick("pinned");
        }
        else if (target.closest('[data-action="files"]') || text.includes("shared files")) {
          handleInfoClick("files");
        }
        else if (target.closest('[data-action="moderation"]') || text.includes("moderation")) {
          handleInfoClick("moderation");
        }
        else if (target.closest('[data-action="channel-settings"]') || text.includes("channel management")) {
          handleInfoClick("channel-settings");
        }
        else if (target.closest('[data-action="add-members"]') || text.includes("add member")) {
          setModalView("add-members");
        }
        else if (target.closest('[data-action="edit-channel"]') || text.includes("edit channel")) {
          setModalView("edit-channel");
          }
        }}>
          {/* Message List View */}
          {currentView === "message-list" && (
            <div className="bg-white flex-1 flex flex-col">
              {/* Header */}
              <div className="border-b border-[#e2e8f0] px-6 py-4 flex items-center justify-between">
                <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[20px] text-[#0f172a]">Messages</h1>
                <button
                  onClick={() => setModalView("create-channel")}
                  className="bg-[#5048e5] text-white px-4 py-2 rounded-lg font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] hover:bg-[#4338ca] transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 4v8M4 8h8" />
                  </svg>
                  New Message
                </button>
              </div>

              {/* Search Bar */}
              <div className="px-6 py-3 border-b border-[#e2e8f0]">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={handleSearchFocus}
                  placeholder="Search conversations..."
                  className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-lg h-[40px] px-4 text-[14px] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#5048e5] focus:border-transparent"
                />
              </div>

              {/* Conversations List - Compact, No Previews */}
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => handleConversationClick(conv.id, conv.type)}
                    className={`w-full flex items-center justify-between px-6 py-3 hover:bg-[#f8fafc] transition-colors border-b border-[#f1f5f9] ${
                      selectedChannel === conv.id ? "bg-[#f8fafc]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      {/* Avatar/Icon */}
                      {conv.type === "channel" ? (
                        <div className="w-9 h-9 bg-[#ede9fe] rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-[#5048e5] text-[16px] font-bold">#</span>
                        </div>
                      ) : (
                        <div className="relative flex-shrink-0">
                          <div
                            className="w-9 h-9 rounded-full flex items-center justify-center"
                            style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }}
                          >
                            <span className="text-white text-[13px] font-bold">{conv.name.charAt(0)}</span>
                          </div>
                          {conv.isOnline && (
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#22c55e] border-2 border-white rounded-full" />
                          )}
                        </div>
                      )}

                      {/* Name */}
                      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#0f172a] truncate">
                        {conv.name}
                      </span>
                    </div>

                    {/* Right Side: Timestamp + Unread Badge */}
                    <div className="flex items-center gap-3 flex-shrink-0 ml-3">
                      <span className="text-[12px] text-[#94a3b8]">{conv.timestamp}</span>
                      {conv.unread > 0 && (
                        <div className="bg-[#5048e5] text-white text-[11px] font-bold px-2 py-0.5 rounded-full min-w-[20px] text-center">
                          {conv.unread}
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Views with Details Button */}
          {currentView === "channel" && (
            <div className="flex-1 flex flex-col relative">
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={handleDetailsToggle}
                  className="bg-white border border-[#e2e8f0] w-10 h-10 rounded-lg hover:bg-[#f8fafc] flex items-center justify-center shadow-sm transition-all"
                  title="Details"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="#64748B" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              <ChannelChat channelName={conversations.find(c => c.id === selectedChannel)?.name || "general"} />
            </div>
          )}

          {currentView === "dm" && (
            <div className="flex-1 flex flex-col relative">
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={handleDetailsToggle}
                  className="bg-white border border-[#e2e8f0] w-10 h-10 rounded-lg hover:bg-[#f8fafc] flex items-center justify-center shadow-sm transition-all"
                  title="Details"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="#64748B" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              <DirectMessageChat userName={conversations.find(c => c.id === selectedChannel)?.name || "Ashwini Reddy"} />
            </div>
          )}

          {currentView === "thread" && <ThreadView />}
          {currentView === "search" && <MessageSearch />}
        </div>

        {/* Details Panel - Slide In from Right */}
        <div
          className={`absolute top-0 right-0 h-full w-[400px] bg-white border-l border-[#e2e8f0] shadow-2xl transform transition-transform duration-300 ease-in-out ${
            showDetailsPanel ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-full flex flex-col">
            {/* Details Header */}
            <div className="border-b border-[#e2e8f0] px-6 py-4 flex items-center justify-between">
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] text-[#0f172a]">Details</h2>
              <button
                onClick={() => setShowDetailsPanel(false)}
                className="w-8 h-8 rounded-lg hover:bg-[#f8fafc] flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="#64748B" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l8 8M12 4l-8 8" />
                </svg>
              </button>
            </div>

            {/* Details Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <button
                onClick={() => handleInfoClick("pinned")}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-[#f8fafc] text-left transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="#5048e5" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h6a2 2 0 012 2v14l-5-3-5 3V5z" />
                </svg>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#0f172a]">
                  Pinned Messages
                </span>
              </button>

              <button
                onClick={() => handleInfoClick("files")}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-[#f8fafc] text-left transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="#5048e5" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#0f172a]">
                  Shared Files
                </span>
              </button>

              <button
                onClick={() => setModalView("add-members")}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-[#f8fafc] text-left transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="#5048e5" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#0f172a]">
                  Add Members
                </span>
              </button>

              <button
                onClick={() => handleInfoClick("moderation")}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-[#f8fafc] text-left transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="#5048e5" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#0f172a]">
                  Moderation
                </span>
              </button>

              <button
                onClick={() => handleInfoClick("channel-settings")}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-[#f8fafc] text-left transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="#5048e5" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#0f172a]">
                  Channel Settings
                </span>
              </button>

              <button
                onClick={() => setModalView("edit-channel")}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-[#f8fafc] text-left transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="#5048e5" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#0f172a]">
                  Edit Channel
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {modalView && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}>
          <div className="bg-white rounded-[16px] shadow-2xl max-w-[600px] w-full max-h-[90vh] overflow-auto" onClick={(e) => {
            const target = e.target as HTMLElement;
            if (target.textContent?.includes("Save") || target.textContent?.includes("Cancel") || target.textContent?.includes("Close")) {
              closeModal();
            }
          }}>
            {modalView === "add-members" && <AddChannelMembers />}
            {modalView === "edit-channel" && <EditChannel />}
            {modalView === "create-channel" && <CreateChannel />}
            {modalView === "pinned" && <PinnedMessagesChat />}
            {modalView === "files" && <SharedFilesChat />}
            {modalView === "moderation" && <ModerationChat />}
            {modalView === "channel-settings" && <ChannelManagementChat />}
          </div>
        </div>
      )}
    </div>
  );
}
