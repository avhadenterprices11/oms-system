"use client";

import TasksTaskDetail from "@/imports/TasksTaskDetail/TasksTaskDetail";

export default function TaskDetailPage() {
  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <TasksTaskDetail />
    </div>
  );
}
