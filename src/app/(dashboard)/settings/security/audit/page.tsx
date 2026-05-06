"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function AuditLogPage() {
  const logs = [
    { time: "Mar 28, 14:32", user: "Ashwini Reddy", action: "Updated", resource: "User Role — Ravi Kumar", ip: "103.21.xx.xx", details: "Role: Employee → Manager" },
    { time: "Mar 28, 13:15", user: "Sarah Mitchell", action: "Created", resource: "Department — Analytics", ip: "103.21.xx.xx", details: "New department" },
    { time: "Mar 28, 11:00", user: "Ravi Kumar", action: "Exported", resource: "Task Report Q1", ip: "103.21.xx.xx", details: "CSV format, 245 rows" },
    { time: "Mar 28, 10:22", user: "System", action: "Auto", resource: "Session Expired — Marcus Vane", ip: "---", details: "Inactive 30 min", isSystem: true },
    { time: "Mar 27, 16:45", user: "Lisa Chen", action: "Deleted", resource: "Document — Draft Proposal", ip: "49.36.xx.xx", details: "Permanent delete", isCritical: true },
    { time: "Mar 27, 15:30", user: "Tomas Garcia", action: "Login", resource: "---", ip: "72.14.xx.xx", details: "SSO via Azure AD" },
    { time: "Mar 27, 14:00", user: "Ashwini Reddy", action: "Modified", resource: "Permission — CRM Export", ip: "103.21.xx.xx", details: "Enabled for Manager role" },
    { time: "Mar 27, 09:15", user: "System", action: "Auto", resource: "Backup Completed", ip: "---", details: "Full backup, 2.3 GB", isSystem: true },
  ];

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Audit Logs</h1>
        <p className="text-slate-500 text-sm font-medium">SOC2-compliant activity logging</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Main Audit Feed Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm mb-6">
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="relative w-44">
              <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-500 outline-none appearance-none">
                <option>Filter by user</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}/></svg>
              </div>
            </div>
            <div className="relative w-44">
              <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-500 outline-none appearance-none">
                <option>Filter by action</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}/></svg>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <input type="date" className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-500 outline-none" />
              <span className="text-[10px] font-black text-slate-300 uppercase">to</span>
              <input type="date" className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-500 outline-none" />
            </div>
          </div>

          <div className="mb-8">
            <button className="px-6 py-2 rounded-xl border border-slate-200 text-[12px] font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
              Export Logs
            </button>
          </div>

          {/* Log Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-50">
                  {["TIMESTAMP", "USER", "ACTION", "RESOURCE", "IP ADDRESS", "DETAILS"].map((h) => (
                    <th key={h} className="text-left py-4 px-2 text-[10px] font-black text-slate-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {logs.map((log, idx) => (
                  <tr key={idx} className="group hover:bg-slate-50/30 transition-colors">
                    <td className="py-4 px-2 text-[12px] font-bold text-slate-400 leading-relaxed whitespace-nowrap">{log.time}</td>
                    <td className="py-4 px-2 text-[13px] font-bold text-slate-700 whitespace-nowrap">
                      <span className={log.isSystem ? "text-slate-300" : ""}>{log.user}</span>
                    </td>
                    <td className="py-4 px-2">
                      <span className={`text-[12px] font-black tracking-tight ${
                        log.isCritical ? "text-rose-500" : log.isSystem ? "text-slate-300" : "text-slate-700"
                      }`}>
                        {log.action}
                      </span>
                    </td>
                    <td className="py-4 px-2 text-[13px] font-bold text-slate-600 whitespace-nowrap">{log.resource}</td>
                    <td className="py-4 px-2 text-[12px] font-bold text-slate-400 font-mono">{log.ip}</td>
                    <td className="py-4 px-2 text-[12px] font-medium text-slate-400">{log.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between border-t border-slate-50 pt-8">
            <span className="text-[12px] font-bold text-slate-300">Showing 8 of 1,247 entries</span>
          </div>
        </section>

        {/* Retention Settings Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm mb-12">
          <h2 className="text-[16px] font-bold text-slate-900 mb-8">Retention Settings</h2>
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-900">Log Retention Period</label>
                <div className="relative">
                  <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none appearance-none">
                    <option>1 Year (Default)</option>
                    <option>2 Years</option>
                    <option>Forever</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto py-2">
                <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Auto-Export to External SIEM</h3>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2 max-w-2xl">
              <label className="text-[13px] font-bold text-slate-900">SIEM Endpoint URL</label>
              <input 
                type="text" 
                placeholder="https://siem.example.com/ingest"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 outline-none"
              />
            </div>
          </div>
        </section>
      </div>
    </SettingsLayout>
  );
}
