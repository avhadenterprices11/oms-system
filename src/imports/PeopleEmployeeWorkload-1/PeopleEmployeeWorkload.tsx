"use client";
import { useState } from "react";
import svgPaths from "./svg-mj6sggzpy7";

// --- Types & Data ---

interface EmployeeWorkload {
  id: string;
  name: string;
  role: string;
  dept: string;
  initial: string;
  gradient: string;
  projects: number;
  tasks: number;
  capacity: number; // Percentage
  status: 'Active' | 'On Leave' | 'Onboarding';
  trend: number[]; // Sparkline data
}

const employees: EmployeeWorkload[] = [
  { id: "1", name: "Ravi Kumar", role: "Full Stack Dev", dept: "Engineering", initial: "R", gradient: "from-indigo-400 to-blue-500", status: "Active", projects: 5, tasks: 28, capacity: 96, trend: [40, 60, 80, 96] },
  { id: "2", name: "Ashwini Reddy", role: "Senior Developer", dept: "Engineering", initial: "A", gradient: "from-purple-400 to-indigo-500", status: "Active", projects: 4, tasks: 24, capacity: 92, trend: [70, 85, 90, 92] },
  { id: "3", name: "Marcus Vane", role: "Lead Designer", dept: "Design", initial: "M", gradient: "from-blue-400 to-cyan-500", status: "Active", projects: 3, tasks: 18, capacity: 78, trend: [50, 65, 75, 78] },
  { id: "4", name: "Sarah Miller", role: "Frontend Engineer", dept: "Engineering", initial: "S", gradient: "from-emerald-400 to-teal-500", status: "Active", projects: 6, tasks: 32, capacity: 98, trend: [80, 90, 95, 98] },
  { id: "5", name: "David Chen", role: "Backend Architect", dept: "Engineering", initial: "D", gradient: "from-amber-400 to-orange-500", status: "Active", projects: 2, tasks: 14, capacity: 45, trend: [30, 40, 42, 45] },
  { id: "6", name: "Elena Rodriguez", role: "Product Designer", dept: "Design", initial: "E", gradient: "from-rose-400 to-pink-500", status: "On Leave", projects: 0, tasks: 0, capacity: 0, trend: [20, 10, 5, 0] },
  { id: "7", name: "Nina Okafor", role: "HR Specialist", dept: "Human Resources", initial: "N", gradient: "from-lime-400 to-green-500", status: "Active", projects: 1, tasks: 6, capacity: 32, trend: [25, 28, 30, 32] },
  { id: "8", name: "James Wilson", role: "DevOps Engineer", dept: "Engineering", initial: "J", gradient: "from-sky-400 to-blue-500", status: "Active", projects: 4, tasks: 21, capacity: 85, trend: [60, 75, 80, 85] },
];

// --- Components ---

const StatCard = ({ label, value, sub, color }: any) => (
  <div className="bg-white/60 backdrop-blur-md border border-slate-200/40 p-6 rounded-[32px] flex flex-col gap-4 group hover:shadow-xl hover:shadow-indigo-100/20 transition-all duration-500">
    <div className="flex items-center justify-between">
      <p className="text-[11px] font-black uppercase tracking-[2px] text-slate-400">{label}</p>
      <div className={`p-2 rounded-xl ${color} bg-opacity-10`}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
      </div>
    </div>
    <div>
      <h4 className="text-[32px] font-black text-[#0f172a] leading-none mb-1">{value}</h4>
      <p className="text-[12px] font-medium text-slate-500">{sub}</p>
    </div>
  </div>
);

const TABLE_GRID_TEMPLATE = "grid-cols-[1.5fr_1fr_0.8fr_0.8fr_1.5fr_1fr_auto]";

const WorkloadRow = ({ emp, idx }: { emp: EmployeeWorkload; idx: number }) => (
  <div className="group flex flex-col border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-both" style={{ animationDelay: `${idx * 40}ms` }}>
    <div className={`grid ${TABLE_GRID_TEMPLATE} items-center gap-6 px-8 py-5`}>
      {/* Specialist */}
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${emp.gradient} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
          {emp.initial}
        </div>
        <div>
          <h4 className="font-bold text-[#0f172a] text-[15px]">{emp.name}</h4>
          <p className="text-slate-400 text-[12px] font-medium">{emp.role}</p>
        </div>
      </div>

      {/* Department */}
      <div className="text-[13px] font-semibold text-slate-600">
        {emp.dept}
      </div>

      {/* Projects */}
      <div className="text-[14px] font-black text-[#0f172a]">
        {emp.projects}
      </div>

      {/* Tasks */}
      <div className="text-[14px] font-black text-[#0f172a]">
        {emp.tasks}
      </div>

      {/* Bandwidth Usage */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-1000 ${emp.capacity > 90 ? 'bg-rose-500' : emp.capacity > 75 ? 'bg-amber-500' : 'bg-emerald-500'}`} 
            style={{ width: `${emp.capacity}%` }} 
          />
        </div>
        <span className={`text-[13px] font-black min-w-[35px] ${emp.capacity > 90 ? 'text-rose-500' : 'text-slate-700'}`}>
          {emp.capacity}%
        </span>
      </div>

      {/* Status */}
      <div>
        <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[1px] ${emp.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'}`}>
          {emp.status}
        </span>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button title="Reassign Tasks" className="p-2.5 rounded-xl hover:bg-white hover:shadow-md hover:border-slate-200 border border-transparent transition-all group/btn">
          <svg className="w-5 h-5 text-slate-400 group-hover/btn:text-[#5048e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
        </button>
      </div>
    </div>
  </div>
);

export default function PeopleEmployeeWorkload() {
  return (
    <div className="bg-[#f8fafc] size-full overflow-hidden selection:bg-[#5048e5]/10 selection:text-[#5048e5]">
      {/* Cinematic Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#5048e5]/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#7c3aed]/5 blur-[140px] rounded-full" />
      </div>

      <main className="relative z-10 h-full overflow-y-auto custom-scrollbar p-12 scroll-smooth">
        <div className="max-w-[1400px] mx-auto pb-32">
          <header className="mb-16 flex flex-col xl:flex-row xl:items-end justify-between gap-12">
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-[#5048e5] rounded-full text-[11px] font-black uppercase tracking-[2px] mb-6 border border-indigo-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5048e5] animate-pulse" />
                Capacity Intelligence
              </div>
              <h1 className="font-['Inter:Black',sans-serif] font-black text-[56px] lg:text-[80px] text-[#0f172a] tracking-tight leading-[0.9] mb-8">
                Team<br />Workload<span className="text-[#5048e5]">.</span>
              </h1>
              <p className="text-[20px] lg:text-[24px] font-medium text-slate-500 max-w-2xl leading-relaxed">
                Monitor specialist bandwidth and optimize task distribution with real-time architectural insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-right-8 duration-1000">
              <StatCard label="Avg. Capacity" value="78%" sub="+4% from last week" color="text-indigo-600" />
              <StatCard label="Overloaded" value="03" sub="Requires immediate attention" color="text-rose-600" />
              <StatCard label="Tasks" value="152" sub="Currently in pipeline" color="text-emerald-600" />
            </div>
          </header>

          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 bg-white/40 backdrop-blur-md p-6 rounded-[32px] border border-slate-200/40">
            <div className="flex flex-wrap gap-4">
              {['Department', 'Role', 'Capacity Range'].map(filter => (
                <button key={filter} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200/60 font-bold text-[13px] text-slate-700 hover:border-[#5048e5] transition-all">
                  {filter}
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
              ))}
            </div>
            <button className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#5048e5] text-white font-bold text-[13px] hover:shadow-xl hover:shadow-indigo-200 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
              Optimize Distribution
            </button>
          </div>

          <div className="bg-white/60 backdrop-blur-xl border border-slate-200/40 rounded-[40px] overflow-hidden shadow-sm animate-in fade-in duration-700">
            {/* Table Header */}
            <div className={`grid ${TABLE_GRID_TEMPLATE} gap-6 px-8 py-6 bg-slate-50/50 border-b border-slate-200/40`}>
              {['Specialist', 'Department', 'Projects', 'Tasks', 'Bandwidth Usage', 'Status', ''].map((header, i) => (
                <div key={i} className={`text-[11px] font-black uppercase tracking-[2px] text-slate-400 ${i === 6 ? 'text-right' : ''}`}>
                  {header}
                </div>
              ))}
            </div>
            
            {/* Table Body */}
            <div className="max-h-[800px] overflow-y-auto custom-scrollbar">
              {employees.map((emp, idx) => (
                <WorkloadRow key={emp.id} emp={emp} idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
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
