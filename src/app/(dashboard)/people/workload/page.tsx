"use client";

import PeopleEmployeeWorkload from "@/imports/PeopleEmployeeWorkload-1/PeopleEmployeeWorkload";

export default function PeopleWorkloadPage() {
  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <PeopleEmployeeWorkload />
    </div>
  );
}
