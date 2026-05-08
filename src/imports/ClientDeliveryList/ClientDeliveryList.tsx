"use client";
import React from "react";
import imgProfilePic from "./8903f064e14b604493b2a186385c8300714f69a3.png";
import imgImageBackground from "./531f081861838a432e1880f56f85065d54914caf.png";
import imgImageBackground1 from "./ffbf7749886e8193f90d72cdc76bfcc79e0040af.png";
import imgImageBackground2 from "./00c19105c43826d38eaca330bc0ea076b5194709.png";
import imgImageBackground3 from "./46903956a95c0a262e4a9e4f0134d6b4e0bd1d48.png";
import imgImageBackground4 from "./16cc911ba525ef53fe1d4ea80f65f24b2454a027.png";

// --- Types & Constants ---

const GRID_TEMPLATE = "grid-cols-[1.5fr_1.2fr_120px_1.2fr_150px_100px]";

const STATUS_CONFIGS: Record<string, { bg: string; text: string; dot: string }> = {
  "On Track": { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  "At Risk": { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  "Active": { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
  "Completed": { bg: "bg-slate-50", text: "text-slate-700", dot: "bg-slate-500" },
  "Planning": { bg: "bg-indigo-50", text: "text-indigo-700", dot: "bg-indigo-500" },
};

// --- Sub-components ---

function StatusBadge({ status }: { status: string }) {
  const config = STATUS_CONFIGS[status] || STATUS_CONFIGS["Active"];
  return (
    <div className={`${config.bg} ${config.text} px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit`}>
      <span className={`size-1.5 rounded-full ${config.dot}`} />
      {status}
    </div>
  );
}

function ProgressBar({ progress, color = "bg-indigo-600" }: { progress: number; color?: string }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-tight">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>
      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full transition-all duration-500`} 
          style={{ width: `${progress}%` }} 
        />
      </div>
    </div>
  );
}

function DeliveryRow({ client, org, owner, ownerImg, status, timeline, remaining, progress, progressColor }: any) {
  return (
    <div className={`grid ${GRID_TEMPLATE} items-center px-6 py-4 border-b border-slate-100 hover:bg-slate-50/50 transition-colors group`}>
      {/* Client & Organisation */}
      <div className="flex items-center gap-3">
        <div className="size-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs border border-indigo-100 uppercase">
          {client.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-bold text-slate-900 truncate">{client}</span>
          <span className="text-[11px] text-slate-500 truncate">{org}</span>
        </div>
      </div>

      {/* Delivery Owner */}
      <div className="flex items-center gap-2.5">
        <div className="size-6 rounded-full bg-slate-100 overflow-hidden ring-2 ring-white">
          <img src={ownerImg} alt={owner} className="size-full object-cover" />
        </div>
        <span className="text-sm font-medium text-slate-700">{owner}</span>
      </div>

      {/* Status */}
      <div>
        <StatusBadge status={status} />
      </div>

      {/* Timeline */}
      <div className="flex flex-col">
        <span className="text-xs font-semibold text-slate-900">{timeline}</span>
        <span className="text-[10px] text-slate-500 font-medium">{remaining}</span>
      </div>

      {/* Progress */}
      <div className="pr-8">
        <ProgressBar progress={progress} color={progressColor} />
      </div>

      {/* Actions */}
      <div className="flex justify-end">
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
          <svg className="size-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/></svg>
          Actions
        </button>
      </div>
    </div>
  );
}

// --- Main Components ---

export default function ClientDeliveryList() {
  return (
    <div className="w-full flex flex-col scrollbar-hide bg-[#f8fafc] min-h-screen">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200/60 pt-8 pb-10 px-8">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-8">
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Client Delivery</h1>
              <p className="text-slate-500 text-base font-medium">Manage and track all active client delivery streams across the organization</p>
            </div>
            <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"/></svg>
              Add Delivery Record
            </button>
          </div>

          {/* Filters Bar */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg shadow-sm">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Status:</span>
              <span className="text-xs font-bold text-slate-900">All</span>
              <svg className="size-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg shadow-sm">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Owner:</span>
              <span className="text-xs font-bold text-slate-900">All Members</span>
              <svg className="size-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
            </div>
            <button className="ml-auto text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-widest">Reset Filters</button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="p-8 max-w-[1400px] mx-auto w-full">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className={`grid ${GRID_TEMPLATE} bg-slate-50/80 px-6 py-4 border-b border-slate-200`}>
            {["Client & Organisation", "Delivery Owner", "Status", "Timeline", "Progress", ""].map((header, i) => (
              <span key={i} className="text-[10px] font-extrabold text-slate-500 uppercase tracking-[1px]">
                {header}
              </span>
            ))}
          </div>

          {/* Table Body */}
          <div className="flex flex-col">
            <DeliveryRow 
              client="Nexgen Logistics"
              org="Global Supply Chain Inc."
              owner="Marcus Wright"
              ownerImg={imgImageBackground.src}
              status="On Track"
              timeline="Jan 12 - Jun 30, 2024"
              remaining="142 days remaining"
              progress={65}
              progressColor="bg-indigo-600"
            />
            <DeliveryRow 
              client="Skyline Fintech"
              org="Cloud Capital Group"
              owner="Sarah Chen"
              ownerImg={imgImageBackground1.src}
              status="At Risk"
              timeline="Feb 01 - Apr 15, 2024"
              remaining="Milestone overdue"
              progress={32}
              progressColor="bg-amber-500"
            />
            <DeliveryRow 
              client="Aero Ventures"
              org="North Atlantic Aerospace"
              owner="Alex Rivera"
              ownerImg={imgImageBackground2.src}
              status="Active"
              timeline="Mar 10 - Dec 20, 2024"
              remaining="Kickoff complete"
              progress={12}
              progressColor="bg-blue-600"
            />
            <DeliveryRow 
              client="Health Metrics"
              org="BioTech Solutions Ltd"
              owner="James Wilson"
              ownerImg={imgImageBackground3.src}
              status="Planning"
              timeline="Apr 20 - Nov 15, 2024"
              remaining="Pre-delivery phase"
              progress={0}
              progressColor="bg-indigo-600"
            />
            <DeliveryRow 
              client="Velocity Commerce"
              org="Retail Dynamics"
              owner="David Thorne"
              ownerImg={imgImageBackground4.src}
              status="Completed"
              timeline="Nov 01, 2023 - Mar 01, 2024"
              remaining="Delivered successfully"
              progress={100}
              progressColor="bg-emerald-500"
            />
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 bg-slate-50/50 flex items-center justify-between border-t border-slate-100">
            <p className="text-[11px] font-medium text-slate-500">
              Showing <span className="font-bold text-slate-900">1-5</span> of <span className="font-bold text-slate-900">42</span> delivery records
            </p>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[11px] font-bold text-slate-400 cursor-not-allowed">Previous</button>
              <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[11px] font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}