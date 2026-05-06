"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function AuthSettingsPage() {
  const [isTestModalOpen, setIsTestModalOpen] = useState(false);

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Authentication & SSO</h1>
      </div>

      <div className="flex flex-col gap-6 relative">
        {/* Password Policy Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-8">Password Policy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8 border-b border-slate-50 pb-8">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Minimum Length</label>
              <input 
                type="number" 
                defaultValue={12}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-900 outline-none focus:border-indigo-600 transition-colors"
              />
            </div>
            <div className="flex items-center justify-between py-2 mt-auto">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Require Uppercase</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Require Number</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>
            <div className="flex items-center justify-between py-2">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Require Special Character</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Password Expiry</label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none appearance-none">
                  <option>90 Days</option>
                  <option>180 Days</option>
                  <option>Never</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Prevent Reuse</label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none appearance-none">
                  <option>5 previous passwords</option>
                  <option>10 previous passwords</option>
                  <option>No reuse allowed</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-Factor Authentication Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-10">Multi-Factor Authentication</h2>
          
          <div className="flex items-center justify-between py-2 border-b border-slate-50 pb-8 mb-8">
            <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Enforce MFA for All Users</h3>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
            </button>
          </div>

          <div className="flex flex-col gap-4 mb-8">
            <label className="text-[13px] font-bold text-slate-900">Allowed Methods</label>
            <div className="flex flex-col gap-3">
              {[
                { label: "Authenticator App", checked: true },
                { label: "SMS", checked: true },
                { label: "Email", checked: false },
              ].map((method) => (
                <label key={method.label} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`size-5 rounded border-2 flex items-center justify-center transition-all ${
                    method.checked 
                    ? "bg-indigo-600 border-indigo-600" 
                    : "bg-white border-slate-200 group-hover:border-slate-300"
                  }`}>
                    {method.checked && (
                      <svg className="size-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    )}
                  </div>
                  <span className="text-[13px] font-bold text-slate-600">{method.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 max-w-md">
            <label className="text-[13px] font-bold text-slate-900">Grace Period for New Users</label>
            <div className="relative">
              <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none appearance-none">
                <option>3 Days</option>
                <option>7 Days</option>
                <option>None</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
              </div>
            </div>
          </div>
        </section>

        {/* SSO / SAML Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm mb-12">
          <h2 className="text-[16px] font-bold text-slate-900 mb-8">SSO / SAML</h2>
          
          <div className="flex items-center justify-between py-2 border-b border-slate-50 pb-8 mb-8">
            <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">SSO Enabled</h3>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
            </button>
          </div>

          <div className="space-y-8 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-900">Provider</label>
                <div className="relative">
                  <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none appearance-none">
                    <option>Select Provider</option>
                    <option>Okta</option>
                    <option>Azure AD</option>
                    <option>Google Workspace</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-900">Tenant ID</label>
                <input 
                  type="text" 
                  defaultValue="acme-corp-xxxxxxxx"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 outline-none focus:border-indigo-600 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-900">Client ID</label>
                <input 
                  type="text" 
                  defaultValue="app-id-xxxxx"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 outline-none focus:border-indigo-600 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-bold text-slate-900">SAML Metadata URL</label>
                <input 
                  type="text" 
                  defaultValue="https://login.microsoftonline.com/acme-corp/federationm"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 outline-none focus:border-indigo-600 transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <button 
              onClick={() => setIsTestModalOpen(true)}
              className="bg-white border border-slate-200 px-6 py-3 rounded-xl text-[14px] font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
            >
              Test SSO Connection
            </button>
            <button className="text-[#5048e5] text-[14px] font-bold hover:underline transition-all">
              Download SP Metadata
            </button>
          </div>
        </section>

        {/* SSO Connection Test Modal */}
        {isTestModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-[32px] w-full max-w-[500px] p-10 shadow-2xl border border-white animate-in zoom-in-95 duration-300">
              <div className="mb-10">
                <h2 className="text-[22px] font-black text-slate-900 tracking-tight mb-8">SSO Connection Test</h2>
                
                <div className="space-y-6">
                  {[
                    "Connecting to Azure AD",
                    "Authenticating",
                    "Fetching user attributes",
                    "Mapping roles",
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="size-6 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500">
                        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span className="text-[14px] font-bold text-slate-600">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 mb-10">
                <div className="flex items-center gap-3 text-emerald-600">
                  <span className="text-[22px] font-black tracking-tight">Connection Successful</span>
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>

              <div className="bg-slate-50 rounded-[20px] p-6 mb-8 border border-slate-100">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-medium text-slate-400">Provider</span>
                    <span className="text-[13px] font-bold text-slate-700">Azure AD</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-medium text-slate-400">Users synced</span>
                    <span className="text-[13px] font-bold text-slate-700">24</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-medium text-slate-400">Groups found</span>
                    <span className="text-[13px] font-bold text-slate-700">6</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button 
                  onClick={() => setIsTestModalOpen(false)}
                  className="bg-[#5048e5] px-10 py-3 rounded-xl text-[14px] font-bold text-white shadow-lg hover:bg-[#4338ca] transition-all transform active:scale-95"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </SettingsLayout>
  );
}
