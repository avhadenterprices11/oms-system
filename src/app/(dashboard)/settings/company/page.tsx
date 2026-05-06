"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function CompanyProfilePage() {
  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">General Settings</h1>
        <p className="text-slate-500 text-sm font-medium">Basic organization configuration</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Organization Details Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Organization Details</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Core information about your organization</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Organization Name</label>
              <input 
                type="text" 
                defaultValue="Acme Corp"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Legal Entity Name</label>
              <input 
                type="text" 
                defaultValue="Acme Corporation Pvt Ltd"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Industry</label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors appearance-none">
                  <option>Software / IT</option>
                  <option>Manufacturing</option>
                  <option>Finance</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Company Size</label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors appearance-none">
                  <option>50-100 Employees</option>
                  <option>100-500 Employees</option>
                  <option>500+ Employees</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Website</label>
              <input 
                type="text" 
                defaultValue="https://acme.com"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Support Email</label>
              <input 
                type="email" 
                defaultValue="support@acme.com"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Regional Settings Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Regional Settings</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Configure timezone, currency, and locale preferences</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              { label: "Default Timezone", options: ["(GMT+05:30) Mumbai, Kolkata, New Delhi", "(GMT+00:00) UTC"] },
              { label: "Default Currency", options: ["INR (₹)", "USD ($)", "EUR (€)"] },
              { label: "Fiscal Year Start", options: ["April", "January"] },
              { label: "Date Format", options: ["DD/MM/YYYY", "MM/DD/YYYY"] },
              { label: "Default Language", options: ["English (US)", "Hindi", "Marathi"] },
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
          </div>
        </section>

        {/* Bottom Actions */}
        <div className="flex justify-end gap-4 mt-4 mb-12">
          <button className="px-8 py-2.5 rounded-xl text-[14px] font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-all">
            Cancel
          </button>
          <button className="bg-[#5048e5] px-8 py-2.5 rounded-xl text-[14px] font-bold text-white shadow-md hover:bg-[#4338ca] transition-all">
            Save Changes
          </button>
        </div>
      </div>
    </SettingsLayout>
  );
}
