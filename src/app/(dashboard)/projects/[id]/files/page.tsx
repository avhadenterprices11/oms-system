"use client";

import ProjectFiles from "@/imports/ProjectFiles/ProjectFiles";

export default function ProjectFilesPage() {
  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <ProjectFiles />
    </div>
  );
}
