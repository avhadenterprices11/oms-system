"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function AnnouncementsModuleSettings() {
  const categories = ["General", "HR Update", "Policy Change", "Company News", "Social", "IT Alert"];

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Announcements Settings</h1>
        <p className="text-slate-500 text-sm font-medium">Configure posting permissions, notifications, and categories</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Posting Permissions Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Posting Permissions</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Control who can create and interact with announcements</p>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-50 pb-6">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Who Can Post</h3>
              <div className="relative w-64">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-medium outline-none appearance-none text-center">
                  <option>Admins & Managers</option>
                  <option>Admins Only</option>
                  <option>Everyone</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>

            {[
              { label: "Require Approval", active: false },
              { label: "Allow Comments", active: true },
              { label: "Allow Reactions", active: true },
            ].map((toggle) => (
              <div key={toggle.label} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-b-0 last:pb-0">
                <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">{toggle.label}</h3>
                <button className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${toggle.active ? "bg-indigo-600" : "bg-slate-200"}`}>
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${toggle.active ? "translate-x-6" : "translate-x-1"}`} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Notification Rules Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Notification Rules</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Configure how users are notified about new announcements</p>
          
          <div className="space-y-8">
            <div className="flex items-center justify-between py-2">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Notify All Users on New Announcement</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>

            <div className="flex flex-col gap-4 border-b border-slate-50 pb-8">
              <label className="text-[13px] font-bold text-slate-900">Channels</label>
              <div className="flex items-center gap-6">
                {[
                  { label: "In-App", checked: true },
                  { label: "Email", checked: true },
                  { label: "Push", checked: false },
                ].map((channel) => (
                  <label key={channel.label} className="flex items-center gap-2 cursor-pointer group">
                    <div className={`size-5 rounded border-2 flex items-center justify-center transition-all ${
                      channel.checked 
                      ? "bg-indigo-600 border-indigo-600" 
                      : "bg-white border-slate-200 group-hover:border-slate-300"
                    }`}>
                      {channel.checked && (
                        <svg className="size-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      )}
                    </div>
                    <span className="text-[13px] font-bold text-slate-600">{channel.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Pin Duration Default</h3>
              <div className="relative w-64">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-medium outline-none appearance-none text-center">
                  <option>7 Days</option>
                  <option>2 Weeks</option>
                  <option>Until Dismissed</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Categories</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Manage announcement categories for organization</p>
          
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {categories.map((cat) => (
              <div key={cat} className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-lg px-3 py-1.5 group">
                <span className="text-[12px] font-bold text-slate-600">{cat}</span>
                <button className="text-slate-300 hover:text-rose-500 transition-colors">
                  <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            ))}
          </div>
          <button className="text-[#5048e5] text-[13px] font-bold hover:underline flex items-center gap-1">
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            Add Category
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
