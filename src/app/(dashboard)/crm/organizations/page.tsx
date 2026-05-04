"use client";

import CrmOrganisationsList from "@/imports/CrmOrganisationsList/CrmOrganisationsList";

export default function CrmOrganizationsPage() {
  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <CrmOrganisationsList />
    </div>
  );
}
