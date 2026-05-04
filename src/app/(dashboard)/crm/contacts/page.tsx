"use client";

import CrmContactsList from "@/imports/CrmContactsList/CrmContactsList";

export default function CrmContactsPage() {
  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <CrmContactsList />
    </div>
  );
}
