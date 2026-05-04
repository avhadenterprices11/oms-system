"use client";
import { useState } from "react";
import svgPaths from "@/imports/Dashboard-1/svg-r8n5wq7vya";
import EmployeeProfileRaviKumar from "@/imports/EmployeeProfileRaviKumar/EmployeeProfileRaviKumar";
import EmployeeProfileRaviKumarProjects from "@/imports/EmployeeProfileRaviKumarProjects/EmployeeProfileRaviKumarProjects";
import EmployeeProfileRaviKumarTasks from "@/imports/EmployeeProfileRaviKumarTasks/EmployeeProfileRaviKumarTasks";
import EmployeeProfileRaviKumarCrm from "@/imports/EmployeeProfileRaviKumarCrm/EmployeeProfileRaviKumarCrm";
import EmployeeProfileRaviKumarMeetings from "@/imports/EmployeeProfileRaviKumarMeetings/EmployeeProfileRaviKumarMeetings";
import EmployeeProfileRaviKumarDocuments from "@/imports/EmployeeProfileRaviKumarDocuments/EmployeeProfileRaviKumarDocuments";
import EmployeeProfileRaviKumarLeave from "@/imports/EmployeeProfileRaviKumarLeave/EmployeeProfileRaviKumarLeave";
import EmployeeProfileRaviKumarActivity from "@/imports/EmployeeProfileRaviKumarActivity/EmployeeProfileRaviKumarActivity";
import EditEmployee from "@/imports/EditEmployee/EditEmployee";
import MessageEmployee from "@/imports/MessageEmployee/MessageEmployee";
import ReassignTasks from "@/imports/ReassignTasks/ReassignTasks";
import TransferPromotePeople from "@/imports/TransferPromotePeople/TransferPromotePeople";

type ProfileTab = "overview" | "projects" | "tasks" | "crm" | "meetings" | "documents" | "leave" | "activity";
type ModalView = null | "edit" | "message" | "reassign" | "transfer";

interface EmployeeProfileLayoutProps {
  onNavigateBack: () => void;
}

export function EmployeeProfileLayout({ onNavigateBack }: EmployeeProfileLayoutProps) {
  const [currentTab, setCurrentTab] = useState<ProfileTab>("overview");
  const [modalView, setModalView] = useState<ModalView>(null);

  const handleTabChange = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.textContent?.toLowerCase() || "";

    // Modal triggers
    if (text.includes("edit") && !text.includes("edit structure")) {
      setModalView("edit");
      return;
    }
    if (text.includes("message")) {
      setModalView("message");
      return;
    }
    if (text.includes("reassign")) {
      setModalView("reassign");
      return;
    }
    if (text.includes("transfer") || text.includes("promote")) {
      setModalView("transfer");
      return;
    }

    // Modal close
    if (text.includes("save") || text.includes("cancel") || text.includes("send message") || text.includes("submit")) {
      setModalView(null);
      return;
    }

    // Tab changes
    if (text.includes("overview")) {
      setCurrentTab("overview");
    } else if (text.includes("projects")) {
      setCurrentTab("projects");
    } else if (text.includes("tasks")) {
      setCurrentTab("tasks");
    } else if (text.includes("crm")) {
      setCurrentTab("crm");
    } else if (text.includes("meetings")) {
      setCurrentTab("meetings");
    } else if (text.includes("documents")) {
      setCurrentTab("documents");
    } else if (text.includes("leave")) {
      setCurrentTab("leave");
    } else if (text.includes("activity")) {
      setCurrentTab("activity");
    }
  };

  return (
    <div className="flex h-screen bg-[#f6f6f8] overflow-hidden" onClick={handleTabChange}>
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
            onClick={onNavigateBack}
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-[rgba(80,72,229,0.1)] transition-colors"
            title="People"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 100-6 3 3 0 000 6zM4 14a4 4 0 018 0H4z" fill="#5048E5" />
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
      <div className="flex-1 overflow-hidden [&_[data-name='Sidebar']]:hidden">
        {currentTab === "overview" && <EmployeeProfileRaviKumar />}
        {currentTab === "projects" && <EmployeeProfileRaviKumarProjects />}
        {currentTab === "tasks" && <EmployeeProfileRaviKumarTasks />}
        {currentTab === "crm" && <EmployeeProfileRaviKumarCrm />}
        {currentTab === "meetings" && <EmployeeProfileRaviKumarMeetings />}
        {currentTab === "documents" && <EmployeeProfileRaviKumarDocuments />}
        {currentTab === "leave" && <EmployeeProfileRaviKumarLeave />}
        {currentTab === "activity" && <EmployeeProfileRaviKumarActivity />}
      </div>

      {/* Modals */}
      {modalView && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={(e) => {
          if (e.target === e.currentTarget) setModalView(null);
        }}>
          <div className="bg-white rounded-[16px] shadow-2xl max-w-[700px] w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            {modalView === "edit" && <EditEmployee />}
            {modalView === "message" && <MessageEmployee />}
            {modalView === "reassign" && <ReassignTasks />}
            {modalView === "transfer" && <TransferPromotePeople />}
          </div>
        </div>
      )}
    </div>
  );
}
