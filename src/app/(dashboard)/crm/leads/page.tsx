"use client";

import CrmLeadsList from "@/imports/CrmLeadsList/CrmLeadsList";

export default function CrmLeadsPage() {
  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <CrmLeadsList />
    </div>
  );
}
