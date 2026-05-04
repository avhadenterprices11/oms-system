"use client";
import { useState } from "react";
import svgPaths from "@/imports/Dashboard-1/svg-r8n5wq7vya";
import ProjectListView from "@/imports/ProjectListView/ProjectListView";
import ProjectsProjectDetail from "@/imports/ProjectsProjectDetail/ProjectsProjectDetail";
import TaskListView1 from "@/imports/TaskListView-1/TaskListView-15-21707";
import ProjectKanbanView from "@/imports/ProjectKanbanView/ProjectKanbanView";
import ProjectTeamWorkloadDashboard from "@/imports/ProjectTeamWorkloadDashboard/ProjectTeamWorkloadDashboard";
import ProjectTimeline from "@/imports/ProjectTimeline/ProjectTimeline";
import ProjectTasks from "@/imports/ProjectTasks/ProjectTasks";
import ProjectFiles from "@/imports/ProjectFiles/ProjectFiles";
import ProjectMeetingsTab from "@/imports/ProjectMeetingsTab/ProjectMeetingsTab";
import ProjectActivity from "@/imports/ProjectActivity/ProjectActivity";
import ProjectCalendarOmsPortal from "@/imports/ProjectCalendarOmsPortal/ProjectCalendarOmsPortal";
import ProjectMilestonesOmsPortal from "@/imports/ProjectMilestonesOmsPortal/ProjectMilestonesOmsPortal";
import RisksBlockersOmsPortal from "@/imports/RisksBlockersOmsPortal/RisksBlockersOmsPortal";
import CreateNewProject from "@/imports/CreateNewProject/CreateNewProject";
import AddMilestone from "@/imports/AddMilestone/AddMilestone";
import AddRiskBlocker from "@/imports/AddRiskBlocker/AddRiskBlocker";
import ProjectsEmptyState from "@/imports/ProjectsEmptyState/ProjectsEmptyState";

type ProjectView = "list" | "project-detail";
type ProjectTab = "overview" | "list" | "board" | "workload" | "timeline" | "tasks" | "files" | "meetings" | "activity" | "calendar" | "milestones" | "risks-blockers";
type ModalView = null | "create-project" | "add-milestone" | "add-risk-blocker";

interface ProjectsLayoutProps {
  onNavigateBack: () => void;
}

export function ProjectsLayout({ onNavigateBack }: ProjectsLayoutProps) {
  const [currentView, setCurrentView] = useState<ProjectView>("list");
  const [currentTab, setCurrentTab] = useState<ProjectTab>("overview");
  const [modalView, setModalView] = useState<ModalView>(null);

  const handleViewChange = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.textContent?.toLowerCase() || "";

    // Modal triggers
    if (text.includes("add project") || text.includes("create project")) {
      setModalView("create-project");
      return;
    }
    if (text.includes("add milestone")) {
      setModalView("add-milestone");
      return;
    }
    if (text.includes("add risk") || text.includes("add blocker")) {
      setModalView("add-risk-blocker");
      return;
    }

    // Modal close
    if (text.includes("save") || text.includes("cancel") || text.includes("create") || text.includes("submit")) {
      setModalView(null);
      return;
    }

    // Project click - open project detail
    if (target.closest('[data-project-row]') ||
        text.includes("cloud migration") ||
        text.includes("q4 marketing") ||
        text.includes("security audit") ||
        text.includes("mobile app")) {
      setCurrentView("project-detail");
      setCurrentTab("overview");
      return;
    }

    // Back to project list
    if (text.includes("global projects") || text.includes("projects") && currentView === "project-detail") {
      setCurrentView("list");
      return;
    }

    // Tab navigation within project detail
    if (currentView === "project-detail") {
      if (text.includes("overview")) {
        setCurrentTab("overview");
      } else if (text === "list") {
        setCurrentTab("list");
      } else if (text.includes("board")) {
        setCurrentTab("board");
      } else if (text.includes("workload")) {
        setCurrentTab("workload");
      } else if (text.includes("timeline")) {
        setCurrentTab("timeline");
      } else if (text.includes("tasks")) {
        setCurrentTab("tasks");
      } else if (text.includes("files")) {
        setCurrentTab("files");
      } else if (text.includes("meetings")) {
        setCurrentTab("meetings");
      } else if (text.includes("activity")) {
        setCurrentTab("activity");
      } else if (text.includes("calendar")) {
        setCurrentTab("calendar");
      } else if (text.includes("milestones")) {
        setCurrentTab("milestones");
      } else if (text.includes("risks") || text.includes("blockers")) {
        setCurrentTab("risks-blockers");
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
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-[rgba(80,72,229,0.1)] transition-colors"
            title="Projects"
          >
            <svg className="w-[16.667px] h-[13.333px]" fill="none" viewBox="0 0 16.6667 13.3333">
              <path d={svgPaths.p2173c3c0} fill="#5048E5" />
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
      <div className="flex-1 overflow-hidden [&_[data-name='Sidebar']]:hidden [&_.sidebar]:hidden">
        {currentView === "list" && <ProjectListView />}

        {currentView === "project-detail" && (
          <>
            {currentTab === "overview" && <ProjectsProjectDetail />}
            {currentTab === "list" && <TaskListView1 />}
            {currentTab === "board" && <ProjectKanbanView />}
            {currentTab === "workload" && <ProjectTeamWorkloadDashboard />}
            {currentTab === "timeline" && <ProjectTimeline />}
            {currentTab === "tasks" && <ProjectTasks />}
            {currentTab === "files" && <ProjectFiles />}
            {currentTab === "meetings" && <ProjectMeetingsTab />}
            {currentTab === "activity" && <ProjectActivity />}
            {currentTab === "calendar" && <ProjectCalendarOmsPortal />}
            {currentTab === "milestones" && <ProjectMilestonesOmsPortal />}
            {currentTab === "risks-blockers" && <RisksBlockersOmsPortal />}
          </>
        )}
      </div>

      {/* Modals */}
      {modalView && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={(e) => {
          if (e.target === e.currentTarget) setModalView(null);
        }}>
          <div className="bg-white rounded-[16px] shadow-2xl max-w-[800px] w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            {modalView === "create-project" && <CreateNewProject />}
            {modalView === "add-milestone" && <AddMilestone />}
            {modalView === "add-risk-blocker" && <AddRiskBlocker />}
          </div>
        </div>
      )}
    </div>
  );
}
