"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function DepartmentsPage() {
  const departments = [
    { name: "Engineering", head: "Ashwini Reddy", members: 8, costCenter: "CC-ENG-001", status: "Active" },
    { name: "Operations", head: "Lisa Chen", members: 5, costCenter: "CC-OPS-002", status: "Active" },
    { name: "Sales", head: "Tomas Garcia", members: 4, costCenter: "CC-SAL-003", status: "Active" },
    { name: "Marketing", head: "Sanya Patel", members: 6, costCenter: "CC-MKT-004", status: "Active" },
    { name: "HR", head: "Nina Okafor", members: 3, costCenter: "CC-HR-005", status: "Active" },
    { name: "Design", head: "Marcus Vane", members: 2, costCenter: "CC-DES-006", status: "Active" },
  ];

  const teams = [
    { name: "Frontend Team", dept: "Engineering", lead: "Ravi Kumar", members: 3 },
    { name: "Backend Team", dept: "Engineering", lead: "Jordan Lee", members: 4 },
    { name: "DevOps", dept: "Engineering", lead: "Marcus Vane", members: 2 },
  ];

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Departments & Teams</h1>
        <p className="text-slate-500 text-sm font-medium">Manage organizational structure</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Departments Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-[16px] font-bold text-slate-900 mb-1">Departments</h2>
              <p className="text-slate-400 text-xs font-medium">6 departments configured</p>
            </div>
            <button className="bg-[#5048e5] px-6 py-2.5 rounded-xl text-[13px] font-bold text-white shadow-md hover:bg-[#4338ca] transition-all flex items-center gap-2">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
              Add Department
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-50">
                  {["DEPARTMENT", "HEAD", "MEMBERS", "COST CENTER", "STATUS", "ACTIONS"].map((h) => (
                    <th key={h} className="text-left py-4 px-2 text-[10px] font-black text-slate-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {departments.map((dept, idx) => (
                  <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-2 text-[13px] font-bold text-slate-900">{dept.name}</td>
                    <td className="py-4 px-2 text-[13px] font-medium text-slate-600">{dept.head}</td>
                    <td className="py-4 px-2 text-[13px] font-medium text-slate-600">{dept.members}</td>
                    <td className="py-4 px-2 text-[13px] font-medium text-slate-500 font-mono tracking-tight">{dept.costCenter}</td>
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-2">
                        <div className="size-1.5 bg-emerald-500 rounded-full" />
                        <span className="text-[13px] font-bold text-slate-700">{dept.status}</span>
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-3">
                        <button className="text-[12px] font-bold text-[#5048e5] hover:underline">Edit</button>
                        <button className="text-[12px] font-bold text-rose-500 hover:underline">Archive</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Teams Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-[16px] font-bold text-slate-900 mb-1">Teams</h2>
              <p className="text-slate-400 text-xs font-medium">Sub-teams within departments</p>
            </div>
            <button className="text-[#5048e5] text-[13px] font-bold hover:underline flex items-center gap-1">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
              Create Team
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-50">
                  {["TEAM", "DEPARTMENT", "LEAD", "MEMBERS", "ACTIONS"].map((h) => (
                    <th key={h} className="text-left py-4 px-2 text-[10px] font-black text-slate-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {teams.map((team, idx) => (
                  <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-2 text-[13px] font-bold text-slate-900">{team.name}</td>
                    <td className="py-4 px-2 text-[13px] font-medium text-slate-600">{team.dept}</td>
                    <td className="py-4 px-2 text-[13px] font-medium text-slate-600">{team.lead}</td>
                    <td className="py-4 px-2 text-[13px] font-medium text-slate-600">{team.members}</td>
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-3">
                        <button className="text-[12px] font-bold text-[#5048e5] hover:underline">Edit</button>
                        <button className="text-[12px] font-bold text-rose-500 hover:underline">Delete</button>
                      </div>
                    </td>
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
