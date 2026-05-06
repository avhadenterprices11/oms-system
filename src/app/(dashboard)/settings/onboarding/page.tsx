"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function OnboardingPage() {
  const templates = [
    { 
      name: "Engineering Onboarding", 
      status: "Active", 
      tasks: 8, 
      duration: "30 days", 
      used: 12, 
      updated: "Mar 15, 2026" 
    },
    { 
      name: "Sales Onboarding", 
      status: "Active", 
      tasks: 6, 
      duration: "21 days", 
      used: 8, 
      updated: "Mar 10, 2026" 
    },
    { 
      name: "Operations Onboarding", 
      status: "Active", 
      tasks: 5, 
      duration: "14 days", 
      used: 5, 
      updated: "Feb 28, 2026" 
    },
    { 
      name: "Custom Template", 
      status: "Draft", 
      tasks: 3, 
      duration: "—", 
      used: 0, 
      updated: "Mar 25, 2026" 
    },
  ];

  const previewTasks = [
    { title: "IT Setup — Laptop, email, Slack, GitHub access", day: "Day 1", completed: true },
    { title: "HR Orientation — Policies, benefits, handbook review", day: "Day 1", completed: true },
    { title: "Meet the Team — Intro meetings with team members", day: "Day 1-2", completed: false },
    { title: "Codebase Walkthrough — Architecture overview session", day: "Day 2-3", completed: false },
    { title: "Dev Environment Setup — Local dev, CI/CD, staging access", day: "Day 3-5", completed: false },
    { title: "First PR — Submit a small starter task", day: "Week 1-2", completed: false },
    { title: "Security Training — SOC2 compliance, data handling", day: "Week 2", completed: false },
    { title: "30-Day Check-in — Manager 1:1 review", day: "Day 30", completed: false },
  ];

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Onboarding Templates</h1>
          <p className="text-slate-500 text-sm font-medium">Manage employee onboarding workflows</p>
        </div>
        <button className="bg-[#5048e5] px-6 py-2.5 rounded-xl text-[14px] font-bold text-white shadow-md hover:bg-[#4338ca] transition-all flex items-center gap-2">
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
          Create Template
        </button>
      </div>

      <div className="flex flex-col gap-8">
        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {templates.map((template, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm hover:border-slate-300 transition-all">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[17px] font-black text-slate-900 tracking-tight">{template.name}</h2>
                <span className={`px-2 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-wider border ${
                  template.status === "Active" 
                  ? "bg-emerald-50 text-emerald-600 border-emerald-100" 
                  : "bg-amber-50 text-amber-600 border-amber-100"
                }`}>
                  {template.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                <div className="flex items-center gap-1.5">
                  <span className="text-[13px] font-black text-slate-900">{template.tasks}</span>
                  <span className="text-[12px] font-medium text-slate-400">Tasks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400 text-[12px] font-medium">Avg Duration:</span>
                  <span className="text-[13px] font-black text-slate-900">{template.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400 text-[12px] font-medium">Used:</span>
                  <span className="text-[13px] font-black text-slate-900">{template.used} times</span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">Last updated: {template.updated}</p>
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-slate-50">
                {["Edit", "Duplicate", "Archive"].map((action) => (
                  <button key={action} className="text-[12px] font-bold text-[#5048e5] hover:underline">{action}</button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Editor Preview Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm mb-12">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Template Editor Preview</h2>
          <p className="text-slate-400 text-xs font-medium mb-10">Engineering Onboarding — Task checklist</p>
          
          <div className="bg-slate-50/50 rounded-[20px] p-8 border border-slate-100 max-w-4xl">
            <h3 className="text-[14px] font-black text-slate-900 mb-8 tracking-tight">Engineering Onboarding Tasks</h3>
            
            <div className="space-y-1">
              {previewTasks.map((task, idx) => (
                <div key={idx} className="flex items-center justify-between group py-3 border-b border-slate-50 last:border-0">
                  <div className="flex items-center gap-4">
                    <div className={`size-6 rounded-lg flex items-center justify-center transition-all ${
                      task.completed 
                      ? "bg-emerald-500 text-white" 
                      : "bg-white border-2 border-slate-200"
                    }`}>
                      {task.completed && (
                        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      )}
                    </div>
                    <span className={`text-[13px] font-semibold tracking-tight ${
                      task.completed ? "text-slate-500" : "text-slate-700"
                    }`}>
                      {task.title}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">{task.day}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SettingsLayout>
  );
}
