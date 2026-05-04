"use client";

import TaskDependenciesOmsPortal from "@/imports/TaskDependenciesOmsPortal/TaskDependenciesOmsPortal";

export default function TaskDependenciesPage() {
  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <TaskDependenciesOmsPortal />
    </div>
  );
}
