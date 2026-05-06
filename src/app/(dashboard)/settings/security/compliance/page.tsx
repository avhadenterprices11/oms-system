"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function ComplianceDashboardPage() {
  const sections = [
    {
      title: "Access Controls",
      status: "5/5 Complete",
      statusType: "success",
      items: [
        { label: "RBAC implemented", done: true },
        { label: "MFA enforced", done: true },
        { label: "SSO configured", done: true },
        { label: "Session management active", done: true },
        { label: "IP restrictions available", done: true },
      ],
    },
    {
      title: "Audit & Monitoring",
      status: "4/5",
      statusType: "warning",
      items: [
        { label: "Audit logging enabled", done: true },
        { label: "Log retention: 3 years", done: true },
        { label: "User activity tracking", done: true },
        { label: "SIEM integration: Not configured", done: false, partial: true },
        { label: "Anomaly alerting", done: true },
      ],
    },
    {
      title: "Data Protection",
      status: "4/5",
      statusType: "warning",
      items: [
        { label: "Encryption at rest (AES-256)", done: true },
        { label: "Encryption in transit (TLS 1.3)", done: true },
        { label: "Data retention policies defined", done: true },
        { label: "Data classification: Partial", done: false, partial: true },
        { label: "Backup & recovery tested", done: true },
      ],
    },
    {
      title: "Policy Acknowledgment",
      status: "3/4",
      statusType: "warning",
      items: [
        { label: "Acceptable Use Policy: 22/24 acknowledged", done: true },
      ],
    },
  ];

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Compliance Dashboard</h1>
        <p className="text-slate-500 text-sm font-medium">SOC2 Type II readiness overview</p>
      </div>

      <div className="flex flex-col gap-6 mb-12">
        {/* Main Readiness Gauge Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm flex items-center gap-12">
          {/* Circular Progress Gauge */}
          <div className="relative size-32 flex items-center justify-center">
            {/* Background Circle */}
            <svg className="absolute size-full -rotate-90">
              <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
              <circle 
                cx="64" 
                cy="64" 
                r="58" 
                stroke="currentColor" 
                strokeWidth="12" 
                fill="transparent" 
                className="text-indigo-600" 
                strokeDasharray={364.4}
                strokeDashoffset={364.4 * (1 - 0.87)}
                strokeLinecap="round"
              />
            </svg>
            <div className="text-center">
              <span className="text-[24px] font-black text-indigo-600 leading-none">87%</span>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Ready</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-[24px] font-black text-slate-900 tracking-tight">SOC2 Readiness: 87%</h2>
            <div className="flex">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-lg text-[10px] font-black uppercase tracking-wider">On Track</span>
            </div>
          </div>
        </section>

        {/* Audit Sections */}
        {sections.map((section, idx) => (
          <section key={idx} className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-[16px] font-bold text-slate-900">{section.title}</h2>
              <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border ${
                section.statusType === "success" 
                ? "bg-emerald-50 text-emerald-600 border-emerald-100" 
                : "bg-amber-50 text-amber-600 border-amber-100"
              }`}>
                {section.status}
              </span>
            </div>
            
            <div className="space-y-4">
              {section.items.map((item, iidx) => (
                <div key={iidx} className="flex items-center gap-3">
                  <div className={`size-5 rounded-full flex items-center justify-center ${
                    item.done 
                    ? "bg-emerald-50 text-emerald-500" 
                    : item.partial 
                    ? "bg-amber-50 text-amber-500"
                    : "bg-slate-50 text-slate-300"
                  }`}>
                    {item.done ? (
                      <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    ) : item.partial ? (
                      <span className="text-[14px] font-black italic">!</span>
                    ) : (
                      <div className="size-1.5 bg-slate-200 rounded-full" />
                    )}
                  </div>
                  <span className={`text-[13px] font-bold ${item.done ? "text-slate-600" : "text-slate-400"}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </SettingsLayout>
  );
}
