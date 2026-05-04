"use client";

import PeopleOrgChart from "@/imports/PeopleOrgChart-1/PeopleOrgChart";

export default function PeopleOrgChartPage() {
  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <PeopleOrgChart />
    </div>
  );
}
