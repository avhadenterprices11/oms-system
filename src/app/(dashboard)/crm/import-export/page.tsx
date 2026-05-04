"use client";

import CrmImportExport from "@/imports/CrmImportExport/CrmImportExport";

export default function CrmImportExportPage() {
  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <CrmImportExport />
    </div>
  );
}
