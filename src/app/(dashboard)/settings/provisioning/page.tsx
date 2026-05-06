"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";
import { useState } from "react";

export default function UserProvisioningPage() {
  const users = [
    { name: "Sarah Mitchell", email: "sarah@company.com", role: "Super Admin", dept: "Executive", status: "Active", lastActive: "Now", avatar: "S" },
    { name: "Ashwini Reddy", email: "ashwini@company.com", role: "Admin", dept: "Engineering", status: "Active", lastActive: "5 min ago", avatar: "A" },
    { name: "Lisa Chen", email: "lisa@company.com", role: "Admin", dept: "Operations", status: "Active", lastActive: "1 hr ago", avatar: "L" },
    { name: "Ravi Kumar", email: "ravi@company.com", role: "Employee", dept: "Engineering", status: "Active", lastActive: "2 hrs ago", avatar: "R", canDeactivate: true },
    { name: "Jordan Lee", email: "jordan@company.com", role: "Employee", dept: "Engineering", status: "Active", lastActive: "30 min ago", avatar: "J", canDeactivate: true },
    { name: "Marcus Vane", email: "marcus@company.com", role: "Employee", dept: "Design", status: "On Leave", lastActive: "3 days ago", avatar: "M", canDeactivate: true },
    { name: "Nina Okafor", email: "nina@company.com", role: "Employee", dept: "HR", status: "Onboarding", lastActive: "1 day ago", avatar: "N", canDeactivate: true },
    { name: "Tomas Garcia", email: "tomas@company.com", role: "Manager", dept: "Sales", status: "Active", lastActive: "4 hrs ago", avatar: "T" },
  ];

  const getRoleStyle = (role: string) => {
    switch (role) {
      case "Super Admin": return "bg-purple-50 text-purple-600 border-purple-100";
      case "Admin": return "bg-blue-50 text-blue-600 border-blue-100";
      case "Manager": return "bg-emerald-50 text-emerald-600 border-emerald-100";
      default: return "bg-slate-50 text-slate-500 border-slate-100";
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Active": return "bg-emerald-50 text-emerald-600 border-emerald-100";
      case "On Leave": return "bg-amber-50 text-amber-600 border-amber-100";
      case "Onboarding": return "bg-indigo-50 text-indigo-600 border-indigo-100";
      default: return "bg-slate-50 text-slate-400 border-slate-100";
    }
  };

  return (
    <SettingsLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">User Management</h1>
          <p className="text-slate-500 text-sm font-medium">Manage user accounts, roles, and access</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-2.5 rounded-xl text-[14px] font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all shadow-sm">
            Bulk Import
          </button>
          <button className="bg-[#5048e5] px-6 py-2.5 rounded-xl text-[14px] font-bold text-white shadow-md hover:bg-[#4338ca] transition-all flex items-center gap-2">
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            Invite User
          </button>
        </div>
      </div>

      {/* Main Content Card */}
      <section className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm mb-12">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative w-40">
              <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-500 outline-none appearance-none cursor-pointer">
                <option>Filter {i}</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}/></svg>
              </div>
            </div>
          ))}
          <div className="relative flex-1 max-w-sm ml-auto">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input 
              type="text" 
              placeholder="Search users..."
              className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs font-bold text-slate-600 placeholder:text-slate-400 outline-none focus:border-indigo-600 transition-colors"
            />
          </div>
        </div>

        {/* User Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-50">
                {["USER", "EMAIL", "ROLE", "DEPARTMENT", "STATUS", "LAST ACTIVE", "ACTIONS"].map((h) => (
                  <th key={h} className="text-left py-4 px-2 text-[10px] font-black text-slate-400 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {users.map((user, idx) => (
                <tr key={idx} className="group hover:bg-slate-50/30 transition-colors">
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-3">
                      <div className="size-9 bg-indigo-100 rounded-full flex items-center justify-center text-[13px] font-black text-indigo-600 border-2 border-white shadow-sm shrink-0">
                        {user.avatar}
                      </div>
                      <span className="text-[13px] font-bold text-slate-900 tracking-tight">{user.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-[13px] font-medium text-slate-500">{user.email}</td>
                  <td className="py-4 px-2">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black border tracking-tight ${getRoleStyle(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-2 text-[13px] font-medium text-slate-600">{user.dept}</td>
                  <td className="py-4 px-2">
                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black border uppercase tracking-wider ${getStatusStyle(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-2 text-[13px] font-medium text-slate-500">{user.lastActive}</td>
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-2">
                      <button className="text-[12px] font-bold text-[#5048e5] hover:underline">Edit</button>
                      {user.canDeactivate && (
                        <button className="text-[12px] font-bold text-rose-500 hover:underline">Deactivate</button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="mt-8 flex items-center justify-between border-t border-slate-50 pt-8">
          <span className="text-[12px] font-bold text-slate-400">Showing 8 of 24 users</span>
          <div className="flex items-center gap-2">
            <button className="px-4 py-1.5 rounded-lg border border-slate-200 text-[12px] font-bold text-slate-600 hover:bg-slate-50 transition-all">Previous</button>
            <button className="px-4 py-1.5 rounded-lg border border-slate-200 text-[12px] font-bold text-slate-600 hover:bg-slate-50 transition-all">Next</button>
          </div>
        </div>
      </section>
    </SettingsLayout>
  );
}
