"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

interface NavGroup {
  title: string;
  badge?: string;
  items: NavItem[];
}

const SETTINGS_NAV: NavGroup[] = [
  {
    title: "MY ACCOUNT",
    items: [
      { label: "Personal Profile", href: "/settings" },
      { label: "Password & Security", href: "/settings/security" },
      { label: "Notifications", href: "/settings/notifications" },
      { label: "Display & Language", href: "/settings/display" },
      { label: "Calendar & Availability", href: "/settings/calendar" },
      { label: "Connected Accounts", href: "/settings/accounts" },
    ],
  },
  {
    title: "TEAM",
    items: [
      { label: "Team Members", href: "/settings/team" },
      { label: "Team Roles", href: "/settings/team-roles" },
      { label: "Approvals", href: "/settings/approvals" },
      { label: "Delegation", href: "/settings/delegation" },
    ],
  },
  {
    title: "ORGANIZATION",
    items: [
      { label: "Company Profile", href: "/settings/company" },
      { label: "Departments", href: "/settings/departments" },
      { label: "Locations", href: "/settings/locations" },
      { label: "Branding", href: "/settings/branding" },
    ],
  },
  {
    title: "PEOPLE & ACCESS",
    items: [
      { label: "Roles & Permissions", href: "/settings/permissions" },
      { label: "User Provisioning", href: "/settings/provisioning" },
      { label: "Onboarding", href: "/settings/onboarding" },
      { label: "Offboarding", href: "/settings/offboarding" },
    ],
  },
  {
    title: "MODULES",
    items: [
      { label: "Tasks", href: "/settings/modules/tasks" },
      { label: "Projects", href: "/settings/modules/projects" },
      { label: "CRM", href: "/settings/modules/crm" },
      { label: "Chat", href: "/settings/modules/chat" },
      { label: "Meetings", href: "/settings/modules/meetings" },
      { label: "Documents", href: "/settings/modules/documents" },
      { label: "Leave", href: "/settings/modules/leave" },
      { label: "Events", href: "/settings/modules/events" },
      { label: "Announcements", href: "/settings/modules/announcements" },
    ],
  },
  {
    title: "SECURITY & COMPLIANCE",
    items: [
      { label: "Authentication & SSO", href: "/settings/security/auth" },
      { label: "Audit Log", href: "/settings/security/audit" },
      { label: "Data Retention", href: "/settings/security/retention" },
      { label: "Compliance", href: "/settings/security/compliance" },
    ],
  },
  {
    title: "INTEGRATIONS",
    items: [
      { label: "Custom Fields", href: "/settings/integrations/fields" },
      { label: "Feature Flags", href: "/settings/integrations/flags" },
      { label: "API Keys", href: "/settings/integrations/keys" },
      { label: "Webhooks", href: "/settings/integrations/webhooks" },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      { label: "Tenants", href: "/settings/system/tenants" },
      { label: "Workflows", href: "/settings/system/workflows" },
      { label: "Billing", href: "/settings/system/billing" },
      { label: "Backup", href: "/settings/system/backup" },
      { label: "Import / Export", href: "/settings/system/data" },
      { label: "System Health", href: "/settings/system/health" },
    ],
  },
];

export function SettingsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full bg-[#f6f6f8] font-['Inter',sans-serif]">
      {/* Settings Sidebar */}
      <aside className="w-[280px] bg-white border-r border-slate-200 overflow-y-auto flex flex-col shrink-0 custom-scrollbar">
        <div className="flex flex-col gap-8 py-8">
          {SETTINGS_NAV.map((group) => (
            <div key={group.title} className="px-4">
              <div className="px-4 mb-2 flex items-center gap-2">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[1.5px]">
                  {group.title}
                </span>
                {group.badge && (
                  <span className="text-[9px] font-black text-[#5048e5]/60 bg-[#5048e5]/5 px-1.5 py-0.5 rounded border border-[#5048e5]/10">
                    {group.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-0.5">
                {group.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-4 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-[#5048e5]/5 text-[#5048e5]"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Settings Content */}
      <main className="flex-1 overflow-y-auto custom-scrollbar bg-[#f8fafc]">
        <div className="max-w-[1300px] mx-auto py-6 px-8">
          {children}
        </div>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}} />
    </div>
  );
}
