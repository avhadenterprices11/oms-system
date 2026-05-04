"use client";
import { useState } from "react";
import svgPaths from "@/imports/Dashboard-1/svg-r8n5wq7vya";
import PeopleEmployeeDirectory from "@/imports/PeopleEmployeeDirectory-1/PeopleEmployeeDirectory";
import PeopleEmployeeWorkload from "@/imports/PeopleEmployeeWorkload-1/PeopleEmployeeWorkload";
import PeopleOrgChart from "@/imports/PeopleOrgChart-1/PeopleOrgChart";
import WorkloadFilterPanel from "@/imports/WorkloadFilterPanel-1/WorkloadFilterPanel";
import DirectoryFilterDropdown from "@/imports/DirectoryFilterDropdown-1/DirectoryFilterDropdown";
import { EmployeeProfileLayout } from "@/components/oms/layouts/EmployeeProfileLayout";
import { AddEmployeeWizard } from "@/components/oms/screens/AddEmployeeWizard";
import { OffboardingLayout } from "@/components/oms/layouts/OffboardingLayout";
import { LeaveLayout } from "@/components/oms/layouts/LeaveLayout";
import EditEmployee from "@/imports/EditEmployee/EditEmployee";
import MessageEmployee from "@/imports/MessageEmployee/MessageEmployee";
import ReassignTasks from "@/imports/ReassignTasks/ReassignTasks";
import TransferPromotePeople from "@/imports/TransferPromotePeople/TransferPromotePeople";
import EmployeeCreatedSuccessfully from "@/imports/EmployeeCreatedSuccessfully/EmployeeCreatedSuccessfully";

type PeopleView = "directory" | "workload" | "org-chart" | "employee-profile" | "offboarding" | "leave";
type ModalView = null | "add-employee" | "edit-employee" | "message-employee" | "reassign-tasks" | "transfer-promote" | "employee-created";

interface PeopleLayoutProps {
  onNavigateBack: () => void;
}

export function PeopleLayout({ onNavigateBack }: PeopleLayoutProps) {
  const [currentView, setCurrentView] = useState<PeopleView>("directory");
  const [showFilters, setShowFilters] = useState(false);
  const [modalView, setModalView] = useState<ModalView>(null);

  const handleViewChange = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.textContent?.toLowerCase() || "";

    // Modal triggers
    if (text.includes("add employee")) {
      setModalView("add-employee");
      return;
    }
    if (text.includes("edit") && !text.includes("edit structure")) {
      setModalView("edit-employee");
      return;
    }
    if (text.includes("message")) {
      setModalView("message-employee");
      return;
    }
    if (text.includes("reassign")) {
      setModalView("reassign-tasks");
      return;
    }
    if (text.includes("transfer") || text.includes("promote")) {
      setModalView("transfer-promote");
      return;
    }

    // Modal close actions
    if (text.includes("save") || text.includes("cancel") || text.includes("send message") ||
        text.includes("create employee") || text.includes("submit")) {
      if (modalView === "add-employee") {
        setModalView("employee-created");
      } else {
        setModalView(null);
      }
      return;
    }

    // Employee Created modal close
    if (text.includes("go to directory") || text.includes("add another")) {
      setModalView(null);
      setCurrentView("directory");
      return;
    }

    // Employee profile click - "View Profile" button
    if (text.includes("view profile")) {
      setCurrentView("employee-profile");
      setModalView(null);
      return;
    }

    // Offboarding
    if (text.includes("offboarding") || text.includes("offboard")) {
      setCurrentView("offboarding");
      setModalView(null);
      return;
    }

    // Leave management
    if (text.includes("leave") && !text.includes("view profile")) {
      setCurrentView("leave");
      setModalView(null);
      return;
    }

    // View changes
    if (text.includes("directory")) {
      setCurrentView("directory");
      setShowFilters(false);
    } else if (text.includes("workload")) {
      setCurrentView("workload");
      setShowFilters(false);
    } else if (text.includes("org chart")) {
      setCurrentView("org-chart");
      setShowFilters(false);
    } else if (text.includes("filter")) {
      setShowFilters(!showFilters);
    } else if (text.includes("apply") || text.includes("clear")) {
      setShowFilters(false);
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

      {/* Main Content Area */}
      <div className="flex-1 flex relative overflow-hidden">
        {currentView === "employee-profile" ? (
          <EmployeeProfileLayout onNavigateBack={() => setCurrentView("directory")} />
        ) : currentView === "offboarding" ? (
          <OffboardingLayout onNavigateBack={() => setCurrentView("directory")} />
        ) : currentView === "leave" ? (
          <LeaveLayout onNavigateBack={() => setCurrentView("directory")} />
        ) : (
          <div className="flex-1 overflow-hidden">
            {currentView === "directory" && (
              <div className="relative size-full [&_[data-name='Sidebar']]:hidden">
                <PeopleEmployeeDirectory />
                {showFilters && (
                  <div className="absolute top-0 right-0 z-10">
                    <DirectoryFilterDropdown />
                  </div>
                )}
              </div>
            )}
            {currentView === "workload" && (
              <div className="relative size-full [&_[data-name='Sidebar']]:hidden">
                <PeopleEmployeeWorkload />
                {showFilters && (
                  <div className="absolute top-0 right-0 z-10 h-full">
                    <WorkloadFilterPanel />
                  </div>
                )}
              </div>
            )}
            {currentView === "org-chart" && (
              <div className="[&_[data-name='Sidebar']]:hidden">
                <PeopleOrgChart />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modals */}
      {modalView && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={(e) => {
          if (e.target === e.currentTarget) setModalView(null);
        }}>
          <div className="bg-white rounded-[16px] shadow-2xl max-w-[700px] w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            {modalView === "add-employee" && <AddEmployeeWizard />}
            {modalView === "edit-employee" && <EditEmployee />}
            {modalView === "message-employee" && <MessageEmployee />}
            {modalView === "reassign-tasks" && <ReassignTasks />}
            {modalView === "transfer-promote" && <TransferPromotePeople />}
            {modalView === "employee-created" && <EmployeeCreatedSuccessfully />}
          </div>
        </div>
      )}
    </div>
  );
}
