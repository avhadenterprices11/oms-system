"use client";

import ProjectTimeline from "@/imports/ProjectTimeline/ProjectTimeline";

export default function ProjectTimelinePage() {
  return (
    <div className="size-full [&_[data-name='Sidebar']]:hidden [&_[data-name='Top']]:hidden">
      <ProjectTimeline />
    </div>
  );
}
