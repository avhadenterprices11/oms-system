"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function DocumentsModuleSettings() {
  const allowedTypes = ["PDF", "DOC", "DOCX", "XLS", "XLSX", "PPT", "PPTX", "PNG", "JPG", "ZIP"];

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Document Settings</h1>
        <p className="text-slate-500 text-sm font-medium">Configure storage, file types, versioning, and e-signatures</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Storage Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Storage</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Manage document storage provider and quotas</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-slate-50 pb-8">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Storage Provider</label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none appearance-none">
                  <option>AWS S3</option>
                  <option>Google Cloud Storage</option>
                  <option>Azure Blob</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Storage Quota Per User</label>
              <div className="flex items-center">
                <input 
                  type="number" 
                  defaultValue={5}
                  className="w-full bg-white border border-slate-200 border-r-0 rounded-l-xl px-4 py-2.5 text-sm font-bold text-slate-900 outline-none"
                />
                <span className="bg-slate-50 border border-slate-200 rounded-r-xl px-4 py-2.5 text-[11px] font-black text-slate-400 uppercase tracking-wider">GB</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Organization Total Quota</label>
              <div className="flex items-center max-w-sm">
                <input 
                  type="number" 
                  defaultValue={500}
                  className="w-full bg-white border border-slate-200 border-r-0 rounded-l-xl px-4 py-2.5 text-sm font-bold text-slate-900 outline-none"
                />
                <span className="bg-slate-50 border border-slate-200 rounded-r-xl px-4 py-2.5 text-[11px] font-black text-slate-400 uppercase tracking-wider">GB</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-bold text-slate-900">Current Usage:</span>
                <span className="text-[12px] font-bold text-slate-400">127 GB of 500 GB</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden flex">
                <div className="h-full bg-indigo-600 w-[25.4%]" />
              </div>
            </div>
          </div>
        </section>

        {/* File Settings Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">File Settings</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Configure allowed file types and versioning</p>
          
          <div className="space-y-8">
            <div className="flex flex-col gap-3">
              <label className="text-[13px] font-bold text-slate-900">Allowed File Types</label>
              <div className="flex flex-wrap items-center gap-2">
                {allowedTypes.map((type) => (
                  <div key={type} className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-lg px-3 py-1.5 group">
                    <span className="text-[12px] font-bold text-slate-600">{type}</span>
                    <button className="text-slate-400 hover:text-rose-500 transition-colors">
                      <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Max File Size</label>
              <div className="flex items-center max-w-sm">
                <input 
                  type="number" 
                  defaultValue={50}
                  className="w-full bg-white border border-slate-200 border-r-0 rounded-l-xl px-4 py-2.5 text-sm font-bold text-slate-900 outline-none"
                />
                <span className="bg-slate-50 border border-slate-200 rounded-r-xl px-4 py-2.5 text-[11px] font-black text-slate-400 uppercase tracking-wider">MB</span>
              </div>
            </div>

            <div className="flex items-center justify-between py-2 border-t border-slate-50 pt-6">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Enable Versioning</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Max Versions</h3>
              <div className="relative w-48">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-medium outline-none appearance-none text-center">
                  <option>5 versions</option>
                  <option>10 versions</option>
                  <option>Unlimited</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Document Signing Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Document Signing</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Configure electronic signature capabilities</p>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between py-2 border-b border-slate-50 pb-6">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Enable E-Signatures</h3>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-slate-50 pb-6">
              <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Signing Provider</h3>
              <div className="relative w-48">
                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-medium outline-none appearance-none text-center">
                  <option>DocuSign</option>
                  <option>HelloSign</option>
                  <option>Adobe Sign</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex flex-col gap-1">
                <h3 className="text-[14px] font-bold text-slate-900 tracking-tight">Require Audit Trail</h3>
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">SOC2 -- maintains tamper-proof signing log</span>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
              </button>
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
