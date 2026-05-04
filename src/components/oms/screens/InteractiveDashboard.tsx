"use client";
import { useState, useEffect } from "react";
import { CreateOrganisationForm } from "@/components/oms/setup-forms/CreateOrganisation";
import { SetupDepartmentsForm } from "@/components/oms/setup-forms/SetupDepartments";
import { RolesPermissionsForm } from "@/components/oms/setup-forms/RolesPermissions";
import { InviteTeamMembersForm } from "@/components/oms/setup-forms/InviteTeamMembers";
import { LeavePoliciesForm } from "@/components/oms/setup-forms/LeavePolicies";
import { IntegrationsForm } from "@/components/oms/setup-forms/Integrations";
import { ChatChannelsForm } from "@/components/oms/setup-forms/ChatChannels";
import { CustomizeBrandingForm } from "@/components/oms/setup-forms/CustomizeBranding";
import { SetupWorkspaceForm } from "@/components/oms/setup-forms/SetupWorkspace";

interface InteractiveDashboardProps {
  onSkipSetup?: () => void;
}

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  estimatedTime: string;
  expanded: boolean;
}

export function InteractiveDashboard({ onSkipSetup }: InteractiveDashboardProps) {
  const [items, setItems] = useState<ChecklistItem[]>([
    { id: "1", title: "Create Organisation", description: "Global ready: Multi-entity support, legal framework, and GDPR compliance.", completed: false, estimatedTime: "~8 min", expanded: false },
    { id: "2", title: "Set Up Departments", description: "Flexible design: Matrix reporting, cost centers, and regional segments.", completed: false, estimatedTime: "~6 min", expanded: false },
    { id: "3", title: "Roles & Permissions", description: "Enterprise IAM: RBAC, SSO, audit logs, and entity-level access control.", completed: false, estimatedTime: "~7 min", expanded: false },
    { id: "4", title: "Invite Team Members", description: "Global workforce: Employee/Contractor/EOR profiles and bulk sync.", completed: false, estimatedTime: "~5 min", expanded: false },
    { id: "5", title: "Leave Policies", description: "Compliance: Country-specific templates, accrual rules, and holiday calendars.", completed: false, estimatedTime: "~10 min", expanded: false },
    { id: "6", title: "Integrations", description: "Ecosystem: Connect Payroll, Accounting, and Business tools via API/SSO.", completed: false, estimatedTime: "~5 min", expanded: false },
    { id: "7", title: "Chat Channels", description: "Communication: Timezone-aware channels with AI threading and storage.", completed: false, estimatedTime: "~3 min", expanded: false },
    { id: "8", title: "Customize Branding", description: "White-label: Custom domain, multi-brand support, and localized UI.", completed: false, estimatedTime: "~5 min", expanded: false },
    { id: "9", title: "Setup Workspace", description: "Final Architecture: Templates, Quick Actions, and AI Assistant.", completed: false, estimatedTime: "~4 min", expanded: false },
  ]);

  const [progress, setProgress] = useState(0);
  const completedCount = items.filter((item) => item.completed).length;
  
  useEffect(() => {
    const targetProgress = (completedCount / items.length) * 100;
    const timer = setTimeout(() => setProgress(targetProgress), 100);
    return () => clearTimeout(timer);
  }, [completedCount, items.length]);

  const toggleItem = (id: string) => {
    setItems(items.map((item) =>
      item.id === id ? { ...item, expanded: !item.expanded } : { ...item, expanded: false }
    ));
  };

  const toggleComplete = (id: string) => {
    setItems(items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-['Inter',sans-serif] selection:bg-[#5048e5]/10 selection:text-[#5048e5] flex overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#5048e5]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#7c3aed]/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      {/* Main Container */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative z-10">


        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto scroll-smooth custom-scrollbar bg-[#f8fafc]/50">
          <div className="max-w-[1100px] mx-auto px-8 py-16">


            {/* Hero Section */}
            <div className="relative mb-12">
              
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div className="max-w-2xl">
                  <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
                    Architect Your <br/> 
                    <span className="bg-gradient-to-r from-[#5048e5] to-[#7c3aed] bg-clip-text text-transparent">Organisation Hub</span>
                  </h1>
                  <p className="text-lg text-slate-500 font-medium max-w-lg">
                    A curated orchestration of your enterprise workspace. Follow the blueprints to initialize your portal.
                  </p>
                </div>
                
                {onSkipSetup && (
                  <button
                    onClick={onSkipSetup}
                    className="group relative px-6 py-3 font-bold text-slate-500 transition-all hover:text-slate-900"
                  >
                    <span className="relative z-10">Proceed to Dashboard</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5048e5] group-hover:w-full transition-all duration-500" />
                  </button>
                )}
              </div>
            </div>

            {/* Global Progress */}
            <div className="bg-white/80 backdrop-blur-md rounded-[32px] p-8 border border-white shadow-xl shadow-slate-200/40 mb-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#5048e5]/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div className="flex items-center gap-6">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                     <svg className="w-full h-full -rotate-90">
                        <circle cx="40" cy="40" r="36" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                        <circle cx="40" cy="40" r="36" fill="none" stroke="url(#progressGradient)" strokeWidth="8" strokeDasharray={`${2 * Math.PI * 36}`} strokeDashoffset={`${2 * Math.PI * 36 * (1 - progress / 100)}`} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
                        <defs>
                          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#5048e5" />
                            <stop offset="100%" stopColor="#7c3aed" />
                          </linearGradient>
                        </defs>
                     </svg>
                     <span className="absolute text-xl font-black text-slate-900">{Math.round(progress)}%</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Configuration Progress</h3>
                    <p className="text-slate-500 font-medium">
                      <span className="text-[#5048e5] font-black">{completedCount}</span> of <span className="font-bold text-slate-900">{items.length}</span> milestones achieved
                    </p>
                  </div>
                </div>
                
                <div className="hidden lg:flex gap-4">
                   <div className="px-5 py-3 bg-emerald-50 rounded-2xl border border-emerald-100">
                      <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Status</p>
                      <p className="text-sm font-bold text-emerald-700">Healthy Integration</p>
                   </div>
                   <div className="px-5 py-3 bg-blue-50 rounded-2xl border border-blue-100">
                      <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Uptime</p>
                      <p className="text-sm font-bold text-blue-700">99.9% Operational</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Setup Milestones */}
            <div className="grid gap-6">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative group bg-white rounded-[28px] border transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/60 overflow-hidden ${
                    item.expanded ? 'ring-2 ring-[#5048e5]/20 border-[#5048e5]/30' : 'border-slate-100 shadow-sm'
                  } ${item.completed ? 'bg-slate-50/50 border-emerald-100/50' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#5048e5] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                  
                  <div className={`p-8 flex flex-col sm:flex-row gap-6 ${!item.completed && 'cursor-pointer'}`} onClick={() => !item.completed && toggleItem(item.id)}>
                    {/* Status Indicator */}
                    <div className="relative flex-shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleComplete(item.id);
                        }}
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg ${
                          item.completed 
                            ? 'bg-emerald-500 shadow-emerald-500/20 rotate-0' 
                            : 'bg-white border-2 border-slate-100 group-hover:border-[#5048e5]/30 -rotate-12 group-hover:rotate-0'
                        }`}
                      >
                        {item.completed ? (
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="text-lg font-black text-slate-300 group-hover:text-[#5048e5]">{index + 1}</span>
                        )}
                      </button>
                      {item.completed && (
                        <div className="absolute -top-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                           <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                          <h3 className={`text-xl font-bold transition-all ${
                            item.completed ? 'text-slate-400 line-through' : 'text-slate-900'
                          }`}>
                            {item.title}
                          </h3>
                          <p className="text-slate-500 font-medium mt-1 leading-relaxed max-w-xl">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                           <div className="px-4 py-1.5 bg-slate-100 rounded-full text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {item.estimatedTime}
                           </div>
                           {item.expanded ? (
                              <div className="p-2 text-[#5048e5]">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                           ) : (
                              <div className="p-2 text-slate-300 group-hover:text-[#5048e5] transition-colors">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                           )}
                        </div>
                      </div>

                      {/* Expansion Panel */}
                      <div className={`grid transition-all duration-500 ease-in-out ${item.expanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 overflow-hidden'}`}>
                        <div className="overflow-hidden bg-slate-50/80 backdrop-blur rounded-3xl p-1 shadow-inner" onClick={(e) => e.stopPropagation()}>
                           <div className="p-8">
                              {item.id === "1" && <CreateOrganisationForm />}
                              {item.id === "2" && <SetupDepartmentsForm />}
                              {item.id === "3" && <RolesPermissionsForm />}
                              {item.id === "4" && <InviteTeamMembersForm />}
                              {item.id === "5" && <LeavePoliciesForm />}
                              {item.id === "6" && <IntegrationsForm />}
                              {item.id === "7" && <ChatChannelsForm />}
                              {item.id === "8" && <CustomizeBrandingForm />}
                              {item.id === "9" && <SetupWorkspaceForm />}

                              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                                <button
                                  onClick={() => {
                                    toggleComplete(item.id);
                                    toggleItem(item.id);
                                  }}
                                  className="relative group/btn overflow-hidden bg-[#5048e5] px-8 py-4 rounded-2xl font-black text-white shadow-xl shadow-[#5048e5]/20 hover:shadow-2xl hover:shadow-[#5048e5]/30 transition-all hover:-translate-y-0.5 active:scale-95"
                                >
                                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                                  <span className="relative z-10">Architect Milestone</span>
                                </button>
                                <button
                                  onClick={() => toggleItem(item.id)}
                                  className="px-8 py-4 bg-white border-2 border-slate-100 rounded-2xl font-black text-slate-600 hover:bg-slate-50 hover:border-slate-200 transition-all"
                                >
                                  Suspend Setup
                                </button>
                              </div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Help */}
            <div className="mt-20 text-center border-t border-slate-200/60 pt-12">
               <p className="text-slate-400 font-bold uppercase text-xs tracking-[4px] mb-8">Architectural Support</p>
               <div className="flex flex-wrap justify-center gap-8">
                  <a href="#" className="flex items-center gap-3 text-slate-500 hover:text-[#5048e5] transition-colors group">
                    <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 group-hover:shadow-md">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="font-bold text-sm">Documentation</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-slate-500 hover:text-[#5048e5] transition-colors group">
                    <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 group-hover:shadow-md">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656L18.364 18.364m-5.656-3.536L9.172 18.364m3.536-3.536L9.172 9.172M9.172 5.636l3.536 3.536m-3.536 5.656l-3.536 3.536M12 12l3.536 3.536M12 12l-3.536-3.536" />
                      </svg>
                    </div>
                    <span className="font-bold text-sm">Engineering Support</span>
                  </a>
               </div>
            </div>
          </div>
        </div>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}} />
    </div>
  );
}
