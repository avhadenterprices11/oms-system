"use client";
import { useState } from "react";

// --- Types & Data ---

interface EmployeeNode {
  id: string;
  name: string;
  role: string;
  dept: string;
  initial: string;
  bgGradient: string;
  status?: string;
  reportsCount?: number;
  isExpanded?: boolean;
}

const ceo: EmployeeNode = {
  id: "ceo",
  name: "Sarah Mitchell",
  role: "CEO",
  dept: "Executive",
  initial: "S",
  bgGradient: "from-violet-300 to-violet-400",
};

const vps: EmployeeNode[] = [
  {
    id: "vp-ops",
    name: "Lisa Chen",
    role: "VP Operations",
    dept: "Operations",
    initial: "L",
    bgGradient: "from-pink-200 to-pink-300",
    reportsCount: 3,
  },
  {
    id: "vp-sales",
    name: "Tomas Garcia",
    role: "VP Sales",
    dept: "Sales",
    initial: "T",
    bgGradient: "from-teal-200 to-teal-300",
    reportsCount: 2,
  },
  {
    id: "vp-mktg",
    name: "Sanya Patel",
    role: "VP Marketing",
    dept: "Marketing",
    initial: "S",
    bgGradient: "from-emerald-200 to-emerald-300",
    reportsCount: 4,
  },
];

const subReports: EmployeeNode[] = [
  {
    id: "eng-1",
    name: "Jordan Lee",
    role: "Backend Engineer",
    dept: "Engineering",
    initial: "J",
    bgGradient: "from-violet-300 to-violet-400",
  },
  {
    id: "des-1",
    name: "Marcus Vane",
    role: "Lead Designer",
    dept: "Design",
    initial: "M",
    bgGradient: "from-blue-200 to-blue-300",
    status: "On Leave",
  },
  {
    id: "hr-1",
    name: "Nina Okafor",
    role: "HR Specialist",
    dept: "Human Resources",
    initial: "N",
    bgGradient: "from-lime-200 to-lime-300",
    status: "Onboarding",
  },
];

// --- Components ---

const EmployeeCard = ({ node, isCEO = false, isVP = false }: { node: EmployeeNode; isCEO?: boolean; isVP?: boolean }) => (
  <div className={`relative flex flex-col items-center bg-white border border-slate-200 rounded-[20px] p-5 shadow-sm transition-all hover:shadow-md ${isCEO ? 'w-[200px] border-l-4 border-l-indigo-500' : 'w-[170px]'}`}>
    {/* Avatar */}
    <div className={`flex items-center justify-center rounded-xl text-white font-bold mb-3 size-10 bg-gradient-to-br ${node.bgGradient}`}>
      {node.initial}
    </div>
    
    {/* Info */}
    <div className="text-center">
      <h4 className="text-[14px] font-bold text-slate-900 mb-0.5">{node.name}</h4>
      <p className="text-[11px] text-slate-400 font-medium mb-2">{node.role}</p>
      
      <span className="inline-block px-2.5 py-0.5 bg-slate-50 text-slate-500 text-[9px] font-bold rounded-full uppercase tracking-wider">
        {node.dept}
      </span>
    </div>

    {/* Status/Reports Badges */}
    {(node.status || node.reportsCount) && (
      <div className="mt-3 flex flex-col gap-1.5 items-center">
        {node.reportsCount && (
          <span className="px-2.5 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-full">
            +{node.reportsCount} reports
          </span>
        )}
        {node.status && (
          <span className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full ${
            node.status === 'On Leave' ? 'bg-amber-50 text-amber-600' : 'bg-indigo-50 text-indigo-600'
          }`}>
            {node.status}
          </span>
        )}
      </div>
    )}

    {/* Collapse Toggle (Visual) */}
    {(isCEO || isVP) && (
      <button className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border border-slate-200 rounded-lg flex items-center justify-center shadow-sm hover:bg-slate-50">
        <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
      </button>
    )}
  </div>
);

export default function PeopleOrgChart() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen font-['Inter',sans-serif] pb-20">
      {/* Header Section */}
      <div className="px-8 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-[32px] font-extrabold text-slate-900 tracking-tight mb-1">Organisation Chart</h1>
          <p className="text-slate-400 text-sm font-medium">Reporting structure across 6 departments</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex bg-white border border-slate-200 rounded-xl p-1 shadow-sm">
            <button className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-2">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" /></svg>
              Collapse All
            </button>
            <div className="w-[1px] bg-slate-100 my-1.5" />
            <button className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-2">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 11l7-7 7 7M5 19l7-7 7 7" /></svg>
              Expand All
            </button>
          </div>
          
          <button className="bg-white border border-slate-200 px-5 py-3 rounded-xl text-xs font-bold text-slate-600 shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
            Export
          </button>
          
          <button className="bg-indigo-600 px-6 py-3 rounded-xl text-xs font-bold text-white shadow-[0_10px_20px_-5px_rgba(79,70,229,0.3)] hover:bg-indigo-700 transition-all flex items-center gap-2">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
            Add Employee
          </button>
        </div>
      </div>

      {/* Org Chart Visualization */}
      <div className="px-8 overflow-x-auto">
        <div className="min-w-[1000px] flex flex-col items-center">
          
          {/* Level 1: CEO */}
          <div className="mb-12 relative">
            <EmployeeCard node={ceo} isCEO />
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1px] h-12 bg-slate-200" />
          </div>

          {/* Level 2: VPs */}
          <div className="relative pt-12 mb-12">
            {/* Horizontal Line connecting VPs */}
            <div className="absolute top-0 left-[16.6%] right-[16.6%] h-[1px] bg-slate-200" />
            
            <div className="flex justify-center gap-16">
              {vps.map((vp, index) => (
                <div key={vp.id} className="relative">
                  {/* Vertical line up to horizontal line */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-[1px] h-12 bg-slate-200" />
                  
                  <EmployeeCard node={vp} isVP />
                  
                  {/* Vertical line down to reports (if it's the first VP for demonstration) */}
                  {index === 0 && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1px] h-12 bg-slate-200" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Level 3: Sub Reports (for first VP) */}
          <div className="relative pt-12">
            {/* Horizontal Line connecting reports */}
            <div className="absolute top-0 left-[12.5%] right-[12.5%] h-[1px] bg-slate-200" />
            
            <div className="flex justify-center gap-12">
              {subReports.map(report => (
                <div key={report.id} className="relative">
                  {/* Vertical line up */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-[1px] h-12 bg-slate-200" />
                  <EmployeeCard node={report} />
                </div>
              ))}
              
              {/* Vacant Spot Placeholder */}
              <div className="relative">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-[1px] h-12 bg-slate-200" />
                <div className="w-[170px] h-[140px] border-2 border-dashed border-slate-200 rounded-[20px] flex items-center justify-center bg-slate-50/50">
                  <span className="text-[11px] font-bold text-slate-300 uppercase tracking-widest">Vacant Position</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
      `}} />
    </div>
  );
}