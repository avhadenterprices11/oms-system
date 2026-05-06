"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function PasswordSecurityPage() {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Password & Security</h1>
        <p className="text-slate-500 text-sm font-medium">Manage your account security and authentication</p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Change Password Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-10 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-[16px] font-bold text-slate-900 mb-1">Change Password</h2>
              <p className="text-slate-400 text-xs font-medium">Update your password to keep your account secure</p>
            </div>
            <span className="text-[11px] text-slate-400 font-bold bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
              Last changed 3 months ago
            </span>
          </div>
          
          <div className="grid grid-cols-1 gap-6 max-w-[500px]">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Current Password</label>
              <input 
                type="password" 
                placeholder="••••••••••••"
                className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#5048e5] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">New Password</label>
              <input 
                type="password" 
                placeholder="••••••••••••"
                className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#5048e5] transition-colors"
              />
              <p className="text-[11px] text-slate-400 font-medium">Minimum 8 characters, include numbers and symbols</p>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Confirm New Password</label>
              <input 
                type="password" 
                placeholder="••••••••••••"
                className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#5048e5] transition-colors"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-start">
            <button className="bg-[#5048e5] px-8 py-3 rounded-xl text-[14px] font-bold text-white shadow-md hover:bg-[#4338ca] transition-all">
              Update Password
            </button>
          </div>
        </section>

        {/* Two-Factor Authentication Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-10 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="size-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h2 className="text-[16px] font-bold text-slate-900 mb-1">Two-Factor Authentication (2FA)</h2>
                <p className="text-slate-400 text-xs font-medium max-w-[400px]">Add an extra layer of security to your account by requiring more than just a password to log in.</p>
              </div>
            </div>
            <button 
              onClick={() => setIs2FAEnabled(!is2FAEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${is2FAEnabled ? 'bg-indigo-600' : 'bg-slate-200'}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${is2FAEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>
        </section>

        {/* Login History Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-10 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Active Sessions</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">You are currently logged in on these devices</p>
          
          <div className="space-y-4">
            {[
              { device: "MacBook Pro 16\"", location: "Mumbai, India", status: "Current Session", icon: "laptop" },
              { device: "iPhone 15 Pro", location: "Mumbai, India", status: "Active 2 hours ago", icon: "mobile" },
              { device: "iPad Air", location: "Pune, India", status: "Active 3 days ago", icon: "tablet" },
            ].map((session, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="size-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500">
                    {session.icon === "laptop" && (
                      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M2 18h20a2 2 0 002-2V6a2 2 0 00-2-2H2a2 2 0 00-2 2v10a2 2 0 002 2zm10-10v8m-4-4h8" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                    )}
                    {session.icon === "mobile" && (
                      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                    )}
                    {session.icon === "tablet" && (
                      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-[14px] font-bold text-slate-900">{session.device}</p>
                      {session.status === "Current Session" && (
                        <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-tight">Active Now</span>
                      )}
                    </div>
                    <p className="text-slate-400 text-xs font-medium">{session.location} • {session.status}</p>
                  </div>
                </div>
                {session.status !== "Current Session" && (
                  <button className="text-[13px] font-bold text-slate-400 hover:text-red-500 transition-colors">
                    Revoke Access
                  </button>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
            <button className="text-[13px] font-bold text-red-500 hover:text-red-600 transition-colors">
              Log out from all other devices
            </button>
          </div>
        </section>

        {/* Data & Privacy Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm mb-8">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Data & Privacy</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Manage your data and account</p>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between py-4 border-b border-slate-50">
              <div>
                <h3 className="text-[14px] font-bold text-slate-900">Download My Data</h3>
                <p className="text-slate-400 text-[12px] font-medium">Export all your data in JSON format</p>
              </div>
              <button className="bg-white border border-slate-200 px-5 py-2.5 rounded-xl text-[13px] font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
                Download My Data
              </button>
            </div>

            <div className="flex items-center justify-between py-4">
              <div>
                <h3 className="text-[14px] font-bold text-red-500">Delete Account</h3>
                <p className="text-slate-400 text-[12px] font-medium">Permanently delete your account and data</p>
              </div>
              <button className="bg-white border border-red-100 px-6 py-2.5 rounded-xl text-[13px] font-bold text-red-500 hover:bg-red-50 transition-all shadow-sm">
                Delete Account
              </button>
            </div>
          </div>
        </section>
      </div>
    </SettingsLayout>
  );
}
