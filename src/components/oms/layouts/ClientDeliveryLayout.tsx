"use client";
import { useState } from "react";
import svgPaths from "@/imports/Dashboard-1/svg-r8n5wq7vya";
import ClientDeliveryList from "@/imports/ClientDeliveryList/ClientDeliveryList";
import ClientDeliveryWorkspaceOverview from "@/imports/ClientDeliveryWorkspaceOverview/ClientDeliveryWorkspaceOverview";
import ClientDeliveryDeliveryDetail from "@/imports/ClientDeliveryDeliveryDetail/ClientDeliveryDeliveryDetail";
import ClientDeliveryDeliverablesTab from "@/imports/ClientDeliveryDeliverablesTab/ClientDeliveryDeliverablesTab";
import ClientDeliveryTasksTab from "@/imports/ClientDeliveryTasksTab/ClientDeliveryTasksTab";
import ClientDeliveryTimelineTab from "@/imports/ClientDeliveryTimelineTab/ClientDeliveryTimelineTab";
import ClientDeliveryFilesTab from "@/imports/ClientDeliveryFilesTab/ClientDeliveryFilesTab";
import ClientDeliveryMeetingsTab from "@/imports/ClientDeliveryMeetingsTab/ClientDeliveryMeetingsTab";
import ClientDeliveryActivityTab from "@/imports/ClientDeliveryActivityTab/ClientDeliveryActivityTab";
import CreateClientDelivery from "@/imports/CreateClientDelivery/CreateClientDelivery";

type DeliveryView = "list" | "delivery-detail";
type DeliveryTab = "overview" | "detail" | "deliverables" | "tasks" | "timeline" | "files" | "meetings" | "activity";
type ModalView = null | "create-delivery";

interface ClientDeliveryLayoutProps {
  onNavigateBack: () => void;
}

export function ClientDeliveryLayout({ onNavigateBack }: ClientDeliveryLayoutProps) {
  const [currentView, setCurrentView] = useState<DeliveryView>("list");
  const [currentTab, setCurrentTab] = useState<DeliveryTab>("overview");
  const [modalView, setModalView] = useState<ModalView>(null);

  const handleViewChange = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.textContent?.toLowerCase() || "";

    // Modal triggers
    if (text.includes("create delivery") || text.includes("add delivery") || text.includes("new delivery")) {
      setModalView("create-delivery");
      return;
    }

    // Modal close
    if (text.includes("save") || text.includes("cancel") || text.includes("create") || text.includes("submit")) {
      setModalView(null);
      return;
    }

    // Delivery click - open delivery detail
    if (target.closest('[data-delivery-row]') ||
        text.includes("website redesign") ||
        text.includes("mobile app") ||
        text.includes("branding package")) {
      setCurrentView("delivery-detail");
      setCurrentTab("overview");
      return;
    }

    // Back to delivery list
    if (text.includes("global deliveries") || text.includes("deliveries") && currentView === "delivery-detail") {
      setCurrentView("list");
      return;
    }

    // Tab navigation within delivery detail
    if (currentView === "delivery-detail") {
      if (text.includes("overview")) {
        setCurrentTab("overview");
      } else if (text.includes("detail") || text.includes("delivery detail")) {
        setCurrentTab("detail");
      } else if (text.includes("deliverables")) {
        setCurrentTab("deliverables");
      } else if (text.includes("tasks")) {
        setCurrentTab("tasks");
      } else if (text.includes("timeline")) {
        setCurrentTab("timeline");
      } else if (text.includes("files")) {
        setCurrentTab("files");
      } else if (text.includes("meetings")) {
        setCurrentTab("meetings");
      } else if (text.includes("activity")) {
        setCurrentTab("activity");
      }
    }
  };

  return (
    <div className="flex h-screen bg-[#f6f6f8] overflow-hidden" onClick={handleViewChange}>
      {/* Collapsed Main Sidebar */}
      <div className="bg-white w-[72px] border-r border-[rgba(80,72,229,0.1)] flex flex-col items-center py-6 flex-shrink-0">
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
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-[rgba(80,72,229,0.1)] transition-colors"
            title="Client Delivery"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M2 5l6-3 6 3v6l-6 3-6-3V5z" stroke="#5048E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M2 5l6 3M8 8v6M14 5l-6 3" stroke="#5048E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
        {currentView === "list" && <ClientDeliveryList />}

        {currentView === "delivery-detail" && (
          <>
            {currentTab === "overview" && <ClientDeliveryWorkspaceOverview />}
            {currentTab === "detail" && <ClientDeliveryDeliveryDetail />}
            {currentTab === "deliverables" && <ClientDeliveryDeliverablesTab />}
            {currentTab === "tasks" && <ClientDeliveryTasksTab />}
            {currentTab === "timeline" && <ClientDeliveryTimelineTab />}
            {currentTab === "files" && <ClientDeliveryFilesTab />}
            {currentTab === "meetings" && <ClientDeliveryMeetingsTab />}
            {currentTab === "activity" && <ClientDeliveryActivityTab />}
          </>
        )}
      </div>

      {/* Modals */}
      {modalView && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={(e) => {
          if (e.target === e.currentTarget) setModalView(null);
        }}>
          <div className="bg-white rounded-[16px] shadow-2xl max-w-[800px] w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            {modalView === "create-delivery" && <CreateClientDelivery />}
          </div>
        </div>
      )}
    </div>
  );
}
