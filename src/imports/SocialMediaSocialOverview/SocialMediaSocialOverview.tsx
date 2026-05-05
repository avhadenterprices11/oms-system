"use client";
import React from "react";

export default function SocialMediaSocialOverview() {
  return (
    <div className="p-6 h-full overflow-y-auto bg-[#f8fafc]" data-name="Social Media Social Overview">
      <div className="max-w-7xl mx-auto pb-6">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-1">
            <h1 className="text-[32px] font-extrabold text-[#0f172a] leading-tight tracking-tight">Social Overview</h1>
            <p className="text-[14px] text-[#64748b] max-w-lg leading-relaxed">
              Monitor your presence across all connected platforms with architectural precision.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-[#e0e7ff] text-[#4f46e5] px-4 py-2 rounded-[10px] font-bold text-[13px] hover:bg-[#d1dbff] transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Export Report
          </button>
        </div>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Card 1: Total Scheduled */}
          <div className="bg-white border border-[#f1f5f9] rounded-[24px] p-5 shadow-sm relative group hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-[#f5f3ff] rounded-[10px]">
                <svg className="w-5 h-5 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="px-2 py-0.5 bg-[#f0fdf4] text-[#16a34a] rounded-full text-[11px] font-bold">+12%</span>
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-[0.05em]">Total Scheduled</p>
              <h2 className="text-[28px] font-bold text-[#0f172a]">142</h2>
            </div>
            <div className="mt-4 h-[4px] w-full bg-[#f1f5f9] rounded-full overflow-hidden">
              <div className="h-full w-[65%] bg-[#4f46e5] rounded-full" />
            </div>
          </div>

          {/* Card 2: Published */}
          <div className="bg-white border border-[#f1f5f9] rounded-[24px] p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-[#f0f9ff] rounded-[10px]">
                <svg className="w-5 h-5 text-[#0369a1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="px-2 py-0.5 bg-[#f1f5f9] text-[#64748b] rounded-full text-[11px] font-bold">Static</span>
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-[0.05em]">Published</p>
              <h2 className="text-[28px] font-bold text-[#0f172a]">2,841</h2>
              <p className="text-[12px] text-[#64748b] font-medium">Last 30 days active</p>
            </div>
          </div>

          {/* Card 3: Failed Posts */}
          <div className="bg-white border border-[#f1f5f9] rounded-[24px] p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-[#fef2f2] rounded-[10px]">
                <svg className="w-5 h-5 text-[#dc2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="px-2 py-0.5 bg-[#fff1f2] text-[#e11d48] rounded-full text-[11px] font-bold">-3%</span>
            </div>
            <div className="space-y-0.5">
              <p className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-[0.05em]">Failed Posts</p>
              <h2 className="text-[28px] font-bold text-[#0f172a]">08</h2>
              <p className="text-[12px] text-[#b91c1c] font-semibold">Requires immediate attention</p>
            </div>
          </div>

          {/* Card 4: Upcoming */}
          <div className="bg-[#2d27c9] rounded-[24px] p-5 shadow-lg relative overflow-hidden group">
            <div className="absolute -bottom-6 -right-6 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <svg className="w-32 h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="p-2 bg-white/20 backdrop-blur-sm rounded-[10px] w-fit mb-4">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-bold text-white/70 uppercase tracking-[0.05em]">Upcoming</p>
                <h2 className="text-[28px] font-bold text-white">24</h2>
                <p className="text-[12px] text-white/80 font-medium">Next 48 hours queue</p>
              </div>
            </div>
          </div>
        </div>

        {/* Growth & Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Growth & Engagement */}
          <div className="lg:col-span-2 bg-white rounded-[24px] border border-[#f1f5f9] p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[18px] font-bold text-[#0f172a]">Growth & Engagement</h3>
              <div className="flex bg-[#f1f5f9] p-0.5 rounded-[10px]">
                <button className="px-4 py-1.5 bg-white text-[#0f172a] rounded-[8px] text-[12px] font-bold shadow-sm transition-all">Weekly</button>
                <button className="px-4 py-1.5 text-[#64748b] text-[12px] font-bold hover:text-[#0f172a] transition-all">Monthly</button>
              </div>
            </div>

            {/* Chart Area */}
            <div className="relative h-[180px] w-full flex items-end gap-2 px-2 py-3 bg-[#f5f3ff]/50 rounded-[16px] mb-6">
              {[45, 65, 55, 85, 60, 70, 95, 45, 55, 65, 50, 75, 40, 60].map((height, i) => (
                <div 
                  key={i} 
                  className={`flex-1 rounded-t-[8px] transition-all duration-500 hover:opacity-80 ${i === 3 ? 'bg-[#312ecb]' : 'bg-[#d8d3ff]'}`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>

            {/* Stats Footer */}
            <div className="grid grid-cols-4 gap-2">
              <div className="space-y-0.5">
                <p className="text-[9px] font-bold text-[#94a3b8] uppercase tracking-[0.1em]">Reach</p>
                <p className="text-[20px] font-bold text-[#0f172a]">128.4k</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-[9px] font-bold text-[#94a3b8] uppercase tracking-[0.1em]">Interactions</p>
                <p className="text-[20px] font-bold text-[#312ecb]">14.2k</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-[9px] font-bold text-[#94a3b8] uppercase tracking-[0.1em]">Followers</p>
                <p className="text-[20px] font-bold text-[#0f172a]">42.1k</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-[9px] font-bold text-[#94a3b8] uppercase tracking-[0.1em]">Shares</p>
                <p className="text-[20px] font-bold text-[#0f172a]">2.4k</p>
              </div>
            </div>
          </div>

          {/* Right: Recent Activity */}
          <div className="bg-[#f8faff] rounded-[24px] p-6 flex flex-col">
            <h3 className="text-[18px] font-bold text-[#0f172a] mb-6">Recent Activity</h3>
            
            <div className="space-y-6 relative flex-1">
              <ActivityItem 
                title="Summer Launch Post"
                status="Posted"
                statusColor="#3b82f6"
                time="14m ago"
                description="Auto-pushed to LinkedIn & Instagram."
                icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                iconBg="#dbeafe"
                iconColor="#1d4ed8"
              />
              <ActivityItem 
                title="Q3 Roadmap Teaser"
                status="Review"
                statusColor="#7c3aed"
                time="2h ago"
                description="Pending manager approval."
                icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>}
                iconBg="#f5f3ff"
                iconColor="#6d28d9"
              />
              <ActivityItem 
                title="Product Showcase Video"
                status="Failed"
                statusColor="#ef4444"
                time="5h ago"
                description="API Authentication expired."
                icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>}
                iconBg="#fef2f2"
                iconColor="#dc2626"
              />
              <ActivityItem 
                title="Holiday Promotion"
                status="Review"
                statusColor="#7c3aed"
                time="18:30"
                description="Draft created by Alex Chen."
                icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                iconBg="#f5f3ff"
                iconColor="#6d28d9"
                isLast
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityItem({ title, status, statusColor, time, description, icon, iconBg, iconColor, isLast = false }: any) {
  return (
    <div className="flex gap-4 relative">
      {!isLast && (
        <div className="absolute left-[20px] top-10 bottom-[-24px] w-px bg-[#e2e8f0]" />
      )}
      <div className="relative z-10 shrink-0">
        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center" style={{ backgroundColor: iconBg, color: iconColor }}>
          {icon}
        </div>
      </div>
      <div className="space-y-1 flex-1">
        <div className="flex justify-between items-start">
          <h4 className="text-[14px] font-bold text-[#0f172a] leading-tight">{title}</h4>
          <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider" style={{ backgroundColor: `${statusColor}15`, color: statusColor }}>
            {status}
          </span>
        </div>
        <p className="text-[12px] text-[#64748b] leading-tight line-clamp-1">
          {description}
        </p>
        <p className="text-[11px] text-[#94a3b8] font-medium">{time}</p>
      </div>
    </div>
  );
}
