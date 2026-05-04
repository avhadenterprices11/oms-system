"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

export default function ProjectDetailLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const params = useParams();
  const id = params.id as string;

  const tabs = [
    { label: "Overview", href: `/projects/${id}` },
    { label: "Tasks", href: `/projects/${id}/tasks` },
    { label: "Board", href: `/projects/${id}/board` },
    { label: "Timeline", href: `/projects/${id}/timeline` },
    { label: "Files", href: `/projects/${id}/files` },
    { label: "Workload", href: `/projects/${id}/workload` },
    { label: "Meetings", href: `/projects/${id}/meetings` },
    { label: "Milestones", href: `/projects/${id}/milestones` },
    { label: "Risks", href: `/projects/${id}/risks` },
  ];

  return (
    <div className="size-full flex flex-col">
      {/* Project Tab Bar */}
      <nav className="flex gap-6 px-8 pt-4 border-b bg-white shrink-0 overflow-x-auto">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`pb-3 text-[13px] font-semibold transition-colors border-b-2 whitespace-nowrap ${
              pathname === tab.href || (tab.label === "Overview" && pathname === `/projects/${id}`)
                ? "border-[#5048e5] text-[#5048e5]"
                : "border-transparent text-[#64748b] hover:text-[#0f172a]"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </nav>

      {/* Tab Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}
