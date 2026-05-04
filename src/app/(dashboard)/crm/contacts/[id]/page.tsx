"use client";

import CrmContactDetail from "@/imports/CrmContactDetail/CrmContactDetail";

export default function CrmContactDetailPage() {
  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <CrmContactDetail />
    </div>
  );
}
