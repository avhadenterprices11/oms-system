"use client";
import { useState } from "react";


// --- Types & Data ---

interface Employee {
  name: string;
  role: string;
  dept: string;
  initial: string;
  gradient: string;
  status: 'Active' | 'On Leave' | 'Onboarding';
  projects: number;
  tasks: number;
  capacity: number;
}

const employees: Employee[] = [
  { name: "Ravi Kumar", role: "Full Stack Dev", dept: "Engineering", initial: "R", gradient: "from-indigo-400 to-blue-500", status: "Active", projects: 5, tasks: 28, capacity: 96 },
  { name: "Ashwini Reddy", role: "Senior Developer", dept: "Engineering", initial: "A", gradient: "from-purple-400 to-indigo-500", status: "Active", projects: 4, tasks: 24, capacity: 92 },
  { name: "Marcus Vane", role: "Lead Designer", dept: "Design", initial: "M", gradient: "from-blue-400 to-cyan-500", status: "Active", projects: 3, tasks: 18, capacity: 78 },
  { name: "Sarah Miller", role: "Frontend Engineer", dept: "Engineering", initial: "S", gradient: "from-emerald-400 to-teal-500", status: "Active", projects: 6, tasks: 32, capacity: 98 },
  { name: "David Chen", role: "Backend Architect", dept: "Engineering", initial: "D", gradient: "from-amber-400 to-orange-500", status: "Active", projects: 2, tasks: 14, capacity: 45 },
  { name: "Elena Rodriguez", role: "Product Designer", dept: "Design", initial: "E", gradient: "from-rose-400 to-pink-500", status: "On Leave", projects: 0, tasks: 0, capacity: 0 },
  { name: "Nina Okafor", role: "HR Specialist", dept: "Human Resources", initial: "N", gradient: "from-lime-400 to-green-500", status: "Active", projects: 1, tasks: 6, capacity: 32 },
  { name: "James Wilson", role: "DevOps Engineer", dept: "Engineering", initial: "J", gradient: "from-sky-400 to-blue-500", status: "Active", projects: 4, tasks: 21, capacity: 85 },
];

// --- Components ---





const StatCard = ({ label, value, color }: any) => (
  <div className="bg-white/60 backdrop-blur-md border border-slate-200/40 p-5 rounded-[28px] flex items-center gap-4 group hover:shadow-xl hover:shadow-indigo-100/20 transition-all duration-500 cursor-default">
    <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center font-black text-xl shadow-lg`}>
      {value}
    </div>
    <div>
      <p className="text-[11px] font-black uppercase tracking-[2px] text-slate-400 leading-none mb-1">{label}</p>
      <div className="h-1 w-8 bg-slate-100 rounded-full overflow-hidden">
         <div className="h-full bg-indigo-500 w-2/3 group-hover:w-full transition-all duration-1000" />
      </div>
    </div>
  </div>
);

const EmployeeCard = ({ emp, idx }: { emp: Employee; idx: number }) => (
  <div className="group relative bg-white/60 backdrop-blur-xl border border-slate-200/40 rounded-[40px] p-8 hover:shadow-[0_32px_64px_-12px_rgba(80,72,229,0.12)] transition-all duration-700 animate-in fade-in slide-in-from-bottom-8 fill-mode-both" style={{ animationDelay: `${idx * 50}ms` }}>
    <div className="absolute top-6 right-8">
       <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[2px] ${emp.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'}`}>
          {emp.status}
       </div>
    </div>

    <div className="flex flex-col items-center text-center mt-4">
       <div className="relative mb-6">
          <div className={`absolute -inset-2 bg-gradient-to-br ${emp.gradient} rounded-[32px] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
          <div className={`relative w-24 h-24 rounded-[30px] bg-gradient-to-br ${emp.gradient} flex items-center justify-center text-white font-black text-[36px] shadow-2xl group-hover:scale-105 transition-transform duration-700`}>
             {emp.initial}
          </div>
       </div>
       
       <h3 className="font-['Inter:Black',sans-serif] font-black text-[24px] text-[#0f172a] tracking-tight group-hover:text-[#5048e5] transition-colors">{emp.name}</h3>
       <p className="text-[14px] font-medium text-slate-500 mt-1 mb-6">{emp.role}</p>
       
       <div className="flex gap-2 mb-8">
          <span className="px-3 py-1 bg-slate-100/80 rounded-lg text-[11px] font-bold text-slate-500 uppercase tracking-wide">{emp.dept}</span>
       </div>

       <div className="w-full grid grid-cols-3 gap-2 bg-slate-50/50 rounded-3xl p-6 border border-slate-100">
          <div>
             <p className="text-[18px] font-black text-[#0f172a]">{emp.projects}</p>
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Projects</p>
          </div>
          <div className="border-x border-slate-200/60">
             <p className="text-[18px] font-black text-[#0f172a]">{emp.tasks}</p>
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Tasks</p>
          </div>
          <div>
             <p className={`text-[18px] font-black ${emp.capacity > 90 ? 'text-rose-500' : 'text-emerald-500'}`}>{emp.capacity}%</p>
             <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Capacity</p>
          </div>
       </div>
       
       <button className="mt-8 w-full py-4 bg-white border border-slate-200/60 rounded-2xl font-bold text-[13px] text-slate-700 hover:bg-[#5048e5] hover:text-white hover:border-[#5048e5] hover:shadow-xl hover:shadow-indigo-100 transition-all duration-300">
          View Specialist Profile
       </button>
    </div>
  </div>
);

// --- Main Page ---

export default function PeopleEmployeeDirectory() {
  return (
    <div className="bg-[#f8fafc] flex h-screen overflow-hidden selection:bg-[#5048e5]/10 selection:text-[#5048e5]">
      {/* Cinematic Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#5048e5]/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#7c3aed]/5 blur-[140px] rounded-full" />
      </div>

      <div className="flex-1 flex flex-col relative z-10 overflow-hidden">

        
        <main className="flex-1 overflow-y-auto custom-scrollbar p-12 scroll-smooth">
           <div className="max-w-[1400px] mx-auto pb-32">
              <header className="mb-16 flex flex-col xl:flex-row xl:items-end justify-between gap-12">
                 <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-[#5048e5] rounded-full text-[11px] font-black uppercase tracking-[2px] mb-6 border border-indigo-100">
                       <span className="w-1.5 h-1.5 rounded-full bg-[#5048e5] animate-pulse" />
                       Human Capital Interface
                    </div>
                    <h1 className="font-['Inter:Black',sans-serif] font-black text-[56px] lg:text-[80px] text-[#0f172a] tracking-tight leading-[0.9] mb-8">
                       Employee<br />Directory<span className="text-[#5048e5]">.</span>
                    </h1>
                    <p className="text-[20px] lg:text-[24px] font-medium text-slate-500 max-w-2xl leading-relaxed">
                       Orchestrate your high-performance collective with precision and architectural clarity.
                    </p>
                 </div>

                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in slide-in-from-right-8 duration-1000">
                    <StatCard label="Total" value="24" color="bg-indigo-50 text-indigo-600 shadow-indigo-100" />
                    <StatCard label="Active" value="20" color="bg-emerald-50 text-emerald-600 shadow-emerald-100" />
                    <StatCard label="Leave" value="02" color="bg-rose-50 text-rose-600 shadow-rose-100" />
                    <StatCard label="New" value="02" color="bg-amber-50 text-amber-600 shadow-amber-100" />
                 </div>
              </header>

              <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 bg-white/40 backdrop-blur-md p-6 rounded-[32px] border border-slate-200/40">
                 <div className="flex flex-wrap gap-4">
                    {['Department', 'Role', 'Status'].map(filter => (
                      <button key={filter} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200/60 font-bold text-[13px] text-slate-700 hover:border-[#5048e5] transition-all">
                        {filter}
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </button>
                    ))}
                 </div>
                 <div className="flex gap-2 p-1.5 bg-slate-100/50 rounded-2xl border border-slate-200/40">
                    <button className="px-6 py-2.5 rounded-xl bg-white shadow-sm text-[#0f172a] font-bold text-[13px]">Grid View</button>
                    <button className="px-6 py-2.5 rounded-xl text-slate-500 font-bold text-[13px] hover:text-slate-700">List View</button>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                 {employees.map((emp, idx) => (
                    <EmployeeCard key={idx} emp={emp} idx={idx} />
                 ))}
              </div>
           </div>
        </main>
      </div>

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