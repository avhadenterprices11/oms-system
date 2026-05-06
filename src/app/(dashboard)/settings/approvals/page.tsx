"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function ApprovalsPage() {
  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Approval Workflows</h1>
        <p className="text-slate-500 text-sm font-medium">Manage approval chains and delegation</p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Leave Approvals Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Leave Approvals</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Set up your hierarchy for time-off requests</p>
          
          <div className="flex flex-col gap-6 max-w-2xl mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Primary Approver</label>
              <input 
                type="text" 
                defaultValue="You (Ashwini Reddy)"
                disabled
                className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium text-slate-500"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Backup Approver</label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors appearance-none">
                  <option>Select a team member</option>
                  <option>Jordan Lee</option>
                  <option>Ravi Kumar</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 max-w-[240px]">
              <label className="text-[13px] font-bold text-slate-900">Auto-Approve Requests Under</label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors appearance-none text-center">
                  <option>1 Day</option>
                  <option>2 Days</option>
                  <option>None</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between py-2">
            <h3 className="text-[14px] font-bold text-slate-900">Require Reason for Leave {">"} 3 days</h3>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
            </button>
          </div>
        </section>

        {/* Task Approvals Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Task Approvals</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Define verification rules for task completions</p>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-50 pb-6">
              <h3 className="text-[14px] font-bold text-slate-900">Require Approval for Task Status → Done</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>

            <div className="flex items-center justify-between border-b border-slate-50 pb-6">
              <h3 className="text-[14px] font-bold text-slate-900">Require Approval for Time Logging {">"} 8 hrs</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
              </button>
            </div>

            <div className="flex flex-col gap-2 max-w-[240px]">
              <label className="text-[13px] font-bold text-slate-900">Approval Timeout</label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors appearance-none text-center">
                  <option>24 Hours</option>
                  <option>48 Hours</option>
                  <option>72 Hours</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delegation Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm mb-12">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Delegation</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Automatically forward approvals when unavailable</p>
          
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-slate-50 pb-6">
              <h3 className="text-[14px] font-bold text-slate-900">Delegate Approvals When OOO</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>

            <div className="flex flex-col gap-2 max-w-md">
              <label className="text-[13px] font-bold text-slate-900">Delegate To</label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors appearance-none">
                  <option>Select a delegate</option>
                  <option>Marcus Vane</option>
                  <option>Lisa Chen</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SettingsLayout>
  );
}
