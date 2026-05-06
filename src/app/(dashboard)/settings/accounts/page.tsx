"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function ConnectedAccountsPage() {
  const [isGoogleModalOpen, setIsGoogleModalOpen] = useState(false);
  const [integrations, setIntegrations] = useState({
    googleCal: true,
    outlookCal: false,
    appleCal: false,
    gmail: true,
    outlookEmail: false,
    github: true,
    gitlab: false,
    jira: false,
    slack: false,
    teams: false,
  });

  const ServiceCard = ({ 
    name, 
    icon, 
    status, 
    connectedText, 
    onToggle 
  }: { 
    name: string, 
    icon: React.ReactNode, 
    status: boolean, 
    connectedText?: string,
    onToggle: () => void 
  }) => (
    <div className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:border-slate-200 transition-all">
      <div className="flex items-center gap-4">
        <div className="size-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 overflow-hidden">
          {icon}
        </div>
        <div>
          <h3 className="text-[14px] font-bold text-slate-900">{name}</h3>
          <p className={`text-[12px] font-medium ${status ? 'text-emerald-500' : 'text-slate-400'}`}>
            {status ? (connectedText || 'Connected') : 'Not connected'}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${status ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-400'}`}>
          {status ? 'Connected' : 'Not connected'}
        </span>
        <button 
          onClick={onToggle}
          className={`px-5 py-2 rounded-xl text-[12px] font-bold transition-all shadow-sm ${status ? 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
        >
          {status ? 'Disconnect' : 'Connect'}
        </button>
      </div>
    </div>
  );

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Connected Accounts</h1>
        <p className="text-slate-500 text-sm font-medium">Manage your third-party integrations and connected services</p>
      </div>

      <div className="flex flex-col gap-6 relative">
        {/* Calendar Sync Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Calendar Sync</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Sync your calendar with external services</p>
          <div className="flex flex-col gap-4">
            <ServiceCard 
              name="Google Calendar" 
              icon={<img src="https://www.gstatic.com/images/branding/product/2x/calendar_2020q4_48dp.png" className="size-6 object-contain" alt="" />}
              status={integrations.googleCal}
              onToggle={() => {
                if (!integrations.googleCal) {
                  setIsGoogleModalOpen(true);
                } else {
                  setIntegrations(p => ({ ...p, googleCal: false }));
                }
              }}
            />
            <ServiceCard 
              name="Outlook Calendar" 
              icon={<div className="size-6 bg-blue-600 rounded-sm" />}
              status={integrations.outlookCal}
              onToggle={() => setIntegrations(p => ({ ...p, outlookCal: !p.outlookCal }))}
            />
            <ServiceCard 
              name="Apple Calendar" 
              icon={<svg className="size-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C4.38 17.05 4.3 11.23 7.55 7.82c1.62-1.71 3.42-1.63 4.5 1.05 1.25 1.12 2.8 1.1 4.15 0 1.25-1.02 2.65-1.02 4.1.2 1.45 1.22 2.1 3.1 1.15 5.5-1.05 2.5-1.95 4.5-3.15 5.71zm-1.78-15.4c.12-2.12-1.65-4.12-3.8-4.22.12 2.12 1.7 4.1 3.8 4.22z"/></svg>}
              status={integrations.appleCal}
              onToggle={() => setIntegrations(p => ({ ...p, appleCal: !p.appleCal }))}
            />
          </div>
        </section>

        {/* Email Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Email</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Connect your email accounts</p>
          <div className="flex flex-col gap-4">
            <ServiceCard 
              name="Gmail" 
              icon={<img src="https://www.gstatic.com/images/branding/product/2x/gmail_2020q4_48dp.png" className="size-6 object-contain" alt="" />}
              status={integrations.gmail}
              connectedText="Connected as ravi.kumar@gmail.com"
              onToggle={() => setIntegrations(p => ({ ...p, gmail: !p.gmail }))}
            />
            <ServiceCard 
              name="Outlook" 
              icon={<div className="size-6 bg-blue-500 rounded-sm" />}
              status={integrations.outlookEmail}
              onToggle={() => setIntegrations(p => ({ ...p, outlookEmail: !p.outlookEmail }))}
            />
          </div>
        </section>

        {/* Code & Dev Tools Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Code & Dev Tools</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Connect your development tools and repositories</p>
          <div className="flex flex-col gap-4">
            <ServiceCard 
              name="GitHub" 
              icon={<svg className="size-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>}
              status={integrations.github}
              connectedText="Connected as @ravikumar"
              onToggle={() => setIntegrations(p => ({ ...p, github: !p.github }))}
            />
            <ServiceCard 
              name="GitLab" 
              icon={<div className="size-6 bg-orange-500 rounded-sm" />}
              status={integrations.gitlab}
              onToggle={() => setIntegrations(p => ({ ...p, gitlab: !p.gitlab }))}
            />
            <ServiceCard 
              name="Jira" 
              icon={<div className="size-6 bg-blue-700 rounded-sm" />}
              status={integrations.jira}
              onToggle={() => setIntegrations(p => ({ ...p, jira: !p.jira }))}
            />
          </div>
        </section>

        {/* Communication Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm mb-12">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Communication</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Connect your messaging and communication tools</p>
          <div className="flex flex-col gap-4">
            <ServiceCard 
              name="Slack" 
              icon={<img src="https://a.slack-edge.com/80588/img/services/slack_512.png" className="size-6 object-contain" alt="" />}
              status={integrations.slack}
              onToggle={() => setIntegrations(p => ({ ...p, slack: !p.slack }))}
            />
            <ServiceCard 
              name="Microsoft Teams" 
              icon={<div className="size-6 bg-indigo-600 rounded-sm" />}
              status={integrations.teams}
              onToggle={() => setIntegrations(p => ({ ...p, teams: !p.teams }))}
            />
          </div>
        </section>

        {/* Connect Google Calendar Modal */}
        {isGoogleModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-[32px] w-full max-w-[480px] p-10 shadow-2xl border border-white animate-in zoom-in-95 duration-300">
              <div className="flex items-center gap-4 mb-10">
                <div className="size-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center">
                  <svg className="size-8" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <h2 className="text-[22px] font-black text-slate-900 tracking-tight">Connect Google Calendar</h2>
              </div>

              <div className="space-y-6 mb-10">
                {[
                  "You'll be redirected to Google",
                  "Sign in and grant access",
                  "Calendar sync will begin automatically",
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="size-8 rounded-full bg-slate-50 flex items-center justify-center text-[13px] font-black text-slate-400">
                      {idx + 1}
                    </div>
                    <span className="text-[14px] font-bold text-slate-600">{step}</span>
                  </div>
                ))}
              </div>

              <div className="mb-10">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">PERMISSIONS REQUESTED</h3>
                <div className="space-y-3">
                  {["Read calendar events", "Create events", "Manage calendars"].map((p) => (
                    <div key={p} className="text-[14px] font-bold text-slate-700 ml-2">{p}</div>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex items-center gap-3 mb-10">
                <div className="text-emerald-500">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p className="text-emerald-700 text-[12px] font-bold">
                  Your data is encrypted and never shared.
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 pt-4">
                <button 
                  onClick={() => setIsGoogleModalOpen(false)}
                  className="bg-white border border-slate-200 px-8 py-3.5 rounded-xl text-[14px] font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm"
                >
                  Cancel
                </button>
                <button className="flex-1 bg-[#4285F4] px-6 py-3.5 rounded-xl text-[14px] font-bold text-white shadow-lg hover:bg-[#357ae8] transition-all flex items-center justify-center gap-3">
                  <svg className="size-4 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Connect with Google
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .animate-spin-slow { animation: spin 3s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}} />
    </SettingsLayout>
  );
}
