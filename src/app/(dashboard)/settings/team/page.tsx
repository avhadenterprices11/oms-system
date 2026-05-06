"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function TeamDefaultsPage() {
  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Team Defaults</h1>
        <p className="text-slate-500 text-sm font-medium">Configure default settings for your team</p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Capacity & Workload Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Capacity & Workload</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Manage team bandwidth and performance triggers</p>
          
          <div className="flex flex-col gap-4 mb-6 max-w-sm">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Default Capacity Limit</label>
              <input 
                type="number" 
                defaultValue="100"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:border-indigo-600 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Overload Threshold %</label>
              <input 
                type="number" 
                defaultValue="85"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:border-indigo-600 transition-colors"
              />
              <p className="text-slate-400 text-[11px] font-medium">Triggers alert when member exceeds this</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-[14px] font-bold text-slate-900">Auto-Balance New Tasks</h3>
              <p className="text-slate-400 text-[12px] font-medium">Distribute tasks to least-loaded member</p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
            </button>
          </div>

          <div className="flex justify-end">
            <button className="bg-[#5048e5] px-8 py-2.5 rounded-xl text-[14px] font-bold text-white shadow-md hover:bg-[#4338ca] transition-all">
              Save Changes
            </button>
          </div>
        </section>

        {/* Task Assignment Rules Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Task Assignment Rules</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Define global assignment behaviors</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Default Priority</label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors appearance-none">
                  <option>Medium</option>
                  <option>High</option>
                  <option>Low</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Default Task View</label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors appearance-none">
                  <option>List View</option>
                  <option>Board View</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-between">
              <h3 className="text-[14px] font-bold text-slate-900">Auto-assign on Project Join</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[14px] font-bold text-slate-900">Require Time Estimates</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
              </button>
            </div>
          </div>
        </section>

        {/* Team Hours Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm mb-12">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Team Hours</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Standardize work timing for the entire team</p>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 max-w-md">
              <label className="text-[13px] font-bold text-slate-900">Team Timezone</label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors appearance-none">
                  <option>(GMT+05:30) Mumbai, Kolkata, New Delhi</option>
                  <option>(GMT+00:00) UTC</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Standard Working Hours</label>
              <div className="flex items-center gap-4">
                <input 
                  type="text" 
                  placeholder="09:00 AM"
                  className="w-[140px] bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:border-indigo-600 transition-colors text-center"
                />
                <span className="text-slate-400 text-xs font-medium uppercase tracking-widest">to</span>
                <input 
                  type="text" 
                  placeholder="06:00 PM"
                  className="w-[140px] bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:border-indigo-600 transition-colors text-center"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-[14px] font-bold text-slate-900">Include Weekends</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
              </button>
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <button className="bg-[#5048e5] px-8 py-2.5 rounded-xl text-[14px] font-bold text-white shadow-md hover:bg-[#4338ca] transition-all">
              Save Changes
            </button>
          </div>
        </section>
      </div>
    </SettingsLayout>
  );
}
