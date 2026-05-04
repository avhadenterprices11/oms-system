"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import CreateNewProject from "@/imports/CreateNewProject/CreateNewProject";
import AddMilestone from "@/imports/AddMilestone/AddMilestone";
import AddRiskBlocker from "@/imports/AddRiskBlocker/AddRiskBlocker";

type ModalView = null | "create-project" | "add-milestone" | "add-risk-blocker";

export default function ProjectsModuleLayout({ children }: { children: React.ReactNode }) {
  const [modalView, setModalView] = useState<ModalView>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleGlobalClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text = target.textContent?.toLowerCase() || "";

    // Modal triggers
    if (text.includes("add project") || text.includes("create project")) {
      setModalView("create-project");
    } else if (text.includes("add milestone")) {
      setModalView("add-milestone");
    } else if (text.includes("add risk") || text.includes("add blocker")) {
      setModalView("add-risk-blocker");
    }

    // List Navigation
    if (text === "global projects" || (text === "projects" && pathname !== "/projects/list")) {
      router.push("/projects/list");
    }

    // Project Row Click (intercepting legacy list clicks)
    if (target.closest('[data-project-row]') || text.includes("cloud migration") || text.includes("q4 marketing")) {
      router.push("/projects/1"); // Default ID
    }
  };

  return (
    <div className="size-full relative" onClick={handleGlobalClick}>
      {children}

      {/* Shared Project Modals */}
      {modalView && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]" onClick={(e) => {
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
