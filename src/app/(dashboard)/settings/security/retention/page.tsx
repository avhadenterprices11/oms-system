"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function RetentionPoliciesPage() {
  const policies = [
    { module: "Tasks", active: "Unlimited", archive: "1 year", delete: "3 years", status: "Active" },
    { module: "Projects", active: "Unlimited", archive: "2 years", delete: "5 years", status: "Active" },
    { module: "CRM", active: "Unlimited", archive: "3 years", delete: "7 years", status: "Active" },
    { module: "Chat Messages", active: "365 days", archive: "1 year", delete: "2 years", status: "Active" },
    { module: "Documents", active: "Unlimited", archive: "Never", delete: "Never", status: "Active" },
    { module: "Meetings (Recordings)", active: "90 days", archive: "6 months", delete: "1 year", status: "Active" },
    { module: "Audit Logs", active: "3 years", archive: "5 years", delete: "7 years", status: "Active", badge: "SOC2" },
    { module: "Leave Records", active: "Unlimited", archive: "Never", delete: "Never", status: "Active" },
  ];

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Data Retention Policies</h1>
      </div>

      <div className="flex flex-col gap-6">
        {/* Retention Matrix Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm mb-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-50">
                  {["MODULE", "ACTIVE DATA", "ARCHIVE AFTER", "DELETE AFTER", "STATUS", ""].map((h) => (
                    <th key={h} className="text-left py-4 px-4 text-[10px] font-black text-slate-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {policies.map((p, idx) => (
                  <tr key={idx} className="group hover:bg-slate-50/30 transition-colors">
                    <td className="py-5 px-4 text-[14px] font-bold text-slate-700">{p.module}</td>
                    <td className="py-5 px-4 text-[14px] font-medium text-slate-500">{p.active}</td>
                    <td className="py-5 px-4 text-[14px] font-medium text-slate-500">{p.archive}</td>
                    <td className="py-5 px-4 text-[14px] font-medium text-slate-500">{p.delete}</td>
                    <td className="py-5 px-4">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-md text-[10px] font-black uppercase tracking-wider">
                          {p.status}
                        </span>
                        {p.badge && (
                          <span className="px-2.5 py-0.5 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-md text-[10px] font-black uppercase tracking-wider">
                            {p.badge}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-5 px-4 text-right">
                      <button className="text-[#5048e5] text-[13px] font-bold hover:underline">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Data Deletion Governance Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm mb-12">
          <h2 className="text-[16px] font-bold text-slate-900 mb-10">Data Deletion</h2>
          
          <div className="space-y-10">
            <div className="flex items-center justify-between py-2 border-b border-slate-50 pb-8">
              <div className="flex flex-col gap-1">
                <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Allow Users to Request Data Deletion</h3>
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">GDPR Article 17</span>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-slate-50 pb-8">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Deletion Approval Required</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-[13px] font-bold text-slate-900">Soft Delete Period</label>
              <div className="relative max-w-sm">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none appearance-none">
                  <option>30 Days</option>
                  <option>60 Days</option>
                  <option>90 Days</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
              <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">Data recoverable during this period</span>
            </div>
          </div>
        </section>
      </div>
    </SettingsLayout>
  );
}
