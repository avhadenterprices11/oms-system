"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function RolesPage() {
  const systemRoles = [
    { 
      name: "Super Admin", 
      desc: "Full system access, manage all settings and users", 
      users: "1 user: Sarah Mitchell",
      color: "border-purple-500"
    },
    { 
      name: "Admin / Operations", 
      desc: "Manage users, view all data, configure modules", 
      users: "2 users: Ashwini Reddy, Lisa Chen",
      color: "border-blue-500"
    },
    { 
      name: "Manager", 
      desc: "Manage team, approve requests, view team data", 
      users: "2 users: Tomas Garcia, Sanya Patel",
      color: "border-emerald-500"
    },
    { 
      name: "Employee", 
      desc: "Standard access, manage own data", 
      users: "19 users",
      color: "border-slate-300"
    }
  ];

  const matrix = [
    { module: "Dashboard", super: "Full", admin: "Read/Write", manager: "Read/Write", emp: "Read Only" },
    { module: "People", super: "Full", admin: "Read/Write", manager: "Read Only", emp: "Read Only" },
    { module: "Tasks", super: "Full", admin: "Read/Write", manager: "Read/Write", emp: "Read/Write" },
    { module: "Projects", super: "Full", admin: "Read/Write", manager: "Read/Write", emp: "Read Only" },
    { module: "CRM", super: "Full", admin: "Read/Write", manager: "Read Only", emp: "---" },
    { module: "Events", super: "Full", admin: "Read/Write", manager: "Read/Write", emp: "Read Only" },
    { module: "Chat", super: "Full", admin: "Read/Write", manager: "Read/Write", emp: "Read/Write" },
    { module: "Meetings", super: "Full", admin: "Read/Write", manager: "Read/Write", emp: "Read/Write" },
    { module: "Documents", super: "Full", admin: "Read/Write", manager: "Read/Write", emp: "Read Only" },
    { module: "Leave", super: "Full", admin: "Read/Write", manager: "Read/Write", emp: "Read Only" },
    { module: "Announcements", super: "Full", admin: "Read/Write", manager: "Read Only", emp: "Read Only" },
  ];

  const getBadgeStyle = (level: string) => {
    switch (level) {
      case "Full": return "bg-purple-50 text-purple-600 border-purple-100";
      case "Read/Write": return "bg-blue-50 text-blue-600 border-blue-100";
      case "Read Only": return "bg-emerald-50 text-emerald-600 border-emerald-100";
      default: return "text-slate-300";
    }
  };

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Roles & Permissions</h1>
          <p className="text-slate-500 text-sm font-medium">Configure access control roles</p>
        </div>
        <button className="bg-[#5048e5] px-6 py-2.5 rounded-xl text-[14px] font-bold text-white shadow-md hover:bg-[#4338ca] transition-all flex items-center gap-2">
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
          Create Custom Role
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {/* System Roles Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">System Roles</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Built-in roles with predefined permission sets</p>
          
          <div className="flex flex-col gap-4">
            {systemRoles.map((role, idx) => (
              <div key={idx} className="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-2xl hover:border-slate-200 hover:shadow-sm transition-all relative overflow-hidden group">
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 border-l-4 ${role.color}`} />
                <div>
                  <h3 className="text-[15px] font-black text-slate-900 mb-0.5">{role.name}</h3>
                  <p className="text-slate-500 text-[13px] font-medium leading-relaxed mb-1">{role.desc}</p>
                  <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">{role.users}</span>
                </div>
                <button className="text-[12px] font-bold text-[#5048e5] hover:underline shrink-0">View Permissions</button>
              </div>
            ))}
          </div>
        </section>

        {/* Permission Matrix Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm mb-12">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Permission Matrix</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Module-level access by role</p>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-50">
                  <th className="text-left py-4 px-2 text-[10px] font-black text-slate-400 uppercase tracking-wider">Module</th>
                  <th className="text-center py-4 px-2 text-[10px] font-black text-slate-400 uppercase tracking-wider">Super Admin</th>
                  <th className="text-center py-4 px-2 text-[10px] font-black text-slate-400 uppercase tracking-wider">Admin</th>
                  <th className="text-center py-4 px-2 text-[10px] font-black text-slate-400 uppercase tracking-wider">Manager</th>
                  <th className="text-center py-4 px-2 text-[10px] font-black text-slate-400 uppercase tracking-wider">Employee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {matrix.map((row, idx) => (
                  <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-2 text-[13px] font-bold text-slate-700">{row.module}</td>
                    {[row.super, row.admin, row.manager, row.emp].map((level, i) => (
                      <td key={i} className="py-3 px-2 text-center">
                        {level === "---" ? (
                          <span className="text-slate-300 font-medium">—</span>
                        ) : (
                          <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black border tracking-tight ${getBadgeStyle(level)}`}>
                            {level}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </SettingsLayout>
  );
}
