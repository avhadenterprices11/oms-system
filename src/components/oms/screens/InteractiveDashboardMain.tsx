"use client";
import { useState } from "react";
import Dashboard from "@/imports/Dashboard-1/Dashboard-2-1982";
import DashboardWidgetManager from "@/imports/DashboardWidgetManager/DashboardWidgetManager";

export function InteractiveDashboardMain() {
  const [showWidgetManager, setShowWidgetManager] = useState(false);

  const handleWidgetManagerToggle = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    // Check if clicked on Customize or Widget-related button
    if (
      target.closest('[data-name="customize-widgets"]') ||
      target.textContent?.includes("Customize") ||
      target.textContent?.includes("Widget")
    ) {
      setShowWidgetManager(true);
    }
  };

  const handleSaveLayout = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.textContent?.includes("Save Layout")) {
      setShowWidgetManager(false);
    } else if (target.textContent?.includes("Cancel")) {
      setShowWidgetManager(false);
    }
  };

  return (
    <div className="size-full" onClick={showWidgetManager ? handleSaveLayout : handleWidgetManagerToggle}>
      {showWidgetManager ? <DashboardWidgetManager /> : <Dashboard />}
    </div>
  );
}
