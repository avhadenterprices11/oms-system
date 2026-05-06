"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function MeetingsModuleSettings() {
  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Meetings Settings</h1>
        <p className="text-slate-500 text-sm font-medium">Configure Jitsi integration, recording, and meeting defaults</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Jitsi Configuration Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Jitsi Configuration</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Connect and configure your Jitsi Meet server</p>
          
          <div className="flex flex-col gap-6 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Jitsi Server URL</label>
              <input 
                type="text" 
                defaultValue="https://meet.acme.com"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 outline-none focus:border-indigo-600 transition-colors"
              />
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[13px] font-bold text-slate-900">Connection Status:</span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-lg text-[10px] font-black uppercase tracking-wider">Connected</span>
              <button className="px-4 py-1.5 rounded-lg border border-slate-200 text-[11px] font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">Test Connection</button>
            </div>

            <div className="flex items-center justify-between py-2 border-t border-slate-50 mt-2">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">JWT Authentication</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">JWT Secret</label>
              <input 
                type="password" 
                defaultValue="supersecretkey123"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 outline-none focus:border-indigo-600 transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Recording Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Recording</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Configure meeting recording and transcription</p>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-50 pb-6">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Auto-record All Meetings</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Recording Storage</h3>
              <div className="relative w-48">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-medium outline-none appearance-none text-center">
                  <option>S3 Bucket</option>
                  <option>Local Storage</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-b border-slate-50 pb-6">
              <label className="text-[13px] font-bold text-slate-900">Storage Path</label>
              <input 
                type="text" 
                defaultValue="recordings/meetings/"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 outline-none"
              />
            </div>

            <div className="flex items-center justify-between border-b border-slate-50 pb-6">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Retention Period</h3>
              <div className="relative w-48">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-medium outline-none appearance-none text-center">
                  <option>90 Days</option>
                  <option>6 Months</option>
                  <option>1 Year</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Transcription</h3>
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">Uses insanely-fast-whisper</span>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Transcription Language</h3>
              <div className="relative w-48">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-medium outline-none appearance-none text-center">
                  <option>English (US)</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Defaults Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Defaults</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Default settings for new meetings</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Default Duration</label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none appearance-none">
                  <option>30 Minutes</option>
                  <option>45 Minutes</option>
                  <option>1 Hour</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Buffer Time</label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none appearance-none">
                  <option>5 Minutes</option>
                  <option>10 Minutes</option>
                  <option>None</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-8">
            <label className="text-[13px] font-bold text-slate-900">Max Participants</label>
            <input 
              type="number" 
              defaultValue={50}
              className="w-full max-w-[400px] bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-900 outline-none focus:border-indigo-600 transition-colors"
            />
          </div>

          <div className="space-y-6">
            {[
              { label: "Waiting Room", active: true },
              { label: "Allow Screen Sharing", active: true },
              { label: "Enable Chat in Meeting", active: true },
            ].map((toggle) => (
              <div key={toggle.label} className="flex items-center justify-between border-t border-slate-50 pt-4 first:border-t-0 first:pt-0">
                <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">{toggle.label}</h3>
                <button className={`relative inline-flex h-6 w-11 items-center rounded-full ${toggle.active ? "bg-indigo-600" : "bg-slate-200"}`}>
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${toggle.active ? "translate-x-6" : "translate-x-1"}`} />
                </button>
              </div>
            ))}
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
