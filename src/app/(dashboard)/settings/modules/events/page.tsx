"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function EventsModuleSettings() {
  const eventTypes = [
    { name: "Conference", desc: "Multi-day, large audience", template: "Budget Template", hasTemplate: true },
    { name: "Workshop", desc: "Half/full day, interactive", template: "Budget Template", hasTemplate: true },
    { name: "Webinar", desc: "Virtual, presentation", template: "No Template", hasTemplate: false },
    { name: "Team Building", desc: "Internal, informal", template: "No Template", hasTemplate: false },
  ];

  const categories = [
    ["Speakers", "Sponsors"],
    ["Vendors", "Venue"],
    ["Catering", "A/V"],
    ["Marketing", "Logistics"],
  ];

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Events Settings</h1>
        <p className="text-slate-500 text-sm font-medium">Configure event types, categories, and budget defaults</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Event Types Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Event Types</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Define the types of events your organization hosts</p>
          
          <div className="flex flex-col gap-3 mb-6">
            {eventTypes.map((type, idx) => (
              <div key={idx} className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-slate-200 transition-all group">
                <div>
                  <h3 className="text-[14px] font-black text-slate-900 mb-0.5">{type.name}</h3>
                  <p className="text-[12px] font-medium text-slate-400 leading-none">{type.desc}</p>
                </div>
                <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider border ${
                  type.hasTemplate 
                  ? "bg-emerald-50 text-emerald-600 border-emerald-100" 
                  : "bg-slate-100 text-slate-400 border-slate-200"
                }`}>
                  {type.template}
                </span>
              </div>
            ))}
          </div>
          <button className="text-[#5048e5] text-[13px] font-bold hover:underline flex items-center gap-1">
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            Add Event Type
          </button>
        </section>

        {/* Default Categories Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Default Categories</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Standard categories applied to new events</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            {categories.flat().map((cat) => (
              <div key={cat} className="flex items-center justify-between bg-slate-50/50 border border-slate-100 rounded-xl px-4 py-2.5 group">
                <span className="text-[13px] font-bold text-slate-600">{cat}</span>
                <button className="text-slate-300 hover:text-rose-500 transition-colors">
                  <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            ))}
          </div>
          <button className="text-[#5048e5] text-[13px] font-bold hover:underline flex items-center gap-1">
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            Add Category
          </button>
        </section>

        {/* Budget Settings Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Budget Settings</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Configure budget defaults for events</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-slate-50 pb-8">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Default Currency</label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:border-indigo-600 transition-colors appearance-none">
                  <option>INR (₹)</option>
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Require Budget Approval Above</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">₹</span>
                <input 
                  type="text" 
                  defaultValue="50,000"
                  className="w-full bg-white border border-slate-200 rounded-xl pl-8 pr-4 py-2.5 text-sm font-bold text-slate-900 outline-none focus:border-indigo-600 transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between py-2">
            <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Auto-notify Finance Team</h3>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
            </button>
          </div>
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
