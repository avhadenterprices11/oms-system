"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function TasksModuleSettings() {
  const [statuses, setStatuses] = useState(["To Do", "In Progress", "In Review", "Done"]);

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Projects & Tasks Settings</h1>
        <p className="text-slate-500 text-sm font-medium">Configure default behaviors for projects and task management</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Project Defaults Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Project Defaults</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Set organization-wide defaults for new projects</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Default View</label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:border-indigo-600 transition-colors appearance-none">
                  <option>Kanban Board</option>
                  <option>List View</option>
                  <option>Gantt Chart</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Auto-Archive Completed Projects After</label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:border-indigo-600 transition-colors appearance-none">
                  <option>30 Days</option>
                  <option>90 Days</option>
                  <option>Never</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-8">
            <label className="text-[13px] font-bold text-slate-900">Default Task Statuses</label>
            <div className="flex flex-wrap items-center gap-2">
              {statuses.map((status) => (
                <div key={status} className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-lg px-3 py-1.5 group">
                  <span className="text-[12px] font-bold text-slate-600">{status}</span>
                  <button className="text-slate-400 hover:text-rose-500 transition-colors">
                    <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              ))}
              <input 
                type="text" 
                placeholder="Add status..."
                className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-[12px] font-bold text-slate-600 outline-none focus:border-indigo-600 min-w-[120px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[13px] font-bold text-slate-900">Priority Levels</label>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-rose-50 text-rose-600 border border-rose-100 rounded-lg text-[11px] font-black uppercase tracking-wider">Critical</span>
              <span className="px-3 py-1 bg-orange-50 text-orange-600 border border-orange-100 rounded-lg text-[11px] font-black uppercase tracking-wider">High</span>
              <span className="px-3 py-1 bg-amber-50 text-amber-600 border-amber-100 rounded-lg text-[11px] font-black uppercase tracking-wider">Medium</span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-600 border-emerald-100 rounded-lg text-[11px] font-black uppercase tracking-wider">Low</span>
            </div>
          </div>
        </section>

        {/* Task Settings Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Task Settings</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Configure how tasks behave across the system</p>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between py-2 border-b border-slate-50">
              <h3 className="text-[14px] font-bold text-slate-900">Require Time Estimates</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
              </button>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-slate-50">
              <h3 className="text-[14px] font-bold text-slate-900">Allow Subtasks</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-slate-50">
              <div className="flex flex-col gap-1">
                <h3 className="text-[14px] font-bold text-slate-900">Max Task Depth</h3>
              </div>
              <div className="relative w-48">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-medium outline-none focus:border-indigo-600 transition-colors appearance-none text-center">
                  <option>3 levels</option>
                  <option>5 levels</option>
                  <option>Unlimited</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-slate-50">
              <h3 className="text-[14px] font-bold text-slate-900">Enable Task Dependencies</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <h3 className="text-[14px] font-bold text-slate-900">Default Assignee</h3>
              <div className="relative w-48">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-medium outline-none focus:border-indigo-600 transition-colors appearance-none text-center">
                  <option>Project Lead</option>
                  <option>Me (Default)</option>
                  <option>None</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Fields Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Custom Fields</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Define additional fields for projects and tasks</p>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-50">
                  {["FIELD NAME", "TYPE", "REQUIRED", "APPLIES TO", "ACTIONS"].map((h) => (
                    <th key={h} className="text-left py-4 px-2 text-[10px] font-black text-slate-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-slate-600">
                {[
                  { name: "Story Points", type: "Number", req: "No", apply: "Tasks" },
                  { name: "Sprint", type: "Dropdown", req: "No", apply: "Tasks" },
                  { name: "Client", type: "Lookup", req: "No", apply: "Projects" },
                ].map((field, idx) => (
                  <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-2 text-[13px] font-bold text-slate-900">{field.name}</td>
                    <td className="py-4 px-2 text-[13px] font-medium">{field.type}</td>
                    <td className="py-4 px-2 text-[13px] font-medium">{field.req}</td>
                    <td className="py-4 px-2 text-[13px] font-medium">{field.apply}</td>
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
          <button className="text-[#5048e5] text-[13px] font-bold hover:underline flex items-center gap-1">
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            Add Custom Field
          </button>
        </section>

        {/* Save Bar */}
        <div className="flex justify-end mt-4 mb-12">
          <button className="bg-[#5048e5] px-10 py-3 rounded-xl text-[14px] font-bold text-white shadow-md hover:bg-[#4338ca] transition-all">
            Save Changes
          </button>
        </div>
      </div>
    </SettingsLayout>
  );
}
