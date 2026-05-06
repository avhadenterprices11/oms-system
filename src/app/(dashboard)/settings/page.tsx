"use client";

import { SettingsLayout } from "@/components/oms/layouts/SettingsLayout";

export default function PersonalProfilePage() {
  return (
    <SettingsLayout>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-black text-slate-900 tracking-tight mb-1">Personal Profile</h1>
        <p className="text-slate-500 text-sm font-medium">Manage your personal information</p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Profile Photo Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-10 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Profile Photo</h2>
          <p className="text-slate-400 text-xs font-medium mb-8">Upload a photo to personalize your account</p>
          
          <div className="flex items-center gap-8">
            <div className="size-[96px] bg-gradient-to-br from-indigo-300 to-indigo-400 rounded-full flex items-center justify-center text-white text-[36px] font-black shadow-inner">
              RK
            </div>
            <div className="flex items-center gap-6">
              <button className="bg-white border border-slate-200 px-6 py-3 rounded-xl text-[13px] font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
                Change Photo
              </button>
              <button className="text-red-500 text-[13px] font-bold hover:text-red-600 transition-colors">
                Remove
              </button>
            </div>
          </div>
        </section>

        {/* Personal Details Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-10 shadow-sm">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Personal Details</h2>
          <p className="text-slate-400 text-xs font-medium mb-10">Your basic personal information</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">First Name</label>
              <input 
                type="text" 
                defaultValue="Ravi"
                className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#5048e5] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Last Name</label>
              <input 
                type="text" 
                defaultValue="Kumar"
                className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#5048e5] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <label className="text-[13px] font-bold text-slate-900">Email</label>
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-full flex items-center gap-1">
                  <svg className="size-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Verified
                </span>
              </div>
              <input 
                type="email" 
                defaultValue="ravi.kumar@company.com"
                className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#5048e5] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Phone</label>
              <input 
                type="text" 
                defaultValue="+91 98765 43210"
                className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#5048e5] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Date of Birth</label>
              <input 
                type="date" 
                className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#5048e5] transition-colors appearance-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Gender</label>
              <select className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#5048e5] transition-colors appearance-none cursor-pointer">
                <option>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-[#5048e5] px-10 py-3.5 rounded-xl text-[14px] font-bold text-white shadow-[0_10px_20px_-5px_rgba(79,70,229,0.3)] hover:bg-[#4338ca] transition-all">
              Save Changes
            </button>
          </div>
        </section>

        {/* Work Information Section */}
        <section className="bg-white border border-slate-200 rounded-[24px] p-10 shadow-sm mb-12">
          <h2 className="text-[16px] font-bold text-slate-900 mb-1">Work Information</h2>
          <p className="text-slate-400 text-xs font-medium mb-10">These fields are managed by your administrator</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Job Title</label>
              <input 
                type="text" 
                disabled
                defaultValue="Full Stack Developer"
                className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 cursor-not-allowed"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Department</label>
              <input 
                type="text" 
                disabled
                defaultValue="Engineering"
                className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 cursor-not-allowed"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Reports To</label>
              <input 
                type="text" 
                disabled
                defaultValue="Ashwini Reddy"
                className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 cursor-not-allowed"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Employee ID</label>
              <input 
                type="text" 
                disabled
                defaultValue="EMP-024"
                className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 cursor-not-allowed"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-slate-900">Start Date</label>
              <input 
                type="text" 
                disabled
                defaultValue="Jan 15, 2024"
                className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 cursor-not-allowed"
              />
            </div>
          </div>
          <p className="text-[11px] text-slate-400 italic font-medium mt-2">
            Work information is managed by your administrator.
          </p>
        </section>
      </div>
    </SettingsLayout>
  );
}
