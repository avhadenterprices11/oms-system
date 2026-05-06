"use client";
import { useState } from "react";

// --- Types & Data ---

interface Employee {
  name: string;
  role: string;
  dept: string;
  initial: string;
  bgClass: string;
  status: 'Active' | 'On Leave' | 'Onboarding';
  projects: number;
  tasks: number;
  capacity: number;
  capacityColor: string;
}

const employees: Employee[] = [
  { name: "Ravi Kumar", role: "Full Stack Dev", dept: "Engineering", initial: "R", bgClass: "bg-red-100 text-red-500", status: "Active", projects: 5, tasks: 28, capacity: 96, capacityColor: "text-red-500" },
  { name: "Ashwini Reddy", role: "Senior Developer", dept: "Engineering", initial: "A", bgClass: "bg-orange-100 text-orange-500", status: "Active", projects: 4, tasks: 24, capacity: 92, capacityColor: "text-red-500" },
  { name: "Marcus Vane", role: "Lead Designer", dept: "Design", initial: "M", bgClass: "bg-blue-100 text-blue-500", status: "On Leave", projects: 3, tasks: 18, capacity: 78, capacityColor: "text-orange-500" },
  { name: "Lisa Chen", role: "Ops Manager", dept: "Operations", initial: "L", bgClass: "bg-pink-100 text-pink-500", status: "Active", projects: 3, tasks: 15, capacity: 72, capacityColor: "text-orange-500" },
  { name: "Jordan Lee", role: "Backend Engineer", dept: "Engineering", initial: "J", bgClass: "bg-purple-100 text-purple-500", status: "Active", projects: 2, tasks: 12, capacity: 65, capacityColor: "text-blue-500" },
  { name: "Tomas Garcia", role: "Account Executive", dept: "Sales", initial: "T", bgClass: "bg-teal-100 text-teal-500", status: "Active", projects: 2, tasks: 10, capacity: 55, capacityColor: "text-blue-500" },
  { name: "Sanya Patel", role: "Content Strategist", dept: "Marketing", initial: "S", bgClass: "bg-green-100 text-green-500", status: "Active", projects: 1, tasks: 8, capacity: 42, capacityColor: "text-green-500" },
  { name: "Nina Okafor", role: "HR Specialist", dept: "HR", initial: "N", bgClass: "bg-lime-100 text-lime-500", status: "Onboarding", projects: 1, tasks: 6, capacity: 32, capacityColor: "text-green-500" },
];

// --- Components ---

const NavTab = ({ label, active = false }: { label: string; active?: boolean }) => (
  <button className={`px-6 py-4 text-sm font-semibold relative transition-colors ${active ? "text-[#5D5FEF]" : "text-slate-500 hover:text-slate-700"}`}>
    {label}
    {active && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5D5FEF]" />}
  </button>
);

const FilterButton = ({ label, icon }: { label: string; icon?: React.ReactNode }) => (
  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
    {icon}
    {label}
    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
  </button>
);

const StatusBadge = ({ label, count }: { label: string; count: number }) => (
  <button className="px-6 py-2 rounded-full text-xs font-semibold flex items-center gap-2 bg-white border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-slate-900 hover:border-[#5D5FEF] transition-all group">
    <span className="font-bold text-[#0f172a] group-hover:text-[#5D5FEF]">{count}</span>
    <span className="text-slate-500 group-hover:text-slate-900">{label}</span>
  </button>
);

const EmployeeCard = ({ emp }: { emp: Employee }) => {
  const statusColors = {
    'Active': 'bg-green-100 text-green-600',
    'On Leave': 'bg-orange-100 text-orange-600',
    'Onboarding': 'bg-indigo-100 text-indigo-600'
  };

  return (
    <div className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="w-full flex justify-end mb-2">
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${statusColors[emp.status]}`}>
          {emp.status}
        </span>
      </div>
      
      <div className={`w-20 h-20 rounded-full ${emp.bgClass} flex items-center justify-center text-3xl font-bold mb-6`}>
        {emp.initial}
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-1">{emp.name}</h3>
      <p className="text-sm font-medium text-slate-400 mb-4">{emp.role}</p>
      
      <div className="px-4 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-8">
        {emp.dept}
      </div>

      <div className="w-full grid grid-cols-3 gap-4 mb-8">
        <div className="text-center">
          <p className="text-lg font-bold text-slate-900">{emp.projects}</p>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Projects</p>
        </div>
        <div className="text-center border-x border-slate-100">
          <p className="text-lg font-bold text-slate-900">{emp.tasks}</p>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Tasks</p>
        </div>
        <div className="text-center">
          <p className={`text-lg font-bold ${emp.capacityColor}`}>{emp.capacity}%</p>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Capacity</p>
        </div>
      </div>

      <button className="text-sm font-bold text-[#5D5FEF] hover:underline transition-all">
        View Profile
      </button>
    </div>
  );
};

export default function PeopleEmployeeDirectory() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-[#F9FAFB] min-h-screen font-['Inter',sans-serif]">
      <main className="max-w-[1400px] mx-auto px-8 py-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-[40px] font-extrabold text-slate-900 tracking-tight mb-2">Employee Directory</h1>
            <p className="text-slate-400 font-medium">24 employees across 6 departments</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>
              Filters
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-[#5D5FEF] text-white rounded-xl text-sm font-bold hover:bg-[#4D4FCF] transition-all shadow-lg shadow-indigo-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
              Add Employee
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <FilterButton 
              label="Department" 
              icon={<svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" /></svg>} 
            />
            <FilterButton 
              label="Role" 
              icon={<svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} 
            />
            <FilterButton 
              label="Status" 
              icon={<svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} 
            />
          </div>

          <div className="relative flex-1 max-w-md">
            <input 
              type="text" 
              placeholder="Search employees..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl px-12 py-2.5 text-sm outline-none focus:border-[#5D5FEF] transition-all"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>

        {/* Status Counters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <StatusBadge label="Total" count={24} />
          <StatusBadge label="Active" count={20} />
          <StatusBadge label="On Leave" count={2} />
          <StatusBadge label="Onboarding" count={2} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {employees.map((emp, i) => (
            <EmployeeCard key={i} emp={emp} />
          ))}
        </div>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
      `}} />
    </div>
  );
}