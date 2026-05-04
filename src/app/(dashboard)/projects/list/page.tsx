"use client";

import ProjectListView from "@/imports/ProjectListView/ProjectListView";

export default function ProjectsListPage() {
  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <ProjectListView />
    </div>
  );
}
