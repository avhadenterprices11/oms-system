"use client";

import CrmLeadAssignmentRules from "@/imports/CrmLeadAssignmentRules/CrmLeadAssignmentRules";

export default function CrmLeadAssignmentRulesPage() {
  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <CrmLeadAssignmentRules />
    </div>
  );
}
