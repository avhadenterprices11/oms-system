"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function ChatModuleSettings() {
  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Chat Settings</h1>
        <p className="text-slate-500 text-sm font-medium">Configure Matrix server, channels, retention, and moderation</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Matrix Server Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Matrix Server</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Connect and configure your Matrix homeserver</p>
          
          <div className="flex flex-col gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Homeserver URL</label>
              <input 
                type="text" 
                defaultValue="https://matrix.acme.com"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 outline-none focus:border-indigo-600 transition-colors"
              />
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[13px] font-bold text-slate-900">Connection Status:</span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-lg text-[10px] font-black uppercase tracking-wider">Connected</span>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Admin User</label>
              <input 
                type="text" 
                defaultValue="@admin:acme.com"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 outline-none focus:border-indigo-600 transition-colors"
              />
            </div>

            <div className="pt-2">
              <button className="px-6 py-2 rounded-xl border border-slate-200 text-[12px] font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">Test Connection</button>
            </div>
          </div>
        </section>

        {/* Channel Settings Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Channel Settings</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Configure default channel behaviors</p>
          
          <div className="space-y-6">
            {[
              { label: "Auto-Create Project Channels", active: true },
              { label: "Auto-Create Department Channels", active: true },
            ].map((toggle) => (
              <div key={toggle.label} className="flex items-center justify-between py-2 border-b border-slate-50">
                <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">{toggle.label}</h3>
                <button className={`relative inline-flex h-6 w-11 items-center rounded-full ${toggle.active ? "bg-indigo-600" : "bg-slate-200"}`}>
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${toggle.active ? "translate-x-6" : "translate-x-1"}`} />
                </button>
              </div>
            ))}

            <div className="flex items-center justify-between py-2 border-b border-slate-50">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Default Channel Visibility</h3>
              <div className="relative w-48">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-medium outline-none appearance-none text-center">
                  <option>Public</option>
                  <option>Private</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-slate-50">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Allow Direct Messages</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-slate-50">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Allow File Sharing</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Max File Size</h3>
              <div className="flex items-center">
                <input 
                  type="number" 
                  defaultValue={25}
                  className="w-20 bg-white border border-slate-200 border-r-0 rounded-l-xl px-4 py-2 text-sm font-bold text-slate-900 outline-none text-center"
                />
                <span className="bg-slate-50 border border-slate-200 rounded-r-xl px-4 py-2 text-[11px] font-black text-slate-400 uppercase tracking-wider">MB</span>
              </div>
            </div>
          </div>
        </section>

        {/* Retention Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Retention</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Configure message and file retention policies</p>
          
          <div className="space-y-6">
            {[
              { label: "Message Retention", options: ["Forever", "1 Year", "90 Days"] },
              { label: "File Retention", options: ["Forever", "2 Years", "6 Months"] },
            ].map((field) => (
              <div key={field.label} className="flex items-center justify-between py-2 border-b border-slate-50">
                <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">{field.label}</h3>
                <div className="relative w-48">
                  <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-medium outline-none appearance-none text-center">
                    {field.options.map(opt => <option key={opt}>{opt}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between py-2 border-b border-slate-50">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Allow Message Deletion</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Deletion Window</h3>
              <div className="relative w-48">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-medium outline-none appearance-none text-center">
                  <option>10 Minutes</option>
                  <option>1 Hour</option>
                  <option>No Limit</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Moderation Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Moderation</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Content moderation and channel controls</p>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between py-2 border-b border-slate-50">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Profanity Filter</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
              </button>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-slate-50">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Require Channel Approval</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
              </button>
            </div>
            <div className="flex items-center justify-between py-2">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Max Channels Per User</h3>
              <input 
                type="number" 
                defaultValue={50}
                className="w-32 bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-bold text-slate-900 outline-none text-center"
              />
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
