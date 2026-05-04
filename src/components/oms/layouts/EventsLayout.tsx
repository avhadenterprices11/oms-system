"use client";
import { useState } from "react";
import svgPaths from "@/imports/Dashboard-1/svg-r8n5wq7vya";
import EventManagement from "@/imports/EventManagement/EventManagement";
import EventWorkspaceOverview from "@/imports/EventWorkspaceOverview/EventWorkspaceOverview";
import EventWorkspaceRunSheet from "@/imports/EventWorkspaceRunSheet/EventWorkspaceRunSheet";
import EventWorkspaceSpeakers from "@/imports/EventWorkspaceSpeakers/EventWorkspaceSpeakers";
import EventWorkspaceSponsorTracker from "@/imports/EventWorkspaceSponsorTracker/EventWorkspaceSponsorTracker";
import EventWorkspaceVendor from "@/imports/EventWorkspaceVendor/EventWorkspaceVendor";
import EventWorkspaceBudget from "@/imports/EventWorkspaceBudget/EventWorkspaceBudget";
import EventWorkspaceDocuments from "@/imports/EventWorkspaceDocuments/EventWorkspaceDocuments";
import EventWorkspaceTasks from "@/imports/EventWorkspaceTasks/EventWorkspaceTasks";
import EventWorkspaceActivity from "@/imports/EventWorkspaceActivity/EventWorkspaceActivity";
import EventGuestList from "@/imports/EventGuestList/EventGuestList";
import EventsEventDetail from "@/imports/EventsEventDetail/EventsEventDetail";
import CreateEvent from "@/imports/CreateEvent/CreateEvent";
import AddGuest from "@/imports/AddGuest/AddGuest";
import ImportGuestList from "@/imports/ImportGuestList/ImportGuestList";
import SendEventInvites from "@/imports/SendEventInvites/SendEventInvites";
import AddSpeaker from "@/imports/AddSpeaker/AddSpeaker";
import AddSponsor from "@/imports/AddSponsor/AddSponsor";
import AddVendor from "@/imports/AddVendor/AddVendor";

type EventView = "list" | "event-detail";
type EventTab = "overview" | "run-sheet" | "speakers" | "sponsors" | "vendors" | "budget" | "documents" | "tasks" | "activity" | "guests";
type ModalView = null | "create-event" | "add-guest" | "import-guests" | "send-invites" | "add-speaker" | "add-sponsor" | "add-vendor";

interface EventsLayoutProps {
  onNavigateBack: () => void;
}

export function EventsLayout({ onNavigateBack }: EventsLayoutProps) {
  const [currentView, setCurrentView] = useState<EventView>("list");
  const [currentTab, setCurrentTab] = useState<EventTab>("overview");
  const [modalView, setModalView] = useState<ModalView>(null);

  const handleViewChange = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.textContent?.toLowerCase() || "";

    // Modal triggers
    if (text.includes("create event") || text.includes("add event")) {
      setModalView("create-event");
      return;
    }
    if (text.includes("add guest")) {
      setModalView("add-guest");
      return;
    }
    if (text.includes("import guest") || text.includes("import list")) {
      setModalView("import-guests");
      return;
    }
    if (text.includes("send invite")) {
      setModalView("send-invites");
      return;
    }
    if (text.includes("add speaker")) {
      setModalView("add-speaker");
      return;
    }
    if (text.includes("add sponsor")) {
      setModalView("add-sponsor");
      return;
    }
    if (text.includes("add vendor")) {
      setModalView("add-vendor");
      return;
    }

    // Modal close
    if (text.includes("save") || text.includes("cancel") || text.includes("create") ||
        text.includes("import") || text.includes("send") || text.includes("submit")) {
      setModalView(null);
      return;
    }

    // Event click - open event detail
    if (target.closest('[data-event-row]') ||
        text.includes("tech summit") ||
        text.includes("product launch") ||
        text.includes("annual conference") ||
        text.includes("quarterly meeting")) {
      setCurrentView("event-detail");
      setCurrentTab("overview");
      return;
    }

    // Back to event list
    if (text.includes("global events") || text.includes("events") && currentView === "event-detail") {
      setCurrentView("list");
      return;
    }

    // Tab navigation within event detail
    if (currentView === "event-detail") {
      if (text.includes("overview")) {
        setCurrentTab("overview");
      } else if (text.includes("run sheet") || text.includes("runsheet")) {
        setCurrentTab("run-sheet");
      } else if (text.includes("speakers")) {
        setCurrentTab("speakers");
      } else if (text.includes("sponsors")) {
        setCurrentTab("sponsors");
      } else if (text.includes("vendors")) {
        setCurrentTab("vendors");
      } else if (text.includes("budget")) {
        setCurrentTab("budget");
      } else if (text.includes("documents")) {
        setCurrentTab("documents");
      } else if (text.includes("tasks")) {
        setCurrentTab("tasks");
      } else if (text.includes("activity")) {
        setCurrentTab("activity");
      } else if (text.includes("guests") || text.includes("guest list")) {
        setCurrentTab("guests");
      }
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
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-[rgba(80,72,229,0.1)] transition-colors"
            title="Events"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M5 2v2M11 2v2M3 6h10M4 4h8a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="#5048E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
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

      {/* Main Content Area - Hide imported sidebars */}
      <div className="flex-1 overflow-hidden [&_[data-name='Sidebar']]:hidden [&_.sidebar]:hidden">
        {currentView === "list" && <EventManagement />}

        {currentView === "event-detail" && (
          <>
            {currentTab === "overview" && <EventWorkspaceOverview />}
            {currentTab === "run-sheet" && <EventWorkspaceRunSheet />}
            {currentTab === "speakers" && <EventWorkspaceSpeakers />}
            {currentTab === "sponsors" && <EventWorkspaceSponsorTracker />}
            {currentTab === "vendors" && <EventWorkspaceVendor />}
            {currentTab === "budget" && <EventWorkspaceBudget />}
            {currentTab === "documents" && <EventWorkspaceDocuments />}
            {currentTab === "tasks" && <EventWorkspaceTasks />}
            {currentTab === "activity" && <EventWorkspaceActivity />}
            {currentTab === "guests" && <EventGuestList />}
          </>
        )}
      </div>

      {/* Modals */}
      {modalView && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={(e) => {
          if (e.target === e.currentTarget) setModalView(null);
        }}>
          <div className="bg-white rounded-[16px] shadow-2xl max-w-[800px] w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            {modalView === "create-event" && <CreateEvent />}
            {modalView === "add-guest" && <AddGuest />}
            {modalView === "import-guests" && <ImportGuestList />}
            {modalView === "send-invites" && <SendEventInvites />}
            {modalView === "add-speaker" && <AddSpeaker />}
            {modalView === "add-sponsor" && <AddSponsor />}
            {modalView === "add-vendor" && <AddVendor />}
          </div>
        </div>
      )}
    </div>
  );
}
