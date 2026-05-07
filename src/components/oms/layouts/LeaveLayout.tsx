"use client";
import { useState } from "react";
import svgPaths from "@/imports/Dashboard-1/svg-r8n5wq7vya";
import LeaveDashboard from "@/imports/LeaveDashboard/LeaveDashboard";
import LeaveApprovalsLeave from "@/imports/LeaveApprovalsLeave/LeaveApprovalsLeave";
import TeamLeaveCalendarApril2026 from "@/imports/TeamLeaveCalendarApril2026/TeamLeaveCalendarApril2026";
import TeamCalendarPeople from "@/imports/TeamCalendarPeople/TeamCalendarPeople";
import LeaveRequestForm from "@/imports/LeaveRequestForm/LeaveRequestForm";
import RequestLeave from "@/imports/RequestLeave/RequestLeave";
import LeaveApprovalTabbedModal from "@/imports/LeaveApprovalTabbedModal/LeaveApprovalTabbedModal";
import ApproveLeaveRequest from "@/imports/ApproveLeaveRequest/ApproveLeaveRequest";
import RejectLeaveRequest from "@/imports/RejectLeaveRequest/RejectLeaveRequest";
import RequestAdditionalInformation from "@/imports/RequestAdditionalInformation/RequestAdditionalInformation";
import Container from "@/imports/Container-1/Container-15-57434";

type LeaveView = "dashboard" | "approvals" | "team-calendar" | "team-calendar-people";
type ModalView = null | "request-leave" | "leave-request-form" | "approval-detail" | "approve-request" | "reject-request" | "request-info" | "leave-conflict";

interface LeaveLayoutProps {
  onNavigateBack: () => void;
}

export function LeaveLayout({ onNavigateBack }: LeaveLayoutProps) {
  const [currentView, setCurrentView] = useState<LeaveView>("dashboard");
  const [modalView, setModalView] = useState<ModalView>(null);



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
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f8fafc] transition-all hover:scale-110 active:scale-95"
            title="Dashboard"
          >
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 18 18">
              <path d={svgPaths.p20793584} fill="#475569" />
            </svg>
          </button>

          <button
            onClick={() => setCurrentView("dashboard")}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 ${currentView === "dashboard" ? "bg-[rgba(80,72,229,0.1)]" : "hover:bg-[#f8fafc]"}`}
            title="People"
            data-nav="people"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 100-6 3 3 0 000 6zM4 14a4 4 0 018 0H4z" fill={currentView === "dashboard" ? "#5048E5" : "#475569"} />
            </svg>
          </button>

          <button
            onClick={() => setCurrentView("approvals")}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 ${currentView === "approvals" ? "bg-[rgba(80,72,229,0.1)]" : "hover:bg-[#f8fafc]"}`}
            title="Approvals"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <path d="M12 2l-5.5 9-2.5-2.5" stroke={currentView === "approvals" ? "#5048E5" : "#475569"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </button>

          <button
            onClick={() => setCurrentView("team-calendar")}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 ${currentView === "team-calendar" || currentView === "team-calendar-people" ? "bg-[rgba(80,72,229,0.1)]" : "hover:bg-[#f8fafc]"}`}
            title="Team Calendar"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
              <rect x="2" y="3" width="12" height="10" rx="1" stroke={currentView.includes("calendar") ? "#5048E5" : "#475569"} strokeWidth="1.5" fill="none" />
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

      {/* Main Content Area - Hide imported sidebars and ensure smooth transitions */}
      <div className="flex-1 overflow-hidden [&_[data-name*='Sidebar']]:hidden [&_[data-name*='Header']]:hidden [&_.sidebar]:hidden [&_aside]:hidden animate-in fade-in duration-300">
        <div className="h-full w-full overflow-auto">
          {currentView === "dashboard" && <LeaveDashboard onSwitchToApprovals={() => setCurrentView("approvals")} />}
          {currentView === "approvals" && <LeaveApprovalsLeave />}
          {currentView === "team-calendar" && <TeamLeaveCalendarApril2026 />}
          {currentView === "team-calendar-people" && <TeamCalendarPeople />}
        </div>
      </div>

      {/* Modals */}
      {modalView && modalView === "leave-conflict" ? (
        <Container />
      ) : modalView ? (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={(e) => {
          if (e.target === e.currentTarget) setModalView(null);
        }}>
          <div className="bg-white rounded-[16px] shadow-2xl max-w-[700px] w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            {modalView === "request-leave" && <RequestLeave />}
            {modalView === "leave-request-form" && <LeaveRequestForm />}
            {modalView === "approval-detail" && <LeaveApprovalTabbedModal />}
            {modalView === "approve-request" && <ApproveLeaveRequest />}
            {modalView === "reject-request" && <RejectLeaveRequest />}
            {modalView === "request-info" && <RequestAdditionalInformation />}
          </div>
        </div>
      ) : null}
    </div>
  );
}
