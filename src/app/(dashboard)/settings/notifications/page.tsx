"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function NotificationsPage() {
  const [channels, setChannels] = useState({
    email: { critical: true, high: true, normal: false },
    push: { critical: true, high: true, normal: true },
    sms: { critical: true, high: false, normal: false },
  });

  const toggleChannel = (channel: keyof typeof channels, priority: 'critical' | 'high' | 'normal') => {
    setChannels(prev => ({
      ...prev,
      [channel]: {
        ...prev[channel],
        [priority]: !prev[channel][priority]
      }
    }));
  };

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Notifications</h1>
        <p className="text-slate-500 text-sm font-medium">Manage how and when you receive alerts</p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Global Preferences Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-10 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Global Preferences</h2>
          <p className="text-slate-400 text-xs font-medium mb-10">Set your preferred notification channels by priority</p>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-50">
                  <th className="text-left pb-6 text-[12px] font-black text-slate-400 uppercase tracking-wider">Channel</th>
                  <th className="text-center pb-6 text-[12px] font-black text-slate-400 uppercase tracking-wider">Critical</th>
                  <th className="text-center pb-6 text-[12px] font-black text-slate-400 uppercase tracking-wider">High</th>
                  <th className="text-center pb-6 text-[12px] font-black text-slate-400 uppercase tracking-wider">Normal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {(['email', 'push', 'sms'] as const).map((channel) => (
                  <tr key={channel} className="group">
                    <td className="py-6 text-[14px] font-bold text-slate-900 capitalize">{channel} Notifications</td>
                    {(['critical', 'high', 'normal'] as const).map((priority) => (
                      <td key={priority} className="py-6 text-center">
                        <button 
                          onClick={() => toggleChannel(channel, priority)}
                          className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${channels[channel][priority] ? 'bg-indigo-600' : 'bg-slate-200'}`}
                        >
                          <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${channels[channel][priority] ? 'translate-x-5' : 'translate-x-1'}`} />
                        </button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Module Specific Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-10 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Module Specific</h2>
          <p className="text-slate-400 text-xs font-medium mb-10">Choose which activities trigger a notification</p>
          
          <div className="space-y-6">
            {[
              { name: "CRM & Sales", desc: "New leads, deal status changes, and task reminders" },
              { name: "Projects & Tasks", desc: "Task assignments, comments, and deadline alerts" },
              { name: "Leave & Attendance", desc: "Approval requests and status updates" },
              { name: "Announcements", desc: "Company-wide news and emergency alerts" },
            ].map((module, idx) => (
              <div key={idx} className="flex items-center justify-between py-4 group">
                <div>
                  <h3 className="text-[14px] font-bold text-slate-900 mb-0.5">{module.name}</h3>
                  <p className="text-slate-400 text-[12px] font-medium">{module.desc}</p>
                </div>
                <button className="text-[12px] font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 px-4 py-2 rounded-xl transition-all">
                  Configure
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Digest Settings Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-10 shadow-sm mb-12">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Digest Settings</h2>
          <p className="text-slate-400 text-xs font-medium mb-10">Configure how notifications are batched and delivered</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Frequency</label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#5048e5] transition-colors appearance-none">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Twice Daily</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Digest Time</label>
              <input 
                type="text" 
                placeholder="09:00 AM"
                className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#5048e5] transition-colors"
              />
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-[14px] font-bold text-slate-900 mb-0.5">Quiet Hours</h3>
                <p className="text-slate-400 text-[12px] font-medium">Mute all notifications during these hours</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-slate-900">From</span>
                <input 
                  type="text" 
                  placeholder="10:00 PM"
                  className="w-[120px] bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#5048e5] transition-colors text-center"
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-slate-900">To</span>
                <input 
                  type="text" 
                  placeholder="07:00 AM"
                  className="w-[120px] bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#5048e5] transition-colors text-center"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-[#5048e5] px-10 py-3 rounded-xl text-[14px] font-bold text-white shadow-md hover:bg-[#4338ca] transition-all">
              Save Changes
            </button>
          </div>
        </section>
      </div>
    </SettingsLayout>
  );
}
