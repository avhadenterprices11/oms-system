"use client";

import TaskApprovalsTasks from "@/imports/TaskApprovalsTasks/TaskApprovalsTasks";

export default function TaskApprovalsPage() {
  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <TaskApprovalsTasks />
    </div>
  );
}
