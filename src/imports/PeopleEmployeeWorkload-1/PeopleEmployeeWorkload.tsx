"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

// --- Types & Data ---

interface EmployeeWorkload {
  id: string;
  name: string;
  role: string;
  dept: string;
  initial: string;
  bgClass: string;
  projects: number;
  tasks: number;
  overdueText?: string;
  capacity: number; // Percentage
  status: 'Overloaded' | 'Balanced' | 'Optimal' | 'Available';
  deadlineDate: string;
  deadlineTitle: string;
  onLeave?: boolean;
}

const employees: EmployeeWorkload[] = [
  { id: "1", name: "Ravi Kumar", role: "Full Stack Dev", dept: "Engineering", initial: "R", bgClass: "bg-red-100 text-red-500", projects: 5, tasks: 28, overdueText: "3 overdue", capacity: 96, status: "Overloaded", deadlineDate: "Oct 25", deadlineTitle: "Sprint Delivery" },
  { id: "2", name: "Ashwini Reddy", role: "Senior Developer", dept: "Engineering", initial: "A", bgClass: "bg-orange-100 text-orange-400", projects: 4, tasks: 24, overdueText: "2 overdue", capacity: 92, status: "Overloaded", deadlineDate: "Oct 26", deadlineTitle: "API Integration" },
  { id: "3", name: "Marcus Vane", role: "Lead Designer", dept: "Design", initial: "M", bgClass: "bg-blue-100 text-blue-400", projects: 3, tasks: 18, overdueText: "1 blocked", capacity: 78, status: "Balanced", deadlineDate: "Oct 24", deadlineTitle: "Final UI Prototypes", onLeave: true },
  { id: "4", name: "Lisa Chen", role: "Ops Manager", dept: "Operations", initial: "L", bgClass: "bg-pink-100 text-pink-400", projects: 3, tasks: 15, overdueText: "0 overdue", capacity: 72, status: "Balanced", deadlineDate: "Oct 30", deadlineTitle: "Q3 Report" },
  { id: "5", name: "Jordan Lee", role: "Backend Engineer", dept: "Engineering", initial: "J", bgClass: "bg-purple-100 text-purple-400", projects: 2, tasks: 12, overdueText: "0 overdue", capacity: 65, status: "Optimal", deadlineDate: "Oct 27", deadlineTitle: "Database Migration" },
  { id: "6", name: "Tomas Garcia", role: "Account Executive", dept: "Sales", initial: "T", bgClass: "bg-teal-100 text-teal-400", projects: 2, tasks: 10, overdueText: "0 overdue", capacity: 55, status: "Optimal", deadlineDate: "Nov 01", deadlineTitle: "Proposal Review" },
  { id: "7", name: "Sanya Patel", role: "Content Strategist", dept: "Marketing", initial: "S", bgClass: "bg-green-100 text-green-400", projects: 1, tasks: 8, overdueText: "0 overdue", capacity: 42, status: "Available", deadlineDate: "Nov 05", deadlineTitle: "Campaign Brief" },
  { id: "8", name: "Nina Okafor", role: "HR Specialist", dept: "HR", initial: "N", bgClass: "bg-lime-100 text-lime-400", projects: 1, tasks: 6, overdueText: "0 overdue", capacity: 32, status: "Available", deadlineDate: "Nov 08", deadlineTitle: "Onboarding Review" },
];

// --- Components ---

const StatCard = ({ label, value, badge, badgeColor, icon, iconBg }: any) => (
  <div className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100 relative group hover:shadow-xl transition-all duration-300">
    <div className={`absolute top-8 right-8 px-3 py-1 rounded-full text-[10px] font-bold ${badgeColor}`}>
      {badge}
    </div>
    <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center mb-6`}>
      {icon}
    </div>
    <p className="text-sm font-medium text-slate-400 mb-1">{label}</p>
    <h4 className="text-[32px] font-extrabold text-slate-900 leading-none">{value}</h4>
  </div>
);

const FilterButton = ({ 
  label, 
  icon, 
  options, 
  value, 
  onSelect 
}: { 
  label: string; 
  icon?: React.ReactNode; 
  options?: string[];
  value?: string;
  onSelect?: (val: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2.5 border rounded-xl text-[13px] font-semibold transition-all shadow-sm ${isOpen || (value && !value.includes("All") && value !== label) ? "bg-indigo-50 border-indigo-200 text-[#5D5FEF]" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`}
      >
        {icon}
        {value || label}
        <svg className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-100 rounded-2xl shadow-xl z-20 py-2 animate-in fade-in zoom-in-95 duration-200">
            {options?.map(opt => (
              <button
                key={opt}
                onClick={() => {
                  onSelect?.(opt);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-sm font-bold transition-colors ${value === opt ? "text-[#5D5FEF] bg-indigo-50/50" : "text-slate-600 hover:bg-slate-50"}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const TABLE_GRID_TEMPLATE = "grid-cols-[2fr_1.2fr_0.8fr_1fr_1.5fr_1.2fr_1.5fr_0.5fr]";

const WorkloadRow = ({ emp }: { emp: EmployeeWorkload }) => {
  const statusColors = {
    'Overloaded': 'bg-red-50 text-red-500 border-red-100',
    'Balanced': 'bg-orange-50 text-orange-500 border-orange-100',
    'Optimal': 'bg-blue-50 text-blue-500 border-blue-100',
    'Available': 'bg-green-50 text-green-500 border-green-100'
  };

  const progressColors = {
    'Overloaded': 'bg-red-500',
    'Balanced': 'bg-orange-400',
    'Optimal': 'bg-blue-500',
    'Available': 'bg-green-500'
  };

  return (
    <div className="group grid items-center border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-all duration-300">
      <div className={`grid ${TABLE_GRID_TEMPLATE} items-center gap-4 px-8 py-5`}>
        {/* Employee */}
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl ${emp.bgClass} flex items-center justify-center font-bold text-sm flex-shrink-0`}>
            {emp.initial}
          </div>
          <div>
            <div className="flex items-center gap-2">
               <h4 className="font-bold text-slate-900 text-[15px]">{emp.name}</h4>
               {emp.onLeave && <span className="bg-orange-100 text-orange-500 text-[8px] font-black uppercase px-1.5 py-0.5 rounded-md">On Leave</span>}
            </div>
            <p className="text-slate-400 text-[12px] font-medium">{emp.dept}</p>
          </div>
        </div>

        {/* Role */}
        <div className="text-[13px] font-semibold text-slate-600 leading-tight">
          {emp.role}
        </div>

        {/* Projects */}
        <div className="text-[14px] font-bold text-blue-600">
          {emp.projects}
        </div>

        {/* Tasks */}
        <div>
          <div className="flex items-baseline gap-1">
             <span className="text-[14px] font-bold text-slate-900">{emp.tasks}</span>
             {emp.overdueText && <span className={`text-[10px] font-medium ${emp.overdueText.includes('overdue') || emp.overdueText.includes('blocked') ? 'text-red-400' : 'text-slate-300'}`}>({emp.overdueText})</span>}
          </div>
        </div>

        {/* Capacity */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className={`h-full ${progressColors[emp.status]}`} 
              style={{ width: `${emp.capacity}%` }} 
            />
          </div>
          <span className={`text-[13px] font-bold min-w-[35px] ${emp.capacity > 90 ? 'text-red-500' : 'text-slate-700'}`}>
            {emp.capacity}%
          </span>
        </div>

        {/* Status */}
        <div>
          <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold border ${statusColors[emp.status]}`}>
            {emp.status}
          </span>
        </div>

        {/* Next Deadline */}
        <div>
           <p className="text-[13px] font-bold text-slate-900">{emp.deadlineDate}</p>
           <p className="text-[11px] font-medium text-slate-400">{emp.deadlineTitle}</p>
        </div>

        {/* Selection */}
        <div className="flex justify-end">
           <div className="w-5 h-5 rounded-md border-2 border-slate-200" />
        </div>
      </div>
    </div>
  );
};

export default function PeopleEmployeeWorkload() {
  const router = useRouter();
  const pathname = usePathname();
  const [showOnLeave, setShowOnLeave] = useState(false);
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    dept: "All Departments",
    status: "All Statuses",
    manager: "All Managers"
  });

  const departments = ["All Departments", "Engineering", "Design", "Operations", "Sales", "Marketing", "HR"];
  const statuses = ["All Statuses", "Overloaded", "Balanced", "Optimal", "Available"];
  const managers = ["All Managers", "Ashwini Reddy", "Marcus Vane", "Lisa Chen"];

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(search.toLowerCase()) || 
                         emp.role.toLowerCase().includes(search.toLowerCase());
    const matchesDept = activeFilters.dept === "All Departments" || emp.dept === activeFilters.dept;
    const matchesStatus = activeFilters.status === "All Statuses" || emp.status === activeFilters.status;
    const matchesLeave = !showOnLeave || emp.onLeave;

    return matchesSearch && matchesDept && matchesStatus && matchesLeave;
  });

  return (
    <div className="bg-[#F9FAFB] min-h-screen font-['Inter',sans-serif]">
      <main className="max-w-[1400px] mx-auto px-8 py-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-[13px] font-bold text-slate-400 mb-6">
              <span 
                onClick={() => router.push("/people")} 
                className="cursor-pointer hover:text-[#5D5FEF] transition-colors"
              >
                People
              </span>
              <span>/</span>
              <span className="text-slate-900">Workload</span>
            </div>
            <h1 className="text-[40px] font-extrabold text-slate-900 tracking-tight mb-2">Employee Workload</h1>
            <p className="text-slate-400 font-medium text-lg">Showing workload for {filteredEmployees.length} employees.</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-5 py-2.5 border rounded-xl text-sm font-bold transition-all shadow-sm ${showFilters ? "bg-[#5D5FEF] text-white border-[#5D5FEF]" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>
              {showFilters ? "Hide Filters" : "Filters"}
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M16 10l-4 4m0 0l-4-4m4 4V4" /></svg>
              Export
            </button>
            <button 
              onClick={() => router.push("/people/directory?view=add")}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#5D5FEF] text-white rounded-xl text-sm font-bold hover:bg-[#4D4FCF] transition-all shadow-lg shadow-indigo-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
              Add Employee
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard 
            label="Total Employees" 
            value="24" 
            badge="+3" 
            badgeColor="bg-green-50 text-green-500" 
            iconBg="bg-indigo-50 text-[#5D5FEF]"
            icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
          />
          <StatCard 
            label="Total Active Tasks" 
            value="312" 
            badge="Stable" 
            badgeColor="bg-slate-100 text-slate-500" 
            iconBg="bg-green-50 text-green-500"
            icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>}
          />
          <StatCard 
            label="Avg Capacity" 
            value="72%" 
            badge="+5%" 
            badgeColor="bg-green-50 text-green-500" 
            iconBg="bg-blue-50 text-blue-500"
            icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
          <StatCard 
            label="Overloaded" 
            value="4" 
            badge="Action Needed" 
            badgeColor="bg-red-50 text-red-500" 
            iconBg="bg-red-50 text-red-500"
            icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>}
          />
        </div>

        {/* Filter Bar */}
        {showFilters && (
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-8 animate-in slide-in-from-left-4 fade-in duration-300">
          <div className="flex flex-wrap items-center gap-3">
            <FilterButton 
              label="Department" 
              options={departments}
              value={activeFilters.dept}
              onSelect={(val) => setActiveFilters(prev => ({ ...prev, dept: val }))}
              icon={<svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" /></svg>} 
            />
            <FilterButton 
              label="Status" 
              options={statuses}
              value={activeFilters.status}
              onSelect={(val) => setActiveFilters(prev => ({ ...prev, status: val }))}
              icon={<svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} 
            />
            <FilterButton 
              label="Manager" 
              options={managers}
              value={activeFilters.manager}
              onSelect={(val) => setActiveFilters(prev => ({ ...prev, manager: val }))}
              icon={<svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} 
            />

            {(activeFilters.dept !== "All Departments" || activeFilters.status !== "All Statuses" || activeFilters.manager !== "All Managers") && (
              <button 
                onClick={() => setActiveFilters({ dept: "All Departments", status: "All Statuses", manager: "All Managers" })}
                className="text-xs font-bold text-[#5D5FEF] hover:underline px-2"
              >
                Clear All
              </button>
            )}
            
            <div className="h-6 w-px bg-slate-200 mx-2 hidden md:block" />
            
            <div className="flex items-center gap-3">
               <div 
                 onClick={() => setShowOnLeave(!showOnLeave)}
                 className={`w-10 h-5 rounded-full relative cursor-pointer transition-all ${showOnLeave ? 'bg-[#5D5FEF]' : 'bg-slate-200'}`}
               >
                 <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${showOnLeave ? 'left-6' : 'left-1'}`} />
               </div>
               <span className="text-[13px] font-semibold text-slate-600">Show on leave</span>
            </div>
          </div>

          <div className="relative flex-1 max-w-md">
            <input 
              type="text" 
              placeholder="Search by name..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl px-12 py-2.5 text-sm outline-none focus:border-[#5D5FEF] transition-all"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-sm">
          <div className={`grid ${TABLE_GRID_TEMPLATE} gap-4 px-8 py-6 bg-slate-50/50 border-b border-slate-200`}>
            {[
              { label: 'EMPLOYEE', sortable: true },
              { label: 'ROLE', sortable: false },
              { label: 'PROJECTS', sortable: true },
              { label: 'TASKS', sortable: true },
              { label: 'CAPACITY', sortable: true },
              { label: 'STATUS', sortable: false },
              { label: 'NEXT DEADLINE', sortable: false },
              { label: '', sortable: false }
            ].map((header, i) => (
              <div key={i} className="flex items-center gap-1">
                <span className="text-[11px] font-black uppercase tracking-[2.5px] text-slate-400">{header.label}</span>
                {header.sortable && (
                  <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7 16l5 5m0 0l5-5m-5 5V3" /></svg>
                )}
              </div>
            ))}
          </div>
          
          <div className="overflow-y-auto">
            {filteredEmployees.map((emp) => (
              <WorkloadRow key={emp.id} emp={emp} />
            ))}
          </div>
        </div>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
      `}} />
    </div>
  );
}
