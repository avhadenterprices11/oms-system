"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function CrmModuleSettings() {
  const stages = [
    { id: 1, name: "Lead", sub: "New unqualified lead", color: "bg-slate-400" },
    { id: 2, name: "Qualification", sub: "Assessing fit", color: "bg-blue-500" },
    { id: 3, name: "Proposal", sub: "Sent proposal", color: "bg-purple-500" },
    { id: 4, name: "Negotiation", sub: "Terms discussion", color: "bg-orange-500" },
    { id: 5, name: "Closed Won", sub: "Deal signed", color: "bg-emerald-500" },
    { id: 6, name: "Closed Lost", sub: "Deal lost", color: "bg-rose-500" },
  ];

  const sources = ["Website", "Referral", "LinkedIn", "Cold Call", "Event", "Partner", "Other"];

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">CRM Settings</h1>
        <p className="text-slate-500 text-sm font-medium">Configure pipeline stages, deal settings, and automation rules</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Pipeline Stages Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Pipeline Stages</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Drag to reorder stages in your sales pipeline</p>
          
          <div className="flex flex-col gap-3 mb-6">
            {stages.map((stage) => (
              <div key={stage.id} className="flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-4 hover:border-slate-200 transition-all cursor-grab active:cursor-grabbing group">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col gap-1 text-slate-300 group-hover:text-slate-400 transition-colors">
                    <div className="flex gap-0.5"><div className="size-1 bg-current rounded-full"/><div className="size-1 bg-current rounded-full"/></div>
                    <div className="flex gap-0.5"><div className="size-1 bg-current rounded-full"/><div className="size-1 bg-current rounded-full"/></div>
                    <div className="flex gap-0.5"><div className="size-1 bg-current rounded-full"/><div className="size-1 bg-current rounded-full"/></div>
                  </div>
                  <span className="text-[12px] font-bold text-slate-400 w-4">{stage.id}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`size-2 rounded-full ${stage.color} shadow-sm`} />
                  <div>
                    <h3 className="text-[14px] font-black text-slate-900 leading-none mb-1">{stage.name}</h3>
                    <p className="text-[11px] font-medium text-slate-400">{stage.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="text-[#5048e5] text-[13px] font-bold hover:underline flex items-center gap-1">
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            Add Stage
          </button>
        </section>

        {/* Deal Settings Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Deal Settings</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Configure defaults for deals and opportunities</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-slate-50 pb-8">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Default Currency</label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:border-indigo-600 transition-colors appearance-none">
                  <option>USD ($)</option>
                  <option>INR (₹)</option>
                  <option>EUR (€)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Deal Rot Days</label>
              <div className="flex flex-col gap-1.5">
                <input 
                  type="number" 
                  defaultValue={14}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:border-indigo-600 transition-colors"
                />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Flag deals inactive for this many days</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Probability Defaults (auto-calculate)</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Require Close Reason</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Lead Sources Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Lead Sources</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Manage sources used for lead tracking</p>
          
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {sources.map((source) => (
              <div key={source} className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-lg px-3 py-1.5 group">
                <span className="text-[12px] font-bold text-slate-600">{source}</span>
                <button className="text-slate-400 hover:text-rose-500 transition-colors">
                  <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            ))}
          </div>
          <button className="text-[#5048e5] text-[13px] font-bold hover:underline flex items-center gap-1">
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            Add Source
          </button>
        </section>

        {/* Automation Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Automation</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Configure automated CRM workflows</p>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-50 pb-6">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Auto-assign Leads to Sales Rep</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Send Follow-up Reminder</h3>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Reminder Interval</h3>
              <div className="relative w-48">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-medium outline-none focus:border-indigo-600 transition-colors appearance-none text-center">
                  <option>After 2 days</option>
                  <option>After 5 days</option>
                  <option>After 1 week</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
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
