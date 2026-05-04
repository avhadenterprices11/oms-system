"use client";
import { useState } from "react";
import svgPaths from "@/imports/Dashboard-1/svg-r8n5wq7vya";
import MeetingsListView from "@/imports/MeetingsListView/MeetingsListView";
import MeetingScheduler from "@/imports/MeetingScheduler/MeetingScheduler";
import MeetingsMeetingDetail from "@/imports/MeetingsMeetingDetail/MeetingsMeetingDetail";
import MeetingCalendarMeetings from "@/imports/MeetingCalendarMeetings/MeetingCalendarMeetings";
import InRoomChatMeetings from "@/imports/InRoomChatMeetings/InRoomChatMeetings";
import MeetingNotesMeetings from "@/imports/MeetingNotesMeetings/MeetingNotesMeetings";

type MeetingsView = "list" | "calendar" | "meeting-detail" | "in-room-chat" | "meeting-notes";
type ModalView = null | "schedule-meeting";

interface MeetingsLayoutProps {
  onNavigateBack: () => void;
}

export function MeetingsLayout({ onNavigateBack }: MeetingsLayoutProps) {
  const [currentView, setCurrentView] = useState<MeetingsView>("list");
  const [modalView, setModalView] = useState<ModalView>(null);

  const handleViewChange = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.textContent?.toLowerCase() || "";

    // Modal triggers
    if (text.includes("schedule meeting") || text.includes("create meeting") || text.includes("new meeting")) {
      setModalView("schedule-meeting");
      return;
    }

    // Modal close
    if (text.includes("save") || text.includes("cancel") || text.includes("schedule") || text.includes("create")) {
      setModalView(null);
      return;
    }

    // Meeting click - open meeting detail
    if (target.closest('[data-meeting-row]') || target.closest('[data-meeting-card]') ||
        text.includes("team standup") || text.includes("client review") || text.includes("quarterly planning")) {
      setCurrentView("meeting-detail");
      return;
    }

    // Back to meeting list
    if (text.includes("meetings") && currentView === "meeting-detail") {
      setCurrentView("list");
      return;
    }

    // In-room chat navigation
    if (text.includes("chat") || text.includes("in-room chat")) {
      setCurrentView("in-room-chat");
      return;
    }

    // Meeting notes navigation
    if (text.includes("notes") || text.includes("meeting notes")) {
      setCurrentView("meeting-notes");
      return;
    }

    // View navigation
    if (text.includes("list") || text.includes("all meetings")) {
      setCurrentView("list");
    } else if (text.includes("calendar")) {
      setCurrentView("calendar");
    }
  };

  return (
    <div className="flex h-screen bg-[#f6f6f8] overflow-hidden" onClick={handleViewChange}>
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
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f8fafc] transition-colors"
            title="Chat"
            data-nav="chat"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.p1fe7b600} fill="#475569" />
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

          <button
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f8fafc] transition-colors"
            title="Social Media"
            data-nav="social-media"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="3" stroke="#475569" strokeWidth="1.5" fill="none" />
              <circle cx="3" cy="3" r="1.5" fill="#475569" />
              <circle cx="13" cy="3" r="1.5" fill="#475569" />
              <circle cx="3" cy="13" r="1.5" fill="#475569" />
              <circle cx="13" cy="13" r="1.5" fill="#475569" />
              <path d="M6.5 6.5L4 4M9.5 6.5L12 4M6.5 9.5L4 12M9.5 9.5L12 12" stroke="#475569" strokeWidth="1.5" />
            </svg>
          </button>

          <button
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-[rgba(80,72,229,0.1)] transition-colors"
            title="Meetings"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <rect x="2" y="3" width="12" height="10" rx="1" stroke="#5048E5" strokeWidth="1.5" fill="none" />
              <path d="M6 6h4M6 9h2" stroke="#5048E5" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="10" cy="9" r="1" fill="#5048E5" />
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

      {/* Main Content Area - Hide imported sidebars */}
      <div className="flex-1 overflow-hidden [&_[data-name='Sidebar']]:hidden [&_.sidebar]:hidden">
        {currentView === "list" && <MeetingsListView />}
        {currentView === "calendar" && <MeetingCalendarMeetings />}
        {currentView === "meeting-detail" && <MeetingsMeetingDetail />}
        {currentView === "in-room-chat" && <InRoomChatMeetings />}
        {currentView === "meeting-notes" && <MeetingNotesMeetings />}
      </div>

      {/* Modals */}
      {modalView && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={(e) => {
          if (e.target === e.currentTarget) setModalView(null);
        }}>
          <div className="bg-white rounded-[16px] shadow-2xl max-w-[700px] w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            {modalView === "schedule-meeting" && <MeetingScheduler />}
          </div>
        </div>
      )}
    </div>
  );
}
