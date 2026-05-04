"use client";

import ProjectsProjectDetail from "@/imports/ProjectsProjectDetail/ProjectsProjectDetail";

export default function ProjectDetailPage() {
  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <ProjectsProjectDetail />
    </div>
  );
}
