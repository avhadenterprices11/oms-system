"use client";
import { useState } from "react";

interface TeamMember {
  email: string;
  role: string;
  department: string;
  jobTitle: string;
  employmentType: string;
  workLocation: string;
  country: string;
}

export function InviteTeamMembersForm() {
  const [members, setMembers] = useState<TeamMember[]>([
    { email: "", role: "Member", department: "", jobTitle: "", employmentType: "full-time", workLocation: "office", country: "" }
  ]);

  const addMember = () => {
    setMembers([...members, { email: "", role: "Member", department: "", jobTitle: "", employmentType: "full-time", workLocation: "office", country: "" }]);
  };

  const updateMember = (index: number, field: keyof TeamMember, value: string) => {
    const updated = [...members];
    updated[index][field] = value;
    setMembers(updated);
  };

  return (
    <div className="space-y-4">
      {members.map((member, index) => (
        <div key={index} className="p-4 bg-white border border-[#e2e8f0] rounded-lg space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="email"
              value={member.email}
              onChange={(e) => updateMember(index, "email", e.target.value)}
              placeholder="Email address *"
              className="col-span-2 h-[34px] px-3 py-2 bg-[#f8fafc] border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
            />
            <input
              type="text"
              value={member.jobTitle}
              onChange={(e) => updateMember(index, "jobTitle", e.target.value)}
              placeholder="Job Title"
              className="h-[34px] px-3 py-2 bg-[#f8fafc] border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
            />
            <select
              value={member.role}
              onChange={(e) => updateMember(index, "role", e.target.value)}
              className="h-[34px] px-3 py-2 bg-[#f8fafc] border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
            >
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Member">Member</option>
              <option value="Viewer">Viewer</option>
            </select>
            <select
              value={member.department}
              onChange={(e) => updateMember(index, "department", e.target.value)}
              className="h-[34px] px-3 py-2 bg-[#f8fafc] border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
            >
              <option value="">Select Department</option>
              <option value="engineering">Engineering</option>
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="hr">HR</option>
              <option value="finance">Finance</option>
            </select>
            <select
              value={member.employmentType}
              onChange={(e) => updateMember(index, "employmentType", e.target.value)}
              className="h-[34px] px-3 py-2 bg-[#f8fafc] border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
            >
              <option value="full-time">Full-time</option>
              <option value="contractor">Contractor</option>
              <option value="freelancer">Freelancer</option>
              <option value="eor">Employer of Record (EOR)</option>
            </select>
            <select
              value={member.workLocation}
              onChange={(e) => updateMember(index, "workLocation", e.target.value)}
              className="h-[34px] px-3 py-2 bg-[#f8fafc] border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
            >
              <option value="office">Office</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
            </select>
            <select
              value={member.country}
              onChange={(e) => updateMember(index, "country", e.target.value)}
              className="h-[34px] px-3 py-2 bg-[#f8fafc] border-[0.556px] border-[#e2e8f0] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5048e5]"
            >
              <option value="">Country</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="IN">India</option>
              <option value="DE">Germany</option>
              <option value="SG">Singapore</option>
            </select>
          </div>
        </div>
      ))}

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          onClick={addMember}
          className="flex-1 bg-white border border-[#e2e8f0] px-4 py-2.5 rounded-xl font-bold text-[13px] text-[#334155] hover:bg-[#f8fafc] hover:border-[#5048e5]/30 transition-all flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M12 4v16m8-8H4"/></svg>
          Add Team Member
        </button>
        <button className="flex-1 bg-white border border-[#e2e8f0] px-4 py-2.5 rounded-xl font-bold text-[13px] text-[#5048e5] hover:bg-[#5048e5]/5 transition-all flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
          Bulk Sync (HRIS/CSV)
        </button>
      </div>

      <label className="flex items-center gap-3 p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl cursor-pointer">
        <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-emerald-600" />
        <div className="flex flex-col">
          <span className="text-[12px] font-bold text-emerald-700">Trigger Auto-Onboarding</span>
          <span className="text-[10px] text-emerald-600/70">Send localized welcome emails and document requests automatically.</span>
        </div>
      </label>
    </div>
  );
}
