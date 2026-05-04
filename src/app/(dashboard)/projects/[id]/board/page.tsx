"use client";

import dynamic from "next/dynamic";

const ProjectKanbanView = dynamic(() => import("@/imports/ProjectKanbanView/ProjectKanbanView"), {
  ssr: false,
  loading: () => <div className="p-8 text-gray-500 animate-pulse">Loading Board...</div>
});

export default function ProjectBoardPage() {
  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <ProjectKanbanView />
    </div>
  );
}
