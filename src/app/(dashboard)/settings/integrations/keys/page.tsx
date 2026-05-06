"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function ApiKeysPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const apiKeys = [
    { name: "Production API", key: "sk_live_*****Kx4m", scopes: "read, write", created: "Jan 10, 2026", used: "2 min ago", status: "Active", action: "Revoke" },
    { name: "Staging API", key: "sk_test_*****Bz7n", scopes: "read, write", created: "Feb 5, 2026", used: "3 hrs ago", status: "Active", action: "Revoke" },
    { name: "Mobile App", key: "sk_live_*****Qw2p", scopes: "read", created: "Mar 1, 2026", used: "1 day ago", status: "Active", action: "Revoke" },
    { name: "Old Integration", key: "sk_live_*****Hy9k", scopes: "read, write, admin", created: "Nov 2, 2025", used: "45 days ago", status: "Inactive", action: "Delete" },
  ];

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">API Keys & Tokens</h1>
      </div>

      <div className="flex flex-col gap-6 relative">
        {/* API Keys Table Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[16px] font-bold text-slate-900">API Keys</h2>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#5048e5] px-6 py-2 rounded-xl text-[13px] font-bold text-white shadow-md hover:bg-[#4338ca] transition-all flex items-center gap-2"
            >
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M12 4.5v15m7.5-7.5h-15" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Generate New Key
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-50">
                  {["NAME", "KEY", "SCOPES", "CREATED", "LAST USED", "STATUS", "ACTIONS"].map((h) => (
                    <th key={h} className="text-left py-4 px-2 text-[10px] font-black text-slate-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {apiKeys.map((key, idx) => (
                  <tr key={idx} className="group hover:bg-slate-50/30 transition-colors">
                    <td className="py-5 px-2 text-[14px] font-bold text-slate-700 whitespace-nowrap">{key.name}</td>
                    <td className="py-5 px-2 text-[12px] font-bold text-slate-400 font-mono tracking-tight whitespace-nowrap">{key.key}</td>
                    <td className="py-5 px-2 text-[13px] font-medium text-slate-500 whitespace-nowrap">{key.scopes}</td>
                    <td className="py-5 px-2 text-[13px] font-medium text-slate-400 whitespace-nowrap">{key.created}</td>
                    <td className="py-5 px-2 text-[13px] font-medium text-slate-400 whitespace-nowrap">{key.used}</td>
                    <td className="py-5 px-2">
                      <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider border ${
                        key.status === "Active" 
                        ? "bg-emerald-50 text-emerald-600 border-emerald-100" 
                        : "bg-slate-100 text-slate-400 border-slate-200"
                      }`}>
                        {key.status}
                      </span>
                    </td>
                    <td className="py-5 px-2">
                      <button className="text-[12px] font-black uppercase tracking-wider hover:underline text-rose-500">
                        {key.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Rate Limits Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-8">Rate Limits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8 border-b border-slate-50 pb-8">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Default Rate Limit</label>
              <div className="flex items-center">
                <input 
                  type="number" 
                  defaultValue={1000}
                  className="w-full bg-white border border-slate-200 border-r-0 rounded-l-xl px-4 py-2.5 text-sm font-bold text-slate-900 outline-none"
                />
                <span className="bg-slate-50 border border-slate-200 rounded-r-xl px-4 py-2.5 text-[11px] font-black text-slate-400 uppercase tracking-wider whitespace-nowrap">requests/min</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Burst Limit</label>
              <div className="flex items-center">
                <input 
                  type="number" 
                  defaultValue={100}
                  className="w-full bg-white border border-slate-200 border-r-0 rounded-l-xl px-4 py-2.5 text-sm font-bold text-slate-900 outline-none"
                />
                <span className="bg-slate-50 border border-slate-200 rounded-r-xl px-4 py-2.5 text-[11px] font-black text-slate-400 uppercase tracking-wider whitespace-nowrap">requests/sec</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between py-2">
            <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Rate Limit by Key</h3>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
            </button>
          </div>
        </section>

        {/* Personal Access Tokens Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm mb-12">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Personal Access Tokens</h2>
          <p className="text-slate-400 text-xs font-medium mb-10">Users can generate PATs from their account settings.</p>
          
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between py-2 border-b border-slate-50 pb-8">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Allow PATs</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-900">PAT Expiry</label>
                <div className="relative">
                  <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none appearance-none">
                    <option>30 Days</option>
                    <option>90 Days</option>
                    <option>No Expiry</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-900">Max PATs Per User</label>
                <input 
                  type="number" 
                  defaultValue={5}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-900 outline-none focus:border-indigo-600 transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Generate API Key Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-[32px] w-full max-w-[540px] p-10 shadow-2xl border border-white animate-in zoom-in-95 duration-300">
              <div className="mb-8">
                <h2 className="text-[24px] font-black text-slate-900 tracking-tight mb-1">Generate API Key</h2>
                <p className="text-slate-400 text-sm font-medium">Create a new API key for integrations.</p>
              </div>

              <div className="flex flex-col gap-6">
                {/* Key Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-slate-900">Key Name <span className="text-rose-500">*</span></label>
                  <input 
                    type="text" 
                    defaultValue="Production API"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#5048e5] transition-all"
                  />
                </div>

                {/* Scopes */}
                <div className="flex flex-col gap-3">
                  <label className="text-[13px] font-bold text-slate-900">Scopes</label>
                  <div className="flex items-center gap-6">
                    {[
                      { label: "Read", checked: true },
                      { label: "Write", checked: true },
                      { label: "Admin", checked: false },
                      { label: "Delete", checked: false },
                    ].map((scope) => (
                      <label key={scope.label} className="flex items-center gap-2 cursor-pointer group">
                        <div className={`size-5 rounded border-2 flex items-center justify-center transition-all ${
                          scope.checked 
                          ? "bg-indigo-600 border-indigo-600" 
                          : "bg-white border-slate-200 group-hover:border-slate-300"
                        }`}>
                          {scope.checked && (
                            <svg className="size-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          )}
                        </div>
                        <span className="text-[13px] font-bold text-slate-600">{scope.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Expiry */}
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-bold text-slate-900">Expiry</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none appearance-none cursor-pointer">
                      <option>90 Days</option>
                      <option>180 Days</option>
                      <option>Never</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                    </div>
                  </div>
                </div>

                {/* Generated Key */}
                <div className="bg-[#0f172a] rounded-2xl p-5 mt-2 flex items-center justify-between border border-slate-800 shadow-inner">
                  <code className="text-[#94a3b8] font-mono text-[13px] font-semibold tracking-tight">sk_live_aBcDeFgHiJkLmNoPqRsT</code>
                  <button className="bg-slate-800 text-white px-4 py-1.5 rounded-lg text-[11px] font-bold hover:bg-slate-700 transition-all border border-slate-700">
                    Copy
                  </button>
                </div>

                {/* Warning */}
                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex items-start gap-3">
                  <div className="text-amber-500 mt-0.5">
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <p className="text-amber-700 text-[12px] font-bold leading-relaxed">
                    Copy this key now. You won't be able to see it again.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex justify-end mt-4">
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="bg-[#5048e5] px-10 py-3 rounded-xl text-[14px] font-bold text-white shadow-lg hover:bg-[#4338ca] transition-all transform active:scale-95"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </SettingsLayout>
  );
}
