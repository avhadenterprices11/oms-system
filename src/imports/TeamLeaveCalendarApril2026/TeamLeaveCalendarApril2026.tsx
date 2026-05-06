"use client";
import { useState } from "react";

// --- Types & Data ---

interface LeaveEvent {
  memberId: string;
  start: number;
  end: number;
  type: 'approved' | 'pending' | 'holiday';
}

const members = [
  { id: "1", name: "Ravi Kumar" },
  { id: "2", name: "Marcus Vane" },
  { id: "3", name: "Nina Okafor" },
  { id: "4", name: "Lisa Chen" },
  { id: "5", name: "Sanya Patel" },
  { id: "6", name: "David Park" },
  { id: "7", name: "Tomas Garcia" },
  { id: "8", name: "Ashwini Reddy" },
];

const leaveEvents: LeaveEvent[] = [
  { memberId: "1", start: 9, end: 10, type: 'approved' },
  { memberId: "2", start: 12, end: 15, type: 'approved' },
  { memberId: "3", start: 19, end: 19, type: 'pending' },
  // Holiday on the 16th for everyone
  ...members.map(m => ({ memberId: m.id, start: 16, end: 16, type: 'holiday' as const })),
];

const days = Array.from({ length: 28 }, (_, i) => i + 1);
const weekends = [4, 5, 11, 12, 18, 19, 25, 26];

// --- Components ---

const SidebarCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 mb-6 last:mb-0">
    <h4 className="text-[15px] font-bold text-slate-900 mb-4">{title}</h4>
    {children}
  </div>
);

export default function TeamLeaveCalendarApril2026() {
  return (
    <div className="bg-[#F9FAFB] h-auto font-['Inter',sans-serif]">
      <main className="max-w-[1400px] mx-auto px-8 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-[28px] font-extrabold text-slate-900 tracking-tight mb-4">Team Leave Calendar</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <span className="text-lg font-bold text-slate-900">April 2026</span>
            <button className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="bg-[#FFFBEB] border border-[#FEF3C7] rounded-xl p-3 mb-6 flex items-center gap-3">
          <svg className="w-5 h-5 text-[#D97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <p className="text-[#92400E] text-xs font-medium">Apr 14–15: 2/8 Engineering team members off. Coverage may be impacted.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Calendar Area */}
          <div className="flex-1 bg-white border border-slate-200 rounded-[24px] p-6 shadow-sm">
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                {/* Timeline Header */}
                <div className="grid grid-cols-[200px_1fr] mb-4">
                  <div className="text-[11px] font-black uppercase tracking-[1px] text-slate-400">Team Member</div>
                  <div className="flex justify-between">
                    {days.map(day => (
                      <div key={day} className="w-full text-center text-[10px] font-bold text-slate-400">
                        {day}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rows */}
                {members.map(member => (
                  <div key={member.id} className="grid grid-cols-[200px_1fr] border-b border-slate-50 last:border-0 py-2.5">
                    <div className="text-[13px] font-bold text-slate-900 flex items-center">
                      {member.name}
                    </div>
                    <div className="flex justify-between relative h-8">
                      {days.map(day => (
                        <div 
                          key={day} 
                          className={`w-full border-r border-slate-50 last:border-0 h-full ${weekends.includes(day) ? 'bg-slate-50/50' : ''}`}
                        >
                          {/* Leave Event Blocks */}
                          {leaveEvents
                            .filter(e => e.memberId === member.id && day >= e.start && day <= e.end)
                            .map((e, idx) => (
                              <div 
                                key={idx}
                                className={`absolute h-8 top-1 rounded-md z-10 ${
                                  e.type === 'approved' ? 'bg-[#D1FAE5]' : 
                                  e.type === 'pending' ? 'bg-[#FEF3C7]' : 
                                  'bg-[#DBEAFE]'
                                }`}
                                style={{
                                  left: `${((day - 1) / 28) * 100}%`,
                                  width: `${((e.end - e.start + 1) / 28) * 100}%`
                                }}
                              />
                            ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#D1FAE5] rounded shadow-sm" />
                <span className="text-xs font-semibold text-slate-500">Approved Leave</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#FEF3C7] rounded shadow-sm" />
                <span className="text-xs font-semibold text-slate-500">Pending</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#DBEAFE] rounded shadow-sm" />
                <span className="text-xs font-semibold text-slate-500">Holiday</span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-[320px]">
            <SidebarCard title="Leave Summary">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-medium text-slate-400">Total days off</span>
                  <span className="text-[14px] font-bold text-slate-900">10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-medium text-slate-400">Pending requests</span>
                  <span className="text-[14px] font-bold text-orange-500">1</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-50 pb-3">
                  <span className="text-[12px] font-medium text-slate-400">Conflicts</span>
                  <span className="text-[14px] font-bold text-red-500">1</span>
                </div>
                <button className="text-[12px] font-bold text-[#5D5FEF] hover:underline">Leave Policies</button>
              </div>
            </SidebarCard>

            <SidebarCard title="Conflict Details">
              <p className="text-[13px] leading-relaxed text-slate-600">
                <span className="font-bold text-red-500">Apr 14–15:</span> Marcus Vane + reduced team. Engineering coverage at 75%.
              </p>
            </SidebarCard>

            <SidebarCard title="Upcoming Holiday">
              <div className="space-y-1">
                <p className="text-[13px] font-bold text-slate-900">Apr 18 — Good Friday</p>
                <p className="text-[12px] font-medium text-slate-400">Company-wide holiday</p>
              </div>
            </SidebarCard>
          </div>
        </div>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
      `}} />
    </div>
  );
}