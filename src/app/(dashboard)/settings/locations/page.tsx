"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function LocationsPage() {
  const locations = [
    {
      name: "Mumbai HQ",
      isPrimary: true,
      address: "WeWork, BKC, Mumbai 400051, India",
      timezone: "GMT+5:30",
      employees: 18,
      calendar: "India — Maharashtra"
    },
    {
      name: "Bangalore Office",
      isPrimary: false,
      address: "HSR Layout, Bangalore 560102, India",
      timezone: "GMT+5:30",
      employees: 4,
      calendar: "India — Karnataka"
    },
    {
      name: "Remote — US",
      isPrimary: false,
      address: "Virtual",
      timezone: "GMT-5 (EST)",
      employees: 2,
      calendar: "USA — Federal"
    }
  ];

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Office Locations</h1>
          <p className="text-slate-500 text-sm font-medium">Manage physical and virtual office locations</p>
        </div>
        <button className="bg-[#5048e5] px-6 py-2.5 rounded-xl text-[14px] font-bold text-white shadow-md hover:bg-[#4338ca] transition-all flex items-center gap-2">
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
          Add Location
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {locations.map((loc, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm flex flex-col hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[18px] font-black text-slate-900 tracking-tight">{loc.name}</h2>
              {loc.isPrimary && (
                <span className="px-2.5 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-wider rounded-lg border border-indigo-100/50">
                  Primary
                </span>
              )}
            </div>

            <div className="space-y-6 flex-1">
              <div className="flex gap-4">
                <div className="size-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 shrink-0">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[1px] block mb-0.5">Address</label>
                  <p className="text-[13px] font-semibold text-slate-600 leading-relaxed">{loc.address}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="size-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 shrink-0">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[1px] block mb-0.5">Timezone</label>
                  <p className="text-[13px] font-semibold text-slate-600 leading-relaxed">{loc.timezone}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="size-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 shrink-0">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[1px] block mb-0.5">Employees</label>
                  <p className="text-[13px] font-semibold text-slate-600 leading-relaxed">{loc.employees}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="size-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 shrink-0">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[1px] block mb-0.5">Holiday Calendar</label>
                  <p className="text-[13px] font-semibold text-slate-600 leading-relaxed">{loc.calendar}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-6">
              <button className="text-[13px] font-bold text-[#5048e5] hover:underline">Edit</button>
              <button className="text-[13px] font-bold text-[#5048e5] hover:underline">Set Holidays</button>
            </div>
          </div>
        ))}
      </div>
    </SettingsLayout>
  );
}
