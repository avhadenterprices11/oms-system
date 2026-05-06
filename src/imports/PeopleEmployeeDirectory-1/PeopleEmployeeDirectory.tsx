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

const EmployeeCard = ({ emp, onEdit }: { emp: Employee, onEdit: () => void }) => {
  const statusColors = {
    'Active': 'bg-green-100 text-green-600',
    'On Leave': 'bg-orange-100 text-orange-600',
    'Onboarding': 'bg-indigo-100 text-indigo-600'
  };

  return (
    <div className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
      <div className="w-full flex justify-between items-center mb-2">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          className="p-2 text-slate-300 hover:text-[#5D5FEF] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
        </button>
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

      <div className="flex items-center gap-4">
        <button className="text-[12px] font-black text-[#5D5FEF] hover:underline transition-all">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default function PeopleEmployeeDirectory() {
  const [search, setSearch] = useState("");
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [showEditEmployee, setShowEditEmployee] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  if (showAddEmployee) {
    if (showSuccess) {
      return (
        <div className="bg-[#F9FAFB] min-h-screen font-['Inter',sans-serif] flex items-center justify-center p-8">
          <div className="bg-white border border-slate-200 rounded-[32px] p-12 shadow-2xl shadow-indigo-100 max-w-[480px] w-full text-center">
            {/* Success Icon */}
            <div className="size-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8">
              <div className="size-12 bg-emerald-100 rounded-full flex items-center justify-center animate-bounce">
                <svg className="size-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-[24px] font-black text-slate-900 mb-2">Employee Created Successfully</h2>
            <p className="text-slate-400 font-bold text-sm mb-10">Ravi Kumar has been added to the system.</p>

            {/* Info Grid */}
            <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6 mb-10 text-left">
              <div className="space-y-4">
                {[
                  { label: "Role", val: "Full Stack Developer" },
                  { label: "Department", val: "Engineering" },
                  { label: "Reports To", val: "Ashwini Reddy" },
                  { label: "Start Date", val: "Apr 1, 2026" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center">
                    <span className="text-[12px] font-bold text-slate-400">{row.label}</span>
                    <span className="text-[13px] font-black text-slate-900">{row.val}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                  <span className="text-[12px] font-bold text-slate-400">Modules</span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-tight">7/12 enabled</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <button className="w-full py-4 bg-[#5D5FEF] text-white rounded-2xl text-[14px] font-black shadow-lg shadow-indigo-100 hover:bg-[#4D4FCF] transition-all">
                View Profile
              </button>
              <button 
                onClick={() => {
                  setShowSuccess(false);
                  setCurrentStep(1);
                }}
                className="w-full py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl text-[14px] font-black hover:bg-slate-50 transition-all"
              >
                Add Another
              </button>
              <button 
                onClick={() => {
                  setShowAddEmployee(false);
                  setShowSuccess(false);
                  setCurrentStep(1);
                }}
                className="text-[14px] font-black text-[#5D5FEF] hover:underline"
              >
                Go to Directory
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-[#F9FAFB] min-h-screen font-['Inter',sans-serif] p-8 md:p-12">
        <div className="max-w-[1000px] mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[13px] font-bold text-slate-400 mb-8">
            <span>People</span>
            <span>/</span>
            <span>Directory</span>
            <span>/</span>
            <span className="text-slate-900">Add Employee</span>
          </div>

          {/* Title Section */}
          <div className="mb-10">
            <h1 className="text-[36px] font-black text-slate-900 tracking-tight mb-2">Add New Employee</h1>
            <p className="text-slate-500 font-medium text-sm">Fill in the employee details, configure access and permissions.</p>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-between max-w-[800px] mb-12 relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200 -z-10 -translate-y-1/2" />
            
            {[
              { step: 1, label: "Basic Info" },
              { step: 2, label: "Role & Access" },
              { step: 3, label: "Module Access" },
              { step: 4, label: "Onboarding" }
            ].map((s) => {
              const isCompleted = currentStep > s.step;
              const isActive = currentStep === s.step;
              return (
                <div key={s.step} className="flex items-center gap-3 bg-[#F9FAFB] px-4">
                  <div className={`size-8 rounded-full flex items-center justify-center text-[13px] font-bold transition-all ${
                    isCompleted ? "bg-emerald-500 text-white" :
                    isActive ? "bg-[#5D5FEF] text-white shadow-lg shadow-indigo-200" : 
                    "bg-white border border-slate-200 text-slate-400"
                  }`}>
                    {isCompleted ? (
                      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    ) : s.step}
                  </div>
                  <span className={`text-[13px] font-bold ${isActive ? "text-slate-900" : isCompleted ? "text-emerald-600" : "text-slate-400"}`}>
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Form Card */}
          <div className="bg-white border border-slate-200 rounded-[32px] p-10 md:p-12 shadow-sm mb-12">
            {currentStep === 1 && (
              <>
                <div className="mb-12">
                  <h2 className="text-[20px] font-black text-slate-900 mb-1">Basic Information</h2>
                  <p className="text-slate-400 text-sm font-medium">Enter the employee's personal and contact details.</p>
                </div>

                {/* Profile Photo */}
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-6">
                    <svg className="size-4 text-[#5D5FEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <label className="text-[14px] font-black text-slate-900 tracking-tight">Profile Photo</label>
                  </div>
                  <div className="size-24 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#5D5FEF] hover:bg-indigo-50 transition-all group">
                    <svg className="size-6 text-slate-300 group-hover:text-[#5D5FEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest group-hover:text-[#5D5FEF]">Upload</span>
                  </div>
                </div>

                {/* Personal Details */}
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-6">
                    <svg className="size-4 text-[#5D5FEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <label className="text-[14px] font-black text-slate-900 tracking-tight">Personal Details</label>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">First Name <span className="text-red-500">*</span></label>
                      <input type="text" defaultValue="Ravi" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">Last Name <span className="text-red-500">*</span></label>
                      <input type="text" defaultValue="Kumar" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">Email Address <span className="text-red-500">*</span></label>
                      <input type="email" defaultValue="ravi.kumar@company.com" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">Phone Number</label>
                      <input type="text" defaultValue="+91 98765 43210" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">Date of Birth</label>
                      <input type="date" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">Gender</label>
                      <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all appearance-none">
                        <option>Select Gender</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-6">
                    <svg className="size-4 text-[#5D5FEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <label className="text-[14px] font-black text-slate-900 tracking-tight">Address</label>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">Address Line 1</label>
                      <input type="text" placeholder="Street address, apartment, suite..." className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="text-[12px] font-black text-slate-900">City</label>
                        <input type="text" placeholder="City" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-black text-slate-900">State</label>
                        <input type="text" placeholder="State" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-black text-slate-900">Zip Code</label>
                        <input type="text" placeholder="Zip Code" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">Country</label>
                      <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all appearance-none">
                        <option>Select Country</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <svg className="size-4 text-[#5D5FEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <label className="text-[14px] font-black text-slate-900 tracking-tight">Emergency Contact</label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">Contact Name</label>
                      <input type="text" defaultValue="Priya Kumar" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">Relationship</label>
                      <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all appearance-none">
                        <option>Select Relationship</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-black text-slate-900">Contact Phone</label>
                    <input type="text" defaultValue="+91 98765 43211" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all" />
                  </div>
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <div className="mb-12">
                  <h2 className="text-[20px] font-black text-slate-900 mb-1">Role & Access Configuration</h2>
                  <p className="text-slate-400 text-sm font-medium">Define the employee's role, reporting structure, and system permissions.</p>
                </div>

                {/* Role & Department */}
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-6">
                    <svg className="size-4 text-[#5D5FEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <label className="text-[14px] font-black text-slate-900 tracking-tight">Role & Department</label>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">Job Title <span className="text-red-500">*</span></label>
                      <input type="text" defaultValue="Full Stack Developer" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">Department <span className="text-red-500">*</span></label>
                      <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all appearance-none">
                        <option>Select Department</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">Reports To <span className="text-red-500">*</span></label>
                      <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all appearance-none">
                        <option>Select Manager</option>
                      </select>
                      <p className="text-[10px] font-bold text-slate-400">This sets the reporting structure in Org Chart</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">Employment Type</label>
                      <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all appearance-none">
                        <option>Select Type</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* System Role & Permissions */}
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-6">
                    <svg className="size-4 text-[#5D5FEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <label className="text-[14px] font-black text-slate-900 tracking-tight">System Role & Permissions</label>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">System Role <span className="text-red-500">*</span></label>
                      <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all appearance-none">
                        <option>Select Role</option>
                      </select>
                      <p className="text-[10px] font-bold text-slate-400">Controls global access level. Detailed per-module access is configured in Step 3.</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">Capacity Limit</label>
                      <input type="number" defaultValue="100" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all" />
                      <p className="text-[10px] font-bold text-slate-400">Max workload capacity score. Used for Workload calculations.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[12px] font-black text-slate-900">Data Permissions</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { label: "View own data", checked: true },
                        { label: "Create records", checked: true },
                        { label: "Edit own records", checked: true },
                        { label: "Delete records", checked: false },
                        { label: "View team data", checked: false },
                        { label: "Edit team data", checked: false },
                        { label: "Approve actions", checked: false },
                        { label: "Export data", checked: false }
                      ].map((perm) => (
                        <div key={perm.label} className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                          perm.checked ? "bg-indigo-50/50 border-indigo-100" : "bg-slate-50/30 border-slate-100"
                        }`}>
                          <div className={`size-4 rounded flex items-center justify-center border transition-all ${
                            perm.checked ? "bg-[#5D5FEF] border-[#5D5FEF]" : "bg-white border-slate-300"
                          }`}>
                            {perm.checked && (
                              <svg className="size-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            )}
                          </div>
                          <span className={`text-[12px] font-bold ${perm.checked ? "text-[#5D5FEF]" : "text-slate-500"}`}>{perm.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Module Access (Simplified for Step 2 as shown in earlier turn) */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <svg className="size-4 text-[#5D5FEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25a2.25 2.25 0 01-2.25 2.25h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
                    </svg>
                    <label className="text-[14px] font-black text-slate-900 tracking-tight">Module Access</label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "Dashboard", desc: "Personal overview", active: true },
                      { name: "Tasks", desc: "Task management", active: true },
                      { name: "Projects", desc: "Project workspaces", active: true },
                      { name: "Chat", desc: "Internal messaging", active: true },
                      { name: "CRM", desc: "Relationships & deals", active: true },
                      { name: "Events", desc: "Event management", active: false },
                      { name: "Meetings", desc: "Video & scheduling", active: true },
                      { name: "Client Delivery", desc: "Client projects", active: false },
                      { name: "Documents", desc: "File library", active: true },
                      { name: "Social Media", desc: "Brand publishing", active: false },
                    ].map((mod) => (
                      <div key={mod.name} className="flex items-center justify-between p-4 bg-slate-50/50 border border-slate-100 rounded-2xl group hover:border-indigo-200 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="size-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-sm">
                            <div className="size-4 rounded-sm border-2 border-slate-300 group-hover:border-indigo-300" />
                          </div>
                          <div>
                            <p className="text-[14px] font-black text-slate-900 leading-none mb-1">{mod.name}</p>
                            <p className="text-[11px] font-bold text-slate-400">{mod.desc}</p>
                          </div>
                        </div>
                        <button className={`relative w-10 h-5 rounded-full transition-all duration-300 ${mod.active ? 'bg-[#5D5FEF]' : 'bg-slate-200'}`}>
                          <div className={`absolute top-1 size-3 bg-white rounded-full transition-all duration-300 ${mod.active ? 'left-6' : 'left-1'}`} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {currentStep === 3 && (
              <>
                <div className="mb-12">
                  <h2 className="text-[20px] font-black text-slate-900 mb-1">Module Access & Permissions</h2>
                  <p className="text-slate-400 text-sm font-medium">Configure which modules this employee can access and their permission level within each.</p>
                </div>

                {/* Access Preset */}
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-6">
                    <svg className="size-4 text-[#5D5FEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <label className="text-[14px] font-black text-slate-900 tracking-tight">Access Preset</label>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                      { name: "Full Access", desc: "All modules enabled", badge: "Admin", active: false },
                      { name: "Standard", desc: "Core modules", badge: "Employee", active: true },
                      { name: "Limited", desc: "View-only essentials", badge: "Viewer", active: false },
                      { name: "Custom", desc: "Manual configuration", badge: "Custom", active: false },
                    ].map((p) => (
                      <div key={p.name} className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                        p.active ? "border-[#5D5FEF] bg-white shadow-lg shadow-indigo-50" : "border-slate-100 bg-white hover:border-slate-200"
                      }`}>
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`size-4 rounded-full border-2 flex items-center justify-center ${p.active ? "border-[#5D5FEF]" : "border-slate-200"}`}>
                            {p.active && <div className="size-1.5 bg-[#5D5FEF] rounded-full" />}
                          </div>
                          <span className="text-[14px] font-black text-slate-900">{p.name}</span>
                        </div>
                        <p className="text-[11px] font-bold text-slate-400 mb-4">{p.desc}</p>
                        <span className="px-2.5 py-0.5 bg-slate-50 border border-slate-100 rounded text-[9px] font-black text-slate-400 uppercase tracking-widest">{p.badge}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Module Permissions */}
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-6">
                    <svg className="size-4 text-[#5D5FEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                    <label className="text-[14px] font-black text-slate-900 tracking-tight">Module Permissions</label>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left border-b border-slate-100">
                          <th className="text-[10px] font-black text-slate-400 uppercase tracking-widest pb-4 px-4 w-[200px]">MODULE</th>
                          <th className="text-[10px] font-black text-slate-400 uppercase tracking-widest pb-4 px-4 text-center">ACCESS</th>
                          <th className="text-[10px] font-black text-slate-400 uppercase tracking-widest pb-4 px-4 text-center">VIEW</th>
                          <th className="text-[10px] font-black text-slate-400 uppercase tracking-widest pb-4 px-4 text-center">CREATE</th>
                          <th className="text-[10px] font-black text-slate-400 uppercase tracking-widest pb-4 px-4 text-center">EDIT</th>
                          <th className="text-[10px] font-black text-slate-400 uppercase tracking-widest pb-4 px-4 text-center">DELETE</th>
                          <th className="text-[10px] font-black text-slate-400 uppercase tracking-widest pb-4 px-4 text-center">ADMIN</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {[
                          { name: "Dashboard", access: true, view: true, create: true, edit: true, delete: false, admin: false },
                          { name: "Tasks", access: true, view: true, create: true, edit: true, delete: false, admin: false },
                          { name: "Projects", access: true, view: true, create: true, edit: true, delete: false, admin: false },
                          { name: "Chat", access: true, view: true, create: true, edit: true, delete: false, admin: false },
                          { name: "CRM", access: true, view: true, create: false, edit: false, delete: false, admin: false },
                          { name: "Events", access: false, view: false, create: false, edit: false, delete: false, admin: false },
                          { name: "Meetings", access: true, view: true, create: false, edit: false, delete: false, admin: false },
                          { name: "Client Delivery", access: false, view: false, create: false, edit: false, delete: false, admin: false },
                          { name: "Documents", access: true, view: true, create: true, edit: true, delete: false, admin: false },
                          { name: "Social Media", access: false, view: false, create: false, edit: false, delete: false, admin: false },
                          { name: "Leave", access: false, view: false, create: false, edit: false, delete: false, admin: false },
                          { name: "Announcements", access: false, view: false, create: false, edit: false, delete: false, admin: false },
                        ].map((m) => (
                          <tr key={m.name} className={`${!m.access ? "bg-slate-50/50 grayscale opacity-40" : ""}`}>
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-3">
                                <div className="size-8 rounded-lg border border-slate-100 bg-white flex items-center justify-center">
                                  <div className="size-3 border border-slate-300" />
                                </div>
                                <span className="text-[13px] font-black text-slate-900">{m.name}</span>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-center">
                              <div className="flex justify-center">
                                <button className={`relative w-8 h-4 rounded-full transition-all ${m.access ? "bg-[#5D5FEF]" : "bg-slate-200"}`}>
                                  <div className={`absolute top-0.5 size-3 bg-white rounded-full transition-all ${m.access ? "left-4.5" : "left-0.5"}`} />
                                </button>
                              </div>
                            </td>
                            {["view", "create", "edit", "delete", "admin"].map((action) => (
                              <td key={action} className="py-4 px-4 text-center">
                                <div className="flex justify-center">
                                  <div className={`size-4 rounded border flex items-center justify-center transition-all ${
                                    m[action as keyof typeof m] ? "bg-[#5D5FEF] border-[#5D5FEF]" : "bg-white border-slate-200"
                                  }`}>
                                    {m[action as keyof typeof m] && (
                                      <svg className="size-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                      </svg>
                                    )}
                                  </div>
                                </div>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Data Scope */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <svg className="size-4 text-[#5D5FEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
                    </svg>
                    <label className="text-[14px] font-black text-slate-900 tracking-tight">Data Scope</label>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900 ml-1">Data Visibility</label>
                      <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all appearance-none">
                        <option>Select Visibility</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900 ml-1">Export Permission</label>
                      <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all appearance-none">
                        <option>Select Permission</option>
                      </select>
                    </div>
                  </div>
                </div>
              </>
            )}

            {currentStep === 4 && (
              <>
                <div className="mb-12">
                  <h2 className="text-[20px] font-black text-slate-900 mb-1">Onboarding Setup</h2>
                  <p className="text-slate-400 text-sm font-medium">Configure the onboarding experience and initial assignments for this employee.</p>
                </div>

                {/* Onboarding Template */}
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-6">
                    <svg className="size-4 text-[#5D5FEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .407.16.795.446 1.082a1.531 1.531 0 001.082.446c.23 0 .453-.035.664-.1L18.6 15.35c.065-.21.1-.433.1-.664 0-.407-.16-.795-.446-1.082a1.531 1.531 0 00-1.082-.446c-.23 0-.453.035-.664.1L11.35 3.836zm-3.17 17.174a4.5 4.5 0 116.364-6.364 4.5 4.5 0 01-6.364 6.364z" />
                    </svg>
                    <label className="text-[14px] font-black text-slate-900 tracking-tight">Onboarding Template</label>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">Template</label>
                      <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all appearance-none">
                        <option>Select Template</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">Start Date <span className="text-red-500">*</span></label>
                      <input type="date" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">Buddy / Mentor</label>
                      <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all appearance-none">
                        <option>Select Mentor</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">Probation Period</label>
                      <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all appearance-none">
                        <option>Select Period</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Onboarding Checklist */}
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-6">
                    <svg className="size-4 text-[#5D5FEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <label className="text-[14px] font-black text-slate-900 tracking-tight">Onboarding Checklist</label>
                  </div>
                  
                  <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-6">
                    <p className="text-[13px] font-black text-slate-900 mb-6">Engineering Onboarding Tasks (8 items)</p>
                    <div className="space-y-4">
                      {[
                        { label: "Complete HR paperwork", date: "Day 1", checked: true },
                        { label: "Set up development environment", date: "Day 1", checked: true },
                        { label: "Review codebase documentation", date: "Day 2", checked: false },
                        { label: "Meet with team lead (1:1)", date: "Day 2", checked: false },
                        { label: "Complete security training", date: "Week 1", checked: false },
                        { label: "First code review", date: "Week 1", checked: false },
                        { label: "Attend sprint planning", date: "Week 2", checked: false },
                        { label: "30-day check-in with manager", date: "Day 30", checked: false },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center justify-between group">
                          <div className="flex items-center gap-4">
                            <div className={`size-5 rounded border flex items-center justify-center transition-all ${
                              item.checked ? "bg-[#5D5FEF] border-[#5D5FEF]" : "bg-white border-slate-200"
                            }`}>
                              {item.checked && (
                                <svg className="size-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                              )}
                            </div>
                            <span className={`text-[13px] font-bold ${item.checked ? "text-slate-400 line-through" : "text-slate-600"}`}>
                              {item.label}
                            </span>
                          </div>
                          <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{item.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Initial Assignments */}
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-6">
                    <svg className="size-4 text-[#5D5FEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25v-4.162c0-1.24-.77-2.348-1.942-2.777l-3.947-1.447c-.83-.304-1.492-.931-1.842-1.734l-1.32-3.037a2.25 2.25 0 00-4.114 0l-1.32 3.037c-.35.803-1.012 1.43-1.842 1.734l-3.947 1.447c-1.172.429-1.942 1.537-1.942 2.777z" />
                    </svg>
                    <label className="text-[14px] font-black text-slate-900 tracking-tight">Initial Assignments</label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">Default Project</label>
                      <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all appearance-none">
                        <option>Select Project</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-black text-slate-900">Initial Task Board</label>
                      <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all appearance-none">
                        <option>Select Board</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Welcome Message */}
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-6">
                    <svg className="size-4 text-[#5D5FEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                    <label className="text-[14px] font-black text-slate-900 tracking-tight">Welcome Message</label>
                  </div>
                  <textarea 
                    placeholder="Optional welcome message sent to the employee on their first day..."
                    className="w-full h-32 bg-white border border-slate-200 rounded-2xl p-6 text-sm font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all resize-none"
                  />
                </div>

                {/* Summary Preview */}
                <div className="bg-[#F8F9FF] border border-indigo-100 rounded-2xl p-8">
                  <div className="flex items-center gap-2 mb-8">
                    <svg className="size-4 text-[#5D5FEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .407.16.795.446 1.082a1.531 1.531 0 001.082.446c.23 0 .453-.035.664-.1L18.6 15.35c.065-.21.1-.433.1-.664 0-.407-.16-.795-.446-1.082a1.531 1.531 0 00-1.082-.446c-.23 0-.453.035-.664.1L11.35 3.836zm-3.17 17.174a4.5 4.5 0 116.364-6.364 4.5 4.5 0 01-6.364 6.364z" />
                    </svg>
                    <label className="text-[14px] font-black text-slate-900 tracking-tight">Summary Preview</label>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Employee", val: "Ravi Kumar" },
                      { label: "Role", val: "Full Stack Developer — Engineering" },
                      { label: "Reports to", val: "Ashwini Reddy" },
                      { label: "Start Date", val: "April 1, 2026" },
                      { label: "System Role", val: "Employee" },
                      { label: "Modules", val: "7 of 12 enabled" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between">
                        <span className="text-[13px] font-bold text-slate-500">{row.label}</span>
                        <span className="text-[13px] font-black text-slate-900">{row.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-bold text-slate-400">Step {currentStep} of 4</span>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => currentStep === 1 ? setShowAddEmployee(false) : setCurrentStep(currentStep - 1)}
                className="px-8 py-3 rounded-2xl text-[14px] font-black text-slate-600 hover:bg-slate-100 transition-all border border-slate-200 bg-white"
              >
                {currentStep === 1 ? "Cancel" : "Back"}
              </button>
              {currentStep === 4 ? (
                <>
                  <button 
                    onClick={() => {
                      setShowAddEmployee(false);
                      setCurrentStep(1);
                    }}
                    className="px-8 py-3 rounded-2xl text-[14px] font-black text-slate-600 hover:bg-slate-100 transition-all border border-slate-200 bg-white"
                  >
                    Save as Draft
                  </button>
                  <button 
                    onClick={() => {
                      setShowSuccess(true);
                    }}
                    className="px-8 py-3 rounded-2xl text-[14px] font-black text-white bg-emerald-500 shadow-lg shadow-emerald-100 hover:bg-emerald-600 transition-all flex items-center gap-2"
                  >
                    Create Employee
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </button>
                </>
              ) : (
                <button 
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="px-8 py-3 rounded-2xl text-[14px] font-black text-white bg-[#5D5FEF] shadow-lg shadow-indigo-100 hover:bg-[#4D4FCF] transition-all flex items-center gap-2"
                >
                  {currentStep === 1 ? "Continue to Role & Access" : 
                   currentStep === 2 ? "Continue to Module Access" :
                   "Continue to Onboarding"}
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

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
            <button 
              onClick={() => setShowAddEmployee(true)}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#5D5FEF] text-white rounded-xl text-sm font-bold hover:bg-[#4D4FCF] transition-all shadow-lg shadow-indigo-200"
            >
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
            <EmployeeCard 
              key={i} 
              emp={emp} 
              onEdit={() => {
                setSelectedEmployee(emp);
                setShowEditEmployee(true);
              }}
            />
          ))}
        </div>

        {/* Edit Modal */}
        {showEditEmployee && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowEditEmployee(false)} />
            <div className="relative bg-white rounded-[32px] w-full max-w-[640px] shadow-2xl shadow-slate-900/20 overflow-hidden animate-in fade-in zoom-in duration-300">
              <div className="p-10 md:p-12">
                <div className="mb-10">
                  <h2 className="text-[24px] font-black text-slate-900 mb-1">Edit Employee — {selectedEmployee?.name}</h2>
                  <p className="text-slate-400 text-sm font-medium">Update employee information and system settings</p>
                </div>

                <div className="space-y-10 overflow-y-auto max-h-[60vh] pr-4 custom-scrollbar">
                  {/* Personal */}
                  <div>
                    <h3 className="text-[10px] font-black text-[#5D5FEF] uppercase tracking-widest mb-6">PERSONAL</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[12px] font-black text-slate-900 ml-1">First Name <span className="text-red-500">*</span></label>
                        <input defaultValue={selectedEmployee?.name.split(' ')[0]} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[14px] font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-black text-slate-900 ml-1">Last Name <span className="text-red-500">*</span></label>
                        <input defaultValue={selectedEmployee?.name.split(' ')[1]} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[14px] font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-black text-slate-900 ml-1">Email <span className="text-red-500">*</span></label>
                        <input defaultValue={selectedEmployee?.name.toLowerCase().replace(' ', '.') + "@portal.io"} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[14px] font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-black text-slate-900 ml-1">Phone</label>
                        <input defaultValue="+91 98765 43210" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[14px] font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all" />
                      </div>
                    </div>
                  </div>

                  {/* Work */}
                  <div>
                    <h3 className="text-[10px] font-black text-[#5D5FEF] uppercase tracking-widest mb-6">WORK</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[12px] font-black text-slate-900 ml-1">Job Title</label>
                        <input defaultValue={selectedEmployee?.role} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[14px] font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-black text-slate-900 ml-1">Department</label>
                        <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[14px] font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all appearance-none">
                          <option>{selectedEmployee?.dept}</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-black text-slate-900 ml-1">Reports To</label>
                        <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[14px] font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all appearance-none">
                          <option>Ashwini Reddy</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-black text-slate-900 ml-1">Employment Type</label>
                        <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[14px] font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all appearance-none">
                          <option>Full-time</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* System */}
                  <div>
                    <h3 className="text-[10px] font-black text-[#5D5FEF] uppercase tracking-widest mb-6">SYSTEM</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[12px] font-black text-slate-900 ml-1">System Role</label>
                        <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[14px] font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all appearance-none">
                          <option>Employee</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-black text-slate-900 ml-1">Capacity Limit</label>
                        <input defaultValue={selectedEmployee?.capacity} type="number" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[14px] font-bold text-slate-900 outline-none focus:border-[#5D5FEF] transition-all" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-4 mt-12 pt-8 border-t border-slate-100">
                  <button 
                    onClick={() => setShowEditEmployee(false)}
                    className="px-8 py-3 rounded-2xl text-[14px] font-black text-slate-600 hover:bg-slate-50 transition-all border border-slate-200"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => setShowEditEmployee(false)}
                    className="px-8 py-3 rounded-2xl text-[14px] font-black text-white bg-[#5D5FEF] shadow-lg shadow-indigo-100 hover:bg-[#4D4FCF] transition-all"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
      `}} />
    </div>
  );
}