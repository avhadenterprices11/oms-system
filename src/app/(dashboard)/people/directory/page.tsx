"use client";

import dynamic from "next/dynamic";

const PeopleEmployeeDirectory = dynamic(() => import("@/imports/PeopleEmployeeDirectory-1/PeopleEmployeeDirectory"), {
  ssr: false,
  loading: () => <div className="p-8 text-gray-500 animate-pulse">Loading Directory...</div>
});

export default function PeopleDirectoryPage() {
  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <PeopleEmployeeDirectory />
    </div>
  );
}
