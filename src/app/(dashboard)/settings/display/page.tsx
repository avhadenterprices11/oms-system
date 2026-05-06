"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function DisplayLanguagePage() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('light');

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Display & Language</h1>
        <p className="text-slate-500 text-sm font-medium">Customize the look and regional preferences of your portal</p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Appearance Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Appearance</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Choose your preferred theme</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Light Theme */}
            <button 
              onClick={() => setTheme('light')}
              className={`flex flex-col items-center gap-4 p-4 rounded-[20px] border-2 transition-all ${theme === 'light' ? 'border-indigo-600 bg-indigo-50/30' : 'border-slate-100 bg-white hover:border-slate-200'}`}
            >
              <div className="w-full aspect-[16/9] bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-sm">
                <div className="size-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-500">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
                  </svg>
                </div>
              </div>
              <span className="text-[14px] font-bold text-slate-900">Light</span>
            </button>

            {/* Dark Theme */}
            <button 
              onClick={() => setTheme('dark')}
              className={`flex flex-col items-center gap-4 p-6 rounded-[20px] border-2 transition-all ${theme === 'dark' ? 'border-indigo-600 bg-indigo-50/30' : 'border-slate-100 bg-white hover:border-slate-200'}`}
            >
              <div className="w-full aspect-[16/9] bg-[#1e293b] rounded-xl flex items-center justify-center shadow-sm">
                <div className="size-10 bg-slate-700/50 rounded-full flex items-center justify-center text-slate-300">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
              </div>
              <span className="text-[14px] font-bold text-slate-900">Dark</span>
            </button>

            {/* System Theme */}
            <button 
              onClick={() => setTheme('system')}
              className={`flex flex-col items-center gap-4 p-6 rounded-[20px] border-2 transition-all ${theme === 'system' ? 'border-indigo-600 bg-indigo-50/30' : 'border-slate-100 bg-white hover:border-slate-200'}`}
            >
              <div className="w-full aspect-[16/9] bg-white overflow-hidden rounded-xl border border-slate-100 shadow-sm relative">
                <div className="absolute inset-0 bg-[#1e293b] [clip-path:polygon(100%_0,0%_100%,100%_100%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-slate-400 border border-slate-200/50">
                    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <span className="text-[14px] font-bold text-slate-900">System</span>
            </button>
          </div>

          <div className="flex justify-end">
            <button className="bg-[#5048e5] px-8 py-2.5 rounded-xl text-[14px] font-bold text-white shadow-md hover:bg-[#4338ca] transition-all">
              Save Changes
            </button>
          </div>
        </section>

        {/* Language & Region Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Language & Region</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Set your language, date, time, and regional formatting preferences</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-8">
            {[
              { label: "Language", options: ["English (US)", "English (UK)", "Hindi", "Marathi"] },
              { label: "Date Format", options: ["DD/MM/YYYY", "MM/DD/YYYY", "YYYY-MM-DD"] },
              { label: "Time Format", options: ["12-hour (AM/PM)", "24-hour"] },
              { label: "Timezone", options: ["(GMT+05:30) Mumbai, Kolkata, New Delhi", "(GMT+00:00) UTC"] },
              { label: "First Day of Week", options: ["Monday", "Sunday"] },
              { label: "Number Format", options: ["1,234,567.89", "1.234.567,89"] },
            ].map((field, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-900">{field.label}</label>
                <div className="relative">
                  <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#5048e5] transition-colors appearance-none">
                    {field.options.map((opt, i) => <option key={i}>{opt}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                  </div>
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

        {/* Default Views Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm mb-8">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Default Views</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Set your preferred default views for modules</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-8">
            {[
              { label: "Landing Page", options: ["Dashboard", "My Tasks", "CRM Overview"] },
              { label: "Default Task View", options: ["List View", "Board View", "Calendar View"] },
              { label: "Default Project View", options: ["Grid View", "List View", "Timeline View"] },
              { label: "Items Per Page", options: ["10", "25", "50", "100"] },
            ].map((field, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-900">{field.label}</label>
                <div className="relative">
                  <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#5048e5] transition-colors appearance-none">
                    {field.options.map((opt, i) => <option key={i}>{opt}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                  </div>
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
      </div>
    </SettingsLayout>
  );
}
