"use client";

import dynamic from "next/dynamic";

const TaskListView = dynamic(() => import("@/imports/TaskListView/TaskListView"), {
  ssr: false,
  loading: () => <div className="p-8 text-gray-500 animate-pulse">Loading Tasks...</div>
});

export default function TasksListPage() {
  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <TaskListView />
    </div>
  );
}
