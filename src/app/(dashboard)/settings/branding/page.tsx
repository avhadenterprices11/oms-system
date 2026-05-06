"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function BrandingPage() {
  const [colors, setColors] = useState({
    primary: "#5048e5",
    secondary: "#0f172a",
    accent: "#10b981",
    sidebar: "#ffffff",
  });

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Branding & Whitelabel</h1>
        <p className="text-slate-500 text-sm font-medium">Customize the portal appearance for your organization</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Logo & Identity Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Logo & Identity</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Upload your organization logos and set the app name</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col gap-4">
              <label className="text-[13px] font-bold text-slate-900">Primary Logo</label>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-16 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center font-black text-indigo-600 text-[22px] tracking-tight">
                  Acme
                </div>
                <button className="h-16 w-28 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center gap-1 text-slate-400 hover:border-indigo-300 hover:text-indigo-500 transition-all">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4.5v15m7.5-7.5h-15" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                  <span className="text-[9px] font-bold uppercase tracking-wider">Replace</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-[13px] font-bold text-slate-900">Favicon (32×32)</label>
              <div className="flex items-center gap-4">
                <div className="size-10 bg-indigo-600 rounded-lg flex items-center justify-center font-black text-white text-[16px]">
                  A
                </div>
                <button className="h-10 flex-1 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center gap-2 text-slate-400 hover:border-indigo-300 hover:text-indigo-500 transition-all px-4">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4.5v15m7.5-7.5h-15" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                  <span className="text-[9px] font-bold uppercase tracking-wider">Upload</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 max-w-sm">
            <label className="text-[13px] font-bold text-slate-900">App Name</label>
            <input 
              type="text" 
              defaultValue="Acme Portal"
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:border-indigo-600 transition-colors"
            />
          </div>
        </section>

        {/* Colors Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Colors</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Define your brand colors across the portal</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-2">
            <div className="space-y-3">
              {[
                { id: 'primary', label: 'Primary Color', value: colors.primary },
                { id: 'secondary', label: 'Secondary Color', value: colors.secondary },
                { id: 'accent', label: 'Accent Color', value: colors.accent },
                { id: 'sidebar', label: 'Sidebar Background', value: colors.sidebar },
              ].map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="size-9 rounded-lg border border-slate-200 shadow-sm" style={{ backgroundColor: item.value }} />
                  <div className="flex-1 flex flex-col gap-0.5">
                    <label className="text-[11px] font-bold text-slate-500">{item.label}</label>
                    <input 
                      type="text" 
                      defaultValue={item.value}
                      className="w-full bg-slate-50 border border-slate-100 rounded-lg px-3 py-1 text-xs font-mono font-medium outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 rounded-[20px] p-6 border border-slate-100">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-4">Live Preview</span>
              <div className="flex gap-6">
                <div className="w-28 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden text-[10px] font-bold">
                  <div className="bg-indigo-50 text-indigo-600 px-3 py-1.5 border-l-2 border-indigo-600">Dashboard</div>
                  <div className="text-slate-400 px-3 py-1.5">People</div>
                  <div className="text-slate-400 px-3 py-1.5">Tasks</div>
                </div>
                <div className="flex flex-col gap-3 justify-center">
                  <button className="bg-[#5048e5] px-5 py-1.5 rounded-lg text-[10px] font-bold text-white shadow-sm">Primary Button</button>
                  <button className="bg-[#10b981] px-5 py-1.5 rounded-lg text-[10px] font-bold text-white shadow-sm">Accent Button</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Domain Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Custom Domain</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Configure a custom domain for your portal</p>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-end gap-6">
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-900">Domain</label>
                <input 
                  type="text" 
                  defaultValue="portal.acme.com"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-900">SSL Status</label>
                <div className="px-4 py-3 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center">
                  Active
                </div>
              </div>
            </div>

            <button className="text-[12px] font-bold text-[#5048e5] hover:underline text-left">
              Show DNS Instructions
            </button>

            <div className="bg-slate-900 rounded-2xl p-6 font-mono text-[11px] leading-relaxed text-slate-300">
              <div className="flex gap-4"><span className="text-slate-500 w-12">Type:</span> <span>CNAME</span></div>
              <div className="flex gap-4"><span className="text-slate-500 w-12">Name:</span> <span>portal</span></div>
              <div className="flex gap-4"><span className="text-slate-500 w-12">Value:</span> <span className="text-emerald-400">portal.oms-platform.com</span></div>
              <div className="flex gap-4"><span className="text-slate-500 w-12">TTL:</span> <span>3600</span></div>
            </div>
          </div>
        </section>

        {/* Email Templates Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Email Templates</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Configure outgoing email identity</p>
          
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-900">From Name</label>
                <input 
                  type="text" 
                  defaultValue="Acme Portal"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-900">From Email</label>
                <input 
                  type="email" 
                  defaultValue="noreply@acme.com"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Email Footer HTML</label>
              <textarea 
                rows={4}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-indigo-600 transition-colors resize-none"
                placeholder="Enter custom HTML for email footers..."
              />
            </div>
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
