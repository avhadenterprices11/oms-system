"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function CalendarAvailabilityPage() {
  const [workingHours, setWorkingHours] = useState({
    Mon: { active: true, from: "09:00 AM", to: "05:00 PM" },
    Tue: { active: true, from: "09:00 AM", to: "05:00 PM" },
    Wed: { active: true, from: "09:00 AM", to: "05:00 PM" },
    Thu: { active: true, from: "09:00 AM", to: "05:00 PM" },
    Fri: { active: true, from: "09:00 AM", to: "05:00 PM" },
    Sat: { active: false, from: "", to: "" },
    Sun: { active: false, from: "", to: "" },
  });

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Calendar & Availability</h1>
        <p className="text-slate-500 text-sm font-medium">Set your working hours, out-of-office, and meeting preferences</p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Working Hours Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Working Hours</h2>
          <p className="text-slate-400 text-xs font-medium mb-10">Define your regular working schedule</p>
          
          <div className="space-y-4 mb-10 max-w-2xl">
            {(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const).map((day) => (
              <div key={day} className="flex items-center gap-8">
                <span className="w-10 text-[13px] font-bold text-slate-500">{day}</span>
                <button 
                  onClick={() => setWorkingHours(prev => ({ ...prev, [day]: { ...prev[day], active: !prev[day].active } }))}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${workingHours[day].active ? 'bg-indigo-600' : 'bg-slate-200'}`}
                >
                  <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${workingHours[day].active ? 'translate-x-5' : 'translate-x-1'}`} />
                </button>
                <div className="flex items-center gap-3">
                  <input 
                    type="text" 
                    placeholder="09:00 AM"
                    defaultValue={workingHours[day].from}
                    disabled={!workingHours[day].active}
                    className="w-[120px] bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:border-indigo-600 transition-colors text-center disabled:opacity-40"
                  />
                  <span className="text-slate-400 text-xs font-medium uppercase tracking-widest">to</span>
                  <input 
                    type="text" 
                    placeholder="05:00 PM"
                    defaultValue={workingHours[day].to}
                    disabled={!workingHours[day].active}
                    className="w-[120px] bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:border-indigo-600 transition-colors text-center disabled:opacity-40"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <button className="bg-[#5048e5] px-8 py-2.5 rounded-xl text-[14px] font-bold text-white shadow-md hover:bg-[#4338ca] transition-all">
              Save Changes
            </button>
          </div>
        </section>

        {/* Out of Office Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Out of Office</h2>
          <p className="text-slate-400 text-xs font-medium mb-10">Set up an out-of-office notice and delegate</p>
          
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-[14px] font-bold text-slate-900">Enable Out of Office</h3>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Start Date</label>
              <input type="date" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">End Date</label>
              <input type="date" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors" />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-8">
            <label className="text-[13px] font-bold text-slate-900">Auto-reply Message</label>
            <textarea 
              placeholder="I am currently out of office and will return on..."
              rows={4}
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors resize-none"
            />
          </div>

          <div className="flex flex-col gap-2 max-w-md">
            <label className="text-[13px] font-bold text-slate-900">Delegate</label>
            <div className="relative">
              <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors appearance-none">
                <option>Select a team member</option>
                <option>Ashwini Reddy</option>
                <option>Jordan Lee</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
              </div>
            </div>
          </div>
        </section>

        {/* Meeting Preferences Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm mb-12">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Meeting Preferences</h2>
          <p className="text-slate-400 text-xs font-medium mb-10">Configure default meeting settings</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8">
            {[
              { label: "Default Meeting Duration", options: ["30 Minutes", "45 Minutes", "60 Minutes"] },
              { label: "Buffer Between Meetings", options: ["None", "5 Minutes", "10 Minutes", "15 Minutes"] },
              { label: "Preferred Meeting Tool", options: ["Zoom", "Google Meet", "Microsoft Teams"] },
            ].map((field, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-900">{field.label}</label>
                <div className="relative">
                  <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors appearance-none">
                    {field.options.map((opt, i) => <option key={i}>{opt}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between mt-6 px-1">
              <span className="text-[13px] font-bold text-slate-900">Allow Scheduling Outside Working Hours</span>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-[#5048e5] px-8 py-2.5 rounded-xl text-[14px] font-bold text-white shadow-md hover:bg-[#4338ca] transition-all">
              Save Changes
            </button>
          </div>
        </section>
      </div>
    </SettingsLayout>
  );
}
