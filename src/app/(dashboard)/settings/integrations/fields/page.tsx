"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function CustomFieldsPage() {
  const [activeTab, setActiveTab] = useState("Tasks");

  const tabs = ["People", "Projects", "Tasks", "CRM", "Events"];

  const fields = [
    { name: "Story Points", type: "Number", required: "No", options: "min:0 max:21", used: "156 tasks" },
    { name: "Sprint", type: "Dropdown", required: "No", options: "Sprint 23, Sprint 24, Sprint 25", used: "89 tasks" },
    { name: "Effort Level", type: "Dropdown", required: "No", options: "S, M, L, XL", used: "201 tasks" },
    { name: "Client Tag", type: "Text", required: "No", options: "—", used: "34 tasks" },
    { name: "Billable", type: "Boolean", required: "No", options: "—", used: "67 tasks" },
  ];

  const getTypeBadge = (type: string) => {
    const styles: Record<string, string> = {
      Number: "bg-slate-100 text-slate-600",
      Dropdown: "bg-indigo-50 text-indigo-600",
      Text: "bg-slate-100 text-slate-600",
      Boolean: "bg-slate-100 text-slate-600",
    };
    return (
      <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${styles[type] || 'bg-slate-100 text-slate-600'}`}>
        {type}
      </span>
    );
  };

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[32px] font-black text-slate-900 tracking-tight mb-8">Custom Fields Manager</h1>
        
        {/* Tabs */}
        <div className="flex items-center gap-12 border-b border-slate-100">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-[15px] font-bold transition-all relative ${
                activeTab === tab ? "text-[#5048e5]" : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#5048e5] rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        {/* Fields List Card */}
        <section className="bg-white border border-slate-200 rounded-[32px] p-10 shadow-sm">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-[18px] font-black text-slate-900 mb-1">Custom Fields for {activeTab}</h2>
              <div className="h-1 w-12 bg-indigo-100 rounded-full" />
            </div>
            <button className="bg-[#5048e5] px-8 py-3.5 rounded-2xl text-[14px] font-black text-white shadow-xl shadow-[#5048e5]/20 hover:bg-[#4338ca] transition-all flex items-center gap-2">
              <span className="text-lg leading-none">+</span> Add Custom Field
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th className="text-[11px] font-black text-slate-400 uppercase tracking-widest pb-6">FIELD NAME</th>
                  <th className="text-[11px] font-black text-slate-400 uppercase tracking-widest pb-6">TYPE</th>
                  <th className="text-[11px] font-black text-slate-400 uppercase tracking-widest pb-6">REQUIRED</th>
                  <th className="text-[11px] font-black text-slate-400 uppercase tracking-widest pb-6">OPTIONS</th>
                  <th className="text-[11px] font-black text-slate-400 uppercase tracking-widest pb-6">USED IN</th>
                  <th className="text-[11px] font-black text-slate-400 uppercase tracking-widest pb-6 text-right">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {fields.map((field, idx) => (
                  <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="py-5 font-bold text-slate-900 text-[14px]">{field.name}</td>
                    <td className="py-5">{getTypeBadge(field.type)}</td>
                    <td className="py-5 text-[14px] font-bold text-slate-600">{field.required}</td>
                    <td className="py-5 text-[14px] font-medium text-slate-400 max-w-[200px] truncate">{field.options}</td>
                    <td className="py-5 text-[14px] font-bold text-slate-500">{field.used}</td>
                    <td className="py-5 text-right">
                      <div className="flex items-center justify-end gap-2 text-[13px] font-black">
                        <button className="text-[#5048e5] hover:underline">Edit</button>
                        <span className="text-slate-200">/</span>
                        <button className="text-red-500 hover:underline">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Add Preview Card */}
        <section className="bg-slate-50/50 border border-slate-200 rounded-[32px] p-10">
          <h3 className="text-[16px] font-black text-slate-900 mb-8">Add Custom Field (Preview)</h3>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="space-y-3">
              <label className="text-[13px] font-black text-slate-900 ml-1 uppercase tracking-widest">Field Name</label>
              <input 
                type="text" 
                placeholder="e.g., Priority Score"
                className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 outline-none focus:border-[#5048e5] transition-all shadow-sm"
              />
            </div>
            <div className="space-y-3 relative">
              <label className="text-[13px] font-black text-slate-900 ml-1 uppercase tracking-widest">Type</label>
              <div className="relative group">
                <select className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 outline-none focus:border-[#5048e5] transition-all shadow-sm appearance-none cursor-pointer">
                  <option value="">Select Type</option>
                  <option value="text">Text</option>
                  <option value="number">Number</option>
                  <option value="dropdown">Dropdown</option>
                  <option value="boolean">Boolean</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-[#5048e5] transition-colors">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <label className="text-[13px] font-black text-slate-900 ml-1 uppercase tracking-widest">Required</label>
            <button className="relative w-12 h-6 bg-slate-200 rounded-full transition-colors group">
              <div className="absolute left-1 top-1 size-4 bg-white rounded-full shadow-sm transition-transform group-hover:scale-110" />
            </button>
          </div>

          <div className="space-y-3">
            <label className="text-[13px] font-black text-slate-900 ml-1 uppercase tracking-widest">Options</label>
            <textarea 
              rows={3}
              placeholder="For Dropdown: one option per line"
              className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 outline-none focus:border-[#5048e5] transition-all shadow-sm resize-none"
            />
          </div>
        </section>
      </div>
    </SettingsLayout>
  );
}
