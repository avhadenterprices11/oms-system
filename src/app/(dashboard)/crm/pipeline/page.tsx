"use client";

import dynamic from "next/dynamic";

const CrmSalesPipeline = dynamic(() => import("@/imports/CrmSalesPipeline/CrmSalesPipeline"), {
  ssr: false,
  loading: () => <div className="p-8 text-gray-500 animate-pulse">Loading Pipeline...</div>
});

export default function CrmPipelinePage() {
  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <CrmSalesPipeline />
    </div>
  );
}
