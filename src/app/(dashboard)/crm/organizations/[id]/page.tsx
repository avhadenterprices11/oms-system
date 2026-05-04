"use client";

import CrmOrganisationDetail from "@/imports/CrmOrganisationDetail/CrmOrganisationDetail";

export default function CrmOrganizationDetailPage() {
  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <CrmOrganisationDetail />
    </div>
  );
}
