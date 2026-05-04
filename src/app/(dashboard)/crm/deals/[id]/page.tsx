"use client";

import CrmDealDetail from "@/imports/CrmDealDetail/CrmDealDetail";

export default function CrmDealDetailPage() {
  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <CrmDealDetail />
    </div>
  );
}
