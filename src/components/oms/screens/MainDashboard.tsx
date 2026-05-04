"use client";
import { useState } from "react";
import svgPaths from "@/imports/AdminSetupChecklist/svg-4krrse233u";

export function MainDashboard() {
  return (
    <div className="bg-[#f6f6f8] min-h-screen w-full">
      {/* Header */}
      <div className="bg-white border-b-[0.556px] border-[#e2e8f0] h-[64px] flex items-center justify-between px-8">
        <div className="flex items-center gap-3 flex-1 max-w-[380px]">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 15.9983 15.9983">
            <path d={svgPaths.p35a8ef0} stroke="#94A3B8" strokeWidth="1.49984" />
            <path d={svgPaths.p2e1fb780} stroke="#94A3B8" strokeWidth="1.49984" />
          </svg>
          <input
            type="text"
            placeholder="Search resources, tasks, or teammates..."
            className="flex-1 bg-[#f8fafc] border-[0.556px] border-[#e2e8f0] rounded-[8px] h-[34px] px-4 text-[14px] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#0f172a]">Ashwini</p>
            <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#64748b]">Admin</p>
          </div>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ backgroundImage: "linear-gradient(135deg, rgb(196, 181, 253) 0%, rgb(167, 139, 250) 100%)" }}
          >
            <span className="font-['Inter:Bold',sans-serif] font-bold text-[13px] text-white">A</span>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="bg-white w-[256px] min-h-screen border-r-[0.556px] border-[rgba(80,72,229,0.1)]">
          <div className="p-6 flex items-center gap-3">
            <div className="bg-[#5048e5] w-10 h-10 rounded-[8px] flex items-center justify-center">
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 17.9948 17.9948">
                <path d={svgPaths.p1ea50500} fill="white" />
                <path d={svgPaths.p34f62700} fill="white" opacity="0.6" />
                <path d={svgPaths.p1179c680} fill="white" opacity="0.6" />
                <path d={svgPaths.p54d4e80} fill="white" opacity="0.4" />
              </svg>
            </div>
            <div>
              <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] text-[#0f172a] tracking-[-0.35px]">Portal</p>
              <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#64748b]">v1</p>
            </div>
          </div>

          <nav className="px-4 space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2 bg-[rgba(80,72,229,0.08)] rounded-[8px] text-[#5048e5]">
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 17.9948 17.9948">
                <path d={svgPaths.p129e1a00} stroke="#5048E5" strokeWidth="1.49957" />
                <path d={svgPaths.p831ad00} stroke="#5048E5" strokeWidth="1.49957" />
                <path d={svgPaths.p250f6780} stroke="#5048E5" strokeWidth="1.49957" />
                <path d={svgPaths.p368ba580} stroke="#5048E5" strokeWidth="1.49957" />
              </svg>
              <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px]">Dashboard</span>
            </a>
            {["People", "Chat", "Tasks", "Projects", "Events", "CRM", "Client Delivery", "Leave"].map((item) => (
              <a key={item} href="#" className="flex items-center gap-3 px-3 py-2 rounded-[8px] text-[#475569] hover:bg-[#f8fafc]">
                <div className="w-[18px] h-[18px]" />
                <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px]">{item}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-[1200px]">
            <div className="mb-8">
              <h1 className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[30px] text-[#0f172a] tracking-[-0.75px] mb-2">
                Welcome to Portal
              </h1>
              <p className="font-['Inter:Regular',sans-serif] text-[16px] text-[#64748b]">
                Your unified workspace for team collaboration
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              <div className="bg-white border border-[#e2e8f0] rounded-[16px] p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-[#ede9fe] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="#5048e5" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-[12px] text-[#22c55e] font-semibold">+12%</span>
                </div>
                <h3 className="text-[24px] font-bold text-[#0f172a] mb-1">24</h3>
                <p className="text-[13px] text-[#64748b]">Team Members</p>
              </div>

              <div className="bg-white border border-[#e2e8f0] rounded-[16px] p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-[#dbeafe] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="#3b82f6" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <span className="text-[12px] text-[#3b82f6] font-semibold">32 active</span>
                </div>
                <h3 className="text-[24px] font-bold text-[#0f172a] mb-1">156</h3>
                <p className="text-[13px] text-[#64748b]">Active Tasks</p>
              </div>

              <div className="bg-white border border-[#e2e8f0] rounded-[16px] p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-[#fef3c7] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="#f59e0b" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <span className="text-[12px] text-[#f59e0b] font-semibold">8 new</span>
                </div>
                <h3 className="text-[24px] font-bold text-[#0f172a] mb-1">12</h3>
                <p className="text-[13px] text-[#64748b]">Active Projects</p>
              </div>

              <div className="bg-white border border-[#e2e8f0] rounded-[16px] p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-[#dcfce7] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20" stroke="#22c55e" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-[12px] text-[#22c55e] font-semibold">94%</span>
                </div>
                <h3 className="text-[24px] font-bold text-[#0f172a] mb-1">87</h3>
                <p className="text-[13px] text-[#64748b]">Completed Tasks</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white border border-[#e2e8f0] rounded-[16px] p-6 mb-8">
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] text-[#0f172a] mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-4 gap-4">
                <button className="flex flex-col items-center gap-2 p-4 border border-[#e2e8f0] rounded-lg hover:border-[#5048e5] hover:bg-[#f8fafc] transition-colors">
                  <div className="w-12 h-12 bg-[#ede9fe] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#5048e5" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <span className="text-[13px] font-semibold text-[#334155]">New Task</span>
                </button>

                <button className="flex flex-col items-center gap-2 p-4 border border-[#e2e8f0] rounded-lg hover:border-[#5048e5] hover:bg-[#f8fafc] transition-colors">
                  <div className="w-12 h-12 bg-[#dbeafe] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#3b82f6" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-[13px] font-semibold text-[#334155]">Invite Team</span>
                </button>

                <button className="flex flex-col items-center gap-2 p-4 border border-[#e2e8f0] rounded-lg hover:border-[#5048e5] hover:bg-[#f8fafc] transition-colors">
                  <div className="w-12 h-12 bg-[#fef3c7] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#f59e0b" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-[13px] font-semibold text-[#334155]">Schedule Event</span>
                </button>

                <button className="flex flex-col items-center gap-2 p-4 border border-[#e2e8f0] rounded-lg hover:border-[#5048e5] hover:bg-[#f8fafc] transition-colors">
                  <div className="w-12 h-12 bg-[#dcfce7] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#22c55e" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-[13px] font-semibold text-[#334155]">New Document</span>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white border border-[#e2e8f0] rounded-[16px] p-6">
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] text-[#0f172a] mb-4">
                Recent Activity
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 pb-4 border-b border-[#f1f5f9]">
                  <div className="w-8 h-8 bg-[#ede9fe] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[12px] text-[#5048e5]">AR</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[13px] text-[#334155]">
                      <span className="font-semibold">Ashwini Reddy</span> completed task{" "}
                      <span className="font-semibold">"API Migration Spec"</span>
                    </p>
                    <p className="text-[12px] text-[#94a3b8] mt-1">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-[#f1f5f9]">
                  <div className="w-8 h-8 bg-[#dbeafe] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[12px] text-[#3b82f6]">JL</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[13px] text-[#334155]">
                      <span className="font-semibold">Jordan Lee</span> added 3 new tasks to{" "}
                      <span className="font-semibold">Engineering Sprint</span>
                    </p>
                    <p className="text-[12px] text-[#94a3b8] mt-1">4 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#fef3c7] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[12px] text-[#f59e0b]">SM</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[13px] text-[#334155]">
                      <span className="font-semibold">Sarah Miller</span> created new project{" "}
                      <span className="font-semibold">"Q2 Marketing Campaign"</span>
                    </p>
                    <p className="text-[12px] text-[#94a3b8] mt-1">Yesterday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
