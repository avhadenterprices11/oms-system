"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { AddEmployeeWizard } from "@/components/oms/screens/AddEmployeeWizard";
import EditEmployee from "@/imports/EditEmployee/EditEmployee";
import MessageEmployee from "@/imports/MessageEmployee/MessageEmployee";
import ReassignTasks from "@/imports/ReassignTasks/ReassignTasks";
import TransferPromotePeople from "@/imports/TransferPromotePeople/TransferPromotePeople";
import EmployeeCreatedSuccessfully from "@/imports/EmployeeCreatedSuccessfully/EmployeeCreatedSuccessfully";

type ModalView = null | "add-employee" | "edit-employee" | "message-employee" | "reassign-tasks" | "transfer-promote" | "employee-created";

export default function PeopleLayout({ children }: { children: React.ReactNode }) {
  const [modalView, setModalView] = useState<ModalView>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleGlobalClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.textContent?.toLowerCase() || "";

    // Modal triggers
    if (text.includes("add employee") && !pathname.includes("/directory")) {
      setModalView("add-employee");
    } else if (text.includes("edit") && !text.includes("edit structure") && !pathname.includes("/directory")) {
      setModalView("edit-employee");
    } else if (text.includes("message")) {
      setModalView("message-employee");
    }

    // Navigation triggers (if legacy buttons are clicked)
    if (text === "directory") {
      router.push("/people/directory");
    } else if (text === "workload") {
      router.push("/people/workload");
    } else if (text === "org chart") {
      router.push("/people/org-chart");
    }
  };

  return (
    <div className="size-full flex flex-col" onClick={handleGlobalClick}>
      {/* Module Navigation Tabs */}
      <nav className="flex gap-8 px-8 py-4 border-b bg-white shrink-0">
        <Link 
          href="/people/directory" 
          className={`pb-2 text-[14px] font-medium transition-colors border-b-2 ${
            pathname.includes("/directory") ? "border-[#5048e5] text-[#5048e5]" : "border-transparent text-[#64748b] hover:text-[#0f172a]"
          }`}
        >
          Directory
        </Link>
        <Link 
          href="/people/workload" 
          className={`pb-2 text-[14px] font-medium transition-colors border-b-2 ${
            pathname.includes("/workload") ? "border-[#5048e5] text-[#5048e5]" : "border-transparent text-[#64748b] hover:text-[#0f172a]"
          }`}
        >
          Workload
        </Link>
        <Link 
          href="/people/org-chart" 
          className={`pb-2 text-[14px] font-medium transition-colors border-b-2 ${
            pathname.includes("/org-chart") ? "border-[#5048e5] text-[#5048e5]" : "border-transparent text-[#64748b] hover:text-[#0f172a]"
          }`}
        >
          Org Chart
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>

      {/* Modals */}
      {modalView && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]" onClick={(e) => {
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
