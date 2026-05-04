"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import TaskDetailsModal from "@/imports/TaskDetailsModal/TaskDetailsModal";
import CreateTask from "@/imports/CreateTask/CreateTask";

type ModalView = null | "task-modal" | "create-task";

export default function TasksModuleLayout({ children }: { children: React.ReactNode }) {
  const [modalView, setModalView] = useState<ModalView>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleGlobalClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.textContent?.toLowerCase() || "";

    // Modal triggers
    if (text.includes("add delivery") || text.includes("create task")) {
      setModalView("create-task");
    }

    // Task Row Click (intercepting legacy list clicks)
    if (target.closest('[data-task-row]') || text.includes("cloud migration") || text.includes("security audit")) {
      // For tasks, we might want to open a modal or go to a detail page
      // Here we mimic the legacy logic: if in list view, go to detail page
      if (pathname.includes("/list")) {
        router.push("/tasks/1");
      } else {
        setModalView("task-modal");
      }
    }

    // Tab Navigation interception for legacy buttons
    if (text.includes("global tasks") || text === "list") {
      router.push("/tasks/list");
    } else if (text.includes("approval")) {
      router.push("/tasks/approvals");
    } else if (text.includes("dependencies")) {
      router.push("/tasks/dependencies");
    }
  };

  return (
    <div className="size-full flex flex-col" onClick={handleGlobalClick}>
      {/* Module Navigation Tabs */}
      <nav className="flex gap-8 px-8 py-4 border-b bg-white shrink-0">
        <Link 
          href="/tasks/list" 
          className={`pb-2 text-[14px] font-medium transition-colors border-b-2 ${
            pathname.includes("/list") ? "border-[#5048e5] text-[#5048e5]" : "border-transparent text-[#64748b] hover:text-[#0f172a]"
          }`}
        >
          Global Tasks
        </Link>
        <Link 
          href="/tasks/approvals" 
          className={`pb-2 text-[14px] font-medium transition-colors border-b-2 ${
            pathname.includes("/approvals") ? "border-[#5048e5] text-[#5048e5]" : "border-transparent text-[#64748b] hover:text-[#0f172a]"
          }`}
        >
          Approvals
        </Link>
        <Link 
          href="/tasks/dependencies" 
          className={`pb-2 text-[14px] font-medium transition-colors border-b-2 ${
            pathname.includes("/dependencies") ? "border-[#5048e5] text-[#5048e5]" : "border-transparent text-[#64748b] hover:text-[#0f172a]"
          }`}
        >
          Dependencies
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>

      {/* Shared Task Modals */}
      {modalView && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]" onClick={(e) => {
          if (e.target === e.currentTarget) setModalView(null);
        }}>
          <div className="bg-white rounded-[16px] shadow-2xl max-w-[900px] w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            {modalView === "task-modal" && <TaskDetailsModal />}
            {modalView === "create-task" && <CreateTask />}
          </div>
        </div>
      )}
    </div>
  );
}
